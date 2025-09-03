import { useEffect, useState } from 'react'

import Backdrop from '../backdrop/backdrop'
import Linear from '../../../../global/textLianer/linear'
import ProjectGif from '../../projectGif/projectGif'
import Closer from '../../closer/closer'

import styles from './modal.module.scss'

const Modal = ({
    setShowModal,
    title,
    gif,
    modalInfo,
    year,
    link,
    link_github,
    tecnology,
    bg_view
}) => {
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

                <Closer onClose={closeModal} />

                <div className={styles.row}>
                    <div className={styles.columnOne}>
                        <Linear text={title} size='20vmax' />

                        <div className={styles.layerImg}>
                            <ProjectGif gif={gif} background={bg_view} />
                        </div>
                    </div>

                    <div className={styles.columnTwo}>

                        <div className={styles.boxOne}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                Acesse <i className="fa-solid fa-arrow-trend-up"></i>
                            </a>

                            <div className={styles.detals}>
                                <span>website</span>
                                <i className="fa-solid fa-bowling-ball"></i>
                                <i className="fa-solid fa-bowling-ball"></i>
                                <i className="fa-solid fa-bowling-ball"></i>
                                <span>{year}</span>
                            </div>
                        </div>

                        <div className={styles.boxTwo}>
                            <div className={styles.tecnology}>
                                <h1>tecnologias</h1>
                                <div>
                                    {tecnology.map((tech, index) => (
                                        <span key={index}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.description}>
                                <p>{modalInfo}</p>
                                <div className={styles.box_btn}>
                                    <a href={link_github} target="_blank" rel="noopener noreferrer" className={styles.btn}>
                                        Mais detalhes
                                    </a>
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