import { useEffect, useRef } from 'react'
import style from './topo.module.scss'

export default function Topo() {
    const topoRef = useRef(null)

    useEffect(() => {
        const root = document.getElementById('root')
        const topo = topoRef.current

        const handleScroll = () => {
            if (root.scrollTop > 1000) {
                topo.style.opacity = '1'
                topo.style.pointerEvents = 'auto'
            } else {
                topo.style.opacity = '0'
                topo.style.pointerEvents = 'none'
            }
        }

        const handleClick = () => {
            root.scrollTo({ top: 0, behavior: 'smooth' })
        }

        root.addEventListener('scroll', handleScroll)
        topo.addEventListener('click', handleClick)

        return () => {
            root.removeEventListener('scroll', handleScroll)
            topo.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <section className={style.button_top} title="Volte ao topo" ref={topoRef}>
            <a>
                <i className="fa-solid fa-chevron-up"></i>
            </a>
        </section>
    )
}
