import Image from 'next/image'

interface ReverbButtonProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export function ReverbButton({ size = 'medium', className = '' }: ReverbButtonProps) {
  const sizes = {
    small: { width: 28, height: 28, src: '/Shop-Button-28x28-Og-Round_bpovfm.png' },
    medium: { width: 125, height: 125, src: '/Shop-Button-125x125_qw8cah.png' },
    large: { width: 250, height: 250, src: '/Shop-Button-250x250-Og_ceciys.png' }
  }

  const { width, height, src } = sizes[size]

  return (
    <Image
      src={src}
      alt="Shop on Reverb"
      width={width}
      height={height}
      className={className}
    />
  )
}

