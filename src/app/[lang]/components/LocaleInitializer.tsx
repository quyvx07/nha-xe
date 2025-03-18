"use client";

import { FC, useEffect } from "react";
import { useProjectStore } from "@/store/useProjectStore";

interface LocaleInitializerProps {
  lang: string;
}

// Component này chỉ khởi tạo giá trị locale trong Zustand khi trang được tải
// Component này không hiển thị bất cứ thứ gì trên giao diện
const LocaleInitializer: FC<LocaleInitializerProps> = ({ lang }) => {
  const { setLocale } = useProjectStore();

  useEffect(() => {
    // Chỉ cập nhật khi chạy ở client-side
    setLocale(lang);
  }, [lang, setLocale]);

  // Không render bất cứ thứ gì
  return null;
};

export default LocaleInitializer;
