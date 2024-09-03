import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './cursor.scss'

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current

    const Move_Cursor = (e) => {
      gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        ease: "power2.out"
      })
    }

    const Cusor_Elememt_Enter = () => {
      gsap.to(cursor, {
        scale: 4, // Aumenta o tamanho do cursor
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const Cursor_Element_Out = () => {
      gsap.to(cursor, {
        scale: 1, // Volta ao tamanho original
        duration: 0.3,
        ease: "power2.out"
      })
    }

    // Adiciona eventos
    document.addEventListener('mousemove', Move_Cursor)

    document.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('mouseover', Cusor_Elememt_Enter)
      anchor.addEventListener('mouseout', Cursor_Element_Out)
    })

    // Função de limpeza
    return () => {
      document.removeEventListener('mousemove', Move_Cursor)

      document.querySelectorAll('a').forEach(anchor => {
        anchor.removeEventListener('mouseover', Cusor_Elememt_Enter)
        anchor.removeEventListener('mouseout', Cursor_Element_Out)
      })
    }
  }, [])

  return (
    <div id="cursor" ref={cursorRef}></div>
  )
}
