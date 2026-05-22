import Header from '../../components/Header'
import ServicesSection from '../../components/ServicesSection'
import GallerySection from '../../components/GallerySection'
import ReviewsSection from '../../components/ReviewsSection'
import ContactSection from '../../components/ContactSection'
import homepageImage from '../../assets/homepage.jpeg'

const Home = () => {
  return (
    <div
      className="relative isolate min-h-screen overflow-hidden bg-[#0d1a2e] px-[clamp(20px,6vw,72px)] pb-16 pt-7 font-['Manrope'] text-[#f5f7ff]"
      id="home"
    >
      <span className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,#1a2b4a_0%,#0a1222_45%)]" />
      <span className="pointer-events-none absolute right-[8%] top-[-120px] z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(45,213,199,0.35),transparent_70%)] opacity-60" />
      <span className="pointer-events-none absolute bottom-[-200px] left-[-120px] z-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.25),transparent_70%)] opacity-60" />
      <Header />

      <main className="relative z-10 mt-[clamp(32px,8vw,88px)] grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <section className="flex flex-col">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-[rgba(35,210,200,0.1)] px-4 py-2 text-[13px] text-[#22d2c8]">
            <span
              className="h-2 w-2 rounded-full bg-[#22d2c8] shadow-[0_0_12px_rgba(35,210,200,0.8)]"
              aria-hidden="true"
            ></span>
            Trusted by 500+ Clients
          </div>

          <h1 className="mt-4 font-['Sora'] text-[clamp(36px,5vw,64px)] leading-[1.05] text-[#f5f7ff]">
            Spotless Homes,
            <span className="text-[#22d2c8]"> Stress-Free Life</span>
          </h1>

          <p className="mt-4 max-w-[520px] text-[16px] leading-[1.7] text-[#a1b0cf]">
            Professional cleaning services at your doorstep. Eco-friendly
            products, trained staff, and guaranteed results every single time.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-2xl bg-gradient-to-br from-[#1ed0c8] to-[#33bdf6] px-5 py-2.5 font-semibold text-[#0b1020] shadow-[0_12px_24px_rgba(25,208,200,0.25)] transition hover:-translate-y-0.5"
            >
              Book Now
            </button>
            <button
              type="button"
              className="rounded-2xl border border-[rgba(255,255,255,0.15)] px-5 py-2.5 font-semibold text-[#f5f7ff] transition hover:bg-white/10"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[rgba(16,27,48,0.75)] p-4 shadow-[0_10px_30px_rgba(10,16,34,0.45)]">
              <h3 className="mb-1 text-[22px] font-semibold text-[#22d2c8]">
                500+
              </h3>
              <span className="text-[13px] text-[#a1b0cf]">Happy Clients</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[rgba(16,27,48,0.75)] p-4 shadow-[0_10px_30px_rgba(10,16,34,0.45)]">
              <h3 className="mb-1 text-[22px] font-semibold text-[#22d2c8]">
                1200+
              </h3>
              <span className="text-[13px] text-[#a1b0cf]">Jobs Done</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[rgba(16,27,48,0.75)] p-4 shadow-[0_10px_30px_rgba(10,16,34,0.45)]">
              <h3 className="mb-1 text-[22px] font-semibold text-[#22d2c8]">
                24/7
              </h3>
              <span className="text-[13px] text-[#a1b0cf]">Support</span>
            </div>
          </div>
        </section>

        <section
          className="relative order-first grid place-items-center lg:order-none"
          aria-label="Service preview"
        >
        <div className="relative h-[320px] w-full max-w-[460px] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#173255] to-[#0f223e] shadow-[0_30px_60px_rgba(5,10,24,0.6)]">
            <img
              className="h-full w-full object-cover opacity-90"
              src={homepageImage}
              alt="Bright, clean living room"
            />
          </div>  

          <div className="absolute -bottom-1 right-3 flex items-center gap-2.5 rounded-[18px] bg-[rgba(28,213,200,0.92)] px-4 py-3 text-[#0b1020] shadow-[0_20px_30px_rgba(13,206,196,0.3)] lg:-right-3">
            <div
              className="grid h-[30px] w-[30px] place-items-center rounded-[12px] bg-[rgba(11,18,34,0.2)]"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true" className="h-[18px] w-[18px]">
                <path
                  d="M12 3l2.8 5.8 6.4.9-4.6 4.4 1.1 6.3L12 17.8 6.3 20.4l1.1-6.3L2.8 9.7l6.4-.9L12 3z"
                  fill="#f7d354"
                />
              </svg>
            </div>
            <div>
              <strong className="block text-[18px]">4.9/5</strong>
              <span className="text-[12px]">Client Rating</span>
            </div>
          </div>

        </section>
      </main>

      <div className="relative z-10 mt-16 -mx-[clamp(20px,6vw,72px)] bg-white/95 pb-20 pt-10">
        <div className="px-[clamp(20px,6vw,72px)]">
          <ServicesSection withContainer={false} />
        </div>
      </div>

      

      <div className="relative z-10 -mx-[clamp(20px,6vw,72px)] bg-[#0d1a2e] px-[clamp(20px,6vw,72px)] pb-24 pt-16">
        <GallerySection />
      </div>

      <div className="relative z-10 -mx-[clamp(20px,6vw,72px)] bg-[#f7f9fc]">
        <ReviewsSection />
      </div>

      <div className="relative z-10 -mx-[clamp(20px,6vw,72px)] bg-[#f5f9ff]">
        <ContactSection />
      </div>
    </div>
  )
}

export default Home
