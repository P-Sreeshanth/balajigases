'use client'

import { useState } from 'react'
import { FaUserTie, FaRocket, FaSmile, FaFileUpload, FaCheckCircle } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const jobs = [
  {
    title: 'Sales Executive',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: '2-5 years',
    description: 'Drive sales and build client relationships in the industrial gas sector. Responsible for achieving sales targets and expanding market presence.',
    requirements: [
      'Bachelor\'s degree in Business or related field',
      'Proven track record in B2B sales',
      'Strong communication and negotiation skills',
      'Knowledge of industrial gases market preferred'
    ]
  },
  {
    title: 'Logistics Coordinator',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Manage deliveries and optimize supply chain operations. Ensure timely delivery of gas cylinders and maintain inventory records.',
    requirements: [
      'Bachelor\'s degree in Supply Chain or related field',
      'Experience in logistics management',
      'Strong organizational skills',
      'Knowledge of safety regulations'
    ]
  },
  {
    title: 'Plant Operator',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Operate and maintain gas production equipment. Ensure safe and efficient production processes.',
    requirements: [
      'Technical diploma or degree in Chemical Engineering',
      'Experience in industrial plant operations',
      'Knowledge of safety protocols',
      'Strong problem-solving skills'
    ]
  }
]

const SERVICE_ID = 'service_9hk87yk'
const TEMPLATE_ID = 'qBp-PsNUInpwbk-Ap'
const PUBLIC_KEY = 'oHQH2V_H0W0VHtLeuQK6W'

export default function CareersPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null,
    coverLetter: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [selectedJob, setSelectedJob] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm(prev => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          position: selectedJob,
          experience: form.experience,
          coverLetter: form.coverLetter,
          resume: form.resume ? form.resume.name : 'Not uploaded',
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setForm({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resume: null,
        coverLetter: ''
      })
      setSelectedJob(null)
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Be part of a leading industrial gases company that values innovation, safety, and excellence.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Sri Balaji Industrial Gases?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <FaRocket className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">Advance your career with training, mentorship, and real impact.</p>
            </div>
            <div className="card text-center">
              <FaSmile className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Positive Culture</h3>
              <p className="text-gray-600">Work in a supportive, inclusive, and innovative environment.</p>
            </div>
            <div className="card text-center">
              <FaUserTie className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Industry Leaders</h3>
              <p className="text-gray-600">Be part of a company known for quality, safety, and excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div key={job.title} className="card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-2">{job.title}</h3>
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.experience}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <button 
                  className="btn-primary w-full"
                  onClick={() => setSelectedJob(job.title)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {selectedJob && (
        <section className="section-padding bg-white">
          <div className="container-custom max-w-2xl">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Apply for {selectedJob}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                    <input
                      type="text"
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={form.coverLetter}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Resume (optional)</label>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <FaFileUpload className="w-5 h-5 text-primary" />
                      <span className="text-primary">Upload Resume</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    {form.resume && (
                      <span className="text-sm text-gray-600">{form.resume.name}</span>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    className="btn-secondary flex-1"
                    onClick={() => setSelectedJob(null)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>

                {status === 'success' && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
                      <FaCheckCircle className="text-green-500 w-16 h-16 mb-4" />
                      <h3 className="text-2xl font-bold mb-2 text-green-700">Application Submitted!</h3>
                      <p className="text-gray-700 mb-4 text-center">Thank you for applying. Our team will review your application and get in touch soon.</p>
                      <button className="btn-primary" onClick={() => setStatus('idle')}>Close</button>
                    </div>
                  </div>
                )}
                {status === 'error' && (
                  <div className="text-red-600 text-center">
                    Failed to submit application. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      )}
    </main>
  )
} 