import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { PagamentoController } from '../http/controllers/PagamentoController';
import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const pagamentoController = new PagamentoController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(pagamentoController.getPagamentos));
router.get('/:id', ErrorHandler.catchErrors(pagamentoController.getPagamento));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(pagamentoController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(pagamentoController.update)
);
router.delete(
    '/:id', 
    ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(pagamentoController.delete)
);

export default router;