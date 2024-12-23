import './globals.css';
import type { Metadata } from 'next';
import Header from './_components/Header';
import Footer from './_components/Footer';

/**
 * Todo: 以下のmetadataを実際のサイトに合わせて変更する
 * HansOnの都合上、localhost:3000に設定しています
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://localhost:3000'),
  title: {
    template: '%s | シンプルなコーポレートサイトサンプル',
    default: 'シンプルなコーポレートサイトサンプル',
  },
  description:
    '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
  openGraph: {
    title: 'シンプルなコーポレートサイトサンプル',
    description:
      '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'https://localhost:3000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
