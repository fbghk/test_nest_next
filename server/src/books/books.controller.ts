import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async searchBooks(@Query('query') query: string) {
    return this.booksService.searchBooks(query);
  }

  @Get('tags')
  async findBooksByTag(@Query('tag') tag: string) {
    return this.booksService.findBooksByTag(tag);
  }
}