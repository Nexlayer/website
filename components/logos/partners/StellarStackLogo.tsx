import Image from 'next/image'

interface StellarStackLogoProps {
  className?: string
  width?: number
  height?: number
}

export function StellarStackLogo({ className = "", width = 48, height = 48 }: StellarStackLogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/logos/partners/stellarstack-logo.png"
        alt="StellarStack Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  )
}
