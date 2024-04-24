import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header';
import Navigation from '@/components/common/Navigation';

// 아래는 next에서 FontAwesomeIcon 로딩중 발생하는 크기 문제를 해결하기위한 코드
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  manifest:"/manifest.json",
  title: 'AIN',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='flex justify-center items-center h-screen'>
        <div className='flex flex-col justify-center h-full w-full max-w-md bg-gradient-to-b from-[#C776E3] via-[#9772CA] to-[#6B6EB2]'>
          <div className='fixed top-0 w-full max-w-md'>
            <Header />
          </div>
          <div
            className='flex flex-col items-center w-full h-full mt-[65px] mb-[68px]'
          >
            {children}
          </div>
          <div className='fixed bottom-0 flex w-full max-w-md items-end justify-center'>
            <Navigation />
          </div>
        </div>
      </body>
    </html>
  );
}