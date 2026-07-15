import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Calendar, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/contact?type=contact&t=${Date.now()}`);
    window.scrollTo(0, 0);
  };

  const handleDocumentClick = () => {
    navigate('/document-select');
    window.scrollTo(0, 0);
  };

  const siteLinks = [
    { path: '/', label: 'ホーム' },
    { path: '/about', label: 'カーベイとは' },
    { path: '/services', label: 'カーベイ（事業内容）' },
    { path: '/eflow', label: 'E-Flow' },
    { path: '/company', label: '会社情報' },
    { path: '/philosophy', label: '企業理念' },
    { path: '/news', label: 'お知らせ一覧' },
    { path: '/contact', label: 'お問い合わせ' },
  ];

  const legalLinks = [
    { path: '/privacy-policy', label: 'プライバシーポリシー' },
    { path: '/legal-notice', label: '特商法に基づく表記' },
  ];

  return (
    <footer id="company-info" className="text-gray-900 border-t border-gray-200" style={{ backgroundColor: '#F2F2F2' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* 上段 */}
        <div className="py-12 lg:py-16">
          <div className="flex flex-col items-center">
            {/* 会社情報とボタン */}
            <div className="w-full flex flex-col items-center space-y-8 text-center">
              <h3 className="text-3xl font-bold w-full text-center" style={{ color: '#333333' }}>
                カーベイ株式会社
              </h3>
              <div className="space-y-3 text-base" style={{ color: '#333333' }}>
                <div className="flex items-center justify-center">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>〒243-0014 神奈川県厚木市旭町1-21-12 三紫ビル3A</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <a href="tel:046-210-4561" className="hover:underline">046-210-4561</a>
                </div>
                <div className="flex items-center justify-center">
                  <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>営業時間：平日 9:00-18:00</span>
                </div>
                <div className="flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>定休日：土日祝日</span>
                </div>
              </div>

              {/* ボタン */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleContactClick}
                  className="bg-[#1F2F4D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2A3F5F] transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 w-56"
                >
                  <Mail className="h-5 w-5" />
                  <span>お問い合わせ</span>
                </button>
                <button
                  onClick={handleDocumentClick}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 w-56"
                >
                  <FileText className="h-5 w-5" />
                  <span>資料請求</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 下段 */}
        <div className="border-t border-gray-300 py-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
            <p className="text-sm" style={{ color: '#333333' }}>
              © 2025 Carbey Inc. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:underline transition-all duration-200"
                  style={{ color: '#333333' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
