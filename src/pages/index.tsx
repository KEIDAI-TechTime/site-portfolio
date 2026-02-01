import { Link } from 'react-router-dom';
import { Scissors, Coffee, Building2, Dumbbell, Stethoscope, Scale, ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
  status: 'live' | 'coming';
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'salon',
    title: 'ATELIER',
    category: '美容室・ヘアサロン',
    description: 'モダンでエレガントな美容室LP。落ち着いたベージュとゴールドブラウンのカラーパレット。',
    icon: <Scissors className="w-8 h-8" />,
    path: '/salon',
    color: 'from-[#8B7355] to-[#6B5344]',
    status: 'live',
  },
  {
    id: 'cafe',
    title: 'Coming Soon',
    category: 'カフェ・レストラン',
    description: '温かみのあるカフェのLP。ナチュラルでオーガニックな雰囲気。',
    icon: <Coffee className="w-8 h-8" />,
    path: '/cafe',
    color: 'from-[#6B8E23] to-[#556B2F]',
    status: 'coming',
  },
  {
    id: 'realestate',
    title: 'Coming Soon',
    category: '不動産・建築',
    description: '洗練された不動産会社のLP。信頼感と高級感を演出。',
    icon: <Building2 className="w-8 h-8" />,
    path: '/realestate',
    color: 'from-[#2C3E50] to-[#1A252F]',
    status: 'coming',
  },
  {
    id: 'fitness',
    title: 'Coming Soon',
    category: 'フィットネス・ジム',
    description: 'エネルギッシュなフィットネスジムのLP。動的でパワフルなデザイン。',
    icon: <Dumbbell className="w-8 h-8" />,
    path: '/fitness',
    color: 'from-[#E74C3C] to-[#C0392B]',
    status: 'coming',
  },
  {
    id: 'clinic',
    title: 'Coming Soon',
    category: 'クリニック・医療',
    description: '清潔感のあるクリニックのLP。安心感と専門性を表現。',
    icon: <Stethoscope className="w-8 h-8" />,
    path: '/clinic',
    color: 'from-[#3498DB] to-[#2980B9]',
    status: 'coming',
  },
  {
    id: 'law',
    title: 'Coming Soon',
    category: '法律事務所',
    description: '信頼性の高い法律事務所のLP。プロフェッショナルで落ち着いた印象。',
    icon: <Scale className="w-8 h-8" />,
    path: '/law',
    color: 'from-[#34495E] to-[#2C3E50]',
    status: 'coming',
  },
];

export default function PortfolioIndex() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-400 rounded-lg flex items-center justify-center">
              <span className="text-[#0A0A0A] font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-light tracking-wider">PORTFOLIO</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#works" className="text-sm text-gray-400 hover:text-white transition-colors">WORKS</a>
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">ABOUT</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-6">WEB DESIGN PORTFOLIO</p>
          <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
            業種別
            <br />
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              LPデザイン集
            </span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
            様々な業種に対応したランディングページのデザインを
            <br className="hidden sm:block" />
            ポートフォリオとして公開しています。
          </p>
          <a
            href="#works"
            className="inline-block px-10 py-4 bg-white text-[#0A0A0A] text-sm tracking-[0.1em] font-medium hover:bg-gray-200 transition-colors"
          >
            VIEW WORKS
          </a>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">WORKS</p>
            <h2 className="text-4xl lg:text-5xl font-light">制作実績</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group relative">
                {item.status === 'live' ? (
                  <Link to={item.path} className="block">
                    <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} rounded-xl overflow-hidden relative`}>
                      <div className="absolute inset-0 flex items-center justify-center text-white/80">
                        {item.icon}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                      <h3 className="text-xl font-light text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="cursor-not-allowed opacity-50">
                    <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} rounded-xl overflow-hidden relative`}>
                      <div className="absolute inset-0 flex items-center justify-center text-white/80">
                        {item.icon}
                      </div>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-sm tracking-[0.1em] bg-black/50 px-4 py-2 rounded">COMING SOON</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                      <h3 className="text-xl font-light text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">ABOUT</p>
          <h2 className="text-4xl lg:text-5xl font-light mb-12">このポートフォリオについて</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            このサイトは、様々な業種に対応したWebデザインの制作実績を
            <br className="hidden sm:block" />
            ポートフォリオとして公開しています。
            <br className="hidden sm:block" />
            各LPは実際に動作するデモページとしてご覧いただけます。
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] text-gray-500 mb-4">CONTACT</p>
          <h2 className="text-4xl lg:text-5xl font-light mb-12">お問い合わせ</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-12">
            制作のご依頼・ご相談はお気軽にお問い合わせください。
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block px-10 py-4 border border-white text-white text-sm tracking-[0.1em] hover:bg-white hover:text-[#0A0A0A] transition-colors"
          >
            CONTACT US
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500">© 2025 Web Design Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
