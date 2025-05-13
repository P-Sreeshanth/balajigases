'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGasPump, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'

const products = [
  'Oxygen',
  'Nitrogen',
  'Argon',
  'Carbon Dioxide',
  'Medical Oxygen',
  'Nitrous Oxide',
]

export default function BookPage() {
  const [form, setForm] = useState({ product: '', quantity: '', address: '', date: '', time: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1200)
  }

  return (
    <main>
      <section className="h-[40vh] flex flex-col justify-center items-center gradient-bg text-white text-center relative overflow-hidden">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Book Gas Online</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="text-2xl md:text-3xl max-w-2xl mx-auto font-medium">Order your required gas in seconds. Fast, easy, and reliable!</motion.p>
      </section>

      <section className="section-padding section-gradient">
        <div className="container-custom max-w-xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-2xl font-bold mb-6 text-center text-primary">Booking Form</motion.h2>
          <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-6">
            <select name="product" value={form.product} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white/70">
              <option value="">Select Product</option>
              {products.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
            <input type="number" name="quantity" value={form.quantity} onChange={handleChange} required min={1} placeholder="Quantity (Cylinders)" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white/70" />
            <input type="text" name="address" value={form.address} onChange={handleChange} required placeholder="Delivery Address" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white/70" />
            <div className="flex gap-4">
              <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white/70" />
              <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white/70" />
            </div>
            <button type="submit" className="btn-primary btn-ripple w-full" disabled={status === 'loading'}>{status === 'loading' ? 'Booking...' : 'Book Now'}</button>
            {status === 'success' && <p className="text-success text-center flex items-center justify-center gap-2"><FaCheckCircle /> Booking successful! We will contact you soon. Location: Plot No:5&6/29, Beside Novopan, IDA Phase-II, Patancheru, Sangareddy Dist-502319 Email: balajigases2008@gmail.com Phone: +91 9949026119</p>}
            {status === 'error' && <p className="text-danger text-center">Failed to book. Please try again.</p>}
          </form>
        </div>
      </section>
    </main>
  )
} 