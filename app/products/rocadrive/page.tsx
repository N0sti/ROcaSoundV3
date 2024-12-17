import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const product = {
id: 1,
name: 'RocaDrive',
slug: 'rocadrive',
description: 'A two-channel drive pedal designed to offer a wide range of tones, from subtle boost to saturated overdrive.',
longDescription: 'The RocaDrive is a two-channel drive pedal designed to offer a wide range of tones. It uses asymmetric soft clipping combining MOSFETs and germanium diodes, ensuring transparent and dynamic distortion. Highly responsive to guitar playing, this pedal allows you to maintain the clarity of your sound while integrating perfectly with an amp or other pedals.',
image: '/images/products/rocadrive-placeholder.svg',
category: 'Overdrive',
series: 'Roca Series',
releaseDate: '2022-01-15',
features: [
  'Two distinct gain channels for versatile tones',
  'Asymmetric soft clipping using MOSFETs and germanium diodes',
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

export default function RocaDrivePage() {
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
        <button className="bg-deep-blue text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
          Contact for Pricing
        </button>
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
        <li><strong>Voice Button:</strong> Controls the bass response and gain of both channels, offering a range of sounds from Dumble-style to Tube Screamer-like drive from the first amplification stage.</li>
        <li><strong>Tone Filter:</strong> Allows you to sculpt your sound, ranging from energetic crunch to softer, smoother tones.</li>
        <li><strong>Thick Button:</strong> Adjusts the bass response and gain. In the center position, it delivers a classic sound; to the right, it boosts the bass for a thicker sound or ideal for drop-tuned guitars; to the left, it adapts the pedal for bass guitars or guitars desiring a naturally heavy sound.</li>
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

