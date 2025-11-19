import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACTS } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={CONTACTS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group flex items-center gap-2"
      aria-label="Chatta su WhatsApp"
    >
      <MessageCircle size={28} fill="white" className="text-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium pr-1">
        Scrivimi
      </span>
    </a>
  );
};

export default FloatingWhatsApp;