// components/TimelineCard.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
type Props = {
  label: string;
  date: string;
  value: string;
  txHash: string;
  from: string;
  to: string;
  index: number;
};
export default function ComicCard({
  label,
  date,
  value,
  txHash,
  from,
  to,
  index,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        duration: 0.15,
        delay: index * 0.03,
      }}
      whileTap={{ rotate: [-2, 2, -1, 1, 0] }}
      className='relative bg-yellow-100 border-4 border-black rounded-xl shadow-xl overflow-hidden font-comic max-w-2xl mx-auto mb-6'
    >
      <Image
        src='/comic-bg.jpg'
        alt='Comic Burst'
        fill
        className='object-cover opacity-90'
      />
      <div className=' '>
        <div className='relative z-10 p-6 space-y-2 text-center '>
          <p className='text-sm text-gray-600'>
            {new Date(date).toDateString()}
          </p>
          <h2 className='text-2xl font-bold text-black'>{label}</h2>
          <p className='text-lg text-red-600 font-extrabold'>💥 {value}</p>
          <p className='text-xs text-gray-700'>
            From:{' '}
            <span className='font-mono'>
              {from.slice(0, 6)}...{from.slice(-4)}
            </span>
          </p>
          <p className='text-xs text-gray-700'>
            To:{' '}
            <span className='font-mono'>
              {to.slice(0, 6)}...{to.slice(-4)}
            </span>
          </p>
          <a
            href={`https://etherscan.io/tx/${txHash}`}
            target='_blank'
            className='text-xs underline text-blue-700'
          >
            View on Etherscan
          </a>
        </div>
      </div>
    </motion.div>
  );
}
