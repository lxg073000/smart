import useCollection from "../hooks/useCollection";
import GoalList from "../components/GoalList";
import GoalForm from "../components/GoalForm";

export default function Home() {
  //update collection ref with logged in user
  const { documents: goals } = useCollection("users/demo/goals");

  return (
    <div>
      {goals && <GoalList goals={goals} />}
      <GoalForm />
    </div>
  );
}
