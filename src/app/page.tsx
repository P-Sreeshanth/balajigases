import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLeaf, FaIndustry, FaTruck, FaShieldAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Industrial gases background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container-custom relative z-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Sri Balaji Industrial Gases
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Your trusted partner in eco-friendly gas solutions, dedicated to innovation and sustainability.
            </p>
            <button className="btn-primary bg-white text-primary hover:bg-gray-100">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FaLeaf className="w-8 h-8" />}
              title="Eco-Friendly Solutions"
              description="Committed to sustainable practices and environmental responsibility."
            />
            <FeatureCard
              icon={<FaIndustry className="w-8 h-8" />}
              title="Industrial Excellence"
              description="State-of-the-art production facility with cutting-edge technology."
            />
            <FeatureCard
              icon={<FaTruck className="w-8 h-8" />}
              title="Fast Delivery"
              description="Efficient logistics ensuring timely delivery of your gas requirements."
            />
            <FeatureCard
              icon={<FaShieldAlt className="w-8 h-8" />}
              title="Safety First"
              description="Highest safety standards and quality control measures."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
} 