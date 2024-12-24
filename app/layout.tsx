import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import localFont from "next/font/local";
import Image from 'next/image';
import logo from '@/public/images/logo.svg'


const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.ttf",
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Refugee Outreach Service",
  description: "Refugee Outreach Service",
  icons: {
		icon: "/images/logo.ico",
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body>
        <div className="w-[1440px] h-[113px] bg-red-600">
          <div className="pt-[10px] flex justify-center">
            <Link href="/" className="flex">
              <Image src={logo} alt="logo" className="h-10 w-10"/> 
              <span className="text-black text-5xl font-extralight font-['PretendardVariable']">
                Refugee
              </span>
              <span className="text-[#009476] text-5xl font-extralight font-['PretendardVariable']">
                Outreach Service
              </span>
            </Link>
            <div className="flex pl-[162px]">
              <Link href="/signin" className="flex flex w-[86px] h-[30px] text-center text-black text-l font-normal font-['PretendardVariable']">회원가입</Link>
              <Link href="/login" className="flex w-[86px] h-[30px] text-center text-black text-l font-normal font-['PretendardVariable']">로그인</Link>
            </div>
            
          </div>
          <div className="p-[10px]"></div>
          <div className="text-center">
            <Link href="/news" className=" text-center text-black text-xl font-extralight font-['PretendardVariable']">
              뉴스
            </Link>
            <Link href="/shelter" className="ml-[98px] text-center text-black text-xl font-extralight font-['PretendardVariable']">
              대피소 위치
            </Link>
            <Link href="/call" className="ml-[98px] text-center text-black text-xl font-extralight font-['PretendardVariable']">
              비상 연락망
            </Link>
            <Link href="/inform" className="ml-[98px] text-center text-black text-xl font-extralight font-['PretendardVariable']">
              정보 제공
            </Link>
            <Link href="/lang" className="ml-[98px] text-center text-black text-xl font-extralight font-['PretendardVariable']">
              언어
            </Link>
            <Link href="/done" className="ml-[98px] text-center text-black text-xl font-extralight font-['PretendardVariable']">
              후원
            </Link>
          </div>
          
        </div>
        {children}
      </body>
    </html>
  );
}
