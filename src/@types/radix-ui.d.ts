declare module '@radix-ui/react-switch' {
  import * as React from 'react';
  
  type SwitchPrimitives = {
    Root: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLButtonElement> & {
      checked?: boolean;
      defaultChecked?: boolean;
      onCheckedChange?: (checked: boolean) => void;
      disabled?: boolean;
    } & React.RefAttributes<HTMLButtonElement>>;
    
    Thumb: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
  };
  
  const SwitchPrimitives: SwitchPrimitives;
  export = SwitchPrimitives;
} 