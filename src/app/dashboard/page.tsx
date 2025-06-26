import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import TodoForm from "./_components/TodoForm";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/unauthorized"); // or sign-in
  }

  const todos = await db.todo.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome, {session.user.name} 👋</h1>

      <TodoForm />

      <ul className="mt-8 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-white text-gray-900 px-4 py-2 rounded shadow-sm border"
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
