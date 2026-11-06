import { useState } from 'react';
import { Scissors } from 'lucide-react';

interface SalonImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function SalonImage({ src, alt, className = '', priority = false }: SalonImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F8E5EA] via-[#FFF9F5] to-[#E8D8C8] text-[#702F45]/70 p-6 text-center ${className}`}
      >
        <Scissors className="w-8 h-8 mb-2 stroke-[1.5]" aria-hidden="true" />
        <span className="font-display text-base font-medium text-[#702F45]">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
