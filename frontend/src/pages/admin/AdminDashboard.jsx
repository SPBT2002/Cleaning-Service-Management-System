import React, { useSyncExternalStore } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { getBookingsSnapshot, subscribe } from '../../data/adminBookingsStore'

export default function AdminDashboard() {
  const bookings = useSyncExternalStore(subscribe, getBookingsSnapshot, getBookingsSnapshot)

  const stats = [
    { label: 'Total Bookings', value: bookings.length },
    { label: 'Confirmed', value: bookings.filter((booking) => booking.status === 'Confirmed').length },
    { label: 'Pending', value: bookings.filter((booking) => booking.status === 'Pending').length },
    { label: 'Services', value: new Set(bookings.map((booking) => booking.service)).size },
  ]

  const recent = bookings.slice(0, 5)

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-[#90a0b2]">CleanMaster Admin Panel</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg bg-[#0f2834] p-5 shadow-inner">
            <div className="text-sm text-[#9fb0c9]">{s.label}</div>
            <div className="text-3xl font-semibold mt-3">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-[#0f2834] p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
        <ul className="divide-y divide-[#13202a]">
          {recent.map((r) => (
            <li key={r.name} className="py-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-sm text-[#90a0b2]">{r.service} · {r.date}</div>
              </div>
              <div>
                <span className={`px-3 py-1 rounded-full text-sm ${r.status==='Confirmed'?'bg-green-100 text-green-800':r.status==='Cancelled'?'bg-red-100 text-red-800':'bg-blue-100 text-blue-800'}`}>{r.status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </AdminLayout>
  )
}
