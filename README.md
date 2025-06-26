# ✅ Todo App — Next.js + NextAuth + Prisma + PostgreSQL

A modern, full-stack Todo App built with Next.js App Router, Google & GitHub authentication, Prisma ORM, PostgreSQL (via Neon), and deployed on Vercel.

---

## ✨ Features

- 🔐 Google & GitHub OAuth login via **NextAuth**
- 📝 Authenticated users can **create and view personal todos**
- 🧠 Uses **Prisma ORM** with PostgreSQL (Neon)
- 💡 Built with **Next.js App Router** and **Server Components**
- 🎨 Styled using **Tailwind CSS**
- 🚀 Deployed on **Vercel**

---

## 📷 Preview

![screenshot](public/screenshot.png) <!-- optional -->

---

## 🔧 Tech Stack

| Tech         | Purpose                         |
|--------------|---------------------------------|
| Next.js      | Full-stack framework (App Router) |
| NextAuth     | Authentication (Google & GitHub) |
| Prisma       | ORM to interact with PostgreSQL |
| PostgreSQL   | Database via Neon               |
| Tailwind CSS | Styling                         |
| Vercel       | Deployment                      |

---

## ⚙️ Environment Variables

Make sure to add the following in your `.env.local` (and in Vercel → Project Settings → Env Vars):

```env
DATABASE_URL=your_postgres_url
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret
