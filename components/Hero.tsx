import React from 'react';
import { ViewState } from '../types';
import { ArrowRight, Star, MapPin, Calendar, BookOpen } from 'lucide-react';

interface HeroProps {
  setView: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="bg-white">
      {/* Intro Banner */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Unlock Excellence in</span>{' '}
                  <span className="block text-brand-primary xl:inline">IGCSE, A Level & IB</span>
                </h1>
                <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Premium private home tuition by <strong>Prof Alexander Juma</strong>. Expert Mathematics and Physics guidance delivered directly to your doorstep.
                </p>
                <p className="mt-4 text-sm text-brand-primary font-bold uppercase tracking-wide flex items-center justify-center lg:justify-start">
                   <Calendar className="w-4 h-4 mr-2"/> Available Weekends & School Holidays
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <button
                      onClick={() => setView('BOOKING')}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-brand-dark md:py-4 md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Book Home Session
                    </button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                     <button
                      onClick={() => {
                        const element = document.getElementById('profile-section');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full flex items-center justify-center px-8 py-3 border border-brand-primary text-base font-medium rounded-md text-brand-primary bg-transparent hover:bg-emerald-50 md:py-4 md:text-lg transition-all duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* Bright, International student context image */}
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Indian Students Studying Group"
          />
        </div>
      </div>

      {/* Teacher Profile Section */}
      <div id="profile-section" className="py-12 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base text-brand-primary font-bold tracking-wide uppercase">Your Private Tutor</p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Prof Alexander Juma
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-auto">
              "I specialize in the <strong>IGCSE, A Level, and IB curricula</strong>. My approach is disciplined yet encouraging, focusing on simplifying complex concepts in Mathematics and Physics to ensure academic success."
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative bg-white p-6 rounded-lg shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white">
                    <Star className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-slate-900">Proven Results</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-500">
                  Extensive experience delivering top grades in International Curricula (Cambridge & Edexcel).
                </dd>
              </div>

              <div className="relative bg-white p-6 rounded-lg shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-slate-900">Home Tuition</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-500">
                  I commute to your residence, ensuring a safe and comfortable learning environment for the student.
                </dd>
              </div>

               <div className="relative bg-white p-6 rounded-lg shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white">
                    <Calendar className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-slate-900">Weekend & Holiday Focus</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-500">
                  Sessions are exclusively scheduled for Saturdays, Sundays, and School Holidays.
                </dd>
              </div>

               <div className="relative bg-white p-6 rounded-lg shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white">
                    <BookOpen className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-bold text-slate-900">Specialized Subjects</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-slate-500">
                  Maths & Physics across IGCSE, A Level, and IB levels.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      
      {/* Stats / CTA Strip */}
      <div className="bg-brand-primary py-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white">
             <div>
                <h3 className="text-2xl font-bold text-white">Unlock your academic potential.</h3>
                <p className="opacity-90 mt-1 text-emerald-50">Book your slot for the upcoming Weekend or Holiday session.</p>
             </div>
             <button onClick={() => setView('BOOKING')} className="mt-6 md:mt-0 bg-brand-gold text-brand-dark font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition-colors flex items-center ring-2 ring-brand-gold/50">
                 Check Availability <ArrowRight size={18} className="ml-2"/>
             </button>
         </div>
      </div>
    </div>
  );
};