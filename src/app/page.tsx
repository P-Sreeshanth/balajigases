'use client'

import { FaLeaf, FaIndustry, FaTruck, FaShieldAlt, FaHeartbeat, FaFlask, FaUtensils, FaTools, FaAward, FaUserFriends, FaClock, FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import TimelineSection from '@/components/TimelineSection'
// import FeatureCard from '@/components/FeatureCard'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TimelineSection />
      <main>
        <div className="particle-bg" />
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center gradient-bg text-white text-center relative overflow-hidden parallax">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg"
          >
            Welcome to Sri Balaji Industrial Gases
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-2xl md:text-3xl mb-10 max-w-2xl mx-auto font-medium"
          >
            Your trusted partner in eco-friendly gas solutions, dedicated to innovation and sustainability.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.08 }}
            className="btn-glass"
          >
            Contact Us
          </motion.a>
          <div className="divider-wave absolute bottom-0 left-0 w-full" />
        </section>

        {/* Features Section */}
        <section className="section-padding section-gradient relative z-10">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-dark">Our Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard icon={<FaLeaf className="w-10 h-10 animate-bounce" />} title="Eco-Friendly Solutions" desc="Sustainable practices and environmental responsibility." />
              <FeatureCard icon={<FaIndustry className="w-10 h-10 animate-pulse" />} title="Industrial Excellence" desc="State-of-the-art production and technology." />
              <FeatureCard icon={<FaTruck className="w-10 h-10 animate-spin-slow" />} title="Fast Delivery" desc="Efficient logistics for timely delivery." />
              <FeatureCard icon={<FaShieldAlt className="w-10 h-10 animate-bounce" />} title="Safety First" desc="Highest safety standards and quality control." />
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="section-padding bg-light relative z-10">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-dark">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <IndustryCard icon={<FaHeartbeat className="w-8 h-8 animate-pulse" />} label="Healthcare" />
              <IndustryCard icon={<FaFlask className="w-8 h-8 animate-bounce" />} label="Research & Labs" />
              <IndustryCard icon={<FaUtensils className="w-8 h-8 animate-spin-slow" />} label="Food & Beverage" />
              <IndustryCard icon={<FaTools className="w-8 h-8 animate-bounce" />} label="Manufacturing" />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding section-gradient relative z-10">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-dark">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard icon={<FaAward className="w-10 h-10 text-accent animate-bounce" />} stat="29+" label="Years of Excellence" />
              <StatCard icon={<FaUserFriends className="w-10 h-10 text-accent animate-pulse" />} stat="1000+" label="Happy Clients" />
              <StatCard icon={<FaClock className="w-10 h-10 text-accent animate-spin-slow" />} stat="24/7" label="Support & Delivery" />
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-light relative z-10">
          <div className="container-custom">
            <h2 className="text-4xl font-bold text-center mb-12 text-dark">Our Certifications</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <CertCard label="ISO 9001" />
              <CertCard label="ISO 14001" />
              <CertCard label="OHSAS 18001" />
              <CertCard label="CE Marking" />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding gradient-bg text-white text-center relative z-10">
          <div className="container-custom">
            <h2 className="text-4xl font-bold mb-6">Ready for Reliable Gas Solutions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get in touch for custom solutions, quotes, or expert advice. We're here to help your business thrive.
            </p>
            <a href="/contact" className="btn-glass">Request a Quote</a>
          </div>
        </section>
      </main>
    </>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.04 }}
      className="glass-card p-8 flex flex-col items-center text-center"
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{desc}</p>
    </motion.div>
  )
}

function IndustryCard({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="glass-card p-6 flex flex-col items-center text-center"
    >
      <div className="mb-2 text-secondary">{icon}</div>
      <span className="font-semibold text-lg text-dark">{label}</span>
    </motion.div>
  )
}

function StatCard({ icon, stat, label }: { icon: React.ReactNode, stat: string, label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-card p-8 flex flex-col items-center text-center"
    >
      <div className="mb-4">{icon}</div>
      <span className="text-4xl font-extrabold text-primary mb-2">{stat}</span>
      <span className="text-lg text-dark font-semibold">{label}</span>
    </motion.div>
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