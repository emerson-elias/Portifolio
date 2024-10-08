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
            <a>
                <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="48" cy="48" r="47" stroke="currentColor" strokeWidth="2" />
                    <path d="M23 17h50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M47 81a1 1 0 1 0 2 0h-2Zm2-56a1 1 0 1 0-2 0h2ZM29.568 41.48a1 1 0 1 0 0 2v-2ZM49.048 24a1 1 0 1 0-2 0h2Zm17.1 19.1a1 1 0 1 0 0-2v2ZM49 81V25h-2v56h2ZM29.568 43.48c4.795 0 8.458-1.201 11.238-3.055 2.775-1.85 4.612-4.309 5.827-6.738 1.212-2.424 1.813-4.837 2.113-6.635.15-.901.226-1.655.264-2.187a16.57 16.57 0 0 0 .038-.844V24.001l-1-.001h-1v-.001.037l-.004.138c-.004.124-.012.31-.03.549-.034.479-.102 1.169-.241 2-.278 1.667-.832 3.875-1.93 6.07-1.095 2.191-2.723 4.352-5.146 5.968-2.417 1.61-5.684 2.72-10.13 2.72v2ZM48.048 24l-1 .001v.006a.754.754 0 0 0 0 .061l.005.169c.005.144.014.351.033.612.037.521.111 1.26.259 2.144.293 1.762.883 4.127 2.071 6.504 1.19 2.382 2.992 4.793 5.714 6.607 2.727 1.818 6.318 2.996 11.018 2.996v-2c-4.35 0-7.546-1.084-9.91-2.66-2.369-1.58-3.96-3.693-5.033-5.837-1.074-2.148-1.616-4.308-1.888-5.94a21.218 21.218 0 0 1-.236-1.957 14.24 14.24 0 0 1-.032-.67v-.037l-1 .001Z" fill="currentColor" />
                </svg>
            </a>
        </section>
    )
}
