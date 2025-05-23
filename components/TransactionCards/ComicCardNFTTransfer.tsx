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
  tokenId: string;
  tokenName: string;
  tokenSymbol: string;
  contractAddress: string;
  imageUrl: string; // from OpenSea metadata
  index: number;
};

export default function ComicCardNFTTransfer({
  label,
  date,
  from,
  to,
  txHash,
  tokenId,
  tokenName,
  tokenSymbol,
  contractAddress,
  imageUrl,
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
        damping: 20, // controls "recoil bounce" – lower = snappier
        duration: 0.15,
        delay: index * 0.03, // faster stagger too
      }}
      whileTap={{ rotate: [-2, 2, -1, 1, 0] }}
      className='relative bg-yellow-100 border-4 border-black rounded-xl shadow-xl overflow-hidden font-comic max-w-2xl mx-auto mb-6'
    >
      {/* 🎨 Comic-style background */}
      <Image
        src='/comic-nft.jpg'
        alt='Comic NFT Background'
        fill
        className='object-cover z-0 opacity-90'
      />

      <div className='relative z-10 p-6 flex flex-col items-center text-center'>
        <p className='text-xs uppercase tracking-widest text-gray-700 mb-2'>
          {new Date(date).toDateString()}
        </p>

        <h2 className='text-xl md:text-2xl font-black mb-2 text-black'>
          {label}
        </h2>

        {/* 🖼 NFT Thumbnail */}
        <div className='w-40 h-40 rounded-xl border-2 border-black overflow-hidden my-4'>
          <img
            src={imageUrl}
            alt={`${tokenName} #${tokenId}`}
            className='object-cover w-full h-full'
          />
        </div>

        <p className='text-sm text-purple-800 font-bold mb-1'>
          {tokenName} #{tokenId}
        </p>
        <p className='text-sm text-gray-600 mb-2'>{tokenSymbol}</p>

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
          className='text-xs font-semibold mt-2 underline text-blue-700'
        >
          VIEW ON ETHERSCAN
        </a>
      </div>
    </motion.div>
  );
}
