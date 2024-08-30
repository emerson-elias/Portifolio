import { createBrowserRouter } from "react-router-dom"
import Home from "./Components/rotas/home"
import About from "./Components/rotas/about"




const router = createBrowserRouter([
   {
    path: "/",
    element: <Home />
   }
   ,
   {
    path: "about",
    element: <About />
   }
])

export default router