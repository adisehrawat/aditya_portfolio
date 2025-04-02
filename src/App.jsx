
import './css/App.css'
import Background from './components/Background'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from "./components/About";
import Projects from './components/projects';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Background></Background>
    <NavBar className="z-50"></NavBar>
    <Intro></Intro>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    </>
  )
}

export default App
