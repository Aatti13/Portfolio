import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function HomePage(){
  return(
    <div className="homeParent">
      <section className="topPart">
        <header>
          <Navbar />
        </header>
        <Hero />
      </section>
      <main>
      </main>
    </div>
  );
}

export default HomePage;