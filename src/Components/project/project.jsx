import { Link } from "react-router-dom"
import { useState } from "react"

import '../project/project.scss'
import Modal from "../modal/modal"

import gif_1 from '/assets/gif/page-1.gif'
import gif_2 from '/assets/gif/page-2.gif'
import gif_3 from '/assets/gif/page-3.gif'
import gif_4 from '/assets/gif/page-4.gif'


export default function Project() {

    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <section className="project-container">

            <div className="title" id='projetos'>
                <h1>Projetos</h1>

                <Link to={"/projetos"}>
                    <div className='svg' title="Mais em Breve">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                            <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="#fff" />
                        </svg>
                    </div>
                </Link>
            </div>

            <div className="row">

                <div className="projects-1" >
                    {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
                    <div className="name">
                        <a>Em Breve</a>
                    </div>

                    <div className="view view-1" onClick={() => setIsModalVisible(true)}>
                        <img src={gif_1} alt="" />
                    </div>

                    <div className="info">
                        <p>Imagens ilustrativas. Projetos em desenvolvimento</p>
                    </div>
                </div>


                <div className="projects-2" >
                    {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
                    <div className="name">
                        <a>Em Breve</a>
                    </div>

                    <div className="view view-2" onClick={() => setIsModalVisible(true)}>
                        <img src={gif_2} alt="" />
                    </div>

                    <div className="info">
                        <p>Imagens ilustrativas. Projetos em desenvolvimento</p>
                    </div>
                </div>

                <div className="projects-3" >
                    {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
                    <div className="name">
                        <a>Em Breve</a>
                    </div>

                    <div className="view view-3" onClick={() => setIsModalVisible(true)}>
                        <img src={gif_3} alt="" />
                    </div>

                    <div className="info">
                        <p>Imagens ilustrativas. Projetos em desenvolvimento</p>
                    </div>
                </div>

                <div className="projects-4" >
                    {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
                    <div className="name">
                        <a>Em Breve</a>
                    </div>

                    <div className="view view-4" onClick={() => setIsModalVisible(true)}>
                        <img src={gif_4} alt="" />
                    </div>

                    <div className="info">
                        <p>Imagens ilustrativas. Projetos em desenvolvimento</p>
                    </div>
                </div>

            </div>

            <div className="ancor_about">
                <Link id="animate" to={"/about"} data-aos="fade-down">
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
