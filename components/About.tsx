
import React from 'react';
import { CONTACTS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="chi-sono" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-28">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/3">
             <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500 bg-stone-100 border-4 border-white ring-1 ring-stone-100">
               {/* 
                  NOTA: Per utilizzare la tua foto personale:
                  1. Inserisci il file (es. gaia.jpg) nella cartella public o assets del progetto.
                  2. Cambia src qui sotto in src="/gaia.jpg" (o il percorso corretto).
               */}
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Dott.ssa Gaia Troisi" 
                 className="w-full h-full object-cover object-top"
               />
             </div>
           </div>
           <div className="w-full md:w-2/3 space-y-6">
             <h2 className="font-heading text-3xl font-bold text-sage-800">Chi Sono</h2>
             <h3 className="font-sans text-xl text-turquoise-500 font-medium">Dott.ssa Gaia Troisi - Logopedista</h3>
             <div className="w-20 h-1 bg-sage-200"></div>
             
             <p className="text-stone-600 leading-relaxed">
               Laureata in Logopedia presso l'Università degli Studi dell'Aquila, ho dedicato la mia formazione e la mia carriera alla comprensione e alla cura dei disturbi comunicativi e deglutitori. 
             </p>
             <p className="text-stone-600 leading-relaxed">
               Il mio approccio integra competenze tecniche aggiornate con una profonda componente empatica: credo che ogni paziente, dal bambino all'anziano, necessiti di essere ascoltato prima di essere trattato.
             </p>
             <p className="text-stone-600 leading-relaxed">
                Mi occupo prevalentemente di <strong>disturbi neurogenici</strong> e problematiche dell'<strong>età evolutiva</strong>, collaborando spesso con neuropsichiatri, psicologi e insegnanti per creare una rete di supporto efficace intorno alla persona.
             </p>
             
             <div className="pt-4">
                <a 
                  href={CONTACTS.whatsapp} 
                  className="inline-flex items-center justify-center px-6 py-3 border border-sage-600 text-base font-medium rounded-md text-sage-700 bg-white hover:bg-sage-50 transition-colors"
                >
                  Contattami per un colloquio
                </a>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
