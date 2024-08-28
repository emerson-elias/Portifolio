import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './banner.scss'

export default function Banner() {
    const layer3Ref = useRef(null)
    const magnect1Ref = useRef(null)
    const magnect2Ref = useRef(null)

    useEffect(() => {
        const layer3 = layer3Ref.current
        const elementFirst = magnect1Ref.current
        const elementSecond = magnect2Ref.current

        function animix_follow_cursor(container, el_first, el_second) {
            
            if (container && el_first && el_second) {
                container.addEventListener('mousemove', (e) => {
                    const rect = container.getBoundingClientRect()
                    const Width1 = el_first.offsetWidth / 2
                    const Height1 = el_first.offsetHeight / 2
                    const Width2 = el_second.offsetWidth / 2
                    const Height2 = el_second.offsetHeight / 2
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top

                    // Primeira div segue o cursor imediatamente
                    gsap.to(el_first, {
                        duration: 0.3,
                        x: x - Width1,
                        y: y - Height1,
                        ease: 'power1.out'
                    })

                    // Segunda div segue o cursor com atraso
                    gsap.to(el_second, {
                        duration: 0.6,
                        x: x - Width2,
                        y: y - Height2,
                        ease: 'power1.out'
                    })
                })

                container.addEventListener('mouseleave', () => {
                    // Reset das divs
                    gsap.to(el_first, {
                        duration: 0.3,
                        x: 0,
                        y: 0,
                        ease: 'power1.out'
                    })

                    gsap.to(el_second, {
                        duration: 0.6,
                        x: 0,
                        y: 0,
                        ease: 'power1.out'
                    })
                })
            }
        }

        animix_follow_cursor(layer3, elementFirst, elementSecond)

        // Adiciona evento de clique para rolagem suave
        layer3.addEventListener('click', () => {
            document.getElementById('contatos').scrollIntoView({ behavior: 'smooth' })
        })

        return () => {
            // Cleanup ao desmontar o componente
            if (layer3) {
                layer3.removeEventListener('mousemove', null)
                layer3.removeEventListener('mouseleave', null)
                layer3.removeEventListener('click', null)
            }
        }
    }, [])

    return (
        <section className="banner">
            <section className="banner-text-linear">
                <h1> - criando - experiências</h1>
                <h1> - criando - experiências</h1>
            </section>

            <section className="row">
                <div className="layer-1">
                    <h1>creative ⟶</h1>
                </div>

                <div className="layer-2">
                    <h1>front-end</h1>
                    <h1><span>dev</span>eloper</h1>
                    <p>─ Sou desenvolvedor naturalista de São Luís,
                        amo programação, ─ designs minimalistas e ornamentados, músicas, jogos, natureza e pizza.
                    </p>
                </div>

                <div className="layer-3" ref={layer3Ref}>
                    <div id="magnect-1" ref={magnect1Ref}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                            <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="#fff" />
                        </svg>
                    </div>

                    <div id="magnect-2" ref={magnect2Ref}></div>
                </div>
            </section>
        </section>
    )
}
