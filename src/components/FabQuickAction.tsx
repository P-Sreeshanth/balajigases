'use client'

import { useState } from 'react'
import { FaPlus, FaPhone, FaFileInvoice, FaGasPump, FaUserTie } from 'react-icons/fa'

export default function FabQuickAction() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed z-50 bottom-8 right-8 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 mb-2 animate-fade-in-up">
          <a href="/book" className="btn-glass btn-ripple flex items-center gap-2 px-4 py-3 text-lg shadow-magic">
            <FaGasPump /> Book Gas
          </a>
          <a href="/careers" className="btn-glass btn-ripple flex items-center gap-2 px-4 py-3 text-lg shadow-magic">
            <FaUserTie /> Careers
          </a>
          <a href="/contact" className="btn-glass btn-ripple flex items-center gap-2 px-4 py-3 text-lg shadow-magic">
            <FaPhone /> Request Callback
          </a>
          <a href="/quote" className="btn-glass btn-ripple flex items-center gap-2 px-4 py-3 text-lg shadow-magic">
            <FaFileInvoice /> Quick Quote
          </a>
        </div>
      )}
      <button
        className="btn-primary btn-ripple w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-magic hover:scale-110 transition-transform"
        aria-label="Quick Actions"
        onClick={() => setOpen((v) => !v)}
      >
        <FaPlus className={open ? 'rotate-45 transition-transform' : 'transition-transform'} />
      </button>
    </div>
  )
} 