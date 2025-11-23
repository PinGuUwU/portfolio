import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Reemplaza estos valores con tus credenciales de EmailJS
    // Service ID, Template ID, Public Key
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert("Se envió con éxito, pronto te contactaré!");
        form.current.reset();
        setIsSending(false);
      }, (error) => {
        console.log(error.text);
        alert("Hubo un error al enviar el mensaje. Por favor, intentá de nuevo o contactame por LinkedIn!");
        setIsSending(false);
      });
  };

  return (
    <section id="contacto" className="py-20 px-6 md:px-20 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Contactame
          </span>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </h2>

        <p className="text-gray-300 text-center text-lg mb-12 leading-relaxed">
          Gracias por tomarte el tiempo de leer mi perfil, tengo muchas ganas de crecer profesionalmente. ¡Agendemos una llamada!
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
        >
          <div className="space-y-2">
            <label htmlFor="user_name" className="text-purple-400 font-medium ml-1">Nombre:</label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Tu nombre"
              required
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="user_email" className="text-purple-400 font-medium ml-1">Email de contacto:</label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Tu email"
              required
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-purple-400 font-medium ml-1">Mensaje:</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Tu mensaje, aclaraciones importantes y/o motivo de contacto"
              required
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/25 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSending ? 'Enviando...' : 'Enviar'}
          </button>
        </form>

        <p className="text-white text-center text-lg mb-12 leading-relaxed mt-12 bg-linear-to-r from-purple-600 to-pink-600 p-4 rounded-lg">
          Si llegaste hasta acá pero no avanzaré en el proceso de selección, agradecería mucho que me dejes feedback o que conectemos en LinkedIn para futuras búsquedas!
        </p>

        <div className="flex justify-center gap-8 mt-12">
          <a
            href="https://github.com/PinGuUwU"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 rounded-full text-white hover:text-purple-400 hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/priscila-redondo-291031219/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/5 rounded-full text-white hover:text-purple-400 hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacto