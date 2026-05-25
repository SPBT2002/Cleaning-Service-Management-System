const reviews = [
  {
    name: 'Sarah M.',
    role: 'Homeowner',
    initials: 'SM',
    text:
      'CleanMaster transformed my home! The team was professional, thorough, and so friendly. Will definitely book again.',
  },
  {
    name: 'James K.',
    role: 'Office Manager',
    initials: 'JK',
    text:
      'We use CleanMaster weekly for our office. Consistently excellent. The booking process is incredibly easy.',
  },
  {
    name: 'Priya D.',
    role: 'Apartment Resident',
    initials: 'PD',
    text:
      'The sofa cleaning was unbelievable, it looks brand new. Fast service and great value for money.',
  },
]

const ReviewsSection = () => {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-[clamp(20px,6vw,72px)]">
        <div className="text-center">
          <span className="text-[13px] font-semibold tracking-[0.2em] text-[#16b7ad]">
            TESTIMONIALS
          </span>
          <h2 className="mt-3 font-['Sora'] text-[clamp(28px,4vw,44px)] text-[#0b1020]">
            What Clients Say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-3xl border border-[#e6edf6] bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="flex gap-1 text-[#f6c453]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={`${review.name}-${index}`}
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    role="img"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2.7l2.7 5.6 6.2.9-4.5 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.5-4.3 6.2-.9L12 2.7z"
                      fill="currentColor"
                      stroke="#e0a214"
                      strokeWidth="0.6"
                    />
                  </svg>
                ))}
              </div>

              <p className="mt-4 text-[15px] leading-[1.7] text-[#3c4b63]">
                "{review.text}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#20b8d6] text-[14px] font-semibold text-white">
                  {review.initials}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-[#0b1020]">
                    {review.name}
                  </p>
                  <p className="text-[13px] text-[#8a94a6]">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
