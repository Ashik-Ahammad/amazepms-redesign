# Amaze PMS - Premium Web Redesign

A world-class, highly animated, and premium front-end redesign for a property management website, built as a high-stakes hiring assignment submission.

## 🌟 Live Demo
[Insert Vercel/Netlify URL Here]

## 🚀 Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Animation:** Framer Motion
- **Smooth Scroll:** Lenis (Studio Freight)
- **Icons:** Lucide React
- **Fonts:** Geist & Geist Mono

## ✨ Key Features & Highlights
- **Premium Aesthetics:** Sleek dark mode and clean light mode built with a custom design system, glassmorphism, and ambient gradients.
- **Micro-Interactions:** Magnetic buttons, smooth hover states, and meticulously timed stagger animations using Framer Motion.
- **Lenis Smooth Scrolling:** Buttery-smooth page navigation that feels native and premium.
- **Bento Grid Architecture:** Modern, responsive "Bento Box" layouts used for the core services display.
- **Static & Semantic SEO:** Hardcoded FAQ (zero `.map()` arrays for accordions per instructions) and semantic HTML structures for optimal crawler visibility.
- **Zero-Error Codebase:** Fully typed with strict TypeScript and 0 ESLint errors/warnings. 

## 📂 Folder Structure (Production-Grade)
```text
src/
├── app/                  # App router pages, layout, and global CSS
├── components/           
│   ├── layout/           # Navbar, Footer, Lenis wrapper
│   ├── sections/         # Hero, ServicesBento, Features, Faq, etc.
│   ├── ui/               # Reusable UI elements (Button, ThemeToggle)
├── lib/                  # Utility functions (tailwind merge, cn)
├── constants/            # Static data configurations
└── types/                # TypeScript interfaces
```

## 🛠️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd amazepms-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Philosophy
Inspired by the clean aesthetics of Vercel, Apple, and Awwwards-winning sites, this redesign strips away generic corporate clutter. It introduces a bold, typography-driven Hero section, floating ambient elements, and interactive layouts that prioritize user engagement without sacrificing the core business purpose of facility management.
