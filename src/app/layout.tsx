import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import { AuthProvider } from '@/components/ui/Provider';

const fontSans = FontSans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Overkill Counter App',
  description: 'Overkill Counter App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge(fontSans.className)}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
