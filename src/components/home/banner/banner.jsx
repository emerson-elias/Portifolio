import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './banner.module.scss'
import Linear from '../../global/textLianer/linear'

export default function Banner() {
    const layer3Ref = useRef(null)
    const magnect1Ref = useRef(null)
    const magnect2Ref = useRef(null)

    useEffect(() => {
        const layer_3 = layer3Ref.current
        const element_first = magnect1Ref.current
        const element_second = magnect2Ref.current

        const handleMouseMove = (e) => {
            const rect = layer_3.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top

            gsap.to(element_first, {
                duration: 0.3,
                x: x - element_first.offsetWidth / 2,
                y: y - element_first.offsetHeight / 2,
                ease: 'power1.out'
            })

            gsap.to(element_second, {
                duration: 0.6,
                x: x - element_second.offsetWidth / 2,
                y: y - element_second.offsetHeight / 2,
                ease: 'power1.out'
            })
        }

        const handleMouseLeave = () => {
            gsap.to(element_first, {
                duration: 0.3,
                x: 0,
                y: 0,
                ease: 'power1.out'
            })

            gsap.to(element_second, {
                duration: 0.6,
                x: 0,
                y: 0,
                ease: 'power1.out'
            })
        }

        if (layer_3 && element_first && element_second) {
            layer_3.addEventListener('mousemove', handleMouseMove)
            layer_3.addEventListener('mouseleave', handleMouseLeave)
        }

        return () => {
            if (layer_3) {
                layer_3.removeEventListener('mousemove', handleMouseMove)
                layer_3.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])

    return (
        <section className={styles.banner_container}>

            <section className={styles.text_linear}>
                 <Linear text={'criando - experiências'} size='60vh'/>
            </section>

            <section className={styles.row}>

                <div className={styles.layer_1}>
                    <h1>creative ⟶</h1>
                </div>

                <div className={styles.layer_2}>

                    <div className={styles.box}>
                        <h1>front-end</h1>
                    </div>

                    <div className={styles.box}>
                        <h1><span>dev</span>eloper</h1>
                    </div>

                    <p>─ Sou desenvolvedor naturalista de São Luís,
                        amo programação, ─ designs minimalistas e ornamentados, músicas, jogos, natureza e pizza.
                    </p>

                </div>

                <div className={styles.layer_3} ref={layer3Ref}>

                    <div id={styles.magnect_1} ref={magnect1Ref}>
                        <a href="#contatos"></a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                            <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="currentColor" />
                        </svg>
                    </div>

                    <div id={styles.magnect_2} ref={magnect2Ref}></div>
                </div>

            </section>
        </section>
    )
}
