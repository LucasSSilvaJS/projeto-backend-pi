import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { AuthorsController } from '../http/controllers/AuthorsController';
import { FileUploader } from '../http/middlewares/FileUploader';
import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const authorsController = new AuthorsController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(authorsController.getAuthors));
router.get('/:id', ErrorHandler.catchErrors(authorsController.getAuthor));
router.post(
    '/', 
    ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(AdminMiddleware.check), 
    FileUploader.upload("image", "authors", 2 * 1024 * 1024), 
    ErrorHandler.catchErrors(authorsController.create)
);
router.put(
    '/:id',
    ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(AdminMiddleware.check), 
    ErrorHandler.catchErrors(authorsController.update)
);
router.delete(
    '/:id', 
    ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(AdminMiddleware.check), 
    ErrorHandler.catchErrors(authorsController.delete)
);

export default router;