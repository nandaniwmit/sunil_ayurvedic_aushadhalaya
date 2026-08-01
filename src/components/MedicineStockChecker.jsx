import React, { useState, useMemo } from 'react';
import { Search, Filter, AlertCircle, CheckCircle2, Clock, ShieldCheck, ShoppingBag, Info, RefreshCw } from 'lucide-react';
import medicineStockData from '../data/medicineStock.json';

export default function MedicineStockChecker({ onOrderMedicine }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(medicineStockData.map(item => item.category));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filter medicines
  const filteredMedicines = useMemo(() => {
    return medicineStockData.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedStatus('All');
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#DCFCE7] text-[#166534] uppercase tracking-wide border border-[#BBF7D0]">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-[#166534]" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#FEF9C3] text-[#854D0E] uppercase tracking-wide border border-[#FEF08A]">
            <Clock className="w-3.5 h-3.5 mr-1 text-[#854D0E]" />
            Limited
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#FEE2E2] text-[#991B1B] uppercase tracking-wide border border-[#FCA5A5]">
            <AlertCircle className="w-3.5 h-3.5 mr-1 text-[#991B1B]" />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.02)] border border-[#F1F5F9] dark:border-slate-800 p-6 md:p-8">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F0FDF4] dark:bg-emerald-950/60 text-[#0A8F6A] dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0A8F6A]" />
            <span>Live Inventory Availability Tracker</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold font-serif-heading text-slate-900 dark:text-white">
            Medicine Stock Checker
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Search real-time stock availability at Sunil Ayurvedic Aushdhalaya, Gaya.
          </p>
        </div>

        <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 bg-[#F8FAFC] dark:bg-slate-800 p-3 rounded-xl border border-[#E2E8F0] dark:border-slate-700 shrink-0">
          <Info className="w-4 h-4 text-[#0A8F6A] shrink-0" />
          <span>Updated 5 mins ago. Need urgent stock? Call <strong className="text-slate-800 dark:text-slate-200 font-bold">09835650482</strong></span>
        </div>
      </div>

      {/* Controls / Filter Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {/* Search input */}
        <div className="relative sm:col-span-2">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by medicine name, brand, or formula..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
          />
        </div>

        {/* Category selector */}
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full py-2.5 px-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>Category: {cat}</option>
            ))}
          </select>
        </div>

        {/* Status selector */}
        <div className="flex space-x-2">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full py-2.5 px-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
          >
            <option value="All">Status: All</option>
            <option value="Available">Available</option>
            <option value="Limited Stock">Limited Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          {(searchTerm || selectedCategory !== 'All' || selectedStatus !== 'All') && (
            <button
              onClick={handleReset}
              className="p-2.5 text-slate-500 hover:text-rose-600 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors shrink-0"
              title="Reset Filters"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Table / Cards */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
              <th className="py-3.5 px-4">Medicine & Brand</th>
              <th className="py-3.5 px-4 hidden md:table-cell">Category</th>
              <th className="py-3.5 px-4">MRP / Price</th>
              <th className="py-3.5 px-4 hidden sm:table-cell">Expiry</th>
              <th className="py-3.5 px-4">Availability Status</th>
              <th className="py-3.5 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      {item.name}
                      {item.prescriptionRequired && (
                        <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 rounded">
                          Rx Required
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Brand: <span className="font-medium text-slate-700 dark:text-slate-300">{item.brand}</span> • Unit: {item.unit}
                    </div>
                  </td>
                  <td className="py-4 px-4 hidden md:table-cell text-xs font-medium text-slate-600 dark:text-slate-400">
                    {item.category}
                  </td>
                  <td className="py-4 px-4">
                    <div className="font-bold text-emerald-700 dark:text-emerald-400">
                      ₹{item.discountedPrice || item.mrp}
                    </div>
                    {item.discountedPrice && (
                      <div className="text-[11px] text-slate-400 line-through">
                        MRP ₹{item.mrp}
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4 hidden sm:table-cell text-xs text-slate-500 dark:text-slate-400">
                    {item.expiry}
                  </td>
                  <td className="py-4 px-4">
                    {getStatusBadge(item.status)}
                    <div className="text-[11px] text-slate-400 mt-1">
                      {item.availableQuantity > 0 ? `${item.availableQuantity} units left` : 'Fresh stock expected soon'}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => onOrderMedicine && onOrderMedicine(item.name)}
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-all shadow-sm active:scale-95"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order</span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-8 px-4 text-center text-slate-500 dark:text-slate-400">
                  <div className="max-w-xs mx-auto space-y-2">
                    <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
                    <p className="font-medium">No matching medicine found in digital inventory.</p>
                    <p className="text-xs">
                      We can arrange custom medicines! Call us at <strong>09835650482</strong> or request via WhatsApp.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-2 px-3 py-1.5 text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 rounded-lg font-semibold hover:underline"
                    >
                      Clear Search Filters
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer stats */}
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
        <div>
          Showing <strong>{filteredMedicines.length}</strong> of <strong>{medicineStockData.length}</strong> tracked inventory items
        </div>
        <div className="mt-2 sm:mt-0">
          Need a rare Ayurvedic formulation or specialized surgical item? <button onClick={() => onOrderMedicine && onOrderMedicine('')} className="text-emerald-600 dark:text-emerald-400 font-bold underline">Submit Order Query</button>
        </div>
      </div>
    </div>
  );
}
