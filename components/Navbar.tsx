import React, { useState } from 'react';
import { Menu, X, GraduationCap, Calendar, Home } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'HOME' as ViewState, icon: Home },
    { label: 'Book Home Session', value: 'BOOKING' as ViewState, icon: Calendar },
  ];

  return (
    <nav className="bg-brand-blue text-white sticky top-0 z-50 shadow-lg border-b-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setView('HOME')}>
            <GraduationCap className="h-8 w-8 text-brand-gold mr-2" />
            <span className="font-bold text-xl tracking-tight">Nairobi<span className="text-brand-gold">IGCSE</span>Tutor</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setView(item.value)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                    currentView === item.value
                      ? 'bg-brand-dark text-brand-gold shadow-inner'
                      : 'text-slate-100 hover:bg-blue-800 hover:text-white'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-blue-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-blue border-t border-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setView(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                   currentView === item.value
                      ? 'bg-brand-dark text-brand-gold'
                      : 'text-slate-200 hover:bg-blue-800 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                    <item.icon size={18} />
                    <span>{item.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};