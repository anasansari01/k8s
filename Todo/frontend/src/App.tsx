import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export interface Todo {
  _id: string;
  text: string;
  completed: boolean;
}

const API_URL = import.meta.env.VITE_API_URL + '/todos';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (text: string) => {
    const res = await axios.post(API_URL, { text });
    setTodos([...todos, res.data]);
  };

  const toggleTodo = async (id: string) => {
    const todo = todos.find((t) => t._id === id);
    const res = await axios.put(`${API_URL}/${id}`, { completed: !todo?.completed });
    setTodos(todos.map((t) => (t._id === id ? res.data : t)));
  };

  const deleteTodo = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter((t) => t._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
