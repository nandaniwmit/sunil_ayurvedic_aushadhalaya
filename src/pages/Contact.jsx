import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2, 
  ExternalLink, AlertTriangle, ShieldCheck, Headphones, Compass 
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Contact() {
  const { handleOpenOrderModal } = useOutletContext();
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Contact',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.phone) return;

    const text = `*Website Contact Form Message - Sunil Ayurvedic Aushdhalaya*
Name: ${inquiryForm.name}
Phone: ${inquiryForm.phone}
Email: ${inquiryForm.email || 'N/A'}
Subject: ${inquiryForm.subject}
Message: ${inquiryForm.message}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919835650482?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Contact Us & Map Directions | Sunil Ayurvedic Aushdhalaya Gaya"
        description="Contact Sunil Ayurvedic Aushdhalaya at Kali Bindu Bhavan, Gautam Buddha Rd, Gaya, Bihar 823001. Call 09835650482 or order medicines via WhatsApp."
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 opacity-90"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <Headphones className="w-3.5 h-3.5 text-emerald-400" />
            <span>24/7 Patient Communication Helpline</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-heading">
            Contact Us & Store Location
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get in touch with our licensed pharmacists or navigate to our store on Gautam Buddha Road, Gaya.
          </p>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-amber-500/10 dark:bg-amber-950/40 border-y border-amber-300 dark:border-amber-800 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-900 dark:text-amber-200">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-semibold">Need Urgent Prescription Verification or Emergency Medicine Delivery?</span>
          </div>
          <div className="flex items-center space-x-2 font-bold shrink-0">
            <span>Direct Call:</span>
            <a href="tel:09835650482" className="underline hover:text-amber-600">09835650482</a>
          </div>
        </div>
      </section>

      {/* Contact Cards & Store Info */}
      <section className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Store Address</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Kali Bindu Bhavan, Gautam Buddha Rd, Gaya, Bihar 823001
            </p>
            <a
              href="https://maps.google.com/?q=Kali+Bindu+Bhavan,+Gautam+Buddha+Rd,+Gaya,+Bihar+823001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center space-x-1"
            >
              <span>Get Google Map Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Phone & Helpline</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Speak directly with our staff for medicine availability and price queries.
            </p>
            <a href="tel:09835650482" className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline block">
              09835650482
            </a>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">WhatsApp Medicine Order</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Upload prescription photo or medicine list for home delivery.
            </p>
            <button
              onClick={() => handleOpenOrderModal()}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline block"
            >
              Open WhatsApp Order Form →
            </button>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Opening Hours</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Monday – Sunday: <br />
              <strong className="text-slate-800 dark:text-slate-100">8:00 AM – 9:30 PM</strong>
            </p>
            <span className="inline-block text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
              Open All 7 Days
            </span>
          </div>

        </div>

        {/* Contact Form & Google Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-serif-heading text-slate-900 dark:text-white">
                Send a Message to Our Store
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Have a non-urgent medicine query or feedback? Leave us a message.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-slate-900 dark:text-white">Message Sent via WhatsApp!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Thank you! Our pharmacy representative will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-emerald-600 underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                    Message / Special Requirement
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe required medicine or query..."
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-emerald-600/20 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Google Map & Store Front Photo */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg font-serif-heading text-slate-900 dark:text-white">
                    Google Maps Location
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Kali Bindu Bhavan, Gautam Buddha Rd, Gaya, Bihar 823001
                  </p>
                </div>
                <Compass className="w-6 h-6 text-emerald-600 shrink-0" />
              </div>

              <div className="rounded-2xl overflow-hidden h-72 border border-slate-200 dark:border-slate-700">
                <iframe
                  title="Sunil Ayurvedic Aushdhalaya Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.158784!2d85.0002!3d24.7955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a0000000000%3A0x0!2sGautam+Buddha+Rd%2C+Gaya%2C+Bihar+823001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Landmark: Near Kali Bindu Bhavan Commercial Market
                </span>
                <a
                  href="https://maps.google.com/?q=Kali+Bindu+Bhavan,+Gautam+Buddha+Rd,+Gaya,+Bihar+823001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl hover:bg-emerald-700 transition-colors inline-flex items-center space-x-1"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
