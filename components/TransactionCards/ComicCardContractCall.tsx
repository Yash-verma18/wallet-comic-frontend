'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type Props = {
  label: string;
  date: string;
  txHash: string;
  from: string;
  to: string;
  gasUsed: string;
  index: number;
};

export default function ComicCardContractCall({
  label,
  date,
  txHash,
  from,
  to,
  gasUsed,
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
      className='relative bg-yellow-200 border-4 border-black rounded-xl shadow-xl overflow-hidden font-comic max-w-2xl mx-auto mb-6'
    >
      <Image
        src='/comic-contract.jpg'
        alt='Contract Interaction Background'
        fill
        className='object-cover'
        priority
      />
      <div className='relative z-10 p-6 text-center space-y-2'>
        <p className='text-sm text-gray-700 uppercase tracking-wide'>
          {new Date(date).toDateString()}
        </p>
        <h2 className='text-2xl font-black text-black'>
          {label.toUpperCase()}
        </h2>
        <p className='text-base font-bold text-purple-700'>
          ⚙️ Smart Contract Interaction
        </p>
        <p className='text-xs text-gray-800'>
          GAS USED: <span className='font-mono'>{gasUsed}</span>
        </p>
        <p className='text-xs text-gray-700'>
          FROM:{' '}
          <span className='font-mono'>
            {from.slice(0, 6)}...{from.slice(-4)}
          </span>
        </p>
        <p className='text-xs text-gray-700'>
          TO:{' '}
          <span className='font-mono'>
            {to.slice(0, 6)}...{to.slice(-4)}
          </span>
        </p>
        <a
          href={`https://etherscan.io/tx/${txHash}`}
          target='_blank'
          className='text-xs underline text-blue-800 font-semibold'
        >
          VIEW ON ETHERSCAN
        </a>
      </div>
    </motion.div>
  );
}
