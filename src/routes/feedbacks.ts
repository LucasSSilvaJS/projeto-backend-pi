import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { FeedbackController } from '../http/controllers/FeedbackController';
// import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const feedbackController = new FeedbackController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(feedbackController.getFeedbacks));
router.get('/:id', ErrorHandler.catchErrors(feedbackController.getFeedback));
router.post(
    '/', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(feedbackController.create)
);
router.put(
    '/:id',
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(feedbackController.update)
);
router.delete(
    '/:id', 
    // ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(feedbackController.delete)
);

export default router;