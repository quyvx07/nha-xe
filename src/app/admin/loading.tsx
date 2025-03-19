import React from 'react';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <h3 className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">
        Đang tải...
      </h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Vui lòng đợi trong giây lát
      </p>
    </div>
  );
} 