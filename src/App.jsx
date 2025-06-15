import { Outlet } from 'react-router-dom' 
import { AssetLoaderProvider } from "./contexts/AssetLoaderProvider"

import Sound from "./components/global/sound/sound"
import ScrollToTop from "./hooks/scrollTop"

import "./global.scss"

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

const gifs = [
    '/assets/gif/page-1.gif',
    '/assets/gif/page-2.gif',
    '/assets/gif/page-3.gif',
    '/assets/gif/page-4.gif',
]

const audioFiles = [
    '/assets/music/sappheiros.mp3',
]

function App() {

    return (
        <AssetLoaderProvider
            imgsUrls={imgs}
            fontFamilies={fonts}
            gifsUrls={gifs}
            audioUrls={audioFiles}
        >
            <ScrollToTop />
            <Sound />
            {/*<section className="fixed-background-image" />*/}
            <Outlet />
        </AssetLoaderProvider>
    )
}

export default App