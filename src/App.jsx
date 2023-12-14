import NavTabs from "./components/NavTabs";
import ImageComponent from "./components/Header";
import About from "./components/About";
import Projects from "./components/Project";
import Resume from "./components/Resume";
import Form from "./components/Contact"






function App() {

  return (
   <div>
      <NavTabs />
      <ImageComponent />
      <About />
      <Projects />
      <Resume />
      <Form />
   </div>
  )
}

export default App
