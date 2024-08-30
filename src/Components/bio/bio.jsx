import { useEffect, useRef } from 'react'
import './bio.scss'
import gsap from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {

    const btn_container = useRef(null)
    const btn_one = useRef(null)
    const btn_dwo = useRef(null)

    useEffect(() =>{
        const container = btn_container.current
        const btn_about1 = btn_one.current
        const btn_about2 = btn_dwo.current

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
      
            gsap.to(btn_about1, { 
              duration: 0.3, 
              x: x - btn_about1.offsetWidth / 2, 
              y: y - btn_about1.offsetHeight / 2, 
              ease: 'power1.out' 
            })
      
            gsap.to(btn_about2, { 
              duration: 0.6, 
              x: x - btn_about2.offsetWidth / 2, 
              y: y - btn_about2.offsetHeight / 2, 
              ease: 'power1.out' 
            })
          }
      
          const handleMouseLeave = () => {
            gsap.to(btn_about1, { 
              duration: 0.3, 
              x: 0, 
              y: 0, 
              ease: 'power1.out' 
            })
      
            gsap.to(btn_about2, { 
              duration: 0.6, 
              x: 0, 
              y: 0, 
              ease: 'power1.out'
            })
          }
      
          if (container && btn_about1 && btn_about2) {
            container.addEventListener('mousemove', handleMouseMove)
            container.addEventListener('mouseleave', handleMouseLeave)
          }
      
          return () => {
            if (container) {
              container.removeEventListener('mousemove', handleMouseMove)
              container.removeEventListener('mouseleave', handleMouseLeave)
            }
          }
    },[])

    useEffect(() => {
        AOS.init({
          duration: 2000,
          offset: -70,
        })

    }, [])

    return (
        <section className="about-container">

            <div className="about-titlle">
                <h1>palavras</h1>
            </div>

            <div className="about-bio">
                <span>entusiasta</span>
                <span>de</span>
                <span data-aos="zoom-out">programação, <i className="fa-solid fa-code"></i></span>
                <span>sempre</span>
                <span>buscando</span>
                <span>novas</span>
                <span>formas</span>
                <span>de</span>
                <span>criar</span>
                <span>interfaces ───</span>
                <span data-aos="zoom-out">dinâmicas</span>
                <span>& interativas,</span>
                <span>Com</span>
                <span>um</span>
                <span>foco</span>
                <span>na</span>
                <span data-aos="zoom-out">⟡ experiência ⟡</span>
                <span>do usuário</span>
                <span>& na otimização de</span>
                <span data-aos="zoom-out">──── performance
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#ffffffb9" d="M10.716 20.808q-.974 0-1.48-.577q-.505-.576-.505-1.313q0-.491.21-.969q.211-.478.676-.782q.57-.388.945-1.044t.56-1.454q-.247-.094-.484-.217q-.236-.123-.457-.32l-2.339.845q-.367.13-.696.211t-.677.081q-1.294 0-2.285-1.16t-.992-3.394q0-.973.573-1.479t1.287-.505q.515 0 .996.21q.48.211.785.676q.388.57 1.044.945t1.454.56q.094-.247.217-.484q.123-.236.32-.457l-.845-2.339q-.13-.348-.212-.69q-.08-.343-.08-.666q0-1.523 1.327-2.408q1.326-.886 3.226-.886q.974 0 1.48.57q.505.57.505 1.28q0 .487-.21.977q-.211.49-.676.794q-.57.389-.946 1.054q-.376.666-.558 1.464q.265.113.503.24q.239.127.437.296l2.339-.869q.367-.13.685-.199q.318-.068.667-.068q1.663 0 2.48 1.406q.818 1.405.818 3.147q0 .974-.608 1.48t-1.348.505q-.475 0-.928-.21q-.453-.211-.757-.676q-.388-.57-1.044-.945t-1.454-.56q-.094.247-.217.474t-.32.467l.845 2.339q.125.345.209.658t.083.617q-.013 1.298-1.164 2.336t-3.39 1.039m1.29-7q.755 0 1.279-.529q.524-.528.524-1.283t-.529-1.28t-1.283-.524t-1.28.529t-.524 1.284t.529 1.279t1.284.524m-1.309-4.281q.285-.165.582-.241t.6-.082q.2-1.031.687-1.873q.485-.842 1.256-1.346q.221-.158.335-.385t.113-.548q0-.362-.236-.61q-.237-.25-.748-.25q-.993 0-2.248.47q-1.254.468-1.306 1.832q0 .256.072.475q.072.22.122.395zm-4.234 4.742q.33 0 .902-.194l2.182-.771q-.165-.246-.25-.544q-.086-.297-.092-.639q-1.031-.2-1.873-.686q-.842-.485-1.346-1.256q-.158-.221-.417-.335t-.516-.113q-.417 0-.638.236q-.222.237-.222.748q0 1.411.582 2.483q.581 1.071 1.688 1.071m4.254 5.539q1.214 0 2.39-.543q1.175-.542 1.163-1.832q0-.235-.072-.44q-.072-.207-.122-.357l-.771-2.182q-.285.184-.61.26t-.573.082q-.2 1.031-.685 1.873t-1.257 1.346q-.202.139-.328.397t-.12.511q.006.354.236.62q.231.265.748.265m8.159-5.539q.372 0 .653-.211t.28-.774q0-.992-.454-2.26q-.455-1.267-1.847-1.293q-.256 0-.465.05t-.404.119l-2.164.796q.146.265.232.572t.091.61q1.031.2 1.873.686t1.347 1.257q.113.183.361.315q.249.133.497.133m-6.753.527" />
                    </svg>
                </span>
                <span>explorando  ... ...</span>
                <span>frameworks &</span>
                <span data-aos="zoom-out">ferramentas</span>
                <span>modernas
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                        <path fill="#ffffff" d="m228.13 116.77l-65.19-23.71l-23.71-65.19a11.95 11.95 0 0 0-22.46 0L93.06 93.06l-65.19 23.71a11.95 11.95 0 0 0 0 22.46l65.19 23.71l23.71 65.19a11.95 11.95 0 0 0 22.46 0l23.71-65.19l65.19-23.71a11.95 11.95 0 0 0 0-22.46m-2.73 15l-67 24.34a4 4 0 0 0-2.39 2.39l-24.34 67a4 4 0 0 1-7.44 0l-24.34-67a4 4 0 0 0-2.39-2.39l-66.9-24.39a4 4 0 0 1 0-7.44l66.95-24.34a4 4 0 0 0 2.39-2.39l24.34-66.95a4 4 0 0 1 7.44 0l24.34 66.95a4 4 0 0 0 2.39 2.39l67 24.34a4 4 0 0 1 0 7.44Z" />
                    </svg> ────
                </span>
            </div>

            <div className="btn-sobre-mim" ref={btn_container}>
                <a href="Components/pages/page_about.jsx" target="_blank" ref={btn_one}>
                    me conheça +
                </a>
                <a id="a_dwo" ref={btn_dwo}></a>
            </div>
        </section>
    )
}