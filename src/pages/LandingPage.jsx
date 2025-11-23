import Hero from '../components/LandingSections/Hero'
import SobreMi from '../components/LandingSections/SobreMi'
import Experiencia from '../components/LandingSections/Experiencia'
import Proyectos from '../components/LandingSections/Proyectos'
import Habilidades from '../components/LandingSections/Habilidades'
import Contacto from '../components/LandingSections/Contacto'
import Valores from '../components/LandingSections/Valores'
import NavBar from '../components/NavBar'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      <NavBar />
      {/* Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div>
        <div className=''>
          <Hero />
        </div>
        <SobreMi />
        <Experiencia />
        <Proyectos />
        <Habilidades />
        <Valores />
        <Contacto />
      </div>
    </div>
  )
}

export default LandingPage