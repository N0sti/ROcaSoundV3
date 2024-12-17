import Link from 'next/link'
import { Linkedin, Instagram, Music, Mail } from 'lucide-react'

export default function LinksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Connect with Roca Sound</h1>
      <div className="max-w-md mx-auto space-y-6">
        <a 
          href="mailto:rocasoundmonaco@gmail.com"
          className="flex items-center p-4 bg-deep-blue text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <Mail size={24} className="mr-4" />
          <span>Email Us</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/melvynrolland/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center p-4 bg-deep-blue text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <Linkedin size={24} className="mr-4" />
          <span>Connect on LinkedIn</span>
        </a>
        <a 
          href="https://www.instagram.com/rocasoundmonaco/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center p-4 bg-deep-blue text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <Instagram size={24} className="mr-4" />
          <span>Follow us on Instagram</span>
        </a>
        <a 
          href="https://reverb.com/shop/roca-sound" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center p-4 bg-deep-blue text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <Music size={24} className="mr-4" />
          <span>Shop on Reverb</span>
        </a>
      </div>
    </div>
  )
}

