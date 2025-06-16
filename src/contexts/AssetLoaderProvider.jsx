import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const AssetLoaderContext = createContext({
    allAssetsLoaded: false,
    imagesLoaded: false,
    fontsLoaded: false,
    gifsLoaded: false,
    audioLoaded: false
})

export const useAssetsLoaded = () => {
    const context = useContext(AssetLoaderContext)
    if (!context) {
        throw new Error('useAssetsLoaded deve ser usado dentro de um AssetLoaderProvider')
    }
    return context
}

export const AssetLoaderProvider = ({ children, imgsUrls = [], fontFamilies = [], gifsUrls = [], audioUrls = [] }) => {
    const [assets, setAssets] = useState({
        allAssetsLoaded: false,
        imagesLoaded: false,
        fontsLoaded: false,
        gifsLoaded: false,
        audioLoaded: false
    })

    // Função otimizada para carregar qualquer tipo de mídia
    const loadMedia = useCallback((urls, type) => {
        if (urls.length === 0) return Promise.resolve()

        return Promise.allSettled(
            urls.map(url => new Promise((resolve) => {
                const media = type === 'audio' ? new Audio() : new Image()
                media.src = url

                if (type === 'audio') {
                    media.load()
                    media.addEventListener('canplaythrough', () => resolve(), { once: true })
                    media.addEventListener('error', () => resolve()) // Não rejeita para continuar o fluxo
                } else {
                    media.onload = () => resolve()
                    media.onerror = () => resolve() // Continua mesmo com erro
                }
            }))
        )
    }, [])

    // Carregamento otimizado em paralelo
    const loadAllAssets = useCallback(async () => {
        try {
            await Promise.all([
                loadMedia(imgsUrls, 'image').then(() => {
                    setAssets(prev => ({ ...prev, imagesLoaded: true }))
                }),
                loadMedia(gifsUrls, 'image').then(() => {
                    setAssets(prev => ({ ...prev, gifsLoaded: true }))
                }),
                loadMedia(audioUrls, 'audio').then(() => {
                    setAssets(prev => ({ ...prev, audioLoaded: true }))
                }),
                (async () => {
                    if (fontFamilies.length === 0 || !document.fonts) {
                        setAssets(prev => ({ ...prev, fontsLoaded: true }))
                        return
                    }
                    await Promise.allSettled(
                        fontFamilies.map(font => document.fonts.load(`1em "${font}"`))
                    )
                    setAssets(prev => ({ ...prev, fontsLoaded: true }))
                })()
            ])
        } catch (error) {
            console.error('Asset loading error:', error)
        }
    }, [imgsUrls, gifsUrls, audioUrls, fontFamilies, loadMedia])

    useEffect(() => {
        let mounted = true

        loadAllAssets().then(() => {
            if (mounted) {
                sessionStorage.setItem("pageLoaded", "true")
            }
        })

        return () => { mounted = false }
    }, [loadAllAssets])

    // Atualiza allAssetsLoaded quando todos estiverem prontos
    useEffect(() => {
        if (assets.imagesLoaded && assets.fontsLoaded && assets.gifsLoaded && assets.audioLoaded) {
            setAssets(prev => ({ ...prev, allAssetsLoaded: true }))
        }
    }, [assets.imagesLoaded, assets.fontsLoaded, assets.gifsLoaded, assets.audioLoaded])

    return (
        <AssetLoaderContext.Provider value={assets}>
            {children}
        </AssetLoaderContext.Provider>
    )
}