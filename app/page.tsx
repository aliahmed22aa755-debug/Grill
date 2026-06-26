'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// lightweight local icon fallbacks to avoid external dependency on 'lucide-react'
const Utensils = ({ size = 16, className = '' }: any) => <span style={{ fontSize: size }} className={className}>🍴</span>;
const Compass = ({ size = 16, className = '' }: any) => <span style={{ fontSize: size }} className={className}>🧭</span>;
const ImageIcon = ({ size = 16, className = '' }: any) => <span style={{ fontSize: size }} className={className}>🖼️</span>;
const Award = ({ size = 16, className = '' }: any) => <span style={{ fontSize: size }} className={className}>🏆</span>;
const MapPin = ({ size = 16, className = '' }: any) => <span style={{ fontSize: size }} className={className}>📍</span>;

interface RegionProfile {
  country: string;
  famousFor: string;
  comedyLineEng: string;
  comedyLineAr: string;
  poem: string;
  translation: string;
}

const REGIONAL_MAP: Record<string, RegionProfile> = {
  iraq: {
    country: "Iraq (Mesopotamian Heritage)",
    famousFor: "Authentic wood-fired Tannour breads and massive, charcoal-grilled minced lamb Kofta skewers dusted in bright, tangy sumac.",
    comedyLineEng: "Our charcoal grill is running at maximum velocity—basically 10,000 RPM of pure smoky flavor. If you come in looking for a light salad, our chef might gently ask you to re-evaluate your choices.",
    comedyLineAr: "منقل الفحم عندنا شغال بسرعة قصوى! يعني ريحة المشاوي تعدل المزاج.. إذا دخلت تطلب سلطة دايت، المعلم راح يطالعك بنظرة عتاب!",
    poem: "«يا ضيفنا لو زرتنا لوجدتنا.. نحن الضيوف وأنت رب المنزلِ.. أهل العراق أهل الجود والكرمِ.. كالبدرِ في كبدِ السماءِ المنجلي»",
    translation: "O our guest, if you were to visit us, you would find us to be the guests and you the master of the house... The people of Iraq are the people of generosity."
  },
  levant: {
    country: "The Levant (Syria, Lebanon, Jordan)",
    famousFor: "The legendary home of beautifully layered chicken shawarma, deeply marinated in garlic toum, cardamom, and wild white pepper, toasted to a perfect crisp.",
    comedyLineEng: "Why go to the doctor for a checkup when you can just visit your local shawarma spot? One wrap a day keeps the stress away.",
    comedyLineAr: "ليش تروح للطبيب وتدفع كشفية.. لما تكدر تروح لمعلم الشاورما يعالجك بلفّة؟ لقمة وحدة وثوم أصلي يخلي ضغطك متوازن!",
    poem: "«إذا جادَتِ الدُّنيا عَلَيكَ فَجُد بِها.. عَلى الناسِ طُرّاً قَبلَ أَن تَتَفَلَّتِ»",
    translation: "If the world is generous to you, then be generous with it to all people before it slips away."
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

  const restaurantPhone = "+14807382518";
  const displayPhone = "(480) 738-2518";
  const fullAddressUrlEncoded = encodeURIComponent("8020 N 27th Ave, Phoenix, AZ 85051");

  return (
    <div 
      onClick={rotateEasterEgg}
      className="min-h-screen bg-gradient-to-b from-stone-950 via-[#01140e] to-stone-950 text-stone-100 font-sans antialiased selection:bg-amber-400 selection:text-stone-950"
    >
      <div className="bg-emerald-950 border-b border-emerald-900/30 text-amber-400 px-4 py-2.5 text-center text-xs font-black tracking-widest uppercase">
        🚀 GRAND OPENING COMMENCING ON JUNE 20, 2026 🚀
      </div>

      <nav className="bg-stone-950/80 border-b border-emerald-950 py-6 px-6 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-black tracking-wider text-white">
              TOP ORGANIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">GRILL</span>
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs uppercase tracking-widest font-black text-stone-300">
            <a href="#main-menu" className="hover:text-amber-400 transition-colors flex items-center gap-1"><Utensils size={14}/> Menu Board</a>
            <a href="#food-display" className="hover:text-amber-400 transition-colors flex items-center gap-1"><ImageIcon size={14}/> Gallery Fleet</a>
            <a href="#heritage-map" className="hover:text-amber-400 transition-colors flex items-center gap-1"><Compass size={14}/> Poetry Map</a>
            <a href={`tel:${restaurantPhone}`} className="text-amber-400 border border-amber-400/30 px-3 py-1.5 rounded-lg font-mono">
              {displayPhone}
            </a>
          </div>
        </div>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 pt-16 pb-8 space-y-4">
        <div className="inline-block text-[10px] font-black tracking-widest bg-emerald-950/60 border border-emerald-800 text-emerald-400 px-4 py-1.5 rounded-full uppercase">
          🔥 MAIN MENU SELECTIONS & FRESH FOOD PRESENTATIONS 🔥
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
          Pure Grilling. No Compromises.
        </h2>
        
        {easterEggLocation === 0 && !eggClaimed && (
          <span 
            onClick={(e) => { e.stopPropagation(); setEggClaimed(true); }}
            className="text-[9px] text-stone-900/60 hover:text-amber-400 cursor-pointer transition-colors block text-center"
          >
            In loving memory of Zaynab bint Ali
          </span>
        )}
      </header>

      <main id="main-menu" className="max-w-5xl mx-auto px-6 py-6 scroll-mt-24">
        <div className="bg-stone-900/60 border-2 border-emerald-900/50 shadow-2xl rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          
          <div className="text-center mb-8">
            <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest block mb-1">Official Restaurant Culinary Board</span>
            <h3 className="text-3xl font-black text-white tracking-tight">Top Organic Core Menu</h3>
          </div>

          <div className="grid grid-cols-3 gap-2 max-w-md mx-auto mb-10 bg-stone-950/80 p-1.5 rounded-xl border border-emerald-950/60">
            <button onClick={(e) => { e.stopPropagation(); setActiveMenuTab('appetizers'); }} className={`py-2.5 text-[11px] font-black uppercase tracking-wider rounded-lg transition-all ${activeMenuTab === 'appetizers' ? 'bg-amber-400 text-stone-950' : 'text-stone-400'}`}>Appetizers</button>
            <button onClick={(e) => { e.stopPropagation(); setActiveMenuTab('wraps'); }} className={`py-2.5 text-[11px] font-black uppercase tracking-wider rounded-lg transition-all ${activeMenuTab === 'wraps' ? 'bg-amber-400 text-stone-950' : 'text-stone-400'}`}>Wraps</button>
            <button onClick={(e) => { e.stopPropagation(); setActiveMenuTab('plates'); }} className={`py-2.5 text-[11px] font-black uppercase tracking-wider rounded-lg transition-all ${activeMenuTab === 'plates' ? 'bg-amber-400 text-stone-950' : 'text-stone-400'}`}>Plates</button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SIMPLE_MENU[activeMenuTab].map((item, index) => (
              <div key={index} className="bg-stone-950/50 border border-white/[0.02] rounded-xl p-5 flex flex-col justify-between group">
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

          {easterEggLocation === 1 && !eggClaimed && (
            <div className="text-center pt-6">
              <span onClick={(e) => { e.stopPropagation(); setEggClaimed(true); }} className="text-[9px] text-stone-800 hover:text-amber-400 cursor-pointer transition-colors">
                In loving memory of Zaynab bint Ali
              </span>
            </div>
          )}
        </div>
      </main>

      <section id="food-display" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {FOOD_DISPLAY_IMAGES.map((imgSrc, idx) => (
            <div key={idx} className="bg-stone-900/40 border border-emerald-950/60 p-2 rounded-xl overflow-hidden group">
              <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden">
                <Image src={imgSrc} alt="Food Display" fill className="object-cover" sizes="(max-w-640px) 50vw, 25vw"/>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="heritage-map" className="max-w-5xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="bg-stone-900/40 border border-emerald-950 rounded-3xl p-6 sm:p-10">
          <div className="grid md:grid-cols-12 gap-8 path">
            <div className="md:col-span-4 flex flex-col gap-2">
              {(Object.keys(REGIONAL_MAP) as Array<keyof typeof REGIONAL_MAP>).map((key) => (
                <button key={key} onClick={(e) => { e.stopPropagation(); setSelectedRegion(key); }} className={`w-full p-4 rounded-xl text-left border text-xs font-black uppercase ${selectedRegion === key ? 'bg-emerald-950/60 border-amber-400 text-amber-400' : 'text-stone-400'}`}>
                  📍 {REGIONAL_MAP[key].country.split(' ')[0]} Module
                </button>
              ))}
            </div>

            <div className="md:col-span-8 bg-stone-950/80 p-6 rounded-2xl min-h-[280px] flex flex-col justify-between">
              <div>
                <strong className="text-white font-black block text-base mb-1">{REGIONAL_MAP[selectedRegion].country}</strong>
                <p className="text-xs text-stone-300 font-light">{REGIONAL_MAP[selectedRegion].famousFor}</p>
              </div>

              <div className="my-4 pt-4 border-t border-stone-900 text-right space-y-1">
                <p className="text-base sm:text-lg font-bold text-amber-400 font-sans" dir="rtl">{REGIONAL_MAP[selectedRegion].poem}</p>
                <p className="text-[10px] text-stone-500 italic text-left">Translation: "{REGIONAL_MAP[selectedRegion].translation}"</p>
              </div>

              {easterEggLocation === 2 && !eggClaimed && (
                <span onClick={(e) => { e.stopPropagation(); setEggClaimed(true); }} className="text-[9px] text-stone-900 hover:text-amber-400 cursor-pointer block text-left">
                  In loving memory of Zaynab bint Ali
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {eggClaimed && (
        <div className="fixed inset-0 bg-stone-950/90 flex items-center justify-center p-6 z-50 backdrop-blur-md">
          <div className="bg-stone-900 border-2 border-amber-400 max-w-sm w-full p-8 rounded-2xl text-center space-y-4">
            <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center mx-auto text-stone-950"><Award size={24}/></div>
            <h4 className="text-white font-black text-xl">Easter Egg Discovered!</h4>
            <p className="text-stone-300 text-xs">
              "In loving memory of Zaynab bint Ali"<br/>
              Show this screen to the counter register to redeem your <span className="text-amber-400 font-bold">10% discount</span>!
            </p>
            <button onClick={(e) => { e.stopPropagation(); setEggClaimed(false); }} className="bg-amber-400 text-stone-950 font-black text-xs px-6 py-2 rounded-lg w-full">Resume Inspection</button>
          </div>
        </div>
      )}

      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="bg-stone-900/40 border border-emerald-950 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-black text-white flex items-center gap-1.5"><MapPin size={16} className="text-amber-400"/> Phoenix Central Headquarters Facility</h4>
            <p className="text-xs text-stone-400 font-light">8020 N 27th Ave, Phoenix, AZ 85051</p>
          </div>
          <div className="flex gap-2">
            <a href={`http://maps.google.com/?q=${fullAddressUrlEncoded}`} target="_blank" rel="noopener noreferrer" className="bg-stone-950 border border-emerald-900/40 text-white font-black text-[10px] px-4 py-3 rounded-xl">Google Maps</a>
            {easterEggLocation === 3 && !eggClaimed && (
              <span onClick={(e) => { e.stopPropagation(); setEggClaimed(true); }} className="opacity-10 hover:opacity-100 text-[8px] text-stone-500 cursor-pointer self-center px-1">[ZAYNAB]</span>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-600 py-8 text-xs border-t border-emerald-950 text-center">
        <p className="font-bold text-stone-400 text-[10px]">© Top Organic Grill. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
