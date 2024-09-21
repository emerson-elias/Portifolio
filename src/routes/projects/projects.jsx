import { useEffect } from "react"

import Cursor from '../../Components/cursor/cursor'
import Footer from '../../Components/footer/footer'
import NavBar from '../../Components/nav/nav'
import Topo from '../../Components/topo/topo'
import Banner from './banner/banner'

import './projects.scss'

export default function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, [])  

    return (
        <>
            <Cursor />
            <NavBar />
            <Banner />
        

            <Topo />
            <Footer />
        </>
    )
}