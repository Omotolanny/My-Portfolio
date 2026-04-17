import Hero from "@/src/component/Hero";
import Skills from "@/src/component/skills";
import Projects from "@/src/component/Projects";
import Testimonial from "../component/Testimonial";
import Contact from "../component/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects/>
      <Testimonial />
      <Contact />
    </main>
  );
}