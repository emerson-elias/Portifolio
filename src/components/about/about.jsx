import { useEffect, useState } from "react"
import { useAssetsLoaded } from "../../contexts/AssetLoaderProvider"

import Loader from "../global/loader/loader"
import NavBar from "../global/nav/nav"
import Cursor from "../global/cursor/cursor"
import Topo from "../global/topo/topo"
import Contate from "../global/contate-me/contate"
import Footer from "../global/footer/footer"

import Banner_About from "./banner/banner"
import Description from "./description/description"
import Certificates from "./certificates/certificates"
import Experience from "./experience/experience"

export default function About() {
    const { allAssetsLoaded } = useAssetsLoaded()
    const [showLoader, setShowLoader] = useState(true)
    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        if (allAssetsLoaded) {
            setIsExiting(true)
            const timer = setTimeout(() => {
                setShowLoader(false)
            }, 500)

            return () => clearTimeout(timer)
        }
    }, [allAssetsLoaded])

    if (showLoader) return <Loader isExiting={isExiting} />

    return (
        <>
            <Cursor />
            <NavBar />
            <Banner_About />
            <Description />
            <Certificates />
            <Experience />
            <Topo />
            <Contate />
            <Footer />
        </>
    )
}
