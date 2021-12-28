export default function GoalList({ goals }) {
  const handleClick = async (id) => {
    console.log(id);
  };

  return (
    <div className="goal-list">
      <ul>
        {goals.map((goal) => (
          <li key={goal.id} onClick={() => handleClick(goal.id)}>
            {goal.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
