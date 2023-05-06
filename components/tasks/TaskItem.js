import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function TaskItem({ task }) {
  return (
    <>
      <tbody key={task.id}>
        <tr className="border-b-2 text-center">
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{task.difficulty}</td>
          <td>{task.completionDate}</td>
          <td className="text-center text-yellow-600">
            <AiFillEdit />
          </td>
          <td className="text-center text-red-600">
            <AiFillDelete />
          </td>
        </tr>
      </tbody>
    </>
  );
}
