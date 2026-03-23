import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedPlatform: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center mb-8" style={{ height: '200px' }}>
      {/* CENTER GLOW */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        viewport={{ once: true }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '180px',
          height: '60px',
          background: 'radial-gradient(ellipse, rgba(255,36,66,0.3) 0%, transparent 70%)',
          filter: 'blur(16px)',
          bottom: '20px',
        }}
      />

      {/* BACKGROUND SCATTERED LOGOS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.img 
          src="/douyin.jpg" 
          alt="Douyin"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [-10, 10, -10], rotate: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-2xl blur-[1.5px] shadow-lg"
          style={{ top: '10%', left: '10%' }}
        />
        <motion.img 
          src="/deepseek.jpg" 
          alt="DeepSeek"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [10, -10, 10], rotate: [8, -8, 8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-3xl blur-[1.5px] shadow-lg"
          style={{ bottom: '-10%', right: '12%' }}
        />
        <motion.img 
          src="/doubao.jpg" 
          alt="Doubao"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [-15, 15, -15], rotate: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-2xl blur-[1.5px] shadow-lg"
          style={{ top: '5%', right: '18%' }}
        />
      </div>

      {/* FLOATING LOGO */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-28 h-28 sm:w-36 sm:h-36 relative"
        >
          {/* Under shadow */}
          <div
            className="absolute -bottom-4 left-[20%] right-[20%] rounded-full blur-xl"
            style={{ height: '18px', background: 'rgba(255,36,66,0.4)' }}
          />
          {/* Logo */}
          <div
            className="flex items-center justify-center w-full h-full rounded-[2rem] relative overflow-hidden"
            style={{
              background: 'linear-gradient(145deg, #FF2442, #C90E26)',
              boxShadow: '0 20px 50px rgba(255,36,66,0.45), 0 0 0 1px rgba(255,100,100,0.3)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            {/* Top highlight */}
            <div className="absolute top-0 left-[15%] right-[15%] h-2.5 bg-white/35 rounded-full blur-[2px]" />
            <span className="text-white font-black text-4xl sm:text-5xl tracking-tighter drop-shadow-lg">小红书</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
