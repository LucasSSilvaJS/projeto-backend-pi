import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { EquipamentoController } from '../http/controllers/EquipamentoController';
// import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const equipamentoController = new EquipamentoController();

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(equipamentoController.getEquipamentos));
router.get('/:id', ErrorHandler.catchErrors(equipamentoController.getEquipamento));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(equipamentoController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(equipamentoController.update)
);
router.delete(
    '/:id', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(equipamentoController.delete)
);

export default router;