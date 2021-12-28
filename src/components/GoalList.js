import trashcan from "../assets/trashcan.svg";
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default function GoalList({ goals }) {
  const handleClick = async (id) => {
    const ref = doc(db, "users/demo/goals", id);
    await deleteDoc(ref);
    alert(id + " was deleted");
  };

  return (
    <div className="goal-list">
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <p>{goal.title}</p>
            <img
              src={trashcan}
              className="material-icons-outlined"
              aria-label="delete goal"
              onClick={() => handleClick(goal.id)}
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
}
