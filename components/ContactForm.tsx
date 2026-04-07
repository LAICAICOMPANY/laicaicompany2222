import React, { useState } from 'react';
import { Mail, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ContactForm: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    message: '',
    kakaoId: '',
    xiaohongshuExp: '',
    honeypot: '' // Spam protection
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (digitsOnly.length !== 11) {
      setStatus('error');
      setErrorMessage('전화번호는 숫자 11자리를 정확히 입력해주세요. (예: 01012345678)');
      return;
    }

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      let data;
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error('Non-JSON response:', text);
        setStatus('error');
        setErrorMessage('서버 응답 오류 (Netlify 환경인지, localhost:8888 접속인지 확인해주세요)');
        return;
      }

      if (response.ok) {
        setFormData({ company: '', name: '', phone: '', email: '', message: '', kakaoId: '', xiaohongshuExp: '', honeypot: '' });
        navigate('/success');
      } else {
        setStatus('error');
        setErrorMessage(data?.error || '전송에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setStatus('error');
      setErrorMessage('네트워크 통신 오류가 발생했습니다. (netlify dev 터미널 실행 여부 확인)');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-32 relative px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-5xl">
        <div className="flex flex-col items-center">
          
          <div className="text-center mb-12 md:mb-16">
            <h4 className="text-blue-400 font-semibold uppercase tracking-widest mb-4 md:mb-6 text-xs md:text-sm">Contact Us</h4>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6 md:mb-8 text-white/95 break-keep">
              저희와 프로젝트를 함께 <br className="block sm:hidden" /><span className="text-blue-500">하시겠습니까?</span>
            </h2>
            <p className="text-white/70 text-base md:text-xl leading-relaxed font-light mx-4 md:mx-auto max-w-md break-keep">
              중국인 고객 유입이 가능한지 알아보고 싶다면?
            </p>
          </div>

          <div className="w-full">
            <div className="bg-white p-6 sm:p-10 md:p-14 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-black/5 border border-black/5">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot Field for Spam Protection */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-center gap-3 animate-fade-in-up">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-xs text-brand-gray font-semibold uppercase tracking-widest">업체명</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="업체명을 입력해주세요"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-brand-gray placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs text-brand-gray font-semibold uppercase tracking-widest">이름</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-brand-gray placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-brand-gray font-semibold uppercase tracking-widest">카카오톡 아이디</label>
                  <input
                    type="text"
                    name="kakaoId"
                    value={formData.kakaoId}
                    onChange={handleChange}
                    placeholder="카카오톡 아이디를 입력해주세요"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-brand-gray placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs text-brand-gray font-semibold uppercase tracking-widest">샤오홍슈 마케팅 경험</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="xiaohongshuExp"
                        value="있음"
                        checked={formData.xiaohongshuExp === '있음'}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span className="text-brand-gray font-medium group-hover:text-blue-600 transition-colors">있음</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="xiaohongshuExp"
                        value="없음"
                        checked={formData.xiaohongshuExp === '없음'}
                        onChange={handleChange}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span className="text-brand-gray font-medium group-hover:text-blue-600 transition-colors">없음</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-brand-gray font-semibold uppercase tracking-widest">프로젝트 내용</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="어떤 프로젝트를 구상 중이신가요?"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-brand-gray placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-lg py-5 rounded-xl hover:bg-blue-700 transition-colors duration-300 mt-4 shadow-lg shadow-blue-500/30 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>처리 중...</span>
                    </>
                  ) : (
                    '문의 보내기'
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};