import { useContext } from 'react'
import TemaContext from '../contexts/TemaContext'

const SelectorDeTema = ( { handleTemaElegido } ) => {
    const { handleElegirTemaOscuro, handleElegirTemaClaro } = useContext(TemaContext)
  
    const handleBotonClaro = () => {
        handleElegirTemaClaro()
        ocultarSelectorDeTema()
    }

    const handleBotonOscuro = () => {
        handleElegirTemaOscuro()
        ocultarSelectorDeTema()
    }

    const ocultarSelectorDeTema = () => {
        handleTemaElegido()
    }
  
    return (
    <div className='grid grid-rows-2 text-center '>

        <div className='mt-20 text-4xl font-bold'>Priscila Redondo</div>

        <div>
            <div className='text-2xl font-semibold mt-4'>
                Elegí el tema:
            </div>
            <div className='flex justify-evenly'>
                <div>
                    {/* <img src="" alt="" /> */}
                    <button
                        className='cursor-pointer px-4 py-2 bg-green-700 hover:bg-green-900 text-white font-bold rounded-md'
                        onClick={handleBotonClaro}
                    >Tema claro</button>
                </div>

                <div>
                    {/* <img src="" alt="" /> */}
                    <button
                        className='cursor-pointer px-4 py-2 bg-green-700 hover:bg-green-900 text-white font-bold rounded-md'
                        onClick={handleBotonOscuro}
                    >Tema oscuro</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SelectorDeTema