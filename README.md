# Nexlayer Website - Developer Guide

A modern, modular React/Next.js website for Nexlayer - the first agent-native cloud platform. This guide helps developers efficiently update, edit, and manage the website.

## 🛠️ Technology Stack

### **Frontend Framework**
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks and modern features
- **TypeScript** - Type-safe JavaScript development

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Pre-built, accessible UI components
- **Framer Motion** - Animation library for smooth transitions

### **Development Tools**
- **Node.js 18+** - JavaScript runtime
- **npm/yarn** - Package managers
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing

### **Deployment & Hosting**
- **Nexlayer** - Platform for deployment and hosting
- **GitHub** - Version control and collaboration
- **GitHub Assets** - Image and asset hosting via GitHub releases or raw content

### **Key Libraries**
- **Lucide React** - Icon library
- **clsx** - Conditional CSS classes
- **class-variance-authority** - Component variant management

### **Performance & Optimization**
- **Next.js Image** - Optimized image handling
- **Code Splitting** - Automatic bundle optimization
- **Static Generation** - Fast page loads
- **Responsive Design** - Mobile-first approach
- **GitHub Raw Content** - Direct image hosting via GitHub

## 🏗️ Architecture Overview

The website uses a **modular component architecture** where each section is completely independent. This means you can:
- ✅ Edit any section without affecting others
- ✅ Add new sections easily
- ✅ Remove sections without breaking the site
- ✅ Reorder sections by changing import order

## 📁 Project Structure

```
nexlayer-website/
├── app/                          # Next.js 14 App Router
│   ├── page.tsx                  # Main landing page (imports all sections)
│   ├── layout.tsx                # Root layout with metadata
│   ├── globals.css               # Global Tailwind styles
│   └── blog/                     # Blog pages (if needed)
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Navigation.tsx        # Top navigation bar
│   │   └── Footer.tsx            # Site footer
│   ├── sections/                 # Main page sections (MODULAR)
│   │   ├── HeroSection.tsx       # Hero with CTA
│   │   ├── ComparisonSection.tsx # Without vs With comparison
│   │   ├── FeaturesSection.tsx   # Features grid
│   │   ├── FeaturesGridSection.tsx # Production features
│   │   ├── HowItWorksSection.tsx # Interactive step-by-step
│   │   ├── TestimonialsSection.tsx # Customer testimonials
│   │   └── index.ts              # Section exports
│   ├── shared/                   # Reusable components
│   │   ├── TypingEffect.tsx      # Animated typing
│   │   ├── ShaderBackground.tsx  # Animated background
│   │   └── AgenticCloudOrb.tsx   # Cloud orb animation
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx            # Button component
│   │   ├── card.tsx              # Card component
│   │   └── ...                   # Other UI components
│   └── logos/                    # Company logos
├── public/                       # Static assets
│   ├── images/                   # Images and avatars
│   └── icons/                    # SVG icons
├── lib/                          # Utilities
│   └── utils.ts                  # Helper functions
├── hooks/                        # Custom React hooks
├── tailwind.config.js            # Tailwind configuration
├── next.config.mjs               # Next.js configuration
└── package.json                  # Dependencies
```

## 🎯 Section Management

### Current Sections (in order of appearance):

1. **HeroSection** - Main headline, CTA, social proof
2. **ComparisonSection** - "Without vs With" visual comparison  
3. **FeaturesSection** - Feature comparison grid
4. **FeaturesGridSection** - Production-ready features
5. **HowItWorksSection** - Interactive 4-step process
6. **TestimonialsSection** - Customer testimonials
7. **Footer** - Site footer with links

### How to Edit a Section:

**Example: Update HeroSection text**
```tsx
// components/sections/HeroSection.tsx
export const HeroSection = () => {
  return (
    <section className="...">
      <h1 className="text-6xl font-bold">
        {/* Change this text - no other files affected */}
        Your new headline here
      </h1>
    </section>
  )
}
```

### How to Add a New Section:

1. **Create the component:**
```tsx
// components/sections/NewSection.tsx
"use client"

export const NewSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white">New Section</h2>
        {/* Your content */}
      </div>
    </section>
  )
}
```

2. **Export it:**
```tsx
// components/sections/index.ts
export { NewSection } from './NewSection'
```

3. **Add to main page:**
```tsx
// app/page.tsx
import { NewSection } from '@/components/sections'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ComparisonSection />
      <NewSection /> {/* Add here */}
      <FeaturesSection />
      {/* ... other sections */}
    </main>
  )
}
```

### How to Remove a Section:

Simply delete the import and component call from `app/page.tsx`. The section file can remain for future use.

## 🛠️ Development Workflow

### Quick Start:
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Making Changes:

1. **Edit Content:** Modify text, images, links in section components
2. **Update Styling:** Use Tailwind classes in component JSX
3. **Add Features:** Create new components in appropriate folders
4. **Test:** Check responsiveness and functionality
5. **Commit:** Use conventional commit messages

### Common Tasks:

**Change a button link:**
```tsx
// In any section component
<Button onClick={() => window.open('https://new-link.com')}>
  Updated Button Text
</Button>
```

**Update colors:**
```tsx
// Use Tailwind classes or update tailwind.config.js
<div className="bg-cyan-400 text-black"> // Primary brand color
<div className="bg-blue-500 text-white"> // Secondary color
```

**Add animations:**
```tsx
// Use Tailwind animation classes
<div className="animate-pulse">Pulsing effect</div>
<div className="hover:scale-105 transition-transform">Hover effect</div>
```

## 🎨 Design System

### Colors (Tailwind Classes):
- **Primary:** `bg-cyan-400`, `text-cyan-400` (#28B8CD)
- **Secondary:** `bg-blue-500`, `text-blue-500` (#3B82F6)
- **Background:** `bg-black`, `bg-[#0a0a0a]`
- **Text:** `text-white`, `text-gray-400`

### Typography:
- **Headings:** `text-4xl font-bold`, `text-2xl font-semibold`
- **Body:** `text-lg`, `text-base`
- **Small:** `text-sm`

### Spacing:
- **Sections:** `py-20` (vertical padding)
- **Containers:** `max-w-7xl mx-auto px-4`
- **Elements:** `mb-6`, `mt-8`, `gap-4`

### Components:
- **Buttons:** Use `Button` from `components/ui/button`
- **Cards:** Use `Card` from `components/ui/card`
- **Layout:** Use `Container` pattern with `max-w-7xl mx-auto`

## 🔧 Configuration Files

### `tailwind.config.js` - Styling
```js
// Add custom colors, fonts, animations
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#28B8CD',
      }
    }
  }
}
```

### `next.config.mjs` - Next.js Settings
```js
// Configure images, redirects, headers
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com', 'github.com']
  }
}
```

### `components.json` - shadcn/ui Config
```json
// UI component configuration
{
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js"
  }
}
```

## 📱 Responsive Design

### Breakpoints:
- **Mobile:** `< 768px` (default)
- **Tablet:** `md:` (768px+)
- **Desktop:** `lg:` (1024px+)
- **Large:** `xl:` (1280px+)

### Example:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid */}
</div>
```

## 🚀 Performance Tips

### Images:
- Use Next.js `Image` component for optimization
- Host images via GitHub raw content or releases
- Use appropriate formats (WebP, AVIF)
- Nexlayer platform handles image optimization and CDN delivery

### Code Splitting:
- Each section is automatically code-split
- Lazy load non-critical components if needed

### Bundle Size:
- Import only needed components
- Use dynamic imports for heavy libraries

## 🐛 Troubleshooting

### Common Issues:

**Build Errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Styling Issues:**
```bash
# Rebuild Tailwind
npm run build:css
```

**Import Errors:**
- Check file paths are correct
- Ensure components are exported from index files
- Verify TypeScript types

### Debug Mode:
```bash
# Run with debug logging
DEBUG=* npm run dev
```

## 📝 Best Practices

### Code Organization:
- ✅ Keep components small and focused
- ✅ Use TypeScript for all components
- ✅ Follow consistent naming conventions
- ✅ Add comments for complex logic

### Performance:
- ✅ Optimize images and videos
- ✅ Use proper semantic HTML
- ✅ Implement accessibility features
- ✅ Test on multiple devices

### Maintenance:
- ✅ Update dependencies regularly
- ✅ Monitor bundle size
- ✅ Test after major changes
- ✅ Document new features

## 🤝 Contributing

1. **Create a branch:** `git checkout -b feature/new-section`
2. **Make changes:** Follow established patterns
3. **Test thoroughly:** Check all breakpoints
4. **Commit:** Use conventional commits
5. **Submit PR:** Include description of changes

### Commit Convention:
```
feat: add new testimonials section
fix: update hero CTA link
style: adjust comparison section spacing
docs: update README with new section
```

## 📞 Support

For questions about:
- **Code structure:** Check this README
- **Design system:** Review existing components
- **Deployment:** Check Nexlayer platform documentation
- **Issues:** Create GitHub issue with details

---

**Built with:** Next.js 14, React 18, TypeScript, Tailwind CSS  
**Last Updated:** January 2025
