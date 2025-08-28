# Nexlayer Website

A modern, modular React/Next.js website for Nexlayer - the first agent-native cloud platform.

## 🏗️ Architecture

The website is built with a modular, scalable architecture that separates concerns and makes it easy to maintain and update individual sections.

### 📁 Project Structure

```
components/
├── layout/           # Layout components (Navigation, Footer)
├── sections/         # Main page sections
├── shared/           # Reusable components (TypingEffect, etc.)
├── ui/              # UI components (Button, etc.)
└── logos/           # Logo components

app/
├── page.tsx         # Main landing page
├── layout.tsx       # Root layout
└── globals.css      # Global styles
```

## 🎯 Sections

The website is organized into the following modular sections:

1. **Hero Section** (`components/sections/HeroSection.tsx`)
   - Main headline and value proposition
   - Interactive typing effect
   - Social proof logos
   - Primary CTA

2. **Comparison Section** (`components/sections/ComparisonSection.tsx`)
   - "Without vs With" comparison
   - Interactive tab switching
   - Clear value demonstration

3. **Cloud Agents Trust** (`components/sections/CloudAgentsTrustSection.tsx`)
   - Trust indicators and statistics
   - Enterprise-grade features
   - Security and compliance highlights

4. **How It Works** (`components/sections/HowItWorksSection.tsx`)
   - Step-by-step process
   - Interactive video demos
   - Visual workflow explanation

5. **Features** (`components/sections/FeaturesSection.tsx`)
   - Production-ready features grid
   - Categorized feature cards
   - Comprehensive capability showcase

6. **Testimonials** (`components/sections/TestimonialsSection.tsx`)
   - Customer testimonials
   - Social proof
   - Trust building

7. **Ready to Ship CTA** (`components/sections/ReadyToShipSection.tsx`)
   - Final call-to-action
   - Multiple action options
   - Conversion optimization

## 🚀 Key Features

### ✅ Modular Design
- Each section is a separate, self-contained component
- Easy to add, remove, or reorder sections
- No impact on other sections when updating

### ✅ Scalable Architecture
- Clean separation of concerns
- Reusable components and utilities
- Consistent design patterns

### ✅ TypeScript Support
- Full TypeScript implementation
- Type-safe props and interfaces
- Better developer experience

### ✅ Responsive Design
- Mobile-first approach
- Tailwind CSS for styling
- Consistent breakpoints

### ✅ Performance Optimized
- Lazy loading ready
- Optimized images and videos
- Minimal bundle size

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📝 Adding New Sections

To add a new section:

1. Create a new component in `components/sections/`
2. Follow the established patterns:
   - Use TypeScript interfaces for props
   - Implement responsive design
   - Add proper accessibility attributes
   - Include hover states and animations

3. Export from `components/sections/index.ts`
4. Import and add to `app/page.tsx`

Example:
```tsx
// components/sections/NewSection.tsx
"use client"

import { Button } from "../ui/button"

interface NewSectionProps {
  title?: string
  // Add other props as needed
}

export const NewSection = ({ title = "Default Title" }: NewSectionProps) => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
        {/* Section content */}
      </div>
    </section>
  )
}
```

## 🎨 Design System

### Colors
- Primary: Cyan (#28B8CD)
- Secondary: Blue (#3B82F6)
- Background: Black (#0A0A0A)
- Text: White, Gray-400

### Typography
- Headings: Bold, large scale
- Body: Regular weight, readable
- Consistent spacing and hierarchy

### Components
- Consistent border radius (rounded-2xl)
- Hover states and transitions
- Accessible focus states

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```
NEXT_PUBLIC_SITE_URL=https://nexlayer.com
```

### Tailwind Configuration
Custom colors and utilities are defined in `tailwind.config.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Create a feature branch
2. Follow the established patterns
3. Add TypeScript types
4. Test responsiveness
5. Submit a pull request

## 📄 License

This project is proprietary to Nexlayer.

---

Built with ❤️ by the Nexlayer team
