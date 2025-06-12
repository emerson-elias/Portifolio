import { useEffect } from 'react'

const View = () => {
    useEffect(() => {

        const setVhProperty = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }

        const debounce = (func, delay) => {
            let timeout
            return function (...args) {
                clearTimeout(timeout)
                timeout = setTimeout(() => func.apply(this, args), delay)
            }
        }

        const debouncedSetVhProperty = debounce(setVhProperty, 100)

        setVhProperty()

        window.addEventListener('resize', debouncedSetVhProperty)
        window.addEventListener('orientationchange', debouncedSetVhProperty)

        return () => {
            window.removeEventListener('resize', debouncedSetVhProperty)
            window.removeEventListener('orientationchange', debouncedSetVhProperty)
        }
    }, [])
}

export default View