import "./global.scss"

import { RouterProvider } from "react-router-dom"
import rotas from "./routes"
import Sound from "./Components/sound/sound"

function App() {
  return (
    <>
      <Sound />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
