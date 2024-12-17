import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// This is a mock database of blog posts. In a real application, you'd fetch this data from an API or database.
const blogPosts = [
  {
    id: 1,
    title: 'The Art of Pedal Crafting',
    content: 'Discover the intricate process behind our handmade pedals and the passion that goes into every creation...',
    date: '2023-05-15',
    author: 'Melvyn',
    image: '/placeholder.svg',
    category: 'Behind the Scenes'
  },
  {
    id: 2,
    title: 'Choosing the Right Overdrive',
    content: 'Learn how to select the perfect overdrive pedal for your playing style and gear setup...',
    date: '2023-06-02',
    author: 'Melvyn',
    image: '/placeholder.svg',
    category: 'Gear Tips'
  },
  // Add more blog posts as needed
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog" className="text-deep-blue hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-4">Posted on {post.date} by {post.author}</div>
        <Image 
          src={post.image} 
          alt={post.title} 
          width={800} 
          height={400} 
          className="rounded-lg shadow-md mb-6"
        />
        <div className="prose lg:prose-xl">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  )
}

