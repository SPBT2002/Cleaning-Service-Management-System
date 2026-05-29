const User = require('../models/User');

const seedAdminUser = async () => {
  const adminEmail = (process.env.ADMIN_EMAIL || 'admin@cleanmaster.com').toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin1234';

  // Prefer exact email match first
  let admin = await User.findOne({ email: adminEmail });
  if (admin) {
    if (admin.role !== 'admin') {
      admin.role = 'admin';
      await admin.save();
    }
    return;
  }

  // If an admin exists with a different email, migrate it to the configured admin email
  const existingAdmin = await User.findOne({ role: 'admin' });
  if (existingAdmin) {
    existingAdmin.email = adminEmail;
    if (process.env.ADMIN_PASSWORD) existingAdmin.password = adminPassword;
    await existingAdmin.save();
    console.log('Existing admin updated with configured ADMIN_EMAIL');
    return;
  }

  // Otherwise create a new admin
  await User.create({
    firstName: 'System',
    lastName: 'Admin',
    email: adminEmail,
    password: adminPassword,
    role: 'admin',
  });

  console.log('Default admin user created');
};

module.exports = seedAdminUser;
