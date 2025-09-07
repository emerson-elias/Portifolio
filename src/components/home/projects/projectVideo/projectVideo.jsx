
import styles from './projectVideo.module.scss'

export default function ProjectVideo({ video, background }) {
    return (
        <section className={styles.projectVideo_container}
            style={{ backgroundColor: background }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={video} type='video/mp4' alt={'BANNER PROJETO 1'}/>
            </video>
        </section>
    )
}