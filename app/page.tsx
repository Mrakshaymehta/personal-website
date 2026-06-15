import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StatusBar from "@/components/StatusBar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pb-7">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Terminal />
      <Contact />
      <Footer />
      <StatusBar />
    </main>
  );
}
