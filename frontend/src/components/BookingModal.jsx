import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function BookingModal({ open, onClose, service }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', notes: '', date: '' })
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (open) {
      // reset form/step when modal opens or selected service changes
      setStep(1)
      setForm({ name: '', phone: '', email: '', address: '', notes: '', date: '' })
      setSelectedSlot(null)
      setErrors({})
    }
  }, [open, service])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-10 w-[640px] max-w-[92vw] rounded-[18px] bg-white p-8 shadow-xl border border-[#e6edf6]">
        <button onClick={onClose} className="absolute right-6 top-6 rounded-full bg-white/60 p-2">×</button>

        <div className="mb-4">
          <p className="text-[12px] font-semibold tracking-[0.28em] text-[#16b7ad]">BOOK SERVICE</p>
          <h3 className="text-2xl font-semibold mt-2 text-[#0f172a]">{service?.title || 'Service'}</h3>
        </div>

        <div className="flex gap-4 mb-6">
          <button className={`flex-1 rounded-full py-3 text-sm font-semibold ${step===1? 'bg-gradient-to-r from-[#16b7ad] to-[#3aa7ff] text-white' : 'bg-[#f1f5f9] text-[#6b7280]'}`}>1. Your Details</button>
          <button className={`flex-1 rounded-full py-3 text-sm font-semibold ${step===2? 'bg-gradient-to-r from-[#16b7ad] to-[#3aa7ff] text-white' : 'bg-[#f1f5f9] text-[#6b7280]'}`}>2. Date & Time</button>
        </div>

        {step === 1 && (
          <div className="space-y-4 text-[#0f172a]">
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <div className="mb-2 text-sm text-[#6b7280]">Full Name</div>
                <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="John Silva" className="rounded-lg border border-[#d8e0eb] p-3 w-full text-[#0f172a] placeholder:text-[#9aa6b3] bg-white" />
              </label>

              <label className="block">
                <div className="mb-2 text-sm text-[#6b7280]">Phone</div>
                <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+1 555 000 0000" className="rounded-lg border border-[#d8e0eb] p-3 w-full text-[#0f172a] placeholder:text-[#9aa6b3] bg-white" />
              </label>
            </div>

            <label className="block">
              <div className="mb-2 text-sm text-[#6b7280]">Email</div>
              <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@email.com" className="rounded-lg border border-[#d8e0eb] p-3 w-full text-[#0f172a] placeholder:text-[#9aa6b3] bg-white" />
            </label>

            <label className="block">
              <div className="mb-2 text-sm text-[#6b7280]">Address</div>
              <input value={form.address} onChange={e=>setForm({...form,address:e.target.value})} placeholder="123 Main St, City" className="rounded-lg border border-[#d8e0eb] p-3 w-full text-[#0f172a] placeholder:text-[#9aa6b3] bg-white" />
            </label>

            <label className="block">
              <div className="mb-2 text-sm text-[#6b7280]">Additional Notes (optional)</div>
              <textarea value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Any special instructions..." className="rounded-lg border border-[#d8e0eb] p-3 w-full h-24 text-[#0f172a] placeholder:text-[#9aa6b3] bg-white" />
            </label>

            <div className="flex items-center gap-4">
              <div className="flex-1" />
              <div className="text-red-500 text-sm mr-4">{errors.generic}</div>
              <button
                onClick={() => {
                  const newErrors = {}
                  if (!form.name) newErrors.generic = 'Please enter your full name.'
                  else if (!form.phone) newErrors.generic = 'Please enter your phone number.'
                  else if (!form.email) newErrors.generic = 'Please enter your email.'
                  else if (!form.address) newErrors.generic = 'Please enter your address.'

                  if (Object.keys(newErrors).length) {
                    setErrors(newErrors)
                    return
                  }

                  setErrors({})
                  setStep(2)
                }}
                className="ml-auto rounded-lg bg-gradient-to-r from-[#11c1a8] to-[#3aa7ff] px-6 py-3 text-white font-semibold"
              >
                Next: Choose Date & Time →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} className="rounded-lg border border-[#d8e0eb] p-3 w-full text-[#0f172a] placeholder:text-[#9aa6b3]" />
            <div className="flex flex-wrap gap-3">
              {['08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM'].map(slot=> (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`rounded-xl px-4 py-2 text-sm border ${selectedSlot===slot ? 'bg-gradient-to-r from-[#11c1a8] to-[#3aa7ff] text-white border-transparent' : 'border-[#e6edf6] text-[#6b7280] bg-white'}`}
                >
                  {slot}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button onClick={()=>setStep(1)} className="rounded-lg border border-[#11c1a8] px-6 py-3 text-[#0f172a]">Back</button>
              <button
                onClick={()=>{
                  if (!form.date) { setErrors({generic: 'Please select a date.'}); return }
                  if (!selectedSlot) { setErrors({generic: 'Please select a time slot.'}); return }
                  setErrors({})
                  onClose();
                  alert(`Booking confirmed — ${service?.title} on ${form.date} at ${selectedSlot}`)
                }}
                className="ml-auto rounded-lg bg-gradient-to-r from-[#11c1a8] to-[#3aa7ff] px-6 py-3 text-white font-semibold"
              >Confirm Booking</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
