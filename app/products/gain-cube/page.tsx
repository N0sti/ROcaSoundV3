import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const product = {
  id: 5,
  name: 'Gain Cube',
  slug: 'gain-cube',
  description: 'Versatile gain-shaping pedal for a wide range of tones.',
  longDescription: 'The Gain Cube is our most versatile overdrive pedal, offering an incredible range of gain-shaping possibilities. From clean boost to high-gain distortion, the Gain Cube can do it all. With its unique 3D EQ control and multiple clipping options, this pedal allows you to sculpt your tone with unprecedented precision.',
  price: 209,
  image: '/placeholder.svg',
  category: 'Overdrive',
  series: 'Game Series',
  releaseDate: '2023-07-01',
  features: [
    '3D EQ control for precise tonal shaping',
    'Multiple clipping options for various overdrive flavors',
    'Boost mode for pushing your amp or other pedals',
    'True bypass switching',
    'Rugged construction for touring musicians'
  ],
  specs: {
    'Input Impedance': '1M Ω',
    'Output Impedance': '10k Ω',
    'Power': '9V DC, center negative (not included)',
    'Current Draw': '25mA',
    'Dimensions': '2.6" x 4.8" x 1.5"',
    'Weight': '300g (approximate)'
  }
}

export default function ProductPage() {
  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className="text-deep-blue hover:underline mb-4 inline-block">&larr; Back to Products</Link>
      <div className="grid md:grid-cols-2 gap-8">
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

