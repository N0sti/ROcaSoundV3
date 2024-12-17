'use client'

import { useState } from 'react'
import { Button } from '../components/ui/button'


const CustomShop = () => {
const [selectedOptions, setSelectedOptions] = useState({
  base: 'Buffer',
  tone: '',
  hardClipping: '',
  softClipping: '',
  killSwitch: false,
  dryOut: false,
  voltage18V: false,
  name: 'Buffer',
  ledColor: '',
  knobLabel: '',
  enclosureColor: ''
})

const [totalPrice, setTotalPrice] = useState(145) // Starting price for the Buffer
const [baseError, setBaseError] = useState(false)
const [selectedDescriptions, setSelectedDescriptions] = useState({
  base: 'A clean buffer to preserve your tone and drive long cable runs.',
  tone: '',
  hardClipping: '',
  softClipping: '',
  killSwitch: '',
  dryOut: '',
  voltage18V: ''
})

const updateOption = (category: string, value: string | boolean, price: number, description: string) => {
  setSelectedOptions(prev => {
    const newOptions = { ...prev, [category]: value }
    if (category === 'base') {
      // Reset soft clipping when changing base
      newOptions.softClipping = ''
      setBaseError(false)
      // Set the pedal name to the base option
      newOptions.name = value as string
      // Reset 18V option if not compatible
      if (['386 Fuzz', 'Octa Fuzz', 'Acapulco Gold', '8-BIT Fuzz'].includes(value as string)) {
        newOptions.voltage18V = false
      }
    }
    return newOptions
  })

  setSelectedDescriptions(prev => ({
    ...prev,
    [category]: description
  }))

  setTotalPrice(prev => {
    let newPrice = prev
    if (category === 'base') {
      // Subtract the price of the previous base option
      const prevBasePrice = baseOptions.find(opt => opt.value === selectedOptions.base)?.price || 0
      newPrice = newPrice - prevBasePrice + price
    } else if (category === 'softClipping') {
      // Subtract the price of the previous soft clipping option
      const prevSoftClippingPrice = softClippingOptions.find(opt => opt.value === selectedOptions.softClipping)?.price || 0
      newPrice = newPrice - prevSoftClippingPrice + price
    } else if (typeof value === 'boolean') {
      newPrice += value ? price : -price
    } else {
      newPrice += price
    }
    return newPrice
  })
}

const toggleKillSwitch = () => {
  const newKillSwitchState = !selectedOptions.killSwitch
  updateOption('killSwitch', newKillSwitchState, 20, newKillSwitchState ? "Instantly cuts the signal when engaged, creating a stutter effect (works also when the pedal is off)." : "")
}

const toggleDryOut = () => {
  const newDryOutState = !selectedOptions.dryOut
  updateOption('dryOut', newDryOutState, 15, newDryOutState ? "Adds a dry output to the pedal for parallel signal processing." : "")
}

const toggle18V = () => {
  const new18VState = !selectedOptions.voltage18V
  updateOption('voltage18V', new18VState, 20, new18VState ? "Runs the pedal at 18V for more headroom and clarity." : "")
}

const baseOptions = [
  { value: 'Buffer', label: 'Buffer', price: 145, description: 'A clean buffer to preserve your tone and drive long cable runs.' },
  { value: 'Mini Amp', label: 'Mini Amp', price: 200, description: 'A 1 Watt Guitar Amp and Preamp to drive a 4-8 ohms speaker in a pedalformfactor.' },
  { value: 'LPB1', label: 'LPB1', price: 150, description: 'A clean boost circuit that can push your amp into natural overdrive.' },
  { value: 'Treble Booster', label: 'Treble Booster', price: 150, description: 'Boosts high frequencies to add clarity and bite to your tone.' },
  { value: 'Bass Booster', label: 'Bass Booster', price: 150, description: 'A clean boost for a fuller, deeper sound.' },
  { value: 'OpAmp Booster', label: 'OpAmp Booster', price: 150, description: 'A clean Buffered boost.' },
  { value: 'Cocked Wah', label: 'Cocked Wah', price: 150, description: 'Bridged T inductorless Wah.' },
  { value: 'Acapulco Gold', label: 'Acapulco Gold', price: 150, description: 'A high-gain powerhouse inspired by a cranked vintage Sunn Model T amp.' },
  { value: 'Big Muff', label: 'Big Muff', price: 180, description: 'Iconic fuzz pedal known for its thick, creamy sustain and singing lead tones.' },
  { value: 'Muff Fuzz', label: 'Muff Fuzz', price: 180, description: '' },
  { value: 'Optical Tremolo', label: 'Optical Tremolo', price: 180, description: '' },
  { value: 'Bass Big Muff', label: 'Bass Big Muff', price: 180, description: 'A Big Muff variant optimized for bass frequencies.' },
  { value: 'Bazz Fuzz', label: 'Bazz Fuzz', price: 140, description: 'A simple yet effective fuzz circuit with a unique, gated character.' },
  { value: 'Tube Screamer', label: 'Tube Screamer', price: 178, description: 'Classic overdrive with a mid-hump that pushes your amp into smooth saturation.' },
  { value: 'Rat', label: 'Rat', price: 180, description: 'Versatile distortion ranging from light overdrive to heavy distortion with a gritty edge.' },
  { value: 'Bass Rat', label: 'Bass Rat', price: 180, description: 'A Rat circuit modified to preserve low-end for bass players.' },
  { value: 'Harmonic Percolator', label: 'Harmonic Percolator', price: 160, description: 'Unique distortion known for its upper octave overtones and dynamic response.' },
  { value: '8-BIT Fuzz', label: '8-BIT Fuzz', price: 170, description: 'CMOS fuzz that creates lo-fi, video game-like tones.' },
  { value: 'Octa Fuzz', label: 'Octa Fuzz', price: 180, description: 'CMOS fuzz that creates an octave down fuzz.' },
  { value: 'Fuzz Rite', label: 'Fuzz Rite', price: 160, description: '' },
  { value: 'Tripple Fuzz', label: 'Tripple Fuzz', price: 170, description: 'Frequency Trippler Velcro Harsh fuzz' },
  { value: '386 Fuzz', label: '386 Fuzz', price: 170, description: 'Gated Power Amp With Germanium Clipping Fuzz' },
  { value: 'Fuzz Face', label: 'Fuzz Face', price: 160, description: 'Classic fuzz circuit known for its warm, vintage tone and dynamic response.' },
  { value: 'Octave Fuzz', label: 'Octave Fuzz', price: 160, description: 'Combines fuzz with an upper octave effect for searing lead tones.' },
  { value: 'OCD', label: 'OCD', price: 180, description: 'Versatile overdrive that can go from transparent boost to high-gain distortion.' },
  { value: 'Distortion +', label: 'Distortion +', price: 150, description: 'Classic distortion pedal known for its raw, aggressive tone.' }
]

const toneOptions = [
  { value: 'Rat Filter', label: 'Rat Filter', price: 19, description: 'A low-pass filter that cuts high frequencies, smoothing out distortion for a warmer tone.' },
  { value: 'Bass Cut', label: 'Bass Cut', price: 19, description: 'Reduces low frequencies to tighten up your tone and reduce muddiness.' },
  { value: 'Laney Presence Filter', label: 'Laney Presence Filter', price: 19, description: 'Boosts upper-mid frequencies for added clarity and cut.' },
  { value: 'Jazz Master Tone Knob', label: 'Jazz Master Tone Knob', price: 20, description: 'Simple but effective high-end roll-off before the effect for a warmer sound and messing up the input impedance.' },
  { value: 'Tele Tone Knob', label: 'Tele Tone Knob', price: 20, description: 'Simple but effective high-end roll-off before the effect for a warmer sound.' },
  { value: 'Muff Tone', label: 'Muff Tone', price: 20, description: 'Scooped mid-range EQ characteristic of the Big Muff, great for thick fuzz tones.' },
  { value: 'AC30 Tone', label: 'AC30 Tone', price: 29, description: 'Emulates the bright, chiming top-end and smooth tone of a Vox AC30 amplifier.' },
  { value: 'Muff Tone + Mids', label: 'Muff Tones + Mids', price: 39, description: 'Big Muff-style tone control with an added midrange control for extra versatility.' },
  { value: 'Bandaxal', label: 'Bandaxal', price: 49, description: 'A unique 2 band EQ that allows for precise midrange control.' },
  { value: 'OCD Filter', label: 'OCD Filter', price: 49, description: 'A filter Control Switchable form hight pass to low pass' },
  { value: '2 band HiWatt', label: '2 band HiWatt', price: 49, description: 'Bass and treble controls inspired by the HiWatt amplifier.' },
  { value: '2 band AC30', label: '2 band AC30', price: 49, description: 'Treble and bass controls modeled after the Vox AC30 amplifier.' },
  { value: '2 band SVT', label: '2 band SVT', price: 69, description: 'Bass and treble controls inspired by the Ampeg SVT bass amplifier.' },
  { value: '3 band HiWatt', label: '3 band HiWatt', price: 69, description: 'Bass, middle, and treble controls based on the HiWatt amplifier.' },
  { value: '3 band Fender', label: '3 band Fender', price: 69, description: 'Classic Fender-style EQ with bass, middle, and treble controls.' },
  { value: '3 band Marshall', label: '3 band Marshall', price: 69, description: 'Powerful EQ section inspired by Marshall amplifiers.' },
  { value: '3 band Kraken', label: '3 band Kraken', price: 69, description: 'Powerful EQ section inspired by the Victory Kraken.' },
  { value: '3 band Sunn', label: '3 band Sunn', price: 69, description: 'Bass, middle, and treble controls modeled after Sunn amplifiers.' }
]

const hardClippingOptions = [
  { value: 'Silicon', label: 'Silicon', price: 9, description: 'Produces a tighter, more aggressive clipping sound.' },
  { value: 'Silicon (assymetric)', label: 'Silicon (assymetric)', price: 11, description: 'Creates a more complex, harmonically rich distortion.' },
  { value: 'Germanium', label: 'Germanium', price: 15, description: 'Offers a smoother, warmer clipping character.' },
  { value: 'LED White', label: 'LED White', price: 10, description: '' },
  { value: 'LED Green', label: 'LED Green', price: 10, description: '' },
  { value: 'LED Red', label: 'LED Red', price: 9, description: '' },
  { value: 'MOSFET', label: 'MOSFET', price: 12, description: 'Emulates tube-like softness in clipping.' },
  { value: 'Rectifier Diode', label: 'Rectifier Diode', price: 12, description: 'Modern Silicon Clipping With a Tight and compressed Sound.' },
  { value: 'Schottky', label: 'Schottky', price: 12, description: 'Offers a unique clipping character between silicon and germanium.' }
]

const softClippingOptions = [
  { value: 'Silicon', label: 'Silicon', price: 9, description: 'Produces a smoother overdrive with silicon diodes.' },
  { value: 'Silicon (assymetric)', label: 'Silicon (assymetric)', price: 11, description: 'Creates a more complex overdrive tone with asymmetric clipping.' },
  { value: 'Germanium', label: 'Germanium', price: 15, description: 'Offers a warm, vintage-style soft clipping.' },
  { value: 'LED White', label: 'LED white', price: 10, description: 'Provides a more open and dynamic soft clipping.' },
  { value: 'LED Red', label: 'LED Red', price: 9, description: 'Delivers a slightly softer clipping than white LEDs.' },
  { value: 'MOSFET', label: 'MOSFET', price: 12, description: 'Emulates tube-like softness in overdrive.' },
  { value: 'Schottky', label: 'Schottky', price: 12, description: 'Offers a unique soft clipping character.' }
]

const ledColors = ['Red', 'Blue', 'Green', 'None']

const enclosureColors = ['White', 'Aluminium']

const generateEmailContent = () => {
  let content = `Custom Pedal Configuration:\n\n`
  content += `Base: ${selectedOptions.base}\n`
  content += `Tone: ${selectedOptions.tone}\n`
  content += `Hard Clipping: ${selectedOptions.hardClipping}\n`
  content += `Soft Clipping: ${selectedOptions.softClipping}\n`
  content += `Kill Switch: ${selectedOptions.killSwitch ? 'Yes' : 'No'}\n`
  content += `Dry Out: ${selectedOptions.dryOut ? 'Yes' : 'No'}\n`
  content += `18V Option: ${selectedOptions.voltage18V ? 'Yes' : 'No'}\n`
  content += `Name: ${selectedOptions.name}\n`
  content += `LED Color: ${selectedOptions.ledColor}\n`
  content += `Knob Label: ${selectedOptions.knobLabel}\n`
  content += `Enclosure Color: ${selectedOptions.enclosureColor}\n`
  content += `\nTotal Price: €${totalPrice}\n`
  return content
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if (!selectedOptions.base) {
    setBaseError(true)
    return
  }
  const emailContent = generateEmailContent()
  const mailtoLink = `mailto:rocasoundmonaco@gmail.com?subject=Custom Pedal Request&body=${encodeURIComponent(emailContent)}`
  window.location.href = mailtoLink
}

return (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Custom Shop Pedal Menu</h1>
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset>
        <legend className="text-xl font-semibold mb-2">Base (Required)</legend>
        <div className="space-y-2">
          {baseOptions.map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="base"
                value={option.value}
                checked={selectedOptions.base === option.value}
                onChange={() => updateOption('base', option.value, option.price, option.description)}
                className="mr-2"
                required
              />
              {option.label} (+€{option.price})
            </label>
          ))}
        </div>
        {baseError && <p className="text-red-500 mt-2">Please select a base option</p>}
        {selectedDescriptions.base && (
          <p className="mt-2 text-sm text-blue-600">{selectedDescriptions.base}</p>
        )}
      </fieldset>

      <fieldset>
        <legend className="text-xl font-semibold mb-2">Tone (Optional, Max 1)</legend>
        <div className="space-y-2">
          {toneOptions.map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="tone"
                value={option.value}
                checked={selectedOptions.tone === option.value}
                onChange={() => updateOption('tone', option.value, option.price, option.description)}
                className="mr-2"
              />
              {option.label} (+€{option.price})
            </label>
          ))}
        </div>
        {selectedDescriptions.tone && (
          <p className="mt-2 text-sm text-blue-600">{selectedDescriptions.tone}</p>
        )}
      </fieldset>

      <fieldset>
        <legend className="text-xl font-semibold mb-2">Hard Clipping (Optional, Max 1)</legend>
        <div className="space-y-2">
          {hardClippingOptions.map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="hardClipping"
                value={option.value}
                checked={selectedOptions.hardClipping === option.value}
                onChange={() => updateOption('hardClipping', option.value, option.price, option.description)}
                className="mr-2"
              />
              {option.label} (+€{option.price})
            </label>
          ))}
        </div>
        {selectedDescriptions.hardClipping && (
          <p className="mt-2 text-sm text-blue-600">{selectedDescriptions.hardClipping}</p>
        )}
      </fieldset>

      {['Big Muff', 'Tube Screamer', 'LPB1', 'Rat', 'Bass Big Muff', 'Bass Rat','Distortion +','Mini Amp'].includes(selectedOptions.base) && (
        <fieldset>
          <legend className="text-xl font-semibold mb-2">Soft Clipping (Optional, Max 1)</legend>
          <div className="space-y-2">
            {softClippingOptions.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name="softClipping"
                  value={option.value}
                  checked={selectedOptions.softClipping === option.value}
                  onChange={() => updateOption('softClipping', option.value, option.price, option.description)}
                  className="mr-2"
                />
                {option.label} (+€{option.price})
              </label>
            ))}
          </div>
          {selectedDescriptions.softClipping && (
            <p className="mt-2 text-sm text-blue-600">{selectedDescriptions.softClipping}</p>
          )}
        </fieldset>
      )}

      <fieldset>
        <legend className="text-xl font-semibold mb-2">Other Options</legend>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="killSwitch"
              checked={selectedOptions.killSwitch}
              onChange={toggleKillSwitch}
              className="mr-2"
            />
            Kill Switch (+€20)
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="dryOut"
              checked={selectedOptions.dryOut}
              onChange={toggleDryOut}
              className="mr-2"
            />
            Dry Out (+€15)
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="voltage18V"
              checked={selectedOptions.voltage18V}
              onChange={toggle18V}
              disabled={['386 Fuzz', 'Octa Fuzz', 'Acapulco Gold', '8-BIT Fuzz'].includes(selectedOptions.base)}
              className="mr-2"
            />
            18V Option (+€20)
            {['386 Fuzz', 'Octa Fuzz', 'Acapulco Gold', '8-BIT Fuzz'].includes(selectedOptions.base) && (
              <span className="text-red-500 ml-2">(Not available for this pedal type)</span>
            )}
          </label>
        </div>
        {selectedDescriptions.killSwitch && (
          <p className="mt-2 text-sm text-blue-600">{selectedDescriptions.killSwitch}</p>
        )}
        {selectedDescriptions.dryOut && (
          <p className="mt-2 text-sm text-blue-600">{selectedDescriptions.dryOut}</p>
        )}
        {selectedDescriptions.voltage18V && (
          <p className="mt-2 text-sm text-blue-600">{selectedDescriptions.voltage18V}</p>
        )}
      </fieldset>

      <fieldset>
        <legend className="text-xl font-semibold mb-2">Aesthetics</legend>
        <div className="space-y-2">
          <label className="block">
            <span className="mr-2">Pedal Name:</span>
            <input
              type="text"
              value={selectedOptions.name}
              onChange={(e) => setSelectedOptions(prev => ({ ...prev, name: e.target.value }))}
              className="border rounded p-1"
            />
          </label>
          <label className="block">
            <span className="mr-2">LED Color:</span>
            <select
              value={selectedOptions.ledColor}
              onChange={(e) => updateOption('ledColor', e.target.value, 0, '')}
              className="border rounded p-1"
            >
              <option value="">Select LED color</option>
              {ledColors.map((color) => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mr-2">Knobs:</span>
            <select
              value={selectedOptions.knobLabel}
              onChange={(e) => updateOption('knobLabel', e.target.value, 0, '')}
              className="border rounded p-1"
            >
              <option value="labeled">Labeled</option>
              <option value="unlabeled">Unlabeled</option>
            </select>
          </label>
          <label className="block">
            <span className="mr-2">Enclosure Color:</span>
            <select
              value={selectedOptions.enclosureColor}
              onChange={(e) => updateOption('enclosureColor', e.target.value, 0, '')}
              className="border rounded p-1"
            >
              <option value="">Select enclosure color</option>
              {enclosureColors.map((color) => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      <section className="summary">
        <h2 className="text-2xl font-bold mb-4">Your Custom Pedal</h2>
        <div className="pedal-preview bg-gray-100 p-4 rounded">
          <ul>
            {Object.entries(selectedOptions).map(([key, value]) => (
              value && (
                <li key={key}>
                  {key === 'killSwitch' ? 'Kill Switch' : 
                   key === 'dryOut' ? 'Dry Out' : 
                   key === 'voltage18V' ? '18V Option' : 
                   key}: {value === true ? 'Yes' : value}
                </li>
              )
            ))}
          </ul>
        </div>
        <p className="text-xl font-bold mt-4">Total Price: €{totalPrice}</p>
      </section>

      <Button type="submit" className="bg-deep-blue text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
        Submit Your Pedal Request
      </Button>
    </form>
  </div>
)
}

export default CustomShop

