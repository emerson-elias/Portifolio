import './nav.scss'

export default function Nav_bar (){

    return(
        <header>
            <nav className="navbar">

                <div className="active-bar">
                    <span>emerson</span>
                    <span><span className="game-icons--polar-star"></span>  moraes</span>                                 
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

                        <a className="linkedin" href="https://www.linkedin.com/in/emerson-elias-9b2894228/" target="_blank">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a className="git-icon-footer" href="https://github.com/emerson-elias" target="_blank">
                            <i className="fa-brands fa-github-alt"></i>
                        </a>

                        <a className="instagram" href="https://www.instagram.com/emersoneliass_/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a className="cv" href="https://drive.google.com/file/d/15zY3xHj9nhE3uaiNlSTSQ8_slmKK5OPp/view" target="_blank">
                            <i className="fa-solid fa-file-csv"></i>
                        </a>
                    </div>
                </ul>

            </nav>
        </header>
    )
}