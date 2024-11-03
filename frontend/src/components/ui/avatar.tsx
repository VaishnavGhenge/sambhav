import React from 'react';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
        {...props}
      />
    );
  }
);

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className = '', src, alt = '', ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={`aspect-square h-full w-full ${className}`}
        {...props}
      />
    );
  }
);

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
AvatarImage.displayName = 'AvatarImage';
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };