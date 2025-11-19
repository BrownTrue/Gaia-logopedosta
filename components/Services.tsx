
import React from 'react';
import { Baby, Brain, Activity, MessageSquare, BookOpen, Smile, Mic } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servizi" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-sage-50/50 scroll-mt-28">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-sage-800 mb-4">Ambiti di Intervento</h2>
        <p className="text-stone-600 max-w-2xl mx-auto">
          Il piano terapeutico viene studiato su misura per le esigenze del paziente, che sia un bambino in fase di sviluppo o un adulto che necessita di riabilitazione.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Child Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-sage-200/50 border border-sage-100 hover:border-turquoise-500/30 transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-turquoise-500/10 rounded-2xl flex items-center justify-center text-turquoise-500 group-hover:bg-turquoise-500 group-hover:text-white transition-colors">
              <Baby size={32} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-stone-800">Età Evolutiva</h3>
          </div>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MessageSquare className="text-turquoise-500 mt-1 shrink-0" size={20} />
              <div>
                <span className="font-bold text-stone-700 block">Linguaggio</span>
                <span className="text-stone-500 text-sm">Ritardi di linguaggio, DSL (Disturbi Specifici), disfluenze.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <BookOpen className="text-turquoise-500 mt-1 shrink-0" size={20} />
              <div>
                <span className="font-bold text-stone-700 block">Apprendimento</span>
                <span className="text-stone-500 text-sm">DSA, Dislessia, Disortografia, Disgrafia, Discalculia.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Smile className="text-turquoise-500 mt-1 shrink-0" size={20} />
              <div>
                <span className="font-bold text-stone-700 block">Neurosviluppo</span>
                <span className="text-stone-500 text-sm">Autismo, disabilità intellettive e sindromi genetiche.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Adult Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-sage-200/50 border border-sage-100 hover:border-sage-500/30 transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-sage-500/10 rounded-2xl flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors">
              <Brain size={32} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-stone-800">Età Adulta e Geriatrica</h3>
          </div>
          
          <ul className="space-y-4">
             <li className="flex items-start gap-3">
              <Mic className="text-sage-500 mt-1 shrink-0" size={20} />
              <div>
                <span className="font-bold text-stone-700 block">Voce</span>
                <span className="text-stone-500 text-sm">Disfonia organica e funzionale, rieducazione post-chirurgica.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Activity className="text-sage-500 mt-1 shrink-0" size={20} />
              <div>
                <span className="font-bold text-stone-700 block">Neurologia</span>
                <span className="text-stone-500 text-sm">Afasia post-ictus, Parkinson, SLA, Sclerosi Multipla, Disartria.</span>
              </div>
            </li>
             <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-sage-500 mt-1 shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
              </div>
              <div>
                <span className="font-bold text-stone-700 block">Deglutizione</span>
                <span className="text-stone-500 text-sm">Disfagia e squilibri muscolari orofacciali (SMOF).</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* NOVAFON Feature */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-sage-50 rounded-2xl p-8 border border-sage-200 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="bg-white p-4 rounded-full shadow-md shrink-0">
                <Activity className="text-turquoise-500 w-8 h-8" />
            </div>
            <div>
                <h3 className="font-heading text-xl font-bold text-sage-800 mb-2">Utilizzo del dispositivo NOVAFON</h3>
                <p className="text-stone-600 leading-relaxed">
                    Integro la terapia logopedica con il dispositivo medico <strong>NOVAFON</strong>, 
                    che utilizza la terapia a vibrazione locale (onde sonore) per trattare disturbi della voce, 
                    della deglutizione e tensioni muscolari in modo non invasivo, profondo ed efficace.
                </p>
            </div>
        </div>
      </div>

    </section>
  );
};

export default Services;
