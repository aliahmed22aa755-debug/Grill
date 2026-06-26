'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Utensils, Compass, Image as ImageIcon, Award, MapPin, ExternalLink, ShoppingBag, Star, Smartphone } from 'lucide-react';

interface RegionProfile {
  country: string;
  famousFor: string;
  statement: string;
}

const REGIONAL_MAP: Record<string, RegionProfile> = {
  iraq: {
    country: "Iraq (Mesopotamian Heritage)",
    famousFor: "Authentic wood-fired Tannour breads and massive, charcoal-grilled minced lamb Kofta skewers dusted in bright, tangy sumac.",
    statement: "Our charcoal grill runs at peak performance—pure smoky flavor tailored for true connoisseurs."
  },
  levant: {
    country: "The Levant (Syria, Lebanon, Jordan)",
    famousFor: "The legendary home of beautifully layered chicken shawarma, deeply marinated in garlic toum, cardamom, and wild white pepper, toasted to a perfect crisp.",
    statement: "Slow-roasted execution paired with premium ingredients for an unforgettable experience."
  }
};

const SIMPLE_MENU = {
  appetizers: [
    { name: "BIG Hummus Dip", desc: "Ultra-velvety whipped organic chickpeas, premium tahini, and cold-pressed extra virgin olive oil.", price: "$7.79" },
    { name: "BIG Tabbouleh Salad", desc: "Finely chopped fresh garden parsley, cracked bulgur wheat, tomatoes, mint, onion, lemon juice, and olive oil.", price: "$7.79" },
    { name: "BIG Baba Ghanoush", desc: "Smoked flame-roasted eggplant mashed completely smooth with tahini, fresh garlic, and traditional citrus notes.", price: "$7.79" },
    { name: "BIG Organic Garden Salad", desc: "Crisp seasonal field greens, cucumbers, and ripe vine tomatoes tossed in a light house vinaigrette.", price: "$7.79" },
    { name: "BIG Tzatziki Dip", desc: "Cool strained yogurt blended smoothly with shredded cucumbers, fresh garlic cloves, and dill weed.", price: "$7.79" },
    { name: "BIG Red Cabbage Salad", desc: "Finely shredded crisp ruby red cabbage marinated in zesty citrus dressings and house aromatics.", price: "$7.79" }
  ],
  wraps: [
    { name: "Beef Kabob Wrap", desc: "Perfectly seasoned ground beef and lamb skewer rolled in warm flatbread with signature fillings.", price: "$12.99" },
    { name: "Steak Ribeye Skewer Wrap", desc: "Premium hand-carved grilled ribeye steak skewers wrapped tightly with fresh sumac-rubbed red onions.", price: "$15.59" },
    { name: "Chicken Skewer Wrap", desc: "Tender chunks of fire-grilled chicken breast skewer rolled up with smooth, pungent garlic toum sauce.", price: "$11.69" },
    { name: "Beef Shawarma Wrap", desc: "Authentic, heavily marinated slow-roasted shaved beef stacked with traditional onions, pickles, and elite tahini stream.", price: "$12.49" },
    { name: "Falafel Wrap", desc: "Crispy hand-pressed golden chickpea croquettes rolled with ripe garden tomatoes and light tahini sauce.", price: "$10.39" }
  ],
  plates: [
    { name: "🍢🍢 Kofta Skewer Plate", desc: "Two elite fire-grilled minced lamb and beef kofta skewers over master-tier basmati rice with choices of fresh side salads.", price: "$20.79" },
    { name: "🍢🍢 Chicken Skewer Plate", desc: "Two skewers of tender, heavily marinated grilled breast chunks served over pristine basmati rice with garlic paste.", price: "$20.79" },
    { name: "🍢🍢 Ribeye Steak Skewer Plate", desc: "Two magnificent premium skewers of hand-cut ribeye steak cooked directly over open fire embers on rice bed.", price: "$27.29" },
    { name: "Falafel Plate", desc: "Golden-spiced crispy falafel presentation served over rice base and accompanied by 5 custom premium side salads.", price: "$16.89" },
    { name: "Full Chicken Plate", desc: "An entire premium flame-grilled house chicken prepared flat-style with traditional spices and massive side layouts.", price: "$31.19" },
    { name: "⭐ Top Organic Mix Platter", desc: "Our ultimate signature layout! One steak ribeye tikka skewer, one chicken tikka skewer, and one beef kofta skewer served with 3 custom appetizers and gourmet basmati rice.", price: "$33.79" }
  ]
};

const FOOD_DISPLAY_IMAGES = [
  "/5030899192326458474_119.jpg",
  "/5030899192326458475_119.jpg",
  "/5030899192326458476_121.jpg",
  "/5030899192326458477_119.jpg",
  "/5030899192326458478_119.jpg",
  "/5030899192326458479_119.jpg",
  "/5030899192326458480_119.jpg",
  "/5030899192326458481_119.jpg",
  "/5030899192326458482_119.jpg",
  "/5030899192326458483_119.jpg",
  "/5030899192326458484_119.jpg",
  "/5030899192326458485_119.jpg"
];

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<keyof typeof REGIONAL_MAP>('iraq');
  const [activeMenuTab, setActiveMenuTab] = useState<'appetizers' | 'wraps' | 'plates'>('plates');
  const [easterEggLocation, setEasterEggLocation] = useState<number>(0);
  const [eggClaimed, setEggClaimed] = useState<boolean>(false);

  const rotateEasterEgg = () => {
    setEasterEggLocation((prev) => (prev + 1) % 4);
  };

  useEffect(() => {
    setEasterEggLocation(Math.floor(Math.random() * 4));
  }, []);

  const links = {
    phone: "tel:+14807382518",
    phoneDisplay: "(480) 738-2518",
    googleMaps: "https://maps.app.goo.gl/SvpSxy2U5i8NDVtv7?g_st=atm ",
    appleMaps: "maps://?q=Top+Organic+Restaurant+and+Grill+8020+N+27th+Ave+Phoenix+AZ+85051",
    yelp: "https://yelp.to/uBy-Vy47zZ",
    uberEats: "https://www.ubereats.com/store-browse-uuid/72c03e75-7d0d-411c-b277-40321fcd2870?diningMode=DELIVERY",
    doorDash: "https://www.doordash.com" // Placeholder for DoorDash link
  };

  return (
    <div 
      onClick={rotateEasterEgg}
      className="min-h-screen bg-gradient-to-b from-stone-950 via-[#01140e] to-stone-950 text-stone-100 font-sans antialiased selection:bg-amber-400 selection:text-stone-950"
    >
      {/* 50 GIT FEATURE #50: Sticky Opening Ticker */}
      <div className="bg-emerald-950 border-b border-emerald-900/30 text-amber-400 px-4 py-2.5 text-center text-xs font-black tracking-widest uppercase">
        🚀 GRAND OPENING COMMENCING ON JUNE 20, 2026 🚀
      </div>

      {/* 50 GIT FEATURE #26: Unified Navigation Sheet */}
      <nav className="bg-stone-950/90 border-b border-emerald-950/40 py-5 px-6 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-black tracking-wider text-white">
              TOP ORGANIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">GRILL</span>
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs uppercase tracking-widest font-black text-stone-300">
            <a href="#main-menu" className="hover:text-amber-400 transition-colors flex items-center gap-1"><Utensils size={14}/> Menu Board</a>
            <a href="#food-display" className="hover:text-amber-400 transition-colors flex items-center gap-1"><ImageIcon size={14}/> Picture Gallery</a>
            <a href="#heritage-map" className="hover:text-amber-400 transition-colors flex items-center gap-1"><Compass size={14}/> Heritage</a>
            <a href={links.phone} className="text-amber-400 border border-amber-400/30 px-3 py-1.5 rounded-lg font-mono flex items-center gap-1.5">
              <Smartphone size={13}/> {links.phoneDisplay}
            </a>
          </div>
        </div>
      </nav>

      {/* 50 GIT FEATURE #11: Hero Picture Grid Backdrop Banner */}
      <header className="relative max-w-6xl mx-auto my-6 px-6 rounded-3xl overflow-hidden bg-stone-950/50 border border-emerald-900/20">
        <div className="absolute inset-0 opacity-15 grid grid-cols-4 gap-1 pointer-events-none">
          <div className="relative h-full w-full"><Image src={FOOD_DISPLAY_IMAGES[0]} alt="Showcase Grid" fill className="object-cover" /></div>
          <div className="relative h-full w-full"><Image src={FOOD_DISPLAY_IMAGES[1]} alt="Showcase Grid" fill className="object-cover" /></div>
          <div className="relative h-full w-full"><Image src={FOOD_DISPLAY_IMAGES[2]} alt="Showcase Grid" fill className="object-cover" /></div>
          <div className="relative h-full w-full"><Image src={FOOD_DISPLAY_IMAGES[3]} alt="Showcase Grid" fill className="object-cover" /></div>
        </div>
        
        <div className="relative z-10 text-center py-20 px-4 space-y-5 max-w-3xl mx-auto">
          <div className="inline-block text-[10px] font-black tracking-widest bg-emerald-950/80 border border-emerald-800 text-emerald-400 px-4 py-1.5 rounded-full uppercase">
            🔥 Premium Fire Cooking 🔥
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
            Pure Grilling. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">No Compromises.</span>
          </h2>

          <div className="pt-2 text-center">
            <span className="text-xl sm:text-2xl font-bold text-amber-400 font-sans" dir="rtl">
              من ذاق حب الله ارتوى
            </span>
          </div>
          
          {/* 50 GIT FEATURE #23-25: Uber Eats, DoorDash, and Yelp Platform Hub */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a href={links.uberEats} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-stone-950 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-lg">
              <ShoppingBag size={15}/> Uber Eats
            </a>
            <a href={links.doorDash} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-lg">
              <ShoppingBag size={15}/> DoorDash
            </a>
            <a href={links.yelp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-stone-900 hover:bg-stone-850 border border-stone-800 text-amber-400 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-lg">
              <Star size={15}/> Yelp Page
            </a>
          </div>

          {easterEggLocation === 0 && !eggClaimed && (
            <span onClick={(e) => { e.stopPropagation(); setEggClaimed(true); }} className="text-[9px] text-stone-600 hover:text-amber-400 cursor-pointer transition-colors block pt-2">
              In loving memory of Zaynab bint Ali
            </span>
          )}
        </div>
      </header>

      {/* 50 GIT FEATURE #6: Main Core Menu Board */}
      <main id="main-menu" className="max-w-5xl mx-auto px-6 py-6 scroll-mt-24">
        <div className="bg-stone-900/80 border-2 border-emerald-900/40 shadow-2xl rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          
          <div className="text-center mb-8">
            <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest block mb-1">Official Restaurant Culinary Board</span>
            <h3 className="text-3xl font-black text-white tracking-tight">Top Organic Core Menu</h3>
          </div>

          {/* 50 GIT FEATURE #3: Smooth Tab Selector */}
          <div className="grid grid-cols-3 gap-2 max-w-md mx-auto mb-10 bg-stone-950/80 p-1.5 rounded-xl border border-emerald-950/60">
            {['appetizers', 'wraps', 'plates'].map((tab) => (
              <button 
                key={tab}
                onClick={(e) => { e.stopPropagation(); setActiveMenuTab(tab as any); }} 
                className={`py-2.5 text-[11px] font-black uppercase tracking-wider rounded-lg transition-all ${activeMenuTab === tab ? 'bg-amber-400 text-stone-950 shadow-md' : 'text-stone-400 hover:text-stone-200'}`}
              >
                {tab === 'plates' ? 'Plates & Mixes' : tab}
              </button>
            ))}
          </div>

          {/* 50 GIT FEATURE #19: Interlaced Text-Photo Layout */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 grid gap-4">
              {SIMPLE_MENU[activeMenuTab].map((item, index) => (
                <div key={index} className="bg-stone-950/50 border border-white/[0.02] rounded-xl p-5 flex flex-col justify-between group hover:border-emerald-900/30 transition-all">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-base font-black text-white group-hover:text-amber-300 transition-colors">{item.name}</h4>
                      <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-900/30">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 font-light leading-relaxed pt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 50 GIT FEATURE #12: Contextual Sidebar Media Flow */}
            <div className="md:col-span-4 space-y-4 hidden md:block">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-emerald-950">
                <Image src={FOOD_DISPLAY_IMAGES[4]} alt="Culinary Presentation" fill className="object-cover" />
              </div>
              <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-emerald-950 opacity-60">
                <Image src={FOOD_DISPLAY_IMAGES[5]} alt="Culinary Presentation" fill className="object-cover" />
              </div>
            </div>
          </div>

          {easterEggLocation === 1 && !eggClaimed && (
            <div className="text-center pt-6">
              <span onClick={(e) => { e.stopPropagation(); setEggClaimed(true); }} className="text-[9px] text-stone-800 hover:text-amber-400 cursor-pointer transition-colors">
                In loving memory of Zaynab bint Ali
              </span>
            </div>
          )}
        </div>
      </main>

      {/* 50 GIT FEATURE #13: Immersive Picture Fleet Grid */}
      <section id="food-display" className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest block mb-1">Visual Kitchen Assets</span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Flowing Media Display Portfolio</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {FOOD_DISPLAY_IMAGES.map((imgSrc, idx) => (
            <div key={idx} className="bg-stone-900/40 border border-emerald-950/60 p-2 rounded-xl overflow-hidden group hover:border-amber-400/30 transition-all shadow-md">
              <div className="relative w-full h-40 sm:h-56 rounded-lg overflow-hidden">
                <Image src={imgSrc} alt="Top Organic Food Display" fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-w-640px) 50vw, 25vw"/>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 50 GIT FEATURE #38: Regional Heritage Module Selection */}
      <section id="heritage-map" className="max-w-5xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="bg-stone-900/40 border border-emerald-950 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex flex-col gap-2">
              {(Object.keys(REGIONAL_MAP) as Array<keyof typeof REGIONAL_MAP>).map((key) => (
                <button key={key} onClick={(e) => { e.stopPropagation(); setSelectedRegion(key); }} className={`w-full p-4 rounded-xl text-left border text-xs font-black uppercase tracking-wider transition-all ${selectedRegion === key ? 'bg-emerald-950/60 border-amber-400 text-amber-400' : 'text-stone-400 border-transparent hover:text-white'}`}>
                  📍 {REGIONAL_MAP[key].country.split(' ')[0]} Module
                </button>
              ))}
              
              <div className="relative h-44 w-full rounded-xl overflow-hidden mt-2 border border-emerald-950/60 hidden md:block">
                <Image src={FOOD_DISPLAY_IMAGES[6]} alt="Flow Presentation" fill className="object-cover" />
              </div>
            </div>

            <div className="md:col-span-8 bg-stone-950/80 border border-white/[0.02] p-6 rounded-2xl min-h-[260px] flex flex-col justify-between">
              <div>
                <strong className="text-white font-black block text-base mb-1">{REGIONAL_MAP[selectedRegion].country}</strong>
                <p className="text-xs text-stone-300 font-light leading-relaxed">{REGIONAL_MAP[selectedRegion].famousFor}</p>
                <p className="text-xs text-emerald-400 font-mono mt-2">{REGIONAL_MAP[selectedRegion].statement}</p>
              </div>

              {easterEggLocation === 2 && !eggClaimed && (
                <span onClick={(e) => { e.stopPropagation(); setEggClaimed(true); }} className="text-[9px] text-stone-900 hover:text-amber-400 cursor-pointer block text-left pt-4">
                  In loving memory of Zaynab bint Ali
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 50 GIT FEATURE #35: 10% Discount Code Modal */}
      {eggClaimed && (
        <div className="fixed inset-0 bg-stone-950/90 flex items-center justify-center p-6 z-50 backdrop-blur-md">
          <div className="bg-stone-900 border-2 border-amber-400 max-w-sm w-full p-8 rounded-2xl text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mx-auto text-stone-950"><Award size={24}/></div>
            <h4 className="text-white font-black text-xl">Easter Egg Discovered!</h4>
            <p className="text-stone-300 text-xs leading-relaxed">
              "In loving memory of Zaynab bint Ali"<br/>
              Show this screen to our register crew to claim your <span className="text-amber-400 font-bold">10% discount</span>!
            </p>
            <button onClick={(e) => { e.stopPropagation(); setEggClaimed(false); }} className="bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-widest px-6 py-2 rounded-lg w-full hover:bg-white transition-colors">Resume Inspection</button>
          </div>
        </div>
      )}

      {/* 50 GIT FEATURE #21-22: Google Maps & Apple Maps Navigation Anchor Hub */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-stone-900/60 border border-emerald-950 p-8 rounded-3xl shadow-xl flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-1.5 text-center lg:text-left">
            <h4 className="text-lg font-black text-white flex items-center justify-center lg:justify-start gap-2">
              <MapPin size={18} className="text-amber-400"/> Facility Central Headquarters
            </h4>
            <p className="text-xs text-stone-400 font-light">8020 N 27th Ave, Phoenix, AZ 85051 — Operating Daily From 08:00 to 23:00</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 w-full lg:w-auto">
            <a href={links.googleMaps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-stone-950 hover:bg-stone-900 border border-stone-800 text-white font-black text-[10px] uppercase tracking-widest px-4 py-3 rounded-xl transition-all">
              Google Maps <ExternalLink size={12}/>
            </a>
            <a href={links.appleMaps} className="flex items-center gap-1.5 bg-stone-950 hover:bg-stone-900 border border-stone-800 text-white font-black text-[10px] uppercase tracking-widest px-4 py-3 rounded-xl transition-all">
              Apple Maps <ExternalLink size={12}/>
            </a>
            {easterEggLocation === 3 && !eggClaimed && (
              <span onClick={(e) => { e.stopPropagation(); setEggClaimed(true); }} className="opacity-10 hover:opacity-100 text-[8px] text-stone-500 cursor-pointer self-center px-1">[ZAYNAB]</span>
            )}
          </div>
        </div>
      </section>

      {/* 50 GIT FEATURE #32: Microscopic Arabic Footer Token */}
      <footer className="bg-stone-950 text-stone-600 py-8 text-xs border-t border-emerald-950 text-center relative">
        <p className="font-bold text-stone-400 uppercase tracking-wider text-[10px]">© Top Organic Grill. All Rights Reserved.</p>
        <span className="absolute bottom-1 right-2 text-[7px] text-stone-800/40 select-none block tracking-tighter" dir="rtl">
          زينب
        </span>
      </footer>
    </div>
  );
}