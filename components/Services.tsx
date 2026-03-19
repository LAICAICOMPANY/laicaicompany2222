import React from 'react';
import { ServicePlan } from '../types';

const services: ServicePlan[] = [
  {
    title: 'KOC-LOW',
    features: [
      '키워드 검색 및 컨텐츠 노출',
      '샤오홍슈 내 브랜드 노출율 확보',
      '다수의 일반인 계정 활용',
      '최신 가이드라인 맞춤 제작',
      '사진 기반 리뷰 콘텐츠',
      '비방문형 진행'
    ]
  },
  {
    title: 'KOC',
    recommended: true,
    features: [
      '실제 매장 방문 후 체험 리뷰',
      '기자단 대비 높은 현장감/신뢰도',
      '저장/댓글/좋아요 등 실반응 확보',
      '상위 노출 시도 가능한 퀄리티',
      '소비자 시선의 현실적 리뷰',
      '오프라인 한정 줄세우기 가능'
    ]
  },
  {
    title: 'KOL',
    features: [
      '단기간 브랜드 인지도/신뢰도 상승',
      '팬덤 기반의 고퀄리티 콘텐츠',
      '브랜드 톤앤매너 맞춤 섭외',
      '바이럴 효과 극대화',
      '장기적 자산형 마케팅',
      '세부 조건 협의 가능'
    ]
  }
];

export const Services: React.FC = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-16 md:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col mb-12 md:mb-20 text-center items-center">
          <h4 className="text-gray-500 font-semibold tracking-widest uppercase mb-4 text-sm">Services</h4>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-brand-gray tracking-tighter mb-4 md:mb-6">마케팅 전략</h2>
          <p className="text-gray-500 max-w-2xl text-base md:text-xl leading-relaxed break-keep">
            브랜드의 성장을 위한 빈틈없는 중국 마케팅 솔루션.<br className="hidden md:block" />단계별로 치밀하게 신뢰를 쌓아갑니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] transition-all duration-500 group overflow-hidden border
                    ${service.recommended
                  ? 'bg-brand-gray text-white border-transparent'
                  : 'bg-white text-brand-gray border-black/5 hover:border-black/10 hover:shadow-xl'
                }`}
            >
              {service.recommended && (
                <div className="absolute top-0 inset-x-0 h-1 bg-blue-500"></div>
              )}

              <div className="mb-8 md:mb-10">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{service.title}</h3>
                {service.recommended && (
                  <span className="inline-block bg-white/10 text-white rounded-full px-3 py-1 text-xs tracking-widest uppercase mt-2 font-medium">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="flex-grow space-y-4 md:space-y-5 mb-10 md:mb-14">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 md:gap-4">
                    <span className={`text-xl leading-none mt-1 ${service.recommended ? 'text-blue-400' : 'text-blue-600'}`}>•</span>
                    <span className={`text-base md:text-lg font-medium tracking-tight break-keep ${service.recommended ? 'text-white/80' : 'text-gray-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleScrollToContact}
                className={`w-full py-5 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 ${service.recommended
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-gray-100 text-brand-gray hover:bg-brand-gray hover:text-white'
                  }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-gray-500 text-sm tracking-wide font-medium">
          VAT 별도. 세부 진행 방식 및 구성은 프로젝트 성격에 따라 조정될 수 있습니다.
        </div>
      </div>
    </section>
  );
};