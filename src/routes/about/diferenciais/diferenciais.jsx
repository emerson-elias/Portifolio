import { Link } from 'react-router-dom'
import { useRef } from 'react'
import '../diferenciais/diferenciais.scss'

export default function Diferenciais() {

    const btnContactRef = useRef(null)

    function EmailClick() {
        const email = 'emersonees808@gmail.com'
        const subject = 'Vamos trabalhar juntos :)'
        const body = 'Olá Emerson Elias.\n\nVi seus projetos no seu portifólio e gostaria de saber mais sobre suas habilidades, vamos trabalhar juntos?.\n\nAtenciosamente:\n---- Seu Nome ----'
        const mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)

        window.location.href = mailtoLink
    }

    return (
        <section className='diferenciais-container'>

            <div className="omega">

                <div className="cicle-animate">
                    <div className='cicle-1'></div>
                    <div className='cicle-2'></div>
                </div>

                <div className="row">

                    <div className="layers-one">

                        <div className="tittle">
                            <h1>Programas</h1>
                            <span>&</span>
                            <h1>Softwares</h1>
                        </div>

                        <div className="systens">
                            <span>figma</span>
                            <span>canvas</span>
                            <span>vs code</span>
                            <span>gamma app</span>
                            <span>magic ui</span>
                            <span>devicon</span>
                            <span>blackbox</span>
                            <span>noun</span>
                            <span>vercel</span>
                            <span>spotify</span>
                        </div>

                        <div className="btn-project">
                            <Link to={"/projetos"}>
                                <button>
                                    concheça meu trabalho
                                </button>
                            </Link>
                        </div>

                    </div>

                    <div className="layers-dwo">
                        <div className="tittle">
                            <h1>diferenciais</h1>
                        </div>

                        <div className="skills">
                            <span>Empatia</span>
                            <span>Gentileza</span>
                            <span>Foco</span>
                            <span>Flexibilidade</span>
                            <span>Respeito</span>
                            <span>Ética</span>
                            <span>Confiança</span>
                            <span>Adaptabilidade</span>
                            <span>Proatividade</span>
                            <span>disciplina</span>
                            <span>Colaboração</span>
                        </div>

                        <div className="btn-contatc">
                            <a href="#">
                                <button ref={btnContactRef} onClick={EmailClick}>
                                    gostou? fale comigo!
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}