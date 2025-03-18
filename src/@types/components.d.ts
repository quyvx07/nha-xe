import * as React from 'react';

declare module '@/components/ui/switch' {
  export const Switch: React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLButtonElement> & 
    { checked?: boolean; onCheckedChange?: (checked: boolean) => void } & 
    React.RefAttributes<HTMLButtonElement>
  >;
}

declare module '@/components/ui/skeleton' {
  export const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>>;
} 