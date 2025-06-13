import { useRef, useState, useEffect } from 'react'
import { useAssetsLoaded } from '../../../contexts/AssetLoaderProvider'
import styles from './sound.module.scss'
import music from '/assets/music/sappheiros.mp3'

export default function Sound() {
    const musicRef = useRef(null)
    const [soundState, setSoundState] = useState('OFF')
    const { allAssetsLoaded } = useAssetsLoaded()

    useEffect(() => {
        // Só interage quando tudo estiver carregado
        if (allAssetsLoaded && musicRef.current) {
            musicRef.current.volume = 0.3
        }
    }, [allAssetsLoaded])

    const eventSound = () => {
        if (!allAssetsLoaded) return // Não faz nada se não carregou

        const musicElement = musicRef.current
        if (musicElement.paused) {
            musicElement.play().then(() => setSoundState('ON'))
        } else {
            musicElement.pause()
            setSoundState('OFF')
        }
    }

    return (
        <section className={styles.sound_container} title='Vamos aumentar a experiência?'>
            <a className={styles.sound} onClick={eventSound}>
                <span>música : {soundState}</span>
                <audio ref={musicRef} loop src={music} preload="auto"></audio>
            </a>
        </section>
    )
}