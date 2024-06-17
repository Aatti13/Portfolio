import './ProjectStyles.css';
import projects from '../../data/projects.json';
// import { useState, useEffect } from 'react';


function Projects(){
  return(
    <section className="proj-container" id="projects">
      <h2 className="proj-title">PROJECTS</h2>
      <Carousel />
    </section>
  );
}


const Carousel = ()=>{

  return(
    <div className="slider-container">
      <div className="slide">
        {projects.map((slideitem, id)=>{
          return(
            <div className="slide-item"key={id}>
              <div className="slide-content">
                <div className="proj-name">
                  {slideitem.title}
                </div>
                <div className="desc">{slideitem.name}</div>
                <button>Github</button>
              </div>
            </div>
          )
        })}
      </div>
      <div className="button">
        <button className='prev p-nav' id='prev'>Previous</button>
        <button className='next p-nav' id='next'>Next</button>
      </div>
    </div>
  );
}

export default Projects;