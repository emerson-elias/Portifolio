import { useState, useEffect } from "react"

import Cursor from "../components/cursor/cursor.jsx"


/*
import Bio from "../components/bio/bio.jsx"
import Banner from "../components/banner/banner.jsx"
import Topo from "../components/topo/topo.jsx"
import Footer from "../components/footer/footer.jsx"
import Project from "../components/project/project.jsx"
import Tecnology from "../components/tecnology/tecnology.jsx"
import Tools from "../components/tools/tools.jsx"
import Contate_Me from "../components/contate-me/contate.jsx"*/
import Loader from "../components/loader/loader.jsx"
import NavBar from "../components/nav/nav.jsx"
import Banner from "../components/banner/banner.jsx"

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
                    <Banner />{/*
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
