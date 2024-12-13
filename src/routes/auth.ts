import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { AuthController } from '../http/controllers/AuthController';

const authController = new AuthController()

const router = express.Router();

router.post('/register', ErrorHandler.catchErrors(authController.register));
router.post('/login', ErrorHandler.catchErrors(authController.login));

export default router;