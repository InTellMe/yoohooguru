# YooHoo.Guru Brand Vision & Design System

> **Document Version:** 1.0  
> **Last Updated:** February 2026  
> **Author:** The Virtuoso (World-Class UI/UX Lead)

---

## Executive Summary

This document defines the visual identity, design system, and accessibility standards for YooHoo.Guru. Our goal is to create a **premium, "alive" experience** that positions YooHoo as a luxury skill-sharing platform while maintaining industry-leading accessibility standards, especially for our Hero Gurus community.

---

## 1. Theme Configuration

### 1.1 Updated Tailwind Configuration

The following configuration transforms the existing design system into a luxury-tier visual language.

```javascript
// apps/main/tailwind.config.js (UPDATED)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/shared/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════════
      // LUXURY COLOR PALETTE
      // Sophisticated dark theme with rich accent colors
      // ═══════════════════════════════════════════════════════════════
      colors: {
        // Primary Brand Colors - Deep & Rich
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',   // Primary Green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        
        // Luxury Dark Backgrounds
        surface: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        
        // Deep Indigo Accents
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        
        // Hunter Green (Secondary)
        hunter: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#355E3B',   // Core Hunter Green
          600: '#2C5530',
          700: '#1e3a20',
          800: '#14261a',
          900: '#0a1310',
        },
        
        // Gold Accents (Premium Indicators)
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        
        // Semantic Colors
        success: {
          light: '#86efac',
          DEFAULT: '#22c55e',
          dark: '#15803d',
        },
        warning: {
          light: '#fde68a',
          DEFAULT: '#f59e0b',
          dark: '#b45309',
        },
        error: {
          light: '#fecaca',
          DEFAULT: '#ef4444',
          dark: '#b91c1c',
        },
        info: {
          light: '#bfdbfe',
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
        },
        
        // Glassmorphism Overlays
        glass: {
          white: {
            5: 'rgba(255, 255, 255, 0.05)',
            10: 'rgba(255, 255, 255, 0.10)',
            15: 'rgba(255, 255, 255, 0.15)',
            20: 'rgba(255, 255, 255, 0.20)',
            30: 'rgba(255, 255, 255, 0.30)',
            40: 'rgba(255, 255, 255, 0.40)',
            60: 'rgba(255, 255, 255, 0.60)',
            80: 'rgba(255, 255, 255, 0.80)',
          },
          dark: {
            5: 'rgba(0, 0, 0, 0.05)',
            10: 'rgba(0, 0, 0, 0.10)',
            20: 'rgba(0, 0, 0, 0.20)',
            40: 'rgba(0, 0, 0, 0.40)',
            60: 'rgba(0, 0, 0, 0.60)',
            80: 'rgba(0, 0, 0, 0.80)',
          },
        },
      },

      // ═══════════════════════════════════════════════════════════════
      // LUXURY TYPOGRAPHY
      // Inter for body, Playfair Display for headlines
      // ═══════════════════════════════════════════════════════════════
      fontFamily: {
        // Primary Display Font - Elegant Serif
        display: ['Playfair Display', 'Georgia', 'serif'],
        // Body Font - Clean & Modern
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Accent Font - Geometric Sans
        accent: ['Montserrat', 'system-ui', 'sans-serif'],
        // Monospace for Code
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        // Legacy support
        orbitron: ['Orbitron', 'sans-serif'],
      },
      
      fontSize: {
        // Hero Typography Scale
        'hero-xs': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-md': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'hero-lg': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'hero-xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'hero-2xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.035em', fontWeight: '800' }],
        
        // Body Typography Scale
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'body-base': ['1rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-xl': ['1.25rem', { lineHeight: '1.5' }],
      },

      // ═══════════════════════════════════════════════════════════════
      // PREMIUM SHADOWS
      // Soft, layered shadows for depth
      // ═══════════════════════════════════════════════════════════════
      boxShadow: {
        // Elevation Shadows
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
        'elevation-2': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'elevation-4': '0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.04)',
        'elevation-5': '0 25px 50px rgba(0, 0, 0, 0.25)',
        
        // Glow Shadows
        'glow-brand': '0 0 20px rgba(34, 197, 94, 0.4)',
        'glow-brand-lg': '0 0 40px rgba(34, 197, 94, 0.5)',
        'glow-gold': '0 0 20px rgba(245, 158, 11, 0.4)',
        'glow-indigo': '0 0 20px rgba(99, 102, 241, 0.4)',
        'glow-white': '0 0 30px rgba(255, 255, 255, 0.1)',
        
        // Inner Shadows
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(34, 197, 94, 0.1)',
        
        // Card Shadows
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card-premium': '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
      },

      // ═══════════════════════════════════════════════════════════════
      // PREMIUM GRADIENTS
      // Rich, sophisticated color transitions
      // ═══════════════════════════════════════════════════════════════
      backgroundImage: {
        // Hero Gradients
        'gradient-luxury': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #355E3B 75%, #14532d 100%)',
        'gradient-premium': 'linear-gradient(135deg, #09090b 0%, #18181b 50%, #1e1b4b 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1e2749 0%, #2d3561 35%, #355E3B 65%, #2C5530 100%)',
        
        // Surface Gradients
        'gradient-surface': 'linear-gradient(180deg, #18181b 0%, #09090b 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        
        // Accent Gradients
        'gradient-brand': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        'gradient-indigo': 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
        'gradient-hunter': 'linear-gradient(135deg, #355E3B 0%, #2C5530 100%)',
        
        // Text Gradients
        'gradient-text-primary': 'linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)',
        'gradient-text-gold': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        'gradient-text-silver': 'linear-gradient(135deg, #f4f4f5 0%, #a1a1aa 100%)',
        
        // Radial Gradients
        'gradient-radial-brand': 'radial-gradient(circle at center, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
        'gradient-radial-indigo': 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        
        // Mesh Gradients (Premium Effect)
        'gradient-mesh': `
          radial-gradient(at 40% 20%, rgba(34, 197, 94, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(99, 102, 241, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(53, 94, 59, 0.1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(49, 46, 129, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(34, 197, 94, 0.1) 0px, transparent 50%)
        `,
      },

      // ═══════════════════════════════════════════════════════════════
      // ANIMATIONS (Framer Motion Compatible)
      // Fluid, premium motion design
      // ═══════════════════════════════════════════════════════════════
      animation: {
        // Entrance Animations
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        
        // Continuous Animations
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        
        // Micro-interactions
        'bounce-subtle': 'bounceSubtle 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.6)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceSubtle: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-3deg)' },
          '75%': { transform: 'rotate(3deg)' },
        },
      },

      // ═══════════════════════════════════════════════════════════════
      // SPACING & LAYOUT
      // Generous whitespace for premium feel
      // ═══════════════════════════════════════════════════════════════
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // ═══════════════════════════════════════════════════════════════
      // BLUR VALUES
      // For glassmorphism effects
      // ═══════════════════════════════════════════════════════════════
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },

      // ═══════════════════════════════════════════════════════════════
      // Z-INDEX SCALE
      // Consistent layering
      // ═══════════════════════════════════════════════════════════════
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'overlay': '1000',
        'modal': '1100',
        'toast': '1200',
        'tooltip': '1300',
      },
    },
  },
  plugins: [
    // Custom plugin for glassmorphism utilities
    function({ addUtilities }) {
      addUtilities({
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-strong': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(30px)',
          '-webkit-backdrop-filter': 'blur(30px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          'background': 'rgba(0, 0, 0, 0.3)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.05)',
        },
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'color': 'transparent',
        },
      });
    },
  ],
};
```

---

## 2. Layout Refactor Plan

### 2.1 New Layout Component Architecture

```
apps/main/components/layout/
├── Layout.tsx              # Main layout wrapper
├── Header/
│   ├── Header.tsx          # Main header component
│   ├── Navigation.tsx      # Desktop navigation
│   ├── MobileMenu.tsx      # Mobile drawer menu
│   └── UserMenu.tsx        # User account dropdown
├── Footer/
│   └── Footer.tsx          # Site footer
├── Sidebar/
│   └── Sidebar.tsx         # Optional sidebar
├── PageTransition.tsx      # Framer Motion page transitions
└── index.ts                # Barrel exports
```

### 2.2 Proposed Layout.tsx Implementation

```typescript
// apps/main/components/layout/Layout.tsx
import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import PageTransition from './PageTransition';

interface LayoutProps {
  children: ReactNode;
  variant?: 'default' | 'minimal' | 'dashboard' | 'landing';
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1], // Custom easing
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export default function Layout({
  children,
  variant = 'default',
  showHeader = true,
  showFooter = true,
  className = '',
}: LayoutProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-luxury">
      {/* Skip to Content (Accessibility) */}
      <a 
        href="#main-content" 
        className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-brand-500 focus:text-white"
      >
        Skip to main content
      </a>

      {/* Header */}
      {showHeader && <Header variant={variant} />}

      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={router.pathname}
          id="main-content"
          className={`flex-1 ${className}`}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          role="main"
          aria-label="Main content"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      {showFooter && <Footer />}

      {/* Global Decorative Elements */}
      <BackgroundEffects />
    </div>
  );
}

// Decorative background elements
function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-hunter-500/3 rounded-full blur-[120px]" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" 
           style={{ backgroundImage: 'url(/assets/noise.png)', backgroundRepeat: 'repeat' }} />
    </div>
  );
}
```

### 2.3 Framer Motion Page Transition Component

```typescript
// apps/main/components/layout/PageTransition.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

// Stagger children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.section variants={itemVariants}>
      {children}
    </motion.section>
  );
}

// Scroll-triggered animation hook
export function useScrollAnimation() {
  return {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };
}
```

### 2.4 Visual Hierarchy Guidelines

| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---------|------|--------|------|-------------|----------------|
| Hero H1 | Playfair Display | 800 | 6rem | 1 | -0.03em |
| Section H2 | Playfair Display | 700 | 3.75rem | 1.05 | -0.025em |
| Card H3 | Playfair Display | 600 | 1.5rem | 1.3 | -0.01em |
| Body | Inter | 400 | 1rem | 1.6 | 0 |
| Caption | Inter | 500 | 0.875rem | 1.5 | 0.01em |
| Button | Inter | 600 | 1rem | 1 | 0.02em |

---

## 3. Accessibility Checklist (WCAG AAA)

### 3.1 Hero Section Specific Improvements

The Hero Gurus section serves users with disabilities and **must** exceed standard accessibility requirements.

#### Critical Fixes Required

```typescript
// apps/main/pages/_apps/heroes/index.tsx - ACCESSIBILITY IMPROVEMENTS

export default function HeroGurusHome() {
  return (
    <OrbitronContainer gradient="primary">
      {/* 1. Enhanced Skip Navigation */}
      <a 
        href="#main-content" 
        className="skip-link"
        // WCAG 2.4.1: Skip repetitive content
      >
        Skip to main content
      </a>

      <Seo
        title="Hero Gurus | Accessible Learning | YooHoo.Guru"
        description="Free accessible learning for people with disabilities."
      />

      <Header />

      <main id="main-content" role="main" aria-labelledby="hero-heading">
        {/* Hero Section with ARIA landmarks */}
        <section 
          className="relative py-20 md:py-32 overflow-hidden"
          aria-label="Hero introduction"
        >
          {/* 2. Reduced Motion Support */}
          <motion.div
            className="absolute inset-0"
            initial={false}
            // Respect prefers-reduced-motion
            animate={prefersReducedMotion ? {} : { ... }}
          >
            {/* Background elements - marked as decorative */}
            <div 
              aria-hidden="true" 
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-red-500/10 rounded-full blur-3xl"
            />
          </motion.div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* 3. Proper Heading Hierarchy */}
            <h1 
              id="hero-heading"
              className="text-5xl md:text-6xl font-bold mb-6 text-white"
            >
              Hero Gurus Community
            </h1>
            
            {/* 4. Sufficient Color Contrast (7:1 for AAA) */}
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
              {/* Changed from text-gray-300 to text-gray-200 for better contrast */}
              Free accessible learning for people with disabilities.
            </p>

            {/* 5. Accessible Button Group */}
            <div 
              className="flex flex-wrap gap-4 justify-center"
              role="group"
              aria-label="Primary actions"
            >
              <Link href="/skills">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold text-lg rounded-lg"
                  // 6. Focus visible indicator
                  aria-label="Find accessible learning opportunities"
                >
                  Find Accessible Learning
                  <span className="sr-only">, opens skills page</span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Feature Cards with Proper Structure */}
        <section 
          className="max-w-7xl mx-auto px-4 py-16"
          aria-labelledby="features-heading"
        >
          <h2 id="features-heading" className="text-4xl font-bold text-center mb-12">
            Accessible Learning Features
          </h2>

          {/* 8. Card Grid with ARIA */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            role="list"
            aria-label="Feature list"
          >
            <article role="listitem" className="p-8 text-center">
              {/* 9. Emoji with ARIA Label */}
              <span role="img" aria-label="Wheelchair symbol" className="text-6xl mb-6 block">
                ♿
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                Adaptive Teaching
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {/* Improved contrast */}
                Our Hero Gurus are specially trained to accommodate various disabilities.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </OrbitronContainer>
  );
}
```

### 3.2 Complete Accessibility Checklist

#### Perceivable (WCAG 2.1)

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| **1.1.1** Non-text Content (AAA) | Required | All images have descriptive alt text; decorative images use `aria-hidden` |
| **1.3.1** Info and Relationships | Required | Use semantic HTML (`<header>`, `<main>`, `<nav>`, `<section>`) |
| **1.3.2** Meaningful Sequence | Required | DOM order matches visual order |
| **1.3.3** Sensory Characteristics | Required | Instructions don't rely solely on shape, color, size, or location |
| **1.4.3** Contrast (Enhanced AAA) | Required | **7:1** ratio for normal text, **4.5:1** for large text |
| **1.4.6** Contrast (Enhanced AAA) | Required | **7:1** minimum for all text |
| **1.4.10** Reflow | Required | Content reflows at 400% zoom without horizontal scrolling |
| **1.4.11** Non-text Contrast | Required | UI components have **3:1** contrast ratio |

#### Operable (WCAG 2.1)

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| **2.1.1** Keyboard | Required | All functionality accessible via keyboard |
| **2.1.2** No Keyboard Trap | Required | Users can navigate away from all components |
| **2.2.1** Timing Adjustable | Required | No time limits, or adjustable |
| **2.3.1** Three Flashes | Required | No content flashes more than 3 times/second |
| **2.4.1** Bypass Blocks | Required | Skip links implemented |
| **2.4.3** Focus Order | Required | Logical tab order |
| **2.4.6** Headings and Labels | Required | Descriptive headings |
| **2.4.7** Focus Visible (Enhanced) | Required | **Highly visible** focus indicators |
| **2.5.1** Pointer Gestures | Required | No multipoint or path-based gestures required |

#### Understandable (WCAG 2.1)

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| **3.1.1** Language of Page | Required | `<html lang="en">` |
| **3.1.2** Language of Parts | Required | `lang` attribute on foreign language content |
| **3.2.1** On Focus | Required | No context change on focus alone |
| **3.2.2** On Input | Required | No unexpected changes on input |
| **3.3.1** Error Identification | Required | Errors clearly identified in text |
| **3.3.2** Labels or Instructions | Required | All inputs have visible labels |

#### Robust (WCAG 2.1)

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| **4.1.1** Parsing | Required | Valid HTML |
| **4.1.2** Name, Role, Value | Required | ARIA attributes correct |

### 3.3 High-Contrast Toggle Implementation

```typescript
// apps/main/components/accessibility/HighContrastToggle.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HighContrastToggle() {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('highContrast');
    if (stored === 'true') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', String(newValue));
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  return (
    <button
      onClick={toggleHighContrast}
      className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-strong transition-all"
      aria-pressed={isHighContrast}
      aria-label={`High contrast mode: ${isHighContrast ? 'enabled' : 'disabled'}`}
    >
      <motion.div
        className={`w-5 h-5 rounded-full ${isHighContrast ? 'bg-white' : 'bg-gray-400'}`}
        animate={{ scale: isHighContrast ? 1.1 : 1 }}
      />
      <span className="text-sm font-medium">
        {isHighContrast ? 'High Contrast ON' : 'High Contrast'}
      </span>
    </button>
  );
}
```

### 3.4 High-Contrast CSS Override

```css
/* apps/main/styles/high-contrast.css */

.high-contrast {
  /* Override all colors for maximum contrast */
  --color-text: #ffffff;
  --color-text-muted: #e5e5e5;
  --color-background: #000000;
  --color-surface: #1a1a1a;
  --color-border: #ffffff;
  --color-primary: #00ff00;
  --color-error: #ff0000;
}

.high-contrast body {
  background: #000000 !important;
  color: #ffffff !important;
}

.high-contrast a {
  color: #00ffff !important;
  text-decoration: underline !important;
}

.high-contrast button {
  background: #ffffff !important;
  color: #000000 !important;
  border: 2px solid #ffffff !important;
}

.high-contrast button:hover,
.high-contrast button:focus {
  background: #ffff00 !important;
  color: #000000 !important;
}

.high-contrast *:focus {
  outline: 3px solid #ffff00 !important;
  outline-offset: 3px !important;
}

.high-contrast .glass,
.high-contrast .glass-effect {
  background: rgba(255, 255, 255, 0.15) !important;
  border: 2px solid #ffffff !important;
}

.high-contrast h1,
.high-contrast h2,
.high-contrast h3,
.high-contrast h4,
.high-contrast h5,
.high-contrast h6 {
  color: #ffffff !important;
}

.high-contrast p,
.high-contrast span,
.high-contrast li {
  color: #e5e5e5 !important;
}

/* Disable decorative animations */
.high-contrast * {
  animation: none !important;
  transition: none !important;
}

/* Ensure icons are visible */
.high-contrast svg {
  fill: currentColor;
  stroke: currentColor;
}

/* Form inputs */
.high-contrast input,
.high-contrast textarea,
.high-contrast select {
  background: #000000 !important;
  color: #ffffff !important;
  border: 2px solid #ffffff !important;
}

.high-contrast input::placeholder,
.high-contrast textarea::placeholder {
  color: #cccccc !important;
}

/* Cards */
.high-contrast [class*="Card"],
.high-contrast [class*="card"] {
  background: #1a1a1a !important;
  border: 2px solid #ffffff !important;
}
```

### 3.5 Screen Reader Optimization Checklist

- [ ] All interactive elements have accessible names
- [ ] Form inputs are associated with labels
- [ ] Error messages are linked to inputs via `aria-describedby`
- [ ] Live regions (`aria-live`) for dynamic content
- [ ] Landmark regions properly defined
- [ ] Tables have headers and captions
- [ ] Images have meaningful alt text (or empty alt for decorative)
- [ ] Custom widgets follow ARIA patterns
- [ ] Modal focus management implemented
- [ ] Page title changes on navigation

---

## 4. Implementation Priorities

### Phase 1: Foundation (Immediate)
1. Update `tailwind.config.js` with luxury palette
2. Create `Layout.tsx` with page transitions
3. Implement high-contrast toggle

### Phase 2: Typography & Visuals (Week 1)
1. Apply Playfair Display + Inter font pairing
2. Implement glassmorphism utilities
3. Add gradient backgrounds

### Phase 3: Motion Design (Week 2)
1. Integrate Framer Motion page transitions
2. Add scroll-triggered animations
3. Implement micro-interactions

### Phase 4: Accessibility Hardening (Week 3)
1. Audit all Hero Gurus pages for WCAG AAA
2. Fix contrast issues across site
3. Test with screen readers (NVDA, VoiceOver)

### Phase 5: Polish & Testing (Week 4)
1. Cross-browser testing
2. Performance optimization
3. User testing with accessibility focus groups

---

## 5. Design Tokens Reference

```json
{
  "spacing": {
    "section-y": "5rem",
    "section-y-lg": "8rem",
    "container-x": "1.5rem",
    "container-x-lg": "2rem"
  },
  "borderRadius": {
    "button": "0.75rem",
    "card": "1.5rem",
    "input": "0.5rem"
  },
  "transition": {
    "fast": "150ms ease",
    "base": "300ms ease",
    "slow": "500ms cubic-bezier(0.16, 1, 0.3, 1)"
  },
  "blur": {
    "glass": "20px",
    "glass-strong": "30px"
  }
}
```

---

*Document maintained by The Virtuoso. For design questions, contact design@yoohoo.guru*
