import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Text Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/img4.webp")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-slate-800/80 to-gray-900/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            カーベイ株式会社
          </h1>
          <p className="text-2xl mb-4 text-blue-100">
            儲かる車屋をみんなの手に。
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Scroll Indicator - positioned after video */}
      <div className="bg-gradient-to-b from-cyan-50 to-white py-8">
        <div
          className="mx-auto w-fit text-gray-400 animate-bounce cursor-pointer"
          onClick={() => {
            const nextSection = document.querySelector('#what-we-do');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label="下にスクロール"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              const nextSection = document.querySelector('#what-we-do');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
        >
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>

      {/* Reduced Motion Support */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-bounce {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;