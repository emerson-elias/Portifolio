import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './nav.scss'

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/emerson-elias-9b2894228/",
        className: "linkedin",
        iconClass: "fa-brands fa-linkedin-in",
        ariaLabel: "LinkedIn",
    },
    {
        href: "https://github.com/emerson-elias",
        className: "git-icon-footer",
        iconClass: "fa-brands fa-github-alt",
        ariaLabel: "GitHub",
    },
    {
        href: "https://www.instagram.com/emersoneliass_/",
        className: "instagram",
        iconClass: "fa-brands fa-instagram",
        ariaLabel: "Instagram",
    },
    {
        href: "https://drive.google.com/file/d/15zY3xHj9nhE3uaiNlSTSQ8_slmKK5OPp/view",
        className: "cv",
        iconClass: "fa-regular fa-file",
        ariaLabel: "Currículo",
    }
]

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
    }

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header')
            const root = document.getElementById('root')

            if (header && root) {
                header.classList.toggle('header_aux', root.scrollTop > 100)
            }
        }

        const root = document.getElementById('root')
        const burguer = burguerRef.current

        burguer?.addEventListener('click', toggleClasses)

        liRefs.current
            .filter(Boolean)
            .forEach(item => item?.addEventListener('click', toggleClasses))

        root?.addEventListener('scroll', handleScroll)

        return () => {
            burguer?.removeEventListener('click', toggleClasses)

            liRefs.current
                .filter(Boolean)
                .forEach(item => item?.removeEventListener('click', toggleClasses))

            root?.removeEventListener('scroll', handleScroll)
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
                        {socialLinks.map(({ href, className, iconClass, ariaLabel }) => (
                            <a
                                key={href}
                                className={className}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={ariaLabel}
                            >
                                <i className={iconClass}></i>
                            </a>
                        ))}
                    </div>

                </ul>
            </nav>
        </header>
    )
}