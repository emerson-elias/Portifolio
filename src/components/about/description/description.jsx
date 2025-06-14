import { useEffect } from "react"

import hero from "/assets/img/Me-hero.webp"

import '../description/description.scss'

export default function Description() {

    return (
        <>
            <section className="description-container">
                <div className="description-info">

                    <div className="box-img">
                        <img src={hero} alt="Emerson Elias" />
                    </div>

                    <div className="about-description">

                        <div className="tittle">
                            <span>&.</span>
                            <h1>Um pouco sobre mim !</h1>
                        </div>

                        <div className="layers">
                            <h1>Quem eu Sou</h1>

                            <p>Olá! meu nome é Emerson Elias, tenho 26 anos e
                                atualmente moro na cidade de Marabá-PA.
                            </p>

                        </div>

                        <div className="layers">
                            <h1>O que faço</h1>

                            <p>Sou desenvolvedor front-end, mas estou atuando no
                                <a href="https://www.grupolideronline.com.br/" target="_blank">Grupo Líder </a>
                                como Analista de Suporte, neste cargo sou responsável por toda a parte de T.I da empresa.
                            </p>

                        </div>

                        <div className="layers">
                            <h1>De onde Sou</h1>

                            <p>Sou naturalista de São Luís - MA, uma linda ilha,
                                mais conhecida como "ilha do amor" que é repleta de belezas naturais
                                e muitas histórias em cada esquina.
                            </p>

                        </div>

                        <div className="layers">
                            <h1>Por que Programação?</h1>

                            <p>Sou apaixonado pela programação desde cedo,
                                logo quando completei meu ensino médio fiz o curso de Desenvolvimento de Sistemas, na instituíção
                                participei de diversos projetos,
                                um deles é o <a href="https://sol.sbc.org.br/index.php/sbie/article/view/12799/12653" target="_blank">Potencializa 3D</a>,
                                além disso tive a oportunidade de ser monitor de algoritmos,
                                o que reforçou ainda mais minha paixão pelo desenvolvimento.</p>
                        </div>

                        <div className="layers">
                            <h1>Meu currículo!</h1>

                            <div className="cicle">
                                <a href="https://drive.google.com/file/d/15zY3xHj9nhE3uaiNlSTSQ8_slmKK5OPp/view" target="_blank" rel="noopener noreferrer">
                                    <svg width="104" height="54" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.66 4.442C19.968 3.87 51.687 7.98 59.806 10.15c8.119 2.17 42.004 11.335 42.193 22.216.19 10.881-23.966 21.44-51.095 18.938C23.775 48.802 2.174 36.415 2.001 25.7 1.828 14.986 19.498 5.55 42.092 2.767c22.595-2.785 62.01 7.677 49.853 28.879" stroke="#caa986" strokeWidth="3" fill="none" fillRule="evenodd"></path>
                                        <text x="29%" y="50%" textAnchor="middle" dy=".3em" fill="#ffffffb9">cv</text>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}