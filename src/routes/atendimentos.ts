import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { AtendimentoController } from '../http/controllers/AtendimentoController';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const atendimentoController = new AtendimentoController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(atendimentoController.getAtendimentos));
router.get('/:id', ErrorHandler.catchErrors(atendimentoController.getAgendamento));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(atendimentoController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(atendimentoController.update)
);
router.delete(
    '/:id', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(atendimentoController.delete)
);

export default router;