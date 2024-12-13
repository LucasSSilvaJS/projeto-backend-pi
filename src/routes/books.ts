import express from 'express';
import { ErrorHandler } from '../utils/ErrorHandler';
import { BooksController } from '../http/controllers/BooksController';
import { FileUploader } from '../http/middlewares/FileUploader';
import { AuthMiddleware } from '../http/middlewares/AuthMiddleware';
import { AdminMiddleware } from '../http/middlewares/AdminMiddleware';

const booksController = new BooksController()

const router = express.Router();

router.get('/', ErrorHandler.catchErrors(booksController.getBooks));
router.get('/:id', ErrorHandler.catchErrors(booksController.getBook));
router.post(
    '/',
    ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(AdminMiddleware.check), 
    FileUploader.upload("image", "books", 2 * 1024 * 1024), 
    ErrorHandler.catchErrors(booksController.create)
);
router.put(
    '/:id',
    ErrorHandler.catchErrors(AuthMiddleware.authenticate),  
    ErrorHandler.catchErrors(AdminMiddleware.check), 
    ErrorHandler.catchErrors(booksController.update)
);
router.delete(
    '/:id', 
    ErrorHandler.catchErrors(AuthMiddleware.authenticate), 
    ErrorHandler.catchErrors(AdminMiddleware.check), 
    ErrorHandler.catchErrors(booksController.delete)
);

export default router;