import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-inherit bg-opacity-25 backdrop-blur-sm z-50 font-sans">
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-6xl py-1">
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={"/images/icon.png"} alt="Logo" width={30} height={30} />
          <span className="text-base md:text-xl font-extrabold text-slate-800">
            SBN- <span className="text-[#21B573]">EDU</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10 font-medium text-slate-800">
          <Link href="/">Books</Link>
          <Link href="/">Courses</Link>
          <Link href="/">Others</Link>
          <Link href="/">Blog</Link>
          <Link
            href="/"
            className="btn bg-[#21B573] text-slate-200 rounded-full hover:bg-[#1B9A5C]"
          >
            Sign In
          </Link>
        </div>
        <GiHamburgerMenu className="text-slate-800 w-6 h-6 md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
