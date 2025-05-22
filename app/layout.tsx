import type { Metadata } from 'next';
import './globals.css';
import AnimatedBackground from '@/components/AnimatedBackground';

export const metadata: Metadata = {
  title: 'Onchain Storyboard',
  description: 'Comic wallet timeline!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='text-black font-comic'>
        <AnimatedBackground>{children}</AnimatedBackground>
      </body>
    </html>
  );
}
