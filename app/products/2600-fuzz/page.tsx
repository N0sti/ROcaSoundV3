import Image from 'next/image'
import Link from 'next/link'

const product = {
  id: 7,
  name: '2600 Fuzz',
  slug: '2600-fuzz',
  description: 'Relive the magic of 1980s video games with this unique 8-bit console inspired fuzz effect.',
  longDescription: `Get ready to relive the magic of 1980s video games with the 2600 Fuzz, a unique effect that transforms your instrument into a true 8-bit gaming console. Thanks to its CMOS technology, this pedal recreates authentic square waves, reminiscent of the iconic sounds of arcade games from that era.

  The 2600 Fuzz is perfect for musicians looking to add a touch of nostalgia and a retro grain to their sound.

  Key Features:
  - Gate Control: Adjust the effect's response, ranging from a more natural sound to a totally retro, 8-bit video game-worthy rendering.
  - Integrated Octaver: In addition to the current octave, the 2600 Fuzz doubles the sound at -1 and -2 octaves, thickening your sound or allowing you to play in a lower register.`,
  price: 199,
  image: '/placeholder.svg',
  category: 'Fuzz',
  series: 'Game Series',
  releaseDate: '2023-11-01',
  features: [
    'CMOS technology for authentic 8-bit square wave sounds',
    'Gate control for adjustable effect response',
    'Integrated octaver with -1 and -2 octave doubling',
    'Perfect for adding nostalgia and retro grain to your sound',
    'Ideal for experimental and electronic music genres'
  ],
  specs: {
    'Controls': 'Gate, Volume, Pulse, Sub, Deep',
    'Status LED': 'Effect On',
    'Footswitch': 'Effect Bypass',
    'Connections': '1/4" input and output jacks',
    'Power': '9V DC, center negative',
    'Current Draw': '60mA',
    'Dimensions': '1590BB enclosure (119mm x 94mm x 34mm)',
    'Weight': '300g (approximate)'
  }
}

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className="text-deep-blue hover:underline mb-4 inline-block">&larr; Back to Products</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">€{product.price}</p>
          <p className="mb-4">{product.longDescription}</p>
          <div className="mb-4">
            <span className="font-semibold">Category:</span> {product.category}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Series:</span> {product.series}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Release Date:</span> {new Date(product.releaseDate).toLocaleDateString()}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
        <table className="w-full border-collapse">
          <tbody>
            {Object.entries(product.specs).map(([key, value]) => (
              <tr key={key} className="border-b">
                <td className="py-2 font-semibold">{key}</td>
                <td className="py-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
