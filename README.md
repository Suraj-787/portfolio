# Portfolio - Full-Stack Developer & AI Builder

A modern, interactive portfolio website built with Next.js 15, featuring a playful outlined UI design system with dark mode support, custom animations, and responsive layouts.

[![Built with Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- **Modern Design System**: Playful outlined UI with thick borders, rounded corners, and pastel accent colors
- **Dark Mode**: Seamless theme switching with persistent user preferences
- **Interactive UI**: Custom cursor, click sparks, light rays effects, and smooth animations
- **Responsive Layout**: Optimized for all screen sizes from mobile to desktop
- **Multiple Pages**: Home, About, Projects, and Blog sections
- **3D Graphics**: Three.js integration for interactive visual elements
- **Performance Optimized**: Static generation with Next.js 15 for fast load times

## 🛠️ Tech Stack

### Core
- **Next.js 15.5** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4.1** - Utility-first styling

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **next-themes** - Dark mode support
- **Framer Motion** (via animations) - Smooth transitions

### 3D Graphics
- **Three.js** - 3D rendering
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helper components

### Form & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation integration

### Additional Libraries
- **Recharts** - Data visualization
- **date-fns** - Date utilities
- **Embla Carousel** - Touch-friendly carousels
- **Sonner** - Toast notifications

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint

## 🎨 Design Philosophy

This portfolio follows a playful, outlined UI design system inspired by modern product designer portfolios:

- **Cream/off-white background** with thick black borders (3-4px)
- **Large rounded corners** for a friendly, handcrafted feel
- **Bold pastel accent colors** (yellow, pink, mint, purple)
- **Sticker-like decorative elements** floating around layouts
- **Extra-bold typography** with tight line heights
- **Pill-shaped buttons** with black borders
- **Card-based layouts** for services and projects
- **Subtle lift animations** on hover (no gradients or glassmorphism)

See [`design_reference.md`](./design_reference.md) for detailed design guidelines.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── projects/          # Projects page
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Additional stylesheets
```

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Build Configuration

The project uses the following Next.js configuration:
- TypeScript build errors are ignored (for rapid iteration)
- Image optimization is disabled (unoptimized mode)
- ESLint errors are ignored during builds

**Note**: For production deployments, consider enabling these checks for better code quality.

### Environment Variables

No environment variables are required for the basic setup. Add any API keys or secrets to `.env.local` (not tracked in git).

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal portfolio project. If you have suggestions or find bugs, feel free to open an issue.

---

**Built with ❤️ using Next.js, React, and TypeScript**
