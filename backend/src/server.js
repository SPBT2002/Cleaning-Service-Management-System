const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./config/db');
const seedAdminUser = require('./config/seedAdmin');
const seedServices = require('./config/seedServices');
const seedGallery = require('./config/seedGallery');

dotenv.config();

const PORT = Number(process.env.PORT) || 5001;

const startServer = async () => {
  await connectDB();
  await seedAdminUser();
  await seedServices();
  await seedGallery();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer().catch((error) => {
  console.error('Server failed to start:', error.message);
  process.exit(1);
});
