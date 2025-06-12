import { useRef, useState } from 'react'

import styles from './sound.module.scss'
import music from '/assets/music/sappheiros.mp3'

export default function Sound() {
    
    const musicRef = useRef(null)
    const [soundState, setSoundState] = useState('OFF')

    const Sound = () => {
        const musicElement = musicRef.current

        // Verifique se o áudio está disponível
        if (musicElement) {
            if (musicElement.paused) {
                musicElement.play()
                setSoundState('ON')
            } else {
                musicElement.pause()
                setSoundState('OFF')
            }
        } else {
            console.error("O elemento de áudio não está disponível.")
        }
    }

    return (
        <section className={styles.sound_container} title='Vamos aumentar a experiência?'>
            <a className={styles.sound} onClick={Sound}>
                <span>música : </span>
                ohikh,ili
                <span>{soundState}</span>
                <audio ref={musicRef} loop src={music}></audio>
            </a>
        </section>
    )
}
