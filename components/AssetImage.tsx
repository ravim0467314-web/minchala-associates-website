'use client';

import Image from 'next/image';
import { useState } from 'react';

type AssetImageProps = {
  src: string;
  fallback: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function AssetImage({ src, fallback, alt, width, height, className, priority = false }: AssetImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setCurrentSrc(fallback)}
    />
  );
}
