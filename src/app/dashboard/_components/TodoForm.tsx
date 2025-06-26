"use client";

import { useState } from "react";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setLoading(true);

    const res = await fetch("api/todo", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setTitle("");
      location.reload(); // Quick refresh to get updated todos
    } else {
      alert("Failed to add todo.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new todo..."
        className="flex-1 px-4 py-2 rounded border border-gray-300"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form>
  );
}
