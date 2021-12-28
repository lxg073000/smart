import useCollection from "../hooks/useCollection";
import GoalList from "../components/GoalList";
import GoalForm from "../components/GoalForm";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home() {
  const { user } = useAuthContext();
  //update collection ref with logged in user
  const { documents: goals } = useCollection("goals", ["uid", "==", user.uid]);

  return (
    <div>
      {goals && <GoalList goals={goals} />}
      <GoalForm />
    </div>
  );
}
