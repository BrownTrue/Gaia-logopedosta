
import React from 'react';
import { CheckCircle, Sparkles, MapPin, Monitor, Home, Clock } from 'lucide-react';
import { CONTACTS } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="tariffe" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-800 mb-4">Servizi e Tariffe</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Trasparenza e flessibilità per ogni esigenza. Scegli la modalità più adatta a te.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* Colonna 1: Singole Prestazioni */}
          <div className="bg-white rounded-2xl shadow-lg shadow-sage-100 border border-sage-100 overflow-hidden md:col-span-2">
            <div className="p-6 bg-sage-50/50 border-b border-sage-100">
              <h3 className="font-heading text-xl font-bold text-sage-800 flex items-center gap-2">
                <Clock size={20} className="text-sage-600" />
                Singole Sedute
              </h3>
            </div>
            <div className="p-0 divide-y divide-stone-100">
              {/* Item 1 */}
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-stone-50 transition-colors">
                <div className="space-y-1">
                  <div className="font-bold text-stone-700 flex items-center gap-2">
                    Prima Visita in Studio
                    <span className="text-xs font-normal px-2 py-0.5 bg-sage-100 text-sage-700 rounded-full flex items-center gap-1">
                      <MapPin size={10} /> Avezzano
                    </span>
                  </div>
                  <p className="text-sm text-stone-500">Valutazione logopedica completa.</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xl text-sage-700">50 €</div>
                  <div className="text-xs text-stone-400">45 min</div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-stone-50 transition-colors">
                <div className="space-y-1">
                  <div className="font-bold text-stone-700 flex items-center gap-2">
                    Prima Visita a Domicilio
                    <span className="text-xs font-normal px-2 py-0.5 bg-orange-50 text-orange-700 rounded-full flex items-center gap-1">
                      <Home size={10} /> Avezzano
                    </span>
                  </div>
                  <p className="text-sm text-stone-500">Comodamente a casa tua (solo territorio di Avezzano).</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xl text-sage-700">50 €</div>
                  <div className="text-xs text-stone-400">45 min</div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-stone-50 transition-colors">
                <div className="space-y-1">
                  <div className="font-bold text-stone-700 flex items-center gap-2">
                    Prima Visita Online
                    <span className="text-xs font-normal px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full flex items-center gap-1">
                      <Monitor size={10} /> Remoto
                    </span>
                  </div>
                  <p className="text-sm text-stone-500">Valutazione tramite videochiamata sicura.</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xl text-sage-700">50 €</div>
                  <div className="text-xs text-stone-400">45 min</div>
                </div>
              </div>

              {/* Item 4 - Successiva */}
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-sage-50/30">
                <div className="space-y-1">
                  <div className="font-bold text-stone-800">Visita Successiva</div>
                  <p className="text-sm text-stone-500">Seduta di terapia riabilitativa standard.</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-xl text-turquoise-600">35 €</div>
                  <div className="text-xs text-stone-400">45 min</div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonna 2: Pacchetto Speciale */}
          <div className="bg-sage-600 rounded-2xl shadow-xl text-white overflow-hidden transform md:-translate-y-4 relative">
            {/* Badge */}
            <div className="absolute top-4 right-4">
              <Sparkles className="text-yellow-300 animate-pulse" size={24} />
            </div>

            <div className="p-8">
              <h3 className="font-heading text-2xl font-bold mb-2">Pacchetto Base</h3>
              <p className="text-sage-100 text-sm mb-6">Il percorso ideale per iniziare la riabilitazione con continuità.</p>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold tracking-tight">160</span>
                <span className="text-2xl">€</span>
              </div>
              <p className="text-sage-200 text-sm mb-8 line-through opacity-70">Valore reale: 190 €</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white/20 rounded-full">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="font-medium">1ª Valutazione Completa</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white/20 rounded-full">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="font-medium">4 Sedute di Terapia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white/20 rounded-full">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="text-sage-100 text-sm">Risparmi 30€ sul totale</span>
                </div>
              </div>

              <a 
                href={CONTACTS.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-3.5 text-center bg-white text-sage-700 rounded-xl font-bold hover:bg-sage-50 transition-colors shadow-lg"
              >
                Richiedi Pacchetto
              </a>
            </div>
            <div className="bg-sage-700 p-4 text-center text-xs text-sage-200">
              Disponibile per Studio e Online
            </div>
          </div>

        </div>

        {/* Nota a piè di pagina */}
        <div className="mt-12 text-center">
          <a 
            href={CONTACTS.calendar} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 font-medium border-b border-sage-300 hover:border-sage-600 transition-colors pb-0.5"
          >
            Prenota subito la tua prima visita sul Calendario
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
