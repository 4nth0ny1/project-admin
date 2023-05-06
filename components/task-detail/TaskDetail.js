export default function TaskDetail(props) {
  const { id, title, description, difficulty, completionDate } = props;
  return (
    <div className="p-4 text-center">
      <div key={id}>
        <h2 className="text-3xl p-4 underline">{title}</h2>
        <p>{description}</p>
        <p>Difficulty: {difficulty}</p>
        <p>Completion Date: {completionDate}</p>
      </div>
    </div>
  );
}
