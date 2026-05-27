import React from 'react'
import AdminSidebar from './AdminSidebar'

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#071226] text-white">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}
