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
    { label: 'Book Session', value: 'BOOKING' as ViewState, icon: Calendar },
  ];

  return (
    <nav className="bg-brand-primary text-white sticky top-0 z-50 shadow-md border-b border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setView('HOME')}>
            <GraduationCap className="h-8 w-8 text-emerald-100 mr-2" />
            <span className="font-bold text-xl tracking-tight">Prof <span className="text-emerald-100">Alexander Juma</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setView(item.value)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                    currentView === item.value
                      ? 'bg-brand-dark text-white shadow-inner'
                      : 'text-emerald-50 hover:bg-brand-dark hover:text-white'
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
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-100 hover:text-white hover:bg-brand-dark focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-primary border-t border-brand-dark">
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
                      ? 'bg-brand-dark text-white'
                      : 'text-emerald-50 hover:bg-brand-dark hover:text-white'
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