import '../loader/loader.scss'

export default function Loader({ className }) {
    return (
        <section className={`loader-container ${className || ""}`}>

            <div className="cube">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className='loader'>
                <span>carregando...</span>
            </div>

        </section>
    )
}