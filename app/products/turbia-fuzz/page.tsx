import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const product = {
id: 3,
name: 'Turbia Fuzz',
slug: 'turbia-fuzz',
description: 'Be enchanted by the Turbia Fuzz, a unique guitar pedal born in La Turbie, where surreal fog swirls around the mountain, occasionally revealing the sharp rock.',
longDescription: 'Inspired by the legendary Mosrite Fuzzrite, the Turbia Fuzz offers a two-stage series fuzz, bringing depth and richness to your sound. With its unique controls and carefully tuned circuit, the Turbia Fuzz offers an incredible palette of fuzz sounds that will satisfy even the most demanding players.',
image: '/placeholder.svg',
category: 'Fuzz',
series: 'Boutique Series',
releaseDate: '2023-03-20',
features: [
  'Inspired by the legendary Mosrite Fuzzrite',
  'Two-stage series fuzz for depth and richness',
  'Blend control to mix between the first and second stage for optimal sound customization',
  'Bias control to simulate a dying battery, limiting gain for even more varied effects',
  '7 Configuration Switches offering up to 192 possibilities',
  'True bypass switching',
  'Compact, pedalboard-friendly design'
],
specs: {
  'Controls': 'Bias, Blend, Volume; 1 three-position switch and 6 two-position switches',
  'Status LED': 'Effect On',
  'Footswitch': 'Effect Bypass',
  'Connections': '1/4" input and output jacks',
  'Power': '9-18V DC, center negative',
  'Current Draw': '10mA',
  'Dimensions': '1590BB enclosure (119mm x 94mm x 34mm)',
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
      <h2 className="text-2xl font-bold mb-4">Configuration Switches</h2>
      <p>The 7 configuration switches modify the circuit topology, offering up to 192 possibilities:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>All 7 switches up: Vintage fuzz sound</li>
        <li>All 7 switches down: Modern fuzz sound</li>
        <li>Any combination in between: Your unique custom sound</li>
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

