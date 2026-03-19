import React from 'react';
import { Heart } from 'lucide-react';

export const Reference: React.FC = () => {
    return (
        <section id="reference" className="py-16 md:py-24 bg-black overflow-hidden border-t-2 border-white/10 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-black pointer-events-none z-0"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4 md:gap-6">
                    <div className="flex items-start gap-4">
                        <span className="text-brand-orange text-[8rem] leading-[0.8] font-black opacity-20 font-display select-none hidden md:block">03</span>
                        <div>
                            <h4 className="text-brand-orange font-bold uppercase tracking-[0.2em] mb-2 md:mb-4 text-sm md:text-base">[ Reference ]</h4>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-white uppercase tracking-tighter">NEOTERIA</h2>
                        </div>
                    </div>
                    <div className="border-l-2 border-brand-orange pl-4 md:pl-6">
                        <p className="text-gray-400 max-w-md text-base md:text-lg tracking-wider break-keep">
                            성공적인 아이웨어 브랜드 마케팅 사례. <br className="hidden md:block" />
                            실제 유저들의 자발적인 리뷰와 인플루언서 마케팅이 만들어낸 바이럴 효과.
                        </p>
                    </div>
                </div>

                {/* Grid imitating Xiaohongshu Feed */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1: Pig Bun (Product) */}
                    <div className="group relative bg-[#111] border-2 border-white brutalist-border cursor-pointer transition-all duration-300">
                        <div className="aspect-[3/4] overflow-hidden relative border-b-2 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800&auto=format&fit=crop"
                                alt="Neoteria Unboxing"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="p-6">
                            <h5 className="text-white font-black font-display text-lg line-clamp-2 mb-4 leading-snug tracking-tight">
                                我愿称之为烤蹄子最实用同款
                            </h5>
                            <div className="flex justify-between items-center text-sm text-gray-400">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-700 overflow-hidden border-2 border-white">
                                        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=60" alt="avatar" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                                    </div>
                                    <span className="truncate max-w-[80px] font-bold text-gray-300">猪包</span>
                                </div>
                                <div className="flex items-center gap-2 text-brand-orange font-bold">
                                    <Heart className="w-4 h-4 fill-brand-orange" />
                                    <span>1073</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Noodle (Girl Collage) */}
                    <div className="group relative bg-[#111] border-2 border-white brutalist-border cursor-pointer transition-all duration-300">
                        <div className="aspect-[3/4] overflow-hidden relative border-b-2 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1485230946387-43302e51ae69?q=80&w=800&auto=format&fit=crop"
                                alt="Store Visit"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="p-6">
                            <h5 className="text-white font-black font-display text-lg line-clamp-2 mb-4 leading-snug tracking-tight">
                                地租优选 🕶️ 汉南洞neoteria同款购物分享 🛍️
                            </h5>
                            <div className="flex justify-between items-center text-sm text-gray-400">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-700 overflow-hidden border-2 border-white">
                                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60" alt="avatar" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                                    </div>
                                    <span className="truncate max-w-[80px] font-bold text-gray-300">消灭拉面</span>
                                </div>
                                <div className="flex items-center gap-2 text-brand-orange font-bold">
                                    <Heart className="w-4 h-4 fill-brand-orange" />
                                    <span>221</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Sam (Guy) */}
                    <div className="group relative bg-[#111] border-2 border-white brutalist-border cursor-pointer transition-all duration-300">
                        <div className="aspect-[3/4] overflow-hidden relative border-b-2 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1534030347209-467a5b0dd3f4?q=80&w=800&auto=format&fit=crop"
                                alt="Sam Post"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-4 right-4 bg-brand-orange text-black font-bold border-2 border-black px-2 py-1 text-xs uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                1/10
                            </div>
                        </div>
                        <div className="p-6">
                            <h5 className="text-white font-black font-display text-lg line-clamp-2 mb-4 leading-snug tracking-tight">
                                KR这么多家GM平替，只有它家敢真便宜 ‼️
                            </h5>
                            <div className="flex justify-between items-center text-sm text-gray-400">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gray-700 overflow-hidden border-2 border-white">
                                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60" alt="avatar" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                                    </div>
                                    <span className="truncate max-w-[100px] font-bold text-gray-300">Sam学长在韩国</span>
                                </div>
                                <div className="flex items-center gap-2 text-brand-orange font-bold">
                                    <Heart className="w-4 h-4 fill-brand-orange" />
                                    <span>90</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};