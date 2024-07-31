// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Book } from './schemas/book.schema';

// @Injectable()
// export class BooksService {
//   constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

//   async searchBooks(query: string): Promise<Book[]> {
//     return this.bookModel.find({ title: { $regex: query, $options: 'i' } }).exec();
//   }

//   async findBooksByTag(tag: string): Promise<Book[]> {
//     return this.bookModel.find({ tags: tag }).exec();
//   }
// }

// books.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findByTag(tag: string): Promise<Book[]> {
    return this.bookModel.find({ tags: tag }).exec();
  }
}