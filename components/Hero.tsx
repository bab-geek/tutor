import React from 'react';
import { ViewState } from '../types';
import { ArrowRight, Star, MapPin, Calendar, BookOpen } from 'lucide-react';

interface HeroProps {
  setView: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="bg-brand-light">
      {/* Intro Banner */}
      <div className="relative bg-brand-blue overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-brand-blue sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-brand-light transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Master IGCSE</span>{' '}
                  <span className="block text-brand-gold xl:inline">Maths & Physics</span>
                </h1>
                <p className="mt-3 text-base text-slate-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Private home tuition by <strong>Mr. Kuloba Alex</strong> (Oshwal Academy). Expert guidance delivered to your doorstep.
                </p>
                <p className="mt-2 text-sm text-brand-gold font-semibold uppercase tracking-wide">
                  Available Weekends & School Holidays
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={() => setView('BOOKING')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-blue bg-white hover:bg-brand-gold hover:text-white md:py-4 md:text-lg transition-all duration-300"
                    >
                      Book Home Session
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* Using an image representing academic excellence/math/physics */}
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90"
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Math and Physics Education"
          />
          <div className="absolute inset-0 bg-brand-blue opacity-40 lg:hidden"></div>
        </div>
      </div>

      {/* Teacher Profile Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base text-brand-blue font-bold tracking-wide uppercase">Your Private Tutor</p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Mr. Kuloba Alex
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
              "As a dedicated educator at <strong>Oshwal Academy</strong>, I specialize in the <strong>IGCSE curriculum</strong>. My goal is to simplify complex concepts in Mathematics and Physics, ensuring top grades and deep understanding."
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
                    <Star className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-slate-900">Proven Track Record</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-500">
                  Years of experience preparing students for IGCSE exams with consistent A/A* results.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-slate-900">We Come To You</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-500">
                  Hassle-free learning. I commute to your home for sessions, ensuring a comfortable learning environment.
                </dd>
              </div>

               <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
                    <Calendar className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-slate-900">Weekend & Holiday Focus</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-500">
                  Sessions are exclusively scheduled for Saturdays, Sundays, and School Holidays (Apr, Aug, Dec).
                </dd>
              </div>

               <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-blue text-white">
                    <BookOpen className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-slate-900">Specialized Subjects</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-500">
                  Focused strictly on Mathematics and Physics to provide the highest quality instruction.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      {/* Stats / CTA Strip */}
      <div className="bg-brand-dark py-10 border-t-4 border-brand-gold">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white">
             <div>
                <h3 className="text-2xl font-bold text-brand-gold">Ready to improve those grades?</h3>
                <p className="opacity-90 mt-1">Book your slot for the upcoming Weekend or Holiday session.</p>
             </div>
             <button onClick={() => setView('BOOKING')} className="mt-6 md:mt-0 bg-brand-blue text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-gold hover:text-brand-dark transition-colors flex items-center ring-2 ring-white/20">
                 Check Availability <ArrowRight size={18} className="ml-2"/>
             </button>
         </div>
      </div>
    </div>
  );
};