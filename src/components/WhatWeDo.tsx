import React from 'react';
import { BarChart3 } from 'lucide-react';

const WhatWeDo: React.FC = () => {

  return (
    <section id="what-we-do" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center mb-16" style={{marginBottom:"8rem"}}>
     
     <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QOnYdgb9kp4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy">
      </iframe>
     
    </div>
        <div className="text-center mb-16">
          <p className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-widest" aria-hidden="true">
            WHAT WE DO
          </p>
          <h2 className="text-2xl text-gray-900 font-semibold">
            Carbeyの事業 — 中古車自動売買システム・フランチャイズ
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              最新テクノロジーで中古車売買を<br />
              もっと簡単に。
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Carbeyは自社開発のデータ分析×自動売買システムを掛け合わせたフランチャイズシステムによって、誰でも中古車販売事業に参画できる仕組みを提供しています。
            </p>
          </div>

          {/* Right Icon Area */}
          <div className="flex justify-center items-center">
            <div className="w-80 h-48 border-2 border-gray-400 rounded-lg flex items-center justify-center bg-white">
              <div className="text-center w-[70%]">
                {/* <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" /> */}
                <img src='./image-1.png' alt="Chart" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;