import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { NotificacaoController } from '../http/controllers/NotificacaoController';
import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const notificacaoController = new NotificacaoController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(notificacaoController.getNotificacoes));
router.get('/:id', ErrorHandler.catchErrors(notificacaoController.getNotificacao));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(notificacaoController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(notificacaoController.update)
);
router.delete(
    '/:id', 
    ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(notificacaoController.delete)
);

export default router;