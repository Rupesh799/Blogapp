"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const SafeImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  fill, 
  className, 
  fallbackSrc = "/images/logo.png",
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default SafeImage; 