import { useEffect } from "react"
import { useAssetsLoaded } from "../../contexts/AssetLoaderProvider"

import Cursor from "../global/cursor/cursor"
import Banner from "./banner/banner"
import Loader from "../global/loader/loader"
import NavBar from "../global/nav/nav"

export default function Home() {
    const { allAssetsLoaded } = useAssetsLoaded()

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        window.scrollTo({ top: 0, behavior: 'instant' })
    }, [])

    if (!allAssetsLoaded) return <Loader />

    return (
        <>
            <Cursor />
            <NavBar />
            <Banner />
        </>
    )
}