'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="vi">
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/20 mb-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-500" />
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Đã xảy ra lỗi
          </h1>
          
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
            Rất tiếc, đã xảy ra lỗi không mong muốn. Vui lòng thử lại sau hoặc liên hệ với quản trị viên.
          </p>
          
          <div className="mt-8">
            <Button 
              onClick={() => reset()} 
              className="flex items-center justify-center"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Thử lại
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
      </body>
    </html>
  );
} 