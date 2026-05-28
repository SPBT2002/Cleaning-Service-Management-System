import React, { useEffect, useRef, useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { api } from '../../lib/apiClient'
import { getToken, getUser } from '../../lib/authStorage'
import { serviceFallbackImages } from '../../lib/contentMaps'

const accentByName = {
  'Deep Cleaning': 'from-[#1e3f68] to-[#233b59]',
  'Office Cleaning': 'from-[#1f3b69] to-[#213756]',
  'Sofa Cleaning': 'from-[#1f365f] to-[#203047]',
  'Kitchen Cleaning': 'from-[#1e3b5f] to-[#213049]',
  'Bathroom Cleaning': 'from-[#1e3f61] to-[#20324a]',
  'Carpet Cleaning': 'from-[#172b47] to-[#162132]',
}

export default function AdminServices() {
  const [services, setServices] = useState([])
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [editingServiceId, setEditingServiceId] = useState(null)
  const [imagePreview, setImagePreview] = useState('')
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  })
  const fileInputRef = useRef(null)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const token = getToken()
        const user = getUser()
        if (!token || user?.role !== 'admin') return

        const data = await api.get('/services')
        setServices(
          data.map((service, index) => ({
            id: service._id,
            name: service.name,
            description: service.description,
            price: service.price,
            status: service.status,
            image: service.image || serviceFallbackImages[service.name],
            accent: accentByName[service.name] || 'from-[#1f3b69] to-[#213756]',
            order: index,
          })),
        )
      } catch {
        // allow local UI to remain functional if backend is temporarily unavailable
      }
    }

    loadServices()
  }, [])

  function toggleStatus(id) {
    setServices((current) =>
      current.map((service) =>
        service.id === id
          ? { ...service, status: service.status === 'Active' ? 'Inactive' : 'Active' }
          : service,
      ),
    )

    const target = services.find((service) => service.id === id)
    if (!target) return

    api.put(`/services/${id}`, { ...target, status: target.status === 'Active' ? 'Inactive' : 'Active' })
      .catch((error) => window.alert(error.message))
  }

  async function deleteService(id) {
    if (!window.confirm('Delete this service?')) return
    try {
      await api.delete(`/services/${id}`)
      setServices((current) => current.filter((service) => service.id !== id))
    } catch (error) {
      window.alert(error.message)
    }
  }

  function openAddModal() {
    setEditingServiceId(null)
    setForm({ name: '', description: '', price: '', image: '' })
    setImagePreview('')
    setIsAddOpen(true)
  }

  function openEditModal(service) {
    setEditingServiceId(service.id)
    setForm({
      name: service.name,
      description: service.description,
      price: String(service.price),
      image: service.image,
    })
    setImagePreview(service.image)
    setIsAddOpen(true)
  }

  function closeAddModal() {
    setIsAddOpen(false)
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      const nextPreview = String(reader.result || '')
      setImagePreview(nextPreview)
      setForm((current) => ({ ...current, image: nextPreview }))
    }
    reader.readAsDataURL(file)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.image) {
      window.alert('Please add an image for the service.')
      return
    }

    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      price: Number(form.price) || 0,
      image: form.image,
      status: 'Active',
    }

    const request = editingServiceId
      ? api.put(`/services/${editingServiceId}`, payload)
      : api.post('/services', payload)

    request
      .then((result) => {
        if (editingServiceId) {
          setServices((current) =>
            current.map((service) =>
              service.id === editingServiceId
                ? {
                    ...service,
                    id: result._id,
                    name: result.name,
                    description: result.description,
                    price: result.price,
                    status: result.status,
                    image: result.image || serviceFallbackImages[result.name],
                    accent: accentByName[result.name] || 'from-[#1f3b69] to-[#213756]',
                  }
                : service,
            ),
          )
        } else {
          setServices((current) => [
            {
              id: result._id,
              name: result.name,
              description: result.description,
              price: result.price,
              status: result.status,
              image: result.image || serviceFallbackImages[result.name],
              accent: accentByName[result.name] || 'from-[#1f3b69] to-[#213756]',
            },
            ...current,
          ])
        }

        setIsAddOpen(false)
      })
      .catch((error) => window.alert(error.message))
  }

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Services</h1>
          <p className="text-sm text-[#90a0b2]">CleanMaster Admin Panel</p>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#11c1a8] to-[#33bdf6] px-5 py-3 font-semibold text-sm text-white shadow-lg shadow-cyan-500/10"
        >
            
          <span className="text-lg leading-none">+</span>
          Add Service
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const isActive = service.status === 'Active'

          return (
            <article
              key={service.id}
              className="overflow-hidden rounded-2xl border border-white/6 bg-[#111c33] shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
            >
              <div className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-b ${service.accent}`}>
                <img
                  src={service.image}
                  alt={`${service.name} service`}
                  className="h-full w-full object-cover opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111e]/25 via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-white">{service.name}</h2>
                    <p className="mt-2 text-sm text-[#8ea0b6]">{service.description}</p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isActive ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/15 text-rose-400'
                    }`}
                  >
                    {service.status}
                  </span>
                </div>

                <div className="mb-5 text-lg font-semibold text-[#29d4c6]">From ${service.price}</div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleStatus(service.id)}
                    className={`w-[120px] rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'border-cyan-600/40 bg-cyan-600/10 text-cyan-300 hover:bg-cyan-600/15'
                        : 'border-cyan-600/40 bg-cyan-600/10 text-cyan-300 hover:bg-cyan-600/15'
                    }`}
                  >
                    {isActive ? 'Deactivate' : 'Activate'}
                  </button>

                  <button
                    type="button"
                    onClick={() => openEditModal(service)}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-[#d6e2ef] transition hover:bg-white/10"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteService(service.id)}
                    className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm font-semibold text-rose-300 transition hover:bg-rose-500/15"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-[480px] rounded-[26px] border border-white/8 bg-[#202c40] px-8 py-7 text-white shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
            <button
              type="button"
              onClick={closeAddModal}
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-xl bg-white/6 text-[#98a8bf] transition hover:bg-white/10 hover:text-white"
            >
              ×
            </button>

            <h2 className="text-[30px] font-semibold tracking-tight">
              {editingServiceId ? 'Edit Service' : 'Add New Service'}
            </h2>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-[82px_1fr] sm:items-start">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#8ea0b6]">Image</label>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex h-[54px] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl text-[#f8b36c] transition hover:bg-white/8"
                    aria-label="Choose service image"
                  >
                    {imagePreview ? (
                      <img src={imagePreview} alt="Selected service" className="h-full w-full rounded-2xl object-cover" />
                    ) : (
                      <span className="text-2xl">🖼️</span>
                    )}
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#8ea0b6]">Service Title</label>
                  <input
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="e.g. Window Cleaning"
                    className="h-[54px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-[#8794aa] focus:border-cyan-400/40"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#8ea0b6]">Description</label>
                <input
                  value={form.description}
                  onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
                  placeholder="Short service description"
                  className="h-[54px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-[#8794aa] focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#8ea0b6]">Starting Price</label>
                <input
                  value={form.price}
                  onChange={(event) => setForm((current) => ({ ...current, price: event.target.value }))}
                  placeholder="e.g. From $45"
                  className="h-[54px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-[#8794aa] focus:border-cyan-400/40"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeAddModal}
                  className="h-[42px] flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-[#8ea0b6] transition hover:bg-white/8 hover:text-white"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="h-[42px] flex-[1.7] rounded-xl bg-gradient-to-r from-[#1f9d9d] to-[#2c84b1] px-4 text-sm font-semibold text-[#bcd0df] transition hover:brightness-110"
                >
                  {editingServiceId ? 'Update Service' : 'Add Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}
