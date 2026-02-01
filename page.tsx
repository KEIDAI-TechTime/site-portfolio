
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
    <div className="min-h-screen bg-[#F5EDE4]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="w-full px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xs tracking-widest text-[#2C5F5F]">ALL HANDMADE ICE CREAM</div>
            <Link to="/" className="flex items-center">
              <img 
                src="https://static.wixstatic.com/media/302463_80f9e3dd8a954fa6a61504900a56e0e1~mv2.jpg/v1/crop/x_0,y_1,w_431,h_207/fill/w_119,h_56,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Harlow-logo1_edited.jpg" 
                alt="Harlow Ice Cream" 
                className="h-14"
              />
            </Link>
            <Link to="/cart" className="w-6 h-6 flex items-center justify-center cursor-pointer">
              <i className="ri-shopping-cart-line text-xl text-[#2C5F5F]"></i>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 mt-4">
            <Link to="/" className="text-sm tracking-wider text-[#2C5F5F] hover:text-[#D4A574] transition-colors whitespace-nowrap cursor-pointer">HOME</Link>
            <Link to="/shop" className="text-sm tracking-wider text-[#2C5F5F] hover:text-[#D4A574] transition-colors whitespace-nowrap cursor-pointer">ONLINE SHOP</Link>
            <Link to="/about" className="text-sm tracking-wider text-[#2C5F5F] hover:text-[#D4A574] transition-colors whitespace-nowrap cursor-pointer">ABOUT</Link>
            <Link to="/flavor" className="text-sm tracking-wider text-[#2C5F5F] hover:text-[#D4A574] transition-colors whitespace-nowrap cursor-pointer">FLAVOR</Link>
            <Link to="/access" className="text-sm tracking-wider text-[#2C5F5F] hover:text-[#D4A574] transition-colors whitespace-nowrap cursor-pointer">ACCESS</Link>
            <Link to="/media" className="text-sm tracking-wider text-[#2C5F5F] hover:text-[#D4A574] transition-colors whitespace-nowrap cursor-pointer">MEDIA</Link>
            <Link to="/company" className="text-sm tracking-wider text-[#2C5F5F] hover:text-[#D4A574] transition-colors whitespace-nowrap cursor-pointer">COMPANY</Link>
            <Link to="/contact" className="text-sm tracking-wider text-[#2C5F5F] hover:text-[#D4A574] transition-colors whitespace-nowrap cursor-pointer">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src="https://static.wixstatic.com/media/302463_1016409da0454e6dbfb512f4cf04e531~mv2.jpg/v1/fill/w_512,h_689,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/302463_1016409da0454e6dbfb512f4cf04e531~mv2.jpg" 
                alt="Ice Cream Cone" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="relative">
              <img 
                src="https://static.wixstatic.com/media/302463_c236f31161c64d839be2f8cfada332e7~mv2_d_1650_1275_s_2.jpg/v1/fill/w_768,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/302463_c236f31161c64d839be2f8cfada332e7~mv2_d_1650_1275_s_2.jpg" 
                alt="Harlow Ice Cream" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h1 className="font-['Playfair_Display'] text-6xl lg:text-8xl text-[#2C5F5F] mb-4" style={{fontFamily: "'Playfair Display', serif"}}>Harlow</h1>
                  <h2 className="text-5xl lg:text-7xl font-bold text-[#D4A574] tracking-wider">ICE CREAM</h2>
                  <p className="text-lg text-[#2C5F5F] mt-6">Harlow ice cream, started in 2017, is a small batch passion driven<br />craft Ice cream shop located in Kobe, Japan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Flavors Section */}
      <section className="py-20 px-8 bg-[#C9A89A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#F5EDE4] p-12 rounded-lg">
              <h3 className="text-4xl font-bold text-[#2C5F5F] mb-4">OUR FLAVORS</h3>
              <h4 className="font-['Playfair_Display'] text-2xl text-[#2C5F5F] mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Fresh n' Tasty!</h4>
              <p className="text-base text-[#2C5F5F] mb-2">すべて店内で手作り</p>
              <p className="text-base text-[#2C5F5F] mb-2">しています</p>
              <p className="text-base text-[#2C5F5F] mb-2">自家製のコーンで</p>
              <p className="text-base text-[#2C5F5F] mb-8">お召しあがりください</p>
              <Link to="/flavor" className="inline-block px-8 py-3 border-2 border-[#2C5F5F] text-[#2C5F5F] hover:bg-[#2C5F5F] hover:text-white transition-all rounded-md whitespace-nowrap cursor-pointer">
                MONTHLY MENU
              </Link>
              <div className="mt-8">
                <img 
                  src="https://static.wixstatic.com/media/302463_7838c392715e4e7ea5fbf87d25c6df12~mv2_d_9379_6509_s_4_2.jpg/v1/fill/w_228,h_232,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/302463_7838c392715e4e7ea5fbf87d25c6df12~mv2_d_9379_6509_s_4_2.jpg" 
                  alt="Pattern" 
                  className="w-48 h-48 object-cover rounded-full"
                />
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img 
                src="https://static.wixstatic.com/media/302463_8fca1cc324fe48f8b5a56c4270305ede~mv2.jpg/v1/crop/x_123,y_2,w_1157,h_851/fill/w_612,h_451,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/03-9-18-3150_edited.jpg" 
                alt="Ice Cream Cup" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-[#2C5F5F]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <i className="ri-shopping-bag-line text-5xl mb-4"></i>
                  <h3 className="text-4xl font-bold mb-2">ONLINE</h3>
                  <h3 className="text-4xl font-bold">SHOP</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Shop Section */}
      <section className="py-20 px-8 bg-[#2C5F5F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://static.wixstatic.com/media/302463_da7e8e89dc7844dc9dc72d432827247c~mv2.jpg/v1/fill/w_582,h_576,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_3671_JPG.jpg" 
                alt="Shop Front" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2 bg-[#F5EDE4] p-12 rounded-lg">
              <h3 className="text-4xl font-bold text-[#2C5F5F] mb-4">OUR SHOP</h3>
              <h4 className="font-['Playfair_Display'] text-2xl text-[#2C5F5F] mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Ice cream by the sea</h4>
              <p className="text-base text-[#2C5F5F] mb-2">神戸本店</p>
              <p className="text-base text-[#2C5F5F] mb-2">みなとのもり公園</p>
              <p className="text-base text-[#2C5F5F] mb-2">東遊園地</p>
              <p className="text-base text-[#2C5F5F] mb-2">メリケンパーク</p>
              <p className="text-base text-[#2C5F5F] mb-2">から徒歩圏内ですので</p>
              <p className="text-base text-[#2C5F5F] mb-2">お散歩がてら</p>
              <p className="text-base text-[#2C5F5F] mb-4">お立ち寄りください</p>
              <p className="text-base text-[#2C5F5F] mb-2 mt-6">東京直営店</p>
              <p className="text-base text-[#2C5F5F] mb-2">渋谷と恵比寿と広尾</p>
              <p className="text-base text-[#2C5F5F] mb-2">表参道の真ん中あたり</p>
              <p className="text-base text-[#2C5F5F] mb-8">閑静な住宅街にあります</p>
              <Link to="/access" className="inline-block px-8 py-3 border-2 border-[#2C5F5F] text-[#2C5F5F] hover:bg-[#2C5F5F] hover:text-white transition-all rounded-md whitespace-nowrap cursor-pointer">
                ACCESS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee & Tea Section */}
      <section className="py-20 px-8 bg-[#C9A89A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://static.wixstatic.com/media/302463_2e8e1ad371694c63afb2bcdda9483aa8~mv2.jpg/v1/crop/x_0,y_96,w_576,h_576/fill/w_444,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1255_edited.jpg" 
                alt="Coffee" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-[#F5EDE4]/95 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center p-12">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#2C5F5F] mb-4">COFFEE<br />&<br />TEA</h3>
                  <h4 className="font-['Playfair_Display'] text-xl text-[#2C5F5F] mb-6" style={{fontFamily: "'Playfair Display', serif"}}>Baked Goods and<br />Delicious Coffee & Tea!</h4>
                  <p className="text-sm text-[#2C5F5F] mb-2">コーヒーは</p>
                  <p className="text-sm text-[#2C5F5F] mb-2">Beyond coffee roasters</p>
                  <p className="text-sm text-[#2C5F5F] mb-2">紅茶は</p>
                  <p className="text-sm text-[#2C5F5F] mb-2">SMITH TEA</p>
                  <p className="text-sm text-[#2C5F5F]">をお取り扱いしております</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://static.wixstatic.com/media/302463_3d79f69d92f940278778408c9196d9c9~mv2.jpg/v1/fill/w_444,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_0863_edited.jpg" 
                alt="Baked Goods" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 px-8 bg-[#F5EDE4]" style={{backgroundImage: "url('https://static.wixstatic.com/media/302463_e0cef427f0a043bbbecbc8417d39f61c~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/302463_e0cef427f0a043bbbecbc8417d39f61c~mv2.jpg')", backgroundRepeat: 'repeat', backgroundSize: '200px'}}>
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-[#2C5F5F] mb-12">#harlowicecream</h3>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-8 bg-[#2C5F5F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="aspect-square w-full h-48">
              <img src="https://static.wixstatic.com/media/302463_1a27aafa25844b44975844071b3ecbd0~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/302463_1a27aafa25844b44975844071b3ecbd0~mv2.jpg" alt="Gallery 1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="aspect-square w-full h-48">
              <img src="https://static.wixstatic.com/media/302463_fc96da8450554b7490c606a1d519553d~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/302463_fc96da8450554b7490c606a1d519553d~mv2.jpg" alt="Gallery 2" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="aspect-square w-full h-48">
              <img src="https://static.wixstatic.com/media/302463_358d8eb9bea7475a9ae30047dabbea11~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/302463_358d8eb9bea7475a9ae30047dabbea11~mv2.jpg" alt="Gallery 3" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="aspect-square w-full h-48">
              <img src="https://static.wixstatic.com/media/302463_5c36ee93adce40199ba6d0338ac53ec5~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/302463_5c36ee93adce40199ba6d0338ac53ec5~mv2.jpg" alt="Gallery 4" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="aspect-square w-full h-48">
              <img src="https://static.wixstatic.com/media/302463_4379ce4872b64b8fa1a37dc24be5ea04~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/302463_4379ce4872b64b8fa1a37dc24be5ea04~mv2.jpg" alt="Gallery 5" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C5F5F] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-bold mb-4 tracking-wider">ADDRESS</h4>
              <div className="mb-6">
                <p className="text-sm mb-2 font-bold">KOBE</p>
                <p className="text-sm mb-1">〒650-0041</p>
                <p className="text-sm mb-1">17-3 W102</p>
                <p className="text-sm mb-1">SHINKOCHO CHUO-KU</p>
                <p className="text-sm mb-1">KOBE JAPAN</p>
                <p className="text-sm mb-3">Tel: 078-585-5388</p>
                <p className="text-sm mb-1">Open hour</p>
                <p className="text-sm mb-1">9:00-17:00</p>
                <p className="text-sm mb-1">Breakfast&brunch</p>
                <p className="text-sm mb-1">9:00-14:00</p>
                <p className="text-sm mb-1">Closed</p>
                <p className="text-sm">TUESDAY / FRIDAY</p>
              </div>
              <div>
                <p className="text-sm mb-2 font-bold">TOKYO</p>
                <p className="text-sm mb-1">〒150-0012</p>
                <p className="text-sm mb-1">3-2-12 Hiroo, Shibuya-ku,</p>
                <p className="text-sm mb-1">TOKYO JAPAN</p>
                <p className="text-sm mb-3">Tel: 050-1143-7179</p>
              </div>
            </div>
            <div>
              <p className="text-sm mb-1">OPEN</p>
              <p className="text-sm mb-3">12:00-18:00</p>
              <p className="text-sm mb-1">CLOSED</p>
              <p className="text-sm">TUESDAY / FRIDAY</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 tracking-wider">CONTACT</h4>
              <p className="text-sm mb-2">
                <a href="mailto:harlow.icecream@gmail.com" className="hover:text-[#D4A574] transition-colors">harlow.icecream@gmail.com</a>
              </p>
              <p className="text-sm mb-6">SHE&HIM.co.,ltd</p>
              <nav className="space-y-2">
                <Link to="/" className="block text-sm hover:text-[#D4A574] transition-colors cursor-pointer">HOME</Link>
                <Link to="/shop" className="block text-sm hover:text-[#D4A574] transition-colors cursor-pointer">ONLINE SHOP</Link>
                <Link to="/about" className="block text-sm hover:text-[#D4A574] transition-colors cursor-pointer">ABOUT</Link>
                <Link to="/flavor" className="block text-sm hover:text-[#D4A574] transition-colors cursor-pointer">FLAVOR</Link>
                <Link to="/access" className="block text-sm hover:text-[#D4A574] transition-colors cursor-pointer">ACCESS</Link>
                <Link to="/media" className="block text-sm hover:text-[#D4A574] transition-colors cursor-pointer">MEDIA</Link>
                <Link to="/company" className="block text-sm hover:text-[#D4A574] transition-colors cursor-pointer">COMPANY</Link>
                <Link to="/contact" className="block text-sm hover:text-[#D4A574] transition-colors cursor-pointer">CONTACT</Link>
              </nav>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="text-sm">
              <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4A574] transition-colors">Website Builder</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
