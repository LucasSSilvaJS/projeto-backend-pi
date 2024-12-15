import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { ProdutoController } from '../http/controllers/ProdutoController';
// import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const produtoController = new ProdutoController();

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(produtoController.getProdutos));
router.get('/:id', ErrorHandler.catchErrors(produtoController.getProduto));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(produtoController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(produtoController.update)
);
router.delete(
    '/:id', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(produtoController.delete)
);

export default router;