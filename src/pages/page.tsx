import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F4EF]" style={{fontFamily: "'Noto Serif JP', serif"}}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-[#F7F4EF]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="w-full px-16 py-10">
          <div className="flex items-center justify-between max-w-[1600px] mx-auto">
            <Link to="/" className="flex items-center">
              <div className="text-[14px] font-light tracking-[0.4em] text-[#4A4A4A]">LUNA GELATO</div>
            </Link>
            <div className="flex items-center gap-16">
              <Link to="/about" className="text-[12px] font-light tracking-[0.25em] text-[#4A4A4A] hover:text-[#7BA3A8] transition-colors duration-500 whitespace-nowrap cursor-pointer">想い</Link>
              <Link to="/flavor" className="text-[12px] font-light tracking-[0.25em] text-[#4A4A4A] hover:text-[#7BA3A8] transition-colors duration-500 whitespace-nowrap cursor-pointer">味わい</Link>
              <Link to="/access" className="text-[12px] font-light tracking-[0.25em] text-[#4A4A4A] hover:text-[#7BA3A8] transition-colors duration-500 whitespace-nowrap cursor-pointer">店舗</Link>
              <Link to="/contact" className="text-[12px] font-light tracking-[0.25em] text-[#4A4A4A] hover:text-[#7BA3A8] transition-colors duration-500 whitespace-nowrap cursor-pointer">お問合せ</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Vertical Text */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden">
        {/* Background with texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8DFD0]/30 to-transparent"></div>
        
        {/* Wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z" fill="#7BA3A8"/>
          </svg>
        </div>

        <div className="max-w-[1600px] mx-auto w-full px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            {/* Vertical Text Section */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-start">
              <div className="flex items-start gap-12">
                {/* Main vertical text */}
                <div className="writing-mode-vertical text-right" style={{writingMode: 'vertical-rl'}}>
                  <h1 className="text-[48px] leading-[1.8] font-light tracking-[0.15em] text-[#4A4A4A]">
                    手づくり、<br />
                    ひとつひとつ。
                  </h1>
                </div>
                
                {/* Decorative line */}
                <div className="w-[1px] h-64 bg-gradient-to-b from-transparent via-[#7BA3A8] to-transparent"></div>
                
                {/* Subtitle vertical text */}
                <div className="writing-mode-vertical text-right" style={{writingMode: 'vertical-rl'}}>
                  <p className="text-[14px] leading-[2.2] font-light tracking-[0.2em] text-[#4A4A4A]/70">
                    潮風と木漏れ日の中で<br />
                    丁寧に仕上げる<br />
                    季節の味わい
                  </p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-6 -left-6 w-full h-full border border-[#7BA3A8]/20 pointer-events-none"></div>
                
                <div className="aspect-[5/6] overflow-hidden relative">
                  <img
                    src="https://readdy.ai/api/search-image?query=Artisan%20gelato%20ice%20cream%20in%20handmade%20waffle%20cone%20held%20against%20minimalist%20Japanese%20aesthetic%20background%20with%20soft%20natural%20lighting%20and%20gentle%20shadows%2C%20featuring%20creamy%20texture%20and%20elegant%20presentation%20in%20warm%20neutral%20tones%20with%20subtle%20beige%20and%20cream%20colors%2C%20shot%20in%20documentary%20style%20with%20shallow%20depth%20of%20field&width=800&height=960&seq=hero-gelato-001&orientation=portrait"
                    alt="手作りジェラート"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EF]/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section with Grid Pattern */}
      <section className="py-32 px-16 bg-white relative overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(#7BA3A8 1px, transparent 1px), linear-gradient(90deg, #7BA3A8 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center space-y-16">
            {/* Vertical title */}
            <div className="flex justify-center">
              <div className="writing-mode-vertical text-center" style={{writingMode: 'vertical-rl'}}>
                <h2 className="text-[16px] font-light tracking-[0.3em] text-[#7BA3A8]">ものづくりの心</h2>
              </div>
            </div>

            <div className="space-y-12">
              <p className="text-[28px] leading-[2.2] font-light text-[#4A4A4A] tracking-[0.1em]">
                素材の選定から製造まで、<br />
                すべての工程に時間をかけています。
              </p>
              
              <div className="flex justify-center">
                <div className="w-1 h-16 bg-gradient-to-b from-[#7BA3A8] to-transparent"></div>
              </div>

              <p className="text-[15px] leading-[2.4] font-light text-[#4A4A4A]/80 tracking-[0.08em] max-w-[800px] mx-auto">
                季節ごとに変わるフレーバーは、その時期にしか味わえない特別なもの。<br />
                自家製のコーンとともに、記憶に残る一口をお届けします。<br />
                <br />
                二〇一九年、鎌倉の海辺に生まれた小さな工房。<br />
                丁寧に作られたものを、ゆったりした時間の中で味わう贅沢を。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Flavors with Japanese Aesthetic */}
      <section className="py-32 px-16 bg-[#F7F4EF]">
        <div className="max-w-[1600px] mx-auto">
          {/* Section header */}
          <div className="mb-24 flex items-center justify-center gap-12">
            <div className="h-[1px] w-24 bg-[#7BA3A8]/30"></div>
            <div className="text-center">
              <p className="text-[12px] tracking-[0.3em] text-[#7BA3A8] mb-3">SEASONAL</p>
              <h3 className="text-[32px] font-light text-[#4A4A4A] tracking-[0.1em]">季節の味わい</h3>
            </div>
            <div className="h-[1px] w-24 bg-[#7BA3A8]/30"></div>
          </div>

          {/* Flavor grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Flavor 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <div className="aspect-[3/4] relative">
                  <img
                    src="https://readdy.ai/api/search-image?query=Matcha%20green%20tea%20gelato%20ice%20cream%20in%20ceramic%20bowl%20on%20traditional%20Japanese%20wooden%20table%20with%20soft%20natural%20window%20light%2C%20minimalist%20composition%20with%20gentle%20shadows%20and%20warm%20neutral%20background%20tones%2C%20artisan%20handcrafted%20dessert%20photography%20in%20documentary%20style&width=600&height=800&seq=flavor-matcha-001&orientation=portrait"
                    alt="抹茶"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A4A4A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/40"></div>
              </div>
              <div className="text-center space-y-3">
                <h4 className="text-[18px] font-light tracking-[0.15em] text-[#4A4A4A]">抹茶</h4>
                <p className="text-[13px] leading-[2] font-light text-[#4A4A4A]/70 tracking-[0.08em]">
                  宇治の香り、<br />
                  ほろ苦き余韻
                </p>
              </div>
            </div>

            {/* Flavor 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <div className="aspect-[3/4] relative">
                  <img
                    src="https://readdy.ai/api/search-image?query=Sakura%20cherry%20blossom%20gelato%20ice%20cream%20with%20delicate%20pink%20color%20in%20artisan%20ceramic%20bowl%20on%20rustic%20wooden%20surface%2C%20soft%20diffused%20natural%20lighting%20with%20Japanese%20aesthetic%2C%20minimalist%20food%20photography%20with%20warm%20beige%20background%20and%20gentle%20shadows&width=600&height=800&seq=flavor-sakura-002&orientation=portrait"
                    alt="桜"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A4A4A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/40"></div>
              </div>
              <div className="text-center space-y-3">
                <h4 className="text-[18px] font-light tracking-[0.15em] text-[#4A4A4A]">桜</h4>
                <p className="text-[13px] leading-[2] font-light text-[#4A4A4A]/70 tracking-[0.08em]">
                  春の訪れ、<br />
                  儚き花の記憶
                </p>
              </div>
            </div>

            {/* Flavor 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <div className="aspect-[3/4] relative">
                  <img
                    src="https://readdy.ai/api/search-image?query=Hojicha%20roasted%20green%20tea%20gelato%20ice%20cream%20with%20rich%20brown%20color%20in%20traditional%20Japanese%20pottery%20bowl%20on%20wooden%20tray%2C%20warm%20natural%20lighting%20with%20minimalist%20aesthetic%2C%20artisan%20dessert%20photography%20with%20soft%20beige%20background%20and%20delicate%20shadows&width=600&height=800&seq=flavor-hojicha-003&orientation=portrait"
                    alt="焙じ茶"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A4A4A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/40"></div>
              </div>
              <div className="text-center space-y-3">
                <h4 className="text-[18px] font-light tracking-[0.15em] text-[#4A4A4A]">焙じ茶</h4>
                <p className="text-[13px] leading-[2] font-light text-[#4A4A4A]/70 tracking-[0.08em]">
                  香ばしき風、<br />
                  懐かしき温もり
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/flavor"
              className="inline-flex items-center gap-4 text-[12px] font-light tracking-[0.25em] text-[#4A4A4A] hover:text-[#7BA3A8] transition-colors duration-500 cursor-pointer group"
            >
              <span>すべての味わいを見る</span>
              <span className="transform group-hover:translate-x-2 transition-transform duration-500">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section - Japanese Style */}
      <section className="py-32 px-16 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Kamakura */}
            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="writing-mode-vertical" style={{writingMode: 'vertical-rl'}}>
                  <h3 className="text-[24px] font-light tracking-[0.2em] text-[#4A4A4A]">鎌倉、海のほとり</h3>
                </div>
                <div className="flex-1 space-y-8">
                  <div className="aspect-[4/5] overflow-hidden relative group cursor-pointer">
                    <img
                      src="https://readdy.ai/api/search-image?query=Traditional%20Japanese%20storefront%20of%20artisan%20gelato%20shop%20near%20Kamakura%20beach%20with%20wooden%20architecture%20and%20noren%20curtains%2C%20coastal%20atmosphere%20with%20natural%20lighting%2C%20minimalist%20Japanese%20aesthetic%20with%20warm%20wood%20tones%20and%20clean%20lines%2C%20documentary%20style%20architectural%20photography&width=700&height=875&seq=shop-kamakura-001&orientation=portrait"
                      alt="鎌倉本店"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-[#7BA3A8]/20 pointer-events-none"></div>
                  </div>
                  <div className="space-y-6 pl-4">
                    <p className="text-[14px] leading-[2.2] font-light text-[#4A4A4A]/80 tracking-[0.08em]">
                      由比ヶ浜海岸、鶴岡八幡宮、小町通りから徒歩圏内。<br />
                      潮風を感じながら、お散歩がてらお立ち寄りください。
                    </p>
                    <div className="space-y-2 text-[13px] leading-[2] font-light text-[#4A4A4A]/70">
                      <p>〒248-0014</p>
                      <p>神奈川県鎌倉市由比ヶ浜2-8-15</p>
                      <p className="pt-2">Tel: 0467-84-7722</p>
                      <p className="pt-2">10:00 - 18:00</p>
                      <p>定休日: 水曜・木曜</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Yokohama */}
            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="writing-mode-vertical" style={{writingMode: 'vertical-rl'}}>
                  <h3 className="text-[24px] font-light tracking-[0.2em] text-[#4A4A4A]">横浜、静かな街角</h3>
                </div>
                <div className="flex-1 space-y-8">
                  <div className="aspect-[4/5] overflow-hidden relative group cursor-pointer">
                    <img
                      src="https://readdy.ai/api/search-image?query=Modern%20Japanese%20gelato%20shop%20storefront%20in%20quiet%20Yokohama%20neighborhood%20with%20minimalist%20design%20and%20wooden%20elements%2C%20urban%20setting%20with%20clean%20architecture%20and%20natural%20light%2C%20contemporary%20Japanese%20aesthetic%20with%20warm%20neutral%20tones%2C%20architectural%20photography%20in%20documentary%20style&width=700&height=875&seq=shop-yokohama-002&orientation=portrait"
                      alt="横浜直営店"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-[#7BA3A8]/20 pointer-events-none"></div>
                  </div>
                  <div className="space-y-6 pl-4">
                    <p className="text-[14px] leading-[2.2] font-light text-[#4A4A4A]/80 tracking-[0.08em]">
                      みなとみらいと元町中華街の真ん中あたり。<br />
                      賑やかな商店街の中に佇む、静かな空間です。
                    </p>
                    <div className="space-y-2 text-[13px] leading-[2] font-light text-[#4A4A4A]/70">
                      <p>〒231-0023</p>
                      <p>横浜市中区山下町5-3-8</p>
                      <p className="pt-2">Tel: 045-662-8899</p>
                      <p className="pt-2">11:00 - 19:00</p>
                      <p>定休日: 水曜・木曜</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee & Tea Section */}
      <section className="py-32 px-16 bg-[#E8DFD0]/20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=Japanese%20coffee%20and%20tea%20service%20with%20artisan%20gelato%20on%20traditional%20wooden%20table%2C%20minimalist%20composition%20with%20ceramic%20cups%20and%20natural%20lighting%2C%20warm%20neutral%20tones%20with%20soft%20shadows%2C%20lifestyle%20photography%20in%20Japanese%20aesthetic%20style%20with%20documentary%20approach&width=900&height=720&seq=coffee-tea-001&orientation=landscape"
                    alt="珈琲と茶"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[#7BA3A8]/30"></div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-12">
              <div className="flex items-start gap-6">
                <div className="writing-mode-vertical" style={{writingMode: 'vertical-rl'}}>
                  <h3 className="text-[20px] font-light tracking-[0.2em] text-[#7BA3A8]">珈琲と茶</h3>
                </div>
                <div className="flex-1 space-y-8">
                  <p className="text-[15px] leading-[2.4] font-light text-[#4A4A4A]/80 tracking-[0.08em]">
                    コーヒーは Kamakura Coffee Roasters、<br />
                    紅茶は OCEAN TEA をお取り扱いしております。<br />
                    <br />
                    焼き菓子とともに、<br />
                    ゆったりとした時間をお過ごしください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Japanese Modern */}
      <footer className="bg-[#4A4A4A] text-white py-24 px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-20">
            <div className="md:col-span-4 space-y-8">
              <div className="text-[14px] font-light tracking-[0.4em]">LUNA GELATO</div>
              <div className="w-16 h-[1px] bg-white/30"></div>
              <p className="text-[13px] leading-[2.2] font-light text-white/70 tracking-[0.08em]">
                二〇一九年、鎌倉の海辺に生まれた<br />
                小さなジェラート工房
              </p>
            </div>
            <div className="md:col-span-4 space-y-6">
              <h4 className="text-[13px] font-light tracking-[0.25em] text-white/90">鎌倉本店</h4>
              <div className="text-[12px] leading-[2.2] font-light text-white/70 space-y-1">
                <p>〒248-0014</p>
                <p>神奈川県鎌倉市由比ヶ浜2-8-15</p>
                <p className="pt-3">Tel: 0467-84-7722</p>
                <p className="pt-3">10:00 - 18:00</p>
                <p>定休日: 水曜・木曜</p>
              </div>
            </div>
            <div className="md:col-span-4 space-y-6">
              <h4 className="text-[13px] font-light tracking-[0.25em] text-white/90">横浜直営店</h4>
              <div className="text-[12px] leading-[2.2] font-light text-white/70 space-y-1">
                <p>〒231-0023</p>
                <p>横浜市中区山下町5-3-8</p>
                <p className="pt-3">Tel: 045-662-8899</p>
                <p className="pt-3">11:00 - 19:00</p>
                <p>定休日: 水曜・木曜</p>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex gap-12">
                <Link to="/about" className="text-[11px] font-light tracking-[0.25em] text-white/70 hover:text-white transition-colors duration-500 cursor-pointer">想い</Link>
                <Link to="/flavor" className="text-[11px] font-light tracking-[0.25em] text-white/70 hover:text-white transition-colors duration-500 cursor-pointer">味わい</Link>
                <Link to="/access" className="text-[11px] font-light tracking-[0.25em] text-white/70 hover:text-white transition-colors duration-500 cursor-pointer">店舗</Link>
                <Link to="/contact" className="text-[11px] font-light tracking-[0.25em] text-white/70 hover:text-white transition-colors duration-500 cursor-pointer">お問合せ</Link>
              </div>
              <div className="text-[11px] font-light text-white/50">
                <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors duration-500">Powered by Readdy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
