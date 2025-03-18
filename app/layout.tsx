import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Logo from './components/Logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UrWaiter - Complete Nightlife Management Platform',
  description: 'The all-in-one platform for nightlife venues - manage bookings, tickets, workdays, stock, and more',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}