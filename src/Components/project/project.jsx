import { Link } from "react-router-dom"
import { useState } from "react"

import '../project/project.scss'
import Modal from "../modals/modal/modal"

import gif_1 from '/assets/gif/page-1.gif'
import gif_2 from '/assets/gif/page-2.gif'
import gif_3 from '/assets/gif/page-3.gif'
import gif_4 from '/assets/gif/page-4.gif'

export default function Project() {
    const [showModal, setShowModal] = useState(false)
    const [currentProject, setCurrentProject] = useState(null)

    const openModal = (project) => {
        setCurrentProject(project)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
        setCurrentProject(null)
    }

    const projectsData = [
        {
            id: 1,
            title: "Recanto Belle Vue",
            description: "Imagens ilustrativas. Projeto em desenvolvimento.",
            gif: gif_1,
            modalInfo: "Este foi um projeto desenvolvido a partir de uma necessidade real de ter algo visível para mostrar pros clientes e ao mesmo tempo o cliente ter uma noção do trabalho da empresa 1.",
            year: "2025",
            link: "https://recanto-belle-vue.vercel.app/",
            tecnology: ["html", "css", "sass", "react", "javascript", "gsap"]
        },
        {
            id: 2,
            title: "Em Breve",
            description: "Imagens ilustrativas. Projeto em desenvolvimento.",
            gif: gif_2,
            modalInfo: "Este foi um projeto desenvolvido a partir de uma necessidade real de ter algo visível para mostrar pros clientes e ao mesmo tempo o cliente ter uma noção do trabalho da empresa 2.",
            year: "2024",
            link: "https://github.com/emerson-elias",
            tecnology: ["html", "css", "sass", "react", "javascript", "gsap"]
        },
        {
            id: 3,
            title: "Em Breve",
            description: "Imagens ilustrativas. Projeto em desenvolvimento.",
            gif: gif_3,
            modalInfo: "Este foi um projeto desenvolvido a partir de uma necessidade real de ter algo visível para mostrar pros clientes e ao mesmo tempo o cliente ter uma noção do trabalho da empresa 3.",
            year: "2024",
            link: "https://github.com/emerson-elias",
            tecnology: ["html", "css", "sass", "react", "javascript", "gsap"]
        },
        {
            id: 4,
            title: "Em Breve",
            description: "Imagens ilustrativas. Projeto em desenvolvimento.",
            gif: gif_4,
            modalInfo: "Este foi um projeto desenvolvido a partir de uma necessidade real de ter algo visível para mostrar pros clientes e ao mesmo tempo o cliente ter uma noção do trabalho da empresa 4.",
            year: "2024",
            link: "https://github.com/emerson-elias",
            tecnology: ["html", "css", "sass", "react", "javascript", "gsap"]
        }
    ]

    return (
        <section className="project-container">
            <div className="title" id="projetos">
                <h1>Projetos</h1>
                <Link to="/projetos">
                    <div className="svg" title="Mais em Breve">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                            <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="#fff" />
                        </svg>
                    </div>
                </Link>
            </div>

            <div className="row">
                {projectsData.map((project) => (
                    <div className={`projects-${project.id}`} key={project.id}>
                        {showModal && currentProject?.id === project.id && (
                            <Modal
                                setShowModal={closeModal}
                                title={currentProject.title}
                                gif={currentProject.gif}
                                modalInfo={currentProject.modalInfo}
                                year={currentProject.year}
                                link={currentProject.link}
                                tecnology={currentProject.tecnology}
                            />
                        )}

                        <div className="name">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </div>

                        <div className={`view view-${project.id}`} onClick={() => openModal(project)}>
                            <img src={project.gif} loading="lazy" alt={`Projeto ${project.id}`} />
                        </div>

                        <div className="info">
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ancor_about">
                <Link id="animate" to="/about" data-aos="fade-down">
                    <h1>Quem sou?</h1>
                    <div className="svg" title="Sobre Mim">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                            <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="#fff" />
                        </svg>
                    </div>
                </Link>
            </div>
        </section>
    )
}
