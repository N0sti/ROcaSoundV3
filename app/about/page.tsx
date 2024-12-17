import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Roca Sound</h1>
      <section className="mb-8">
        <p className="mb-4">
          Hi, I'm <strong>Melvyn</strong>, an engineer and multi-instrumentalist musician. I design and handcraft pedals with the goal of putting a piece of myself into each one I make. 
          Every pedal is artisanally created in Monaco, on the Rock. The name <strong>Roca</strong> means "the Rock" in Monegasque, symbolizing our origin and values.
        </p>
      </section>
      <section className="mb-8">
        <Image 
          src="/images/monaco-rock.jpg" 
          alt="The Rock of Monaco" 
          width={800} 
          height={400} 
          className="rounded-lg"
        />
      </section>
      <section className="mb-8">
        <p className="mb-4">
          Our pedals are handmade with love and care, which means slight variations in color and sound might occur between two pedals of the same model. 
          This uniqueness reflects the personal touch of craftsmanship. Supporting sustainability is at the core of our philosophy. 
          I'm a firm believer in the <strong>right to repair</strong> and have actively participated in repair cafes to give electronic products a second life.
        </p>
      </section>
      <section className="mb-8">
        <p className="mb-4">At Roca Sound, we strive to make our pedals not just long-lasting but also reusable and repairable. Each pedal is designed to be:</p>
        <ul className="list-disc pl-6">
          <li>Built with through-hole components (THT) for easier soldering and desoldering.</li>
          <li>Clearly labeled with component values, allowing for repairs or customization.</li>
          <li>Designed with PCBs mounted via pots and switches for easy disassembly.</li>
          <li>Equipped with footswitches and jacks that are not circuit-mounted, making replacements simpler.</li>
          <li>Housed in aluminum enclosures that are engraved with laser etching, allowing for easy repainting and modifications.</li>
          <li>Chips are socketed, making it easy to replace or experiment with other chips.</li>
        </ul>
      </section>
    </div>
  )
}

