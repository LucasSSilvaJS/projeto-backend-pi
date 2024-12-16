import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { UsuarioController } from '../http/controllers/UsuarioController';

const authController = new UsuarioController()

const router = express.Router();

router.post('/cadastrar', ErrorHandler.catchErrors(authController.cadastrar));
router.post('/entrar', ErrorHandler.catchErrors(authController.entrar));

export default router;