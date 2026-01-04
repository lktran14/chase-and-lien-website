# Chase & Lien Travel Gallery

A beautiful, responsive travel photo gallery website showcasing adventures from around the world. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌍 Overview

This website displays a curated collection of travel photos organized by destination, featuring trips to Sri Lanka, Glastonbury, New Zealand, Dublin, Portugal, Krakow, Greece, Paris, and Barcelona. The site provides an elegant, gallery-style interface for browsing memories from various adventures.

## ✨ Features

- **Photo Gallery**: Organized by travel destination with detailed photo collections
- **Overview Page**: Interactive carousel previews of all travel locations
- **Location Pages**: Individual pages for each destination with masonry-style photo grids
- **Image Lightbox**: Click any photo to view it in full-screen mode
- **Responsive Design**: Fully responsive with mobile-friendly navigation
- **Smooth Navigation**: Easy navigation between locations with previous/next buttons
- **Sidebar Navigation**: Persistent sidebar with all travel destinations
- **Mobile Menu**: Hamburger menu for mobile devices

## 🛠️ Tech Stack

### Core
- **Next.js 16.0.10** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4.1.9** - Utility-first CSS framework

### UI Components
- **shadcn/ui** - Comprehensive component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Styling & Design
- **Custom Fonts**: Playfair Display (serif), Inter (sans-serif), Original Surfer
- **OKLCH Color Space** - Modern color system with light/dark mode support
- **Tailwind Animate** - Animation utilities

### Analytics
- **Vercel Analytics** - Website analytics

### Additional Libraries
- **next-themes** - Theme management (light/dark mode)
- **date-fns** - Date formatting utilities
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class name utilities

## 📁 Project Structure

```
chase-and-lien-website/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main gallery page component
├── components/
│   ├── theme-provider.tsx   # Theme context provider
│   └── ui/                  # shadcn/ui components (50+ components)
├── hooks/
│   ├── use-mobile.ts        # Mobile detection hook
│   └── use-toast.ts         # Toast notification hook
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/
│   ├── images/              # Travel photos (200+ images)
│   └── [icons and assets]
├── styles/
│   └── globals.css          # Additional global styles
├── components.json          # shadcn/ui configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chase-and-lien-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📸 Travel Destinations

The website features photos from the following destinations:

1. **Sri Lanka 2025** (August) - Elephants, temples, and traditional ceremonies
2. **Glastonbury 2025** (June) - Music festival and art installations
3. **New Zealand 2025** (February) - Scenic landscapes, hot tubs, and adventures
4. **Dublin 2024** (December) - Guinness Storehouse and Christmas markets
5. **Portugal 2024** (September) - Palaces, trams, and coastal views
6. **Krakow 2024** (June) - Shooting ranges, vodka tasting, and historic sites
7. **Greece 2024** (May) - Athens, Monemvasia, and elegant weddings
8. **Paris 2024** (April & October) - Eiffel Tower, museums, and marathon
9. **Barcelona 2023** (December) - Gaudi architecture and vibrant culture

## 🎨 Design System

### Colors
The site uses a custom color system based on OKLCH color space, supporting both light and dark modes:
- Background and foreground colors
- Card, popover, and sidebar variants
- Primary, secondary, muted, and accent colors
- Destructive colors for error states

### Typography
- **Serif**: Playfair Display (for headings)
- **Sans-serif**: Inter (for body text)
- **Surfer**: Original Surfer (available but not actively used)

### Components
The project includes 50+ shadcn/ui components including:
- Buttons, cards, dialogs
- Navigation menus, sidebars
- Forms, inputs, selects
- Charts, carousels, calendars
- And many more...

## 🔧 Configuration

### Next.js Config
- TypeScript build errors are ignored (for development flexibility)
- Images are unoptimized (can be optimized for production)

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*` maps to root)
- ES6 target with modern module resolution

### Tailwind CSS
- Custom theme variables
- CSS variables for dynamic theming
- Custom variants for dark mode

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🖼️ Image Management

All travel photos are stored in `/public/images/` directory. The main page component (`app/page.tsx`) contains arrays of photo metadata including:
- Image source paths
- Alt text descriptions
- Orientation (portrait/landscape)

To add new photos:
1. Add images to `/public/images/`
2. Update the corresponding photo array in `app/page.tsx`
3. Add the location to the `locations` array if it's a new destination

## 🌐 Deployment

The site is configured for deployment on Vercel (with Vercel Analytics included). To deploy:

1. Push to your Git repository
2. Import the project in Vercel
3. Deploy automatically on push

## 📄 License

All content Copyright © 2025 Chase & Lien

## 👥 Credits

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

For questions or contributions, please open an issue or pull request.

