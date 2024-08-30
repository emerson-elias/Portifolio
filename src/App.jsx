import Bio from "./Components/bio/bio.jsx"
import Banner from "./Components/banner/banner.jsx"
import Cursor from "./Components/cursor/cursor.jsx"
import Nav_bar from "./Components/nav/nav.jsx"

import "./global.scss"
import { RouterProvider } from "react-router-dom"
import router from "./routes.jsx"

function App() {
  
  return <RouterProvider router={router} />
}

export default App
