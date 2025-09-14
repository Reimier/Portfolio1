import About from "./components/About/About"
import Home from "./components/Home/Home"
import NavbarBox from "./components/NavbarBox/NavbarBox"
import Skills from "./components/Skills/Skills"

function App() {
 

  return (
    <>

    <div id="land-page-container">

      <NavbarBox/>
      <Home/>

    </div>

    <div id="about-container">

      <About></About>
      
    </div>

    <div id="skills-container">

      <Skills></Skills>
      
    </div>
      
       
    </>
  )
}

export default App
