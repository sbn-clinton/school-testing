import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-14 font-sans py-4">
      <h1 className="text-lg md:text-2xl font-extrabold text-slate-800 text-center">
        Testimonials
      </h1>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center max-w-3xl mx-auto px-5">
        <Image
          src={"/images/testimonial5.png"}
          alt="hero"
          width={150}
          height={150}
          className="rounded-full"
        />
        <p className="text-xs md:text-sm font-light text-slate-500 w-[90%] text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          aliquid totam nisi culpa error architecto cupiditate adipisci aut,
          quibusdam itaque possimus laborum maiores, quisquam molestias omnis
          mollitia pariatur tenetur maxime blanditiis quia nemo non unde autem.
          Ipsum placeat ea error!
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
