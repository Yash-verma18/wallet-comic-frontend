'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ scale: 1, backgroundPosition: '0% 0%' }}
      animate={{
        scale: [1, 1],
        backgroundPosition: ['0% 0%', '50% 50%', '0% 0%'],
        filter: ['hue-rotate(0deg)', 'hue-rotate(15deg)', 'hue-rotate(0deg)'],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
      className="min-h-screen w-full bg-[#fff7f2] bg-[url('/bg.svg')] bg-cover bg-fixed bg-repeat filter hue-rotate-0"
    >
      <main className='relative z-10'>{children}</main>
    </motion.div>
  );
}
