import { useState, useEffect } from "react"

/*
import Bio from "../components/bio/bio.jsx"
import Banner from "../components/banner/banner.jsx"
import Topo from "../components/topo/topo.jsx"
import Footer from "../components/footer/footer.jsx"
import Project from "../components/project/project.jsx"
import Tecnology from "../components/tecnology/tecnology.jsx"
import Tools from "../components/tools/tools.jsx"
import Contate_Me from "../components/contate-me/contate.jsx"*/


import Cursor from "../components/global/cursor/cursor.jsx"
import Banner from "../components/home/banner/banner.jsx"
import Sound from "../components/global/sound/sound.jsx"
import Loader from "../components/global/loader/loader.jsx"
import NavBar from "../components/global/nav/nav.jsx"

export default function Home() {

    const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem("pageLoaded"))
    const [isFadingOut, setIsFadingOut] = useState(false)

    useEffect(() => {
        if (window.pageYOffset > 0) {
            window.scrollTo(0, 0)
        }

        const delayTimeout = setTimeout(() => {
            setIsFadingOut(true)
            setTimeout(() => {
                setIsLoading(false)
                sessionStorage.setItem("pageLoaded", "true")
            }, 1500)
        }, 3000)

        return () => clearTimeout(delayTimeout)
    }, [])

    return (
        <>
            {isLoading ? (
                <Loader className={isFadingOut ? "fade-out" : ""} />
            ) : (
                <>
                    <Cursor />
                    <NavBar />
                    <Banner />
                    <Sound />
                    
                    {/*
                    <Bio />
                    <Project />
                    <Topo />
                    <Tecnology />
                    <Tools />
                    <Contate_Me />
                    <Footer />*/}
                </>
            )}
        </>
    )
}
