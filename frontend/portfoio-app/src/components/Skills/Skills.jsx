import './SkillsStyles.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json'; 

function Skills(){
  return(
    <section className="skills-container" id='skills-cont'>
      <h2 className='abt-title'>Experience</h2>
      <div className='skill-content'>
        <SkList />
        <HistList />
      </div>
    </section>
  );
}

const SkList = ()=>{
  return(
    <div className='skills'>
      {skills.map((skill, id)=>{
        return(
        <div key={id} className='skill'>
          <div className='img-cont'>
            <img src={skill.imgSrc} alt={skill.title} className={skill.class}/>
          </div>
        </div>
        )
      })}
    </div>
  );
}

const HistList = ()=>{
  return(
    <div>
      <ul>
        {history.map((hist, id)=>{
          return(
            <div key={id} className='hist-content'>
              <img src={hist.imgPin} alt={hist.alt}/>
              <p>{hist.description}</p>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default Skills;