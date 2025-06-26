import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import TodoClient from "./_components/TodoClient";

export const metadata = {
  title: "Todo App – Simple & Secure",
  description: "A minimal todo app with Google/GitHub sign-in, powered by Next.js, Prisma & PostgreSQL.",
  keywords: ["todo", "nextjs", "prisma", "postgresql", "nextauth", "task manager"],
  authors: [{ name: "NeerajNero", url: "https://github.com/NeerajNero/TodoAppWithAuth" }],
  creator: "NeerajNero",
  openGraph: {
    title: "Todo App – Next.js + Prisma",
    description: "A simple yet powerful todo app with secure login and efficient task management.",
    url: "https://todo-app-with-auth-phi.vercel.app/",
    siteName: "Todo App",
    locale: "en_US",
    type: "website",
  },
};


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
