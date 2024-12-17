'use client'

import Image from 'next/image'
import Link from 'next/link'
import { getBlogPosts, BlogPost } from './utils/getBlogPosts'

export const allProducts = [
  {
    id: 1,
    name: 'RocaDrive',
    slug: 'rocadrive',
    description: 'Experience the warm, dynamic overdrive of our flagship pedal.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'overdrive'
  },
  {
    id: 2,
    name: 'Pi-RAT',
    slug: 'pirat',
    description: 'Unleash powerful, gritty distortion with our Pi-RAT pedal.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'distortion'
  },
  {
    id: 3,
    name: 'Turbia Fuzz',
    slug: 'turbia-fuzz',
    description: 'Experience thick, vintage-inspired fuzz tones with the Turbia Fuzz.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'fuzz'
  },
  {
    id: 4,
    name: 'Roca Fuzz',
    slug: 'roca-fuzz',
    description: 'Our take on classic fuzz, delivering rich, harmonic distortion.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'fuzz'
  },
  {
    id: 5,
    name: 'Gain Cube',
    slug: 'gain-cube',
    description: 'Versatile gain-shaping pedal for a wide range of tones.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'overdrive'
  },
  {
    id: 6,
    name: 'Roca Disto',
    slug: 'roca-disto',
    description: 'A two-channel distortion pedal offering a wide sonic palette.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'distortion'
  },
  {
    id: 7,
    name: '2600 Fuzz',
    slug: '2600-fuzz',
    description: 'Relive the magic of 1980s video games with this unique 8-bit console inspired fuzz effect.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'fuzz'
  },
  {
    id: 8,
    name: 'Moka Percolator',
    slug: 'moka-percolator',
    description: 'A modified Harmonic Percolator circuit housed in an Italian Moka pot.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'fuzz'
  },
  {
    id: 9,
    name: 'Treble Bleed',
    slug: 'treble-bleed',
    description: 'Maintain your guitar\'s high-end when rolling off the volume.',
    image: '/placeholder.svg?height=200&width=300',
    category: 'accessories'
  }
]

export default function Home() {
  const blogPosts = getBlogPosts()
  const latestBlogPosts = blogPosts.slice(0, 2) // Get the two most recent blog posts

  return (
    <div className="container mx-auto px-4">
      <section className="hero bg-ocean-green text-deep-blue py-16 rounded-lg mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Feel the Passion, Hear the Difference, Be Yourself</h1>
          <p className="text-xl mb-8">Discover our handmade, high-quality guitar pedals crafted in Monaco</p>
          <div className="flex justify-center space-x-4">
            <Link href="/products" className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
              Explore Our Pedals
            </Link>
            <Link href="/custom-shop" className="bg-secondary text-primary px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
              Design Your Pedal
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-products mb-12 overflow-hidden">
        <h2 className="text-2xl font-bold mb-4">Featured Pedals</h2>
        <div className="pedal-carousel">
          {allProducts.map((product) => (
            <div key={product.id} className="pedal-item">
              <div className="bg-sandy-beige p-4 rounded transition-all duration-500 ease-in-out transform hover:scale-105">
                <Image src={product.image} alt={product.name} width={300} height={200} className="mb-4 rounded" />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="mb-4">{product.description}</p>
                <Link href={`/products/${product.slug}`} className="text-primary hover:underline">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="latest-blog-posts mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestBlogPosts.map((post: BlogPost) => (
            <div key={post.id} className="bg-warm-sand p-4 rounded">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">Read More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

