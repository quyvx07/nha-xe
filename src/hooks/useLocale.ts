"use client";

import { useProjectStore } from "@/store/useProjectStore";

export const useLocale = () => {
  const { locale, setLocale } = useProjectStore();

  const changeLocale = (newLocale: string) => {
    // Cập nhật trong store
    setLocale(newLocale);

    // Điều hướng đến URL mới với locale mới
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      const currentLocale = pathname.split("/")[1];

      // Nếu URL hiện tại có locale
      if (currentLocale === "en" || currentLocale === "vi") {
        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        window.location.href = newPath;
      } else {
        // Nếu không, thêm locale vào đầu
        window.location.href = `/${newLocale}${pathname}`;
      }
    }
  };

  return { locale, changeLocale };
};
