import { Outlet } from "react-router-dom"
import { AssetLoaderProvider } from "./contexts/AssetLoaderProvider"

import Sound from "./components/global/sound/sound"
import useView from "./hooks/view"

import "./global.scss"

function App() {
    useView()

    const imgs = [
        '/assets/img/1.jpg',
        '/assets/img/2.jpg',
        '/assets/img/4.jpg',
        '/assets/img/banner-projetos.jpg',
        '/assets/img/livro.jpg',
        '/assets/img/Me-hero.jpg',
        '/assets/img/minimalismo.jpg',
        '/assets/img/natureza.jpg',
        '/assets/img/pexels.jpg',
    ]

    const fonts = [
        "aquire light",
        "aquire regular",
        "aquire bold",
    ]

    return (
        <AssetLoaderProvider imgsUrls={imgs} fontFamilies={fonts}>
            <section className="fixed-background-image"></section>
            <Sound />
            <Outlet />
        </AssetLoaderProvider>
    )
}

export default App