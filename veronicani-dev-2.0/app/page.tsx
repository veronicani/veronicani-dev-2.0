import About from "./components/About";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import SocialMedia from "./components/SocialMedia";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 md:mx-[10rem]">
      <header
        className="sm:space-y-3 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3
        lg:flex-col lg:justify-between gap-4"
      >
        <Heading />
        <Navigation />
        <SocialMedia />
      </header>
      <main className="lg:w-2/3">
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
