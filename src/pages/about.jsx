import { useEffect, useState } from "react"
import { useAssetsLoaded } from "../contexts/AssetLoaderProvider"

import Loader from "../components/global/loader/loader"
import NavBar from "../components/global/nav/nav"
import Cursor from "../components/global/cursor/cursor"
import Contate from "../components/global/contate-me/contate"
import Footer from "../components/global/footer/footer"

import Banner_About from "../components/about/banner/banner"
import Description from "../components/about/description/description"
import Certificates from "../components/about/certificates/certificates"
import Experience from "../components/about/experience/experience"

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
            <Contate />
            <Footer />
        </>
    )
}
