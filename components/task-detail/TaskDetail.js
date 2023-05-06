export default function TaskDetail(props) {
  const { id, title, description, difficulty, completionDate } = props;
  return (
    <>
      <h2>Task Detail Page</h2>
      <div key={id}>
        <h2>{title}</h2>
      </div>
    </>
  );
}
