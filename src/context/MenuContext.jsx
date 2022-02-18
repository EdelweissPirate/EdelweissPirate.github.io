import { createContext, useEffect, useState } from "react";
import allCharacters from '../data/characters.json'

const MenuContext = createContext()

export const MenuProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [characters, setCharacters] = useState(null)
    const [avatars, setAvatars] = useState(null)
    const [isMobileDevice, setIsMobileDevice] = useState(false)
    
    useEffect(() => {
        importCharacters()
        checkDevice()
    }, [])

    const checkDevice = () => {
        setIsMobileDevice(/Mobi/i.test(window.navigator.userAgent))
    }

    const importCharacters = () => {
        setCharacters(allCharacters)

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
            return images;
        }
        
        const images = importAll(require.context('../assets/', false, /\.(png|jpe?g|svg)$/));
        setAvatars(images)
    }

    return <MenuContext.Provider value={{ loading, characters, avatars, isMobileDevice }}>
                {children}
            </MenuContext.Provider>
} 

export default MenuContext