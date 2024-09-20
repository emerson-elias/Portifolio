import '../diferenciais/diferenciais.scss'

export default function Diferenciais() {
    return (
        <section className='diferenciais-container'>

            <div className="row-1">

                <div className="tittle">
                    <h1>Programas <span>&</span> Softwares</h1>
                </div>

                <div className="systens" data-aos="zoom-out">
                    <span>figma</span>
                    <span>canvas</span>
                    <span>vs code</span>
                    <span>gamma</span>
                    <span>magic ui</span>
                    <span>devicon</span>
                    <span>blackbox</span>
                    <span>noun</span>
                    <span>vercel</span>
                    <span>spotify</span>
                </div>
            </div>

            <div className="svg-animate">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <path fill="#ffffff" d="m228.13 116.77l-65.19-23.71l-23.71-65.19a11.95 11.95 0 0 0-22.46 0L93.06 93.06l-65.19 23.71a11.95 11.95 0 0 0 0 22.46l65.19 23.71l23.71 65.19a11.95 11.95 0 0 0 22.46 0l23.71-65.19l65.19-23.71a11.95 11.95 0 0 0 0-22.46m-2.73 15l-67 24.34a4 4 0 0 0-2.39 2.39l-24.34 67a4 4 0 0 1-7.44 0l-24.34-67a4 4 0 0 0-2.39-2.39l-66.9-24.39a4 4 0 0 1 0-7.44l66.95-24.34a4 4 0 0 0 2.39-2.39l24.34-66.95a4 4 0 0 1 7.44 0l24.34 66.95a4 4 0 0 0 2.39 2.39l67 24.34a4 4 0 0 1 0 7.44Z" />
                </svg>
            </div>

            <div className="row-2">

                <div className="tittle">
                    <h1>diferenciais</h1>
                </div>

                <div className="layers">

                    <div className="skills" data-aos="zoom-out">
                        <h1>Pessoal</h1>

                        <span>Empatia</span>
                        <span>Gentileza</span>
                        <span>Honestidade</span>
                        <span>Paciência</span>
                        <span>Generosidade</span>
                        <span>Humildade</span>
                        <span>Flexibilidade</span>
                        <span>Respeito</span>
                        <span>Compreensão</span>
                        <span>Confiança</span>
                    </div>

                    <div className="skills" data-aos="zoom-out">
                        <h1>profissional</h1>

                        <span>Adaptabilidade</span>
                        <span>Proatividade</span>
                        <span>Autodisciplina</span>
                        <span>Atenção</span>
                        <span>Colaboração</span>
                        <span>Solução</span>
                        <span>Foco</span>
                        <span>Ética</span>
                        <span>Integridade</span>
                        <span>Técnico</span>
                    </div>

                </div>
            </div>
        </section>
    )
}