import { useState, useEffect } from 'react';
import { Scissors, Clock, MapPin, Phone, Mail, Instagram, ChevronDown, Sparkles, Heart } from 'lucide-react';

export default function SalonLP() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Scissors className="w-6 h-6 text-[#8B7355]" />
              <span className="text-2xl font-light tracking-[0.2em] text-[#2C2C2C]">ATELIER</span>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <button onClick={() => scrollToSection('about')} className="text-sm tracking-[0.15em] text-[#4A4A4A] hover:text-[#8B7355] transition-colors">ABOUT</button>
              <button onClick={() => scrollToSection('menu')} className="text-sm tracking-[0.15em] text-[#4A4A4A] hover:text-[#8B7355] transition-colors">MENU</button>
              <button onClick={() => scrollToSection('stylist')} className="text-sm tracking-[0.15em] text-[#4A4A4A] hover:text-[#8B7355] transition-colors">STYLIST</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm tracking-[0.15em] text-[#4A4A4A] hover:text-[#8B7355] transition-colors">GALLERY</button>
              <button onClick={() => scrollToSection('access')} className="text-sm tracking-[0.15em] text-[#4A4A4A] hover:text-[#8B7355] transition-colors">ACCESS</button>
            </div>
            <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 bg-[#2C2C2C] text-white text-sm tracking-[0.1em] hover:bg-[#8B7355] transition-colors">
              RESERVE
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8E4DF] to-[#FAF8F5]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4C5B5]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9B8A8]/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm tracking-[0.3em] text-[#8B7355] mb-4">HAIR SALON</p>
              <h1 className="text-5xl lg:text-7xl font-light text-[#2C2C2C] leading-tight mb-6">
                あなたの美しさを
                <br />
                <span className="font-serif italic text-[#8B7355]">引き出す</span>
              </h1>
              <p className="text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                一人ひとりの個性に寄り添い、
                <br />
                最高のスタイルをご提案します。
                <br />
                上質な空間で、特別なひとときを。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => scrollToSection('contact')} className="px-10 py-4 bg-[#2C2C2C] text-white text-sm tracking-[0.15em] hover:bg-[#8B7355] transition-all duration-300 shadow-lg hover:shadow-xl">
                  予約する
                </button>
                <button onClick={() => scrollToSection('menu')} className="px-10 py-4 border border-[#2C2C2C] text-[#2C2C2C] text-sm tracking-[0.15em] hover:bg-[#2C2C2C] hover:text-white transition-all duration-300">
                  メニューを見る
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#D4C5B5] to-[#B8A898] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-60" />
                    <p className="text-sm tracking-[0.2em]">HERO IMAGE</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#8B7355]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        <button onClick={() => scrollToSection('about')} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#8B7355]" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gradient-to-br from-[#E8E4DF] to-[#D4C5B5] rounded-lg flex items-center justify-center">
                  <Scissors className="w-12 h-12 text-[#8B7355]/50" />
                </div>
                <div className="aspect-square bg-gradient-to-br from-[#D4C5B5] to-[#C9B8A8] rounded-lg mt-8 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white/50" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm tracking-[0.3em] text-[#8B7355] mb-4">ABOUT US</p>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-8">
                私たちについて
              </h2>
              <div className="space-y-6 text-[#6B6B6B] leading-relaxed">
                <p>
                  ATELIERは2015年、表参道にオープンした隠れ家サロンです。
                  「本当の美しさは、内側から輝く」という信念のもと、
                  お客様一人ひとりの個性と向き合い、
                  最適なスタイルをご提案しています。
                </p>
                <p>
                  厳選されたオーガニック製品と、
                  経験豊富なスタイリストによる丁寧な施術で、
                  髪本来の美しさを引き出します。
                </p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-light text-[#8B7355]">10</p>
                  <p className="text-sm text-[#6B6B6B] mt-2">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-light text-[#8B7355]">8</p>
                  <p className="text-sm text-[#6B6B6B] mt-2">Stylists</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-light text-[#8B7355]">5000+</p>
                  <p className="text-sm text-[#6B6B6B] mt-2">Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-[#8B7355] mb-4">MENU</p>
            <h2 className="text-4xl lg:text-5xl font-light text-white">
              メニュー
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'カット', price: '¥6,600', desc: 'カウンセリング・シャンプー・ブロー込み' },
              { name: 'カラー', price: '¥8,800〜', desc: 'リタッチ / フルカラー / ハイライト' },
              { name: 'パーマ', price: '¥11,000〜', desc: 'デジタルパーマ / コールドパーマ' },
              { name: 'トリートメント', price: '¥5,500〜', desc: 'オーガニックケアで髪を内側から補修' },
              { name: 'ヘッドスパ', price: '¥4,400〜', desc: '頭皮ケア・リラクゼーション' },
              { name: 'ブライダル', price: '¥33,000〜', desc: 'ヘアメイク・リハーサル込み' },
            ].map((item, index) => (
              <div key={index} className="group p-8 bg-[#3A3A3A] rounded-lg hover:bg-[#8B7355] transition-all duration-500">
                <h3 className="text-xl font-light text-white mb-2">{item.name}</h3>
                <p className="text-2xl text-[#8B7355] group-hover:text-white transition-colors mb-4">{item.price}</p>
                <p className="text-sm text-[#9A9A9A] group-hover:text-white/80 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-[#9A9A9A]">※ 料金は税込価格です。詳細はお問い合わせください。</p>
          </div>
        </div>
      </section>

      {/* Stylist Section */}
      <section id="stylist" className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-[#8B7355] mb-4">STYLIST</p>
            <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C]">
              スタイリスト
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: '田中 優子', role: 'Owner / Director', career: '20年' },
              { name: '山本 健太', role: 'Top Stylist', career: '15年' },
              { name: '佐藤 美咲', role: 'Stylist', career: '8年' },
              { name: '伊藤 翔', role: 'Stylist', career: '5年' },
            ].map((stylist, index) => (
              <div key={index} className="group text-center">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#E8E4DF] to-[#D4C5B5] rounded-lg mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Scissors className="w-12 h-12 text-[#8B7355]/30" />
                  </div>
                  <div className="absolute inset-0 bg-[#8B7355]/0 group-hover:bg-[#8B7355]/20 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-light text-[#2C2C2C] mb-1">{stylist.name}</h3>
                <p className="text-sm text-[#8B7355] mb-2">{stylist.role}</p>
                <p className="text-xs text-[#9A9A9A]">経験 {stylist.career}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6 lg:px-8 bg-[#E8E4DF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-[#8B7355] mb-4">GALLERY</p>
            <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C]">
              スタイルギャラリー
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="group aspect-square bg-gradient-to-br from-[#D4C5B5] to-[#C9B8A8] rounded-lg overflow-hidden relative cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white/40" />
                </div>
                <div className="absolute inset-0 bg-[#2C2C2C]/0 group-hover:bg-[#2C2C2C]/40 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#" className="inline-flex items-center gap-2 text-[#2C2C2C] hover:text-[#8B7355] transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="text-sm tracking-[0.1em]">@atelier_hair_salon</span>
            </a>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm tracking-[0.3em] text-[#8B7355] mb-4">ACCESS</p>
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C] mb-12">
                アクセス
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#2C2C2C] font-medium mb-1">住所</p>
                    <p className="text-[#6B6B6B]">〒150-0001</p>
                    <p className="text-[#6B6B6B]">東京都渋谷区神宮前4-12-10</p>
                    <p className="text-[#6B6B6B]">表参道ヒルズ West 2F</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#2C2C2C] font-medium mb-1">営業時間</p>
                    <p className="text-[#6B6B6B]">平日 10:00 - 20:00</p>
                    <p className="text-[#6B6B6B]">土日祝 9:00 - 19:00</p>
                    <p className="text-[#8B7355] text-sm mt-2">毎週火曜日定休</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#2C2C2C] font-medium mb-1">電話番号</p>
                    <p className="text-[#6B6B6B]">03-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#2C2C2C] font-medium mb-1">メール</p>
                    <p className="text-[#6B6B6B]">info@atelier-salon.jp</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-[#E8E4DF] to-[#D4C5B5] rounded-lg flex items-center justify-center">
              <div className="text-center text-[#8B7355]/50">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-sm tracking-[0.2em]">MAP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 bg-[#8B7355]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] text-white/70 mb-4">RESERVATION</p>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-8">
            ご予約はこちら
          </h2>
          <p className="text-white/80 leading-relaxed mb-12">
            お電話またはオンラインにてご予約を承っております。
            <br />
            初めての方もお気軽にお問い合わせください。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:0312345678" className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#2C2C2C] text-sm tracking-[0.1em] hover:bg-[#2C2C2C] hover:text-white transition-all duration-300">
              <Phone className="w-5 h-5" />
              03-1234-5678
            </a>
            <button className="px-10 py-4 border-2 border-white text-white text-sm tracking-[0.1em] hover:bg-white hover:text-[#2C2C2C] transition-all duration-300">
              オンライン予約
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <Scissors className="w-5 h-5 text-[#8B7355]" />
              <span className="text-xl font-light tracking-[0.2em] text-white">ATELIER</span>
            </div>

            <div className="flex items-center gap-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <span className="text-sm text-white/40">|</span>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">特定商取引法に基づく表記</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/40">© 2025 ATELIER Hair Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
