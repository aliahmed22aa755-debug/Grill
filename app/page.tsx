export default function TopOrganicPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-serif p-6 md:p-20">
      <main className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-24">
          <h1 className="text-7xl font-bold tracking-tight mb-6">Top Organic</h1>
          <p className="text-2xl italic text-stone-600">The Soul of the Mediterranean Levant</p>
        </header>

        {/* Philosophy */}
        <section className="mb-24">
          <h2 className="text-4xl font-semibold mb-8 border-b border-stone-300 pb-4">Our Culinary Heritage</h2>
          <p className="text-lg leading-relaxed mb-6">
            At Top Organic, we do not just serve food; we preserve a legacy. Our journey begins in the fertile crescent, where the art of the meal is treated as an act of love. Authenticity is our heartbeat—from the slow-marinated tenderness of our shawarma to the earthen, velvet richness of our handcrafted hummus.
          </p>
          <p className="text-right text-3xl font-arabic py-8">
            « الطعامُ حكايةٌ، وأصالةُ الشرقِ في تفاصيلِ النكهة »
          </p>
        </section>

        {/* History & Ingredients */}
        <section className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h3 className="text-3xl font-semibold mb-6">The Shawarma Legacy</h3>
            <p className="text-lg">
              Born from the ancient tradition of vertical roasting, the shawarma is a testament to patience. Our meat is layered with a secret blend of twelve spices, inspired by the caravans that traversed the silk roads. Each slice is a balance of fire and spice, perfected over generations.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-6">The Hummus Origins</h3>
            <p className="text-lg">
              Hummus, the universal language of the Levant, traces its roots to 13th-century culinary manuscripts in Cairo and Aleppo. It is the ultimate expression of the Mediterranean philosophy: simple, raw ingredients—chickpeas, tahini, lemon, and garlic—transformed into something ethereal.
            </p>
          </div>
        </section>

        {/* Regional Highlights */}
        <section className="mb-24 bg-white p-12 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-semibold mb-8">A Tapestry of Nations</h2>
          <div className="space-y-6 text-lg">
            <p><strong>Syria & Lebanon:</strong> The masters of Mezze and the legendary Za'atar, bringing the earth of the mountains to your plate.</p>
            <p><strong>Palestine & Jordan:</strong> Where every grain of wheat tells a story, famous for Musakhan and unmatched hospitality.</p>
            <p><strong>Turkey:</strong> The cradle of the kebab, bringing sophisticated grilling techniques to every dish.</p>
            <p><strong>Egypt & Iraq:</strong> The custodians of spice, creating bold, slow-cooked flavors that define the history of the region.</p>
          </div>
        </section>

        {/* Final Poem */}
        <section className="text-center py-20 border-t border-b border-stone-200">
          <p className="text-4xl font-arabic text-stone-900 leading-tight">
            سَقى اللهُ زَمَاناً كَانَ فيهِ خُبزُنا... شَهِيّاً كَمَا العُمْرِ في صِفَائِهِ
          </p>
          <p className="mt-8 italic text-lg">
            "The bread we share is the history we keep."
          </p>
        </section>
      </main>

      {/* Signature Easter Egg */}
      <footer className="fixed bottom-4 right-6 text-stone-400 text-sm font-light italic">
        Zainab
      </footer>
    </div>
  );
}
