import Link from "next/link";
import LoginLogoutContainer from "./LoginLogoutContainer";
import { useUser } from "@auth0/nextjs-auth0/client";
import { GrTask } from "react-icons/gr";

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div className="flex flex-row justify-between py-6 px-4">
        <h2 className="text-2xl pl-4">
          <GrTask />
        </h2>
        <ul className="flex flex-row">
          <li className="px-4 flex flex-col justify-center">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4 flex flex-col justify-center">
            <Link href="/about">About</Link>
          </li>
          {user && (
            <li className="px-4 flex flex-col justify-center">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          )}
          <li className="px-4 flex flex-col justify-center">
            <LoginLogoutContainer />
          </li>
          {user && (
            <div className="flex flex-row">
              <p className="px-4 flex flex-col justify-center">{user.email}</p>
              <img
                className="flex flex-col justify-center w-10 rounded-full"
                src={user.picture}
                alt={user.name}
              />
            </div>
          )}
        </ul>
      </div>
    </>
  );
}
