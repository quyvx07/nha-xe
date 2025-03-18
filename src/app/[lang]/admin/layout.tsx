// import { getSession } from "next-auth/react";
// import { redirect } from "next/navigation";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Menu } from "lucide-react";
import type { Metadata } from "next";

// Navigation icons - import your preferred icons here
import {
  LayoutDashboard,
  Car,
  Users,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quản lý nhà xe Hải Dương - Hà Nội",
  description: "Hệ thống quản lý xe khách tuyến cố định Hải Dương - Hà Nội",
};

interface AdminLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

async function AdminLayout({ children, params }: AdminLayoutProps) {
  //   const session = await getSession();
  //   if (!session || !session.user) {
  //     redirect(`/${params.lang}/login?from=/admin`);
  //   }

  const { lang } = await params;

  const navItems = [
    {
      href: `/${lang}/admin/dashboard`,
      label: "Dashboard",
      icon: <LayoutDashboard className="w-6 h-6" />,
    },
    {
      href: `/${lang}/admin/trips`,
      label: "Chuyến xe",
      icon: <Car className="w-6 h-6" />,
    },
    {
      href: `/${lang}/admin/drivers`,
      label: "Tài xế",
      icon: <Users className="w-6 h-6" />,
    },
    {
      href: `/${lang}/admin/analytics`,
      label: "Thống kê",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      href: `/${lang}/admin/settings`,
      label: "Cài đặt",
      icon: <Settings className="w-6 h-6" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top bar for mobile */}
      {/* <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-b dark:border-gray-700 md:px-6">
        <div className="flex items-center space-x-3">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="px-2 py-6">
                <div className="mb-8 flex items-center">
                  <h1 className="text-xl font-bold dark:text-white">
                    Nhà Xe Admin
                  </h1>
                </div>
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-4 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      {item.icon}
                      <span className="text-base">{item.label}</span>
                    </Link>
                  ))}
                  <Link
                    href={`/${lang}/logout`}
                    className="flex items-center gap-3 rounded-lg px-3 py-4 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    <LogOut className="w-6 h-6" />
                    <span className="text-base">Đăng xuất</span>
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <h1 className="text-lg font-semibold md:hidden dark:text-white">
            Nhà Xe Admin
          </h1>
        </div>

        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/admin.png" alt="Admin" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </div>
      </header> */}

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-1 min-h-0 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
          <div className="flex items-center justify-center h-16 border-b dark:border-gray-700">
            <h1 className="text-xl font-bold dark:text-white">Nhà Xe Admin</h1>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
            <nav className="flex-1 px-3 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="p-4 border-t dark:border-gray-700">
            <Link
              href={`/${lang}/logout`}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <LogOut className="w-5 h-5" />
              <span>Đăng xuất</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 md:pl-64">
        <div className="container max-w-7xl mx-auto py-4 px-4 md:px-6 md:py-8">
          {children}
        </div>
      </main>

      {/* Mobile bottom navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-20 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="flex justify-around">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 py-3 text-xs font-medium text-gray-500 hover:text-primary"
            >
              <div className="mb-1">{item.icon}</div>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
      {/* Padding to prevent content being hidden behind bottom nav */}
      <div className="h-16 md:hidden"></div>
    </div>
  );
}

export default AdminLayout;
