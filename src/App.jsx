import { AboutPage } from "./Components/AboutPage"
import ContactPage from "./Components/ContactPage"
import FooterPage from "./Components/FooterPage"

import EducationPage from "./Components/EducationPage"
import { HomePage } from "./Components/HomePage"
import InternshipPage from "./Components/InternshipPage"
import Navbar from "./Components/Navbar"
import ProjectsPage from "./Components/ProjectsPage"
import SkillsPage from "./Components/SkillsPage"

function App() {
 

  return (
    <>
      <Navbar/>
      <HomePage/>
      <AboutPage/>
      <SkillsPage/>
      <EducationPage/> 
      <InternshipPage/>
      <ProjectsPage/>
      <ContactPage/>
     <FooterPage/>
      
    </>
  )
}

export default App
