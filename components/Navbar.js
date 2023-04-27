import Link from "next/link";
import LoginLogoutContainer from "./LoginLogoutContainer";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <div className="flex flex-row justify-between py-6 px-4 border-2 border-bottom">
        <h2 className="text-2xl">NextJS Project Admin App</h2>
        <ul className="flex flex-row">
          <li className="px-4">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4">
            <Link href="/about">About</Link>
          </li>
          {user && (
            <li className="px-4">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          )}
          <li className="px-4">
            <LoginLogoutContainer />
          </li>
          {user && (
            <div className="flex flex-row">
              <p className="px-4">{user.email}</p>
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
