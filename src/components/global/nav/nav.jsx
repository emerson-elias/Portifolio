import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './nav.scss'

const links = [
    { to: '/sobre', label: 'Sobre mim' },
    { to: '/#tecnologias', label: 'Tecnologias' },
    { to: '/projetos', label: 'Projetos' },
    { href: '#contatos', label: 'Contatos', isAnchor: true }
]

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
        iconClass: "fa-regular fa-file-lines",
        ariaLabel: "Currículo",
    }
]

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => setMenuOpen(prev => !prev)

    useEffect(() => {
        const root = document.getElementById('root')

        const Scroll = () => {
            const header = document.querySelector('header')
            if (header && root) {
                header.classList.toggle('mobile', root.scrollTop > 100)
            }
        }

        root?.addEventListener('scroll', Scroll)
        return () => root?.removeEventListener('scroll', Scroll)
    }, [])

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) {
                element.scrollIntoView({ behavior: 'auto' })
            }
        }

        setMenuOpen(false) // fecha o menu ao navegar
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

                <button
                    className={`burguer ${menuOpen ? 'rotate' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className={menuOpen ? 'span-one' : ''}></span>
                    <span className={menuOpen ? 'span-dwo' : ''}></span>
                    <span className={menuOpen ? 'span-there' : ''}></span>
                </button>

                <ul id="ancora" className={menuOpen ? 'collapse' : ''}>
                    {links.map((link, index) => (
                        <li key={index}>
                            {link.isAnchor ? (
                                <a href={link.href}>{link.label}</a>
                            ) : (
                                <Link to={link.to}>{link.label}</Link>
                            )}
                        </li>
                    ))}

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
