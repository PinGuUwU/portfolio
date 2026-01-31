import { useState, useRef, useEffect } from 'react';
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector = ({ align = 'right' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, changeLanguage } = useLanguage();
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (lang) => {
        changeLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors px-3 py-1 rounded-md hover:bg-white/5 border border-transparent hover:border-white/10"
                aria-label="Select Language"
            >
                <FaGlobe className="text-lg" />
                <span className="uppercase text-sm font-bold">{language}</span>
                <FaChevronDown size={10} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className={`absolute top-full mt-2 w-32 bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 flex flex-col z-50 overflow-hidden transition-all duration-200 origin-top ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'} ${align === 'left' ? 'left-0' : 'right-0'}`}>
                <button
                    onClick={() => handleLanguageChange('es')}
                    className={`px-4 py-3 text-left text-sm hover:bg-white/10 transition-colors flex items-center justify-between ${language === 'es' ? 'text-purple-400 font-bold bg-white/5' : 'text-gray-300'}`}
                >
                    <span>Español</span>
                    {language === 'es' && <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>}
                </button>
                <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-4 py-3 text-left text-sm hover:bg-white/10 transition-colors flex items-center justify-between ${language === 'en' ? 'text-purple-400 font-bold bg-white/5' : 'text-gray-300'}`}
                >
                    <span>English</span>
                    {language === 'en' && <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>}
                </button>
            </div>
        </div>
    );
};

export default LanguageSelector;
