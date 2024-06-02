import './HeroStyles.css';
import { Link } from 'react-router-dom';

function Hero(){
  return(
    <div className="hero">
      <div className="mask content">
        <Left />
        <Right />
      </div>
    </div>
  );
}


const Left = ()=>{
  return(
    <div className="leftHero">
      <h2 className="heroHead">
        Hi, I'm <span className="heroName">Aattreya.K.S</span>
      </h2>
      <p className="heroDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quis debitis beatae modi nihil repellendus!</p>
      <div className="heroBtns">
        <Link to="/contact" className='contactBtn'><button>Contact</button></Link>
        <Link to="/" className="downloadBtn"><button>Download CV</button></Link>
      </div>
    </div>
  );
}

const Right = ()=>{
  return(
    <div className="rightHero">
      <h1>RIGHT</h1>      
    </div>
  );
}

export default Hero;