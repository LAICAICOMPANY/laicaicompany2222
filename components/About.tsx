import React from 'react';
import { Search, CheckCircle, ShoppingBag } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
  description: string;
}

const statsData: StatItem[] = [
  { value: '3.5억+', label: '월간 활성 사용자', description: 'Monthly Active' },
  { value: '255만+', label: '한국 관련 콘텐츠', description: 'Korea Contents' },
  { value: '13.5억+', label: '관련 누적 조회수', description: 'Total Views' },
  { value: '548만+', label: '방한 중국인', description: 'visitors expected' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">


        {/* Vision Statement */}
        <div className="text-white mb-20 md:mb-32 flex flex-col justify-center items-center">
          <div className="max-w-full flex flex-col items-center gap-4 md:gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="bg-red-600 text-white px-3 md:px-4 py-1.5 md:py-2 text-base sm:text-lg md:text-3xl font-bold tracking-tight inline-block transform -skew-x-6 w-fit break-keep">
                <span className="transform skew-x-6 inline-block">아직도 컨텐츠 삭제 당하시나요?</span>
              </span>
              <span className="bg-red-600 text-white px-3 md:px-4 py-1.5 md:py-2 text-base sm:text-lg md:text-3xl font-bold tracking-tight inline-block transform -skew-x-6 w-fit break-keep">
                <span className="transform skew-x-6 inline-block">아직도 중국인 고객 유입이 안되시나요?</span>
              </span>
            </div>
            
            <p className="text-[clamp(1.6rem,5vw,4.5rem)] font-paperlogy font-bold leading-tight tracking-tight text-white mt-4 text-center whitespace-nowrap">
              컨텐츠부터 매출 전환까지<br />
              책임지고 함께합니다.
            </p>
          </div>
        </div>
        {/* Header */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12">
          <div className="max-w-3xl">
            <h4 className="text-blue-400 font-semibold tracking-widest uppercase mb-4 md:mb-6 text-xs md:text-sm">About Platform</h4>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-white/95 break-keep">
              중국인들이 사랑하는 <br className="hidden md:block" />
              <span className="text-red-500">샤오홍슈</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md">
            <p className="text-base md:text-lg text-white/70 leading-relaxed font-light break-keep">
              단순한 SNS가 아닙니다. 중국 내에서 <strong className="font-semibold text-white">검색, 검증, 구매 결정</strong>이 동시에 일어나는 핵심 의사결정 채널입니다.
            </p>
          </div>
        </div>

        {/* Xiaohongshu Stats */}
        <div className="bg-white/5 backdrop-blur-md text-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 mb-16 md:mb-24 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 relative z-10">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tighter mb-2 md:mb-4 text-white">
                  {stat.value}
                </h3>
                <p className="text-sm md:text-lg font-semibold tracking-tight text-white/90 mb-1 break-keep">{stat.label}</p>
                <p className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-white/50">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>




      </div>
    </section>
  );
};