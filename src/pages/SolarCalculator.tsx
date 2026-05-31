import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Zap, IndianRupee, MapPin, Ruler, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function SolarCalculator() {
  const [bill, setBill] = useState<number>(2000);
  const [results, setResults] = useState({
    capacity: 0,
    generation: 0,
    dailyGeneration: 0,
    yearlyGeneration: 0,
    savings: 0,
    yearlySavings: 0,
    co2Savings: 0,
    roiYears: 0,
    area: 0,
    estimatedCost: 0,
    subsidy: 0,
    finalCost: 0
  });

  const calculateSolar = (billAmount: number) => {
    // MP specific constants (approximate)
    const unitRate = 7.5; // Average cost per unit in MP including taxes/fixed charges
    const monthlyUnits = billAmount / unitRate;
    
    // 1kW solar produces ~4.5 units/day in MP
    const dailyGenPerKw = 4.5;
    const monthlyGenPerKw = dailyGenPerKw * 30;
    
    const capacityNeeded = Math.ceil(monthlyUnits / monthlyGenPerKw);
    
    const dailyGeneration = capacityNeeded * dailyGenPerKw;
    const monthlyGeneration = capacityNeeded * monthlyGenPerKw;
    const yearlyGeneration = dailyGeneration * 365;
    
    const monthlySavings = monthlyGeneration * unitRate;
    const yearlySavings = yearlyGeneration * unitRate;
    const co2SavingsPerYear = yearlyGeneration * 0.82; // 0.82 kg CO2 per kWh in India

    const areaRequired = capacityNeeded * 100; // ~100 sq ft per kW

    // On-Grid pricing matched to Sabal Green Price List (without battery)
    // 3 KW = ₹2,00,000 | 5 KW = ₹3,10,000 | 10 KW = ₹4,15,000
    const getOnGridPrice = (kw: number): number => {
      if (kw <= 1) return 67000 * kw;
      if (kw <= 3) return Math.round(67000 + (200000 - 67000) * (kw - 1) / 2);  // interpolate to ₹2,00,000 at 3kW
      if (kw <= 5) return Math.round(200000 + (310000 - 200000) * (kw - 3) / 2); // interpolate to ₹3,10,000 at 5kW
      if (kw <= 10) return Math.round(310000 + (415000 - 310000) * (kw - 5) / 5); // interpolate to ₹4,15,000 at 10kW
      return Math.round(415000 + (kw - 10) * 41500); // ₹41,500/kW beyond 10kW
    };

    const estimatedCost = getOnGridPrice(capacityNeeded);

    // PM Surya Ghar: Muft Bijli Yojana Subsidy (matched to price list)
    let subsidy = 0;
    if (capacityNeeded === 1) subsidy = 30000;
    else if (capacityNeeded === 2) subsidy = 60000;
    else if (capacityNeeded >= 3) subsidy = 78000;

    const finalInvestment = estimatedCost - subsidy;
    const roi = yearlySavings > 0 ? finalInvestment / yearlySavings : 0;

    setResults({
      capacity: capacityNeeded,
      generation: Math.round(monthlyGeneration),
      dailyGeneration: parseFloat(dailyGeneration.toFixed(1)),
      yearlyGeneration: Math.round(yearlyGeneration),
      savings: Math.round(monthlySavings),
      yearlySavings: Math.round(yearlySavings),
      co2Savings: Math.round(co2SavingsPerYear),
      roiYears: parseFloat(roi.toFixed(1)),
      area: areaRequired,
      estimatedCost,
      subsidy,
      finalCost: finalInvestment
    });
  };

  useEffect(() => {
    calculateSolar(bill);
  }, [bill]);

  return (
    <main className="min-h-screen bg-solar-light">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-solar-green font-bold tracking-widest uppercase text-sm">Solar Calculator</span>
              <h1 className="text-5xl md:text-6xl mt-6 mb-8 text-solar-dark">Estimate Your <span className="text-solar-green">Savings</span></h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Specifically optimized for Madhya Pradesh (MP). Find out how much you can save by switching to Sabal Green Solar.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Input Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-solar-green rounded-2xl flex items-center justify-center text-white">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-solar-dark">Enter Details</h3>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-solar-dark">Average Monthly Bill (₹)</label>
                    <span className="text-2xl font-bold text-solar-green">₹{bill.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="20000" 
                    step="100"
                    value={bill}
                    onChange={(e) => setBill(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-solar-green"
                  />
                  <div className="flex justify-between text-xs text-gray-400 font-bold">
                    <span>₹500</span>
                    <span>₹10,000</span>
                    <span>₹20,000</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-bold text-solar-dark">State</label>
                  <div className="flex items-center gap-3 p-4 bg-solar-light rounded-xl border border-solar-green/20">
                    <MapPin className="w-5 h-5 text-solar-green" />
                    <span className="font-bold text-solar-dark">Madhya Pradesh (MP)</span>
                  </div>
                  <p className="text-xs text-gray-400 italic">*Calculations are based on MP electricity tariff and average solar radiation data.</p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <Link 
                    to="/request-quote"
                    className="w-full bg-solar-green text-white py-5 rounded-xl font-bold text-lg hover:bg-solar-accent transition-all flex items-center justify-center gap-2 shadow-lg shadow-solar-green/20"
                  >
                    Confirm & Get Expert Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Results Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 grid md:grid-cols-2 gap-6"
            >
              {/* Capacity Card */}
              <div className="bg-solar-dark p-8 rounded-[40px] text-white overflow-hidden relative group md:col-span-2">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-solar-green/20 rounded-full blur-3xl group-hover:bg-solar-green/30 transition-all" />
                <div className="relative z-10">
                  <span className="text-solar-green font-bold text-sm tracking-widest uppercase mb-4 block">Recommended System</span>
                  <div className="flex items-baseline gap-4">
                    <h2 className="text-6xl font-bold">{results.capacity}</h2>
                    <span className="text-3xl font-bold text-solar-vibrant">kW</span>
                  </div>
                  <p className="text-gray-400 mt-4 max-w-sm">
                    Based on your bill, a {results.capacity}kW system will eliminate your electricity costs for the next 25 years.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 md:col-span-2">
                <div className="bg-white p-6 rounded-[32px] shadow-xl border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-solar-green/10 rounded-2xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-solar-green" />
                  </div>
                  <h4 className="text-xl font-bold text-solar-dark">{results.dailyGeneration} Units</h4>
                  <p className="text-gray-500 font-bold text-[10px] uppercase tracking-wider mt-1">Avg. Daily Generation</p>
                </div>

                <div className="bg-white p-6 rounded-[32px] shadow-xl border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                    <Ruler className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-solar-dark">{results.area} sq.ft</h4>
                  <p className="text-gray-500 font-bold text-[10px] uppercase tracking-wider mt-1">Roof Area Required</p>
                </div>

                <div className="bg-white p-6 rounded-[32px] shadow-xl border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-solar-dark">₹{results.yearlySavings.toLocaleString()}</h4>
                  <p className="text-gray-500 font-bold text-[10px] uppercase tracking-wider mt-1">Yearly Savings</p>
                </div>

                <div className="bg-white p-6 rounded-[32px] shadow-xl border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-solar-dark">{results.roiYears} Years</h4>
                  <p className="text-gray-500 font-bold text-[10px] uppercase tracking-wider mt-1">Estimated ROI (Payback)</p>
                </div>
              </div>

              {/* Detailed Metrics */}
              <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 md:col-span-2">
                <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Generation Summary</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Yearly Generation</span>
                      <span className="font-bold text-solar-dark">{results.yearlyGeneration.toLocaleString()} kWh</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Environmental Impact</span>
                      <span className="font-bold text-solar-green">-{results.co2Savings.toLocaleString()} kg CO₂/yr</span>
                    </div>
                  </div>
                  <div className="md:pl-8 pt-6 md:pt-0 space-y-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Financial Summary</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Lifetime Savings (25Y)</span>
                      <span className="font-bold text-solar-dark">₹{(results.yearlySavings * 25).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-solar-green">
                      <span className="font-medium italic">MP State Green Incentive Applied</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing breakdown */}
              <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100 md:col-span-2">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-solar-vibrant/20 rounded-lg flex items-center justify-center">
                    <IndianRupee className="w-5 h-5 text-solar-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-solar-dark">Cost Breakdown</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-gray-600">
                    <span>Estimated Installation Cost</span>
                    <span className="font-bold">₹{results.estimatedCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-solar-green">
                    <div className="flex items-center gap-2">
                      <span>Govt. Subsidy</span>
                      <span className="px-2 py-0.5 bg-solar-green/10 rounded text-[10px] font-bold">PM Surya Ghar</span>
                    </div>
                    <span className="font-bold">- ₹{results.subsidy.toLocaleString()}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-lg font-bold text-solar-dark">Your Final Investment</span>
                    <span className="text-3xl font-bold text-solar-green">₹{results.finalCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-solar-vibrant p-8 rounded-[40px] md:col-span-2 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-8 h-8 text-solar-dark" />
                </div>
                <p className="text-solar-dark font-bold text-sm text-center md:text-left">
                  Prices include 5 years of AMC, Net-Metering assistance, and performance guarantee. Subsidy is credited directly to your bank account.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
