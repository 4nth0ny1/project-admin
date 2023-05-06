import { sortedTasksByDate } from "../dummy-data.js";

// create a new table for each date and it's corresponding tasks.

export default function MainDashboard() {
  const data = sortedTasksByDate();

  return (
    <>
      <div className="border-2 my-4">
        <table className="table-auto w-full">
          <thead className="bg-[#6c63ff]">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Difficulty</th>
              <th>Completion Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {data.map((d) => (
            <tbody key={d.id}>
              <tr className="border-b-2 text-center">
                <td>{d.title}</td>
                <td>{d.description}</td>
                <td>{d.difficulty}</td>
                <td>{d.completionDate}</td>
                <td>EditIcon</td>
                <td>DelIcon</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
