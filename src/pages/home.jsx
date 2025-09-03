import { useEffect, useState } from "react"
import { useAssetsLoaded } from "../contexts/AssetLoaderProvider"

import { Database } from "../components/projects/data/data"

import Banner from "../components/home/banner/banner"
import Loader from "../components/global/loader/loader"

import Bio from "../components/home/bio/bio"
import Project from "../components/home/projects/project"
import Tools from "../components/home/tools/tools"
import Tecnology from "../components/home/tecnology/tecnology"
import Cursor from "../components/global/cursor/cursor"
import Footer from "../components/global/footer/footer"
import Contate from "../components/global/contate-me/contate"
import NavBar from "../components/global/nav/nav"

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
            <Bio />
            <Project data={Database} />
            <Tecnology />
            <Tools />
            <Contate />
            <Footer />
        </>
    )
}
