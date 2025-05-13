'use client'

import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="gradient-bg text-white pt-12 pb-6 mt-16">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Company Info */}
        <div className="mb-6 md:mb-0">
          <span className="text-2xl font-bold tracking-wide">Sri Balaji Industrial Gases</span>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-accent transition-colors"><FaFacebook className="w-6 h-6" /></a>
            <a href="#" className="hover:text-accent transition-colors"><FaTwitter className="w-6 h-6" /></a>
            <a href="#" className="hover:text-accent transition-colors"><FaLinkedin className="w-6 h-6" /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-lg">
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/products" className="hover:text-accent transition-colors">Products</Link>
          <Link href="/careers" className="hover:text-accent transition-colors">Careers</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-2 text-sm mt-6 md:mt-0">
          <div className="flex items-center gap-2"><FaMapMarkerAlt /> Plot No:5&6/29, Beside Novopan, IDA Phase-II, Patancheru, Sangareddy Dist-502319</div>
          <div className="flex items-center gap-2"><FaPhone /> +91 9949026119</div>
          <div className="flex items-center gap-2"><FaEnvelope /> balajigases2008@gmail.com</div>
        </div>
      </div>
      <div className="mt-8 text-center text-white/70 text-sm">
        &copy; 2008-{new Date().getFullYear()} Sri Balaji Industrial Gases Pvt Ltd. All rights reserved.
      </div>
    </footer>
  )
} 