import express from "express";
import {
  getAllUsers,
  getCurrentUserController,
  getTeam,
  getUserController,
  permsUpdateController,
  updateUserController,
} from "../controllers/userController";
import { protect } from "../middlewares/authMiddleware";
import protected_route from "../middlewares/permsMiddlewareInit";
import Permission from "../helpers/permissions";

const router = express.Router();

const updateProfileProtect = protected_route([Permission.UpdateProfile]);

router.route("/").get(protect, getAllUsers);

router.route("/get-team").get(getTeam);

router.route("/current-user").get(protect, getCurrentUserController);

router.route("/get-user/:id").get(protect, getUserController);

router
  .route("/update-user")
  .put(
    protect,
    updateUserController,
    updateProfileProtect,
    permsUpdateController,
  );

export default router;
