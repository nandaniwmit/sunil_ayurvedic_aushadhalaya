import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, HelpCircle } from 'lucide-react';

export const QuickInquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Medicine Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send directly to WhatsApp as well for high conversion
    const text = `*Quick Website Inquiry - Sunil Ayurvedic Aushdhalaya*
Name: ${formData.name}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message || 'I have an inquiry regarding medicine availability.'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919835650482?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden border border-emerald-500/20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Instant Pharmacist Guidance</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold font-serif-heading leading-tight">
            Have a Health Query or Special Medicine Request?
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            Fill out this quick inquiry form and our experienced pharmacist at Gautam Buddha Road, Gaya will connect with you immediately.
          </p>

          <div className="pt-2 flex items-center space-x-3 text-xs text-emerald-300 font-semibold">
            <div className="p-2 bg-emerald-500/20 rounded-xl">
              <Phone className="w-4 h-4 text-emerald-400" />
            </div>
            <span>Direct Pharmacist Helpline: 09835650482</span>
          </div>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <div className="bg-emerald-900/40 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">Inquiry Sent Successfully!</h4>
              <p className="text-xs text-slate-300">
                Your request has been forwarded to our WhatsApp helpline. We will confirm stock and answer your query shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="mt-2 text-xs font-semibold text-emerald-400 underline hover:text-emerald-300"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Inquiry Type</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-900/80 border border-slate-700 text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                  <option value="Ayurvedic Dosage Guidance">Ayurvedic Dosage Guidance</option>
                  <option value="Bulk Order / Surgical Items">Bulk Order / Surgical Items</option>
                  <option value="Health Device Inquiry (BP/Sugar)">Health Device Inquiry (BP/Sugar)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Message / Medicine Name</label>
                <textarea
                  rows={2}
                  placeholder="Describe your inquiry or requested product..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-emerald-600/30 active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quick Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
