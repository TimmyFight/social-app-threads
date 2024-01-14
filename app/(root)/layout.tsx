import '@/app/globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';

import BottomBar from '@/components/Organisms/BottomBar/BottomBar';
import LeftBar from '@/components/Organisms/LeftBar/LeftBar';
import RightBar from '@/components/Organisms/RightBar/RightBar';
import TopBar from '@/components/Organisms/TopBar/TopBar';

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <TopBar />

          <main>
            <LeftBar />

            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            <RightBar />
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
