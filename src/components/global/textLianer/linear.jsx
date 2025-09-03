
import styles from './linear.module.scss'

export default function Linear({ text, size }) {
    return (
        <section className={styles.linear_container}>
            {[...Array(4)].map((_, index) => (
                <h1 key={index} style={{ fontSize: size }}>
                    - {text}
                </h1>
            ))}
        </section>
    )
}