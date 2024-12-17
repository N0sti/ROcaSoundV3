import Image from 'next/image'
import Link from 'next/link'
import { getBlogPosts } from '../../utils/getBlogPosts'

export default function BlogPost() {
  const blogPosts = getBlogPosts()
  const post = blogPosts.find(post => post.slug === 'understanding-tone-controls-and-filters')

  if (!post) {
    return <div>Post not found</div>
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
          <h2>Understanding Tone Controls and Filters in Guitar Gear: Rat Filter, Big Muff, Guitar Tone Knob, and More</h2>

          <p>When shaping your guitar tone, various tone controls and filters play a critical role, whether in your pedalboard, amplifier, or the guitar itself. These systems serve distinct purposes, offering unique ways to craft your sound. In this article, we'll break down popular tone control systems, including the <strong>Rat filter</strong>, <strong>Big Muff tone circuit</strong>, the <strong>guitar tone knob</strong>, the <strong>Baxandall EQ</strong>, and various <strong>3-band EQ systems</strong> including Fender, Marshall, Sunn Model T, and Hi-Watt. We'll also discuss how and why each is used.</p>

          <h3>1. The Guitar's Tone Knob: Simplicity at Your Fingertips</h3>

          <h4>How It Works:</h4>
          <p>The tone knob on a guitar is a <strong>low-pass filter</strong>. It uses a capacitor and potentiometer to roll off high frequencies as you turn it down.</p>
          <ul>
            <li>At full ("10"), the signal remains unaltered.</li>
            <li>As you lower it, the capacitor filters out higher frequencies, making the tone warmer and darker.</li>
          </ul>

          <h4>Graph: Low-Pass Filter</h4>
          <Image 
            src="/images/guitar-tone-knob-graph.png" 
            alt="Low-Pass Filter Graph" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md my-4"
          />

          <h4>Why It's Useful:</h4>
          <p>The tone knob is a quick, passive way to sculpt tone directly from your guitar. Use it to soften bright pickups or tame harsh distortion.</p>

          <h3>2. The Rat Filter: A Variable Low-Pass Filter</h3>

          <h4>How It Works:</h4>
          <p>The ProCo Rat uses a <strong>variable low-pass filter</strong> controlled by its "Filter" knob. Turning the knob up removes high frequencies, smoothing the distortion.</p>

          <h4>Graph: Variable Low-Pass Filter</h4>
          <Image 
            src="/images/rat-filter-graph.png" 
            alt="Variable Low-Pass Filter Graph" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md my-4"
          />

          <h4>Why It's Useful:</h4>
          <p>The Rat filter allows quick tonal adjustments for aggressive rhythm tones or smoother leads.</p>

          <h3>3. The Big Muff Tone Control: A Mid-Scoop Filter</h3>

          <h4>How It Works:</h4>
          <p>The Big Muff Pi's tone circuit creates a <strong>mid-scoop EQ</strong>, reducing midrange frequencies while emphasizing bass or treble depending on the tone knob position.</p>

          <h4>Graph: Mid-Scoop Filter</h4>
          <Image 
            src="/images/big-muff-graph.png" 
            alt="Mid-Scoop Filter Graph" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md my-4"
          />

          <h4>Why It's Useful:</h4>
          <p>The mid-scoop creates a thick, sustaining sound, ideal for lead tones or shoegaze-style walls of sound.</p>

          <h3>4. Baxandall EQ: Smooth and Transparent Control</h3>

          <h4>How It Works:</h4>
          <p>The Baxandall tone stack allows for <strong>bass and treble shelving</strong>, providing smooth boost or cut.</p>

          <h4>Graph: Baxandall Shelving</h4>
          <Image 
            src="/images/baxandall-eq-graph.png" 
            alt="Baxandall Shelving Graph" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md my-4"
          />

          <h4>Why It's Useful:</h4>
          <p>The Baxandall EQ is prized for its transparency, making it ideal for clean tones and subtle shaping.</p>

          <h3>5. 3-Band EQ Systems: Versatility in Tone Shaping</h3>

          <h4>How It Works:</h4>
          <p>3-band EQ systems use bass, mid, and treble knobs to sculpt the tone. While they all follow this basic principle, different amplifier manufacturers have their unique implementations, resulting in distinct tonal characteristics:</p>

          <ul>
            <li><strong>Fender EQ</strong>: Known for scooped mids and shimmering highs. The bass and treble controls are more reactive than the midrange, creating the classic "Fender sound".</li>
            <li><strong>Marshall EQ</strong>: Midrange-focused for punchy rock tones. The midrange control is typically more pronounced, allowing for the "bark" associated with Marshall amps.</li>
            <li><strong>Sunn Model T EQ</strong>: Features a unique "Brite" switch in addition to the standard bass, mid, and treble controls. This EQ is known for its extreme flexibility, capable of producing both thick, wooly tones and razor-sharp highs.</li>
            <li><strong>Hi-Watt EQ</strong>: Offers a more linear response across the frequency spectrum. The Hi-Watt EQ is often described as more "hi-fi" than other systems, providing clear and articulate tones even at high volumes.</li>
          </ul>

          <h4>Graph: Comparison of 3-Band EQ Systems</h4>
          <Image 
            src="/images/3-band-eq-comparison-graph.png" 
            alt="Comparison of 3-Band EQ Systems Graph" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-md my-4"
          />

          <h4>Why They're Useful:</h4>
          <p>3-band EQ systems offer fine control over your tone, making them adaptable to different genres, playing styles, and room acoustics. The unique characteristics of each system contribute to the "voice" of different amplifiers:</p>
          <ul>
            <li>Fender's EQ is perfect for clean, sparkling tones and takes pedals well.</li>
            <li>Marshall's EQ excels at creating thick, midrange-heavy rock tones.</li>
            <li>The Sunn Model T's EQ allows for extreme tonal sculpting, favored by doom and sludge metal players.</li>
            <li>Hi-Watt's EQ provides exceptional clarity and headroom, ideal for players who need articulate high-volume tones.</li>
          </ul>

          <h3>Conclusion</h3>
          <p>Understanding these different EQ and filter systems can greatly enhance your ability to shape your guitar tone. Whether you're using the simple tone knob on your guitar, a classic effects pedal, or a sophisticated amplifier EQ, each system offers unique ways to craft your sound. Experiment with these different approaches to find the perfect tone for your playing style and musical genre.</p>

          <h3>Sources</h3>
          <ol>
            <li>Horowitz, P., & Hill, W. (2015). <em>The Art of Electronics</em>.</li>
            <li>Teemu Kytölaakso, <em>Designing Tube Amplifiers and Analog Guitar Effects</em> (2012).</li>
            <li>ElectroSmash: Analysis of Rat, Big Muff, and other circuits.</li>
            <li>Singh, J. (2007). <em>The Science of Semiconductor Devices</em>.</li>
            <li>Craig Anderton, <em>Electronic Projects for Musicians</em> (1980).</li>
            <li>Hunter, D. (2012). <em>The Guitar Amp Handbook: Understanding Tube Amplifiers and Getting Great Sounds</em>.</li>
            <li>Maloof, R. (2004). <em>Jim Marshall: The Father of Loud</em>.</li>
          </ol>
        </div>
      </article>
    </div>
  )
}

