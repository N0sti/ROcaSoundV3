import Link from 'next/link'
import { Linkedin, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Roca Sound. All rights reserved.</p>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-6">
            <li><Link href="/privacy" className="hover:text-secondary transition-smooth">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-secondary transition-smooth">Terms of Service</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="mailto:rocasoundmonaco@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-smooth">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/melvynrolland/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-smooth">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/rocasoundmonaco/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-smooth">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

