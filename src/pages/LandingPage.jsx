import React, { useEffect } from 'react'
import ReactGA from 'react-ga4'
import Hero from '../components/LandingSections/Hero'
import Experiencia from '../components/LandingSections/Experiencia'
import Habilidades from '../components/LandingSections/Habilidades'
import Proyectos from '../components/LandingSections/Proyectos'
import SobreMi from '../components/LandingSections/SobreMi'
import Valores from '../components/LandingSections/Valores'
import Contacto from '../components/LandingSections/Contacto'
import NavBar from '../components/NavBar'

const LandingPage = () => {
  useEffect(() => {
    // Registra la visita a la página
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Landing Page" });
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.16),transparent_28%),linear-gradient(145deg,#1c0a2a_0%,#3f1c7b_48%,#10021a_100%)] text-white relative overflow-x-hidden">
      <NavBar />
      
      {/* Background Gradient Effects - More luminous */}
      <div className="fixed top-0 right-0 w-[520px] h-[520px] bg-violet-500/25 rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[520px] h-[520px] bg-fuchsia-500/22 rounded-full blur-[160px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 w-[440px] h-[440px] bg-white/6 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div>
        <Hero />
        <SobreMi />
        <Experiencia />
        <Habilidades />
        <Proyectos />
        <Valores />
        <Contacto />
      </div>
    </div >
  )
}

export default LandingPage