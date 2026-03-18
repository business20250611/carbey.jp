import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const slides = [
  {
    video: 'https://media.istockphoto.com/id/2188642564/video/a-car-salesman-recommends-a-campaign-promotion-to-customers-on-installments-and-titles-with.jpg?b=1&s=640x640&k=20&c=u-Qz-dsD0NwPckPO8PhN01pySXRX4RLgNlCIWR5bOQQ=',
    title: 'カーベイ株式会社',
    subtitle: '儲かる車屋をみんなの手に。'
  },
  {
    video: 'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
    title: '自動車業界のDX革命',
    subtitle: '在庫管理から販売まで、すべてをデジタル化'
  },
  {
    video:'https://media.istockphoto.com/id/2227383425/ja/%E3%83%93%E3%83%87%E3%82%AA/%E8%8B%A5%E3%81%84%E3%82%A2%E3%82%B8%E3%82%A2%E4%BA%BA%E5%A5%B3%E6%80%A7%E3%81%A8%E4%BF%9D%E9%99%BA%E4%BB%A3%E7%90%86%E5%BA%97%E3%81%8C%E8%BB%8A%E3%81%AE%E6%90%8D%E5%82%B7%E3%81%A8%E8%AB%8B%E6%B1%82%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E8%A9%B1%E3%81%97%E5%90%88%E3%81%86%E4%BA%8B%E6%95%85%E7%8F%BE%E5%A0%B4%E3%81%A7%E8%87%AA%E5%8B%95%E8%BB%8A%E4%BF%9D%E9%99%BA%E9%87%91%E8%AB%8B%E6%B1%82%E6%9B%B8%E3%81%AB%E7%BD%B2%E5%90%8D%E3%81%97%E7%94%B7%E6%80%A7%E6%8D%9C%E6%9F%BB%E5%AE%98%E3%81%A8%E6%8F%A1%E6%89%8B%E3%81%99%E3%82%8B%E8%8B%A5%E3%81%84%E5%A5%B3%E6%80%A7.mp4?s=mp4-640x640-is&k=20&c=qVlNIC2CKUPU7exBSg07u5J1i_IZoQFlpyklYxgBHv0=',
    title: 'E-Flow で業務効率化',
    subtitle: '中古車販売の未来を創造するプラットフォーム'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 75) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    if (touchEndX.current - touchStartX.current > 75) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Video Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.95) contrast(1.1) saturate(1.05)'
            }}
          >
            <source src={slide.video} type="video/mp4" />
          </video>

          {/* Cinematic Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%)'
            }}
          ></div>
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 lg:space-y-12">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0 flex flex-col items-center justify-center'
              }`}
            >
              {/* Main Heading */}
              <h1
                className="font-bold leading-tight tracking-tight"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: 700,
                  letterSpacing: '-0.02em'
                }}
              >
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p
                className="font-medium leading-relaxed max-w-3xl mx-auto mt-8 lg:mt-12"
                style={{
                  fontSize: 'clamp(1.25rem, 4vw, 2rem)',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.01em'
                }}
              >
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Status Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 ease-out rounded-full backdrop-blur-sm ${
              index === currentSlide
                ? 'w-12 h-3 bg-white shadow-lg shadow-white/30'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60 hover:scale-125'
            }`}
            aria-label={`スライド ${index + 1} に移動`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce cursor-pointer z-20"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
        aria-label="下にスクロール"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }
        }}
      >
        <ChevronDown className="h-8 w-8" />
      </div>

      {/* Reduced Motion Support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          video {
            display: none;
          }
          .animate-bounce {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
