"use client";

import { FC } from "react";
import { useLocale } from "@/hooks/useLocale";

interface LanguageSwitcherProps {
  dict: {
    change_language: string;
    vietnamese: string;
    english: string;
  };
  currentLang: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
  dict,
  currentLang,
}) => {
  const { changeLocale } = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    console.log("Handle locale change:", newLocale, "current:", currentLang);

    // Cập nhật locale trong localStorage qua Zustand
    changeLocale(newLocale);
  };

  return (
    <>
      <button
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        onClick={() => handleLocaleChange(currentLang === "en" ? "vi" : "en")}
      >
        {dict.change_language}
      </button>

      <div className="flex items-center gap-4 mt-4">
        <button
          className={`flex items-center gap-2 hover:underline hover:underline-offset-4 ${
            currentLang === "vi" ? "font-bold" : ""
          }`}
          onClick={() => handleLocaleChange("vi")}
        >
          {dict.vietnamese}
        </button>
        <button
          className={`flex items-center gap-2 hover:underline hover:underline-offset-4 ${
            currentLang === "en" ? "font-bold" : ""
          }`}
          onClick={() => handleLocaleChange("en")}
        >
          {dict.english}
        </button>
      </div>
    </>
  );
};
