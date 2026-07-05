import { mockDelay } from "./api";

export const uploadService = {
  async uploadPhoto(dataUrl) {
    // In production: POST the file/dataUrl to cloud storage (S3/Cloudinary)
    // and return the hosted URL. Here we just echo the local preview back.
    return mockDelay({ url: dataUrl }, 400);
  },
};
