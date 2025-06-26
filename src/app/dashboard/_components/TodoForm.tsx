"use client";

import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Todo } from "@/types/type";

interface TodoFormProps {
  onTodoAdded: () => void;
  editing: Todo | null;
  setEditing: (todo: Todo | null) => void;
}

type FormData = {
  title: string;
};

export default function TodoForm({ onTodoAdded, editing, setEditing }: TodoFormProps) {
  const { register, handleSubmit, reset } = useForm<FormData>();

  useEffect(() => {
    if (editing) {
      reset({ title: editing.title });
    } else {
      reset({ title: "" });
    }
  }, [editing, reset]);

  const onSubmit = async (data: FormData) => {
    const method = editing ? "PUT" : "POST";
    const res = await fetch("/api/todo", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editing ? { ...editing, title: data.title } : data),
    });

    if (res.ok) {
      reset();
      setEditing(null);
      onTodoAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <input
        {...register("title", { required: true })}
        placeholder="Enter a todo"
        className="flex-1 border px-3 py-2 rounded"
      />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        {editing ? "Update" : "Add"}
      </button>
    </form>
  );
}
