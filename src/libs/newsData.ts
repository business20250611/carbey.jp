export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  isNew: boolean;
  content: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'economy-plan-launch-2026',
    date: '2026.06.02',
    category: 'お知らせ',
    title: 'Carbey自動売買システム「エコノミープラン」ローンチのお知らせ',
    isNew: true,
    content: `このたび、Carbey自動売買システムでは、より低コストで中古車ビジネスに参入できる「エコノミープラン」を新たにローンチいたしました。

「誰でも車屋になれる」というCarbeyの理念のもと、開業時のハードルを下げ、未経験の方でも始めやすいプランとして提供いたします。

今後もCarbeyは、中古車ビジネスをより身近に、より挑戦しやすい選択肢として広げてまいります。`
  },
  {
    id: 'home-dealer-2026',
    date: '2026.05.01',
    category: 'お知らせ',
    title: 'Carbey ホームディーラー開発着手のお知らせ',
    isNew: true,
    content: `このたびカーベイ株式会社では、加盟店様が仕入れ判断から販売管理までを一元的に行える新プラットフォーム「ホームディーラー」の開発に着手いたしました。

市場データや車両情報をもとに、加盟店様自身でもスムーズに判断・運用できる仕組みを構築してまいります。

今後も、より分かりやすく、効率的に中古車ビジネスへ取り組める環境づくりを進めてまいります。`
  },
  {
    id: 'support-enhancement-2026',
    date: '2026.01.20',
    category: 'お知らせ',
    title: 'サポート体制強化のお知らせ',
    isNew: false,
    content: `平素よりカーベイをご利用いただき、誠にありがとうございます。

この度、加盟者様の運用支援体制をさらに強化するため、
サポート体制の拡充を実施いたしました。

これにより、これまで以上にスムーズな運用支援および
迅速な対応が可能となります。

カーベイでは、未経験の方でも安心して事業を開始・継続できるよう、
今後もサービス品質の向上に努めてまいります。

引き続き、カーベイをよろしくお願いいたします。`
  },
  {
    id: 'service-launch',
    date: '2025.09.01',
    category: 'プレスリリース',
    title: 'サービス提供開始のお知らせ',
    isNew: false,
    content: 'カーベイのサービス提供を開始いたしました。'
  },
  {
    id: 'domain-acquisition',
    date: '2025.07.15',
    category: 'お知らせ',
    title: '公式ドメイン取得・コーポレートサイト準備開始',
    isNew: false,
    content: '公式ドメインを取得し、コーポレートサイトの準備を開始いたしました。'
  },
  {
    id: 'company-establishment',
    date: '2025.06.01',
    category: 'お知らせ',
    title: 'カーベイ株式会社 設立のお知らせ',
    isNew: false,
    content: 'カーベイ株式会社を設立いたしました。'
  }
];


export { newsItems }