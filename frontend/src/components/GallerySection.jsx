import homeCleaningImage from '../assets/homecleaning2.jpeg'
import kitchenCleaningImage from '../assets/kitchenbf2.jpeg'
import bathroomCleaningImage from '../assets/bathrombf2.jpeg'
import sofaCleaningImage from '../assets/sofabf1.jpeg'
import officeCleaningImage from '../assets/officebf1.jpeg'
import carpetCleaningImage from '../assets/carpetbf1.jpeg'

const galleryItems = [
  {
    title: 'Home',
    tagColor: 'text-[#37d0ff] bg-[#103753] border-[#1c547b]',
    image: homeCleaningImage,
  },
  {
    title: 'Kitchen',
    tagColor: 'text-[#37e8a1] bg-[#0b3c32] border-[#155c4c]',
    image: kitchenCleaningImage,
  },
  {
    title: 'Bathroom',
    tagColor: 'text-[#b69cff] bg-[#2a1b4a] border-[#3a2566]',
    image: bathroomCleaningImage,
  },
  {
    title: 'Sofa',
    tagColor: 'text-[#ffb053] bg-[#4a2a0f] border-[#663713]',
    image: sofaCleaningImage,
  },
  {
    title: 'Office',
    tagColor: 'text-[#9fc3ff] bg-[#152848] border-[#1e3661]',
    image: officeCleaningImage,
  },
  {
    title: 'Carpet',
    tagColor: 'text-[#ff9ac1] bg-[#4a1831] border-[#662141]',
    image: carpetCleaningImage,
  },
]

const cardStyles = [
  'from-[#1d6aa3] to-[#124b74]',
  'from-[#0d8b5f] to-[#0a6e4a]',
  'from-[#7b3bf4] to-[#5825b3]',
  'from-[#f07c14] to-[#c85f0a]',
  'from-[#2d66d2] to-[#1f4aa1]',
  'from-[#c42a74] to-[#941f5a]',
]

const GallerySection = ({ variant = 'dark' }) => {
  const isLight = variant === 'light'

  return (
    <section
      id="gallery"
      className={`py-10 ${isLight ? 'text-[#0f172a]' : 'text-white'}`}
    >
      <div className="text-center">
        <h2 className="font-['Sora'] text-[clamp(28px,4.5vw,44px)]">
          Before & After Gallery
        </h2>
        <p
          className={`mt-3 text-[15px] ${
            isLight ? 'text-[#6b7280]' : 'text-[#a1b0cf]'
          }`}
        >
          Every space we touch gets the CleanMaster treatment - see the results for
          yourself.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br ${
              cardStyles[index % cardStyles.length]
            }`}
          >
            {item.image ? (
              <div className="relative min-h-[300px]">
                <img
                  src={item.image}
                  alt={`${item.title} cleaning result`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/40" />
              </div>
            ) : (
              <div className="flex min-h-[210px] flex-col justify-between p-6">
                <div className="relative mt-10">
                  <div className="absolute right-6 top-2 h-16 w-16 rounded-full bg-white/10" />
                  <div className="h-20 w-20 rounded-2xl bg-white/5" />
                </div>
              </div>
            )}
            <div className="flex items-center justify-between bg-black/15 px-6 py-4">
              <div>
                <h3 className="text-[16px] font-semibold">{item.title}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
