'use client'

import { motion } from 'framer-motion'
import { FaRegBuilding, FaRegLightbulb, FaRegHandshake, FaAward, FaUserTie, FaUserAlt, FaCheckCircle } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="h-[50vh] flex flex-col justify-center items-center gradient-bg text-white text-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-2xl md:text-3xl max-w-2xl mx-auto font-medium"
        >
          Leading the way in industrial gas solutions since 1995
        </motion.p>
      </section>

      {/* Company Story & Timeline */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h2 className="text-3xl font-bold mb-4 text-primary flex items-center gap-2"><FaRegBuilding /> Our Story</h2>
              <p className="text-gray-700 mb-4">
                Sri Balaji Industrial Gases Pvt Ltd was established in 2008 with a vision to provide high-quality industrial gases and equipment to businesses across India. Over the years, we have grown to become one of the leading manufacturers and suppliers of industrial gases in the country.
              </p>
              <p className="text-gray-700 mb-4">
                Our state-of-the-art manufacturing facility in Hyderabad is equipped with the latest technology and adheres to the highest safety standards. We maintain strict quality control measures to ensure that our products meet international standards.
              </p>
              <p className="text-gray-700">
                Today, we serve a wide range of industries including healthcare, manufacturing, food processing, and construction, providing them with reliable gas solutions and exceptional service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2"><FaRegLightbulb /> Our Journey</h3>
              <ul className="space-y-4">
                <li><span className="font-bold text-primary">1995:</span> Company founded</li>
                <li><span className="font-bold text-primary">2002:</span> Expanded to new facility</li>
                <li><span className="font-bold text-primary">2010:</span> Achieved ISO certifications</li>
                <li><span className="font-bold text-primary">2020:</span> 1000+ clients served</li>
                <li><span className="font-bold text-primary">Today:</span> Leading provider in India</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2"><FaRegHandshake /> Our Mission</h3>
              <p className="text-gray-700">
                To provide high-quality industrial gases and equipment while maintaining the highest standards of safety, reliability, and customer service. We are committed to innovation and sustainable practices in everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent flex items-center gap-2"><FaRegLightbulb /> Our Vision</h3>
              <p className="text-gray-700">
                To be the leading provider of industrial gas solutions in India, recognized for our quality, innovation, and commitment to customer satisfaction. We aim to contribute to the growth of various industries while maintaining environmental responsibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding section-gradient">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-dark">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <CertCard label="ISO 9001" />
            <CertCard label="ISO 14001" />
            <CertCard label="OHSAS 18001" />
            <CertCard label="CE Marking" />
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-dark">Meet Our Team</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <TeamCard name="Mr. P.S.N Goud" title="DIRECTOR" icon={<FaUserTie className="w-16 h-16 text-primary" />} color="primary" />
            <TeamCard name="Mr. T. Srikanth" title="MARKETING MANAGER" icon={<FaUserAlt className="w-16 h-16 text-accent" />} color="accent" />
          </div>
        </div>
      </section>
    </main>
  )
}

function CertCard({ label }: { label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="glass-card px-8 py-6 flex flex-col items-center text-center"
    >
      <FaCheckCircle className="w-8 h-8 text-green-500 mb-2" />
      <span className="font-semibold text-lg text-dark">{label}</span>
    </motion.div>
  )
}

function TeamCard({ name, title, icon, color }: { name: string, title: string, icon: React.ReactNode, color: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.04 }}
      className="glass-card p-8 flex flex-col items-center text-center"
    >
      <div className={`mb-4 ${color === 'primary' ? 'text-primary' : 'text-accent'}`}>{icon}</div>
      <h3 className="text-2xl font-bold text-center mb-2">{name}</h3>
      <p className={`text-center text-lg font-semibold mb-1 ${color === 'primary' ? 'text-primary' : 'text-accent'}`}>{title}</p>
    </motion.div>
  )
} 