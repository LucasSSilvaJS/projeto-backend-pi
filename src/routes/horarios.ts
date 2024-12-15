import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { HorarioController } from '../http/controllers/HorarioController';
import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const horarioController = new HorarioController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(horarioController.getHorarios));
router.get('/:id', ErrorHandler.catchErrors(horarioController.getHorario));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(horarioController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(horarioController.update)
);
router.delete(
    '/:id', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(horarioController.delete)
);

export default router;