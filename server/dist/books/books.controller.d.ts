import { BooksService } from './books.service';
import { Book } from './schemas/book.schema';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<Book[]>;
    findByTag(tag: string): Promise<Book[]>;
}
