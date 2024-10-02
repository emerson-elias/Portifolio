import { useEffect } from "react"

import Cursor from '../../Components/cursor/cursor'
import Footer from '../../Components/footer/footer'
import NavBar from '../../Components/nav/nav'
import Topo from '../../Components/topo/topo'
import Banner from './banner/banner'
import Contate from "../../Components/contate-me/contate.jsx"

import './projects.scss'

export default function Projects() {

    useEffect(() => {
        if (window.pageYOffset > 0) {
            window.scrollTo(0, 0);
        }
    }, [])
    
    return (
        <>
            <Cursor />
            <NavBar />
            <Banner />

            <section className="all-project-container">
                <div className="row">
                    <div className="title">
                        <h1><span>desafios</span> aumentam</h1>
                        <h1>conforme <span>o progresso</span></h1>
                    </div>

                    <div className="layers">
                        <div className="title-project">
                            <h1>minimaslimo</h1>
                        </div>

                        <a className='svg' title="Acesse o projeto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                                <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>

                    <div className="layers">
                        <div className="title-project">
                            <h1>speed food</h1>
                        </div>

                        <a className='svg' title="Acesse o projeto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                                <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>

                    <div className="layers">
                        <div className="title-project">
                            <h1>carros</h1>
                        </div>

                        <a className='svg' title="Acesse o projeto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                                <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>

                    <div className="layers">
                        <div className="title-project">
                            <h1>natureza</h1>
                        </div>

                        <a className='svg' title="Acesse o projeto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                                <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>

                    <div className="layers">
                        <div className="title-project">
                            <h1>isto é pousada</h1>
                        </div>

                        <a className='svg' title="Acesse o projeto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                                <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>

                    <div className="layers">
                        <div className="title-project">
                            <h1>pablo</h1>
                        </div>

                        <a className='svg' title="Acesse o projeto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                                <path d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <Contate />
            <Topo />
            <Footer />
        </>
    )
}