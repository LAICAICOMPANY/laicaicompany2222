import React from 'react';
import { Sparkles, MapPin, Stethoscope } from 'lucide-react';

export const Recommendations: React.FC = () => {
    return (
        <section id="recommendations" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
                <div className="mb-20 md:flex justify-between items-end gap-12">
                    <div className="max-w-3xl">
                        <h4 className="text-gray-500 font-semibold tracking-widest uppercase mb-6 text-sm">Recommended Industries</h4>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-brand-gray">
                            이런 업종에 <br />
                            <span className="text-blue-600">추천드립니다.</span>
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0 max-w-md">
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                            업종별 소비자 행동과 콘텐츠 반응 방식에 맞춰 가장 적합한 샤오홍슈 마케팅 구조를 설계합니다.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-500 border border-black/5 flex flex-col h-full">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10">
                            <Sparkles className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl font-bold tracking-tight mb-6 text-brand-gray leading-snug">뷰티 · 패션 · <br />라이프스타일</h3>
                        <div className="space-y-4 text-gray-500 font-medium leading-relaxed flex-grow text-lg">
                            <p>패션 브랜드, 화장품 브랜드, 안경, 잡화, 향수, 주얼리 등 비주얼 중심 소비재에 적합합니다.</p>
                            <p>브랜드 이미지 구축과 저장·공유형 콘텐츠 확산에 강합니다.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-500 border border-black/5 flex flex-col h-full">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10">
                            <MapPin className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl font-bold tracking-tight mb-6 text-brand-gray leading-snug">외식 · 공간 · <br />로컬 비즈니스</h3>
                        <div className="space-y-4 text-gray-500 font-medium leading-relaxed flex-grow text-lg">
                            <p>식당, 카페, 팝업스토어, 편집샵, 전시공간, 뷰티살롱 등 방문 경험이 중요한 업종에 적합합니다.</p>
                            <p>실제 방문 후기와 현장감 있는 리뷰로 유입과 예약 전환을 유도합니다.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow duration-500 border border-black/5 flex flex-col h-full">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-10">
                            <Stethoscope className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl font-bold tracking-tight mb-6 text-brand-gray leading-snug">메디컬 · 시술 · <br />전문 서비스</h3>
                        <div className="space-y-4 text-gray-500 font-medium leading-relaxed flex-grow text-lg">
                            <p>피부과, 성형외과, 에스테틱, SMP, 반영구, 헬스케어 서비스 등 신뢰 확보가 중요한 업종에 적합합니다.</p>
                            <p>정보성 콘텐츠와 후기형 콘텐츠를 병행해 신뢰도와 문의율을 높입니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
