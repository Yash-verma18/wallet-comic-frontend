'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type Props = {
  label: string;
  date: string;
  from: string;
  to: string;
  txHash: string;
  value: string;
  tokenSymbol: string;
  tokenName: string;
  index: number;
};

export default function ComicCardERC20Transfer({
  label,
  date,
  from,
  to,
  txHash,
  value,
  tokenSymbol,
  tokenName,
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
        duration: 0.6,
        delay: index * 0.05,
        type: 'spring',
        stiffness: 120,
      }}
      whileTap={{ rotate: [-2, 2, -1, 1, 0] }}
      className='relative bg-yellow-50 border-4 border-black rounded-xl shadow-xl overflow-hidden font-comic max-w-2xl mx-auto mb-6'
    >
      {/* 🖼 Background comic frame */}
      <Image
        src='/erc20-bg.jpg' // make sure this background image is placed in public folder
        alt='ERC20 Background'
        fill
        className='object-cover z-0 opacity-90'
      />

      {/* 📜 Foreground Content */}
      <div className='relative z-10 p-6 flex flex-col items-center text-center'>
        <p className='text-xs uppercase tracking-widest text-gray-700 mb-2'>
          {new Date(date).toDateString()}
        </p>

        <h2 className='text-xl md:text-2xl font-black mb-1 text-black'>
          {label}
        </h2>

        <div className='text-red-600 text-xl font-bold mb-1'>{value}</div>

        <p className='text-sm text-purple-800 font-bold mb-1'>
          Token: {tokenSymbol}
        </p>

        <p className='text-xs text-gray-600 mb-3'>{tokenName}</p>

        <div className='text-xs text-gray-700 space-y-1'>
          <p>
            FROM:{' '}
            <span className='font-mono'>
              {from.slice(0, 6)}...{from.slice(-4)}
            </span>
          </p>
          <p>
            TO:{' '}
            <span className='font-mono'>
              {to.slice(0, 6)}...{to.slice(-4)}
            </span>
          </p>
        </div>

        <a
          href={`https://etherscan.io/tx/${txHash}`}
          target='_blank'
          className='text-xs font-semibold mt-3 underline text-blue-700'
        >
          VIEW ON ETHERSCAN
        </a>
      </div>
    </motion.div>
  );
}
