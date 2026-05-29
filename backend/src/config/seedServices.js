const Service = require('../models/Service');

const defaultServices = [
  { name: 'Deep Cleaning', description: 'Full home deep clean, top to bottom.', price: 89, image: '', status: 'Active' },
  { name: 'Office Cleaning', description: 'Professional workspace sanitization.', price: 69, image: '', status: 'Active' },
  { name: 'Sofa Cleaning', description: 'Fabric & leather sofa restoration.', price: 49, image: '', status: 'Active' },
  { name: 'Kitchen Cleaning', description: 'Grease-free, spotless kitchens.', price: 55, image: '', status: 'Active' },
  { name: 'Bathroom Cleaning', description: 'Tile, grout & fixture detailing.', price: 39, image: '', status: 'Active' },
  { name: 'Carpet Cleaning', description: 'Steam & dry carpet treatment.', price: 59, image: '', status: 'Inactive' },
];

const seedServices = async () => {
  const count = await Service.countDocuments();
  if (count > 0) return;
  await Service.insertMany(defaultServices);
  console.log('Default services seeded');
};

module.exports = seedServices;
