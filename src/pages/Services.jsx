import React, { useEffect, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import { 
  Pill, Leaf, Activity, Bandage, Baby, ShieldCheck, ShoppingBag, 
  ChevronRight, Phone, MessageSquare, CheckCircle2, Sparkles, Search 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { servicesData } from '../data/servicesData';
import MedicineStockChecker from '../components/MedicineStockChecker';

export default function Services() {
  const { handleOpenOrderModal } = useOutletContext();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Pharmacy Services & Medicine Stock Checker | Sunil Ayurvedic Aushdhalaya"
        description="Search medicine availability in Gaya. Browse prescription drugs, classical Ayurvedic Aushdhi, health devices, surgical supplies, and baby care items."
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 opacity-90"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Complete Healthcare Categories & Inventory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-heading">
            Pharmacy Services & Live Stock Checker
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Verify medicine availability, browse category-wise healthcare products, and request express delivery across Gaya.
          </p>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: Medicine Stock Checker Component */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <MedicineStockChecker 
          onOrderMedicine={(medName) => handleOpenOrderModal(medName)} 
        />
      </section>

      {/* Category-Wise Detailed Services Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Categorized Healthcare Solutions
          </span>
          <h2 className="text-3xl font-bold font-serif-heading text-slate-900 dark:text-white">
            Detailed Service Offerings
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Every product category is managed under strict pharmacist supervision and optimal environmental conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((srv) => (
            <div 
              key={srv.id}
              className="bg-white dark:bg-slate-800 rounded-3xl p-7 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <Pill className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                    {srv.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif-heading text-slate-900 dark:text-white">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {srv.fullDesc}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-2">Key Highlights:</span>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-700/60 mt-6">
                <button
                  onClick={() => handleOpenOrderModal(`Inquiry regarding ${srv.title}`)}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Category Items</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12 px-4 max-w-5xl mx-auto text-center bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-8 shadow-xl space-y-4">
        <h3 className="text-2xl font-bold font-serif-heading">Looking for a Specific Brand or Prescription Item?</h3>
        <p className="text-xs text-emerald-100 max-w-lg mx-auto">
          If your required medicine is not listed in the digital inventory above, call us directly. We arrange rare medicines within 24 hours!
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => handleOpenOrderModal()}
            className="px-6 py-3 bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs rounded-xl transition-all shadow-md"
          >
            Upload Prescription on WhatsApp
          </button>
          <a
            href="tel:09835650482"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-all shadow-md"
          >
            Call Pharmacist Helpline: 09835650482
          </a>
        </div>
      </section>
    </>
  );
}
