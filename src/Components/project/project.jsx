import { Link, useLocation } from "react-router-dom"

import '../project/project.scss'

import Banner_Project_1 from '../../assets/img/rdne.jpg'
import Banner_Project_2 from '../../assets/img/rahimegul.jpg'
import Banner_Project_3 from '../../assets/img//nanda.jpg'
import Banner_Project_4 from '../../assets/img/rdne.jpg'

export default function Project() {

    return (
        <section className="project-container">

            <div className="tittle" id='projetos'>
                <h1>Projetos</h1>

                <a href="">
                    <div className='svg' title="Mais em Breve">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                            <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="#fff" />
                        </svg>
                    </div>
                </a>
            </div>

            <div className="row">

                <div className="projects-1" >
                    <div className="name">
                        <a>Em Breve</a>
                    </div>

                    <div className="view">
                        <img src={Banner_Project_1} alt="" />
                    </div>

                    <div className="info">
                        <p>Projeto em desenvolvimento. Aguardem...</p>
                    </div>
                </div>


                <div className="projects-2" >
                    <div className="name">
                        <a>Em Breve</a>
                    </div>

                    <div className="view">
                        <img src={Banner_Project_2} alt="" />
                    </div>

                    <div className="info">
                        <p>Projeto em desenvolvimento. Aguardem...</p>
                    </div>
                </div>

                <div className="projects-3" >
                    <div className="name">
                        <a>Em Breve</a>
                    </div>

                    <div className="view">
                        <img src={Banner_Project_3} alt="" />
                    </div>

                    <div className="info">
                        <p>Projeto em desenvolvimento. Aguardem...</p>
                    </div>
                </div>

                <div className="projects-4" >

                    <div className="name">
                        <a>Em Breve</a>
                    </div>

                    <div className="view">
                        <img src={Banner_Project_4} alt="" />
                    </div>

                    <div className="info">
                        <p>Projeto em desenvolvimento. Aguardem...</p>
                    </div>
                </div>

            </div>

            <div className="ancor_about">
                <Link id="animate" to={"/about"}>
                    <h1>Quem sou?</h1>

                    <div className='svg' title="Sobre Mim">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                            <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="#fff" />
                        </svg>
                    </div>
                </Link>
            </div>

        </section>
    )
}
