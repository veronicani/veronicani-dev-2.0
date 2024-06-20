import About from "./components/About";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <About />
        <Projects />
      </main>
    </>
  );
}
