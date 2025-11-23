import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-20 text-center">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">
          Priscila Redondo
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          <p className="">Desarrolladora Web Full-Stack</p>

          <p className="">Analista en Sistemas</p>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Me gusta crear soluciones innovadoras y eficientes para resolver problemas complejos. Apasionada por Java, JavaScript y la programación orientada a objetos.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/PinGuUwU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/priscila-redondo-291031219/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors duration-300"
            >
              <FaLinkedin size={32} />
            </a>
          </div>

          <a download="Priscila Redondo CV.pdf" href="../files/Priscila Redondo CV.pdf" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 border border-white/10 backdrop-blur-sm">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero