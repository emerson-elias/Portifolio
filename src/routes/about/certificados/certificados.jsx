import { useEffect } from "react"

import AOS from 'aos'
import 'aos/dist/aos.css'

import '../certificados/certificados.scss'

import MINERACAO from '/assets/certificados/certificado-mineração.png'
import MONITOR from '/assets/certificados/certificado-monitor.png'
import POTENCIALIZA from '/assets/certificados/certificado-potencializa.png'
import DIPLOMA from '/assets/certificados/diploma.png'

export default function Certificados() {

    
    useEffect(() => {
     

        AOS.init({
            duration: 2000,
            offset: -70,
        })

    }, [])

    return (
        <section className="certificados-container">

            <section className="row">

                <div className="slider-text">
                    <h1>certificados</h1>
                    <h1>certificados</h1>
                </div>

                <div className="tittle">
                    <span data-aos="zoom-in-up">Crie</span>
                    <span data-aos="zoom-in-up">metas</span>
                    <span data-aos="zoom-in-up">na</span>
                    <span data-aos="zoom-in-up">vida e</span>
                    <span data-aos="zoom-in-up">as</span>
                    <span data-aos="zoom-in-up">alcance,</span>
                    <span data-aos="zoom-in-up">sempre</span>
                    <span data-aos="zoom-in-up">seremos</span>
                    <span data-aos="zoom-in-up">eternos</span>
                    <span data-aos="zoom-in-up">alunos</span>
                </div>
            </section>

            <div className="certificados">

                <div className="layer-1">
                    <div className="box-img">
                        <img src={MINERACAO} alt="mineração" />
                    </div>
                    <div className="box-img">
                        <img src={MONITOR} alt="monitor" />
                    </div>
                    <div className="box-img">
                        <img src={POTENCIALIZA} alt="potencializa" />
                    </div>
                    <div className="box-img">
                        <img src={DIPLOMA} alt="diploma" />
                    </div>
                    <div className="box-img">
                    <img src={MINERACAO} alt="mineração" />
                    </div>
                </div>

                <div className="layer-2">
                    <div className="box-img">
                        <img src={POTENCIALIZA} alt="potencializa" />
                    </div>
                    <div className="box-img">
                        <img src={DIPLOMA} alt="diploma" />
                    </div>
                    <div className="box-img">
                    <img src={MINERACAO} alt="mineração" />
                    </div>
                    <div className="box-img">
                    <img src={MONITOR} alt="monitor" />
                    </div>
                    <div className="box-img">
                        <img src={POTENCIALIZA} alt="potencializa" />
                    </div>
                </div>
            </div>
        </section>
    )
}
