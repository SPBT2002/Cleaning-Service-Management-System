import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-[#07121a] text-white p-4 gap-6 h-screen">
      <div className="flex items-center gap-3 px-2">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#11c1a8] to-[#33bdf6] grid place-items-center font-bold text-[#07121a]">CM</div>
        <div>
          <div className="font-semibold">CleanMaster</div>
          <div className="text-xs text-[#90a0b2]">Admin Panel</div>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-2 px-2">
        <NavLink to="/admin" end className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive ? 'bg-[#0a2430] text-white' : 'text-[#9fb0c9] hover:bg-[#07202a] hover:text-white'}`}>Dashboard</NavLink>
        <NavLink to="/admin/bookings" className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive ? 'bg-[#0a2430] text-white' : 'text-[#9fb0c9] hover:bg-[#07202a] hover:text-white'}`}>Bookings</NavLink>
        <NavLink to="/admin/services" className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive ? 'bg-[#0a2430] text-white' : 'text-[#9fb0c9] hover:bg-[#07202a] hover:text-white'}`}>Services</NavLink>
        <NavLink to="/admin/gallery" className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive ? 'bg-[#0a2430] text-white' : 'text-[#9fb0c9] hover:bg-[#07202a] hover:text-white'}`}>Gallery</NavLink>
      </nav>

      <div className="px-2">
        <button className="w-full rounded-md bg-[#ce2a2a] px-3 py-2 text-sm">Logout</button>
      </div>
    </aside>
  )
}
