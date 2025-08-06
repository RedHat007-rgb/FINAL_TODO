import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Status, values } from '@repo/shared';
import { Document } from 'mongoose';

@Schema({ timestamps: true, toJSON: { virtuals: true } })
export class Todo extends Document {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop({
    enum: values,
    required: true,
  })
  status: Status;
}

export const todoSchema = SchemaFactory.createForClass(Todo);
