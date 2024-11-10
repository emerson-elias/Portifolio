import '../modal/modal.scss'

export default function Modal({ onClose }) {
    return (
        <section className="modal-container">

          

            <div className="closer">
                <i className="fa-solid fa-xmark" onClick={onClose}></i>
            </div>

            <div className="row">
                <div className="name-year-project">
                    <h1>Em breve</h1>
                    <span>01 de junho 2024</span>
                </div>

                <div className="box-description">

                    <div className="layer-1">
                        <h1>Tecnologias</h1>

                        <span>01 HTML</span>
                        <span>02 CSS</span>
                        <span>03 SASS</span>
                        <span>04 REACT</span>
                        <span>05 GSAP</span>

                        <div className="btn-projeto">
                            <a href="">acessar</a>
                        </div>

                    </div>

                    <div className="layer-2">

                        <div className="box-1">
                            <h1>Desafio</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia laborum neque ea, ad reiciendis ipsum quibusdam dolorum! Nam velit perspiciatis exercitationem error, aspernatur et. Aliquid quis accusamus tempore veniam fugiat!</p>

                        </div>

                        <div className="box-2">
                            <h1>Solução</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus velit exercitationem earum, nam reiciendis, ipsum numquam praesentium quos hic modi assumenda possimus eos ullam sapiente explicabo voluptatibus enim deserunt repellat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}