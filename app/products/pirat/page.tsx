import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const product = {
  id: 2,
  name: 'Pi-RAT',
  slug: 'pirat',
  description: 'Unleash powerful, gritty distortion with our Pi-RAT pedal.',
  longDescription: 'The Pi-RAT is our innovative take on classic distortion, combining the best elements of the RAT and Big Muff pedals. This unique hybrid delivers a wide range of tones, from thick, creamy fuzz to aggressive, biting distortion. With its versatile controls and carefully tuned circuit, the Pi-RAT offers an incredible palette of distortion sounds that will satisfy even the most demanding players.',
  price: 189,
  image: '/placeholder.svg',
  category: 'Distortion',
  series: 'Game Series',
  releaseDate: '2023-01-10',
  features: [
    'Hybrid circuit combining RAT and Big Muff characteristics',
    'Wide gain range for versatile distortion tones',
    'Tone control for shaping your sound',
    'Blend knob to mix clean and distorted signals',
    'True bypass switching',
    'Rugged construction for stage reliability'
  ],
  specs: {
    'Input Impedance': '1M Ω',
    'Output Impedance': '10k Ω',
    'Power': '9V DC, center negative (not included)',
    'Current Draw': '20mA',
    'Dimensions': '2.6" x 4.8" x 1.5"',
    'Weight': '300g (approximate)'
  }
}

export default function PiRatPage() {
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

