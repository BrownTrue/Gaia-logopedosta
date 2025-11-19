
import React from 'react';
import { MessageCircle, Calendar, Heart } from 'lucide-react';
import { CONTACTS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-sage-50 via-white to-stone-50 overflow-hidden">
      {/* Abstract Decorative Blobs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-turquoise-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-sage-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-block px-4 py-1 bg-sage-100 rounded-full text-sage-700 text-xs font-bold tracking-widest uppercase mb-2">
              Logopedista
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-sage-900 leading-[1.15]">
              Logopedia e Riabilitazione per <span className="text-turquoise-500 italic relative">
                 ogni fase 
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-turquoise-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span> della vita
            </h1>
            <p className="font-sans text-lg md:text-xl text-stone-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Percorsi personalizzati per l'età evolutiva, adulta e geriatrica. 
              Ricevo ad Avezzano e Online con un approccio empatico e scientifico.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href={CONTACTS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-full font-bold shadow-lg shadow-green-600/20 hover:bg-[#20bd5a] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} fill="white" />
                Scrivimi su WhatsApp
              </a>
              <a
                href={CONTACTS.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-sage-200 text-sage-700 rounded-full font-semibold hover:border-sage-400 hover:bg-sage-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Prenota Online
              </a>
            </div>
          </div>

          {/* Image/Illustration Placeholder */}
          <div className="flex-1 w-full max-w-md md:max-w-full relative">
            <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                {/* Updated image to be child-friendly and colorful (Wooden blocks/Letters) */}
                <img 
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Bambino che impara con le lettere - Logopedia" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                 {/* Removed strong multiply overlay to keep colors bright, added subtle gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-sage-900/10 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-turquoise-500 hidden md:block animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-600">
                  <Heart size={20} className="text-sage-500" fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase font-bold">Approccio</p>
                  <p className="text-sm font-bold text-sage-800">Empatico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
