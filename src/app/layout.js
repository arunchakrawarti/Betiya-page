import { Noto_Sans } from 'next/font/google';
import "./globals.css";
import MainLayout from '@/components/Layout/MainLayout';

const notoSans = Noto_Sans({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Betiyan.in",
  description: "We teach values not stories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={notoSans.className}>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
