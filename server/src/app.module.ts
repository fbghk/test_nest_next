// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gkalf:7ghkdwk@cluster0.mmiiheq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), // MongoDB 연결 URI
    BooksModule,
  ],
})
export class AppModule {}