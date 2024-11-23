import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const inter = Open_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Frontend Journey Blog',
  description: 'Свежие идеи и практики для разработчиков',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
