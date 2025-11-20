import React from "react";

export default function LegalNotice() {
  return (
     <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-md mt-16">

        {/* Title */}
        <h1 className="text-3xl text-center md:text-4xl font-bold text-gray-900 mb-8">
          特定商取引法に基づく表示
        </h1>

        {/* Content */}
        <div className="prose space-y-5 prose-neutral max-w-none leading-relaxed text-gray-800">

          <h2 className="text-gray-800 font-bold">■ 事業者</h2>
          <p>カーベイ株式会社</p>

          <h2 className="text-gray-800 font-bold">■ 代表者</h2>
          <p>山岡 淳宏</p>

          <h2 className="text-gray-800 font-bold">■ 所在地</h2>
          <p>
            〒243-0014<br />
            神奈川県厚木市旭町1-21-12 三紫ビル3A
          </p>

          <h2 className="text-gray-800 font-bold">■ 電話番号</h2>
          <p>
            046-210-4561<br />
            （受付時間：平日 9:00〜18:00）
          </p>

          <h2 className="text-gray-800 font-bold">■ メールアドレス</h2>
          <p>info@carbey.jp</p>

          <h2 className="text-gray-800 font-bold">■ 役務の対価</h2>
          <p>
            料金は個別のお問い合わせ後、商談時にご案内いたします。<br />
            （例：FC加盟金、月額管理費 等）
          </p>

          <h2 className="text-gray-800 font-bold">■ 対価以外に必要となる費用</h2>
          <p>
            なし<br />
            <span className="text-sm">
              ※ただし、インターネット接続料金、通信費、通信端末はユーザー負担となります。
            </span>
          </p>

          <h2 className="text-gray-800 font-bold">■ 代金の支払方法</h2>
          <ul>
            <li>クレジットカード決済</li>
            <li>銀行振込</li>
            <li>口座振替（毎月の管理費等／希望者のみ）</li>
          </ul>

          <h2 className="text-gray-800 font-bold">■ 代金の支払時期</h2>
          <ul>
            <li>クレジットカード決済：申込時に即時課金</li>
            <li>銀行振込：当社が指定する支払期日までに送金</li>
            <li>口座振替：毎月指定日に自動引き落とし</li>
          </ul>

          <h2 className="text-gray-800 font-bold">■ 役務の提供時期</h2>
          <ul>
            <li>デジタルサービス（自動売買システム等）：申込完了後、即時またはアカウント発行後に提供</li>
            <li>フランチャイズサービス：契約書締結・支払い確認後に提供開始</li>
          </ul>

          <h2 className="text-gray-800 font-bold">■ キャンセル・返品・交換（返品特約）</h2>
          <p>
            サービスの特性上、申込後のキャンセルはできません。<br />
            デジタルサービス・契約開始済みサービスについては返金不可となります。
          </p>

        </div>
      </div>
    </div>
  );
}
