import styles from '../backdrop/backdrop.module.scss'

const Backdrop = ({ closeModal, showBackdrop }) => {
    return(
        <>
        <div className={`${styles.backdrop} ${showBackdrop && styles.showBackdrop}`} onClick={closeModal}></div>
        </>
    )
}

export default Backdrop