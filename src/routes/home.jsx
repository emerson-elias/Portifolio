import Nav_Bar from "../Components/nav/nav.jsx"
import Bio from "../Components/bio/bio.jsx"
import Banner from "../Components/banner/banner.jsx"
import Cursor from "../Components/cursor/cursor.jsx"
import Sound from "../Components/sound/sound.jsx"
import Topo from "../Components/topo/topo.jsx"
import Footer from "../Components/footer/footer.jsx"

export default function Home(){

    return(
        <>
            <Cursor />
            <Nav_Bar />
            <Banner />
            <Bio />
            <Sound />
            <Topo />
            <Footer />
        </>
    )
}