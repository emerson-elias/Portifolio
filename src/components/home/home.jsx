import { useEffect, useState } from "react"
import { useAssetsLoaded } from "../../contexts/AssetLoaderProvider"

import Cursor from "../global/cursor/cursor"
import Banner from "./banner/banner"
import Loader from "../global/loader/loader"
import NavBar from "../global/nav/nav"
import Bio from "./bio/bio"

export default function Home() {
    const { allAssetsLoaded } = useAssetsLoaded()
    const [showLoader, setShowLoader] = useState(true)
    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        window.history.scrollRestoration = "manual"
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    useEffect(() => {
        if (allAssetsLoaded) {
            setIsExiting(true)

            const timer = setTimeout(() => {
                setShowLoader(false)
            }, 1000)

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
        </>
    )
}
