import '../certificados/certificados.scss'

import MINERACAO from '/assets/certificados/certificado-mineração.png'
import MONITOR from '/assets/certificados/certificado-monitor.png'
import POTENCIALIZA from '/assets/certificados/certificado-potencializa.png'
import DIPLOMA from '/assets/certificados/diploma.png'

export default function Certificados() {


    return (
        <section className="certificados-container">

            <section className="row">

                <div className="slider-text">
                    <h1>certificados</h1>
                    <h1>certificados</h1>
                </div>

                <div className="tittle">
                    <span>Crie</span>
                    <span>metas</span>
                    <span>na</span>
                    <span>vida e</span>
                    <span>as</span>
                    <span>alcance,</span>
                    <span>sempre</span>
                    <span>seremos</span>
                    <span>eternos</span>
                    <span>alunos</span>
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
