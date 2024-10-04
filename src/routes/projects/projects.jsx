import { useEffect, useRef, React } from 'react';
import gsap from 'gsap';

import Cursor from '../../Components/cursor/cursor';
import Footer from '../../Components/footer/footer';
import NavBar from '../../Components/nav/nav';
import Topo from '../../Components/topo/topo';
import Banner from './banner/banner';
import Contate from '../../Components/contate-me/contate.jsx';

import './projects.scss';

export default function Projects() {

    useEffect(() => {
        if (window.pageYOffset > 0) {
            window.scrollTo(0, 0)
        }
    }, [])

    const containerRefs = useRef([])
    const bannersRefs = useRef([])

    useEffect(() => {
        const containers = containerRefs.current
        const imgs = bannersRefs.current

        imgs.forEach((img) => {
            gsap.set(img, { opacity: 0 })
        })

        const handleMouseMove = (e, index) => {
            const container = containers[index]
            const img = imgs[index]

            const rect = container.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            const moveX = (x - img.offsetWidth / 2) * 0.1
            const moveY = (y - img.offsetHeight / 2) * 0.1

            gsap.to(img, {
                x: moveX,
                y: moveY,
                duration: 0.5,
                opacity: 1,
                ease: 'power1.out',
            })
        }

        const handleMouseLeave = (index) => {
            const img = imgs[index]
            gsap.to(img, {
                x: 0,
                y: 0,
                duration: 0.5,
                opacity: 0,
                ease: 'power1.out',
            })
        }

        containers.forEach((container, index) => {
            if (container) {
                container.addEventListener('mousemove', (e) => handleMouseMove(e, index))
                container.addEventListener('mouseleave', () => handleMouseLeave(index))
            }
        })

        return () => {
            containers.forEach((container, index) => {
                if (container) {
                    container.removeEventListener('mousemove', (e) => handleMouseMove(e, index))
                    container.removeEventListener('mouseleave', () => handleMouseLeave(index))
                }
            })
        }
    }, [])

    return (
        <>
            <Cursor />
            <NavBar />
            <Banner />

            <section className="all-project-container">
                <div className="row">
                    <div className="title">
                        <h1><span>desafios</span> aumentam</h1>
                        <h1>conforme <span>o progresso</span></h1>
                    </div>

                    {['em breve', 'em breve', 'em breve', 'em breve', 'em breve', 'em breve' ,'em breve'].map((project, index) => (
                        <div className="layers" key={index} ref={(el) => (containerRefs.current[index] = el)}>
                            <div className="title-project">
                                <h1>{project}</h1>
                            </div>

                            <div className="box-img-project" ref={(el) => (bannersRefs.current[index] = el)}>
                                <img src="/assets/img/banner-projetos.jpg" alt={`BANNER PROJETO ${project.toUpperCase()}`} />
                            </div>

                            <a className='svg' title="Acesse o projeto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                                    <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <Contate />
            <Topo />
            <Footer />
        </>
    )
}
