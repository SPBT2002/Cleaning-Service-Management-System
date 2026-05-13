const Header = () => {
  return (
    <header className="relative z-10 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0f2a42]/80 px-5 py-3 backdrop-blur-md">
      <div className="flex items-center gap-3 text-[20px] font-semibold text-[#f5f7ff]">
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
      <nav className="hidden gap-7 text-[15px] md:flex" aria-label="Primary">
        <a href="#home" className="text-[#a1b0cf] transition-colors hover:text-[#f5f7ff]">
          Home
        </a>
        <a href="#services" className="text-[#a1b0cf] transition-colors hover:text-[#f5f7ff]">
          Services
        </a>
        <a href="#gallery" className="text-[#a1b0cf] transition-colors hover:text-[#f5f7ff]">
          Gallery
        </a>
        <a href="#reviews" className="text-[#a1b0cf] transition-colors hover:text-[#f5f7ff]">
          Reviews
        </a>
        <a href="#contact" className="text-[#a1b0cf] transition-colors hover:text-[#f5f7ff]">
          Contact
        </a>
      </nav>
      
    </header>
  )
}

export default Header
