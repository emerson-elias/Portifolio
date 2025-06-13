import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './nav.scss'

export default function NavBar() {
    const ancoraRef = useRef(null)
    const burguerRef = useRef(null)
    const animateRefs = useRef([])
    const liRefs = useRef([])

    const toggleClasses = () => {
        const ancora = ancoraRef.current
        const burguer = burguerRef.current

        ancora.classList.toggle('collapse-true')
        burguer.classList.toggle('burguer-aux')
        animateRefs.current.forEach(el => el.classList.toggle('animate-aux'))

        burguer.children[0].classList.toggle('span-one')
        burguer.children[1].classList.toggle('span-dwo')
        burguer.children[2].classList.toggle('span-there')

        document.body.style.overflow = ancora.classList.contains('collapse-true') ? 'hidden' : ''
    }

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header')
            if (header) header.classList.toggle('header_aux', window.scrollY > 100)
        }

        const burguer = burguerRef.current
        
        burguer?.addEventListener('click', toggleClasses)

        liRefs.current.filter(Boolean).forEach(item => item?.addEventListener('click', toggleClasses))

        window.addEventListener('scroll', handleScroll)

        return () => {
            burguer?.removeEventListener('click', toggleClasses)
            liRefs.current.filter(Boolean).forEach(item => item?.removeEventListener('click', toggleClasses))
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.querySelector(location.hash)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 4)
        }
    }, [location])

    return (
        <header>
            <nav className="navbar">
                <div className="active-bar">
                    <Link to="/">
                        <span>emerson</span>
                        <span><i className="game-icons--polar-star"></i> moraes</span>
                    </Link>
                </div>

                <li className="burguer" ref={burguerRef}>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>

                <ul id="ancora" ref={ancoraRef}>
                    {[
                        { to: '/about', label: 'Sobre mim' },
                        { to: '/#tecnologias', label: 'Tecnologias' },
                        { to: '/projetos', label: 'Projetos' },
                    ].map((link, index) => (
                        <li key={index} ref={el => (liRefs.current[index] = el)}>
                            <Link
                                ref={el => (animateRefs.current[index] = el)}
                                to={link.to}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    <li ref={el => (liRefs.current[3] = el)}>
                        <a
                            ref={el => (animateRefs.current[3] = el)}
                            href="#contatos"
                        >
                            Contato
                        </a>
                    </li>

                    <div className="midia">
                        <a className="linkedin" href="https://www.linkedin.com/in/emerson-elias-9b2894228/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a className="git-icon-footer" href="https://github.com/emerson-elias" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github-alt"></i>
                        </a>
                        <a className="instagram" href="https://www.instagram.com/emersoneliass_/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a className="cv" href="https://drive.google.com/file/d/15zY3xHj9nhE3uaiNlSTSQ8_slmKK5OPp/view" target="_blank" rel="noopener noreferrer">
                            <i className="fa-regular fa-file"></i>
                        </a>
                    </div>
                </ul>
            </nav>
        </header>
    )
}