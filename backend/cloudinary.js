require("dotenv").config(); // ✅ must be at the top

const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("✅ Cloudinary Config:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? "✓ loaded" : "❌ missing",
  api_secret: process.env.CLOUDINARY_API_SECRET ? "✓ loaded" : "❌ missing",
});

module.exports = cloudinary;
