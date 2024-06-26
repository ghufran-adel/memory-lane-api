const multer = require("multer");

// Set up Multer storage and specify the destination folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    // Customize the file name can be done
    cb(null, file.originalname);
  },
});

// Initialize Multer with the defined storage
const upload = multer({ storage: storage ,   
  limits: {
    fileSize: 10000000 // 10000000 Bytes = 10 MB
  },
});


// Export the middleware function
module.exports = { upload };