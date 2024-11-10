import '../banner/banner.scss'
import img from '/assets/img/pexels.jpg'

export default function Banner() {
    return (
        <section className="projects-container">

            <div className="banner-img">
                <img src={img} loading="lazy" alt="BANNE" />
            </div>

            <div className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
                    <path d="M90,0V180" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M180,90H0" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M153.64,26.36,26.36,153.64" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M153.64,153.64,26.36,26.36" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M176.93,66.71,3.05,113.33" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M113.29,176.93,66.67,3.05" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M176.93,113.29,3.05,66.67" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M66.71,176.93,113.33,3.05" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M167.94,135,12.06,45" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M45,167.94,135,12.06" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M135,167.94,45,12.06" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M12.06,135,167.94,45" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
            </div>

            <div className="title-large">
                <span>todos</span>
                <span>projetos</span>
            </div>

        </section>
    )
}