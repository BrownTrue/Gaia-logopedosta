import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { PRIVACY_TEXT } from '../constants';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col relative animate-in fade-in zoom-in duration-200"
        role="dialog" 
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-100 flex justify-between items-center bg-sage-50">
          <h3 className="font-heading text-xl font-semibold text-sage-800">Privacy Policy</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-sage-200 text-sage-700 transition-colors"
            aria-label="Chiudi"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-stone-600 text-sm leading-relaxed whitespace-pre-wrap font-sans">
          {PRIVACY_TEXT}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-stone-100 bg-stone-50 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-medium text-sm"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;