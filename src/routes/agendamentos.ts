import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { AgendamentoController } from '../http/controllers/AgendamentoController';
import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const agendamentoController = new AgendamentoController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(agendamentoController.getAgendamentos));
router.get('/:id', ErrorHandler.catchErrors(agendamentoController.getAgendamento));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(agendamentoController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(agendamentoController.update)
);
router.delete(
    '/:id', 
    ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(agendamentoController.delete)
);

export default router;