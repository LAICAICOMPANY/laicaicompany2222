import React from 'react';

export const AccountManagement: React.FC = () => {
    return (
        <section id="account-management" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
                <div className="bg-brand-gray text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                    {/* Subtle Glow Background Effect */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                        <div className="w-full">
                            <h4 className="text-blue-400 font-semibold tracking-widest uppercase mb-6 text-sm">Account Management</h4>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-white mb-8">
                                맞춤 계정관리
                            </h2>
                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                                단순 운영을 넘어, 브랜드 계정을 장기적으로 성장시키기 위한<br className="hidden md:block" />
                                <strong className="font-semibold text-white"> 샤오홍슈 계정관리 전략</strong>을 설계합니다.<br />
                                노출, 신뢰, 전환이 연결되는 구조로 계정을 운영합니다.
                            </p>
                        </div>

                        <div className="w-full h-full flex items-center justify-center p-12 md:p-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] shadow-lg">
                            <p className="text-2xl md:text-3xl lg:text-[2rem] text-white/90 leading-[1.6] font-medium break-keep">
                                브랜드 성격과 타겟에 맞춰 계정 운영 방향, 콘텐츠 흐름, 소비자 커뮤니케이션까지
                                <span className="text-blue-400 mt-8 block font-semibold text-3xl md:text-4xl">맞춤형으로 관리합니다.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
