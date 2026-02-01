import { useState, useEffect, useRef } from 'react';

export default function IceCreamLP() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  // Blob SVG decoration component
  const BlobDecoration = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        d="M45.3,-58.2C58.9,-49.3,70.1,-35.5,74.5,-19.8C78.9,-4.1,76.5,13.5,69.1,28.5C61.7,43.5,49.3,55.9,34.6,63.4C19.9,70.9,2.9,73.5,-13.3,70.8C-29.5,68.1,-44.9,60.1,-56.4,48C-67.9,35.9,-75.5,19.7,-76.3,3C-77.1,-13.7,-71.1,-30.9,-60.3,-43.8C-49.5,-56.7,-33.9,-65.3,-18.1,-67.7C-2.3,-70.1,13.7,-66.3,28.5,-60.5C43.3,-54.7,56.9,-46.9,45.3,-58.2Z"
        transform="translate(100 100)"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#F5EDE4] font-['Quicksand',sans-serif]">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@400;500;600;700&display=swap');
        .font-logo { font-family: 'Pacifico', cursive; }
        .font-body { font-family: 'Quicksand', sans-serif; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-delay-100 { animation-delay: 0.1s; }
        .animate-delay-200 { animation-delay: 0.2s; }
        .animate-delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="w-full px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xs tracking-[0.2em] text-[#2C5F5F] font-semibold">ALL HANDMADE ICE CREAM</div>
            <a href="#" className="flex items-center group">
              <span className="font-logo text-3xl text-[#2C5F5F] group-hover:text-[#D4A574] transition-colors duration-300">Soleil</span>
            </a>
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#2C5F5F]/10 transition-colors">
              <svg className="w-5 h-5 text-[#2C5F5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 lg:gap-10 mt-4 flex-wrap">
            {['HOME', 'ONLINE SHOP', 'ABOUT', 'FLAVOR', 'ACCESS', 'MEDIA', 'COMPANY', 'CONTACT'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm tracking-wider text-[#2C5F5F] hover:text-[#D4A574] transition-all duration-300 whitespace-nowrap cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4A574] after:transition-all after:duration-300 hover:after:w-full font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={setRef('hero')}
        className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-8 overflow-hidden"
      >
        {/* Decorative blobs */}
        <BlobDecoration className="absolute top-20 -left-20 w-64 h-64 text-[#D4A574]/20 blur-sm" />
        <BlobDecoration className="absolute bottom-20 -right-20 w-80 h-80 text-[#C9A89A]/30 blur-sm" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className={`relative ${visibleSections.has('hero') ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="aspect-[3/4] bg-gradient-to-br from-[#D4A574] to-[#C9A89A] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-center text-white/70">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                  <p className="text-sm tracking-widest">HERO IMAGE</p>
                </div>
              </div>
            </div>
            <div className={`relative ${visibleSections.has('hero') ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
              <div className="aspect-[4/3] bg-gradient-to-br from-[#F5EDE4] to-[#E8DDD4] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <h1 className="font-logo text-6xl lg:text-8xl text-[#2C5F5F] mb-4">Soleil</h1>
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#D4A574] tracking-wider">ICE CREAM</h2>
                    <p className="text-lg text-[#2C5F5F] mt-6 leading-relaxed">
                      Soleil ice cream, started in 2019, is a small batch passion driven<br />
                      craft ice cream shop located in Kamakura, Japan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Flavors Section */}
      <section
        id="flavors"
        ref={setRef('flavors')}
        className="py-24 px-8 bg-[#C9A89A] relative overflow-hidden"
      >
        <BlobDecoration className="absolute -top-40 -right-40 w-96 h-96 text-[#F5EDE4]/30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`bg-[#F5EDE4] p-10 lg:p-14 rounded-[2rem] shadow-xl ${visibleSections.has('flavors') ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <h3 className="text-4xl font-bold text-[#2C5F5F] mb-4">OUR FLAVORS</h3>
              <h4 className="font-logo text-2xl text-[#2C5F5F] mb-6">Fresh n' Tasty!</h4>
              <div className="space-y-1 text-[#2C5F5F]">
                <p>すべて店内で手作り</p>
                <p>しています</p>
                <p>自家製のコーンで</p>
                <p className="mb-8">お召しあがりください</p>
              </div>
              <a
                href="#"
                className="inline-block px-8 py-3 border-2 border-[#2C5F5F] text-[#2C5F5F] hover:bg-[#2C5F5F] hover:text-white transition-all duration-300 rounded-full font-semibold hover:scale-105 transform"
              >
                MONTHLY MENU
              </a>
              <div className="mt-8">
                <div className="w-40 h-40 bg-gradient-to-br from-[#D4A574] to-[#C9A89A] rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={`relative group cursor-pointer ${visibleSections.has('flavors') ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2C5F5F] to-[#1E4545] rounded-[2rem] overflow-hidden shadow-xl flex items-center justify-center">
                <svg className="w-24 h-24 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[#2C5F5F]/95 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[2rem] flex items-center justify-center">
                <div className="text-center text-white transform group-hover:scale-100 scale-90 transition-transform duration-500">
                  <svg className="w-14 h-14 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <h3 className="text-3xl font-bold mb-1">ONLINE</h3>
                  <h3 className="text-3xl font-bold">SHOP</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Shop Section */}
      <section
        id="shop"
        ref={setRef('shop')}
        className="py-24 px-8 bg-[#2C5F5F] relative overflow-hidden"
      >
        <BlobDecoration className="absolute -bottom-40 -left-40 w-96 h-96 text-[#1E4545]/50" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`order-2 lg:order-1 ${visibleSections.has('shop') ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="aspect-square bg-gradient-to-br from-[#F5EDE4] to-[#E8DDD4] rounded-[2rem] overflow-hidden shadow-xl flex items-center justify-center">
                <svg className="w-24 h-24 text-[#C9A89A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div className={`order-1 lg:order-2 bg-[#F5EDE4] p-10 lg:p-14 rounded-[2rem] shadow-xl ${visibleSections.has('shop') ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
              <h3 className="text-4xl font-bold text-[#2C5F5F] mb-4">OUR SHOP</h3>
              <h4 className="font-logo text-2xl text-[#2C5F5F] mb-6">Ice cream by the sea</h4>
              <div className="space-y-1 text-[#2C5F5F]">
                <p className="font-semibold">鎌倉本店</p>
                <p>鎌倉駅西口から徒歩5分</p>
                <p>御成通り沿い</p>
                <p>由比ヶ浜や長谷寺への</p>
                <p>お散歩途中に</p>
                <p className="mb-6">お立ち寄りください</p>
                <p className="font-semibold mt-4">東京店</p>
                <p>中目黒と代官山の間</p>
                <p className="mb-8">閑静な住宅街にあります</p>
              </div>
              <a
                href="#"
                className="inline-block px-8 py-3 border-2 border-[#2C5F5F] text-[#2C5F5F] hover:bg-[#2C5F5F] hover:text-white transition-all duration-300 rounded-full font-semibold hover:scale-105 transform"
              >
                ACCESS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee & Tea Section */}
      <section
        id="coffee"
        ref={setRef('coffee')}
        className="py-24 px-8 bg-[#C9A89A] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`relative group ${visibleSections.has('coffee') ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="aspect-square bg-gradient-to-br from-[#8B7355] to-[#6B5344] rounded-[2rem] overflow-hidden shadow-xl flex items-center justify-center">
                <svg className="w-24 h-24 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-[#F5EDE4]/98 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[2rem] flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#2C5F5F] mb-4">COFFEE<br />&<br />TEA</h3>
                  <h4 className="font-logo text-xl text-[#2C5F5F] mb-6">Baked Goods and<br />Delicious Coffee & Tea!</h4>
                  <div className="text-sm text-[#2C5F5F] space-y-1">
                    <p>コーヒーは</p>
                    <p className="font-semibold">Mountain Blend Roasters</p>
                    <p>紅茶は</p>
                    <p className="font-semibold">Garden Leaf Tea</p>
                    <p>をお取り扱いしております</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${visibleSections.has('coffee') ? 'animate-fadeInUp animate-delay-200' : 'opacity-0'}`}>
              <div className="aspect-square bg-gradient-to-br from-[#D4A574] to-[#C9A89A] rounded-[2rem] overflow-hidden shadow-xl flex items-center justify-center">
                <svg className="w-24 h-24 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 px-8 bg-[#F5EDE4] relative overflow-hidden">
        <BlobDecoration className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] text-[#D4A574]/10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h3 className="text-4xl font-bold text-[#2C5F5F] mb-4">#soleilicecream</h3>
          <p className="text-[#2C5F5F]/70">Follow us on Instagram</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        ref={setRef('gallery')}
        className="py-20 px-8 bg-[#2C5F5F]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ${visibleSections.has('gallery') ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#F5EDE4] to-[#D4A574] flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#2C5F5F]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C5F5F] text-white py-16 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-bold mb-6 tracking-wider">ADDRESS</h4>
              <div className="mb-8">
                <p className="text-sm mb-2 font-bold text-[#D4A574]">KAMAKURA</p>
                <p className="text-sm mb-1">〒248-0012</p>
                <p className="text-sm mb-1">5-12 Onari-machi</p>
                <p className="text-sm mb-1">Kamakura, Kanagawa</p>
                <p className="text-sm mb-3">Tel: 0467-84-5521</p>
                <p className="text-sm mb-1">Open hour: 10:00-18:00</p>
                <p className="text-sm mb-1">Closed: Tuesday / Wednesday</p>
              </div>
              <div>
                <p className="text-sm mb-2 font-bold text-[#D4A574]">TOKYO</p>
                <p className="text-sm mb-1">〒153-0042</p>
                <p className="text-sm mb-1">1-8-3 Aobadai, Meguro-ku</p>
                <p className="text-sm mb-1">Tokyo, Japan</p>
                <p className="text-sm mb-3">Tel: 03-6421-8823</p>
                <p className="text-sm mb-1">Open hour: 12:00-19:00</p>
                <p className="text-sm">Closed: Monday / Tuesday</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-logo text-5xl text-white/90 mb-4">Soleil</span>
              <p className="text-sm text-white/60">Handcrafted with love since 2019</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 tracking-wider">CONTACT</h4>
              <p className="text-sm mb-2">
                <a href="mailto:info@soleil-icecream.jp" className="hover:text-[#D4A574] transition-colors">info@soleil-icecream.jp</a>
              </p>
              <p className="text-sm mb-8 text-white/60">SUNNY DAYS Inc.</p>
              <nav className="grid grid-cols-2 gap-2">
                {['HOME', 'ONLINE SHOP', 'ABOUT', 'FLAVOR', 'ACCESS', 'MEDIA', 'COMPANY', 'CONTACT'].map((item) => (
                  <a key={item} href="#" className="text-sm hover:text-[#D4A574] transition-colors cursor-pointer">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/40">© 2025 Soleil Ice Cream. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
