import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0d1b2e 0%, #1F2F4D 45%, #162340 100%)',
        }}
      />

      {/* Red geometric accent */}
      <div
        className="absolute z-0"
        style={{
          top: '-10%',
          right: '-5%',
          width: '55%',
          height: '110%',
          background: 'linear-gradient(145deg, #c0392b 0%, #e74c3c 50%, #c0392b 100%)',
          clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
          opacity: 0.92,
        }}
      />

      {/* Secondary accent stripe */}
      <div
        className="absolute z-0"
        style={{
          top: '0',
          right: '44%',
          width: '4px',
          height: '100%',
          background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)',
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Dark vignette on red side */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, transparent 30%, rgba(0,0,0,0.25) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-0">

          {/* Left: Text block */}
          <div className="flex-1 text-white space-y-8 lg:pr-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span
                className="inline-block h-px w-12 bg-red-400"
              />
              <span
                className="text-red-300 text-sm font-semibold tracking-widest uppercase"
                style={{ fontFamily: '"Noto Sans JP", sans-serif', letterSpacing: '0.2em' }}
              >
                Carbay Inc.
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="font-black leading-tight"
              style={{
                fontFamily: '"Noto Sans JP", sans-serif',
                fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              儲かる車屋を<br />
              <span className="text-red-400">みんなの手に。</span>
            </h1>

            {/* Sub copy */}
            <p
              className="text-white/75 leading-relaxed max-w-lg"
              style={{
                fontFamily: '"Noto Sans JP", sans-serif',
                fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                fontWeight: 400,
                lineHeight: 1.9,
              }}
            >
              自動車業界のDX革命を牽引する<br />
              カーベイ株式会社のE-Flowで、<br />
              在庫管理から販売まですべてを変える。
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center justify-center gap-2 bg-white text-[#1F2F4D] px-8 py-4 rounded-lg font-bold text-base hover:bg-red-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
              >
                お問い合わせ
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-base hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
              >
                サービスを見る
              </button>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <div
              className="relative"
              style={{ width: 'clamp(260px, 35vw, 460px)' }}
            >
              {/* Card background */}
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                <img
                  src="/miura_1200.png"
                  alt="ACCEL JAPAN アンバサダー 三浦翔平"
                  className="w-full object-cover"
                  style={{ aspectRatio: '3/2' }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -left-5 bg-white rounded-xl px-5 py-3 shadow-2xl"
                style={{ minWidth: '160px' }}
              >
                <p
                  className="text-xs text-gray-500 font-medium"
                  style={{ fontFamily: '"Noto Sans JP", sans-serif', letterSpacing: '0.05em' }}
                >
                  アンバサダー
                </p>
                <p
                  className="text-[#1F2F4D] font-bold text-base"
                  style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
                >
                  三浦 翔平
                </p>
              </div>

              {/* Decorative ring */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-4 border-red-400/30"
              />
              <div
                className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-red-500/20"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-200 animate-bounce z-20"
        aria-label="下にスクロール"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
