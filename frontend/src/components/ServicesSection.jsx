import React, { useState } from 'react'
import deepCleaningImage from '../assets/deepcleaning.jpeg'
import officeCleaningImage from '../assets/officecleaning.jpeg'
import sofaCleaningImage from '../assets/sofacleaning.jpeg'
import kitchenCleaningImage from '../assets/kitchencleaning.jpeg'
import bathroomCleaningImage from '../assets/bathroomcleaning.jpeg'
import carpetCleaningImage from '../assets/carpetcleaning.jpeg'

const services = [
  {
    title: 'Deep Cleaning',
    description: 'Full home deep clean, top to bottom.',
    price: 'From $89',
    iconLabel: 'DC',
    image: deepCleaningImage,
  },
  {
    title: 'Office Cleaning',
    description: 'Professional workspace sanitization.',
    price: 'From $69',
    iconLabel: 'OC',
    image: officeCleaningImage,
  },
  {
    title: 'Sofa Cleaning',
    description: 'Fabric and leather sofa restoration.',
    price: 'From $49',
    iconLabel: 'SC',
    image: sofaCleaningImage,
  },
  {
    title: 'Kitchen Cleaning',
    description: 'Grease-free, spotless kitchens.',
    price: 'From $55',
    iconLabel: 'KC',
    image: kitchenCleaningImage,
  },
  {
    title: 'Bathroom Cleaning',
    description: 'Tile, grout and fixture detailing.',
    price: 'From $39',
    iconLabel: 'BC',
    image: bathroomCleaningImage,
  },
  {
    title: 'Carpet Cleaning',
    description: 'Steam and dry carpet treatment.',
    price: 'From $59',
    iconLabel: 'CC',
    image: carpetCleaningImage,
  },
]

import BookingModal from './BookingModal'

const ServicesSection = ({ withContainer = true, sectionId = 'services' }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const sectionContent = (
    <section
      id={sectionId}
      className="rounded-[32px] bg-white px-6 py-16 text-[#0f172a] shadow-[0_30px_60px_rgba(15,23,42,0.08)] sm:px-10 lg:px-16"
    >
      <div className="text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#22b7b0]">
          What we offer
        </p>
        <h2 className="mt-2 font-['Sora'] text-[clamp(28px,4vw,40px)]">
          Our Cleaning Services
        </h2>
        <p className="mt-2 text-[15px] text-[#6b7280]">
          Professional cleaning for every corner of your space.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-[24px] border border-[#e6edf6] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-[#22d2c8]"
          >
            <div className="flex h-[220px] items-center justify-center overflow-hidden rounded-t-[24px] bg-[#f4f7fb]">
              {service.image ? (
                <img
                  src={service.image}
                  alt={`${service.title} service`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <span
                  className="grid h-16 w-16 place-items-center rounded-[18px] bg-white text-[16px] font-semibold text-[#22b7b0] shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                  aria-hidden="true"
                >
                  {service.iconLabel}
                </span>
              )}
            </div>
            <div className="space-y-3 px-6 pb-6 pt-3">
              <h3 className="text-[18px] font-semibold">{service.title}</h3>
              <p className="text-[14px] text-[#6b7280]">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[15px] font-semibold text-[#22b7b0]">
                  {service.price}
                </span>
                <button
                  type="button"
                  onClick={() => { setSelected(service); setOpen(true) }}
                  className="rounded-xl border border-[#22b7b0] px-4 py-2 text-[13px] font-semibold text-[#22b7b0] transition group-hover:bg-[#22b7b0] group-hover:text-white"
                >
                  Book
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )

  if (!withContainer) {
    return (
      <>
        {sectionContent}
        <BookingModal open={open} onClose={() => setOpen(false)} service={selected} />
      </>
    )
  }

  return (
    <div className="rounded-[32px] bg-[#f7f9fc] px-6 py-8 sm:px-10 lg:px-16">
      {sectionContent}
      <BookingModal open={open} onClose={() => setOpen(false)} service={selected} />
    </div>
  )
}

export default ServicesSection
