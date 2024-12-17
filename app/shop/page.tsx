import Link from 'next/link'
import { ReverbButton } from '../components/ReverbButton'

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop Roca Sound Pedals</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Reverb</h2>
          <p className="mb-4">Find our full range of pedals on Reverb, the musician's marketplace.</p>
          <a 
            href="https://reverb.com/shop/rocas-boutique" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block"
          >
            <ReverbButton size="medium" className="hover:opacity-90 transition-opacity" />
          </a>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Etsy</h2>
          <p className="mb-4">Discover our handcrafted pedals on Etsy, perfect for unique gifts.</p>
          <Link 
            href="https://www.etsy.com/shop/RocaSound" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#F1641E] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors inline-block"
          >
            Shop on Etsy
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Leboncoin</h2>
          <p className="mb-4">For our French customers, find our pedals on Leboncoin.</p>
          <Link 
            href="https://www.leboncoin.fr/boutique/309651/roca_sound.htm" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#FF6E14] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors inline-block"
          >
            Shop on Leboncoin
          </Link>
        </div>
      </div>
    </div>
  )
}

