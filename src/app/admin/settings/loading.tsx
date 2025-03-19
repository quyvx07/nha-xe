import React from 'react';
import { Skeleton } from '../../../components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function SettingsLoading() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-4 w-[300px] mt-2" />
      </div>
      
      <Separator />
      
      <div className="space-y-2">
        <div className="flex space-x-2">
          <Skeleton className="h-10 w-[120px]" />
          <Skeleton className="h-10 w-[120px]" />
          <Skeleton className="h-10 w-[120px]" />
          <Skeleton className="h-10 w-[120px]" />
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-[200px]" />
          <Skeleton className="h-4 w-[300px] mt-2" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
          <Skeleton className="h-10 w-[120px] mt-4" />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-[200px]" />
          <Skeleton className="h-4 w-[300px] mt-2" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-3 w-[250px]" />
              </div>
              <Skeleton className="h-6 w-10" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Skeleton className="h-4 w-[150px]" />
                <Skeleton className="h-3 w-[250px]" />
              </div>
              <Skeleton className="h-6 w-10" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 