# 💼 Deepan's Portfolio Website

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" />
  <img src="https://img.shields.io/badge/React-TypeScript-61DAFB?logo=react" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwind-css" />
  <img src="https://img.shields.io/badge/shadcn-ui-black" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel" />
  <img src="https://img.shields.io/badge/Package Manager-pnpm-F69220?logo=pnpm" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</p>

<p align="center">
  A modern, responsive portfolio website built with <strong>TypeScript</strong>, <strong>Next.js 16 (App Router)</strong>, <strong>Tailwind CSS</strong>, and <strong>shadcn/ui</strong>.
</p>
<p align="center">Author: https://github.com/deepan-patel/</p>



---

## 🌐 Live Demo

🔗 **Live Site:** https://your-domain.vercel.app  
*(Replace with your actual deployed URL)*

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Component Library:** shadcn/ui
- **Package Manager:** pnpm
- **Deployment:** Vercel

---

## 📁 Project Structure

```
/public
  /assets                # Static images and media files

/app
  /components
    /web                 # Custom reusable components
```

### 📌 Assets Folder

All static images and media files are stored in:

```
/public/assets
```

You can reference them directly in your components:

```tsx
<Image src="/assets/profile.png" alt="Profile" width={200} height={200} />
```

---

### 📌 Custom Components

All custom-built reusable components are located in:

```
/app/components/web
```

This includes:
- Hero sections  
- Cards  
- Layout components  
- Custom UI sections  

Keeping components modular ensures scalability and maintainability.

---

# ⚙️ Getting Started

## 1️⃣ Prerequisites

Ensure you have:

- **Node.js 18+**
- **pnpm** installed globally

Install pnpm (if needed):

```bash
npm install -g pnpm
```

Check versions:

```bash
node -v
pnpm -v
```

---

## 2️⃣ Installation (Cloning or Forking)

```bash
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME
pnpm install
```

---

## 3️⃣ Run Development Server

```bash
pnpm dev
```

Visit:

```
http://localhost:3000
```

---

## 4️⃣ Build for Production

```bash
pnpm build
```

Start production server locally:

```bash
pnpm start
```

---

# 🛠 Creating This Project From Scratch

If you want to recreate this setup:

```bash
pnpm create next-app@latest my-portfolio
```

Select:
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ App Router
- ✅ ESLint (recommended)

Navigate into the project:

```bash
cd my-portfolio
```

---

# 🎨 Tailwind CSS Setup (If Needed)

If Tailwind is not installed:

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

Ensure `tailwind.config.ts` includes:

```ts
content: [
  "./app/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
]
```

---

# 🧩 shadcn/ui Setup

Initialize shadcn:

```bash
pnpm dlx shadcn@latest init
```

Follow prompts:
- Select `app` directory
- Choose TypeScript
- Confirm Tailwind config location

To add components:

```bash
pnpm dlx shadcn@latest add button
```

Add any additional UI components as needed.

---

# 🔁 If You Fork This Repository

1. Fork the repository  
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Run locally:
   ```bash
   pnpm dev
   ```

To deploy:
- Connect your forked repository to Vercel
- Click **Deploy**
- Vercel auto-detects Next.js configuration

---

# 🚀 Deployment (Vercel)

This project is optimized for Vercel.

Steps:
1. Push your project to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Click **Deploy**

Vercel automatically handles:
- Next.js build configuration
- Environment variables
- Performance optimizations

---

# ✨ Features

- ⚡ High-performance Next.js App Router architecture
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🧩 Reusable component-based structure
- 🌍 Production-ready deployment
- 🧠 Strong TypeScript typing

---

# 📌 Best Practices

- Keep reusable components inside `/app/components/web`
- Store all static files in `/public/assets`
- Maintain strict TypeScript types
- Use shadcn components for scalable UI
- Follow App Router conventions

---

<p align="center">
  Built with ❤️ using Next.js 16 + TypeScript + Tailwind CSS
</p>
