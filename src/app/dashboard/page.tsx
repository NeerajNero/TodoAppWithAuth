import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import TodoClient from "./_components/TodoClient";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/unauthorized");

  return (
    <main className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome, {session.user.name} 👋</h1>
      <TodoClient />
    </main>
  );
}
