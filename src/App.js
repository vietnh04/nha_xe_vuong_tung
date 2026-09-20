import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Animation wrapper component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt="Nhà Xe Minh Khôi" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-navy">Nhà Xe Minh Khôi</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-navy font-medium transition">Trang chủ</a>
            <a href="#services" className="text-gray-700 hover:text-navy font-medium transition">Dịch vụ</a>
            <a href="#pricing" className="text-gray-700 hover:text-navy font-medium transition">Bảng giá</a>
            <a href="#contact" className="text-gray-700 hover:text-navy font-medium transition">Liên hệ</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="tel:0942193389" className="bg-accent-red text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition shadow-lg">
              Liên Hệ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-navy font-medium">Trang chủ</a>
              <a href="#services" className="text-gray-700 hover:text-navy font-medium">Dịch vụ</a>
              <a href="#pricing" className="text-gray-700 hover:text-navy font-medium">Bảng giá</a>
              <a href="#contact" className="text-gray-700 hover:text-navy font-medium">Liên hệ</a>
              <a href="tel:0942193389" className="bg-accent-red text-white px-6 py-3 rounded-full font-semibold text-center">
                Liên Hệ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  const priceList = [
    { route: "Hà Nội ⇄ Giao Thủy", price: "250.000" },
    { route: "Hà Nội ⇄ Xuân Trường", price: "250.000" },
    { route: "Hà Nội ⇄ Trực Ninh", price: "250.000" },
    { route: "Hà Nội ⇄ Nam Trực", price: "250.000" },
    { route: "Hà Nội ⇄ TP Nam Định", price: "250.000" },
    { route: "Sân bay Nội Bài ⇄ Nam Định", price: "450.000" },
    { route: "Hà Nội ⇄ Nam Định (Bao xe 5 chỗ)", price: "900.000" },
    { route: "Hà Nội ⇄ Nam Định (Bao xe 7 chỗ)", price: "1.100.000" },
  ];

  return (
    <section id="home" className="relative pt-20 pb-16 lg:pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/xe.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Light gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-indigo-100/85"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-accent-red/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-40 right-20 w-20 h-20 border-2 border-white/20 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-40 left-40 w-16 h-16 border-2 border-accent-orange/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border-2 border-accent-red/30 px-5 py-2.5 rounded-full shadow-xl">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-red"></span>
                </span>
                <span className="text-sm font-bold text-navy">DỊCH VỤ VẬN CHUYỂN CAO CẤP</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black mb-4 leading-tight">
                <span className="text-navy">
                  Bảng Giá
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent-red via-accent-orange to-yellow-500 bg-clip-text text-transparent">
                  Tuyến Xe
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-accent-red to-accent-orange rounded-full"></div>
                <span className="text-lg font-bold text-navy">Nam Định – Hà Nội</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed animate-fade-in-up max-w-xl font-medium" style={{ animationDelay: '0.2s' }}>
              Dịch vụ xe ghép, xe riêng và đón tiễn sân bay với mức giá minh bạch, 
              tài xế chuyên nghiệp, xe đời mới, phục vụ đúng giờ.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-navy/10 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-red to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-navy font-bold">Đúng Giờ</div>
                  <div className="text-gray-600 text-sm">Cam kết 100%</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-navy/10 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-orange to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-black font-bold">An Toàn</div>
                  <div className="text-gray-600 text-sm">Xe đời mới</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a 
                href="tel:0942193389" 
                className="group relative bg-gradient-to-r from-accent-red to-red-600 text-white px-4 py-4 rounded-2xl font-bold text-base shadow-2xl flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-accent-red/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="relative z-10">Gọi Ngay: 0942193389</span>
              </a>
              
              <a 
                href="https://zalo.me/0942193389" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-blue-500 hover:bg-blue-600 text-white px-4 py-4 rounded-2xl font-bold text-base transition-all duration-300 shadow-xl flex items-center justify-center gap-2 hover:scale-105"
              >
                <img 
                  src="/images/zalo_logo.png" 
                  alt="Zalo" 
                  className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0"
                />
                <span>Zalo Tư Vấn</span>
              </a>
            </div>
          </div>

          {/* Right Content - Modern Price Card */}
          <div className="relative animate-fade-in-right">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-red/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-orange/20 rounded-full blur-2xl"></div>
            
            {/* Main Card */}
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
              {/* Card Header with Gradient */}
              <div className="bg-gradient-to-r from-navy via-navy-dark to-navy-light p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Bảng Giá Tuyến Xe</h3>
                    <p className="text-gray-300 text-sm">Cập nhật mới nhất</p>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent-red blur-lg opacity-50 animate-pulse"></div>
                    <span className="relative bg-gradient-to-r from-accent-red to-accent-orange text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      HOT
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 lg:p-8">
                <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                  {priceList.map((item, index) => (
                    <div 
                      key={index} 
                      className="group flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white hover:from-navy/5 hover:to-navy/10 rounded-xl transition-all duration-300 border border-transparent hover:border-navy/20 hover:shadow-md animate-fade-in-up"
                      style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-gradient-to-br from-navy to-navy-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-800 font-medium group-hover:text-navy transition-colors">{item.route}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-accent-red font-bold text-xl group-hover:scale-110 transition-transform">{item.price}</span>
                        <span className="text-gray-500 font-semibold">đ</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      <span className="font-semibold">Lưu ý:</span> Giá có thể thay đổi vào ngày lễ, Tết. 
                      Vui lòng liên hệ để được báo giá chính xác.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection delay={0}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/xe_ghep.jpg" 
                  alt="Dịch vụ xe ghép cao cấp - Nhà Xe Minh Khôi" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={200}>
            <div>
              <div className="inline-block bg-navy/5 px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold text-navy">VỀ CHÚNG TÔI</span>
              </div>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-navy mb-6 leading-tight">
                Kiến Tạo Chuẩn Mực<br />Di Chuyển Mới
              </h2>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Chúng tôi tự hào mang đến dịch vụ xe ghép và xe riêng cao cấp, 
                kết nối Hà Nội - Nam Định một cách nhanh chóng và an toàn.
              </p>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Đội ngũ tài xế chuyên nghiệp, xe đời mới được bảo dưỡng định kỳ, 
                cam kết đúng giờ và phục vụ tận tâm là những giá trị cốt lõi 
                mà chúng tôi luôn hướng tới.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-navy/10 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Uy Tín Hàng Đầu</h4>
                    <p className="text-gray-600 text-sm">Được hàng nghìn khách hàng tin tưởng</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-navy/10 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Đội Ngũ Chuyên Nghiệp</h4>
                    <p className="text-gray-600 text-sm">Tài xế giàu kinh nghiệm, thân thiện</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

// Fleet Section - Đội Xe
const FleetSection = () => {
  const carImages = [
    { src: "/images/xe1.jpg", alt: "Xe cao cấp 1" },
    { src: "/images/xe2.jpg", alt: "Xe cao cấp 2" },
    { src: "/images/xe3.jpg", alt: "Xe cao cấp 3" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/5 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-navy">ĐỘI XE CỦA CHÚNG TÔI</span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-navy mb-4">
              Đội Xe Cao Cấp
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Xe đời mới, sạch sẽ, được bảo dưỡng định kỳ, đảm bảo an toàn tuyệt đối
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {carImages.map((car, index) => (
            <AnimatedSection key={index} delay={100 + index * 100}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={car.src} 
                    alt={car.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Xe đời mới, chất lượng cao</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Core Values Section
const CoreValuesSection = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      title: "Tài Xế Chuyên Nghiệp",
      description: "Đội ngũ lái xe giàu kinh nghiệm, được đào tạo bài bản, thân thiện và nhiệt tình"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      title: "Xe Đời Mới 100%",
      description: "Dòng xe cao cấp, đời mới, được bảo dưỡng định kỳ, đảm bảo an toàn tuyệt đối"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Đúng Giờ Tuyệt Đối",
      description: "Cam kết đón đúng giờ, hành trình đúng lịch trình, không để khách hàng chờ đợi"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Hỗ Trợ Nhanh Chóng",
      description: "Tư vấn 24/7, giải đáp mọi thắc mắc, hỗ trợ đặt xe nhanh chóng và tiện lợi"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/5 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-navy">GIÁ TRỊ CỐT LÕI</span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-navy mb-4">
              Tại Sao Chọn Chúng Tôi
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm di chuyển tốt nhất với những giá trị cốt lõi
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="bg-navy/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

// Commitment Section
const CommitmentSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-3xl">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                Không Bắt Khách Dọc Đường
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Ưu tiên sự riêng tư, thoải mái và hành trình ổn định cho khách hàng. 
                Chúng tôi cam kết không nhận thêm khách trong suốt hành trình, 
                đảm bảo trải nghiệm di chuyển tốt nhất cho bạn.
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="bg-accent-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl whitespace-nowrap hover:scale-105 transition-transform duration-300">
                Cam Kết Vàng
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Detailed Pricing Section
const DetailedPricingSection = () => {
  const pricingData = [
    { route: "Hà Nội ⇄ Giao Thủy", price: "250.000", type: "Xe ghép" },
    { route: "Hà Nội ⇄ Xuân Trường", price: "250.000", type: "Xe ghép" },
    { route: "Hà Nội ⇄ Trực Ninh", price: "250.000", type: "Xe ghép" },
    { route: "Hà Nội ⇄ Nam Trực", price: "250.000", type: "Xe ghép" },
    { route: "Hà Nội ⇄ TP Nam Định", price: "250.000", type: "Xe ghép" },
    { route: "Sân bay Nội Bài ⇄ Nam Định", price: "450.000", type: "Xe ghép" },
    { route: "Hà Nội ⇄ Nam Định (Bao xe 5 chỗ)", price: "900.000", type: "Xe riêng" },
    { route: "Hà Nội ⇄ Nam Định (Bao xe 7 chỗ)", price: "1.100.000", type: "Xe riêng" },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-block bg-navy/5 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold text-navy">BẢNG GIÁ CHI TIẾT</span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-navy mb-4">
              Bảng Giá Tuyến Xe
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Giá cả minh bạch, rõ ràng cho mọi tuyến đường. Liên hệ ngay để được tư vấn và đặt xe
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          {/* Pricing Table */}
          <AnimatedSection delay={200}>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Table Header */}
              <div className="bg-navy text-white px-8 py-6">
                <div className="grid grid-cols-3 gap-4 font-bold text-lg">
                  <div>Tuyến Đường</div>
                  <div className="text-center">Loại Xe</div>
                  <div className="text-right">Giá Tiền</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-100">
                {pricingData.map((item, index) => (
                  <div 
                    key={index} 
                    className="px-8 py-5 hover:bg-gray-50 transition-colors duration-200 animate-fade-in-up"
                    style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                  >
                    <div className="grid grid-cols-3 gap-4 items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-800 font-medium">{item.route}</span>
                      </div>
                      <div className="text-center">
                        <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                          item.type === 'Xe riêng' 
                            ? 'bg-accent-orange/10 text-accent-orange' 
                            : 'bg-navy/10 text-navy'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-accent-red font-bold text-xl">{item.price}đ</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Footer */}
              <div className="bg-gray-50 px-8 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent-red flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-600 text-sm italic">
                      (*) Giá có thể thay đổi vào ngày lễ, Tết. Vui lòng liên hệ để được báo giá chính xác và đặt chỗ trước.
                    </p>
                  </div>
                  <a 
                    href="tel:0942193389" 
                    className="bg-accent-red text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:scale-105 whitespace-nowrap"
                  >
                    Đặt Xe Ngay
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <AnimatedSection delay={400}>
              <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Đặt Xe Nhanh</h3>
                <p className="text-gray-200 text-sm">Gọi ngay 0942 193 389 để đặt xe và nhận ưu đãi</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="bg-gradient-to-br from-accent-red to-red-600 text-white rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Đúng Giờ</h3>
                <p className="text-gray-100 text-sm">Cam kết đón đúng giờ, không để khách chờ đợi</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="bg-gradient-to-br from-accent-orange to-orange-600 text-white rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">An Toàn</h3>
                <p className="text-gray-100 text-sm">Xe đời mới, bảo hiểm đầy đủ, tài xế chuyên nghiệp</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial Section
const TestimonialSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 bg-accent-red rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8 leading-tight">
              Cam Kết Về Sự Hài Lòng
            </h2>

            <p className="text-lg lg:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              "Tại Nhà Xe Minh Khôi, chúng tôi không đo lường thành công bằng số chuyến đi, mà 
              bằng nụ cười và sự an tâm của bạn khi xuống xe. Mỗi phản hồi của khách hàng đều 
              được chúng tôi lắng nghe và xử lý với tinh thần trách nhiệm cao nhất."
            </p>

            <div className="text-center">
              <div className="text-white font-bold text-xl mb-1">Giám Đốc Điều Hành</div>
              <div className="text-gray-400">Nhà Xe Minh Khôi</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="Nhà Xe Minh Khôi" 
                className="h-12 w-auto object-contain"
              />
              <h3 className="text-2xl font-bold">Nhà Xe Minh Khôi</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Dịch vụ xe ghép và xe riêng cao cấp, kết nối Hà Nội - Nam Định
            </p>
            <div className="flex gap-4">
              <a 
                href="tel:0942193389" 
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-red transition-all duration-300 group" 
                aria-label="Gọi điện thoại"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a 
                href="https://zalo.me/0942193389" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 group" 
                aria-label="Zalo"
              >
                <img 
                  src="/images/zalo_logo.png" 
                  alt="Zalo" 
                  className="w-6 h-6 group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liên Hệ</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Hotline: 0942 193 389</span>
              </li>
              
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Văn phòng: Hà Nội & Nam Định</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-4">Khu Vực Phục Vụ</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Hà Nội</li>
              <li>• Nam Định</li>
              <li>• Giao Thủy</li>
              <li>• Xuân Trường</li>
              <li>• Trực Ninh</li>
              <li>• Sân bay Nội Bài</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-accent-red transition">Trang chủ</a></li>
              <li><a href="#services" className="hover:text-accent-red transition">Dịch vụ</a></li>
              <li><a href="#pricing" className="hover:text-accent-red transition">Bảng giá</a></li>
              <li><a href="#contact" className="hover:text-accent-red transition">Liên hệ</a></li>
            </ul>
          </div>
        </div>

      
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <FleetSection />
      <CoreValuesSection />
      <CommitmentSection />
      <DetailedPricingSection />
      <TestimonialSection />
      <Footer />
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Zalo Button */}
        <a
          href="https://zalo.me/0942193389"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce"
          style={{ animationDuration: '3s' }}
          aria-label="Chat Zalo"
        >
          <img 
            src="/images/zalo_logo.png" 
            alt="Zalo" 
            className="w-8 h-8"
          />
          <span className="absolute right-full mr-3 bg-navy text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
            Chat Zalo
          </span>
        </a>

        {/* Phone Button */}
        <a
          href="tel:0942193389"
          className="group relative w-14 h-14 bg-gradient-to-br from-accent-red to-red-600 hover:from-red-600 hover:to-accent-red rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
          style={{ animationDuration: '2s' }}
          aria-label="Gọi điện"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="absolute right-full mr-3 bg-navy text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
            0942 193 389
          </span>
        </a>
      </div>
    </div>
  );
}
