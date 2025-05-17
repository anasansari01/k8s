import { Schema, model, Document } from 'mongoose';

interface ITodo extends Document {
  text: string;
  completed: boolean;
}

const todoSchema = new Schema<ITodo>({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default model<ITodo>('Todo', todoSchema);
