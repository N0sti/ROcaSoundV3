import Image from 'next/image'
import Link from 'next/link'

const product = {
  id: 9,
  name: 'Treble Bleed',
  slug: 'treble-bleed',
  description: 'Maintain your guitar\'s high-end when rolling off the volume.',
  longDescription: 'The Roca Sound Treble Bleed is an essential modification for guitarists who want to preserve their tone when rolling back their volume. This simple yet effective circuit prevents the loss of high frequencies that typically occurs when you decrease your guitar\'s volume, ensuring your sound stays crisp and articulate at any volume setting.',
  price: 29,
  image: '/placeholder.svg',
  category: 'Accessories',
  series: 'Roca Accessories',
  releaseDate: '2023-08-01',
  productType: 'Other',
  features: [
    'Preserves high-end frequencies when rolling off volume',
    'Easy to install',
    'Compatible with most electric guitars',
    'Improves tonal consistency across all volume levels',
    'Handcrafted with high-quality components'
  ],
  specs: {
    'Circuit Type': 'Passive',
    'Components': 'High-quality capacitor and resistor',
    'Installation': 'Solder to volume pot',
    'Compatibility': 'Most electric guitars',
    'Weight': '< 5g'
  }
}

export default function TrebleBleedPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className="text-primary hover:underline mb-4 inline-block">&larr; Back to Products</Link>
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

