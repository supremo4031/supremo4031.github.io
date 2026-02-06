import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Competitive } from "./sections/Competitive";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";
import { Resume } from "./sections/Resume";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <Competitive />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

