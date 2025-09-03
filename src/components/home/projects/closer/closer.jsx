import styles from './closer.module.scss'

export default function Closer({ onClose }) {
    return (
        <section className={styles.closer_container} onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
        </section>
    )
}