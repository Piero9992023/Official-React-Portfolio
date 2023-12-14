import NavTabs from "./components/NavTabs"
import ImageComponent from "./components/Header"
import About from "./components/About"
import Projects from "./components/Project"
import Resume from "./components/Resume"






function App() {

  return (
   <div>
      <NavTabs />
      <ImageComponent />
      <About />
      <Projects />
      <Resume />
   </div>
  )
}

export default App
