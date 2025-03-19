'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { 
  User, 
  Shield, 
  Palette, 
  Bell, 
  HelpCircle,
  Building,
  Receipt,
  ChevronRight
} from 'lucide-react';
import { adminRoutes } from '@/lib/routes';

interface SettingsPageProps {
  params: Promise<{ lang: string }>;
}

export default function SettingsPage({ params }: SettingsPageProps) {
  const { lang } = React.use(params as Promise<{ lang: string }>);
  const pathname = usePathname();
  
  const settingsMenu = [
    {
      href: adminRoutes.settings(),
      label: 'Thông tin cá nhân',
      description: 'Cập nhật thông tin cá nhân, email, số điện thoại, ngôn ngữ',
      icon: <User className="h-5 w-5" />
    },
    {
      href: adminRoutes.appearance(),
      label: 'Giao diện',
      description: 'Tuỳ chỉnh giao diện, chế độ tối, màu sắc hệ thống',
      icon: <Palette className="h-5 w-5" />
    },
    {
      href: adminRoutes.notifications(),
      label: 'Thông báo',
      description: 'Quản lý tùy chọn thông báo email, đẩy và thiết bị',
      icon: <Bell className="h-5 w-5" />
    },
    {
      href: adminRoutes.security(),
      label: 'Bảo mật',
      description: 'Thay đổi mật khẩu, cài đặt xác thực hai yếu tố',
      icon: <Shield className="h-5 w-5" />
    },
    {
      href: adminRoutes.company(),
      label: 'Thông tin công ty',
      description: 'Cập nhật thông tin công ty, địa chỉ, liên hệ',
      icon: <Building className="h-5 w-5" />
    },
    {
      href: adminRoutes.billing(),
      label: 'Thanh toán',
      description: 'Quản lý phương thức thanh toán, hóa đơn, gói dịch vụ',
      icon: <Receipt className="h-5 w-5" />
    },
    {
      href: adminRoutes.help(),
      label: 'Trợ giúp & Hỗ trợ',
      description: 'Trung tâm trợ giúp, tài liệu hướng dẫn, liên hệ hỗ trợ',
      icon: <HelpCircle className="h-5 w-5" />
    }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Cài đặt</h1>
        <p className="text-muted-foreground mt-1">
          Quản lý tài khoản và tùy chọn hệ thống
        </p>
      </div>

      <nav className="space-y-2">
        {settingsMenu.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              <div className="flex items-center gap-3">
                <span className={cn(
                  "transition-colors",
                  isActive ? "text-white" : "text-gray-500 dark:text-gray-400"
                )}>
                  {item.icon}
                </span>
                <div>
                  <div className={cn(
                    "font-medium",
                    isActive ? "text-white" : "text-gray-900 dark:text-gray-100"
                  )}>
                    {item.label}
                  </div>
                  <div className={cn(
                    "text-sm",
                    isActive ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                  )}>
                    {item.description}
                  </div>
                </div>
              </div>
              <ChevronRight className={cn(
                "h-5 w-5",
                isActive ? "text-white" : "text-gray-400"
              )} />
            </Link>
          );
        })}
      </nav>
    </div>
  );
} 