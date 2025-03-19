"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { adminRoutes } from "@/lib/routes";
interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({
  children,
}: SettingsLayoutProps) {
  const pathname = usePathname();

  // Chỉ hiển thị nút back khi đang ở trang con
  const isSubPage = pathname !== adminRoutes.settings();

  return (
    <div className="container max-w-7xl mx-auto pb-20">
      {isSubPage && (
        <div className="sticky top-0 z-10 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="gap-2 pl-0 hover:pl-2 transition-all duration-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Link href={adminRoutes.settings()}>
              <ChevronLeft className="h-4 w-4" />
              Quay lại cài đặt
            </Link>
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-8 pt-4">
        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
