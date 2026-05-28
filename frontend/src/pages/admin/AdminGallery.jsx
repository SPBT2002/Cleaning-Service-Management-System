import React, { useEffect, useRef, useState } from 'react'
import AdminLayout from '../../components/admin/AdminLayout'
import { api } from '../../lib/apiClient'
import { getToken, getUser } from '../../lib/authStorage'
import { galleryFallbackImages } from '../../lib/contentMaps'

const initialItems = [
  {
    id: 1,
    title: 'Living Room',
    image: galleryFallbackImages.Home,
    gradient: 'from-[#1f6ca4] to-[#15507e]',
  },
  {
    id: 2,
    title: 'Kitchen',
    image: galleryFallbackImages.Kitchen,
    gradient: 'from-[#0f9667] to-[#0d744f]',
  },
  {
    id: 3,
    title: 'Bathroom',
    image: galleryFallbackImages.Bathroom,
    gradient: 'from-[#6a35d7] to-[#5525ae]',
  },
  {
    id: 4,
    title: 'Bedroom',
    image: galleryFallbackImages.Sofa,
    gradient: 'from-[#bf5f0f] to-[#9e4a08]',
  },
]

const themeOptions = [
  { name: 'Ocean', gradient: 'from-[#1f6ca4] to-[#15507e]' },
  { name: 'Forest', gradient: 'from-[#0f9667] to-[#0d744f]' },
  { name: 'Purple', gradient: 'from-[#6a35d7] to-[#5525ae]' },
  { name: 'Amber', gradient: 'from-[#bf5f0f] to-[#9e4a08]' },
  { name: 'Blue', gradient: 'from-[#2d66d2] to-[#1f4aa1]' },
  { name: 'Pink', gradient: 'from-[#c42a74] to-[#941f5a]' },
  { name: 'Teal', gradient: 'from-[#149ea3] to-[#0f7d82]' },
  { name: 'Green', gradient: 'from-[#4b9d13] to-[#336c0d]' },
]

export default function AdminGallery() {
  const [items, setItems] = useState(initialItems)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [label, setLabel] = useState('')
  const [imagePreview, setImagePreview] = useState('')
  const [selectedTheme, setSelectedTheme] = useState(themeOptions[0])
  const fileInputRef = useRef(null)

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const token = getToken()
        const user = getUser()
        if (!token || user?.role !== 'admin') return

        const data = await api.get('/gallery')
        setItems(
          data.map((item) => ({
            id: item._id,
            title: item.title,
            image: item.image || galleryFallbackImages[item.title] || galleryFallbackImages.Home,
            gradient: item.gradient,
          })),
        )
      } catch {
        // keep fallback data
      }
    }

    loadGallery()
  }, [])

  function removeItem(id) {
    api.delete(`/gallery/${id}`)
      .then(() => setItems((current) => current.filter((item) => item.id !== id)))
      .catch((error) => window.alert(error.message))
  }

  function handleUpload(event) {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setImagePreview(String(reader.result || ''))
    }
    reader.readAsDataURL(file)
    event.target.value = ''
  }

  function openModal() {
    setIsModalOpen(true)
    setLabel('')
    setImagePreview('')
    setSelectedTheme(themeOptions[0])
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function addPhoto() {
    if (!label.trim()) {
      window.alert('Please enter room label.')
      return
    }

    if (!imagePreview) {
      window.alert('Please choose an image.')
      return
    }

    const next = {
      title: label.trim(),
      image: imagePreview,
      gradient: selectedTheme.gradient,
    }

    const request = api.post('/gallery', next)
    request
      .then((created) => {
        setItems((current) => [
          {
            id: created._id,
            title: created.title,
            image: created.image || galleryFallbackImages[created.title] || galleryFallbackImages.Home,
            gradient: created.gradient,
          },
          ...current,
        ])
        setIsModalOpen(false)
      })
      .catch((error) => window.alert(error.message))
  }

  return (
    <AdminLayout>
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Gallery</h1>
          <p className="text-sm text-[#90a0b2]">CleanEase Admin Panel</p>
        </div>

        <button
          type="button"
          onClick={openModal}
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-[#14c6aa] to-[#32bdf6] px-5 text-sm font-semibold text-white"
        >
          <span className="text-base leading-none">+</span>
          Add Photo
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.id}
            className={`overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${item.gradient}`}
          >
            <div className="relative h-44">
              <img src={item.image} alt={`${item.title} cleaned result`} className="h-full w-full object-cover opacity-95" loading="lazy" />
              <div className="absolute inset-0 bg-[#0b1226]/30" />
            </div>

            <div className="flex items-center justify-between bg-[#0f2037]/65 px-4 py-3">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="rounded-xl bg-[#e45d68] px-3 py-1 text-sm font-semibold text-white transition hover:bg-[#ee6f79]"
              >
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-[520px] rounded-[28px] border border-white/10 bg-[#1f2c43] p-8 shadow-[0_35px_120px_rgba(0,0,0,0.5)]">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-xl bg-white/8 text-[#7f91a9] transition hover:bg-white/12 hover:text-white"
            >
              ×
            </button>

            <h2 className="text-[30px] font-semibold leading-none text-white">Add Gallery Photo</h2>

            <div className="mt-7 grid gap-4 sm:grid-cols-[64px_1fr]">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#9aacbf]">Image</label>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex h-[48px] w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 text-2xl"
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="Selected" className="h-full w-full rounded-xl object-cover" />
                  ) : (
                    <span>🖼️</span>
                  )}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#9aacbf]">Room Label</label>
                <input
                  value={label}
                  onChange={(event) => setLabel(event.target.value)}
                  placeholder="e.g. Master Bedroom"
                  className="h-[48px] w-full rounded-xl border border-white/15 bg-white/5 px-4 text-[16px] text-white outline-none placeholder:text-[#7f91a9] focus:border-cyan-400/50"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-3 block text-sm font-semibold text-[#9aacbf]">Card Color Theme</label>
              <div className="grid grid-cols-4 gap-3">
                {themeOptions.map((theme) => {
                  const selected = selectedTheme.name === theme.name
                  return (
                    <button
                      key={theme.name}
                      type="button"
                      onClick={() => setSelectedTheme(theme)}
                      className={`relative overflow-hidden rounded-xl border px-3 py-2 text-[13px] font-semibold text-white transition ${selected ? 'border-cyan-300 shadow-[0_0_0_2px_rgba(56,189,248,0.45)]' : 'border-white/15 hover:brightness-110'}`}
                    >
                      <span className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} opacity-95`} />
                      <span className="absolute inset-0 bg-black/18" />
                      <span className="relative z-10">{theme.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className={`mt-6 flex h-[88px] items-center justify-center rounded-2xl bg-gradient-to-r ${selectedTheme.gradient}`}>
              <div className="flex items-center gap-3 text-center">
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="h-12 w-12 rounded-lg object-cover" />
                ) : (
                  <span className="text-3xl">🖼️</span>
                )}
                <span className="text-xl font-semibold text-white">Preview</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="h-[42px] rounded-xl border border-white/12 bg-white/3 text-sm font-semibold text-[#8fa2b8] transition hover:bg-white/8"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={addPhoto}
                className="h-[42px] rounded-xl bg-gradient-to-r from-[#209f9e] to-[#2b80aa] text-sm font-semibold text-[#b8d3df] transition hover:brightness-110"
              >
                Add to Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}
