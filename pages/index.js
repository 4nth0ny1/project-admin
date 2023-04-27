import Profile from "@/components/ProfileInfo";
import LoginLogoutContainer from "@/components/LoginLogoutContainer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl text-center">project-admin home page</h1>
      <Link href="/about">About</Link>
      <LoginLogoutContainer />
      <Profile />
    </div>
  );
}
