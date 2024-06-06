import './NavbarStyles.css';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

function Navbar(){
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = ()=>{
    setClick(!click) 
  }

  const changeBackground = ()=>{
    try{
      if(window.scrollY > 5){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }catch(err){
      console.log('scroll');
    }
  }

  window.addEventListener('scroll', changeBackground);


  return(
    <nav className={navbar?'navbar scrolled': 'navbar'}>
      <a href="/" className='logoLink'><h1 className='logoHead'>Aattreya</h1></a>
      <div className="menu">
        <div className="hamburger" onClick={handleClick}>
          {click? (<FaTimes size={20} className='hamburgerIcon'/>):(<FaBars size={20} className='hamburgerIcon'/>)}
        </div>
        <ul className={click? "menulist active": "menulist"}
        onClick={()=> setClick(false)}>
          <li className="about">
            <a href="#about">About</a>
          </li>
          <li className="experience">
            <a href="#experience">Skills</a>
          </li>
          <li className="projects">
            <a href="#projects">Projects</a>
          </li>
          <li className="contact">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;