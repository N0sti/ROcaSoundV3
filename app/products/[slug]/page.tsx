import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const products = [
  {
    id: 1,
    slug: 'rocadrive',
    name: 'RocaDrive',
    description: 'Experience the warm, dynamic overdrive of our flagship pedal.',
    longDescription: 'The RocaDrive is our flagship overdrive pedal, designed to deliver warm, dynamic tones that respond beautifully to your playing style. With its versatile EQ and gain range, the RocaDrive can take you from subtle, edge-of-breakup tones to full-bodied, saturated overdrive. Built with premium components and our proprietary circuitry, the RocaDrive is the perfect pedal for players who demand the utmost in tone and quality.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Overdrive',
    series: 'Roca Series',
    releaseDate: '2022-01-15',
    features: [
      'Wide gain range from subtle boost to saturated overdrive',
      'Three-band EQ for precise tone shaping',
      'True bypass switching',
      'Handcrafted in Monaco',
      'Durable aluminum enclosure'
    ],
    specs: {
      'Input Impedance': '1M Ω',
      'Output Impedance': '10k Ω',
      'Power': '9V DC, center negative (not included)',
      'Current Draw': '15mA',
      'Dimensions': '2.6" x 4.8" x 1.5"',
      'Weight': '0.5 lbs'
    }
  },
  // ... (other products)
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug)

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

