import Image from "next/image";

const Achievements = () => {
  return (
    <div className=" font-sans py-10 md:py-16 flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 items-center max-w-6xl mx-auto px-4 gap-10 justify-center">
        <div className="flex flex-col items-center justify-center text-center border border-slate-400 w-fit rounded-lg p-4 gap-2">
          <Image
            src={"/images/achieve 1.png"}
            alt="hero"
            width={50}
            height={50}
          />
          <h1 className="text-lg md:text-2xl font-bold text-slate-800">
            1500+ Topics
          </h1>
          <p className="text-xs md:text-sm font-light text-slate-500">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center border border-slate-400 w-fit rounded-lg p-4 gap-2">
          <Image
            src={"/images/achieve 2.png"}
            alt="hero"
            width={50}
            height={50}
          />
          <h1 className="text-lg md:text-2xl font-bold text-slate-800">
            1800+ Students
          </h1>
          <p className="text-xs md:text-sm font-light text-slate-500">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center border border-slate-400 w-fit rounded-lg p-4 gap-2">
          <Image
            src={"/images/achieve 3.png"}
            alt="hero"
            width={50}
            height={50}
          />
          <h1 className="text-lg md:text-2xl font-bold text-slate-800">
            9K+ Test Token
          </h1>
          <p className="text-xs md:text-sm font-light text-slate-500">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center border border-slate-400 w-fit rounded-lg p-4 gap-2">
          <Image
            src={"/images/achieve 1.png"}
            alt="hero"
            width={50}
            height={50}
          />
          <h1 className="text-lg md:text-2xl font-bold text-slate-800">
            200+ Courses
          </h1>
          <p className="text-xs md:text-sm font-light text-slate-500">
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
