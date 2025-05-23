'use client';

import WalletInput from '@/components/WalletInput';
import { useEffect, useState } from 'react';
import { API_BASE_URL } from '@/lib/config';
import axios from 'axios';
import {
  ComicCard,
  ComicCardNFTTransfer,
  ComicCardERC20Transfer,
  ComicCardContractCall,
} from '@/components/TransactionCards';
import ComicTextAnimation from '@/components/ComicTextAnimation';
import SuggestedWalletTags from '@/components/SuggestedWalletTags';

type TxItem = {
  label: string;
  date: string;
  type: string;
  txHash: string;
  from: string;
  to: string;
  value?: string;
  gasUsed?: string;
  tokenId?: string;
  tokenName?: string;
  tokenSymbol?: string;
  contractAddress?: string;
  image?: string;
};

export default function Home() {
  const [timeline, setTimeline] = useState<TxItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [walletAddress, setWalletAddress] = useState('');
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);

  const handleAddressSubmit = async (address: string) => {
    setLoading(true);
    setInput(address);
    setTimeline([]);
    setPage(1);
    setHasMore(true);
    setWalletAddress(address);

    await fetchPage(1, address);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (scrolledToBottom && hasMore && !loading) {
        fetchPage(page + 1, walletAddress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, walletAddress, hasMore, loading]);

  const fetchPage = async (newPage: number, address: string) => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/wallet/${address}?page=${page}&limit=${10}`
      );

      const newItems = res.data.timeline;

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setTimeline((prev) => [...prev, ...newItems]);
        setPage(newPage);
      }
    } catch (err) {
      console.error('Pagination error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('timeline length', timeline.length);
  }, [timeline]);

  return (
    <main className='min-h-screen p-8 '>
      <ComicTextAnimation />
      <WalletInput
        onSubmit={handleAddressSubmit}
        input={input}
        setInput={setInput}
      />
      <SuggestedWalletTags onSelect={handleAddressSubmit} />

      {loading && (
        <p className='text-center mt-8 text-emerald-50'>Loading timeline...</p>
      )}
      <div className='mt-10'>
        {timeline.map((tx, index) => {
          if (tx.type === 'ETH_TRANSFER') {
            return (
              <ComicCard
                key={index}
                index={index}
                label={tx.label}
                date={tx.date}
                value={tx.value || ''}
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
                index={index}
                label={tx.label}
                date={tx.date}
                txHash={tx.txHash}
                from={tx.from}
                to={tx.to}
                gasUsed={tx.gasUsed || ''}
              />
            );
          }

          if (tx.type === 'NFT_TRANSFER') {
            return (
              <ComicCardNFTTransfer
                key={index}
                index={index}
                label={tx.label}
                date={tx.date}
                from={tx.from}
                to={tx.to}
                txHash={tx.txHash}
                tokenId={tx.tokenId || ''}
                tokenName={tx.tokenName || ''}
                tokenSymbol={tx.tokenSymbol || ''}
                contractAddress={tx.contractAddress || ''}
                imageUrl={tx.image || ''}
              />
            );
          }

          if (tx.type === 'ERC20_TRANSFER') {
            return (
              <ComicCardERC20Transfer
                key={index}
                index={index}
                label={tx.label}
                date={tx.date}
                from={tx.from}
                to={tx.to}
                txHash={tx.txHash}
                value={tx.value || ''}
                tokenSymbol={tx.tokenSymbol || ''}
                tokenName={tx.tokenName || ''}
              />
            );
          }

          return null; // fallback for unknown types
        })}{' '}
      </div>

      {page != 1 && loading && (
        <p className='text-center text-sm mt-4 text-emerald-50'>
          Loading more...
        </p>
      )}
      {!hasMore && (
        <p className='text-center text-sm mt-4 text-emerald-50'>
          No more data 👀
        </p>
      )}
    </main>
  );
}
