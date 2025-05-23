// components/WalletInput.tsx
'use client';

import { useState } from 'react';

type Props = {
  onSubmit: (address: string) => void;
  input: string;
  setInput: (input: string) => void;
};

export default function WalletInput({ onSubmit, input, setInput }: Props) {
  const handleSubmit = () => {
    if (!input) return;
    onSubmit(input.trim());
    // setInput('');
  };

  return (
    <div className='flex items-center gap-4 w-full max-w-xl mx-auto mt-10'>
      <input
        type='text'
        placeholder='Enter wallet address'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='border border-gray-400 px-4 py-2 w-full rounded-md focus:outline-none bg-white'
      />
      <button
        onClick={handleSubmit}
        className='bg-black text-white px-4 py-2 rounded-md font-bold hover:bg-gray-800'
      >
        Visualize
      </button>
    </div>
  );
}
