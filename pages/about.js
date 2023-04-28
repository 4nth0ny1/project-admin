import UndrawTeamUpSvg from "@/components/svgs/UndrawTeamUpSvg";

export default function AboutPage() {
  return (
    <>
      <div className="flex flex-row justify-center p-16">
        <h2 className="text-5xl">What is Project Admin?</h2>
      </div>
      <div className="flex flex-row justify-center px-16 pb-6">
        <p className="w-1/2 text-center">
          Project Admin is a simple way to keep track of one or many projects at
          the same time. With it you can breakdown your project into many
          bite-size tasks and make sure each one is done on time and to the
          highest quality.
        </p>
      </div>
      <div className="flex flex-row justify-center px-16 pb-6">
        <p className="w-1/2 text-center">
          These days it's not enough to keep a physical calendar at the office.
          You need something that can handle serious workloads. Something that
          scales with the ebbs and flows of daily life.
        </p>
      </div>
      <UndrawTeamUpSvg />
    </>
  );
}
