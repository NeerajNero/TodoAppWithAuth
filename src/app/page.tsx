import { auth } from "@/lib/auth";
import Link from "next/link";
export default async function Home() {
  const session = await auth();
    return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {session?.user?.name && "Welcome back, " + session.user.name} <br />
          Organize Your Day, <br /> One Todo at a Time ✍️
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto text-gray-300">
          Effortless task tracking, cloud-synced, and powered by Google & GitHub login.
        </p>

        <Link
          href="/dashboard"
          className="inline-block mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>

      <div className="absolute bottom-4 text-sm text-gray-400">
        Built with ❤️ using Next.js + Prisma + NextAuth
      </div>
    </main>
  );
}
