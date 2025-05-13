'use client'

import { motion } from 'framer-motion'
import { FaGasPump, FaHeartbeat, FaFlask, FaUtensils, FaTools, FaFilePdf, FaCogs, FaCapsules, FaTruck, FaIndustry, FaCheckCircle } from 'react-icons/fa'

const products = [
  {
    category: 'Industrial Gases',
    icon: <FaGasPump className="w-8 h-8 text-primary" />, 
    items: [
      { name: 'Oxygen', desc: 'High-purity oxygen for industrial applications' },
      { name: 'Nitrogen', desc: 'Pure nitrogen for various industrial processes' },
      { name: 'Argon', desc: 'Ultra-pure argon for welding and manufacturing' },
      { name: 'Carbon Dioxide', desc: 'Food-grade CO₂ for beverage and food industry' },
    ]
  },
  {
    category: 'Medical Gases',
    icon: <FaCapsules className="w-8 h-8 text-accent" />, 
    items: [
      { name: 'Medical Oxygen', desc: 'High-purity oxygen for medical applications' },
      { name: 'Nitrous Oxide', desc: 'Medical-grade nitrous oxide for anesthesia' },
    ]
  },
  {
    category: 'Gas Equipment',
    icon: <FaCogs className="w-8 h-8 text-secondary" />, 
    items: [
      { name: 'Gas Cylinders', desc: 'High-quality gas cylinders in various sizes' },
      { name: 'Flow Meters', desc: 'Precision flow meters for gas control' },
      { name: 'Pressure Regulators', desc: 'Reliable pressure regulators for gas systems' },
    ]
  }
]

const industries = [
  { icon: <FaHeartbeat className="w-8 h-8" />, label: 'Healthcare' },
  { icon: <FaFlask className="w-8 h-8" />, label: 'Research & Labs' },
  { icon: <FaUtensils className="w-8 h-8" />, label: 'Food & Beverage' },
  { icon: <FaTools className="w-8 h-8" />, label: 'Manufacturing' },
  { icon: <FaIndustry className="w-8 h-8" />, label: 'Construction' },
  { icon: <FaTruck className="w-8 h-8" />, label: 'Logistics' },
]

export default function ProductsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="h-[40vh] flex flex-col justify-center items-center gradient-bg text-white text-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        >
          Our Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-2xl md:text-3xl max-w-2xl mx-auto font-medium"
        >
          High-quality gases and equipment for every industry
        </motion.p>
      </section>

      {/* Product Categories */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((cat) => (
              <motion.div
                key={cat.category}
                whileHover={{ scale: 1.04 }}
                className="glass-card p-8 flex flex-col items-center text-center"
              >
                <div className="mb-4">{cat.icon}</div>
                <h2 className="text-2xl font-bold mb-4 text-primary">{cat.category}</h2>
                <ul className="space-y-4 w-full">
                  {cat.items.map((prod) => (
                    <li key={prod.name} className="flex items-center justify-between gap-2 w-full">
                      <div className="text-left">
                        <span className="font-semibold text-dark">{prod.name}</span>
                        <p className="text-gray-700 text-sm">{prod.desc}</p>
                      </div>
                      <a href="#" className="text-accent hover:text-primary transition-colors" title="Download Spec">
                        <FaFilePdf className="w-6 h-6" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-dark">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((ind) => (
              <motion.div
                key={ind.label}
                whileHover={{ scale: 1.08 }}
                className="glass-card p-6 flex flex-col items-center text-center"
              >
                <div className="mb-2 text-secondary">{ind.icon}</div>
                <span className="font-semibold text-lg text-dark">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding gradient-bg text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for specialized gas solutions tailored to your specific requirements.
          </p>
          <a href="/contact" className="btn-glass">Get in Touch</a>
        </div>
      </section>
    </main>
  )
} 