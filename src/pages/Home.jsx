import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  Phone, MessageSquare, MapPin, ShieldCheck, Heart, Award, Clock, ArrowRight, 
  CheckCircle2, Search, Star, Sparkles, ChevronRight, HelpCircle, Activity,
  Stethoscope, ShoppingBag, Leaf, BookOpen, Send, Zap
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { servicesData } from '../data/servicesData';
import { featuredProducts } from '../data/productsData';
import { customerReviews } from '../data/reviewsData';
import { faqData } from '../data/faqData';
import { QuickInquiry } from '../components/QuickInquiry';

export default function Home() {
  const { handleOpenOrderModal } = useOutletContext();
  const [quickSearch, setQuickSearch] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <>
      <SEO 
        title="Sunil Ayurvedic Aushdhalaya | Trusted Pharmacy in Gaya, Bihar"
        description="Sunil Ayurvedic Aushdhalaya: Genuine prescription medicines, classical Ayurvedic Aushdhi, health monitors, surgical supplies & WhatsApp order delivery at Gautam Buddha Rd, Gaya."
      />

      {/* Clean Minimalism Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F0FDF4] via-[#F8FAFC] to-[#F8FAFC] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E2E8F0] dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline */}
            <div className="text-[#0A8F6A] dark:text-emerald-400 font-bold uppercase tracking-[1.5px] text-xs">
              Wellness & Pharmacy Trust Since 1995
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif-heading text-[#0F172A] dark:text-white leading-[1.15] tracking-tight">
              Your Trusted Partner for <span className="text-[#0A8F6A] dark:text-emerald-400">Genuine Healthcare</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#475569] dark:text-slate-300 leading-relaxed max-w-2xl">
              Providing genuine prescription drugs, authentic Ayurvedic formulations, surgical supplies, and daily health essentials at Kali Bindu Bhavan, Gautam Buddha Road, Gaya. Quality care for your family.
            </p>

            {/* CTA Button Group */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => handleOpenOrderModal()}
                className="px-7 py-3.5 bg-[#0A8F6A] hover:bg-[#087859] text-white font-semibold text-sm rounded-xl shadow-md shadow-[#0A8F6A]/20 flex items-center space-x-2 transition-all active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </button>

              <a
                href="tel:09835650482"
                className="px-7 py-3.5 bg-white dark:bg-slate-800 text-[#0A8F6A] dark:text-emerald-400 border border-[#0A8F6A] dark:border-emerald-500 hover:bg-[#F0FDF4] dark:hover:bg-emerald-950/40 font-semibold text-sm rounded-xl flex items-center space-x-2 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#0A8F6A]" />
                <span>Emergency Call</span>
              </a>

              <a
                href="https://maps.google.com/?q=Kali+Bindu+Bhavan,+Gautam+Buddha+Rd,+Gaya,+Bihar+823001"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] font-medium text-sm flex items-center space-x-1.5 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#0A8F6A]" />
                <span>Store Location</span>
              </a>
            </div>

            {/* Key Assurance Badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#E2E8F0] dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                <span className="font-medium">100% Authentic Stock</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                <span className="font-medium">Open 7 Days a Week</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <Heart className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                <span className="font-medium">Qualified Pharmacists</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Live Stock Checker Card */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.02)] border border-[#F1F5F9] dark:border-slate-800 space-y-5">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-[#0F172A] dark:text-white font-bold text-lg">
                  <Search className="w-5 h-5 text-[#0A8F6A]" />
                  <span>Medicine Stock Checker</span>
                </div>
                <span className="text-[10px] font-bold text-[#0A8F6A] bg-[#F0FDF4] px-2.5 py-1 rounded-full uppercase">
                  Live Status
                </span>
              </div>

              {/* Quick Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search medicine name..."
                  value={quickSearch}
                  onChange={(e) => setQuickSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-sm rounded-xl bg-[#F8FAFC] dark:bg-slate-800 border border-[#E2E8F0] dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A8F6A]"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              </div>

              {/* Stock Items Sample */}
              <div className="space-y-2.5">
                {[
                  { name: 'Chandraprabha Vati', brand: 'Patanjali Ayurveda', status: 'Available', badgeClass: 'bg-[#DCFCE7] text-[#166534]' },
                  { name: 'Ashwagandha Capsules', brand: 'Himalaya Wellness', status: 'Available', badgeClass: 'bg-[#DCFCE7] text-[#166534]' },
                  { name: 'Omron BP Monitor Hem 7120', brand: 'Omron Japan', status: 'Limited', badgeClass: 'bg-[#FEF9C3] text-[#854D0E]' },
                  { name: 'Dabur Chyawanprash 1kg', brand: 'Dabur India', status: 'Available', badgeClass: 'bg-[#DCFCE7] text-[#166534]' },
                ]
                .filter(item => !quickSearch || item.name.toLowerCase().includes(quickSearch.toLowerCase()))
                .map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => handleOpenOrderModal(item.name)}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] dark:bg-slate-800/80 border border-transparent hover:border-[#0A8F6A] hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#0A8F6A] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {item.brand}
                      </div>
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase ${item.badgeClass}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-[#F1F5F9] dark:border-slate-800">
                <span>Real-time inventory updated 5 mins ago</span>
                <Link to="/services" className="text-[#0A8F6A] font-bold hover:underline">
                  View All Stock →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Stock Search Bar Banner */}
      <section className="-mt-8 relative z-20 max-w-5xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600" />
              <input
                type="text"
                placeholder="Search medicine stock (e.g., Chyawanprash, BP Monitor, Paracetamol)..."
                value={quickSearch}
                onChange={(e) => setQuickSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
            <Link
              to={`/services?search=${encodeURIComponent(quickSearch)}`}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md shrink-0"
            >
              <span>Check Stock</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Short About Preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-4/3">
              <img
                src="/src/assets/images/store_front_aushdhalaya_1785574103349.jpg"
                alt="Sunil Ayurvedic Aushdhalaya Store Front in Gaya"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:right-6 bg-gradient-to-br from-emerald-700 to-teal-800 text-white p-5 rounded-2xl shadow-xl max-w-xs">
              <div className="text-3xl font-black font-serif-heading">25+ Years</div>
              <div className="text-xs text-emerald-100 font-medium mt-1">
                Serving generations of families in Gaya with authentic medicines & healthcare trust.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              <span>About Sunil Ayurvedic Aushdhalaya</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-slate-900 dark:text-white leading-tight">
              Combining Traditional Ayurvedic Wisdom with Modern Healthcare Reliability
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Located at <strong>Kali Bindu Bhavan, Gautam Buddha Road, Gaya</strong>, Sunil Ayurvedic Aushdhalaya is a premier healthcare destination. We bridge traditional Ayurvedic formulations with modern allopathic pharmaceutical needs, ensuring complete community wellbeing.
            </p>

            <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300 font-medium">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Authentic classical Aushdhi from Dabur, Baidyanath, Patanjali Divya & Zandu</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct distributor sourced ethical allopathic prescription medicines</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant WhatsApp medicine ordering with door-step delivery in Gaya</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 dark:bg-slate-100 hover:bg-emerald-700 dark:hover:bg-emerald-400 text-white dark:text-slate-900 font-bold text-sm rounded-xl transition-all shadow-md"
              >
                <span>Read Full Business Story & Mission</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Services Preview (Maximum 6) */}
      <section className="py-20 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Our Healthcare Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-slate-900 dark:text-white">
              Comprehensive Pharmacy & Medical Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              We stock verified medicines, authentic Ayurvedic preparations, surgical items, and digital monitoring devices under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service) => (
              <div 
                key={service.id}
                className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                    {service.category}
                  </span>
                  <Link 
                    to="/services" 
                    className="text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-emerald-600 flex items-center space-x-1"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#0A8F6A] hover:bg-[#087859] text-white font-bold text-sm rounded-xl shadow-md transition-all"
            >
              <span>Explore All Categories & Medicine Stock Checker</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            The Sunil Pharmacy Guarantee
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-slate-900 dark:text-white">
            Why Patients & Doctors Trust Us in Gaya
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: '100% Genuine Products',
              desc: 'Direct distributor procurement guaranteeing authenticity, fresh batch numbers, and uncompromised efficacy.',
              icon: ShieldCheck
            },
            {
              title: 'Ayurveda & Allopathy',
              desc: 'Unique combination of classical herbs, Kwaths, and modern ethical pharmaceutical medicines under one roof.',
              icon: Leaf
            },
            {
              title: 'WhatsApp Home Delivery',
              desc: 'Convenient prescription upload via WhatsApp (09835650482) with fast delivery across Gaya localities.',
              icon: MessageSquare
            },
            {
              title: 'Affordable Rates',
              desc: 'Transparent pricing with genuine discounts on MRP and clear digital billing for every transaction.',
              icon: Award
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-md hover:border-emerald-500 transition-all text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Showcase Preview */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Popular Healthcare Products
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-white mt-1">
                Top Ayurvedic & Digital Health Essentials
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-emerald-400 hover:underline flex items-center space-x-1"
            >
              <span>View Full Inventory Catalogue</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((prod) => (
              <div 
                key={prod.id}
                className="bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/80 shadow-xl flex flex-col justify-between group hover:border-emerald-500/50 transition-all"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
                  <img 
                    src={prod.image} 
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {prod.badge && (
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider">
                      {prod.badge}
                    </span>
                  )}
                  {prod.isAyurvedic && (
                    <span className="absolute top-3 right-3 bg-teal-800/90 text-teal-200 text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-md">
                      🌿 Pure Ayurvedic
                    </span>
                  )}
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                      {prod.brand} • {prod.category}
                    </div>
                    <h3 className="text-base font-bold text-white mt-1 line-clamp-1">
                      {prod.name}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-emerald-400">
                        ₹{prod.price}
                      </div>
                      <div className="text-xs text-slate-400 line-through">
                        MRP ₹{prod.mrp}
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenOrderModal(prod.name)}
                      className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 transition-colors shadow-md"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Community Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-heading text-slate-900 dark:text-white">
            What Our Patients & Customers Say
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Summarizing local feedback from customers on Gautam Buddha Road and nearby localities in Gaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerReviews.map((rev) => (
            <div key={rev.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">{rev.author}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">{rev.location}</span>
                </div>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-slate-100/80 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-bold font-serif-heading text-slate-900 dark:text-white">
              Pharmacy & Medicine Ordering FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.slice(0, 4).map((faq) => (
              <div key={faq.id} className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 shadow-xs space-y-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 pl-6 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/about"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center space-x-1"
            >
              <span>Have more questions? Read our Store Information</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Health Tips Preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Ayurvedic Health Insights
          </span>
          <h2 className="text-3xl font-bold font-serif-heading text-slate-900 dark:text-white">
            Seasonal Wellness & Immunity Advice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Daily Immunity Boosters in Classical Ayurveda',
              desc: 'Learn how Chyawanprash, Giloy Ghanvati, and Tulsi drops protect respiratory health naturally during seasonal changes.',
              date: 'August 2026',
              category: 'Ayurveda'
            },
            {
              title: 'How to Store Allopathic Medicines Properly at Home',
              desc: 'Key guidelines on temperature control, avoiding humidity, and monitoring expiration dates on strip packs.',
              date: 'July 2026',
              category: 'Medicine Care'
            },
            {
              title: 'Monitoring Blood Pressure & Sugar Accurately at Home',
              desc: 'Best practices for using digital BP cuffs and glucometers for consistent medical record keeping.',
              date: 'June 2026',
              category: 'Health Devices'
            }
          ].map((blog, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-md space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-md">
                  {blog.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {blog.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700 text-[11px] text-slate-400">
                Published by Pharmacist Team • {blog.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Inquiry Form Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <QuickInquiry />
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto">
            <Send className="w-6 h-6 text-emerald-300" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading">
            Subscribe for Health Tips & Medicine Availability Alerts
          </h2>

          <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto">
            Get monthly Ayurvedic wellness advice and updates when new batches of health items arrive at Sunil Ayurvedic Aushdhalaya, Gaya.
          </p>

          {newsletterSubscribed ? (
            <div className="p-4 bg-white/10 rounded-2xl max-w-md mx-auto text-emerald-200 text-xs font-semibold">
              ✓ Thank you for subscribing! We will keep you updated.
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-200 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-white text-emerald-900 hover:bg-emerald-100 font-bold text-sm rounded-xl transition-all shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
