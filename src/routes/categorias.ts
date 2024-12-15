import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { CategoriaController } from '../http/controllers/CategoriaController';

const categoriaController = new CategoriaController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(categoriaController.getCategorias));
router.get('/:id', ErrorHandler.catchErrors(categoriaController.getCategoria));
router.post(
    '/',
    ErrorHandler.catchErrors(categoriaController.create)
);
router.put(
    '/:id',
    ErrorHandler.catchErrors(categoriaController.update)
);
router.delete(
    '/:id', 
    ErrorHandler.catchErrors(categoriaController.delete)
);

export default router;