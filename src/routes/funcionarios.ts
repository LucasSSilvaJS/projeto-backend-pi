import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { FuncionarioController } from '../http/controllers/FuncionarioController';
import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const funcionarioController = new FuncionarioController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(funcionarioController.getFuncionarios));
router.get('/:id', ErrorHandler.catchErrors(funcionarioController.getFuncionario));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(funcionarioController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(funcionarioController.update)
);
router.delete(
    '/:id', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(funcionarioController.delete)
);

export default router;