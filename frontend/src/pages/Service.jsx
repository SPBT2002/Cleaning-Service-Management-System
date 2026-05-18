import Header from '../components/Header'
import ServicesSection from '../components/ServicesSection'

const Service = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fb] px-[clamp(20px,6vw,72px)] pb-20 pt-7 text-[#0f172a]">
      <Header />
      <div className="mt-10">
        <ServicesSection withContainer={false} />
      </div>
    </div>
  )
}

export default Service
