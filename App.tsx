import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PrivacyModal from './components/PrivacyModal';

const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-stone-800 bg-cream selection:bg-sage-200 selection:text-sage-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      
      <FloatingWhatsApp />
      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </div>
  );
};

export default App;