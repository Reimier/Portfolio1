import "./home.css"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Home() {
  
   useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
 
  return (
    <>

  <div id="home-container">

            <div id="home-pic">

                <img src="rei-pic.gif"></img>

            </div>

      <div id="home-box">

        <p data-aos="fade-right" id="greetings">Hello, my name is </p>
        <h1 data-aos="fade-right" >Reimier <span id="name">Reyes</span></h1>
        <p data-aos="fade-right" id="typewriter">Aspiring Web Developer</p>
      
        <div id="home-btn">
        <a id="cv" href="/Reimier_CV.pdf" target="_blank">
        <button >Download CV</button>
        </a>
      
        <a id="work" href="#about-box">
        <button >View Projects</button>
        </a>
       
        </div>

      </div>


    </div>

    </>

  );
}

export default Home;
