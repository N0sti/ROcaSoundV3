'use client'

import Link from 'next/link'
import Image from 'next/image'
import LanguageSelector from './LanguageSelector'
import { ThemeSwitch } from "./Theme-switch";
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo/roca-sound-logo-placeholder.svg" alt="Roca Sound Logo" width={40} height={40} />
          </Link>
          <span className="hidden md:inline ml-2 text-2xl font-light">Roca Sound</span>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav className={`md:flex md:items-center md:w-auto w-full ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:space-x-6 md:flex-row flex flex-col space-y-4 md:space-y-0">
            <li className="md:hidden"><Link href="/" className="hover:text-secondary transition-smooth flex items-center"><Image src="/logo/roca-sound-logo-placeholder.svg" alt="Roca Sound Logo" width={40} height={40} /><span className="ml-2 text-2xl font-light">Roca Sound</span></Link></li>
            <li><Link href="/" className="hover:text-secondary transition-smooth">Home</Link></li>
            <li><Link href="/products" className="hover:text-secondary transition-smooth">Products</Link></li>
            <li><Link href="/custom-shop" className="hover:text-secondary transition-smooth">Custom Shop</Link></li>
            <li><Link href="/blog" className="hover:text-secondary transition-smooth">Blog</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition-smooth">About</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-smooth">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeSwitch />
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}

export default Header
