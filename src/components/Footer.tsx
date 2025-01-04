const Footer = () => {
  return (
    <div className="py-16  font-sans flex flex-col gap-10  bg-[#282531]">
      <div className="flex flex-col md:flex-row  max-w-6xl mx-auto px-4 gap-10 ">
        <div className="md:w-2/5">
          <h1 className="text-xs md:text-base  text-slate-200 md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
            voluptatum. Iusto unde dolore quisquam id!
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:w-3/5">
          <div className="flex flex-col gap-3 md:w-1/3">
            <h1 className="text-xs md:text-sm font-extrabold text-slate-300">
              Course
            </h1>
            <ul className="flex flex-col gap-2 text-xs md:text-sm font-light text-slate-400">
              <li className="">Graphic Design</li>
              <li className="">Web Design</li>
              <li className="">Business</li>
              <li className="">Marketing</li>
              <li className="">Engineering</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 md:w-1/3">
            <h1 className="text-xs md:text-sm font-extrabold text-slate-300">
              Terms
            </h1>
            <ul className="flex flex-col gap-2 text-xs md:text-sm font-light text-slate-400">
              <li className="">Graphic Design</li>
              <li className="">Web Design</li>
              <li className="">Business</li>
              <li className="">Marketing</li>
              <li className="">Engineering</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 md:w-1/3">
            <h1 className="text-xs md:text-sm font-extrabold text-slate-300">
              About Us
            </h1>
            <ul className="flex flex-col gap-2 text-xs md:text-sm font-light text-slate-400">
              <li className="">Graphic Design</li>
              <li className="">Web Design</li>
              <li className="">Business</li>
              <li className="">Marketing</li>
              <li className="">Engineering</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-xs md:text-sm font-light text-slate-400 text-center">
        copyright © 2025 SBN- EDU
      </p>
    </div>
  );
};

export default Footer;
