# Hazel Boilerplate - React Landing Page

A modern React landing page built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Project Structure

This project follows the standard shadcn/ui project structure:

```
hazel-boilerplate/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (Avatar, Button, etc.)
│   │   └── blocks/          # Composed components/demos
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn helper)
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles with Tailwind directives
├── components.json           # shadcn/ui configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Why `/components/ui` folder?

The `/components/ui` folder is the standard location for shadcn/ui components. This structure:

1. **Follows shadcn/ui conventions** - The shadcn CLI expects components in this location
2. **Enables easy component management** - You can use `npx shadcn@latest add [component]` to add new components
3. **Keeps components organized** - Separates base UI components from composed/block components
4. **Matches the `components.json` alias** - The `"ui": "@/components/ui"` alias in `components.json` points here

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
```

This will install all required dependencies including:
- React & React DOM
- TypeScript
- Tailwind CSS
- shadcn/ui dependencies (Radix UI, class-variance-authority, etc.)
- lucide-react (for icons)

### Development

2. **Start the development server:**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building

3. **Build for production:**

```bash
npm run build
```

## Features

- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Utility-first CSS framework
- ✅ **shadcn/ui** - Beautiful, accessible component library
- ✅ **Vite** - Fast build tool and dev server
- ✅ **Modern Hero Component** - Responsive landing page hero section

## Adding More shadcn/ui Components

To add more shadcn/ui components, use the CLI:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Components will be automatically added to `/src/components/ui/`.

## Project Configuration

### TypeScript

The project uses TypeScript with strict mode enabled. Path aliases are configured:
- `@/*` maps to `./src/*`

### Tailwind CSS

Tailwind is configured with:
- CSS variables for theming (light/dark mode support)
- shadcn/ui color system
- Custom radius variables

### shadcn/ui

Configured via `components.json`:
- Style: default
- TypeScript: enabled
- CSS variables: enabled
- Component path: `@/components/ui`

## Component Usage

The Hero7 component is located at `/src/components/ui/modern-hero.tsx` and can be imported like:

```tsx
import { Hero7 } from '@/components/ui/modern-hero';

function MyPage() {
    return (
        <Hero7
            heading="Your Custom Heading"
            description="Your custom description"
            button={{ text: "Click me", url: "/link" }}
            reviews={{
                count: 100,
                avatars: [...]
            }}
        />
    );
}
```

## License

MIT


