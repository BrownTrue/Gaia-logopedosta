
import React from 'react';
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';
import { CONTACTS } from '../constants';

interface FooterProps {
  onOpenPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-sage-800 text-sage-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-bold text-white">Gaia Troisi</h3>
          <p className="text-sage-200 text-sm leading-relaxed">
            Logopedista specializzata in età evolutiva, adulta e geriatrica. 
            Riabilitazione del linguaggio, della voce e della deglutizione con passione e professionalità.
          </p>
          <div className="flex gap-4 pt-2">
            <a 
              href={CONTACTS.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-sage-700 p-2 rounded-full hover:bg-sage-600 transition-colors hover:text-white text-sage-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Contacts */}
        <div className="space-y-4">
          <h4 className="font-heading text-lg font-bold text-white">Contatti</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-turquoise-500" />
              <a href={`tel:${CONTACTS.phone}`} className="hover:text-white transition-colors">{CONTACTS.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-turquoise-500" />
              <a href={`mailto:${CONTACTS.email}`} className="hover:text-white transition-colors">{CONTACTS.email}</a>
            </li>
             <li className="flex items-start gap-3">
              <MapPin size={16} className="text-turquoise-500 mt-1" />
              <span>Avezzano (AQ) & Online</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h4 className="font-heading text-lg font-bold text-white">Info Legali</h4>
          <ul className="space-y-2 text-sm text-sage-300">
            <li>P.IVA: {CONTACTS.vat}</li>
            <li>
              <button 
                onClick={onOpenPrivacy} 
                className="hover:text-white underline decoration-sage-500 underline-offset-4 transition-colors text-left"
              >
                Privacy Policy
              </button>
            </li>
            <li className="pt-8 text-xs text-sage-500">
              © {new Date().getFullYear()} Gaia Troisi. Tutti i diritti riservati.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
