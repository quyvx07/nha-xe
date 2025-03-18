import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { LanguageAttributeScript } from "./layout-with-lang";
import LocaleInitializer from "./components/LocaleInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Function để lấy tên tiếng Việt bất kể ngôn ngữ
function getVietnameseTitleDescription() {
  return {
    title: "Ứng dụng NextJS đa ngôn ngữ",
    description: "Ứng dụng NextJS với hỗ trợ tiếng Anh và tiếng Việt"
  };
}

// Function để lấy tên tiếng Anh bất kể ngôn ngữ
function getEnglishTitleDescription() {
  return {
    title: "Multilingual NextJS App",
    description: "NextJS app with English and Vietnamese support"
  };
}

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  const { lang } = await params;
  // Truy cập đồng bộ vào các giá trị đã được tính toán trước
  if (lang === 'vi') {
    const { title, description } = getVietnameseTitleDescription();
    return { 
      title, 
      description
    };
  } else {
    const { title, description } = getEnglishTitleDescription();
    return { 
      title, 
      description
    };
  }
}

export default async function LangLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode,
  params: { lang: string }
}>) {
  const { lang } = await params;
  
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <LanguageAttributeScript lang={lang} />
      <LocaleInitializer lang={lang} />
      {children}
    </div>
  );
} 