import Image from 'next/image'
import Link from 'next/link'
import { getBlogPosts, BlogPost } from '../utils/getBlogPosts'

export default function BlogPage() {
  const blogPosts = getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Roca Sound Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post: BlogPost) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src={post.image} 
              alt={post.title} 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-gray-500 mb-2 block">{post.category}</span>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  By {post.author} on {new Date(post.date).toLocaleDateString()}
                </span>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-deep-blue hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

