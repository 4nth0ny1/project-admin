import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function DashboardPage() {
  return (
    <>
      <h2>dashboard page</h2>
      <p>protected page</p>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
