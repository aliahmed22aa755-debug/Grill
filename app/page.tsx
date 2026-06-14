'use client';

import React, { useState } from 'react';

// Specialized Interface for Regional Map Structure
interface RegionProfile {
  country: string;
  famousFor: string;
  comedyLineEng: string;
  comedyLineAr: string;
  poem: string;
  translation: string;
}

// 🗺️ Pristine Middle East Cultural & Actually Funny Database
const REGIONAL_MAP: Record<string, RegionProfile> = {
  levant: {
    country: "The Levant (Syria, Lebanon, Jordan)",
    famousFor: "The legendary home of beautifully layered chicken shawarma, deeply marinated in garlic toum, cardamom, and wild white pepper, toasted to a perfect crisp.",
    comedyLineEng: "Why go to the doctor for a checkup when you can just visit your local shawarma spot? One wrap a day keeps the stress away, and the heavy garlic toum guarantees everyone will respect your personal space.",
    comedyLineAr: "ليش تروح للطبيب وتدفع كشفية كاش.. لما تكدر تروح لمعلم الشاورما يعالجك بلفّة؟ لقمة وحدة وثوم أصلي يخلي ضغطك متوازن والكل يبتعد عنك احترماً للمسافة الشخصية!",
    poem: "«يا عازف الطوقِ إنّ الشوقَ يجمعُنا.. والشاورما في شغافِ القلبِ ترتاحُ»",
    translation: "O player of the melodies, longing unites us... and the shawarma rests deeply within the ventricles of the heart."
  },
  iraq: {
    country: "Iraq",
    famousFor: "Authentic wood-fired Tannour breads and massive, charcoal-grilled minced lamb Kofta skewers dusted in bright, tangy sumac.",
    comedyLineEng: "Our charcoal grill is running at maximum velocity—basically 10,000 RPM/h of pure smoky flavor. If you come in looking for a light salad, our chef might gently ask you to re-evaluate your life choices.",
    comedyLineAr: "منقل الفحم عندنا شغال بسرعة 10 آلاف دورة بالساعة! يعني ريحة المشاوي تعدل المزاج.. إذا دخلت تطلب سلطة دايت، المعلم راح يطالعك بنظرة عتاب ويسألك عن أسباب الحزن في حياتك.",
    poem: "«كأنّ كبابَ العزِّ فوقَ جِمارِهِ.. خُيوطُ لُجينٍ في الظلامِ تَنَوّرُ»",
    translation: "It is as if the kebabs of honor over the glowing embers are threads of silver lighting up the darkness."
  },
  gulf: {
    country: "The Arabian Gulf (Saudi Arabia, UAE, Kuwait)",
    famousFor: "Magnificent rice masterpieces like Kabsa and Mandi, featuring premium slow-roasted lamb infused with black lime and traditional smoked aromatics.",
    comedyLineEng: "The rice portions here are so generous they can easily feed you, your cousins, and your neighbors. It's scientifically proven to cause a 100% peaceful food coma within twenty minutes.",
    comedyLineAr: "صواني الكبسة عندنا حجمها يكفي العائلة وعشيرتك والجيران! الصحن مصمم علمياً يدخلك في غيبوبة طعام مؤقتة من السعادة.. لا ننصح بالنقاشات العائلية بعد الأكل.",
    poem: "«ألا حيِّ المندي فوقَ صِــوانِ بَهيجٍ.. يُثيرُ النّفوسَ بطِيبِ عِطْرِ التَّوابِلِ»",
    translation: "Hail the majestic Mandi served on a splendid platter, stirring the soul with the pure fragrant aroma of its master spices."
  },
  hummusVault: {
    country: "The Sacred Hummus Matrix",
    famousFor: "Ultra-velvety ground organic chickpeas whipped into a smooth science with premium tahini and a generous pool of cold-pressed extra virgin olive oil.",
    comedyLineEng: "Our hummus is smoother than a brand new luxury car suspension. It’s not just an appetizer; it's a structural remedy for all of life's daily complications.",
    comedyLineAr: "الحمص عندنا ناعم وحريري وسلس أكثر من سيارة وكالة! مو مجرد مقبلات، هذا علاج نفسي متكامل يمسح على قلبك ويصفي النية بلقمة وحدة مع زيت الزيتون الأصلي.",
    poem: "«صَحنُ الحُمُّصِ في الـمَيدانِ مَلِكٌ.. وزَيتُ الزَّيتُونِ فوقَهُ تـاجٌ يُرصَّعُ»",
    translation: "The plate of hummus stands as a king in the culinary arena, and the pristine olive oil poured over it is a jewel-encrusted crown."
  },
  egypt: {
    country: "Egypt",
    famousFor: "Flash-seared iron skillet beef shawarma loaded with fresh tomatoes and heavy tahini streams. Home of the perfectly spiced golden herb falafels.",
    comedyLineEng: "Our falafels have the ultimate crunch. They are so incredibly crispy and light, you will completely forget what you were originally arguing about before dinner.",
    comedyLineAr: "الفلافل عندنا ذهبية ومقرمشة لدرجة لا تُصدق! من أول قرمشة الطعم ينسيك كل مشاكلك، لدرجة راح تنسى حتى وين صفّيت سيارتك برة المطعم.",
    poem: "«وفي الفلافلِ سحرٌ لو تذوّقَهُ.. مَلِكُ الملوكِ لَأَضحى فَقيرَ مَثواها»",
    translation: "And in falafel there is a magic that, if a king of kings were to taste it, he would become a humble seeker of its place."
  }
};

// 📜 Simplified High-Class Product Database
const SIMPLE_MENU = {
  plates: [
    { name: "Top Organic Mixed Platter (The Legend)", desc: "A premium arrangement of flame-grilled charcoal lamb kabobs, chicken kofta, and golden herb falafel served over master-tier basmati rice.", price: "$18.99" },
    { name: "Signature Shaved Chicken Plate", desc: "Generous cuts of tender chicken shawarma served alongside our house-whipped, velvety garlic toum.", price: "$16.49" },
    { name: "Traditional Beef Shaved Plate", desc: "Slow-roasted ribeye beef shawarma served with sharp pickled turnips and fresh hand-chopped garden parsley.", price: "$17.99" }
  ],
  wraps: [
    { name: "Artisanal Chicken Toum Wrap", desc: "Flame-seared chicken shawarma rolled tightly in warm stone-baked flatbread with crisp cucumber pickles and elite garlic sauce.", price: "$11.99" },
    { name: "Heritage Shredded Beef Wrap", desc: "Tender carved beef shawarma wrapped perfectly with sliced red onions, sumac, and a heavy river of smooth tahini.", price: "$12.49" },
    { name: "Crisp Organic Falafel Wrap", desc: "Hand-pressed golden spiced chickpea croquettes rolled with fresh tomatoes and cold-pressed tahini oil.", price: "$10.49" }
  ]
};

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<keyof typeof REGIONAL_MAP>('levant');
  const [activeMenuTab, setActiveMenuTab] = useState<'plates' | 'wraps'>('plates');

  // Hardcoded verified configuration credentials 
  const restaurantPhone = "+14807382518";
  const displayPhone = "(480) 738-2518";
  const fullAddressUrlEncoded = encodeURIComponent("8020 N 27th Ave, Phoenix, AZ 85051");
  const smsBodyEncoded = encodeURIComponent("Hi Top Organic! I would like to inquire about ordering text catering for my event.");

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-[#01140e] to-stone-950 text-stone-100 font-sans antialiased selection:bg-amber-400 selection:text-stone-950">
      
      {/* Top Elite Live Ticker */}
      <div className="bg-emerald-950 border-b border-emerald-900/30 text-amber-400 px-4 py-2.5 text-center text-xs font-black tracking-widest uppercase">
        🚀 PHOENIX REGIONAL COMMAND: GRAND OPENING OFFICIALLY COMMENCING ON JUNE 20, 2026 🚀
      </div>

      {/* Clean Premium Navigation Header */}
      <nav className="bg-stone-950/80 border-b border-emerald-950 py-6 px-6 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-black tracking-wider text-white">
              TOP ORGANIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">GRILL</span>
            </h1>
            <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold mt-0.5">Pristine Mediterranean Culinary Kitchen</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs uppercase tracking-widest font-black text-stone-300">
            <a href="#menu" className="hover:text-amber-400 transition-colors">Menu Layout</a>
            <a href="#heritage-map" className="hover:text-amber-400 transition-colors">Culinary Map</a>
            <a href="#catering-text" className="hover:text-amber-400 transition-colors text-amber-400 font-black">Text to Order</a>
            <a href="#patriot-tribute" className="hover:text-amber-400 transition-colors">Patriot Honor</a>
            <a href={`tel:${restaurantPhone}`} className="text-amber-400 border border-amber-400/30 px-3 py-1.5 rounded-lg hover:bg-amber-400 hover:text-stone-950 transition-all duration-200 font-mono">
              {displayPhone}
            </a>
          </div>
        </div>
      </nav>

      {/* Straightforward High-Class Hero Section */}
      <header className="max-w-4xl mx-auto text-center px-6 py-24 space-y-6 relative">
        <div className="inline-block text-[10px] font-black tracking-widest bg-emerald-950/60 border border-emerald-800 text-emerald-400 px-4 py-1.5 rounded-full uppercase">
          🚨 WARNING: FLAVOR SPEED IN FULL EFFECT 🚨
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
          Less Overthinking. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-100 to-amber-300">More Authentic Grilling.</span>
        </h2>
        <p className="text-stone-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
          We stripped away the complicated corporate matrix to bring you premium, straight-to-the-point culinary excellence. No artificial fillers, no corporate talk—just serious heritage that treats you right.
        </p>
        
        {/* Bilingual Quick Humor Tagline */}
        <div className="bg-stone-900/40 p-4 rounded-xl border border-emerald-950 max-w-xl mx-auto space-y-1 text-center">
          <p className="text-xs font-bold text-amber-400 italic">"Why settle for internet advice when a warm shawarma plate can wrap up all your worries in one sitting?"</p>
          <p className="text-sm font-medium text-emerald-400 font-sans" dir="rtl">"ليش تدور حلول على الإنترنت.. لما صحن الشاورما الدافئ يلم لك كل همومك بلقمة واحدة؟"</p>
        </div>
      </header>

      {/* SECTION 1: Interactive Middle Eastern Flavor Map Explorer */}
      <section id="heritage-map" className="max-w-5xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="bg-stone-900/40 border border-emerald-950 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          
          <div className="text-center md:text-left mb-8 border-b border-emerald-900/20 pb-4">
            <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest block mb-1">Interactive Culinary Explorer</span>
            <h3 className="text-2xl font-black text-white tracking-tight">The Middle Eastern Heritage & Flavor Map</h3>
            <p className="text-xs text-stone-400 mt-1">Tap any strategic profile vector below to display regional specifications, street-food dominance, and legendary poems.</p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            {/* Left Buttons Container */}
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5">
              {(Object.keys(REGIONAL_MAP) as Array<keyof typeof REGIONAL_MAP>).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedRegion(key)}
                  className={`w-full p-4 rounded-xl text-left border text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                    selectedRegion === key
                      ? 'bg-emerald-950/60 border-amber-400 text-amber-400 shadow-md translate-x-1'
                      : 'bg-stone-950/40 border-white/[0.02] text-stone-400 hover:border-emerald-900/40 hover:text-white'
                  }`}
                >
                  📍 {REGIONAL_MAP[key].country.split(' ')[0]} Profile
                </button>
              ))}
            </div>

            {/* Right Display Console Terminal */}
            <div className="md:col-span-8 bg-stone-950/80 border border-white/[0.03] p-6 sm:p-8 rounded-2xl flex flex-col justify-between min-h-[300px] shadow-inner">
              
              {/* Dynamic Readout Body */}
              <div className="space-y-4">
                <span className="text-[9px] font-mono text-emerald-500 tracking-widest uppercase block border-b border-stone-900 pb-2">
                  DATA_STREAM // LOAD_SUCCESSFUL
                </span>
                <div>
                  <strong className="text-white font-black block text-base mb-1">{REGIONAL_MAP[selectedRegion].country}</strong>
                  <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">{REGIONAL_MAP[selectedRegion].famousFor}</p>
                </div>
              </div>

              {/* Dynamic Bilingual Comedy Box */}
              <div className="my-6 p-4 bg-emerald-950/20 rounded-xl border border-emerald-900/30 space-y-3">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-amber-400 block mb-0.5">English Operational Assessment</span>
                  <p className="text-xs text-stone-300 font-medium italic">"{REGIONAL_MAP[selectedRegion].comedyLineEng}"</p>
                </div>
                <div className="text-right">
                  <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400 block mb-0.5">التحليل الفكاهي باللغة العربية</span>
                  <p className="text-xs sm:text-sm text-emerald-100 font-sans leading-relaxed" dir="rtl">"{REGIONAL_MAP[selectedRegion].comedyLineAr}"</p>
                </div>
              </div>

              {/* Mouthwatering Classic Poetry Array */}
              <div className="pt-4 border-t border-stone-900 text-right space-y-1">
                <span className="text-[8px] font-black uppercase tracking-widest text-stone-500 block text-left mb-1">Mouthwatering Classic Poetry</span>
                <p className="text-lg sm:text-xl font-bold text-amber-400 tracking-wide font-sans leading-relaxed" dir="rtl">
                  {REGIONAL_MAP[selectedRegion].poem}
                </p>
                <p className="text-[10px] text-stone-500 font-light italic text-left">
                  Translation: "{REGIONAL_MAP[selectedRegion].translation}"
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: Straightforward, McDonald's Style Clean Menu Layout */}
      <section id="menu" className="max-w-5xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="text-center mb-10">
          <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest block mb-1">Zero Clutter Pricing</span>
          <h3 className="text-3xl font-black text-white tracking-tight">The Clean-Cut Kitchen Lineup</h3>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-6 border-b border-emerald-950 max-w-xs mx-auto mb-10">
          <button 
            onClick={() => setActiveMenuTab('plates')}
            className={`pb-3 text-xs font-black uppercase tracking-widest transition-all ${activeMenuTab === 'plates' ? 'text-amber-400 border-b-2 border-amber-400 scale-105' : 'text-stone-500 hover:text-stone-300'}`}
          >
            Platter Specs
          </button>
          <button 
            onClick={() => setActiveMenuTab('wraps')}
            className={`pb-3 text-xs font-black uppercase tracking-widest transition-all ${activeMenuTab === 'wraps' ? 'text-amber-400 border-b-2 border-amber-400 scale-105' : 'text-stone-500 hover:text-stone-300'}`}
          >
            Wrap Specs
          </button>
        </div>

        {/* Dynamic Pure List Renderer */}
        <div className="bg-stone-900/20 border border-white/[0.02] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
          {SIMPLE_MENU[activeMenuTab].map((item, index) => (
            <div key={index} className="flex justify-between items-start gap-4 pb-5 border-b border-stone-900 last:pb-0 last:border-b-0 group">
              <div className="space-y-1">
                <h4 className="text-base font-black text-white group-hover:text-amber-300 transition-colors">{item.name}</h4>
                <p className="text-xs text-stone-400 font-light leading-relaxed max-w-xl">{item.desc}</p>
              </div>
              <span className="text-sm font-mono font-black text-emerald-400 whitespace-nowrap bg-emerald-950/40 px-3 py-1 rounded-md border border-emerald-900/30 shadow-sm">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: High-Performance Instant Catering Text-to-Order Panel */}
      <section id="catering-text" className="max-w-5xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="bg-gradient-to-r from-emerald-950/40 via-stone-900/80 to-emerald-950/40 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-10 text-center space-y-6 backdrop-blur-md shadow-2xl">
          <div className="space-y-2">
            <span className="text-amber-400 text-[11px] font-black tracking-widest uppercase bg-emerald-950 px-4 py-1 rounded-full border border-emerald-900/60 inline-block">
              ⚡ FAST-TRACK CATERING FREIGHT LINE
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Need Large-Scale Flavor? Text to Order</h3>
            <p className="text-stone-400 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
              Skip the long queues and infinite configuration phone calls. Tap the vector matrix below to generate an instantaneous text sequence directly to our command phone for ultra-reliable catering dispatch.
            </p>
          </div>

          <div className="max-w-md mx-auto pt-2">
            <a 
              href={`sms:${restaurantPhone}?&body=${smsBodyEncoded}`}
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-emerald-400 hover:to-emerald-300 text-stone-950 font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl active:scale-[0.98]"
            >
              💬 Click to Text Catering Order
            </a>
            <span className="text-[10px] text-stone-500 font-mono tracking-wider block mt-2.5">
              Available Direct on Mobile Devices // Active Monitoring Fleet
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 3: High-Class Veteran, Law Enforcement & Patriot Tribute Panel */}
      <section id="patriot-tribute" className="max-w-5xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="bg-gradient-to-br from-stone-950 via-[#011d14] to-stone-950 border border-emerald-900/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content Column */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-400 font-black text-[10px] tracking-widest uppercase bg-stone-950 px-3 py-1 rounded-md border border-stone-850">
                🇺🇸 STANDING WITH OUR HEROES 🇺🇸
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Honoring Military Veterans & First Responders
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                Top Organic Grill operates with deep administrative respect for the brave men and women who protect our freedoms globally and secure our local communities at home. We stand fully behind our United States military veterans, active service squads, and law enforcement professionals.
              </p>
              <p className="text-emerald-400 font-bold text-xs">
                🎖️ Present your uniform, official service badge, or valid ID verification at our main physical counter for an unconditional 10% discount on any core kitchen configuration, anytime.
              </p>
            </div>

            {/* Right Symbolic Flag Visualization */}
            <div className="md:col-span-4 bg-stone-950/60 p-6 rounded-2xl border border-white/[0.02] flex flex-col items-center justify-center text-center space-y-4">
              {/* Pure CSS Rendered Minimal American Flag Representation */}
              <div className="w-24 h-14 bg-stone-900 rounded border border-white/10 overflow-hidden relative flex flex-col justify-between p-0.5 opacity-80 shadow-2xl">
                <div className="bg-blue-900 w-10 h-7 absolute top-0 left-0 flex flex-wrap p-0.5 gap-0.5 items-center justify-center">
                  <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                  <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                  <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                  <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                </div>
                <div className="bg-red-600 h-1 w-full"></div>
                <div className="bg-white h-1 w-full"></div>
                <div className="bg-red-600 h-1 w-full"></div>
                <div className="bg-white h-1 w-full"></div>
                <div className="bg-red-600 h-1 w-full"></div>
                <div className="bg-white h-1 w-full"></div>
                <div className="bg-red-600 h-1 w-full"></div>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white block">United States Pride</span>
                <span className="text-[9px] text-stone-500 font-mono">In God We Trust</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Multi-Engine Master GPS Navigation Deck */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-stone-900/40 border border-emerald-950 p-6 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-amber-400 text-[10px] font-black uppercase tracking-widest block">Verified Fleet Coordinates</span>
            <h4 className="text-xl font-black text-white">Phoenix Central Headquarters Facility</h4>
            <p className="text-xs text-stone-400 font-light">8020 N 27th Ave, Phoenix, AZ 85051 — Operating Daily From 08:00 to 23:00</p>
          </div>
          
          {/* Grid Layout of Highly Reliable Map Direct Targets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            <a 
              href={`https://maps.google.com/?q=${fullAddressUrlEncoded}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-stone-950 hover:bg-emerald-900/50 text-white border border-emerald-900/40 font-black text-xs uppercase tracking-widest p-4 rounded-xl transition-all duration-200 text-center shadow-lg group"
            >
              <span className="group-hover:text-amber-400 transition-colors">🗺️ Google Maps Routing</span>
            </a>
            
            <a 
              href={`https://maps.apple.com/?address=${fullAddressUrlEncoded}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-stone-950 hover:bg-emerald-900/50 text-white border border-emerald-900/40 font-black text-xs uppercase tracking-widest p-4 rounded-xl transition-all duration-200 text-center shadow-lg group"
            >
              <span className="group-hover:text-amber-400 transition-colors">🍎 Apple Maps Routing</span>
            </a>

            <a 
              href={`https://waze.com/ul?q=${fullAddressUrlEncoded}&navigate=yes`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-stone-950 hover:bg-emerald-900/50 text-white border border-emerald-900/40 font-black text-xs uppercase tracking-widest p-4 rounded-xl transition-all duration-200 text-center shadow-lg group"
            >
              <span className="group-hover:text-amber-400 transition-colors">🚙 Waze Live Navigation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Senior Professional Clean Footer Layout */}
      <footer className="bg-stone-950 text-stone-600 py-12 text-xs border-t border-emerald-950">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="font-bold text-stone-400 uppercase tracking-wider text-[11px]">© Top Organic Grill. All Rights Reserved.</p>
          <p className="font-mono text-emerald-600/50 text-[10px]">System Platform Node v6.20 // Engineered to Absolute Perfection.</p>
        </div>
      </footer>

    </div>
  );
}