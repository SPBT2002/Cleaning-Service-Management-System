const asyncHandler = require('express-async-handler');
const GalleryItem = require('../models/GalleryItem');

const getGalleryItems = asyncHandler(async (req, res) => {
  const items = await GalleryItem.find().sort({ createdAt: -1 });
  res.status(200).json(items);
});

const createGalleryItem = asyncHandler(async (req, res) => {
  const { title, image, gradient } = req.body;
  if (!title) {
    res.status(400);
    throw new Error('Title is required');
  }

  const item = await GalleryItem.create({
    title,
    image: image || '',
    gradient: gradient || 'from-[#1f6ca4] to-[#15507e]',
  });

  res.status(201).json(item);
});

const updateGalleryItem = asyncHandler(async (req, res) => {
  const item = await GalleryItem.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error('Gallery item not found');
  }

  ['title', 'image', 'gradient'].forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(req.body, key)) {
      item[key] = req.body[key];
    }
  });

  await item.save();
  res.status(200).json(item);
});

const deleteGalleryItem = asyncHandler(async (req, res) => {
  const item = await GalleryItem.findById(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error('Gallery item not found');
  }

  await item.deleteOne();
  res.status(200).json({ message: 'Gallery item deleted' });
});

module.exports = { getGalleryItems, createGalleryItem, updateGalleryItem, deleteGalleryItem };
