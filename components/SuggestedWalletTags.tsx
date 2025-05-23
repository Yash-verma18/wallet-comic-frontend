'use client';

type WalletSuggestion = {
  label: string;
  address: string;
  icon: string;
};

const suggestedWallets: WalletSuggestion[] = [
  {
    label: 'genesis.punk6529.eth',
    address: '0xfd22004806a6846ea67ad883356be810f0428793',
    icon: '🧠',
  },
  {
    label: 'ENS Collector',
    address: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
    icon: '🏷️',
  },

  {
    label: 'Binance Hot Wallet',
    address: '0x28c6c06298d514db089934071355e5743bf21d60',
    icon: '🏦',
  },
];

type Props = {
  onSelect: (address: string) => void;
};

export default function SuggestedWalletTags({ onSelect }: Props) {
  return (
    <div className='flex flex-wrap justify-center gap-4 mt-8'>
      {suggestedWallets.map((wallet) => (
        <button
          key={wallet.label}
          onClick={() => onSelect(wallet.address)}
          className='px-4 py-2 rounded-xl border-4 border-black bg-yellow-200 text-black font-comic text-sm shadow-md hover:scale-105 active:scale-95 transition-transform duration-200'
        >
          <span className='mr-1'>{wallet.icon}</span> {wallet.label}
        </button>
      ))}
    </div>
  );
}
