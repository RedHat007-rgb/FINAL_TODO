import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Todo } from './db.todo';

@Schema()
export class User extends Document {
  @Prop()
  firstname: string;
  @Prop()
  lastname: string;
  @Prop()
  email: string;
  @Prop()
  number: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Todo })
  todos: Todo[];
}

export const userSchema = SchemaFactory.createForClass(User);
