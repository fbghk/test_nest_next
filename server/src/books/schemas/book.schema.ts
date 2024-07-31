// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class Book extends Document {
//   @Prop() title: string;
//   @Prop() author: string;
//   @Prop() tags: string[];
// }

// export const BookSchema = SchemaFactory.createForClass(Book);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop()
  author: string;

  @Prop()
  description: string;

  @Prop([String])
  tags: string[];
}

export const BookSchema = SchemaFactory.createForClass(Book);