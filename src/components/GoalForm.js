import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";

export default function GoalForm() {
  const [newGoal, setnewGoal] = useState("");
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "goals");
    addDoc(ref, { title: newGoal, uid: user.uid })
      .then(setnewGoal(""))
      .catch((err) => console.log(err));

    setnewGoal("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new goal:</span>
        <input
          required
          type="text"
          onChange={(e) => setnewGoal(e.target.value)}
          value={newGoal}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
