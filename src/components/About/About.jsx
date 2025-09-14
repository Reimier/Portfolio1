import "./about.css"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About(){

       useEffect(() => {
        AOS.init({ duration: 1500, once: true });
      }, []);

    return(

        <>

        <div id="about-box">
        <div id="about-title">
            <h1 data-aos="fade-up" > About Me</h1>
        </div>

        <div id="about-content">

            <div id="about-pic">

                <img src="about-pic.gif"></img>

            </div>

            <div id="about-desc">

                <p data-aos="fade-up" >Studying BS in Information Technology Major in Web and Mobile Application Development
                    at Bulacan State University.</p>

                <p data-aos="fade-up" > I am an outcome-driven young IT professional with a proven educational background and professional experience. 
                    Skilled in basic computer system servicing and digital literacy. 
                    Pursuing a challenging role to further enhance my technical expertise.</p>

                <h3 data-aos="fade-up" >Attributes:</h3>
                 <div id="attributes-box">

              
                <button class="attribute">Male</button>
                
               
                <button class="attribute">20 y.o.</button>
               

               
                <button class="attribute">170 cm</button>
                

                
                <button class="attribute" >80 kg</button>
            

               
                <button class="attribute" >Cat lover</button>
                

                </div>
     
            </div>  

        </div>
    
        </div>

        
        </>
    )
}

export default About;