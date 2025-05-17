import { Todo } from '../App';

interface Props {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleTodo, deleteTodo }: Props) => (
  <ul className="mt-4 space-y-2">
    {todos.map((todo) => (
      <li key={todo._id} className="flex justify-between p-2 bg-gray-50 rounded">
        <span
          className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
          onClick={() => toggleTodo(todo._id)}
        >
          {todo.text}
        </span>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
