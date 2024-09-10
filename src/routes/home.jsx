import { useEffect } from "react"
import Nav_Bar from "../Components/nav/nav.jsx"
import Bio from "../Components/bio/bio.jsx"
import Banner from "../Components/banner/banner.jsx"
import Cursor from "../Components/cursor/cursor.jsx"
import Topo from "../Components/topo/topo.jsx"
import Footer from "../Components/footer/footer.jsx"
import Project from "../Components/project/project.jsx"

export default function Home(){

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])    

    return(
        <>
            <Cursor />
            <Nav_Bar />
            <Banner />
            <Bio />
            <Project />
            <Topo />
            <Footer />
        </>
    )
}