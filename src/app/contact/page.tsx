'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaQuestionCircle, FaCheckCircle } from 'react-icons/fa'

const faqs = [
  {
    q: 'What gases do you supply?',
    a: 'We supply industrial, medical, and specialty gases including Oxygen, Nitrogen, Argon, CO₂, and more.'
  },
  {
    q: 'Do you offer delivery services?',
    a: 'Yes, we offer fast and reliable delivery services for all our products.'
  },
  {
    q: 'Are your gases certified?',
    a: 'All our gases meet international quality and safety standards and are ISO certified.'
  },
  {
    q: 'How can I request a quote?',
    a: 'You can use the contact form or call/email us directly for a quick quote.'
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

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
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-2xl md:text-3xl max-w-2xl mx-auto font-medium"
        >
          Get in touch for quotes, support, or expert advice
        </motion.p>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding section-gradient">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white/70" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white/70" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white/70" />
              <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white/70">
                <option value="">Select a subject</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="technical-support">Technical Support</option>
                <option value="sales">Sales</option>
                <option value="other">Other</option>
              </select>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Message" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary bg-white/70" />
              <button type="submit" disabled={status === 'loading'} className="btn-glass w-full">
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="text-green-600 text-center flex items-center justify-center gap-2"><FaCheckCircle /> Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-600 text-center">Failed to send message. Please try again.</p>}
            </form>
          </motion.div>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 justify-center"
          >
            <InfoCard icon={<FaMapMarkerAlt className="w-8 h-8 text-primary" />} label="Address" value={<span>Plot No:5&6/29, Beside Novopan, IDA Phase-II, Patancheru, Sangareddy Dist-502319</span>} />
            <InfoCard icon={<FaPhone className="w-8 h-8 text-accent" />} label="Phone" value={"+91 9949026119"} />
            <InfoCard icon={<FaEnvelope className="w-8 h-8 text-secondary" />} label="Email" value={"balajigases2008@gmail.com"} />
            <InfoCard icon={<FaClock className="w-8 h-8 text-primary" />} label="Business Hours" value={<span>Mon-Fri: 9am-6pm<br />Sat: 9am-1pm<br />Sun: Closed</span>} />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-dark">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                whileHover={{ scale: 1.03 }}
                className="glass-card p-6"
              >
                <button type="button" className="flex items-center gap-3 w-full text-left font-semibold text-lg text-primary focus:outline-none" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <FaQuestionCircle className="w-6 h-6" />
                  {faq.q}
                </button>
                <div className={`mt-3 text-gray-700 transition-all ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>{faq.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding gradient-bg text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Reach out for custom solutions, partnership, or support. We're here to help your business grow.
          </p>
          <a href="/contact" className="btn-glass">Request a Callback</a>
        </div>
      </section>
    </main>
  )
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: React.ReactNode }) {
  return (
    <div className="glass-card p-6 flex items-center gap-4">
      <div>{icon}</div>
      <div>
        <div className="font-bold text-dark text-lg">{label}</div>
        <div className="text-gray-700">{value}</div>
      </div>
    </div>
  )
} 