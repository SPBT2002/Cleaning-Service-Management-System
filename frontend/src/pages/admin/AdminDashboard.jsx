import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import { api } from '../../lib/apiClient'
import { getToken, getUser } from '../../lib/authStorage'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [dashboard, setDashboard] = useState({
    stats: {
      totalBookings: 0,
      confirmedCount: 0,
      pendingCount: 0,
      completedCount: 0,
      cancelledCount: 0,
    },
    recentBookings: [],
  })

  useEffect(() => {
    const token = getToken()
    const user = getUser()

    if (!token || user?.role !== 'admin') {
      navigate('/signin')
      return
    }

    const loadDashboard = async () => {
      try {
        const data = await api.get('/admin/stats')
        setDashboard(data)
      } catch (err) {
        if (/not authorized|admin access|required|token/i.test(err.message)) {
          navigate('/signin')
        }
      }
    }

    loadDashboard()
  }, [navigate])

  const stats = [
    { label: 'Total Bookings', value: dashboard.stats.totalBookings },
    { label: 'Confirmed', value: dashboard.stats.confirmedCount },
    { label: 'Pending', value: dashboard.stats.pendingCount },
    { label: 'Completed', value: dashboard.stats.completedCount },
  ]

  const recent = dashboard.recentBookings.slice(0, 5).map((booking) => ({
    name: booking.customerName,
    service: booking.serviceName,
    date: booking.date,
    status: booking.status,
  }))

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
