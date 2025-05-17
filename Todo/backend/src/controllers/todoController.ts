import { Request, Response } from 'express';
import Todo from '../models/Todo';

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch {
    res.status(500).json({ message: 'Error fetching todos' });
  }
};

export const addTodo = async (req: Request, res: Response) => {
  const { text } = req.body;
  try {
    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch {
    res.status(400).json({ message: 'Error adding todo' });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch {
    res.status(400).json({ message: 'Error updating todo' });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch {
    res.status(400).json({ message: 'Error deleting todo' });
  }
};
