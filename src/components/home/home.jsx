import { useEffect, useState } from "react"
import { useAssetsLoaded } from "../../contexts/AssetLoaderProvider"

import Banner from "./banner/banner"
import Loader from "../global/loader/loader"

import Bio from "./bio/bio"
import Project from "./projects/project"
import Tools from "./tools/tools"
import Tecnology from "./tecnology/tecnology"
import Cursor from "../global/cursor/cursor"
import Footer from "../global/footer/footer"
import Topo from "../global/topo/topo"
import Contate from "../global/contate-me/contate"
import NavBar from "../global/nav/nav"

export default function Home() {
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
            <Banner />
            <Topo />
            <Bio />
            <Project />
            <Tecnology />
            <Tools />
            <Contate />
            <Footer />
        </>
    )
}
