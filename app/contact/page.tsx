'use client'

import { useState } from 'react'
import { Linkedin, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target
  setFormData(prevState => ({
    ...prevState,
    [name]: value
  }))
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // Here you would typically send the form data to your server
  console.log('Form submitted:', formData)
  // Reset form after submission
  setFormData({ name: '', email: '', message: '' })
  alert('Thank you for your message. We will get back to you soon!')
}

return (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <p className="mb-4">We'd love to hear from you! Whether you have a question about our products, need technical support, or just want to share your thoughts, please don't hesitate to reach out.</p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Our Address</h2>
          <p>Roca Sound<br />123 Melody Lane<br />Monaco, MC 98000</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <a href="mailto:rocasoundmonaco@gmail.com" className="text-primary hover:underline flex items-center">
            <Mail className="mr-2" size={20} />
            rocasoundmonaco@gmail.com
          </a>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p>+377 99 99 99 99</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Social Media</h2>
          <div className="flex space-x-4">
            <Link href="https://www.linkedin.com/in/melvynrolland/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.instagram.com/rocasoundmonaco/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            ></textarea>
          </div>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
)
}

