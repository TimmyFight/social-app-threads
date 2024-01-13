import '@/app/globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Social App',
  description: 'Next.js social application inspired by Threads',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-1`}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
