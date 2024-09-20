import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Nav_Bar from "../Components/nav/nav.jsx"
import Bio from "../Components/bio/bio.jsx"
import Banner from "../Components/banner/banner.jsx"
import Cursor from "../Components/cursor/cursor.jsx"
import Topo from "../Components/topo/topo.jsx"
import Footer from "../Components/footer/footer.jsx"
import Project from "../Components/project/project.jsx"
import Tecnology from "../Components/tecnology/tecnology.jsx"
import Tools from "../Components/tools/tools.jsx"
import Contate from "../Components/contate-me/contate.jsx"

export default function Home(){

    useEffect(() => {
        AOS.init({
          duration: 3000,
          offset: -70,
        })

        return () => {
            AOS.refresh()
        }

      }, [])   

    return(
        <>
            <Cursor />
            <Nav_Bar />
            <Banner />
            <Bio />
            <Project />
            <Topo />
            <Tecnology />
            <Tools />
            <Contate />
            <Footer />
        </>
    )
}