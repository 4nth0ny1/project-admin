import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Link from "next/link";

export default function TaskItem({ task }) {
  const exploreLink = `/dashboard/${task.id}`;
  return (
    <>
      <tbody key={task.id}>
        <tr className="border-b-2 text-center">
          <Link href={exploreLink}>
            <td>{task.title}</td>
          </Link>
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
