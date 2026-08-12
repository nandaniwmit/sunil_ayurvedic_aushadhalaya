import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Mail, Clock, ExternalLink, ShieldAlert, Heart, ChevronRight } from 'lucide-react';

export default function Footer() {
  const [legalModalContent, setLegalModalContent] = useState<string | null>(null);

  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, 
        visitor_id: visitorId, 
        session_id: sessionId,
        page_name: getPageName(), 
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, 
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(() => {});
      }
    };

    sendInitPayload();

    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: ReturnType<typeof setTimeout>;
    let isIdle = false;

    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };

    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-0 pb-8 border-t border-slate-800">
      {/* Clean Minimalism Bottom Info Bar */}
      <div className="bg-white dark:bg-slate-900 border-b border-[#E2E8F0] dark:border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#F0FDF4] dark:bg-emerald-950 flex items-center justify-center text-[#0A8F6A] dark:text-emerald-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Gautam Buddha Rd</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Gaya, Bihar 823001</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#F0FDF4] dark:bg-emerald-950 flex items-center justify-center text-[#0A8F6A] dark:text-emerald-400 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">098356 50482</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Quick Call & WhatsApp</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#F0FDF4] dark:bg-emerald-950 flex items-center justify-center text-[#0A8F6A] dark:text-emerald-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">8:00 AM - 9:30 PM</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Open All 7 Days</div>
            </div>
          </div>

          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-full bg-[#F0FDF4] dark:bg-emerald-950 flex items-center justify-center text-[#0A8F6A] dark:text-emerald-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Express Delivery</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Doorstep delivery in Gaya</div>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
                SA
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif-heading text-white">
                  Sunil Ayurvedic <span className="text-emerald-400">Aushdhalaya</span>
                </h3>
                <p className="text-xs text-slate-400">Trusted Medical Store & Pharmacy</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your reliable neighborhood healthcare provider in Gaya. Offering genuine prescription allopathic medicines, classical Ayurvedic formulations, surgical supplies, and health monitors.
            </p>

            <div className="pt-2 text-xs text-emerald-400 font-semibold space-y-1">
              <p>✓ 100% Verified Genuine Medicines</p>
              <p>✓ Fast WhatsApp Prescription Delivery</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Home Page', path: '/' },
                { label: 'About Our Pharmacy', path: '/about' },
                { label: 'Services & Stock Checker', path: '/services' },
                { label: 'Store Gallery', path: '/gallery' },
                { label: 'Contact Us & Map', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-500" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Working Hours & Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Store Timings & Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Operating Hours:</span>
                  <span>Monday - Sunday: 8:00 AM - 9:30 PM</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Phone & WhatsApp:</span>
                  <a href="tel:09835650482" className="hover:text-emerald-400 underline font-medium">09835650482</a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Store Address:</span>
                  <span>Kali Bindu Bhavan, Gautam Buddha Rd, Gaya, Bihar 823001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Google Map & Directions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
              Location Map
            </h4>
            <div className="rounded-xl overflow-hidden border border-slate-800 h-32 bg-slate-800 relative group">
              <iframe
                title="Sunil Ayurvedic Aushdhalaya Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.158784!2d85.0002!3d24.7955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a0000000000%3A0x0!2sGautam+Buddha+Rd%2C+Gaya%2C+Bihar+823001!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/?q=Kali+Bindu+Bhavan,+Gautam+Buddha+Rd,+Gaya,+Bihar+823001"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs text-emerald-400 hover:underline inline-flex items-center space-x-1"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Footer Legal & Copyright bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            <p>&copy; {currentYear} Sunil Ayurvedic Aushdhalaya. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center space-x-4">
            <button 
              onClick={() => setLegalModalContent('privacy')}
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => setLegalModalContent('terms')}
              className="hover:text-emerald-400 transition-colors"
            >
              Terms of Use
            </button>
            <span>•</span>
            <button 
              onClick={() => setLegalModalContent('disclaimer')}
              className="hover:text-emerald-400 transition-colors"
            >
              Medical Disclaimer
            </button>
          </div>

          <div>
            <p>
              {' '}
              <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
            </p>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 text-slate-200 p-6 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-white uppercase tracking-wider text-sm">
                {legalModalContent === 'privacy' && 'Privacy Policy'}
                {legalModalContent === 'terms' && 'Terms of Use'}
                {legalModalContent === 'disclaimer' && 'Medical Disclaimer'}
              </h3>
              <button onClick={() => setLegalModalContent(null)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>
            
            <div className="text-xs text-slate-300 leading-relaxed space-y-2">
              {legalModalContent === 'privacy' && (
                <p>
                  Sunil Ayurvedic Aushdhalaya respects your privacy. Phone numbers, addresses, and medical prescriptions submitted via WhatsApp or online forms are strictly used to fulfill your requested medicine orders and customer service. We do not sell or share customer data with third parties.
                </p>
              )}
              {legalModalContent === 'terms' && (
                <p>
                  By using this website, you agree that medicine orders for Schedule H and Schedule H1 prescription drugs require a valid prescription from a registered medical practitioner. Prices and availability are subject to stock verification at the physical store.
                </p>
              )}
              {legalModalContent === 'disclaimer' && (
                <p>
                  Information on this website is provided for informational purposes regarding medicine stock availability and health products. It does not replace medical advice, diagnosis, or treatment by a qualified doctor. Always consult your physician before starting any medication.
                </p>
              )}
            </div>

            <div className="pt-2 text-right">
              <button 
                onClick={() => setLegalModalContent(null)} 
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
