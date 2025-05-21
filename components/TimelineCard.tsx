// components/TimelineCard.tsx
'use client';

import { motion } from 'framer-motion';

type Props = {
  label: string;
  date: string;
  type: string;
  txHash: string;
};

export default function TimelineCard({ label, date, type, txHash }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='bg-white border-4 border-black p-4 my-4 rounded-xl shadow-md max-w-xl mx-auto font-comic'
    >
      <div className='text-xs text-gray-500'>
        {new Date(date).toDateString()}
      </div>
      <div className='text-lg font-bold mt-1'>{label}</div>
      <div className='text-xs mt-2 text-blue-600 underline'>
        <a href={`https://etherscan.io/tx/${txHash}`} target='_blank'>
          View on Etherscan
        </a>
      </div>
    </motion.div>
  );
}
