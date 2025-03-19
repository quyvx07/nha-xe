'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/20 mb-4">
          <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-500" />
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Lỗi hệ thống quản trị
        </h1>
        
        <p className="text-base text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
          Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại hoặc liên hệ với đội kỹ thuật.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => reset()} 
            className="flex items-center justify-center"
            variant="default"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Thử lại
          </Button>
          
          <Button asChild variant="outline">
            <Link href="/admin/dashboard" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Về Dashboard
            </Link>
          </Button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-left overflow-auto max-h-60">
            <p className="text-xs font-mono text-red-600 dark:text-red-400">
              {error.message}
            </p>
            <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mt-2">
              {error.stack}
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 