import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { BsPeople } from "react-icons/bs";
import { Card } from "./ui/card";

const Course = () => {
  return (
    <div className="flex flex-col gap-8 font-sans py-4">
      <h1 className="text-lg md:text-2xl font-extrabold text-slate-800 text-center">
        Online Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center max-w-6xl mx-auto px-10 gap-10 justify-center">
        <Card className="flex flex-col items-center justify-center w-fit rounded-lg p-2 gap-4 border-slate-400">
          <Image
            src={"/images/course1.png"}
            alt="hero"
            width={300}
            height={400}
            className="rounded-lg"
          />
          <div className="text-slate-800 flex flex-col gap-3 w-full">
            <h1 className=" md:text-lg font-bold">Machine Learning</h1>
            <p className="text-xs md:text-sm font-light">Designation</p>
            <button className="btn btn-xs md:btn-sm bg-[#21B573] text-slate-200 w-fit rounded-full hover:bg-[#1B9A5C]">
              Buy Course
            </button>
            <div className="flex items-center justify-between gap-1 text-xs md:text-sm font-light p-1">
              <div className="flex gap-1 items-center">
                <CalendarIcon className="w-5 h-5" />
                <span>Start 20 April, 2021</span>
              </div>
              <div className="flex gap-1 items-center">
                <BsPeople className="text-lg" />
                <span>60 seats</span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col items-center justify-center w-fit rounded-lg p-2 gap-4 border-slate-400">
          <Image
            src={"/images/course2.png"}
            alt="hero"
            width={300}
            height={400}
            className="rounded-lg"
          />
          <div className="text-slate-800 flex flex-col gap-3 w-full">
            <h1 className=" md:text-lg font-bold">Web Development</h1>
            <p className="text-xs md:text-sm font-light">Designation</p>
            <button className="btn btn-xs md:btn-sm bg-[#21B573] text-slate-200 w-fit rounded-full hover:bg-[#1B9A5C]">
              Buy Course
            </button>
            <div className="flex items-center justify-between gap-1 text-xs md:text-sm font-light p-1">
              <div className="flex gap-1 items-center">
                <CalendarIcon className="w-5 h-5" />
                <span>Start 20 April, 2021</span>
              </div>
              <div className="flex gap-1 items-center">
                <BsPeople className="text-lg" />
                <span>60 seats</span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col items-center justify-center w-fit rounded-lg p-2 gap-4 border-slate-400">
          <Image
            src={"/images/course1.png"}
            alt="hero"
            width={300}
            height={400}
            className="rounded-lg"
          />
          <div className="text-slate-800 flex flex-col gap-3 w-full">
            <h1 className=" md:text-lg font-bold">Cyber Security</h1>
            <p className="text-xs md:text-sm font-light">Designation</p>
            <button className="btn btn-xs md:btn-sm bg-[#21B573] text-slate-200 w-fit rounded-full hover:bg-[#1B9A5C]">
              Buy Course
            </button>
            <div className="flex items-center justify-between gap-1 text-xs md:text-sm font-light p-1">
              <div className="flex gap-1 items-center">
                <CalendarIcon className="w-5 h-5" />
                <span>Start 20 April, 2021</span>
              </div>
              <div className="flex gap-1 items-center">
                <BsPeople className="text-lg" />
                <span>60 seats</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Course;
