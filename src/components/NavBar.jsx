import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import links from '../constants/linksNavBar';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-16">

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center w-full justify-end">
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
                key={link.name}
                href={link.href}
                className="text-white hover:text-purple-400 hover:bg-white/5 px-4 py-2 rounded-md text-sm font-bold transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 absolute w-full left-0">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-white/10 block px-3 py-3 rounded-md text-lg font-medium w-full text-center transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar