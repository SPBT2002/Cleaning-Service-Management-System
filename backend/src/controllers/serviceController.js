const asyncHandler = require('express-async-handler');
const Service = require('../models/Service');

const getServices = asyncHandler(async (req, res) => {
  const services = await Service.find().sort({ createdAt: -1 });
  res.status(200).json(services);
});

const createService = asyncHandler(async (req, res) => {
  const { name, description, price, image, status } = req.body;
  if (!name || typeof price === 'undefined') {
    res.status(400);
    throw new Error('Name and price are required');
  }

  const service = await Service.create({
    name,
    description: description || '',
    price,
    image: image || '',
    status: status || 'Active',
  });

  res.status(201).json(service);
});

const updateService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error('Service not found');
  }

  ['name', 'description', 'price', 'image', 'status'].forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(req.body, key)) {
      service[key] = req.body[key];
    }
  });

  await service.save();
  res.status(200).json(service);
});

const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error('Service not found');
  }

  await service.deleteOne();
  res.status(200).json({ message: 'Service deleted' });
});

module.exports = { getServices, createService, updateService, deleteService };
