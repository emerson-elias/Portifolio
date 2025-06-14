import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import styles from './projects.module.scss'

import Cursor from '../global/cursor/cursor'
import NavBar from '../global/nav/nav'
import Banner from './banner/banner_project'
import Loader from '../global/loader/loader'

import { useAssetsLoaded } from '../../contexts/AssetLoaderProvider'

export default function Projects() {
    const { allAssetsLoaded } = useAssetsLoaded()
    const containerRefs = useRef([])
    const bannersRefs = useRef([])
    const animations = useRef([])

    const projets = [
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
            name: 'belle',
        },
        {
            id: 3,
            img: '/assets/img/1.jpg',
            link: 'https://recanto-belle-vue.vercel.app/',
            name: 'vue',
        }
    ]

    useEffect(() => {
        window.history.scrollRestoration = "manual"
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    // Configuração inicial das animações
    useEffect(() => {
        if (!allAssetsLoaded) return

        // Inicializa todas as imagens com opacity 0
        bannersRefs.current.forEach(img => {
            if (img) {
                gsap.set(img, { opacity: 0 })
            }
        })

        return () => {
            // Limpa todas as animações ao desmontar
            animations.current.forEach(anim => anim?.kill())
        }
    }, [allAssetsLoaded])

    const handleMouseMove = useCallback((e, index) => {
        const container = containerRefs.current[index]
        const img = bannersRefs.current[index]
        if (!container || !img) return

        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        // Armazena a animação para poder limpar depois
        const anim = gsap.to(img, {
            x: (x - img.offsetWidth / 2) * 0.1,
            y: (y - img.offsetHeight / 2) * 0.1,
            opacity: 1,
            duration: 0.5,
            ease: 'power1.out'
        })

        animations.current[index] = anim
    }, [])

    const handleMouseLeave = useCallback((index) => {
        const img = bannersRefs.current[index]
        if (!img) return

        const anim = gsap.to(img, {
            x: 0,
            y: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'power1.out'
        })

        animations.current[index] = anim
    }, [])

    // Configuração dos event listeners
    useEffect(() => {
        if (!allAssetsLoaded) return

        const containers = containerRefs.current

        containers.forEach((container, index) => {
            if (!container) return

            container.addEventListener('mousemove', (e) => handleMouseMove(e, index))
            container.addEventListener('mouseleave', () => handleMouseLeave(index))
        })

        return () => {
            containers.forEach((container, index) => {
                if (!container) return

                container.removeEventListener('mousemove', (e) => handleMouseMove(e, index))
                container.removeEventListener('mouseleave', () => handleMouseLeave(index))
            })
        }
    }, [allAssetsLoaded, handleMouseMove, handleMouseLeave])

    if (!allAssetsLoaded) return <Loader />

    return (
        <>
            <Cursor />
            <NavBar />
            <Banner />

            <section className={styles.all_project_container}>
                <div className={styles.row}>
                    <div className={styles.title}>
                        <h1><span>desafios</span> aumentam</h1>
                        <h1>conforme <span>o progresso</span></h1>
                    </div>

                    {projets.map((project, index) => (
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
                                    <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z"
                                        fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}