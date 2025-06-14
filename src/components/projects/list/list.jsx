import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'

import styles from './list.module.scss'

const projects = [
    {
        id: 1,
        img: '/assets/img/1.jpg',
        link: 'https://recanto-belle-vue.vercel.app/',
        name: 'Recanto',
    },
    {
        id: 2,
        img: '/assets/img/1.jpg',
        link: 'https://recanto-belle-vue.vercel.app/',
        name: 'Belle',
    },
    {
        id: 3,
        img: '/assets/img/1.jpg',
        link: 'https://recanto-belle-vue.vercel.app/',
        name: 'Vue',
    }
]

export default function List() {
    const containerRefs = useRef([])
    const bannersRefs = useRef([])

    const handleMouseMove = useCallback((e, index) => {
        const container = containerRefs.current[index]
        const img = bannersRefs.current[index]
        if (!container || !img) return

        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        gsap.to(img, {
            x: (x - img.offsetWidth / 2) * 0.1,
            y: (y - img.offsetHeight / 2) * 0.1,
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out'
        })
    }, [])

    const handleMouseLeave = useCallback((index) => {
        const img = bannersRefs.current[index]
        if (!img) return

        gsap.to(img, {
            x: 0,
            y: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'power1.out'
        })
    }, [])

    useEffect(() => {
        // Inicializa com opacity 0
        bannersRefs.current.forEach(img => {
            if (img) gsap.set(img, { opacity: 0 })
        })

        const containers = containerRefs.current
        const moveHandlers = []
        const leaveHandlers = []

        containers.forEach((container, index) => {
            if (!container) return

            const moveHandler = e => handleMouseMove(e, index)
            const leaveHandler = () => handleMouseLeave(index)

            moveHandlers[index] = moveHandler
            leaveHandlers[index] = leaveHandler

            container.addEventListener('mousemove', moveHandler)
            container.addEventListener('mouseleave', leaveHandler)
        })

        return () => {
            containers.forEach((container, index) => {
                if (!container) return
                container.removeEventListener('mousemove', moveHandlers[index])
                container.removeEventListener('mouseleave', leaveHandlers[index])
            })
        }
    }, [handleMouseMove, handleMouseLeave])

    return (
        <section className={styles.all_project_container}>
            <div className={styles.row}>
                <div className={styles.title}>
                    <h1><span>desafios</span> aumentam</h1>
                    <h1>conforme <span>o progresso</span></h1>
                </div>

                {projects.map((project, index) => (
                    <div
                        className={styles.layers}
                        key={project.id}
                        ref={el => containerRefs.current[index] = el}
                    >
                        <div className={styles.title_project}>
                            <h1>{project.name}</h1>
                        </div>

                        <div
                            className={styles.box_img_project}
                            ref={el => bannersRefs.current[index] = el}
                        >
                            <img
                                src={project.img}
                                alt={`Projeto ${project.name}`}
                                loading="lazy"
                            />
                        </div>

                        <a
                            className={styles.svg}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Acesse ${project.name}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                                <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
