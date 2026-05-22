import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="relative z-10 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0f2a42]/80 px-5 py-3 backdrop-blur-md">
      <div className="flex items-center gap-3 text-[22px] font-semibold text-[#f5f7ff]">
        <span className="grid h-9 w-9 place-items-center" aria-hidden="true">
          <svg viewBox="0 0 40 40" role="img" aria-hidden="true" className="h-9 w-9">
            <circle cx="20" cy="20" r="20" fill="#1bc9c1" />
            <path
              d="M14 23l4 4 8-10"
              stroke="#0b1020"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>CleanMaster</span>
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
