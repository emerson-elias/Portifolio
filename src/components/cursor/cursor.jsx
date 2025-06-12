import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import styles from './cursor.module.scss'

export default function Cursor() {
    const cursorRef = useRef(null)
    const cursorTextRef = useRef(null) // Referência para o texto dentro do cursor

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorText = cursorTextRef.current

        const Move_Cursor = (e) => {
            gsap.to(cursor, {
                duration: 0.3,
                x: e.clientX - cursor.offsetWidth / 2,
                y: e.clientY - cursor.offsetHeight / 2,
                ease: "power2.out"
            })
        }

        const Cursor_Element_Enter = () => {
            gsap.to(cursor, {
                scale: 15, // Aumenta o tamanho do cursor
                duration: 0.3,
                ease: "power2.out"
            })
        }

        const Cursor_Element_Out = () => {
            gsap.to(cursor, {
                scale: 1, // Volta ao tamanho original
                duration: 0.3,
                ease: "power2.out"
            })
        }

        const Show_Cursor_Text = () => {
            gsap.to(cursorText, {
                opacity: 1, // Mostra o texto
                duration: 0.3,
                ease: "power2.out"
            })
        }

        const Hide_Cursor_Text = () => {
            gsap.to(cursorText, {
                opacity: 0, // Oculta o texto
                duration: 0.3,
                ease: "power2.out"
            })
        }

        // Adiciona eventos de movimento do cursor
        document.addEventListener('mousemove', Move_Cursor)

        // Adiciona eventos de escala para todos os links <a>
        document.querySelectorAll('a').forEach(anchor => {
            anchor.addEventListener('mouseover', Cursor_Element_Enter)
            anchor.addEventListener('mouseout', Cursor_Element_Out)
        })

        // Adiciona eventos para mostrar texto ao passar sobre divs com a classe "view"
        const viewDivs = document.querySelectorAll('.view')
        viewDivs.forEach(viewDiv => {
            viewDiv.addEventListener('mouseenter', () => {
                Cursor_Element_Enter() // Aumenta o cursor
                Show_Cursor_Text() // Mostra o texto
            })
            viewDiv.addEventListener('mouseleave', () => {
                Cursor_Element_Out() // Volta o cursor ao tamanho normal
                Hide_Cursor_Text() // Oculta o texto
            })
        })

        // Função de limpeza
        return () => {
            document.removeEventListener('mousemove', Move_Cursor)

            document.querySelectorAll('a').forEach(anchor => {
                anchor.removeEventListener('mouseover', Cursor_Element_Enter)
                anchor.removeEventListener('mouseout', Cursor_Element_Out)
            })

            viewDivs.forEach(viewDiv => {
                viewDiv.removeEventListener('mouseenter', Show_Cursor_Text)
                viewDiv.removeEventListener('mouseleave', Hide_Cursor_Text)
            })
        }
    }, [])

    return (
        <div id={styles.cursor} ref={cursorRef}>
            <span ref={cursorTextRef}>View</span>
        </div>
    )
}