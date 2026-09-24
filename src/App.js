import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const transforms = {
    up: inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
    left: inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
    right: inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
    fade: inView ? 'opacity-100' : 'opacity-0',
  };
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${transforms[direction]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const GoldDivider = ({ center = false }) => (
  <div className={`flex items-center gap-3 my-4 ${center ? 'justify-center' : ''}`}>
    <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-500"></div>
    <div className="w-2 h-2 rounded-full bg-amber-500 rotate-45"></div>
    <div className="h-px w-16 bg-gradient-to-r from-amber-500 to-amber-300"></div>
    <div className="w-2 h-2 rounded-full bg-amber-500 rotate-45"></div>
    <div className="h-px w-8 bg-gradient-to-r from-amber-500 to-transparent"></div>
  </div>
);

const PHONE = "0914593136";
const PHONE_DISPLAY = "0914 593 136";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Trang chủ' },
    { href: '#fleet', label: 'Đội xe' },
    { href: '#services', label: 'Dịch vụ' },
    { href: '#standards', label: 'Tiêu chuẩn vàng' },
    { href: '#pricing', label: 'Bảng giá' },
    { href: '#contact', label: 'Liên hệ' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
    }`}>
      <div className="h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500"></div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
            </div>
            <div>
              <div className="text-slate-900 font-black text-xl tracking-tight leading-none group-hover:text-amber-600 transition-colors">VƯƠNG TÙNG</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-slate-700 hover:text-amber-600 font-semibold text-sm tracking-wide transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a 
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-amber-500/25 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>

          <button 
            className="lg:hidden text-slate-800 p-2 rounded-lg hover:bg-slate-100" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="border-t border-slate-200 pt-4 space-y-2">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-4 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a 
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 mt-3 bg-amber-500 text-white py-3 rounded-xl font-bold shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Gọi Ngay: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  const stats = [
    { value: "5+", label: "Năm kinh nghiệm" },
    { value: "10K+", label: "Lượt khách phục vụ" },
    { value: "24/7", label: "Phục vụ mọi thời điểm" },
    { value: "100%", label: "Cam kết đúng giờ" },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-50 pt-24 pb-16">
      {/* Background image.jpeg with 70% opacity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/image.jpeg" 
          alt="Nhà Xe Vương Tùng Background" 
          className="w-full h-full object-cover md:object-contain md:object-right opacity-70" 
        />
        {/* Soft gradient from left to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/85 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-amber-300 bg-amber-50/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-amber-800 text-xs font-bold tracking-wider uppercase">Dịch Vụ Vận Chuyển Cao Cấp</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
            Nhà Xe<br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Vương Tùng
            </span>
          </h1>

          <GoldDivider />

          <p className="text-slate-700 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl font-medium">
            Trải nghiệm hành trình <span className="text-amber-600 font-bold">đẳng cấp & tiện nghi</span> với 5 dòng xe đời mới:
            <strong className="text-slate-900"> VinFast VF6, VF7, VF8, VinFast Limo Green và Innova</strong>.
            Đón trả tận nơi tuyến Hà Nội ⇄ Nam Định, cam kết đúng giờ tuyệt đối, không bắt khách dọc đường.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a 
              href={`tel:${PHONE}`}
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-full font-black text-lg shadow-xl shadow-amber-500/30 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Gọi Ngay: {PHONE_DISPLAY}
            </a>
            <a 
              href={`https://zalo.me/${PHONE}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border-2 border-slate-300 hover:border-blue-500 text-slate-800 hover:text-blue-600 px-8 py-4 rounded-full font-bold text-lg bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <img src="/images/zalo_logo.png" alt="Zalo" className="w-5 h-5" />
              Zalo Tư Vấn
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="border border-slate-200/90 rounded-2xl p-4 bg-white/90 backdrop-blur-sm shadow-sm hover:border-amber-400 hover:shadow-md transition-all"
              >
                <div className="text-2xl lg:text-3xl font-black text-amber-600">{stat.value}</div>
                <div className="text-slate-600 text-xs sm:text-sm mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FleetSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const fleet = [
    {
      id: 0,
      name: "VinFast VF6",
      type: "SUV ĐIỆN 5 CHỖ",
      src: "/images/vf6.png",
      seats: "5 chỗ",
      fuel: "Điện 100%",
      features: ["Nội thất hiện đại, ghế da cao cấp", "Vận hành êm ái, không mùi say xe", "Điều hòa 2 chiều làm mát sâu", "Nhỏ gọn linh hoạt, cách âm tốt"],
      badge: "TIỆN NGHI",
      badgeColor: "from-cyan-500 to-blue-600",
    },
    {
      id: 1,
      name: "VinFast VF7",
      type: "SUV ĐIỆN THỂ THAO",
      src: "/images/vf7.png",
      seats: "5 chỗ",
      fuel: "Điện 100%",
      features: ["Thiết kế thể thao, nội thất sang trọng", "Khoang ngồi rộng rãi, ghế da êm ái", "Động cơ điện vận hành mượt mà", "Trang bị an toàn thông minh"],
      badge: "THỜI THƯỢNG",
      badgeColor: "from-purple-500 to-indigo-600",
    },
    {
      id: 2,
      name: "VinFast VF8",
      type: "XE ĐIỆN CAO CẤP",
      src: "/images/vf8.png",
      seats: "5 chỗ",
      fuel: "Điện 100%",
      features: ["Nội thất da sang trọng", "Điều hòa 2 chiều êm ái", "Vận hành không tiếng ồn", "An toàn tiêu chuẩn 5 sao"],
      badge: "MỚI NHẤT",
      badgeColor: "from-emerald-500 to-green-600",
    },
    {
      id: 3,
      name: "VinFast Limo Green",
      type: "MPV ĐIỆN 7 CHỖ VIP",
      src: "/images/limo_green.png",
      seats: "7 chỗ",
      fuel: "Điện 100%",
      features: ["Nội thất 7 chỗ da cao cấp", "Dẫn động thuần điện êm ái", "Sạc nhanh, tầm hoạt động 470km", "Cổng sạc, Wifi & nước mát"],
      badge: "MỚI & HIỆN ĐẠI",
      badgeColor: "from-emerald-500 to-teal-600",
    },
    {
      id: 4,
      name: "Toyota Innova",
      type: "XE GIA ĐÌNH",
      src: "/images/innova.png",
      seats: "7 chỗ",
      fuel: "Xăng / Dầu",
      features: ["Khoang ngồi cực rộng rãi", "Cốp chứa nhiều vali hành lý", "Vận hành êm ái chặng dài", "Phù hợp cả gia đình & nhóm"],
      badge: "TIẾT KIỆM",
      badgeColor: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <section id="fleet" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-amber-300 bg-amber-50 px-4 py-1.5 rounded-full mb-4">
            <span className="text-amber-800 text-xs font-bold tracking-wider uppercase">Đội Xe Của Chúng Tôi</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Chọn <span className="text-amber-600">Dòng Xe</span> Phù Hợp
          </h2>
          <GoldDivider center={true} />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            5 dòng xe đời mới, sạch sẽ tuyệt đối, được bảo dưỡng định kỳ và kiểm tra kỹ lưỡng trước mỗi chuyến đi
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {fleet.map((car, index) => {
            const gridClass = index < 3 
              ? "lg:col-span-2" 
              : index === 3 
                ? "lg:col-span-2 lg:col-start-2" 
                : "lg:col-span-2";
            const mdClass = index === 4 ? "md:col-span-2 md:max-w-md md:mx-auto lg:max-w-none lg:mx-0" : "";

            return (
              <AnimatedSection key={car.id} delay={index * 120} className={`${gridClass} ${mdClass}`}>
                <div
                  className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 bg-white h-full flex flex-col
                    ${activeCard === car.id
                      ? 'border-amber-400 shadow-2xl shadow-amber-500/15 scale-[1.02]'
                      : 'border-slate-200/90 shadow-lg hover:border-amber-300 hover:shadow-xl'
                    }`}
                  onMouseEnter={() => setActiveCard(car.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-white text-xs font-black tracking-wider bg-gradient-to-r ${car.badgeColor} shadow-md`}>
                    {car.badge}
                  </div>

                  <div className="relative h-60 overflow-hidden bg-slate-900">
                    <img 
                      src={car.src} 
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-xs font-bold text-white tracking-wider bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        {car.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{car.name}</h3>

                    <div className="flex gap-4 mb-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        {car.seats}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        {car.fuel}
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      {car.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Nút Liên hệ + SĐT ở dưới 5 dòng xe */}
        <AnimatedSection delay={200} className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-amber-50/80 border border-amber-200/80 px-8 py-5 rounded-3xl shadow-sm">
            <span className="text-slate-800 font-bold text-base sm:text-lg">
              Liên hệ đặt xe nhanh chóng 24/7:
            </span>
            <div className="flex items-center gap-3">
              <a 
                href={`tel:${PHONE}`}
                className="group flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-7 py-3.5 rounded-full font-black text-base sm:text-lg shadow-lg shadow-amber-500/25 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Liên Hệ: {PHONE_DISPLAY}</span>
              </a>
              <a 
                href={`https://zalo.me/${PHONE}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-5 py-3.5 rounded-full font-bold text-base shadow-sm hover:shadow transition-all duration-300 hover:scale-105"
              >
                <img src="/images/zalo_logo.png" alt="Zalo" className="w-5 h-5" />
                <span>Zalo</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      title: "Xe Ghép Tiện Chuyến",
      desc: "Chia sẻ chuyến đi, tiết kiệm chi phí, đưa đón tận nơi hai đầu Hà Nội & Nam Định.",
      highlight: "Chỉ từ 250.000đ/ghế",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: "Bao Xe Riêng Trọn Gói",
      desc: "Toàn quyền chủ động thời gian, lộ trình riêng tư tuyệt đối cho cá nhân và gia đình.",
      highlight: "Từ 900.000đ/chuyến",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      ),
      title: "Đưa Đón Sân Bay",
      desc: "Đón/tiễn sân bay Nội Bài đúng giờ bay, theo dõi hành trình máy bay không lo trễ giờ.",
      highlight: "Chỉ từ 450.000đ",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
      title: "Hợp Đồng Theo Yêu Cầu",
      desc: "Chuyến đi du lịch, sự kiện, cưới hỏi, lễ chùa, công tác liên tỉnh. Báo giá nhanh chóng.",
      highlight: "Tư vấn báo giá ngay",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-amber-300 bg-amber-50 px-4 py-1.5 rounded-full mb-4">
            <span className="text-amber-800 text-xs font-bold tracking-wider uppercase">Dịch Vụ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Dịch Vụ <span className="text-amber-600">Đa Dạng</span>
          </h2>
          <GoldDivider center={true} />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Giải pháp vận chuyển toàn diện, linh hoạt theo mọi nhu cầu cá nhân hay gia đình
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{svc.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-amber-600 font-bold text-sm">{svc.highlight}</span>
                  <a href={`tel:${PHONE}`} className="text-slate-400 hover:text-amber-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Tiêu Chuẩn Vàng (HOÀN TOÀN BỎ ẢNH) ──────────────────────────────────────────
const AboutSection = () => {
  const commitments = [
    {
      id: "01",
      title: "Không Bắt Khách Dọc Đường",
      desc: "Cam kết chỉ đón đúng khách đã đặt trước. Xe chạy xuyên suốt lộ trình, tuyệt đối không dừng đỗ chèo kéo hay nhồi nhét thêm khách giữa đường.",
      icon: (
        <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlight: "Ưu tiên số 1 cho sự thoải mái",
    },
    {
      id: "02",
      title: "Tài Xế Chuyên Nghiệp & Lịch Sự",
      desc: "Đội ngũ tài xế dày dặn kinh nghiệm tuyến Hà Nội – Nam Định, lái xe cẩn trọng, văn minh, nhiệt tình hỗ trợ hành lý cho khách.",
      icon: (
        <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      highlight: "Thân thiện · Tận tâm",
    },
    {
      id: "03",
      title: "Xe Đời Mới, Bảo Dưỡng Định Kỳ",
      desc: "Dàn xe VinFast VF6, VF7, VF8, VinFast Limo Green và Innova luôn trong tình trạng sạch sẽ, máy lạnh mát rượi, bảo dưỡng kỹ thuật nghiêm ngặt trước mỗi ngày chạy.",
      icon: (
        <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m5.083-2.413l3.03-2.496a2.67 2.67 0 00-3.774-3.774l-2.496 3.03" />
        </svg>
      ),
      highlight: "An toàn tuyệt đối 100%",
    },
    {
      id: "04",
      title: "Giá Niêm Yết, Minh Bạch Rõ Ràng",
      desc: "Giá cước công khai trước chuyến đi. Không phát sinh phụ phí ẩn, không phụ thu bất hợp lý, thanh toán linh hoạt bằng tiền mặt hoặc chuyển khoản.",
      icon: (
        <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      highlight: "Không phát sinh phụ phí",
    },
  ];

  return (
    <section id="standards" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-amber-300 bg-amber-50 px-4 py-1.5 rounded-full mb-4">
            <span className="text-amber-800 text-xs font-bold tracking-wider uppercase">Cam Kết Từ Vương Tùng</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Tiêu Chuẩn <span className="text-amber-600">Vàng</span> Trong Di Chuyển
          </h2>
          <GoldDivider center={true} />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Chúng tôi xây dựng uy tín bằng chính chất lượng dịch vụ thực tế và trải nghiệm hài lòng của từng hành khách
          </p>
        </AnimatedSection>

        {/* 4 Cards Grid - Không có ảnh */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {commitments.map((item, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-xl hover:bg-white transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-100/70 border border-amber-200 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-2xl font-black text-slate-300 group-hover:text-amber-400 transition-colors">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <span className="inline-block text-xs font-bold text-amber-700 bg-amber-100/60 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Guarantee Banner */}
        <AnimatedSection delay={300}>
          <div className="rounded-3xl p-8 lg:p-10 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-100/60 border border-amber-200 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-500/30">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Cần xe gấp hoặc đặt chuyến trước?</h4>
                <p className="text-slate-600 text-sm">Tổng đài viên luôn túc trực hỗ trợ sắp xếp xe nhanh nhất trong 15 phút.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a 
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
              <a 
                href={`https://zalo.me/${PHONE}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <img src="/images/zalo_logo.png" alt="Zalo" className="w-4 h-4" />
                Zalo 24/7
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const pricingData = [
    { route: "Hà Nội ⇄ TP Nam Định", price: "250.000", type: "Xe ghép" },
    { route: "Hà Nội ⇄ Giao Thủy", price: "250.000", type: "Xe ghép" },
    { route: "Hà Nội ⇄ Xuân Trường", price: "250.000", type: "Xe ghép" },
    { route: "Hà Nội ⇄ Trực Ninh", price: "250.000", type: "Xe ghép" },
    { route: "Sân bay Nội Bài ⇄ Nam Định", price: "450.000", type: "Sân bay" },
    { route: "Bao xe 5 chỗ (Hà Nội ⇄ Nam Định)", price: "900.000", type: "Xe riêng" },
    { route: "Bao xe 7 chỗ (Hà Nội ⇄ Nam Định)", price: "1.100.000", type: "Xe riêng" },
    { route: "Các chuyến khác / Tour du lịch", price: PHONE_DISPLAY, type: "Theo yêu cầu", isPhone: true },
  ];

  const typeStyles = {
    "Xe ghép": "text-blue-700 border-blue-200 bg-blue-50",
    "Xe riêng": "text-amber-800 border-amber-200 bg-amber-50",
    "Sân bay": "text-emerald-700 border-emerald-200 bg-emerald-50",
    "Theo yêu cầu": "text-purple-700 border-purple-200 bg-purple-50",
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-amber-300 bg-amber-50 px-4 py-1.5 rounded-full mb-4">
            <span className="text-amber-800 text-xs font-bold tracking-wider uppercase">Bảng Giá Niêm Yết</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Giá Cả <span className="text-amber-600">Minh Bạch</span>
          </h2>
          <GoldDivider center={true} />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Bảng giá rõ ràng, không phát sinh chi phí ẩn. Đón trả tận nơi tại Hà Nội & Nam Định
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={200}>
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
              <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-8 py-5">
                <div className="grid grid-cols-3 text-sm font-bold tracking-wider uppercase">
                  <div>Tuyến Đường</div>
                  <div className="text-center">Loại Hình</div>
                  <div className="text-right">Giá Cước</div>
                </div>
              </div>

              <div className="divide-y divide-slate-150">
                {pricingData.map((item, i) => (
                  <div key={i} className="px-6 sm:px-10 py-6 sm:py-6.5 hover:bg-amber-50/60 transition-colors duration-150">
                    <div className="grid grid-cols-3 gap-4 items-center">
                      <div className="flex items-center gap-3.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0 shadow-sm shadow-amber-500/40"></div>
                        <span className="text-slate-800 font-semibold text-sm sm:text-base leading-snug">{item.route}</span>
                      </div>
                      <div className="text-center">
                        <span className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-bold border ${typeStyles[item.type]}`}>
                          {item.type}
                        </span>
                      </div>
                      <div className="text-right">
                        {item.isPhone ? (
                          <a 
                            href={`tel:${PHONE}`} 
                            className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 font-bold text-sm sm:text-base"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            Gọi {item.price}
                          </a>
                        ) : (
                          <span className="text-slate-900 font-black text-base sm:text-lg">{item.price}<span className="text-amber-600 text-sm font-bold ml-0.5">đ</span></span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 border-t border-slate-200 px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-slate-500 text-xs sm:text-sm italic">
                  * Giá có thể điều chỉnh nhẹ vào dịp lễ, Tết. Vui lòng gọi trước để giữ chỗ tốt nhất.
                </p>
                <a 
                  href={`tel:${PHONE}`}
                  className="flex-shrink-0 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-7 py-2.5 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  Đặt Chỗ Ngay
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => (
  <section className="py-20 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 relative overflow-hidden text-slate-900">
    <div className="absolute inset-0 opacity-10"
      style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '30px 30px' }}>
    </div>
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-950 mb-4 tracking-tight">Sẵn Sàng Cho Chuyến Đi?</h2>
          <p className="text-slate-900/80 text-lg mb-8 font-medium">
            Liên hệ ngay với Nhà Xe Vương Tùng để được bố trí xe đời mới, đón trả đúng giờ tận nơi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 text-amber-400 px-10 py-4 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
            <a 
              href={`https://zalo.me/${PHONE}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 px-10 py-4 rounded-full font-bold text-lg shadow-md transition-all duration-300 hover:scale-105"
            >
              <img src="/images/zalo_logo.png" alt="Zalo" className="w-5 h-5" />
              Chat Zalo
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-black text-xl tracking-tight">NHÀ XE VƯƠNG TÙNG</div>
              <div className="text-amber-400 text-xs tracking-widest uppercase">Premium Transport</div>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
            Dịch vụ xe ghép, xe riêng, đưa đón sân bay cao cấp kết nối Hà Nội ⇄ Nam Định.
            Xe đời mới VinFast VF6, VF7, VF8, VinFast Limo Green và Innova, phục vụ 24/7.
          </p>
          <div className="flex gap-3">
            <a 
              href={`tel:${PHONE}`}
              className="w-10 h-10 rounded-full border border-amber-400/40 hover:border-amber-400 flex items-center justify-center text-amber-400 hover:bg-amber-400/10 transition-all duration-300"
              aria-label="Gọi điện"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            <a 
              href={`https://zalo.me/${PHONE}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-blue-400/40 hover:border-blue-400 flex items-center justify-center hover:bg-blue-400/10 transition-all duration-300"
              aria-label="Chat Zalo"
            >
              <img src="/images/zalo_logo.png" alt="Zalo" className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">Liên Hệ & Đặt Xe</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li>
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Hotline: <strong className="text-white">{PHONE_DISPLAY}</strong></span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Hà Nội ⇄ Nam Định (đưa đón tận nơi)</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Hoạt động liên tục 24/7 tất cả các ngày</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">Liên Kết</h4>
          <ul className="space-y-2.5 text-slate-400 text-sm">
            {[
              ['#home','Trang chủ'],
              ['#fleet','Đội xe'],
              ['#services','Dịch vụ'],
              ['#standards','Tiêu chuẩn vàng'],
              ['#pricing','Bảng giá'],
              ['#contact','Liên hệ']
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <p>© 2025 Nhà Xe Vương Tùng. Hotline: {PHONE_DISPLAY}</p>
        <p>Uy tín – Đúng giờ – Tiện nghi cao cấp</p>
      </div>
    </div>
  </footer>
);

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
    <a 
      href={`https://zalo.me/${PHONE}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg shadow-blue-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Chat Zalo"
    >
      <img src="/images/zalo_logo.png" alt="Zalo" className="w-7 h-7" />
      <span className="absolute right-full mr-3 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
        Chat Zalo
      </span>
    </a>
    <a 
      href={`tel:${PHONE}`}
      className="group relative w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-full shadow-xl shadow-amber-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
      style={{ animationDuration: '2.5s' }}
      aria-label="Gọi hotline"
    >
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
      <span className="absolute right-full mr-3 bg-slate-900 text-amber-400 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
        {PHONE_DISPLAY}
      </span>
    </a>
  </div>
);

export default function App() {
  return (
    <div className="App bg-slate-50 min-h-screen text-slate-900">
      <Header />
      <HeroSection />
      <FleetSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <CTABanner />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
