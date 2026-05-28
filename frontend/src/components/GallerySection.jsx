import { useEffect, useState } from 'react'
import { api } from '../lib/apiClient'
import { galleryFallbackImages } from '../lib/contentMaps'

const cardStyles = [
  'from-[#1d6aa3] to-[#124b74]',
  'from-[#0d8b5f] to-[#0a6e4a]',
  'from-[#7b3bf4] to-[#5825b3]',
  'from-[#f07c14] to-[#c85f0a]',
  'from-[#2d66d2] to-[#1f4aa1]',
  'from-[#c42a74] to-[#941f5a]',
]

const defaultGalleryItems = [
  { title: 'Home', image: galleryFallbackImages.Home },
  { title: 'Kitchen', image: galleryFallbackImages.Kitchen },
  { title: 'Bathroom', image: galleryFallbackImages.Bathroom },
  { title: 'Sofa', image: galleryFallbackImages.Sofa },
  { title: 'Office', image: galleryFallbackImages.Office },
  { title: 'Carpet', image: galleryFallbackImages.Carpet },
]

const GallerySection = ({ variant = 'dark' }) => {
  const isLight = variant === 'light'
  const [galleryItems, setGalleryItems] = useState(defaultGalleryItems)

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const data = await api.get('/gallery')
        if (Array.isArray(data) && data.length > 0) {
          setGalleryItems(
            data.map((item) => ({
              title: item.title,
              image: item.image || galleryFallbackImages[item.title] || galleryFallbackImages.Home,
            })),
          )
        }
      } catch {
        // fallback stays on screen
      }
    }

    loadGallery()
  }, [])

  return (
    <section
      id="gallery"
      className={`py-10 ${isLight ? 'text-[#0f172a]' : 'text-white'}`}
    >
      <div className="text-center">
        <h2 className="font-['Sora'] text-[clamp(28px,4.5vw,44px)]">
          Before & After Gallery
        </h2>
        <p
          className={`mt-3 text-[15px] ${
            isLight ? 'text-[#6b7280]' : 'text-[#a1b0cf]'
          }`}
        >
          Every space we touch gets the CleanMaster treatment - see the results for
          yourself.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br ${
              cardStyles[index % cardStyles.length]
            }`}
          >
            {item.image ? (
              <div className="relative min-h-[300px]">
                <img
                  src={item.image}
                  alt={`${item.title} cleaning result`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/40" />
              </div>
            ) : (
              <div className="flex min-h-[210px] flex-col justify-between p-6">
                <div className="relative mt-10">
                  <div className="absolute right-6 top-2 h-16 w-16 rounded-full bg-white/10" />
                  <div className="h-20 w-20 rounded-2xl bg-white/5" />
                </div>
              </div>
            )}
            <div className="flex items-center justify-between bg-black/15 px-6 py-4">
              <div>
                <h3 className="text-[16px] font-semibold">{item.title}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
