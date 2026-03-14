import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Left Side: Info */}
          <div className="lg:w-5/12 pt-10">
            <h4 className="text-gray-500 font-semibold uppercase tracking-widest mb-6 text-sm">Contact Us</h4>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8 text-brand-gray">
              프로젝트를 함께 <br />
              <span className="text-blue-600">시작해볼까요?</span>
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed font-light mb-16 max-w-sm">
              당신의 아이디어가 LaiCai를 만나면 현실이 됩니다.<br />가벼운 문의라도 언제든 환영합니다.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white shadow-sm border border-black/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                  <Mail className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:wesk103@gmail.com" className="text-2xl font-bold text-brand-gray hover:text-blue-600 transition-colors tracking-tight">
                    wesk103@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white shadow-sm border border-black/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                  <Phone className="text-blue-600 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:010-8756-7602" className="text-2xl font-bold text-brand-gray hover:text-blue-600 transition-colors tracking-tight">
                    010-8756-7602
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12">
            <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl shadow-black/5 border border-black/5">
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