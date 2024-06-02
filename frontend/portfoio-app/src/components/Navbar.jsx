import './Navbarstyles.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Navbar(){
  const [click, setClick] = useState(false);
  const handleClick = ()=>{
    setClick(!click)
  }

  const [navbar, setNavbar] = useState(false);

  window.addEventListener('scroll', ()=>{
    if(window.scrollY>0){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  })

  return(
    <div className={navbar? 'header scrolled': 'header'} id='header'>
      <Link to="/" className='logoLink'>
        <h1 className='logoTitle'>Aattreya</h1> 
      </Link>
      <nav className={click? "navMenu active": "navMenu"}>
        <li className='navElement'><Link to="/">Home</Link></li>
        <li className='navElement'><Link to="/about">About</Link></li>
        <li className='navElement'><Link to="/skills">Skills</Link></li>
        <li className='navElement'><Link to="/projects">Projects</Link></li>
        <li className='navElement'><Link to="/contact">Contact</Link></li>
      </nav>
      <div className="hamburger" onClick={handleClick}>
        {click? (<FaTimes size={20} className='hamburgerIcon'/>):(<FaBars size={20} className='hamburgerIcon'/>)}
      </div>
    </div>
  );
}


export default Navbar;