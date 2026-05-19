import Header from '../../components/Header'
import ServicesSection from '../../components/ServicesSection'

const Service = () => {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0d1a2e] px-[clamp(20px,6vw,72px)] pb-20 pt-7 text-[#f5f7ff]">
      <span className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,#1a2b4a_0%,#0a1222_45%)]" />
      <span className="pointer-events-none absolute right-[8%] top-[-120px] z-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(45,213,199,0.35),transparent_70%)] opacity-60" />
      <span className="pointer-events-none absolute bottom-[-200px] left-[-120px] z-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.25),transparent_70%)] opacity-60" />
      <Header />
      <div className="relative z-10 mt-10">
        <ServicesSection withContainer={false} />
      </div>
    </div>
  )
}

export default Service
