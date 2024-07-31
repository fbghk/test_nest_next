// import { Controller, Get, Query } from '@nestjs/common';
// import { BooksService } from './books.service';

// @Controller('books')
// export class BooksController {
//   constructor(private readonly booksService: BooksService) {}

//   @Get()
//   async searchBooks(@Query('query') query: string) {
//     return this.booksService.searchBooks(query);
//   }

//   @Get('tags')
//   async findBooksByTag(@Query('tag') tag: string) {
//     return this.booksService.findBooksByTag(tag);
//   }
// }

// books.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get('tag/:tag')
  async findByTag(@Param('tag') tag: string): Promise<Book[]> {
    return this.booksService.findByTag(tag);
  }
}