import React, { useState } from 'react';
import { Calendar, Clock, Check, AlertCircle, MapPin, Phone, Send } from 'lucide-react';

export const Booking: React.FC = () => {
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'IGCSE Mathematics',
    location: '',
    date: '',
    time: 'Weekday Evening (From 5pm)'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStatus('processing');

    // Construct WhatsApp Message
    const message = `*NEW TUITION BOOKING REQUEST*%0A%0AHello Prof Alexander Juma, I would like to book a home session.%0A%0A*Student/Parent:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Location:* ${formData.location}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}`;
    
    // WhatsApp API Link - Contact: 0731031559
    const whatsappUrl = `https://wa.me/254731031559?text=${message}`;

    // Simulate short processing then open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setBookingStatus('success');
    }, 1500);
  };

  if (bookingStatus === 'success') {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center bg-white rounded-lg shadow-lg border border-slate-100 mt-10">
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-emerald-100">
          <Check className="h-12 w-12 text-emerald-600" />
        </div>
        <h2 className="mt-4 text-3xl font-extrabold text-brand-primary">Redirecting to WhatsApp...</h2>
        <p className="mt-2 text-lg text-slate-500">
          Your booking details have been formatted. Please hit <strong>Send</strong> in WhatsApp to complete your booking with Prof Alexander Juma.
        </p>
        <button 
          onClick={() => {
             setBookingStatus('idle');
             setFormData({ name: '', phone: '', subject: 'IGCSE Mathematics', location: '', date: '', time: 'Weekday Evening (From 5pm)' });
          }}
          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-primary hover:bg-brand-dark"
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
          <h2 className="text-3xl font-extrabold text-brand-primary sm:text-4xl">
            Book Home Tuition
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Personalized Mathematics and Physics lessons (IGCSE, A Level, IB) delivered at your home.
          </p>
          
          <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-brand-primary shadow-sm">
             <h3 className="text-lg font-bold text-brand-dark mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-brand-primary"/> Availability
             </h3>
             <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                   <Check className="w-5 h-5 mr-2 text-brand-primary flex-shrink-0"/>
                   <span><strong>Weekdays:</strong> Evenings from 5:00 PM</span>
                </li>
                <li className="flex items-start">
                   <Check className="w-5 h-5 mr-2 text-brand-primary flex-shrink-0"/>
                   <span><strong>Weekends:</strong> Saturdays & Sundays</span>
                </li>
                <li className="flex items-start">
                   <Check className="w-5 h-5 mr-2 text-brand-primary flex-shrink-0"/>
                   <span><strong>School Holidays:</strong> Full availability (April, August, December)</span>
                </li>
                <li className="flex items-start">
                   <Check className="w-5 h-5 mr-2 text-brand-primary flex-shrink-0"/>
                   <span><strong>Curricula:</strong> IGCSE, A Level, IB</span>
                </li>
             </ul>
          </div>
          
          <div className="mt-6 flex items-center p-4 bg-emerald-50 rounded-lg border border-emerald-100">
              <Phone className="h-6 w-6 text-brand-primary mr-3" />
              <div>
                  <p className="font-bold text-brand-primary">Direct Contact / WhatsApp</p>
                  <p className="text-slate-700 font-mono">0731 031 559</p>
              </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 bg-white shadow-xl rounded-xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-brand-dark mb-6">Session Request Form</h3>
          <form onSubmit={handleBooking} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Parent/Student Name</label>
              <input 
                type="text" 
                required 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm p-3 border bg-slate-50" 
                placeholder="e.g. John Doe" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm p-3 border bg-slate-50" 
                    placeholder="07XX XXX XXX" 
                  />
               </div>
               <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Level & Subject</label>
                  <select 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary sm:text-sm p-3 border bg-slate-50"
                  >
                      <optgroup label="IGCSE">
                        <option value="IGCSE Mathematics">IGCSE Mathematics</option>
                        <option value="IGCSE Physics">IGCSE Physics</option>
                        <option value="IGCSE Both">IGCSE Both</option>
                      </optgroup>
                      <optgroup label="A Level / IB">
                        <option value="A Level Mathematics">A Level Mathematics</option>
                        <option value="A Level Physics">A Level Physics</option>
                        <option value="IB Mathematics">IB Mathematics</option>
                        <option value="IB Physics">IB Physics</option>
                      </optgroup>
                  </select>
               </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-slate-700">Residence / Estate Name</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <MapPin className="h-5 w-5 text-gray-400" />
                 </div>
                 <input 
                   type="text" 
                   required 
                   id="location" 
                   value={formData.location}
                   onChange={handleChange}
                   className="focus:ring-brand-primary focus:border-brand-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-3 border bg-slate-50" 
                   placeholder="e.g. Westlands, Parklands, Nyali" 
                 />
              </div>
              <p className="mt-1 text-xs text-slate-500 italic">Prof Alexander Juma will use this to plan the commute.</p>
            </div>

            <div>
               <label className="block text-sm font-medium text-slate-700">Preferred Date & Time</label>
               <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="relative rounded-md shadow-sm">
                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <Calendar className="h-5 w-5 text-gray-400" />
                       </div>
                       <input 
                         type="date" 
                         required 
                         id="date"
                         value={formData.date}
                         onChange={handleChange}
                         className="focus:ring-brand-primary focus:border-brand-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-3 border bg-slate-50" 
                       />
                   </div>
                   <div className="relative rounded-md shadow-sm">
                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <Clock className="h-5 w-5 text-gray-400" />
                       </div>
                       <select 
                         id="time"
                         value={formData.time}
                         onChange={handleChange}
                         className="focus:ring-brand-primary focus:border-brand-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-3 border bg-slate-50"
                       >
                           <option value="Weekday Evening (From 5pm)">Weekday Evening (From 5pm)</option>
                           <option value="Weekend Morning (9am - 12pm)">Weekend Morning (9am - 12pm)</option>
                           <option value="Weekend Afternoon (1pm - 4pm)">Weekend Afternoon (1pm - 4pm)</option>
                           <option value="Weekend Evening (4pm - 7pm)">Weekend Evening (4pm - 7pm)</option>
                       </select>
                   </div>
               </div>
            </div>

            <div className="rounded-md bg-slate-50 p-4 border border-slate-200">
               <div className="flex">
                  <div className="flex-shrink-0">
                     <AlertCircle className="h-5 w-5 text-slate-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                     <h3 className="text-sm font-medium text-slate-800">Booking Info</h3>
                     <div className="mt-2 text-sm text-slate-600">
                        <p>Submitting this form will open WhatsApp to send your booking details directly to Prof Alexander Juma.</p>
                     </div>
                  </div>
               </div>
            </div>

            <button
              type="submit"
              disabled={bookingStatus === 'processing'}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-primary hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50 transition-colors"
            >
              {bookingStatus === 'processing' ? 'Opening WhatsApp...' : (
                <>
                  <Send className="w-4 h-4 mr-2" /> Book via WhatsApp
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};