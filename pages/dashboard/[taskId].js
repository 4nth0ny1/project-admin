import TaskDetail from "@/components/task-detail/TaskDetail";
import { useRouter } from "next/router";
import { getTaskById } from "../../dummy-data.js";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

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

export const getServerSideProps = withPageAuthRequired();
