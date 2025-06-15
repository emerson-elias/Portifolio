import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import styles from './cursor.module.scss'

export default function Cursor() {
    const cursorRef = useRef(null)
    const cursorTextRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorText = cursorTextRef.current

        const moveCursor = (e) => {
            gsap.to(cursor, {
                duration: 0.3,
                x: e.clientX - cursor.offsetWidth / 2,
                y: e.clientY - cursor.offsetHeight / 2,
                ease: 'power2.out'
            })
        }

        const scaleCursorUp = () => {
            gsap.to(cursor, {
                scale: 15,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        const scaleCursorDown = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        const showCursorText = () => {
            gsap.to(cursorText, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        const hideCursorText = () => {
            gsap.to(cursorText, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out'
            })
        }

        const handleMouseOver = (e) => {
            const link = e.target.closest('a, [data-link]')
            const view = e.target.closest('.view')

            if (link) scaleCursorUp()
            if (view) {
                scaleCursorUp()
                showCursorText()
            }
        }

        const handleMouseOut = (e) => {
            const link = e.target.closest('a, [data-link]')
            const view = e.target.closest('.view')

            if (link) scaleCursorDown()
            if (view) {
                scaleCursorDown()
                hideCursorText()
            }
        }

        document.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseout', handleMouseOut)

        return () => {
            document.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])

    return (
        <div id={styles.cursor} ref={cursorRef}>
            <span ref={cursorTextRef}>View</span>
        </div>
    )
}