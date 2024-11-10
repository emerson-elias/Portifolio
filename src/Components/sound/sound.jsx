import { useRef, useState } from 'react'
import './sound.scss'
import music from './music/sappheiros.mp3'

export default function Sound() {
    
    const musicRef = useRef(null)
    const [soundState, setSoundState] = useState('OFF')

    const handleSound = () => {
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
        <section className="sound-container" title='Vamos aumentar a experiência?'>
            <a className="sound" onClick={handleSound}>
                <span>musica : </span>
                <span>{soundState}</span>
                <audio ref={musicRef} loop src={music}></audio>
            </a>
        </section>
    )
}
