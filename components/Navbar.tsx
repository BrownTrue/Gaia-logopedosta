import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { CONTACTS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Chi Sono', href: '#chi-sono' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Tariffe', href: '#tariffe' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="font-heading text-2xl font-bold text-sage-800 tracking-tight">
            Gaia <span className="text-turquoise-500">Troisi</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-sage-600 font-medium transition-colors font-sans text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href={CONTACTS.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 border border-sage-600 text-sage-600 rounded-full hover:bg-sage-600 hover:text-white transition-all duration-300 font-medium text-sm"
            >
              <Calendar size={16} />
              Prenota
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-sage-800 p-2"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-stone-700 hover:text-sage-600 border-b border-stone-100 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href={CONTACTS.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex justify-center items-center gap-2 px-5 py-3 bg-sage-600 text-white rounded-lg font-medium"
          >
            <Calendar size={18} />
            Prenota Online
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;