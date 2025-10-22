"use client"

import { useState } from "react"
import Image from "next/image"

interface PlaceholderImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  sizes?: string
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
}

export function PlaceholderImage({ 
  src, 
  alt, 
  width, 
  height, 
  fill = false, 
  className = "", 
  sizes,
  onError 
}: PlaceholderImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState(src)

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!imageError) {
      setImageError(true)
      setImageSrc('/api/placeholder/400/300')
    }
    onError?.(e)
  }

  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        onError={handleError}
      />
    )
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      onError={handleError}
    />
  )
}
