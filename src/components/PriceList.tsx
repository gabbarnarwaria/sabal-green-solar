import React from 'react';
import { motion } from 'motion/react';
import { 
  Sun, 
  Zap, 
  Battery, 
  Wrench, 
  ShieldCheck, 
  ClipboardCheck, 
  FileCheck,
  Headphones,
  CheckCircle2
} from 'lucide-react';

const hybridPricing = [
  { size: '3 KW Hybrid', capacity: '3 KW', price: '₹2,50,000', subsidy: '₹78,000', final: '₹1,72,000' },
  { size: '5 KW Hybrid', capacity: '5 KW', price: '₹4,40,000', subsidy: '₹78,000', final: '₹3,62,000' },
  { size: '10 KW Hybrid', capacity: '10 KW', price: '₹6,70,000', subsidy: '₹78,000', final: '₹5,92,000' },
];

const onGridPricing = [
  { size: '3 KW On-Grid', capacity: '3 KW', price: '₹2,00,000', subsidy: '₹78,000', final: '₹1,22,000' },
  { size: '5 KW On-Grid', capacity: '5 KW', price: '₹3,10,000', subsidy: '₹78,000', final: '₹2,32,000' },
  { size: '10 KW On-Grid', capacity: '10 KW', price: '₹4,15,000', subsidy: '₹78,000', final: '₹3,37,000' },
];

const features = [
  { icon: Sun, text: 'HIGH EFFICIENCY SOLAR PANELS' },
  { icon: Zap, text: 'PREMIUM QUALITY INVERTERS' },
  { icon: Battery, text: 'LONG LIFE BATTERY' },
  { icon: Wrench, text: 'PROFESSIONAL INSTALLATION' },
  { icon: ShieldCheck, text: 'COMPLETE WARRANTY & SUPPORT' },
];

export default function PriceList() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Decor */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-solar-green/10 text-solar-green rounded-full font-bold text-sm uppercase tracking-wider mb-6">
            <Zap className="w-4 h-4" />
            Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-solar-dark mb-4">
            Sabal Green <span className="text-solar-green">Price List</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            HYBRID & ON-GRID SOLAR SYSTEM
          </p>
          <p className="text-gray-400 mt-2">Power Your Home. Save Every Month.</p>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-solar-light rounded-2xl flex items-center justify-center mb-4 group-hover:bg-solar-green group-hover:text-white transition-all shadow-sm">
                <f.icon className="w-8 h-8 text-solar-green group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-solar-dark leading-tight px-2 uppercase tracking-wide">
                {f.text}
              </span>
            </div>
          ))}
        </div>

        {/* Hybrid Table */}
        <div className="mb-16 overflow-hidden rounded-[40px] border border-gray-100 shadow-2xl">
          <div className="bg-solar-dark p-6 flex items-center gap-4">
            <div className="w-10 h-10 bg-solar-green rounded-lg flex items-center justify-center">
              <Battery className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
              Hybrid Solar System <span className="text-solar-vibrant opacity-80">(With Battery)</span>
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-solar-green/5 text-solar-dark font-bold text-sm uppercase tracking-wider border-b border-gray-100">
                  <th className="px-8 py-6">System Size</th>
                  <th className="px-8 py-6">Solar Capacity</th>
                  <th className="px-8 py-6">Price (Without Subsidy)</th>
                  <th className="px-8 py-6">Subsidy (₹)</th>
                  <th className="px-8 py-6 bg-solar-green/10 text-solar-green">Price (After Subsidy)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {hybridPricing.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-solar-dark">{row.size}</td>
                    <td className="px-8 py-6 text-gray-500">{row.capacity}</td>
                    <td className="px-8 py-6 text-gray-500">{row.price}</td>
                    <td className="px-8 py-6 text-solar-green font-medium">{row.subsidy}</td>
                    <td className="px-8 py-6 bg-solar-green/5 text-solar-green font-bold text-xl">{row.final}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* On-Grid Table */}
        <div className="mb-16 overflow-hidden rounded-[40px] border border-gray-100 shadow-2xl">
          <div className="bg-solar-dark p-6 flex items-center gap-4">
            <div className="w-10 h-10 bg-solar-green rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
              On-Grid Solar System <span className="text-solar-vibrant opacity-80">(Without Battery)</span>
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-solar-green/5 text-solar-dark font-bold text-sm uppercase tracking-wider border-b border-gray-100">
                  <th className="px-8 py-6">System Size</th>
                  <th className="px-8 py-6">Solar Capacity</th>
                  <th className="px-8 py-6">Price (Without Subsidy)</th>
                  <th className="px-8 py-6">Subsidy (₹)</th>
                  <th className="px-8 py-6 bg-solar-green/10 text-solar-green">Price (After Subsidy)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {onGridPricing.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 font-bold text-solar-dark">{row.size}</td>
                    <td className="px-8 py-6 text-gray-500">{row.capacity}</td>
                    <td className="px-8 py-6 text-gray-500">{row.price}</td>
                    <td className="px-8 py-6 text-solar-green font-medium">{row.subsidy}</td>
                    <td className="px-8 py-6 bg-solar-green/5 text-solar-green font-bold text-xl">{row.final}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Subsidy Note */}
        <div className="bg-solar-dark text-white p-4 rounded-2xl flex items-center justify-center gap-4 mb-16">
          <div className="px-3 py-1 bg-solar-green text-[10px] font-bold rounded uppercase tracking-widest text-white">Note:</div>
          <p className="text-sm md:text-base font-bold italic opacity-90 text-center">
            *SUBSIDY APPLICABLE AS PER MNRE GOVERNMENT GUIDELINES.
          </p>
        </div>

        {/* Bottom Warranties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: ShieldCheck, title: '25 YEARS', desc: 'PERFORMANCE WARRANTY ON SOLAR PANELS' },
            { icon: Zap, title: '5-10 YEARS', desc: 'WARRANTY ON INVERTER' },
            { icon: Battery, title: '3-5 YEARS', desc: 'WARRANTY ON BATTERY' },
            { icon: ClipboardCheck, title: 'FREE', desc: 'SITE SURVEY & SYSTEM DESIGN' },
            { icon: Headphones, title: 'AMC', desc: '& AFTER SALES SUPPORT AVAILABLE' },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-solar-light rounded-3xl border border-solar-green/10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <item.icon className="w-6 h-6 text-solar-green" />
              </div>
              <h4 className="text-sm font-bold text-solar-dark mb-1">{item.title}</h4>
              <p className="text-[10px] text-gray-400 font-bold leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
