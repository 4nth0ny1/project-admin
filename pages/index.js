import UndrawAnalysisSvg from "../components/UndrawAnalysisSvg";
import CardSection from "../components/CardSection";
import LoginLogoutContainer from "@/components/LoginLogoutContainer";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function HomePage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <div className="flex flex-row justify-center">
        <h1 className="text-5xl flex flex-row justify-end w-1/2 px-16 pb-4 pt-16">
          Project Admin App
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <h2 className="text-2xl flex flex-row justify-end w-1/2 px-16 pb-16">
          built with NextJS, Tailwind CSS
        </h2>
      </div>
      <UndrawAnalysisSvg />
      <CardSection />
      <div className="flex flex-row justify-center bg-[#6c63ff] text-white p-32">
        <p className="w-1/2 text-center text-2xl">
          Whether it's a tech, business, or your personal life, Project Admin is
          your one stop shop for optimization and hitting your goals on time
          with the highest quality.
        </p>
      </div>
      {user ? (
        <div className="flex flex-row justify-center p-32 pb-0">
          <p className="w-1/2 text-center text-2xl">You're in {user.name}!</p>
        </div>
      ) : (
        <div className="flex flex-row justify-center p-32 pb-0">
          <p className="w-1/2 text-center text-2xl">
            Login in to Optimize Your Life
          </p>
        </div>
      )}
      <div className="flex flex-row justify-center p-32 pt-4">
        <div className="border-2 px-12 py-6 bg-green-500 rounded-xl">
          <LoginLogoutContainer />
        </div>
      </div>
    </div>
  );
}
