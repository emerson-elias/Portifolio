import { useEffect, useRef } from 'react'
import './topo.scss'

export default function Topo() {

    const topoRef = useRef(null)

    useEffect(() => {
        const topo = topoRef.current

        const handleScroll = () => {
            if (window.scrollY > 250) {
                topo.style.opacity = '1'
            } else {
                topo.style.opacity = '0'
            }
        }

        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        window.addEventListener("scroll", handleScroll)
        topo.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            topo.removeEventListener('click', handleClick)
        }
        
    }, [])

    return (
        <section className="button-top" title="Volte ao topo" ref={topoRef}>
            <a className="cicle">
                <i className="fa-solid fa-arrow-up-from-bracket"></i>
            </a>       
        </section>
    )
}
