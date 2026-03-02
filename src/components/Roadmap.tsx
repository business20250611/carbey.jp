import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, Calculator, Rocket, TrendingUp, Users, UserRound, Star, Globe } from "lucide-react";

const phases = [
  { range: "2022年12月 - 2024年11月", title: "Phase 0：企画立案・準備期間", desc: "データ分析構築、自動売買スキーム構築、フランチャイズ収益基盤設計。法務・資金調達・市場調査などインフラ整備。", icon: <Lightbulb className="w-6 h-6" /> },
  { range: "2024年12月 - 2025年6月",  title: "Phase 1：システム基盤構築",   desc: "自動売買システムとCRMシステム等管理システム構築。自動売買システム実証テストを完成させ収益黒字化を確認。ローンチへ。", icon: <Calculator className="w-6 h-6" /> },
  { range: "2025年7月 - 12月",        title: "Phase 2：第1次募集",         desc: "先行30名を対象に実導入・データ収集と検証。先行者特典あり。", icon: <Rocket className="w-6 h-6" /> },
  { range: "2026年1月 - 2027年12月",  title: "Phase 3：第2次募集",         desc: "全国規模で200名まで拡大。収益構造の安定化加盟者支援体制の拡充、ブランド強化。", icon: <TrendingUp className="w-6 h-6" /> },
  { range: "2028年1月 - 2029年12月",  title: "Phase 4：第3次募集",         desc: "全国規模で新規500名募集。IPO準備体制も構築。", icon: <Users className="w-6 h-6" /> },
  { range: "2030年1月 - 2031年12月",  title: "Phase 5：上場準備",         desc: "東証グロース市場の監査・審査対応。", icon: <UserRound className="w-6 h-6" /> },
  { range: "2032年1月 - 2033年12月",  title: "Phase 6：上場・グローバル展開準備", desc: "上場後のメディア露出、ブランド最大化構想の実施、グローバル展開準備。", icon: <Star className="w-6 h-6" /> },
  { range: "2034年以降",              title: "Phase 7：海外グローバル展開", desc: "中東市場での展開、国際特許取得。世界越境型FCモデル展開。", icon: <Globe className="w-6 h-6" /> },
];

export default function Roadmap() {
  const scroller = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0); // 0-100

  // 初期スクロール位置を設定（現在のフェーズが見えるように）
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    
    // Phase 2（現在のフェーズ）が中心に見えるように調整
    // カード幅340px + gap 24px = 364px per card
    // Phase 1の半分くらいが見えるように調整
    const initialScrollPosition = 364 * 0.7; // Phase 1の70%程度をスクロール
    
    setTimeout(() => {
      el.scrollTo({ left: initialScrollPosition, behavior: 'smooth' });
    }, 100);
  }, []);

  // スクロール位置に応じて矢印のON/OFF切り替え
  const update = () => {
    const el = scroller.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 0);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);

    // スクロール位置のパーセンテージを計算
    const maxScroll = Math.max(1, el.scrollWidth - el.clientWidth);
    const percentage = (el.scrollLeft / maxScroll) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    update();
    const el = scroller.current;
    if (!el) return;
    el.addEventListener("scroll", update);
    const ro = new ResizeObserver(update);
    ro.observe(el);

    const handleMouseMove = (e: MouseEvent) => onBarMove(e as any);
    const handleMouseUp = () => onBarUp();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // 1カード分ずつスクロール
  const scrollByCard = (dir: "prev" | "next") => {
    const el = scroller.current;
    if (!el) return;
    const step = 360; // カード幅
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  // ドラッグでスクロール
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const onDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (scroller.current?.offsetLeft ?? 0);
    scrollLeft.current = scroller.current?.scrollLeft ?? 0;
  };
  const onMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scroller.current) return;
    const x = e.pageX - (scroller.current.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1;
    scroller.current.scrollLeft = scrollLeft.current - walk;
  };
  const onUp = () => { isDown.current = false; };

  // プログレスバーのドラッグ機能
  const barDragRef = useRef(false);
  const onBarDown = (e: React.MouseEvent) => {
    barDragRef.current = true;
    onBarMove(e);
  };
  const onBarMove = (e: React.MouseEvent) => {
    if (!barDragRef.current) return;
    const el = scroller.current;
    const bar = barRef.current;
    if (!el || !bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    el.scrollLeft = max * ratio;
  };
  const onBarUp = () => { barDragRef.current = false; };

  return (
    <div className="relative w-full">
      {/* 左右ナビ */}
      {canPrev && (
        <button onClick={() => scrollByCard("prev")}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border shadow items-center justify-center hover:bg-gray-50">
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
      )}
      {canNext && (
        <button onClick={() => scrollByCard("next")}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border shadow items-center justify-center hover:bg-gray-50">
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      )}

      {/* 横スクロール領域 */}
      <div
        ref={scroller}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 cursor-grab active:cursor-grabbing
                   [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {phases.map((p, i) => (
          <div key={i}
            className={`flex-none w-[340px] snap-start rounded-2xl border p-6 shadow-sm ${
              i === 2 ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
            }`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                i === 2 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
              }`}>{p.icon}</div>
              {i === 2 && (
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                  現在
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500">{p.range}</p>
            <h4 className={`mt-1 text-lg font-bold ${
              i === 2 ? 'text-blue-900' : 'text-gray-900'
            }`}>{p.title}</h4>
            <p className="mt-3 text-sm leading-6 text-gray-700">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* ドラッグ可能なシークバー */}
      <div
        ref={barRef}
        onMouseDown={onBarDown}
        className="mt-3 h-3 rounded-full bg-gray-200 cursor-pointer select-none hover:bg-gray-300 transition-colors duration-200 relative"
        aria-label="ドラッグまたはクリックしてスクロール位置を移動"
      >
        {/* ドラッグバー: 固定幅で横移動する */}
        <div
          className="absolute h-full rounded-full bg-blue-600 transition-[left] duration-100 pointer-events-none"
          style={{
            width: '80px',
            left: `calc(${scrollPercentage}% * (100% - 80px) / 100)`
          }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform cursor-grab active:cursor-grabbing" />
        </div>
      </div>
    </div>
  );
}