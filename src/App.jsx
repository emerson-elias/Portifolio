import "./global.scss"

import { RouterProvider } from "react-router-dom"
import rotas from "./routes"
import Sound from "./components/global/sound/sound.jsx"
import hook from "./hooks/mobile_view.js"

function App() {
    hook()

    return (
        <>
            <section className="fixed-background-image"></section>
            <Sound />
            <RouterProvider router={rotas} />
        </>
    )
}

export default App