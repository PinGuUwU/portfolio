
import SobreMiCard from '../SobreMiCard';
import { educationData, aboutText } from '../../constants/sobreMiData';

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="py-20 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Sobre mí
          </span>
          <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            {aboutText.map((paragraph, index) => (
              <p key={index} className="hover:text-white transition-colors duration-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Side - Cards */}
          <div className="space-y-4">
            {educationData.map((item) => (
              <SobreMiCard
                key={item.id}
                institution={item.institution}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi