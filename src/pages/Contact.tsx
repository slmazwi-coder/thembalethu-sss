import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl p-6 border-2 border-blue-100 bg-blue-50">
              <h2 className="text-lg font-bold text-school-blue mb-4">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">Physical Address</p>
                    <p className="text-sm text-gray-500">99 Bhongweni Location, Kokstad</p>
                    <p className="text-sm text-gray-500">KwaZulu-Natal, South Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Phone className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">Telephone / Mobile</p>
                    <p className="text-sm text-gray-500">+27 82 611 7032</p>
                    <p className="text-xs text-gray-400">(Ms. N. Magwaza - Principal)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Mail className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-500">Contact via Facebook page</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Clock className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">School Hours</p>
                    <p className="text-sm text-gray-500">Monday – Friday: 08:00 – 14:30</p>
                    <p className="text-sm text-gray-500">Closed on weekends and public holidays</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 border-2 border-amber-100 bg-amber-50">
              <h2 className="text-lg font-bold text-school-blue mb-2">2026 Admissions</h2>
              <p className="text-sm text-gray-600 mb-4">Applications for 2026 are open. Contact the school office or apply online.</p>
              <a href="/admissions" className="btn-primary inline-block text-sm">Apply Online</a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 min-h-[400px]">
            <iframe
              title="Thembalethu SSS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d29.424!3d-30.548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKokstad%2C+KwaZulu-Natal!5e0!3m2!1sen!2sza!4v1"
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
