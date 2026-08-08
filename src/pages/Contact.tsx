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
                    <p className="text-sm text-gray-500">Esikhumbeni A/A, Mzamba Location, Bizana, 4800</p>
                    <p className="text-sm text-gray-500">Eastern Cape, South Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">Postal Address</p>
                    <p className="text-sm text-gray-500">P.O. Box 210611, Nomlacu Location, Mbizana, 4800</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Phone className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">Telephone</p>
                    <p className="text-sm text-gray-500">039 251 3715</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Mail className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-500">200500824@ecschools.org.za</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Clock className="shrink-0 mt-0.5 text-school-blue" size={20} />
                  <div>
                    <p className="font-semibold">School Hours</p>
                    <p className="text-sm text-gray-500">Monday – Thursday: 07:45 – 15:00</p>
                    <p className="text-sm text-gray-500">Friday: 07:45 – 13:00</p>
                    <p className="text-sm text-gray-500">Closed on weekends and public holidays</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 border-2 border-amber-100 bg-amber-50">
              <h2 className="text-lg font-bold text-school-blue mb-2">2027 Admissions</h2>
              <p className="text-sm text-gray-600 mb-4">Applications for 2027 are open for Grades 8–10. Contact the school office or apply online.</p>
              <a href="/admissions" className="btn-primary inline-block text-sm">Apply Online</a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 min-h-[400px]">
            <iframe
              title="Mzamba CHS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500!2d29.8538!3d-30.8591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMzamba%20Comprehensive%20High%20School%2C%20Bizana!5e0!3m2!1sen!2sza!4v1"
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
