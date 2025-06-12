import "./global.scss"

import { RouterProvider } from "react-router-dom"
import rotas from "./routes"
import Sound from "./components/global/sound/sound.jsx"
import hook from "./hooks/mobile_view.js"

function App() {
    hook()

    return (
        <>
            <div className="fixed-background-image"></div>
            <Sound />
            <RouterProvider router={rotas} />
        </>
    )
}

export default App