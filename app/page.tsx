'use client';
import { motion } from 'framer-motion';
import WalletInput from '@/components/WalletInput';
import TimelineCard from '@/components/TimelineCard';
import { useState } from 'react';
import axios from 'axios';
import ComicCard from '@/components/ComicCard';
import ComicCardContractCall from '@/components/ComicCardContractCall';
import ComicTextAnimation from '@/components/ComicTextAnimation';
import WowComic from '@/components/WowComic';
import ComicCardNFTTransfer from '@/components/ComicCardNFTTransfer';
import ComicCardERC20Transfer from '@/components/ComicCardERC20Transfer';

type TxItem = {
  label: string;
  date: string;
  type: string;
  txHash: string;
  from: string;
  to: string;
  value: string;
  gasUsed: string;
  tokenId: string;
  tokenName: string;
  tokenSymbol: string;
  contractAddress: string;
  image: string;
};

export default function Home() {
  const [timeline, setTimeline] = useState<TxItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const limit = 10;

  const handleAddressSubmit = async (address: string) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:8000/api/wallet/${address}?page=${page}&limit=${limit}`
      );
      setTimeline(res.data.timeline);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-screen p-8 '>
      <ComicTextAnimation />
      <WalletInput onSubmit={handleAddressSubmit} />
      {/* <WowComic /> */}

      {loading && <p className='text-center mt-8'>Loading timeline...</p>}
      <div className='mt-10'>
        {timeline.map((tx, index) => {
          if (tx.type === 'ETH_TRANSFER') {
            return (
              <ComicCard
                key={index}
                label={tx.label}
                date={tx.date}
                value={tx.value}
                txHash={tx.txHash}
                from={tx.from}
                to={tx.to}
              />
            );
          }

          if (tx.type === 'CONTRACT_CALL') {
            return (
              <ComicCardContractCall
                key={index}
                label={tx.label}
                date={tx.date}
                txHash={tx.txHash}
                from={tx.from}
                to={tx.to}
                gasUsed={tx.gasUsed}
              />
            );
          }

          if (tx.type === 'NFT_TRANSFER') {
            return (
              <ComicCardNFTTransfer
                key={index}
                label={tx.label}
                date={tx.date}
                from={tx.from}
                to={tx.to}
                txHash={tx.txHash}
                tokenId={tx.tokenId}
                tokenName={tx.tokenName}
                tokenSymbol={tx.tokenSymbol}
                contractAddress={tx.contractAddress}
                imageUrl={tx.image}
              />
            );
          }

          if (tx.type === 'ERC20_TRANSFER') {
            return (
              <ComicCardERC20Transfer
                key={index}
                label={tx.label}
                date={tx.date}
                from={tx.from}
                to={tx.to}
                txHash={tx.txHash}
                value={tx.value}
                tokenSymbol={tx.tokenSymbol}
                tokenName={tx.tokenName}
              />
            );
          }

          return null; // fallback for unknown types
        })}
      </div>
    </main>
  );
}
