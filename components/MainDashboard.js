import { sortedTasksByDate } from "../dummy-data.js";
import TaskList from "../components/tasks/TaskList.js";

export default function MainDashboard() {
  const data = sortedTasksByDate();

  return (
    <>
      <div className="border-2 my-4">
        <table className="table-auto w-full">
          <thead className="bg-[#6c63ff]">
            <tr>
              <th className="py-4">Title</th>
              <th>Difficulty</th>
              <th>Completion Date</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <TaskList data={data} />
        </table>
      </div>
    </>
  );
}
