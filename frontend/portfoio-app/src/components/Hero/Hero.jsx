import './HeroStyles.css';

function Hero(){
  return(
    <section className="container">
      <div className="content">
        <h2 className='title'>Hi, I'm <span className='name'>Aattreya</span>,</h2>
        <p className='description'>An avid Software Engineer, with expertise in <br/>
        Full-Stack Development, Machine Learning and Artificial Intelligence</p>
        <div className='btnCont'>
          <a href="mailto:aattreya.ks@gmail.com" className='contactBtn blueBtn'>Contact Me</a>
          <a className='contactBtn goldBtn'>Download CV</a>
        </div>
      </div>
      <div className='right'>
        <img src="" alt="bala" />
      </div>
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
}

export default Hero;