import React from 'react';
import { Search, CheckCircle, ShoppingBag } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
  description: string;
}

const statsData: StatItem[] = [
  { value: '3억+', label: '월간 활성 사용자', description: 'Monthly Active' },
  { value: '255만+', label: '한국 관련 콘텐츠', description: 'Korea Contents' },
  { value: '13.5억+', label: '관련 누적 조회수', description: 'Total Views' },
  { value: '460만+', label: '방한 중국인', description: 'visitors expected' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">

        {/* Header */}
        <div className="mb-20 md:flex justify-between items-end gap-12">
          <div className="max-w-3xl">
            <h4 className="text-gray-500 font-semibold tracking-widest uppercase mb-6 text-sm">About Platform</h4>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-brand-gray">
              샤오홍슈는 <br />
              <span className="text-blue-600">어떤 플랫폼</span>인가?
            </h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-md">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              단순한 SNS가 아닙니다. 중국 내에서 <strong className="font-semibold text-brand-gray">검색, 검증, 구매 결정</strong>이 동시에 일어나는 핵심 의사결정 채널입니다.
            </p>
          </div>
        </div>

        {/* Xiaohongshu Stats */}
        <div className="bg-black text-white rounded-[3rem] p-12 md:p-16 mb-24 relative overflow-hidden shadow-2xl border border-black/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <h3 className="text-5xl md:text-6xl font-bold font-display tracking-tighter mb-4 text-white">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold tracking-tight text-white/90 mb-1">{stat.label}</p>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/50">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Concept Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 border border-black/5">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10">
              <Search className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-bold tracking-tight mb-4 text-brand-gray">Search</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              한국 여행 관련 소비 트렌드 검색량 압도적 1위. 네이버 블로그와 유사한 정보 탐색 채널.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 border border-black/5">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10">
              <CheckCircle className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-bold tracking-tight mb-4 text-brand-gray">Verify</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              실제 경험 기반 콘텐츠에 대한 높은 신뢰도. 인스타그램과 커뮤니티가 결합된 형태.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 border border-black/5">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10">
              <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-bold tracking-tight mb-4 text-brand-gray">Buy</h3>
            <p className="text-gray-500 font-medium leading-relaxed">
              중국인 여행객들이 여행지를 결정하는데 가장 신뢰하는 최종 의사결정 플랫폼.
            </p>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-brand-gray text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="relative z-10 max-w-4xl">
            <h4 className="text-blue-400 font-semibold tracking-widest uppercase mb-8 text-sm">Our Vision</h4>
            <p className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-white/90">
              중국 SNS 계정 관리부터 미디어 프로세스 세팅, <br className="hidden md:block" />
              그리고 <span className="text-white font-bold">10년 이상의 현지 인프라</span>를 통한 로컬라이징 비즈니스까지. <br />
              <span className="text-blue-400 mt-6 inline-block">LaiCai는 A부터 Z까지 함께합니다.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};