import TaskDetail from "@/components/task-detail/TaskDetail";
import { useRouter } from "next/router";
import { getTaskById } from "../../dummy-data.js";

export default function TaskDetailPage() {
  const router = useRouter();
  const taskId = router.query.taskId;
  const task = getTaskById(taskId);

  if (!task) {
    return <p>No task found!</p>;
  }

  return (
    <>
      <TaskDetail
        title={task.title}
        description={task.description}
        difficulty={task.difficulty}
        completionDate={task.completionDate}
      />
    </>
  );
}
