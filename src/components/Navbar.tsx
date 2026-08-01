import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, Sun, Moon, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenOrderModal: (medicineName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-[#0A8F6A] text-white text-xs py-1.5 px-4 border-b border-[#087859]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-200" />
              <span>Kali Bindu Bhavan, Gautam Buddha Rd, Gaya, Bihar 823001</span>
            </span>
            <span className="hidden md:inline-flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-emerald-200" />
              <span>Open Daily: 8:00 AM - 9:30 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 font-semibold">
            <span className="hidden sm:inline text-emerald-100">Quick Call:</span>
            <a 
              href="tel:09835650482" 
              className="hover:text-emerald-200 transition-colors flex items-center space-x-1"
            >
              <Phone className="w-3 h-3 text-emerald-200" />
              <span>09835650482</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Header */}
      <nav className="bg-white dark:bg-slate-900 border-b border-[#E2E8F0] dark:border-slate-800 shadow-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center font-extrabold text-xl shadow-xs group-hover:bg-[#087859] transition-colors">
                S
              </div>

              <div>
                <span className="block text-lg sm:text-xl font-extrabold text-[#0A8F6A] dark:text-emerald-400 leading-tight tracking-tight">
                  SUNIL AYURVEDIC
                </span>
                <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Aushdhalaya & Pharmacy • Gaya
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#0A8F6A] dark:text-emerald-400 font-bold bg-[#F0FDF4] dark:bg-emerald-950/60'
                        : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-emerald-400'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Actions & Utilities */}
            <div className="flex items-center space-x-2.5">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>

              {/* Medicine Stock Order Pill Button */}
              <button
                onClick={() => onOpenOrderModal()}
                className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 bg-[#0A8F6A] hover:bg-[#087859] text-white text-xs font-semibold rounded-full shadow-md shadow-[#0A8F6A]/20 active:scale-95 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Medicine Stock & Order →</span>
              </button>

              {/* Phone Call Button */}
              <a
                href="tel:09835650482"
                className="hidden md:inline-flex items-center space-x-1.5 px-3.5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-full transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#0A8F6A]" />
                <span>Call Us</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-3 bg-emerald-600 text-white text-xs font-semibold rounded-xl flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>

              <a
                href="tel:09835650482"
                className="w-full py-3 bg-blue-600 text-white text-xs font-semibold rounded-xl flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
