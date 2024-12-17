import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const product = {
id: 8,
name: 'Moka Percolator',
slug: 'moka-percolator',
description: 'A modified Harmonic Percolator circuit housed in an Italian Moka pot, reactive to your guitar\'s volume knob.',
longDescription: 'The Moka Percolator is our unique take on the classic Harmonic Percolator circuit, housed in an authentic Italian Moka pot. This innovative pedal combines the rich, harmonically complex tones of the Percolator with the aesthetic charm of Italian coffee culture. Unlike traditional pedals, the Moka Percolator doesn\'t have any knobs - instead, it\'s highly responsive to your guitar\'s volume knob, allowing for a wide range of tones from subtle grit to full-on fuzz mayhem.',
image: '/placeholder.svg',
category: 'Fuzz',
series: 'Boutique Series',
releaseDate: '2023-12-01',
features: [
  'Modified Harmonic Percolator circuit for rich, harmonically complex tones',
  'Housed in an authentic Italian Moka pot for unique aesthetics',
  'No external knobs - controlled entirely by your guitar\'s volume',
  'Highly responsive to playing dynamics',
  'True bypass switching',
  'Handcrafted in Monaco',
  'Limited edition - each unit is numbered'
],
specs: {
  'Circuit Type': 'Modified Harmonic Percolator',
  'Controls': 'None (responsive to guitar volume)',
  'Housing': 'Authentic Italian Moka pot',
  'Bypass': 'True Bypass',
  'Power': '9V DC, center negative',
  'Current Draw': '10mA',
  'Dimensions': 'Varies (based on Moka pot size)',
  'Weight': '300g (approximate)'
}
}

export default function MokaPercolatorPage() {
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
      <h2 className="text-2xl font-bold mb-4">How It Works</h2>
      <p className="mb-4">
        The Moka Percolator is a unique pedal that doesn't have any external knobs. Instead, it's designed to be incredibly responsive to your guitar's volume knob and your playing dynamics. Here's how to get the most out of it:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>With your guitar volume at max, you'll get a full, rich fuzz tone with complex harmonics.</li>
        <li>Roll back your guitar volume to clean up the tone - around 7-8, you'll find a sweet spot of gritty overdrive.</li>
        <li>At lower guitar volumes (4-6), you'll get a subtle, warm breakup that's perfect for blues and classic rock.</li>
        <li>The pedal is also very responsive to pick attack - play softly for cleaner tones, dig in for more distortion.</li>
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

