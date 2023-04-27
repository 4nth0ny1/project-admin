import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between py-6 px-4 bg-blue-400">
        <h2 className="text-2xl">NextJS Project Admin App</h2>
        <ul className="flex flex-row">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
