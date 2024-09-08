import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about/about";

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