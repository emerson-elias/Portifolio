import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const AssetLoaderContext = createContext({
    allAssetsLoaded: false,
    imagesLoaded: false,
    fontsLoaded: false
})

export const useAssetsLoaded = () => {
    const context = useContext(AssetLoaderContext)
    if (!context) {
        throw new Error('useAssetsLoaded must be used within an AssetLoaderProvider')
    }
    return context
}

export const AssetLoaderProvider = ({ children, imgsUrls = [], fontFamilies = [] }) => {
    const [assets, setAssets] = useState({
        allAssetsLoaded: false,
        imagesLoaded: false,
        fontsLoaded: false
    })

    const loadImages = useCallback(() => {
        if (imgsUrls.length === 0) {
            setAssets(prev => ({ ...prev, imagesLoaded: true }))
            return
        }

        const imagePromises = imgsUrls.map(url => {
            return new Promise((resolve, reject) => {
                const img = new Image()
                img.src = url
                img.onload = resolve
                img.onerror = () => reject(`Failed to load image: ${url}`)
            })
        })

        Promise.allSettled(imagePromises)
            .then(() => setAssets(prev => ({ ...prev, imagesLoaded: true })))
            .catch(err => console.warn(err))
    }, [imgsUrls])

    const loadFonts = useCallback(() => {
        if (fontFamilies.length === 0) {
            setAssets(prev => ({ ...prev, fontsLoaded: true }))
            return
        }

        if (!document.fonts) {
            console.warn("FontFace API not supported")
            setAssets(prev => ({ ...prev, fontsLoaded: true }))
            return
        }

        const fontPromises = fontFamilies.map(font =>
            document.fonts.load(`1em "${font}"`)
        )

        Promise.allSettled(fontPromises)
            .then(() => setAssets(prev => ({ ...prev, fontsLoaded: true })))
            .catch(err => console.error("Font loading failed:", err))
    }, [fontFamilies])

    useEffect(() => {
        loadImages()
        loadFonts()
    }, [loadImages, loadFonts])

    useEffect(() => {
        if (assets.imagesLoaded && assets.fontsLoaded) {
            setAssets(prev => ({ ...prev, allAssetsLoaded: true }))
            sessionStorage.setItem("pageLoaded", "true")
        }
    }, [assets.imagesLoaded, assets.fontsLoaded])

    return (
        <AssetLoaderContext.Provider value={assets}>
            {children}
        </AssetLoaderContext.Provider>
    )
}