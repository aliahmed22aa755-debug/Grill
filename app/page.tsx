import React from 'react';
import Image from 'next/image';
import { 
  Utensils, 
  ShoppingBag, 
  Flame, 
  Layers, 
  Sparkles, 
  Grid, 
  Image as ImageIcon,
  CheckCircle2,
  Clock,
  Users
} from 'lucide-react';

// Unified image assets extracted cleanly from public directory structure references
const SHOWCASE_IMAGES = [
  "5030899192326458474_119.jpg", "5030899192326458475_119.jpg",
  "5030899192326458476_121.jpg", "5030899192326458477_119.jpg",
  "5030899192326458478_119.jpg", "5030899192326458479_119.jpg",
  "5030899192326458480_119.jpg", "5030899192326458481_119.jpg",
  "5030899192326458482_119.jpg", "5030899192326458483_119.jpg",
  "5030899192326458484_119.jpg", "5030899192326458485_119.jpg",
  "5030899192326458486_119.jpg", "5030899192326458487_119.jpg",
  "5030899192326458488_119.jpg", "5030899192326458489_119.jpg",
  "5030899192326458490_119.jpg", "5030899192326458491_119.jpg",
  "5030899192326458492_119.jpg", "5030899192326458493_119.jpg",
  "5030899192326458494_119.jpg", "5030899192326458495_119.jpg",
  "5030899192326458496_119.jpg", "5030899192326458497_119.jpg",
  "5030899192326458498_119.jpg", "5030899192326458499_119.jpg",
  "5030899192326458500_119.jpg", "5030899192326458501_119.jpg",
  "5030899192326458502_119.jpg", "5030899192326458503_119.jpg",
  "5030899192326458504_119.jpg", "5030899192326458505_119.jpg",
  "5030899192326458506_119.jpg", "5030899192326458507_121.jpg",
  "5030899192326458508_119.jpg", "5030899192326458509_119.jpg",
  "5030899192326458510_119.jpg", "5030899192326458512_119.jpg"
];

// Exact parsed menu options from the verified assets
const MENU_DATA = {
  appetizers: [
    { name: "BIG Hummus Dip", price: 5.99 },
    { name: "BIG Tabbouleh Salad", price: 5.99 },
    { name: "BIG Baba Ghanoush", price: 5.99 },
    { name: "BIG Organic Garden Salad", price: 5.99 },
    { name: "BIG Tzatziki Dip", price: 5.59 },
    { name: "BIG Red Cabbage Salad", price: 5.99 },
  ],
  wraps: [
    { name: "Beef Kabob Wrap", price: 9.99 },
    { name: "Steak Ribeye Skewer Wrap", price: 11.99 },
    { name: "Chicken Skewer Wrap", price: 8.99 },
    { name: "Falafel Wrap", price: 7.99 },
  ],
  plates: [
    { name: "LARGE 2x Kofta Skewer Plate", price: 15.99 },
    { name: "LARGE 2x Chicken Skewer Plate", price: 15.99 },
    { name: "LARGE 2x Ribeye Steak Skewer Plate", price: 19.99 },
    { name: "LARGE Falafel Plate (w/ 5 Salads)", price: 12.99 },
  ]
};

export default function PremiumGrillDashboard() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-400">
      
      {/* HEADER BAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f17]/80 border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-tr from-amber-500 to-emerald-500 p-2.5 rounded-xl shadow-lg shadow-emerald-500/10">
              <Flame className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                TOP ORGANIC GRILL
              </h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Culinary Hub & Showcase</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Public Vault
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        {/* PREMIUM EXCLUSIVE SECTION: X LARGE FAMILY MEAL */}
        <section className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-slate-900 via-[#0e1716] to-slate-950 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_45%)]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5" /> Chef's Signature Masterpiece
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                  X LARGE TOP ORGANIC <br />
                  <span className="bg-gradient-to-r from-amber-400 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                    X MIX - FAMILY MEAL
                  </span>
                </h2>
                <div className="flex items-center gap-4 text-slate-400 text-sm pt-1">
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <Users className="w-4 h-4" /> Serves 4+ Guests
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-700" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Freshly Prepared
                  </span>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed max-w-xl text-base sm:text-lg">
                An ultra-premium, complete culinary feast thoughtfully bundled for large gatherings. Experience authentic textures and perfectly balanced recipes.
              </p>

              {/* Box Components Checklist */}
              <div className="bg-slate-950/60 rounded-2xl p-5 border border-slate-800/80 backdrop-blur-sm">
                <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">Included Feast Ingredients</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-300">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Full Rotisserie Chicken</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Platter of Chicken & Beef Skewers</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Large Fluffy Rice & Large Fries</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> 4 Refreshing Drinks of Choice</div>
                  <div className="flex items-center gap-2 sm:col-span-2 text-xs text-amber-300/90 mt-1 bg-amber-500/5 p-2 rounded border border-amber-500/10">
                    <strong>All Big Appetizers:</strong> Hummus, Tabbouleh, Baba Ghanoush, Organic Garden Salad, Tzatziki, & Red Cabbage Salad.
                  </div>
                </div>
              </div>
            </div>

            {/* Price Box Action Callout */}
            <div className="lg:col-span-5 w-full flex flex-col justify-center items-center lg:items-end">
              <div className="w-full max-w-sm bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 text-center shadow-xl space-y-6">
                <div>
                  <span className="text-slate-400 uppercase tracking-widest text-xs font-semibold block mb-1">Total Value Package</span>
                  <div className="text-5xl font-black text-white tracking-tight">
                    $69.<span className="text-3xl align-top font-bold text-amber-400">99</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition duration-200 transform active:scale-[0.98] shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 text-base">
                  <ShoppingBag className="w-5 h-5" /> Order Family Pack
                </button>
                <p className="text-[11px] text-slate-500">Subject to local taxes. Made with 100% organic selected ingredients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FULL DIGITAL DIGESTED MENU MATRIX */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm uppercase tracking-wider">
                <Utensils className="w-4 h-4" /> Freshly Sourced Menu
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Authentic Menu & Pricing Matrix
              </h3>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-2.5 flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
              Our Favorite Highlight: <strong>Large Top Organic Mix — $25.99</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* APPETIZERS CATEGORY */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 transition-all duration-200">
              <div className="flex items-center space-x-2.5 mb-5 border-b border-slate-800 pb-3">
                <Layers className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-lg text-white">Appetizers & Big Plates</h4>
              </div>
              <div className="space-y-4">
                {MENU_DATA.appetizers.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4 group">
                    <span className="text-slate-300 font-medium group-hover:text-emerald-400 transition-colors">{item.name}</span>
                    <span className="border-b border-dashed border-slate-800 flex-grow mt-3" />
                    <span className="text-amber-400 font-mono font-bold">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WRAPS CATEGORY */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 transition-all duration-200">
              <div className="flex items-center space-x-2.5 mb-5 border-b border-slate-800 pb-3">
                <Utensils className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-lg text-white">Sandwiches & Wraps</h4>
              </div>
              <div className="space-y-4">
                {MENU_DATA.wraps.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4 group">
                    <span className="text-slate-300 font-medium group-hover:text-emerald-400 transition-colors">{item.name}</span>
                    <span className="border-b border-dashed border-slate-800 flex-grow mt-3" />
                    <span className="text-amber-400 font-mono font-bold">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PLATES & MIXES CATEGORY */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700/80 transition-all duration-200 lg:col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2.5 mb-5 border-b border-slate-800 pb-3">
                <Grid className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-lg text-white">Plates & Large Mixes</h4>
              </div>
              <div className="space-y-4">
                {MENU_DATA.plates.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4 group">
                    <span className="text-slate-300 font-medium group-hover:text-emerald-400 transition-colors">{item.name}</span>
                    <span className="border-b border-dashed border-slate-800 flex-grow mt-3" />
                    <span className="text-amber-400 font-mono font-bold">${item.price.toFixed(2)}</span>
                  </div>
                ))}
                
                {/* Special Box Callout inside section */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10">
                  <div className="flex justify-between items-center text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    <span>⭐ Chef's Premium Choice Mix</span>
                    <span>$25.99</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Includes: 1x Steak Ribeye Skewer, 1x Beef Kofta Skewer, 1x Chicken Tikka Skewer, 3x Appetizers, & Choice of Rice.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* HIGH-RESOLUTION ASSETS SHOWCASE GRID */}
        <section className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold uppercase tracking-wider">
              <ImageIcon className="w-4 h-4 text-emerald-400" /> High-Resolution Media Workspace
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Aesthetic Public Photo Grid
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              Clean modular containers tracking all verified public storage image components natively linked to your project setup files. Loaded safely at 10/10 premium rendering.
            </p>
          </div>

          {/* GRID OF PRESET VERIFIED PUBLIC DIRECTORY IMAGE OBJECTS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SHOWCASE_IMAGES.map((filename, index) => (
              <div 
                key={index} 
                className="group relative bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden aspect-square flex flex-col justify-between p-3.5 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
              >
                {/* Fixed Native Next.js Image Optimization Engine */}
                <div className="absolute inset-0 bg-slate-950 z-0">
                  <Image 
                    src={`/${filename}`} 
                    alt={`Showcase item ${index + 1}`}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-w-640px) 50vw, (max-w-1024px) 25vw, 16vw"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors">
                    <Utensils className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 transition-colors mb-1" />
                    <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-200">ITEM #{index + 1}</span>
                  </div>
                </div>

                {/* Subtle Meta Layout Info */}
                <div className="relative z-10 flex items-center justify-between w-full mt-auto">
                  <span className="bg-slate-900/90 text-[9px] font-mono text-slate-500 px-1.5 py-0.5 rounded border border-slate-800 max-w-[85%] truncate">
                    ...{filename.slice(-14)}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER METRICS */}
      <footer className="mt-20 border-t border-slate-900 bg-slate-950/40 py-8 px-6 text-center text-xs text-slate-500">
        <p>© 2026 Top Organic Grill. All digital menu vector assets verified. Optimized for production deployment vectors.</p>
      </footer>
    </div>
  );
}