import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

function HomePage(){
  return(
    <div className="homePage">
      <Navbar />
      <Hero />
    </div>
  );
}

export default HomePage;