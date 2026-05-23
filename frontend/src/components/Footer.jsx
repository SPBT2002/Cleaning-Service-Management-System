import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0b1426] text-[#c8d2e3]">
      <div className="mx-auto w-full max-w-6xl px-[clamp(20px,6vw,72px)] py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3 text-[20px] font-semibold text-white">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#1ed0c8] to-[#33bdf6] text-[14px] text-[#0b1020]">
                CM
              </span>
              <span>
                Clean<span className="text-[#22d2c8]">Master</span>
              </span>
            </div>
            <p className="mt-4 max-w-[260px] text-[14px] leading-[1.7] text-[#9fb0c9]">
              Professional cleaning services that give you more time for what
              truly matters.
            </p>
            <div className="mt-6 flex gap-3">
              {['f', 't', 'in', 'ig'].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-[13px] font-semibold uppercase text-white transition hover:bg-white/10"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-[14px] text-[#9fb0c9]">
              <li>
                <Link to="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="transition hover:text-white">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-[14px] text-[#9fb0c9]">
              <li>Deep Cleaning</li>
              <li>Office Cleaning</li>
              <li>Sofa Cleaning</li>
              <li>Kitchen Cleaning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-[14px] leading-[1.6] text-[#9fb0c9]">
              Get tips and exclusive offers straight to your inbox.
            </p>
            <div className="mt-4 flex items-center overflow-hidden rounded-2xl bg-white/5">
              <input
                type="email"
                placeholder="Your email..."
                className="w-full bg-transparent px-4 py-3 text-[14px] text-white placeholder:text-[#8b9bb5] outline-none"
              />
              <button
                type="button"
                className="h-11 w-12 bg-gradient-to-br from-[#1ed0c8] to-[#33bdf6] text-[16px] font-semibold text-[#0b1020]"
                aria-label="Submit email"
              >
                {'>'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[13px] text-[#8b9bb5] md:flex-row">
          <span>© 2026 CleanMaster. All rights reserved.</span>
          <span>Made with love for clean spaces</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
