import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import { api } from '../../lib/apiClient'
import { getToken, getUser } from '../../lib/authStorage'

export default function AdminBookings(){
  const navigate = useNavigate()
  const [filter, setFilter] = useState('All')
  const [query, setQuery] = useState('')
  const [expandedId, setExpandedId] = useState(null)
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const token = getToken()
    const user = getUser()

    if (!token || user?.role !== 'admin') {
      navigate('/signin')
      return
    }

    const loadBookings = async () => {
      try {
        const data = await api.get('/admin/bookings')
        setBookings(data)
      } catch (err) {
        if (/not authorized|admin access|required|token/i.test(err.message)) {
          navigate('/signin')
        }
      }
    }

    loadBookings()
  }, [navigate])

  const filters = ['All','Pending','Confirmed','Completed','Cancelled']

  const visible = bookings.filter(b=>{
    const matchesFilter = filter==='All' ? true : b.status===filter
    const q = query.toLowerCase()
    const matchesQuery = !q || b.customerName.toLowerCase().includes(q) || b.serviceName.toLowerCase().includes(q)
    return matchesFilter && matchesQuery
  })

  function toggleExpand(id){
    setExpandedId(prev => prev === id ? null : id)
  }

  async function updateBookingLocal(id, patch) {
    setBookings((prev) => prev.map((booking) => (booking._id === id ? { ...booking, ...patch } : booking)))
  }

  async function changeStatus(id, status){
    try {
      const updated = await api.patch(`/admin/bookings/${id}/status`, { status })
      updateBookingLocal(id, updated)
    } catch {
      // keep UI stable even on temporary request errors
    }
  }

  async function deleteBooking(id){
    if(!window.confirm('Delete this booking?')) return
    try {
      await api.delete(`/admin/bookings/${id}`)
    } catch {
      return
    }
    setBookings((prev) => prev.filter((booking) => booking._id !== id))
    if(expandedId===id) setExpandedId(null)
  }

  async function updateBookingDetails(id, patch) {
    updateBookingLocal(id, patch)
    try {
      await api.patch(`/admin/bookings/${id}`, patch)
    } catch {
      // local edit fallback
    }
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Bookings</h1>
        <p className="text-sm text-[#90a0b2]">CleanMaster Admin Panel</p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search name or service..." className="flex-1 rounded-lg bg-[#0b2130] border border-[#14232b] px-4 py-3 text-white placeholder:text-[#6b7280]" />
        <div className="flex gap-2">
          {filters.map(f=> (
            <button key={f} onClick={()=>setFilter(f)} className={`px-3 py-2 rounded-full text-sm ${filter===f? 'bg-gradient-to-r from-[#11c1a8] to-[#3aa7ff] text-white' : 'bg-[#0b2130] text-[#9fb0c9]'}`}>{f}</button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {visible.map(b=> (
          <div key={b._id} className="rounded-xl bg-[#0f2834] p-4">
            <div onClick={()=>toggleExpand(b._id)} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#11c1a8] to-[#3aa7ff] grid place-items-center text-white font-bold">{b.customerName?.split(' ')?.[0]?.[0] || 'U'}</div>
                <div>
                  <div className="font-semibold">{b.customerName}</div>
                  <div className="text-sm text-[#90a0b2]">{b.phone} · {b.email}</div>
                </div>
              </div>

              <div className="text-right flex items-center gap-6">
                <div>
                  <div className="font-semibold">{b.serviceName}</div>
                  <div className="text-sm text-[#90a0b2] mt-2 flex items-center gap-3 justify-end">
                    <span className="inline-flex items-center gap-1"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M7 10h10M7 14h4" stroke="#9fb0c9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>{b.date}</span>
                    <span className="inline-flex items-center gap-1"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M12 8v4l2 2" stroke="#9fb0c9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>{b.timeSlot}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span onClick={(e)=>e.stopPropagation()} className={`px-3 py-1 rounded-full text-sm ${b.status==='Confirmed'?'bg-green-100 text-green-800':b.status==='Cancelled'?'bg-red-100 text-red-800':b.status==='Pending'?'bg-yellow-100 text-yellow-800':'bg-blue-100 text-blue-800'}`}>{b.status}</span>
                </div>
              </div>
            </div>

            {/* Expanded panel */}
            {expandedId===b._id && (
              <div className="mt-4 border-t border-[#14232b] pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#90a0b2] mb-2 block">Address</label>
                  <input value={b.address} onChange={e=>updateBookingDetails(b._id, {address: e.target.value})} className="w-full rounded-md bg-[#0b2130] border border-[#14232b] px-4 py-3 text-white" />
                </div>

                <div>
                  <label className="text-xs text-[#90a0b2] mb-2 block">Notes</label>
                  <textarea value={b.notes} onChange={e=>updateBookingDetails(b._id, {notes: e.target.value})} rows={3} className="w-full rounded-md bg-[#0b2130] border border-[#14232b] px-4 py-3 text-white" />
                </div>

                <div className="md:col-span-2 flex items-center gap-3">
                  <div className="text-sm text-[#90a0b2] mr-2">Change status:</div>
                  {['Pending','Confirmed','Completed','Cancelled'].map(s=> (
                    <button key={s} onClick={()=>changeStatus(b._id, s)} className={`px-3 py-2 rounded-full text-sm ${b.status===s ? 'bg-[#223843] border border-[#2e4a52] text-white' : 'bg-[#0b2130] text-[#9fb0c9]'}`}>{s}</button>
                  ))}

                  <div className="ml-auto">
                    <button onClick={()=>deleteBooking(b._id)} className="px-3 py-2 rounded-md bg-transparent border border-[#3b2c2c] text-[#fda4af]">Delete</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </AdminLayout>
  )
}
