import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { ServicoController } from '../http/controllers/ServicoController';
// import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const servicoController = new ServicoController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(servicoController.getServicos));
router.get('/:id', ErrorHandler.catchErrors(servicoController.getServico));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(servicoController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(servicoController.update)
);
router.delete(
    '/:id', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(servicoController.delete)
);

export default router;