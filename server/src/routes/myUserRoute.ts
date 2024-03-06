import express from "express";
import userController from "../controllers/userController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";
const router = express.Router();

router.post("/", jwtCheck, userController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  userController.updateCurrentUser
);
export default router;
