import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function DashboardPage() {
  return (
    <>
      <div className="p-4 m-4 rounded-xl border-2">
        <div className="flex flex-row justify-end">
          <button className="bg-green-200 p-4 rounded-xl">create task</button>
        </div>
        <main>main</main>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
