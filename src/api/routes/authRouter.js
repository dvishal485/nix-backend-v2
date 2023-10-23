import express  from 'express';
import {verifyToken, refresh, signup, login, forgotPassword, resetPassword, logout} from '../controllers/authController.js';

const router = express.Router();

router.post("refresh", refresh);
router.post('/signup', signup)
router.post('/login', login);
router.post("/forgotPassword", forgotPassword);
router.patch("/resetPassword/:token", resetPassword);
router.post("/logout", verifyToken, logout);

export default router