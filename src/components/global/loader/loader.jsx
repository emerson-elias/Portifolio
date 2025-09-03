import styles from './loader.module.scss'

export default function Loader({ isExiting }) {
    return (
        <section className={`${styles.loader_container} ${isExiting ? styles.exit : ''}`}>
            <div className={styles.cube}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.loader}>
                <span>carregando</span>
            </div>
        </section>
    )
}
