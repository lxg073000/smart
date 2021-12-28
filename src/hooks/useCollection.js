import { useState, useEffect } from "react";
import { db } from "../firebase";

//firebase imports
import { collection, onSnapshot } from "firebase/firestore";

const useCollection = (_collection) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, _collection);

    // Setup realtime listener pointed at Firestore collection reference
    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
    });

    // Returned Cleanup Function
    return () => unsub();
  }, [_collection]);

  return { documents };
};

export default useCollection;
