import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "About Me" },
  { id: "skills", title: "My Skills" },
  { id: "projects", title: "Selected Projects" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Get In Touch" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
