import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { ClienteController } from '../http/controllers/ClienteController';
import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const clienteController = new ClienteController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(clienteController.getClientes));
router.get('/:id', ErrorHandler.catchErrors(clienteController.getCliente));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(clienteController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(clienteController.update)
);
router.delete(
    '/:id', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(clienteController.delete)
);

export default router;