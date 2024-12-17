import Image from 'next/image'

const pedals = [
  { name: 'RocaDrive', image: '/images/rocadrive.jpg' },
  { name: 'Turbia Fuzz', image: '/images/turbiafuzz.jpg' },
  { name: 'Pi-RAT', image: '/images/pirat.jpg' },
  { name: 'Moka Percolator', image: '/images/MokaPercolator.jpg' },
  { name: 'Treble Bleed', image: '/images/treble-bleed.jpg' },
  { name: 'Roca Fuzz', image: '/images/roca-fuzz.jpg' },
  { name: 'Gain Cube', image: '/images/gain-cube.jpg' },
]

export function PedalCarousel() {
  return (
    <div className="overflow-hidden">
      <div className="pedal-carousel">
        {[...pedals, ...pedals].map((pedal, index) => (
          <div key={index} className="pedal-item">
            <Image
              src={pedal.image}
              alt={pedal.name}
              width={200}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 font-semibold">{pedal.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

