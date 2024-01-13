const uploadController = require('express').Router();
const multer = require('multer');
const { verifyToken } = require('../middlewears/verifyTOken');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.filename);
  },
});

const upload = multer({
  storage,
});

uploadController.post('/image', verifyToken, upload.single('image'), (req, res) => {
  try {
    return res.status(201).json({ msg: 'Successfully uploaded file' });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = uploadController;