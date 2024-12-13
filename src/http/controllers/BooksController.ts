import { Request, Response } from "express";
import { AppDataSource } from "../../database/data-source";
import { ResponseUtil } from "../../utils/Response";
import { Paginator } from "../../database/Paginator";
import { validateOrReject } from "class-validator";
import { Book } from "../../database/entities/Book";
import { CreateBookDTO, UpdateBookDTO } from "../dtos/BookDTO";

export class BooksController {
    async getBooks(req: Request, res: Response){
        const builder = await AppDataSource.getRepository(Book)
        .createQueryBuilder("book")
        .leftJoinAndSelect("book.author", "author")
        .orderBy('book.id', 'DESC');
        const {records: books, paginationInfo} = await Paginator.paginate(builder, req);

        const bookData = books.map((book: Book) => {
            return book.toPayload();
        })

        ResponseUtil.sendResponse(res, "Fetched books successfully", bookData, paginationInfo);
    }

    async getBook(req: Request, res: Response){
        const {id} = req.params;
        const book = await AppDataSource.getRepository(Book).findOneByOrFail({
            id: Number(id),
        });

        ResponseUtil.sendResponse<Partial<Book>>(res, "Fetched book successfully", book.toPayload());
    }

    async create(req: Request, res: Response){
        const bookData = req.body;
        bookData.image = req.file?.filename;

        const dto = new CreateBookDTO();
        Object.assign(dto, bookData);
        dto.price = parseInt(bookData.price);
        dto.authorId = parseInt(bookData.authorId);

        await validateOrReject(dto);

        const repo = await AppDataSource.getRepository(Book);
        const book = repo.create(bookData);
        await repo.save(book);

        ResponseUtil.sendResponse(res, "Successfully created new book", book, null);
    }

    async update(req: Request, res: Response){
        const {id} = req.params;
        const bookData = req.body;

        const dto = new UpdateBookDTO();
        Object.assign(dto, bookData);
        dto.id = parseInt(id);

        await validateOrReject(dto);

        const repo = AppDataSource.getRepository(Book);

        const book = await repo.findOneByOrFail({
            id: Number(id),
        });

        repo.merge(book, bookData);
        await repo.save(book);

        ResponseUtil.sendResponse(res, "Successfully updated the book", book.toPayload());
    }

    async delete(req: Request, res: Response){
        const {id} = req.params;

        const repo = AppDataSource.getRepository(Book);

        const book = await repo.findOneByOrFail({
            id: Number(id),
        });

        await repo.remove(book);

        ResponseUtil.sendResponse(res, "Successfully deleted the book", null);
    }
}