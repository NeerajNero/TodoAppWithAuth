"use client";

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut().then(() => redirect("/api/auth/signin"))}
      className="text-sm text-white hover:underline"
    >
      Logout
    </button>
  );
}
