import '../tecnology/tecnology.scss'

import HTML from '../../../public/imgs/tecnologias/html.png'
import CSS from '../../../public/imgs/tecnologias/css.png'
import SASS from '../../../public/imgs/tecnologias/sass.png'
import REACT from '../../../public/imgs/tecnologias/reactt.png'
import JS from '../../../public/imgs/tecnologias/js.png'
import TS from '../../../public/imgs/tecnologias/ts.png'
import PHP from '../../../public/imgs/tecnologias/php.png'
import GTI from '../../../public/imgs/tecnologias/github.png'
import VERCEL from '../../../public/imgs/tecnologias/vercel.png'
import FIGMA from '../../../public/imgs/tecnologias/figma.png'
import SQL from '../../../public/imgs/tecnologias/sql-server.png'
import JAVA from '../../../public/imgs/tecnologias/java.png'
import TAILWIND from '../../../public/imgs/tecnologias/tailwind.png'
import BOOTSTRAP from '../../../public/imgs/tecnologias/bootstrap.png'
import MATERIALIZE from '../../../public/imgs/tecnologias/materialize.png'
import BULMA from '../../../public/imgs/tecnologias/bulma.png'

export default function Tecnology() {
    return (
        <section className="tecnology-container">

            <section className="boll-bg">
                <span className="icon-park-outline--loading"></span>
            </section>

            <div className="tittle" id='tecnologias'>
                <h1>tecnologias</h1>
            </div>

            <div className="row">

                <div className="layers">

                    <div className="card">
                        <div className="icon-tec">
                            <img src={HTML} alt="HTML" />
                        </div>
                        <div className="card-text">
                            <span>html</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={CSS} alt="CSS" />
                        </div>
                        <div className="card-text">
                            <span>CSS</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={SASS} alt="SASS" />
                        </div>
                        <div className="card-text">
                            <span>SASS</span>
                        </div>
                    </div>


                    <div className="card">
                        <div className="icon-tec">
                            <img src={REACT} alt="REACT" />
                        </div>
                        <div className="card-text">
                            <span>REACT</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={JS} alt="JS" />
                        </div>
                        <div className="card-text">
                            <span>JAVASCRIPT</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={TS} alt="TS" />
                        </div>
                        <div className="card-text">
                            <span>TYPESCRIPT</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={PHP} alt="PHP" />
                        </div>
                        <div className="card-text">
                            <span>PHP</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={GTI} alt="GTI" />
                        </div>
                        <div className="card-text">
                            <span>GIT</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={VERCEL} alt="VERCEL" />
                        </div>
                        <div className="card-text">
                            <span>VERCEL</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={FIGMA} alt="FIGMA" />
                        </div>
                        <div className="card-text">
                            <span>FIGMA</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={SQL} alt="SQL" />
                        </div>
                        <div className="card-text">
                            <span>SQL</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={JAVA} alt="JAVA" />
                        </div>
                        <div className="card-text">
                            <span>JAVA</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={TAILWIND} alt="TAILWIND" />
                        </div>
                        <div className="card-text">
                            <span>TAILWIND</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={BOOTSTRAP} alt="BOOTSTRAP" />
                        </div>
                        <div className="card-text">
                            <span>BOOTSTRAP</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={MATERIALIZE} alt="MATERIALIZE" />
                        </div>
                        <div className="card-text">
                            <span>MATERIALIZE</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}