import styles from './backdrop.module.scss'

const Backdrop = ({ closeModal, showBackdrop }) => {
    return (
        <>
            <section className={`${styles.backdrop} ${showBackdrop && styles.showBackdrop}`} onClick={closeModal}></section>
        </>
    )
}

export default Backdrop