"use client";

import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { Todo } from "@/types/type";

export default function TodoClient() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editing, setEditing] = useState<Todo | null>(null); 

  const fetchTodos = async () => {
    const res = await fetch("/api/todo");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <TodoForm onTodoAdded={fetchTodos} editing={editing} setEditing={setEditing} />
      <ul className="mt-6 space-y-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onChange={fetchTodos} onEdit={setEditing} />
        ))}
      </ul>
    </div>
  );
}
