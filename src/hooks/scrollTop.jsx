import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const location = useLocation()

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
        const root = document.getElementById('root')
        if (root) {
            root.scrollTo({ top: 0, behavior: 'instant' })
        }
    }, [location.pathname]) // dispara toda vez que a rota mudar

    return null
}