import multer from "multer";
import path from "path";
console.log("here");
// Configure multer storage
const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "uploads/pan_cards/"); // Directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

// File upload middleware
export const upload = multer({
    
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB file size limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Invalid file type. Only JPG, PNG, and PDF are allowed."));
    }
    cb(null, true);
  },
});
