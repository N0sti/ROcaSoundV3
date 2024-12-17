import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPosts } from '../../utils/getBlogPosts'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blogPosts = getBlogPosts()
  const post = blogPosts.find(post => post.slug === params.slug)

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
        <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}

