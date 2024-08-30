import { useEffect } from 'react'
import './nav.scss'

export default function NavBar() {
    useEffect(() => {
        const elements = {
            ancora: document.getElementById('ancora'),
            b1: document.getElementById('b-one'),
            b2: document.getElementById('b-dwo'),
            b3: document.getElementById('b-there'),
            animate: [...document.querySelectorAll('#animate')],
            burguer: document.getElementsByClassName('burguer')[0],
            liItems: [...document.querySelectorAll('li')],
        }

        function toggleClasses() {
            const { ancora, b1, b2, b3, animate, burguer } = elements

            ancora.classList.toggle('collapse-true')
            b1.classList.toggle('b-one')
            b2.classList.toggle('b-dwo')
            b3.classList.toggle('b-there')
            animate.forEach((el) => {
                el.classList.toggle('animate-aux')
            })
            burguer.classList.toggle('burguer-aux')
        }

        elements.liItems.forEach((item) => {
            item.addEventListener('click', toggleClasses)
        })

        window.addEventListener('scroll', () => {
            const header = document.getElementsByTagName('header')[0]
            header.classList.toggle('header_aux', window.scrollY > 100)
        })

        document.querySelectorAll('a[href^="#"]').forEach((ancora) => {
            ancora.addEventListener('click', function (el) {
                el.preventDefault()
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth',
                })
            })
        })

        return () => {
            elements.liItems.forEach((item) => {
                item.removeEventListener('click', toggleClasses)
            })
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    return (
        <header>
            <nav className="navbar">

                <div className="active-bar">
                    <span>emerson</span>
                    <span>
                        <span className="game-icons--polar-star"></span> moraes
                    </span>
                </div>

                <li className="burguer">
                    <span id="b-one"></span>
                    <span id="b-dwo"></span>
                    <span id="b-there"></span>
                </li>

                <ul id="ancora">
                    <li><a id="animate" href="pages/about.html">Sobre mim</a></li>
                    <li><a id="animate" href="#tecnologias">Tecnologias</a></li>
                    <li><a id="animate" href="#projetos">Projetos</a></li>
                    <li><a id="animate" href="#contatos">Contato</a></li>

                    <div className="midia">
                        <a className="linkedin" href="https://www.linkedin.com/in/emerson-elias-9b2894228/" target="_blank" rel="noopener noreferrer" >
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a className="git-icon-footer" href="https://github.com/emerson-elias" target="_blank" rel="noopener noreferrer" >
                            <i className="fa-brands fa-github-alt"></i>
                        </a>

                        <a className="instagram" href="https://www.instagram.com/emersoneliass_/" target="_blank" rel="noopener noreferrer" >
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a className="cv" href="https://drive.google.com/file/d/15zY3xHj9nhE3uaiNlSTSQ8_slmKK5OPp/view" target="_blank" rel="noopener noreferrer" >
                            <i className="fa-regular fa-file"></i>
                        </a>
                    </div>
                    
                </ul>
            </nav>
        </header>
    )
}