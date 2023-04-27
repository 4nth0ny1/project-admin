import Profile from "@/components/ProfileInfo";
import LoginLogoutContainer from "@/components/LoginLogoutContainer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>project-admin home page</h1>
      <Link href="/about">About</Link>
      <LoginLogoutContainer />
      <Profile />
    </div>
  );
}
