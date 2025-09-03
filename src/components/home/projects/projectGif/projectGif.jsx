
import styles from './projectGif.module.scss'

export default function ProjectGif({ gif, background }) {
    return (
        <section className={styles.projectGif_container}
            style={{ backgroundColor: background }}
        >
            <img src={gif} loading="lazy" alt={'BANNER PROJETO 1'} />
        </section>
    )
}