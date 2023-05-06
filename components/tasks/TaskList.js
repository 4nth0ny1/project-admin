import TaskItem from "./TaskItem";

export default function TaskList({ data }) {
  const taskArray = data.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });
  return <>{taskArray}</>;
}
