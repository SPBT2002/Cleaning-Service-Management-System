const ContactSection = ({ sectionId = 'contact' }) => {
  return (
    <section
      id={sectionId}
      className="relative isolate overflow-hidden bg-[#0d1a2e] py-1 text-[#f5f7ff]"
    >
      <div className="mx-auto w-full max-w-6xl px-[clamp(20px,6vw,72px)]">
        <div className="text-center">
          <h2 className="mt-3 font-['Sora'] text-[clamp(30px,4vw,46px)] text-[#f5f7ff]">
            Contact Us
          </h2>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="space-y-5">
            <div className="rounded-3xl border border-[#dde7f2] bg-white px-6 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ffe8ef] text-[16px] font-semibold text-[#e2557a]">
                  P
                </span>
                <div>
                  <p className="text-[13px] text-[#8a94a6]">Phone</p>
                  <p className="text-[16px] font-semibold text-[#0b1020]">
                    011 123 4567
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#dde7f2] bg-white px-6 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#efe9ff] text-[16px] font-semibold text-[#7c65d6]">
                  @
                </span>
                <div>
                  <p className="text-[13px] text-[#8a94a6]">Email</p>
                  <p className="text-[16px] font-semibold text-[#0b1020]">
                    hello@cleanmaster.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#dde7f2] bg-white px-6 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e7f7ff] text-[16px] font-semibold text-[#2aa7d6]">
                  A
                </span>
                <div>
                  <p className="text-[13px] text-[#8a94a6]">Address</p>
                  <p className="text-[16px] font-semibold text-[#0b1020]">
                    123 ABC St, Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-[#d5eefc] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
              <iframe
                title="CleanEase location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.81%2C6.86%2C79.92%2C6.96&layer=mapnik&marker=6.9271%2C79.8612"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="rounded-3xl border border-[#dde7f2] bg-white p-8 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
            <h3 className="text-[22px] font-semibold text-[#0b1020]">
              Send a Message
            </h3>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-[#e2e8f0] bg-[#f3f6fb] px-4 py-4 text-[14px] text-[#0b1020] outline-none transition focus:border-[#1ab7b0]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-[#e2e8f0] bg-[#f3f6fb] px-4 py-3 text-[14px] text-[#0b1020] outline-none transition focus:border-[#1ab7b0]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-[#e2e8f0] bg-[#f3f6fb] px-4 py-3 text-[14px] text-[#0b1020] outline-none transition focus:border-[#1ab7b0]"
              />
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full rounded-2xl border border-[#e2e8f0] bg-[#f3f6fb] px-4 py-4 text-[14px] text-[#0b1020] outline-none transition focus:border-[#1ab7b0]"
              ></textarea>
              <button
                type="button"
                className="w-full rounded-2xl bg-gradient-to-r from-[#11c1a8] to-[#3aa7ff] px-4 py-3 text-[15px] font-semibold text-white shadow-[0_12px_24px_rgba(17,193,168,0.25)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
