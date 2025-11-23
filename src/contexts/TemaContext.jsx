import {createContext, useState } from 'react'

const TemaContext = createContext()

const TemaProvider = ( { children } ) => {
    const [isDark, setIsDark] = useState(null)

    const handleElegirTemaOscuro = () => {
        setIsDark(true)
    }
    const handleElegirTemaClaro = () => {
        setIsDark(false)
    }

    const data = {
        handleElegirTemaOscuro,
        handleElegirTemaClaro,
        isDark
    }

    return <TemaContext.Provider value={data}> { children } </TemaContext.Provider>
}

export { TemaProvider }
export default TemaContext