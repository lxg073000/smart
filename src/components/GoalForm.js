import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function GoalForm() {
  const [newGoal, setnewGoal] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "users/demo/goals");
    addDoc(ref, { title: newGoal })
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
