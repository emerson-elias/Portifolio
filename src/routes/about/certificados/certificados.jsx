import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import '../certificados/certificados.scss';

import MINERACAO from '/assets/certificados/certificado-mineração.png';
import MONITOR from '/assets/certificados/certificado-monitor.png';
import POTENCIALIZA from '/assets/certificados/certificado-potencializa.png';
import DIPLOMA from '/assets/certificados/diploma.png';

export default function Certificados() {

    const containerRefs = useRef([])
    const imgRefs = useRef([])

    useEffect(() => {
        const containers = containerRefs.current
        const imgs = imgRefs.current

        imgs.forEach((img) => {
            gsap.set(img, {
                opacity: 0,
            })
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
        <section className="certificados-container">
            <div className="word-big">
                <span>certificado</span>
                <span>dos</span>
                <span>projetos</span>
            </div>

            <div className="row">
                {[
                    { title: 'mineração', img: MINERACAO, year: '2020' },
                    { title: 'monitor', img: MONITOR, year: '2020' },
                    { title: 'potencializa', img: POTENCIALIZA, year: '2020' },
                    { title: 'diploma', img: DIPLOMA, year: '2021' },
                ].map((project, index) => (
                    <div
                        key={index}
                        className="layers"
                        ref={(el) => (containerRefs.current[index] = el)}
                    >
                        <div className="title-project">
                            <h1>{project.title}</h1>
                        </div>

                        <div className="certi-icon">
                            <img
                                src={project.img}
                                alt={project.title}
                                ref={(el) => (imgRefs.current[index] = el)}
                            />
                        </div>

                        <div className="year">
                            <h1>{project.year}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
