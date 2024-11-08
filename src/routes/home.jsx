import { useState, useEffect } from "react"

import Nav_Bar from "../Components/nav/nav.jsx"
import Bio from "../Components/bio/bio.jsx"
import Banner from "../Components/banner/banner.jsx"
import Cursor from "../Components/cursor/cursor.jsx"
import Topo from "../Components/topo/topo.jsx"
import Footer from "../Components/footer/footer.jsx"
import Project from "../Components/project/project.jsx"
import Tecnology from "../Components/tecnology/tecnology.jsx"
import Tools from "../Components/tools/tools.jsx"
import Contate_Me from "../Components/contate-me/contate.jsx"
import Loader from "../Components/loader/loader.jsx"

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
            }, 1500) // tempo para a transição de fade-out
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
                    <Nav_Bar />
                    <Banner />
                    <Bio />
                    <Project />
                    <Topo />
                    <Tecnology />
                    <Tools />
                    <Contate_Me />
                    <Footer />
                </>
            )}
        </>
    )
}
