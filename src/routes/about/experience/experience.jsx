import { Link } from 'react-router-dom'

import '../experience/experience.scss'

export default function Experience() {
    return (
        <section className="experience-container">

            <div className="row">
                <div className="box-tittle">
                    <span>Minhas</span>
                    <h1>Experiências</h1>

                </div>

                <div className="box-layers">

                    <div className="text-description">
                        <p>Estou sempre disposto à novas oportunidades e experiências. No entanto, entendo completamente que encontrar o profissional adequado pode às vezes parecer uma tarefa árdua. Aqui estão mais alguns detalhes sobre mim para ajudar você a me conhecer melhor e descobrir se sou a pessoa certa para sua empresa!</p>
                    </div>

                    <div className='layers'>
                        <h1>maxdata</h1>
                        <span>analista de suporte</span>
                        <p>2021</p>
                    </div>

                    <div className='layers'>
                        <h1>Lider Comercio e Indústria</h1>
                        <span>analista de suporte</span>
                        <p>2024</p>
                    </div>

                    <div className="btn-projects">
                        <Link to="/projetos">
                            <button>Meus projetos</button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
