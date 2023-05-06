import { getAllTasks } from "../dummy-data.js";

// create a new table for each date and it's corresponding tasks.

export default function MainDashboard() {
  const data = getAllTasks();

  return (
    <>
      {data.map((d) => (
        <div className="border-2 my-4" key={d.id}>
          <div>Completion Date: {d.completionDate}</div>
          <table className="table-auto w-full">
            <thead className="bg-slate-400">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{d.title}</td>
                <td>{d.description}</td>
                <td>{d.difficulty}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}
