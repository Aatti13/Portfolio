import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";


function HomePage(){
  return(
    <div className="homePage">
      <header>
        <Navbar />
      </header>
      <Hero />
      <About />
    </div>
  );
}

export default HomePage;