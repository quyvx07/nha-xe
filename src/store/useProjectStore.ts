import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultLocale } from "@/middleware";

interface ProjectState {
  locale: string;
  setLocale: (locale: string) => void;
}

// Tạo store với middleware persist để lưu vào localStorage
export const useProjectStore = create<ProjectState>()(
  persist(
    (set) => ({
      // Giá trị ban đầu lấy từ defaultLocale trong middleware
      locale: defaultLocale,

      // Hàm để cập nhật locale
      setLocale: (locale: string) => {
        console.log("Setting locale to:", locale);
        set({ locale });
      },
    }),
    {
      name: "project-storage",
    }
  )
);
