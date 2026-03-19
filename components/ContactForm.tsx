import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-32 relative px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-5xl">
        <div className="flex flex-col items-center">
          
          <div className="text-center mb-12 md:mb-16">
            <h4 className="text-gray-500 font-semibold uppercase tracking-widest mb-4 md:mb-6 text-xs md:text-sm">Contact Us</h4>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6 md:mb-8 text-brand-gray break-keep">
              저희와 프로젝트를 함께 <br className="block sm:hidden" /><span className="text-blue-600">하시겠습니까?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-xl leading-relaxed font-light mx-4 md:mx-auto max-w-md break-keep">
              중국인 고객 유입이 가능한지 알아보고 싶다면?
            </p>
          </div>

          <div className="w-full">
            <div className="bg-white p-6 sm:p-10 md:p-14 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-black/5 border border-black/5">
              <form
                action="https://formspree.io/f/meeagqzq"
                method="POST"
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs text-brand-gray font-semibold uppercase tracking-widest">이름</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="홍길동"
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-brand-gray placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-brand-gray font-semibold uppercase tracking-widest">연락처</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="010-0000-0000"
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-brand-gray placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-brand-gray font-semibold uppercase tracking-widest">이메일</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-brand-gray placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-brand-gray font-semibold uppercase tracking-widest">프로젝트 내용</label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="어떤 프로젝트를 구상 중이신가요?"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-brand-gray placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold text-lg py-5 rounded-xl hover:bg-blue-700 transition-colors duration-300 mt-4 shadow-lg shadow-blue-500/30"
                >
                  문의 보내기
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};