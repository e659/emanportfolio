import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { Skills } from "@/app/components/sections/Skills";
import { Experience } from "@/app/components/sections/Experience";
import { Projects } from "@/app/components/sections/Projects";
import { Services } from "@/app/components/sections/Services";
import { Contact } from "@/app/components/sections/Contact";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707]">
      <Navbar />

      <Hero />

      <About />

      <Skills />
       <Experience />

      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
