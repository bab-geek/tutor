import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return <Hero setView={setCurrentView} />;
      case 'BOOKING':
        return <Booking />;
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col font-sans">
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <ChatWidget />
      
      <Footer />
    </div>
  );
}

export default App;