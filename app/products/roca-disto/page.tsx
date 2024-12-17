import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const product = {
  id: 6,
  name: 'Roca Disto',
  slug: 'roca-disto',
  description: 'A two-channel distortion pedal offering a wide sonic palette, combining asymmetric soft clipping with silicon diodes and asymmetric hard clipping with germanium for a rich and unique distortion.',
  longDescription: 'The Roca Disto is a two-channel distortion pedal offering a wide sonic palette. It combines asymmetric soft clipping with silicon diodes and asymmetric hard clipping with germanium for a rich and unique distortion. Highly responsive to guitar playing, this pedal allows you to achieve a range of tones from subtle grit to full-on distortion.',
  price: 219,
  image: '/placeholder.svg',
  category: 'Distortion',
  series: 'Roca Series',
  releaseDate: '2023-09-01',
  features: [
    'Two distinct gain channels for versatile tones',
    'Asymmetric soft clipping with silicon diodes',
    'Asymmetric hard clipping with germanium',
    'Voice control for adjusting bass response and gain on both channels',
    'Tone filter for shaping your sound from energetic crunch to smoother tones',
    'Thick switch for adjusting bass response and gain',
    'True bypass switching',
    'Handcrafted in Monaco',
    'Durable aluminum enclosure'
  ],
  specs: {
    'Controls': 'Gain I, Gain II, Volume, Voice, Filter, 3-position Thick Switch',
    'Status LEDs': 'Effect On, Gain',
    'Footswitches': 'Effect Bypass, Gain I/Gain II',
    'Connections': '1/4" input and output jacks',
    'Power': '9-18V DC, center negative',
    'Current Draw': '20mA',
    'Dimensions': '1590BB enclosure (119mm x 94mm x 34mm)',
    'Weight': '300g (approximate)'
  }
}

export default function RocaDistoPage() {
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
        <h2 className="text-2xl font-bold mb-4">Controls</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Voice Button:</strong> Controls both the bass response and gain of the two channels, allowing for sounds ranging from Dumble-style to Distortion+ type distortion at the first amplification stage.</li>
          <li><strong>Tone Filter:</strong> Adjusts the smoothness of the sound, allowing you to go from an energetic crunch to softer, smoother tones.</li>
          <li><strong>Thick Button:</strong> Modifies the bass response and gain. In the center position, it offers a classic sound. To the right, it boosts the bass for drop-tuned guitars or for a thicker sound. To the left, it adapts the pedal for bass guitars or guitars desiring a naturally heavier sound.</li>
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

