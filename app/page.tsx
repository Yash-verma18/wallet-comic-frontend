'use client';

import WalletInput from '@/components/WalletInput';
import TimelineCard from '@/components/TimelineCard';
import { useState } from 'react';
import axios from 'axios';

type TxItem = {
  label: string;
  date: string;
  type: string;
  txHash: string;
};

export default function Home() {
  const [timeline, setTimeline] = useState<TxItem[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddressSubmit = async (address: string) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:8000/api/wallet/${address}`
      );
      setTimeline(res.data.timeline);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-screen p-8 bg-[#fff9f4]'>
      <h1 className='text-3xl text-center font-bold font-comic'>
        🧠 Onchain Storyboard
      </h1>
      <WalletInput onSubmit={handleAddressSubmit} />

      {loading && <p className='text-center mt-8'>Loading timeline...</p>}

      <div className='mt-10'>
        {timeline.map((tx, index) => (
          <TimelineCard key={index} {...tx} />
        ))}
      </div>
    </main>
  );
}
