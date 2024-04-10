import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload file
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file uploaded
    console.log("file updated successfully", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove locally saved temporary file as the upload operation got failed
    return null;
  }
};

const deleteFromCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Delete the file from Cloudinary
    const response = await cloudinary.uploader.destroy(localFilePath);

    return response.result === "ok" ? response : null;
  } catch (error) {
    console.error("Error deleting file from Cloudinary:", error);
    return null;
  }
};

// cloudinary.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) {
//     console.log(result);
//   }
// );

export { uploadOnCloudinary, deleteFromCloudinary };
