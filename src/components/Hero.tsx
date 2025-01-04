import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#F0FFF0] py-20 md:py-28 font-sans">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 gap-5">
        <div className="flex flex-col gap-3 md:gap-7 md:w-5/12">
          <p className="font-extralight text-xs md:text-sm text-[#FD511A]">
            Are you read to Learn?
          </p>
          <h1 className="font-extrabold text-2xl md:text-5xl text-black">
            Learn With fun on{" "}
            <span className="text-[#21B573]">any schedule</span>
          </h1>
          <p className="text-sm md:text-lg text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            dignissimos, voluptate consequuntur quisquam odit aperiam?
          </p>
          <button className="btn btn-xs md:btn-md bg-[#21B573] text-slate-200 rounded-full hover:bg-[#1B9A5C] w-fit ">
            Get Started
          </button>
        </div>
        <div className="flex items-center justify-center  md:w-7/12">
          <Image src={"/images/hero.png"} alt="hero" width={600} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
