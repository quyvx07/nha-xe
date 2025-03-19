import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface PageProps {
  children: React.ReactNode;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Ứng dụng NextJS đa ngôn ngữ",
    description: "Ứng dụng NextJS với hỗ trợ tiếng Anh và tiếng Việt",
    manifest: `/manifest.json`,
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Nhà Xe Admin",
    },
  };
}

export default async function LangLayout({ children }: PageProps) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
