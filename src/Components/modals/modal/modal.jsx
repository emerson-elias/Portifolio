import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'


import styles from '../modal/modal.module.scss'
import Backdrop from '../backdrop/backdrop.jsx'


const Modal = ({ setShowModal, modalInfo }) => {

    const [showAnimated, setShowAnimated] = useState(false)

    useEffect(() => {
        setShowAnimated(true)
    },[])
    
    const closeModal = () => {
        setShowAnimated(false)

        setTimeout(() => {
            setShowModal(false)
        },500)
    }

    return (
        <>
            <Backdrop showBackdrop={showAnimated} closeModal={closeModal} />
            <div className={`${styles.modal} ${showAnimated && styles.animated_modal}`}>

                <div className={styles.closer}> 
                    <i className="fa-solid fa-xmark close-icon" onClick={closeModal}></i>
                </div>

                <p>{modalInfo}</p>
            </div>
        </>
    )
}

export default Modal