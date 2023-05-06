import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function TaskItem(props) {
  const { id, title, description, difficulty, completionDate } = props;
  return (
    <>
      <tbody key={id}>
        <tr className="border-b-2 text-center">
          <td>{title}</td>
          <td>{description}</td>
          <td>{difficulty}</td>
          <td>{completionDate}</td>
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
