import Image from 'next/image'

interface TekiesoftLogoProps {
  className?: string
  width?: number
  height?: number
}

export function TekiesoftLogo({ className = "", width = 48, height = 48 }: TekiesoftLogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/logos/partners/tekiesoft-logo.png"
        alt="Tekiesoft Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  )
}
