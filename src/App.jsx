import { Routes,Route } from "react-router-dom"
import About from "./containers/About"
import Exp from "./containers/Exp"
import Project from "./containers/Project"
import NavBar from "./components/navbar"
import About2 from "./containers/About2"
import Media from "./components/media"
import Skill from "./containers/skills"
import Main_Component from "./containers/main_component"


function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path ='/' element = {<Main_Component/>}/>
      <Route path ='/skills' element = {<Skill/>}/>
      <Route path ='/Experience' element = {<Exp/>}/>
      <Route path ='/Project' element = {<Project/>}/>
    </Routes>
    <Media/>
     
    </>
  )
}

export default App
