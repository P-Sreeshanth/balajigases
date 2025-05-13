'use client'

import { FaIndustry, FaShieldAlt, FaLeaf, FaUsers } from 'react-icons/fa'

const highlights = [
  {
    icon: <FaIndustry className="w-6 h-6" />,
    title: 'Industry Leader',
    description: 'Trusted manufacturer and supplier of industrial gases since 2008'
  },
  {
    icon: <FaShieldAlt className="w-6 h-6" />,
    title: 'Safety First',
    description: 'ISO certified with highest safety standards'
  },
  {
    icon: <FaLeaf className="w-6 h-6" />,
    title: 'Eco-Friendly',
    description: 'Committed to sustainable and green practices'
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: 'Customer Focus',
    description: 'Dedicated to exceeding customer expectations'
  }
]

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90" />
      
      {/* Hero Content */}
      <div className="relative container-custom py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center text-white mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sri Balaji Industrial Gases
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your trusted partner in industrial and medical gases, delivering excellence and innovation since 2008.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="btn-primary bg-white text-primary hover:bg-gray-100 shadow-md">
              Contact Us
            </button>
            <button className="btn-primary bg-white text-primary hover:bg-primary hover:text-white shadow-md">
              Our Products
            </button>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="transition-all duration-300 transform bg-white/80 hover:-translate-y-2 hover:shadow-2xl rounded-lg p-6 text-primary text-center cursor-pointer"
            >
              <div className="mb-4 flex justify-center">{highlight.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-gray-700">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 