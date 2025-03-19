'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export default function AdminNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <AlertCircle className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          404
        </h1>
        
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Trang quản trị không tồn tại
        </h2>
        
        <p className="text-base text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
          Trang bạn đang tìm kiếm không tồn tại trong hệ thống quản trị.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default">
            <Link href="/admin/dashboard" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Về Dashboard
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
          >
            Quay lại trang trước
          </Button>
        </div>
      </div>
    </div>
  );
} 