import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import links from '../constants/linksNavBar';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-16 relative">

          {/* Mobile Menu Button - Absolute Left on Mobile */}
          <div className="md:hidden flex items-center absolute left-4">
            {/* Keeps logo or empty space mostly, but button is here */}
          </div>

          {/* Mobile Menu Button - Right aligned for consistency with original or user preference? 
              Original code had "justify-end" for the button div. 
              Let's keep the structure but add the language toggle.
           */}
          <div className="md:hidden w-full flex justify-between items-center">
            <div className="flex gap-2">
              <LanguageSelector align="left" />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-400 focus:outline-none transition-colors"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white hover:text-purple-400 hover:bg-white/5 px-4 py-2 rounded-md text-sm font-bold transition-all duration-300 cursor-pointer"
              >
                {t(link.key)}
              </a>
            ))}

            <div className="flex items-center gap-2 ml-4 border-l border-white/20 pl-4">
              <LanguageSelector align="right" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 absolute w-full left-0">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-300 hover:text-white hover:bg-white/10 block px-3 py-3 rounded-md text-lg font-medium w-full text-center transition-colors cursor-pointer"
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar