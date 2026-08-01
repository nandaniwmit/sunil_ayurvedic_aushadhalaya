import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  ShieldCheck, Award, Heart, Clock, Leaf, MapPin, Phone, MessageSquare, 
  CheckCircle2, Users, Target, Eye, Sparkles, Building2, History 
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function About() {
  const { handleOpenOrderModal } = useOutletContext();

  const valuesList = [
    {
      title: 'Uncompromising Authenticity',
      desc: 'We never compromise on drug quality. Every tablet, syrup, and herbal Aushdhi is 100% genuine and batch-verified.',
      icon: ShieldCheck
    },
    {
      title: 'Patient-First Ethics',
      desc: 'Guiding patients on proper medicine usage, dosage guidelines, and safe storage with utmost empathy.',
      icon: Heart
    },
    {
      title: 'Heritage Meets Modernity',
      desc: 'Preserving authentic Ayurvedic classical formulations while utilizing modern digital ordering and inventory tracking.',
      icon: Leaf
    },
    {
      title: 'Community Trust',
      desc: 'Serving as Gaya’s trusted healthcare neighbor at Kali Bindu Bhavan, Gautam Buddha Road for decades.',
      icon: Users
    }
  ];

  const timelineEvents = [
    {
      year: '2001',
      title: 'Establishment at Gautam Buddha Rd',
      desc: 'Founded as a dedicated classical Ayurvedic Aushdhalaya to make authentic herbal formulations accessible to the people of Gaya.'
    },
    {
      year: '2008',
      title: 'Expansion into Ethical Allopathy',
      desc: 'Integrated complete ranges of ethical prescription drugs, life-saving cardiac & diabetic medications, and surgical disposables.'
    },
    {
      year: '2016',
      title: 'Digital Health Devices Sourcing',
      desc: 'Partnered with authorized distributors of Omron, Accu-Chek, and Dr. Morepen for digital BP and glucose monitors.'
    },
    {
      year: '2023',
      title: 'WhatsApp Home Delivery Service',
      desc: 'Launched express prescription delivery via WhatsApp (09835650482) across Gaya localities for elderly and busy patients.'
    },
    {
      year: '2026',
      title: 'Live Inventory & Stock Checker',
      desc: 'Digitized stock availability so patients can check medicine status online before visiting.'
    }
  ];

  return (
    <>
      <SEO 
        title="About Us | Sunil Ayurvedic Aushdhalaya Gaya"
        description="Learn about Sunil Ayurvedic Aushdhalaya at Kali Bindu Bhavan, Gautam Buddha Rd, Gaya. Decades of trust offering authentic Ayurvedic Aushdhi, prescription medicines, and healthcare products."
      />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 opacity-90"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-4 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dedicated Healthcare Institution in Gaya</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-heading">
            About Sunil Ayurvedic Aushdhalaya
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Your trusted medical partner for genuine prescription drugs, authentic Ayurvedic formulations, surgical supplies, and family healthcare needs at Gautam Buddha Road, Gaya, Bihar.
          </p>
        </div>
      </section>

      {/* Main Story & Overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Our Heritage & Business Story
            </span>
            <h2 className="text-3xl font-bold font-serif-heading text-slate-900 dark:text-white leading-tight">
              Decades of Healthcare Service Built on Integrity & Knowledge
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Established with a clear vision to provide authentic, unadulterated Ayurvedic Aushdhi and reliable ethical medicines, <strong>Sunil Ayurvedic Aushdhalaya</strong> has become a household name in Gaya, Bihar. Located at Kali Bindu Bhavan on Gautam Buddha Road, our store serves thousands of families, local doctors, and health-conscious citizens every month.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Whether you are looking for classical Ayurvedic Rasayanas to build natural immunity or urgent diabetic and cardiac prescription drugs, our licensed pharmacists meticulously ensure temperature-controlled storage and batch authenticity.
            </p>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Our Core Promise to Every Customer</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                100% Genuine Medicines • Accurate Digital Billing • Transparent MRP Discounts • Professional Pharmacist Guidance.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img 
                src="/src/assets/images/hero_banner_pharmacy_1785574087841.jpg" 
                alt="Pharmacy Display Counter" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 text-white">
                <div className="text-lg font-bold font-serif-heading">Kali Bindu Bhavan Store Facility</div>
                <div className="text-xs text-slate-300">Gautam Buddha Road, Gaya, Bihar 823001</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-slate-100/80 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To deliver authentic, high-quality, and affordable healthcare solutions—spanning ancient Ayurvedic remedies and modern ethical pharmaceuticals—ensuring accessible health and wellness for every resident in Gaya and surrounding regions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif-heading text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be recognized as the most trusted healthcare pharmacy in Bihar, celebrated for patient safety, medicine authenticity, Ayurvedic expertise, and seamless home delivery technology.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-bold font-serif-heading text-slate-900 dark:text-white">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesList.map((v, i) => (
            <div key={i} className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <v.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{v.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold font-serif-heading">
              Milestones Over The Years
            </h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-emerald-500/30">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className={`relative flex flex-col sm:flex-row items-start ${idx % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                
                {/* Year Badge */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold ring-4 ring-slate-900 shadow-md">
                  <History className="w-4 h-4" />
                </div>

                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 space-y-2 bg-slate-800/80 p-5 rounded-2xl border border-slate-700 shadow-lg">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md">
                    {evt.year}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">{evt.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{evt.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 px-4 max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-slate-900 dark:text-white">
          Need Medicines or Health Advice in Gaya?
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xl mx-auto">
          Visit our store on Gautam Buddha Road or order conveniently via WhatsApp.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => handleOpenOrderModal()}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-lg flex items-center space-x-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Prescription Order</span>
          </button>
          <a
            href="tel:09835650482"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call 09835650482</span>
          </a>
        </div>
      </section>
    </>
  );
}
