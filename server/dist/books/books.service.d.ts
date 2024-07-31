import { Model } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema';
export declare class BooksService {
    private bookModel;
    constructor(bookModel: Model<BookDocument>);
    findAll(): Promise<Book[]>;
    findByTag(tag: string): Promise<Book[]>;
}
