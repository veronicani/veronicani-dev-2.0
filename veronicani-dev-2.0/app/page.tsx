import About from "./components/About";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
