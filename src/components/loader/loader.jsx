import styles from './loader.module.scss'

export default function Loader({ className }) {
    return (
        <section className={`${styles.loader_container} ${className || ""}`}>

            <div className={styles.cube}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={styles.loader}>
                <span>carregando...</span>
            </div>

        </section>
    )
}