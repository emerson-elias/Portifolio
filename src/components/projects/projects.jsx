import { useEffect, useState } from 'react'
import { useAssetsLoaded } from '../../contexts/AssetLoaderProvider'

import Banner from './banner/banner_project'
import Loader from '../global/loader/loader'
import List from './list/list'
import NavBar from '../global/nav/nav'
import Footer from '../global/footer/footer'
import Cursor from '../global/cursor/cursor'
import Contate from '../global/contate-me/contate'

export default function Projects() {
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
            <List />
            <Contate />
            <Footer />
        </>
    )
}