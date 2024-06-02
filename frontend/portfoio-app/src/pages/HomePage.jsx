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
        <MainBody />
      </main>
    </div>
  );
}

const MainBody = ()=>{
  const cardDetails = [
    {
      img: './images/ai_blog.jpg',
      title: 'A.I and the Future',
      description: 'What does the Artificial Inteligence have in store for the future?',
      src: '',
    },
    {
      img: './images/ai_blog.jpg',
      title: 'What makes Web-development Fascinating?',
      description: 'Bala is a boy',
      src: '',
    },
    {
      img: './images/ai_blog.jpg',
      title: 'A.I and the Future',
      description: 'What does the Artificial Inteligence have in store for the future?',
      src: '',
    },
  ]
  return(
    <div className="blogContainer">
      <h2 className="blogHead">A few Blogs...</h2>
      <div className="cardContainer">
        {cardDetails.map((cardDetail)=>{
          return(
           <div className="card">
            <img src={cardDetail.img} alt="img" className="blogImg"/>
             <h3>{cardDetail.title}</h3>
              <p>{cardDetail.description}</p>
              <a href={cardDetail.src}>
                <button>View</button>
              </a>
           </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;