import React, { useState } from 'react';
import { X, Send, PhoneCall, Upload, FileText, CheckCircle2, Clock } from 'lucide-react';
import { WhatsAppOrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: '',
    medicineName: prefilledMedicine,
    quantity: '1',
    prescriptionUploaded: false,
    message: '',
    preferredDeliveryTime: 'Immediate (1-2 Hours)'
  });

  const [fileName, setFileName] = useState<string>('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setFormData(prev => ({ ...prev, prescriptionUploaded: true }));
    }
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.mobileNumber || !formData.medicineName) {
      alert('Please fill in your Name, Mobile Number, and Medicine Required.');
      return;
    }

    const messageText = `*Hello Sunil Ayurvedic Aushdhalaya!* 👋
I would like to place a *Medicine Order Request*:

📋 *Customer Details:*
• *Name:* ${formData.customerName}
• *Phone:* ${formData.mobileNumber}
${formData.email ? `• *Email:* ${formData.email}\n` : ''}• *Delivery Address:* ${formData.address || 'Pickup at Store'}

💊 *Medicine Order Details:*
• *Medicine Required:* ${formData.medicineName}
• *Quantity:* ${formData.quantity || '1'}
• *Prescription Available:* ${formData.prescriptionUploaded ? 'YES (Will attach in chat)' : 'NO / OTC Medicine'}
• *Preferred Time:* ${formData.preferredDeliveryTime}

📝 *Notes / Special Instructions:*
${formData.message || 'None'}

Please confirm stock availability and price estimation. Thank you!`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919835650482?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 max-h-[90vh] flex flex-col"
        id="whatsapp-order-modal"
      >
        {/* Header */}
        <div className="bg-[#0A8F6A] p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md">
              <Send className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold font-serif-heading">WhatsApp Medicine Order</h3>
              <p className="text-xs text-emerald-100">Direct Prescription & Medicine Delivery Form</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmitWhatsApp} className="p-6 overflow-y-auto space-y-4 text-slate-800 dark:text-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text"
                name="customerName"
                required
                placeholder="Enter your full name"
                value={formData.customerName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input 
                type="tel"
                name="mobileNumber"
                required
                placeholder="10-digit mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                Email Address (Optional)
              </label>
              <input 
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                Preferred Delivery Time
              </label>
              <select
                name="preferredDeliveryTime"
                value={formData.preferredDeliveryTime}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              >
                <option value="Immediate (1-2 Hours)">Immediate Express (1-2 Hours)</option>
                <option value="Today Evening (5 PM - 8 PM)">Today Evening (5 PM - 8 PM)</option>
                <option value="Tomorrow Morning">Tomorrow Morning</option>
                <option value="Store Pickup at Gautam Buddha Rd">Store Self-Pickup</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
              Delivery Address
            </label>
            <input 
              type="text"
              name="address"
              placeholder="House/Street, Locality in Gaya (e.g., Kali Bindu Bhavan Road, Gaya)"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                Medicine Name / Herbal Formula Required <span className="text-red-500">*</span>
              </label>
              <input 
                type="text"
                name="medicineName"
                required
                placeholder="e.g. Dabur Chyawanprash, Ashwagandharishta, Paracetamol"
                value={formData.medicineName}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
                Quantity / Packs
              </label>
              <input 
                type="text"
                name="quantity"
                placeholder="e.g., 2 strips / 1 bottle"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Upload Prescription */}
          <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <span className="text-xs font-bold text-emerald-900 dark:text-emerald-200 block">
                    Doctor Prescription Upload
                  </span>
                  <span className="text-[11px] text-emerald-700 dark:text-emerald-300">
                    Required for Schedule H Rx medicines
                  </span>
                </div>
              </div>
              <label className="cursor-pointer inline-flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium transition-colors shadow-sm">
                <Upload className="w-3.5 h-3.5" />
                <span>{fileName ? 'Change File' : 'Select Photo'}</span>
                <input 
                  type="file" 
                  accept="image/*,.pdf" 
                  onChange={handleFileChange} 
                  className="hidden" 
                />
              </label>
            </div>
            {fileName && (
              <div className="mt-2 flex items-center text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600" />
                Prescription attached: {fileName}
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-600 dark:text-slate-400 mb-1">
              Message / Notes
            </label>
            <textarea 
              name="message"
              rows={2}
              placeholder="Mention any symptom details, brand preference, or call request..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#0A8F6A] hover:bg-[#087859] text-white font-semibold text-sm rounded-xl flex items-center justify-center space-x-2 transition-all shadow-md shadow-[#0A8F6A]/20 active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href="tel:09835650482"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Now (09835650482)</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
