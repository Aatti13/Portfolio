import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";


function HomePage(){
  return(
    <div className="homePage">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default HomePage;