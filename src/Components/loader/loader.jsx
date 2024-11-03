import '../loader/loader.scss'

export default function Loader() {
    return (
        <section className="loader-container">

            <div className="cube">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="loader">
                <span>carregando...</span>
            </div>
            
        </section>
    )
}