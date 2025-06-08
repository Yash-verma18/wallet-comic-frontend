
# 🎭 Wallet Comic Frontend

An animated comic-style interface to visualize your wallet activity like never before!  
Built with ✨ Next.js, TailwindCSS, Shadcn UI, and Framer Motion ✨

🔗 **Live Demo**: [Here](https://wallet-comic-frontend.vercel.app/)  
📦 **Backend Repo**: [Here](https://github.com/Yash-verma18/wallet-comic-backend)
🎬 **Demo Video**: _[Here](https://x.com/raymax0x/status/1926544477453214051)

---

## 📌 Features

- 🔍 Input any Ethereum wallet address
- 🎨 Animated comic cards for:
  - ETH Transfers
  - Contract Calls
  - NFT Transfers (with OpenSea images)
  - ERC20 Transfers
- 🎥 Smooth Framer Motion transitions
- 🎭 Comic-style UI with expressive layouts
- ⚡ Lazy-loaded data fetch for optimized performance

---

## 🛠 Tech Stack

| Tech            | Purpose                          |
|-----------------|----------------------------------|
| **Next.js**     | React framework                  |
| **TypeScript**  | Type safety                      |
| **TailwindCSS** | Styling                          |
| **Shadcn UI**   | Component library                |
| **Framer Motion** | Animations                     |
| **Ethers.js**   | Ethereum interactions            |

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Yash-verma18/wallet-comic-frontend.git
cd wallet-comic-frontend
````

### 2. Install Dependencies

```bash
yarn install
```

### 3. Set Environment Variables

Create a `.env.local` file and set the following (if needed):

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

### 4. Run Locally

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```bash
src/
├── app/                    # Next.js App directory
│   └── page.tsx            # Main page
├── components/             # Reusable components
│   ├── ComicCard.tsx
│   ├── ComicCardContractCall.tsx
│   ├── ComicCardNFTTransfer.tsx
│   └── ComicCardERC20Transfer.tsx
├── lib/                    # Utility functions
│   └── types.ts
├── styles/                 # Global styles
└── ...
```


---

## 🤝 Contributing

Pull requests are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

---

## 📄 License

MIT © [Yash Verma](https://yash-verma.me)

---

## 💡 Inspiration

Built as a fun way to make blockchain data more engaging and visually expressive. Comics + Crypto = ❤️



