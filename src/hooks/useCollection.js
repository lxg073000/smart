import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";

//firebase imports
import { collection, onSnapshot, query, where } from "firebase/firestore";

const useCollection = (_collection, _queryArgs) => {
  const [documents, setDocuments] = useState(null);
  const queryArgs = useRef(_queryArgs).current;

  useEffect(() => {
    let ref = collection(db, _collection);
    if (queryArgs) {
      ref = query(ref, where(...queryArgs));
    }

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
  }, [_collection, queryArgs]);

  return { documents };
};

export default useCollection;
