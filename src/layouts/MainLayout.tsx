import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const MainLayout: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const handleOpenOrderModal = (medicineName?: string) => {
    setPrefilledMedicine(medicineName || '');
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setPrefilledMedicine('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-200">
      {/* Navigation Header */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Dynamic Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Page Route Outlet */}
      <main className="flex-1 pb-12">
        <Outlet context={{ handleOpenOrderModal }} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenOrderModal={handleOpenOrderModal} />

      {/* WhatsApp Prescription & Order Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        prefilledMedicine={prefilledMedicine}
      />
    </div>
  );
};
