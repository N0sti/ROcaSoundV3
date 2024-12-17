import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const product = {
  id: 4,
  name: 'Roca Fuzz',
  slug: 'roca-fuzz',
  description: 'Elevate your sound to acidic and psychedelic horizons with the Roca Fuzz pedal, a 3-stage octave fuzz distortion circuit.',
  longDescription: 'The Roca Fuzz is our innovative take on classic fuzz, delivering rich, harmonic distortion with a psychedelic twist. This versatile pedal features a 3-stage octave fuzz circuit that allows you to explore a wide range of tones from smooth and velvety to raw and gritty. With its unique controls and carefully tuned circuit, the Roca Fuzz offers an incredible palette of fuzz sounds that will satisfy even the most demanding players.',
  price: 200,
  image: '/placeholder.svg',
  category: 'Fuzz',
  series: 'Roca Series',
  releaseDate: '2023-05-05',
  features: [
    'Blendable Octave: Effortlessly adjust the perfect mix of octave fuzz for a rich, layered sound.',
    'Density Control: Fine-tune your tone from smooth and velvety to raw and gritty by adjusting the gain and response of the second stage.',
    'Sag Control: Simulate the unique characteristics of a drained battery by modifying the bias of the four transistors, allowing you to control gain and dynamic range.',
    'Filter Control: Shape your sound with a 3dB/octave low-pass filter, smoothing and sculpting your tone.',
    'Voice Switch: Transform the responsiveness and gain of the first stage by changing its clipping (switching from fuzz to distortion).',
    'Wide range of fuzz tones from subtle to extreme',
    'True bypass switching',
    'Compact, pedalboard-friendly design'
  ],
  specs: {
    'Controls': 'Sag, Density, Volume, Filter, Voice, Octave',
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

