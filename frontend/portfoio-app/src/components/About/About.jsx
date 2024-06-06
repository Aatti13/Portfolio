import './AboutStyles.css';

function About(){
  return(
    <section className="about-container" id="about">
      <h2 className='abt-title'>About Me</h2><hr className='grad-line'/>
      <div className='abt-content'>
        {/* ------------------------------ */}
        <div className='left-abt-image'>
          <img src="./images/giphy.gif" alt="about-image" className='left-icon'/>
        </div>
        {/* ------------------------------- */}
        <div className='right-abt-list'>
          <ul className='abt-items'>
            <li>
              <img src="./images/cursorIcon.png" alt="cursor" className='abt-icon'/>
              <div>
                <h3 className='abtitemhead'>Full-Stack Developer</h3>
                <p>I'm a Full Stack Developer, with experience in building responsive and scalable websites and web-apps.</p>
              </div>
            </li>
            <li>
              <img src="./images/serverIcon.png" alt="system" className='abt-icon'/>
              <div>
                <h3 className='abtitemhead'>Machine Learning</h3>
                <p>Built mutiple models used in various practical aspects, such as movie recommendation, Stock-Prices, House Prices, etc.</p>
              </div>
            </li>
            <li>
              <img src=".//images/uiIcon.png" alt="ui"className='abt-icon' />
              <div>
                <h3 className='abtitemhead'>Artificial Intelligence</h3>
                <p>Built multiple capstone projects in the field of NLP, Computer Vision and Generative AI.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;