import React, { useState } from 'react';
import { Calendar, Clock, Check, AlertCircle, MapPin, Phone } from 'lucide-react';

export const Booking: React.FC = () => {
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('processing');
    setTimeout(() => {
      setBookingStatus('success');
    }, 1500);
  };

  if (bookingStatus === 'success') {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center bg-white rounded-lg shadow-lg border border-slate-100 mt-10">
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100">
          <Check className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="mt-4 text-3xl font-extrabold text-brand-blue">Request Received!</h2>
        <p className="mt-2 text-lg text-slate-500">
          Thank you. Mr. Kuloba Alex has received your booking request. He will contact you shortly on WhatsApp to confirm the location and session details.
        </p>
        <button 
          onClick={() => setBookingStatus('idle')}
          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-blue hover:bg-blue-800"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 className="text-3xl font-extrabold text-brand-blue sm:text-4xl">
            Book Home Tuition
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Personalized IGCSE Mathematics and Physics lessons delivered at your home.
          </p>
          
          <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-brand-gold shadow-sm">
             <h3 className="text-lg font-bold text-brand-dark mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-brand-gold"/> Availability
             </h3>
             <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                   <Check className="w-5 h-5 mr-2 text-brand-blue flex-shrink-0"/>
                   <span><strong>Weekends:</strong> Saturdays & Sundays</span>
                </li>
                <li className="flex items-start">
                   <Check className="w-5 h-5 mr-2 text-brand-blue flex-shrink-0"/>
                   <span><strong>School Holidays:</strong> Full availability (April, August, December)</span>
                </li>
                <li className="flex items-start">
                   <Check className="w-5 h-5 mr-2 text-brand-blue flex-shrink-0"/>
                   <span><strong>Subjects:</strong> IGCSE Mathematics & Physics</span>
                </li>
             </ul>
          </div>
          
          <div className="mt-6 flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
              <Phone className="h-6 w-6 text-brand-blue mr-3" />
              <div>
                  <p className="font-bold text-brand-blue">Direct Contact / WhatsApp</p>
                  <p className="text-slate-700 font-mono">0731 031 559</p>
              </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 bg-white shadow-xl rounded-xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-brand-dark mb-6">Session Request Form</h3>
          <form onSubmit={handleBooking} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Parent/Student Name</label>
              <input type="text" required id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3 border bg-slate-50" placeholder="e.g. John Doe" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                  <input type="tel" required id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3 border bg-slate-50" placeholder="07XX XXX XXX" />
               </div>
               <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Subject</label>
                  <select id="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3 border bg-slate-50">
                      <option>Mathematics (IGCSE)</option>
                      <option>Physics (IGCSE)</option>
                      <option>Both Subjects</option>
                  </select>
               </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-slate-700">Residence / Estate Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <MapPin className="h-5 w-5 text-gray-400" />
                 </div>
                 <input type="text" required id="location" className="focus:ring-brand-blue focus:border-brand-blue block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-3 border bg-slate-50" placeholder="e.g. Westlands, Parklands, Nyali" />
              </div>
              <p className="mt-1 text-xs text-brand-gold italic">Mr. Kuloba will use this to plan the commute.</p>
            </div>

            <div>
               <label className="block text-sm font-medium text-slate-700">Preferred Date & Time</label>
               <div className="mt-1 grid grid-cols-2 gap-4">
                   <div className="relative rounded-md shadow-sm">
                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <Calendar className="h-5 w-5 text-gray-400" />
                       </div>
                       <input type="date" required className="focus:ring-brand-blue focus:border-brand-blue block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-3 border bg-slate-50" />
                   </div>
                   <div className="relative rounded-md shadow-sm">
                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <Clock className="h-5 w-5 text-gray-400" />
                       </div>
                       <select className="focus:ring-brand-blue focus:border-brand-blue block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-3 border bg-slate-50">
                           <option>Morning (9am - 12pm)</option>
                           <option>Afternoon (1pm - 4pm)</option>
                           <option>Evening (4pm - 7pm)</option>
                       </select>
                   </div>
               </div>
            </div>

            <div className="rounded-md bg-amber-50 p-4 border border-amber-200">
               <div className="flex">
                  <div className="flex-shrink-0">
                     <AlertCircle className="h-5 w-5 text-amber-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                     <h3 className="text-sm font-medium text-amber-800">Booking Info</h3>
                     <div className="mt-2 text-sm text-amber-700">
                        <p>Rates are discussed and agreed upon based on location and number of hours. Submitting this form opens the conversation.</p>
                     </div>
                  </div>
               </div>
            </div>

            <button
              type="submit"
              disabled={bookingStatus === 'processing'}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-blue hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:opacity-50 transition-colors"
            >
              {bookingStatus === 'processing' ? 'Sending...' : 'Confirm Booking Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};