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
    <div className="container mx-auto p-4 md:px-8">
      <div className="lg:flex lg:justify-around lg:gap-12">
        <header
          className="space-y-4 pb-4 md:py-8 lg:pt-16 lg:pb-20 lg:sticky lg:top-0 lg:max-h-screen
        lg:flex lg:flex-col lg:justify-between"
        >
          <Heading />
          <Navigation />
          <SocialMedia />
        </header>
        <main className="max-w-2xl md:pb-8 lg:pt-16 lg:pb-20">
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
