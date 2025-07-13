import { useRef, useState, useEffect } from 'react'
import { useAssetsLoaded } from '../../../contexts/AssetLoaderProvider'

import styles from './sound.module.scss'
import music from '/assets/music/sappheiros.mp3'

export default function Sound() {
    const musicRef = useRef(null)
    const spanRef = useRef(null)
    
    const [soundState, setSoundState] = useState('OFF')
    const { allAssetsLoaded } = useAssetsLoaded()

    useEffect(() => {
        if (allAssetsLoaded && musicRef.current) {
            musicRef.current.volume = 0.3
        }
    }, [allAssetsLoaded])

    const eventSound = () => {
        if (!allAssetsLoaded) return

        const musicElement = musicRef.current
        if (musicElement.paused) {
            musicElement.play().then(() => setSoundState('ON'))
        } else {
            musicElement.pause()
            setSoundState('OFF')
        }
    }

    useEffect(() => {
        const root = document.getElementById('root')
        const span = spanRef.current

        const handleScroll = () => {
            const scrollY = root.scrollTop
            const scrollHeight = root.scrollHeight
            const clientHeight = root.clientHeight

            const distanceToBottom = scrollHeight - (scrollY + clientHeight)

            if (distanceToBottom <= clientHeight / 2) {
                span.classList.add(styles.colorBottom)
            } else {
                span.classList.remove(styles.colorBottom)
            }
        }

        root.addEventListener('scroll', handleScroll)
        return () => {
            root.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section className={styles.sound_container} title='Vamos aumentar a experiência?'>
            <a className={styles.sound} onClick={eventSound}>
                <span ref={spanRef}>música : {soundState}</span>
                <audio ref={musicRef} loop src={music} preload="auto"></audio>
            </a>
        </section>
    )
}
