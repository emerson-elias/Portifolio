import { useEffect, useState } from 'react'

import styles from '../modal/modal.module.scss'
import Backdrop from '../backdrop/backdrop.jsx'


const Modal = ({ setShowModal, title, gif, modalInfo, year, link, tecnology }) => {
    const [showAnimated, setShowAnimated] = useState(false)

    useEffect(() => {
        setShowAnimated(true)
    }, [])

    const closeModal = () => {
        setShowAnimated(false)
        setTimeout(() => {
            setShowModal(false)
        }, 500)
    }

    return (
        <>
            <Backdrop showBackdrop={showAnimated} closeModal={closeModal} />
            <section className={`${styles.modal} ${showAnimated && styles.animated_modal}`}>
                <div className={styles.closer}>
                    <i className="fa-solid fa-xmark" onClick={closeModal}></i>
                </div>
                <div className={styles.row}>

                    <section className={styles.project_text_linear}>
                        <h1>- {title} -</h1>
                        <h1>- {title} -</h1>
                        <h1>- {title} -</h1>

                        <div className={styles.layer_img}>
                            <img src={gif} alt={title} />
                        </div>
                    </section>

                    <div className={styles.box}>

                        <div className={styles.layer}>

                            <div className={styles.box_1}>
                                <a href={link} target="_blank" rel="noopener noreferrer">Acesse <i className="fa-solid fa-arrow-trend-up"></i> </a>

                                <div className={styles.detals}>
                                    <span>website</span>
                                    <i className="fa-solid fa-bowling-ball"></i>
                                    <i className="fa-solid fa-bowling-ball"></i>
                                    <i className="fa-solid fa-bowling-ball"></i>
                                    <span>{year}</span>
                                </div>
                            </div>

                            <div className={styles.box_2}>

                                <div className={styles.tecnology}>

                                    <h1>tecnologias</h1>

                                    <div>
                                        {tecnology.map((tech, index) => (
                                            <span key={index}>{tech}</span> // Exibe cada tecnologia em sua posição
                                        ))}
                                    </div>

                                </div>

                                <div className={styles.description}>
                                    <p>{modalInfo}</p>

                                    <div className={styles.box_btn}>
                                        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.btn}>Mais detalhes</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Modal