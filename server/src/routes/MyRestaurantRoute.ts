import express from "express";
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
const router = express.Router();
router.post(
  "/",
  upload.single("imageFile"),
  MyRestaurantController.createMyRestaurant
);
export default router;
