import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/routes/home";
import About from "./Components/routes/about";

const rotas = createBrowserRouter([
   {
      path: "/",
      element: <Home />
   }
   ,
   {
      path: "/about",
      element: <About />
   }
])

export default rotas