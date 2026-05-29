const GalleryItem = require('../models/GalleryItem');

const defaultGalleryItems = [
  { title: 'Home', image: '', gradient: 'from-[#1f6ca4] to-[#15507e]' },
  { title: 'Kitchen', image: '', gradient: 'from-[#0f9667] to-[#0d744f]' },
  { title: 'Bathroom', image: '', gradient: 'from-[#6a35d7] to-[#5525ae]' },
  { title: 'Sofa', image: '', gradient: 'from-[#bf5f0f] to-[#9e4a08]' },
  { title: 'Office', image: '', gradient: 'from-[#2d66d2] to-[#1f4aa1]' },
  { title: 'Carpet', image: '', gradient: 'from-[#c42a74] to-[#941f5a]' },
];

const seedGallery = async () => {
  const count = await GalleryItem.countDocuments();
  if (count > 0) return;
  await GalleryItem.insertMany(defaultGalleryItems);
  console.log('Default gallery items seeded');
};

module.exports = seedGallery;
