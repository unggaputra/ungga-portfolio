import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "About Me" },
  { id: "projects", title: "Selected Projects" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Get In Touch" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}
