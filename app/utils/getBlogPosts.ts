export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Art of Pedal Crafting: A One-Man Operation in Monaco',
    slug: 'the-art-of-pedal-crafting',
    excerpt: 'Discover the intricate process behind our handmade pedals, crafted by a single engineer-musician in a historic Monaco workshop, blending technical precision with musical intuition.',
    content: `
      <p>At Roca Sound, we believe that creating the perfect guitar pedal is both an art and a science. Our journey into the world of pedal crafting began with a simple desire: to create tools that inspire musicians and enhance their creativity. In this post, I'll take you behind the scenes of our pedal crafting process, which is a true labor of love and a one-man operation based on the Rock of Monaco.</p>
      
      <!-- Rest of the content -->
    `,
    date: '2023-11-22',
    author: 'Melvyn',
    image: '/images/pedal-crafting.jpg',
    category: 'Behind the Scenes'
  },
  {
    id: 2,
    title: 'Understanding Tone Controls and Filters in Guitar Gear',
    slug: 'understanding-tone-controls-and-filters',
    excerpt: 'Explore the science behind various tone control systems in guitars, pedals, and amplifiers.',
    content: `
      <p>When shaping your guitar tone, various tone controls and filters play a critical role, whether in your pedalboard, amplifier, or the guitar itself. These systems serve distinct purposes, offering unique ways to craft your sound. In this article, we'll break down popular tone control systems, including the Rat filter, Big Muff tone circuit, the guitar tone knob, the Baxandall EQ, and various 3-band EQ systems including Fender, Marshall, Sunn Model T, and Hi-Watt.</p>

      <!-- Rest of the content -->
    `,
    date: '2023-11-25',
    author: 'Melvyn',
    image: '/images/tone-controls-filters.jpg',
    category: 'Tech Deep Dive'
  },
  {
    id: 3,
    title: 'Germanium vs. Silicon Diodes in Guitar Pedals: Science, Clipping, and Tone',
    slug: 'germanium-vs-silicon-diodes',
    excerpt: 'Explore the scientific and sonic differences between germanium and silicon diodes in guitar pedal design.',
    content: `
      <p>In the world of guitar pedal design, diodes are essential for shaping the tone, especially in overdrive, distortion, and fuzz circuits. Among the most debated choices are germanium and silicon diodes, which significantly influence how a pedal sounds and responds to playing dynamics. In this article, we'll explore the scientific and sonic differences between these two diode types, including their impact on clipping and how their atomic properties play a role.</p>

      <!-- Rest of the content -->
    `,
    date: '2023-11-22',
    author: 'Melvyn',
    image: '/images/germanium-vs-silicon-diodes.jpg',
    category: 'Tech Deep Dive'
  },
  {
    id: 4,
    title: 'Soft Clipping vs. Hard Clipping in Guitar Pedals',
    slug: 'soft-vs-hard-clipping',
    excerpt: 'Discover the differences between soft and hard clipping, their tonal characteristics, and how combining them can create versatile pedal designs.',
    content: `
      <p>Clipping is at the heart of guitar distortion, whether it's a subtle overdrive or a full-on fuzz assault. The way clipping is implemented—either soft clipping, hard clipping, or a combination of both—plays a significant role in shaping the sound. This article explores the differences between soft and hard clipping, their tonal characteristics, and how combining them in one pedal can unlock unparalleled versatility.</p>

      <!-- Rest of the content -->
    `,
    date: '2023-11-30',
    author: 'Melvyn',
    image: '/images/soft-vs-hard-clipping.jpg',
    category: 'Tech Deep Dive'
  }
]

export function getBlogPosts() {
  return blogPosts;
}

export function getLatestBlogPost() {
  return blogPosts[0]; // Assuming the array is sorted by date, newest first
}

