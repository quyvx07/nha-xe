import Link from 'next/link';
import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Thông tin công ty */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Nhà xe Hải Dương
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span>123 Đường ABC, TP. Hải Dương</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>0123.456.789</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>contact@nhaxehaiduong.com</span>
              </p>
              <Link 
                href="https://facebook.com" 
                target="_blank"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span>Nhà xe Hải Dương</span>
              </Link>
            </div>
          </div>

          {/* Liên kết */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/schedule" className="hover:text-primary">
                  Lịch trình
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Thông tin thêm */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Thông tin thêm
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {currentYear} Nhà xe Hải Dương. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 