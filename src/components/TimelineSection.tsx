import { FaFlagCheckered, FaBuilding, FaCertificate, FaUsers, FaStar } from 'react-icons/fa'

const timeline = [
  {
    year: '2008',
    icon: <FaFlagCheckered className="w-6 h-6 text-primary" />,
    title: 'Company Founded',
    description: 'Sri Balaji Industrial Gases was established.'
  },
  {
    year: '2002',
    icon: <FaBuilding className="w-6 h-6 text-primary" />,
    title: 'Expansion',
    description: 'Expanded to a new, larger facility.'
  },
  {
    year: '2010',
    icon: <FaCertificate className="w-6 h-6 text-primary" />,
    title: 'ISO Certification',
    description: 'Achieved ISO certifications for quality and safety.'
  },
  {
    year: '2020',
    icon: <FaUsers className="w-6 h-6 text-primary" />,
    title: '1000+ Clients',
    description: 'Proudly served over 1000 clients.'
  },
  {
    year: 'Today',
    icon: <FaStar className="w-6 h-6 text-primary" />,
    title: 'Industry Leader',
    description: 'Leading provider of industrial and medical gases in India.'
  }
]

export default function TimelineSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="border-l-4 border-primary absolute h-full left-6 top-0 z-0" />
          <ul className="space-y-12 relative z-10">
            {timeline.map((item, idx) => (
              <li key={item.year} className="flex items-start gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="bg-white border-4 border-primary rounded-full p-2 z-10">{item.icon}</div>
                  {idx !== timeline.length - 1 && <div className="flex-1 w-1 bg-primary/20 mt-2 mb-2" style={{ minHeight: 40 }} />}
                </div>
                <div className="bg-gray-50 rounded-lg shadow p-6 flex-1">
                  <div className="text-primary font-bold text-lg mb-1">{item.year}</div>
                  <div className="font-semibold text-xl mb-1">{item.title}</div>
                  <div className="text-gray-600">{item.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
} 