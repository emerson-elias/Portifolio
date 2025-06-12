import { createBrowserRouter } from "react-router-dom"
import Home from "./routes/home"
/*
import About from "./routes/about/about"*/
import Projects from './components/projects/projects'


const rotas = createBrowserRouter([
   {
      path: "/",
      element: <Home />
   }/*
   ,
   {
      path: "/about",
      element: <About />
   }*/
   ,
   {
      path: "/projetos",
      element: <Projects />
   }
])

export default rotas