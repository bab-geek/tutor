import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start flex-1">
            <h3 className="text-white text-lg font-bold mb-4">Prof Alexander Tutor</h3>
            <p className="text-sm max-w-xs leading-relaxed text-emerald-100/70">
              Prof Alexander provides expert IGCSE Mathematics and Physics tuition at the comfort of your home.
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col items-center md:items-start flex-1">
             <h3 className="text-white text-lg font-bold mb-4">Services</h3>
             <ul className="space-y-3 text-sm text-emerald-100/70">
                <li>Home Tuition (Weekends)</li>
                <li>Holiday Intensive Revision</li>
                <li>IGCSE Exam Preparation</li>
             </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start flex-1">
             <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
             <ul className="space-y-3 text-sm text-emerald-100/70">
                <li className="flex items-center justify-center md:justify-start">
                  <Phone size={16} className="mr-2 text-brand-gold flex-shrink-0"/> 
                  <a href="https://wa.me/254731031559" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +254 731 031 559
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <MapPin size={16} className="mr-2 text-brand-gold flex-shrink-0"/> 
                  <span>Nairobi, Kenya</span>
                </li>
             </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-emerald-900 py-4 text-center text-xs text-emerald-100/40">
         <p>&copy; {new Date().getFullYear()} Bussllus Bertrand. All rights reserved.</p>
      </div>
    </footer>
  );
};