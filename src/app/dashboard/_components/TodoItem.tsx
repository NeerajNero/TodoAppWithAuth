"use client";
import { Todo } from "@/types/type";

interface TodoItemProps {
  todo: Todo;
  onChange: () => void;
  onEdit: (todo: Todo) => void;
}

export default function TodoItem({ todo, onChange, onEdit }: TodoItemProps) {
  const handleDelete = async () => {
    await fetch("/api/todo", {
      method: "DELETE",
      body: JSON.stringify({ id: todo.id }),
    });
    onChange();
  };

  return (
    <li className="flex justify-between items-center bg-white text-gray-900 px-4 py-2 rounded shadow-sm border">
      <span>{todo.title}</span>
      <div className="flex gap-2">
        <button onClick={() => onEdit(todo)} className="text-blue-600 text-sm">Edit</button>
        <button onClick={handleDelete} className="text-red-600 text-sm">Delete</button>
      </div>
    </li>
  );
}
