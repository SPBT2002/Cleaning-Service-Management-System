import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="relative z-10 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0f2a42]/80 px-5 py-3 backdrop-blur-md">
      <div className="flex items-center gap-3 text-[22px] font-semibold text-[#f5f7ff]">
        <span className="grid h-9 w-9 place-items-center" aria-hidden="true">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#1ed0c8] to-[#33bdf6] text-[16px] text-[#0b1020]">
                CM
              </span>
        </span>
        <span>
                Clean<span className="text-[#22d2c8]">Master</span>
              </span>
      </div>
      <nav className="hidden gap-7 text-[16px] md:flex" aria-label="Primary">
        <Link to="/" className="text-[#a1b0cf] transition-colors hover:text-[#f5f7ff]">
          Home
        </Link>
        <Link
          to="/services"
          className="text-[#a1b0cf] transition-colors hover:text-[#f5f7ff]"
        >
          Services
        </Link>
        <Link
          to="/gallery"
          className="text-[#a1b0cf] transition-colors hover:text-[#f5f7ff]"
        >
          Gallery
        </Link>
        <Link
          to="/reviews"
          className="text-[#a1b0cf] transition-colors hover:text-[#f5f7ff]"
        >
          Reviews
        </Link>
        <Link
          to="/contact"
          className="text-[#a1b0cf] transition-colors hover:text-[#f5f7ff]"
        >
          Contact
        </Link>
      </nav>
      <button
        type="button"
        className="rounded-2xl bg-gradient-to-br from-[#1ed0c8] to-[#33bdf6] px-5 py-2.5 font-semibold text-[#0b1020] shadow-[0_12px_24px_rgba(25,208,200,0.25)] transition hover:-translate-y-0.5"
      >
        Book Now
      </button>
    </header>
  )
}

export default Header
