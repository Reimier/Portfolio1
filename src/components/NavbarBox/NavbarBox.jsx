import "./navbar-box.css"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function NavbarBox() {

   useEffect(() => {
      AOS.init({ duration: 1500, once: true });
    }, []);
  
  return (
    <>


    <nav id="navbar-container">
    
    <div id="nav-name">
      <h1 data-aos="fade-right" >REIMIER REYES</h1>
    </div>

    <div >
      <ul id="navbar-btn"> 

        <li> <a  href="#">HOME</a> </li>
        <li> <a  href="#about-box">ABOUT</a> </li>
        <li> <a  href="#skills-box">SKILLS</a> </li>
        <li> <a  href="#">PROJECTS</a> </li>
        <li> <a  href="#">CONTACT</a> </li>

      </ul>

    </div>

    </nav>
      
    </>
  )
}

export default NavbarBox;
