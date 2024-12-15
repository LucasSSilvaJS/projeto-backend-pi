import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { FornecedorController } from '../http/controllers/FornecedorController';
// import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const fornecedorController = new FornecedorController();

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(fornecedorController.getFornecedores));
router.get('/:id', ErrorHandler.catchErrors(fornecedorController.getFornecedor));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(fornecedorController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(fornecedorController.update)
);
router.delete(
    '/:id', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(fornecedorController.delete)
);

export default router;