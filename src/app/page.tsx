import Achievements from "@/components/Achievements";
import Course from "@/components/Course";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:gap-14 h-screen">
      <Hero />
      <Achievements />
      <Course />
      <Testimonial />
      <Footer />
    </div>
  );
}
