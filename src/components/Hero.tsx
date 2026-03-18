import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const slides = [
  {
    video: 'https://videos.pexels.com/video-files/4609281/4609281-uhd_2560_1440_25fps.mp4',
    poster: '/img3.webp',
    title: 'カーベイ株式会社',
    subtitle: '儲かる車屋をみんなの手に。'
  },
  {
    video: 'https://videos.pexels.com/video-files/5359531/5359531-uhd_2560_1440_25fps.mp4',
    poster: '/img1.webp',
    title: '自動車業界のDX革命',
    subtitle: '在庫管理から販売まで、すべてをデジタル化'
  },
  {
    video: 'https://videos.pexels.com/video-files/6894128/6894128-uhd_2560_1440_24fps.mp4',
    poster: '/img2.webp',
    title: 'E-Flow で業務効率化',
    subtitle: '中古車販売の未来を創造するプラットフォーム'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
            poster={slide.poster}
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(1.1) contrast(1.05)'
            }}
          >
            <source src={slide.video} type="video/mp4" />
          </video>

          {/* Dark Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(10,15,25,0.45) 0%, rgba(10,15,25,0.35) 50%, rgba(10,15,25,0.45) 100%)'
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
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-10 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
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
