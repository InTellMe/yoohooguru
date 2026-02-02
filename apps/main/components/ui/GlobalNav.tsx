'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

/**
 * Global Navigation Component for YooHoo.Guru
 * 
 * Allows users to switch between "Gurus" (subdomain hubs) without losing session state.
 * The session is preserved via shared cookies across *.yoohoo.guru domains.
 * 
 * Architecture:
 * - Uses subdomain-based routing (tech.yoohoo.guru, art.yoohoo.guru, etc.)
 * - Session cookies are shared across all subdomains via domain=.yoohoo.guru
 * - Maintains visual state of current subdomain
 */

// Core service subdomains
const CORE_SERVICES = [
  {
    id: 'coach',
    name: 'SkillShare',
    description: 'Learn from expert Gurus through 1-on-1 paid sessions',
    icon: '🏆',
    href: 'https://coach.yoohoo.guru',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    id: 'angel',
    name: "Angel's List",
    description: 'Find local service providers or post gigs',
    icon: '😇',
    href: 'https://angel.yoohoo.guru',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'heroes',
    name: 'Hero Gurus',
    description: 'Free accessible learning for people with disabilities',
    icon: '🦸',
    href: 'https://heroes.yoohoo.guru',
    color: 'from-red-500 to-red-600',
  },
];

// Content hub subdomains grouped by category
const CONTENT_HUBS = {
  technology: [
    { id: 'tech', name: 'Tech Guru', icon: '💻', skills: ['programming', 'web-dev', 'mobile-apps', 'data-science'] },
    { id: 'coding', name: 'Coding Guru', icon: '⌨️', skills: ['javascript', 'python', 'react', 'node-js'] },
    { id: 'data', name: 'Data Guru', icon: '📊', skills: ['data-science', 'analytics', 'machine-learning'] },
  ],
  creative: [
    { id: 'art', name: 'Art Guru', icon: '🎨', skills: ['drawing', 'painting', 'digital-art'] },
    { id: 'design', name: 'Design Guru', icon: '✨', skills: ['graphic-design', 'ui-ux', 'branding'] },
    { id: 'music', name: 'Music Guru', icon: '🎵', skills: ['guitar', 'piano', 'vocals', 'production'] },
    { id: 'photography', name: 'Photography Guru', icon: '📸', skills: ['portrait', 'landscape', 'editing'] },
    { id: 'writing', name: 'Writing Guru', icon: '✍️', skills: ['creative-writing', 'copywriting', 'blogging'] },
    { id: 'crafts', name: 'Crafts Guru', icon: '🛠️', skills: ['woodworking', 'knitting', 'pottery'] },
  ],
  professional: [
    { id: 'business', name: 'Business Guru', icon: '💼', skills: ['entrepreneurship', 'strategy', 'leadership'] },
    { id: 'marketing', name: 'Marketing Guru', icon: '📢', skills: ['digital-marketing', 'seo', 'social-media'] },
    { id: 'sales', name: 'Sales Guru', icon: '🤝', skills: ['sales-techniques', 'negotiation', 'closing'] },
    { id: 'finance', name: 'Finance Guru', icon: '💰', skills: ['investing', 'budgeting', 'tax-planning'] },
    { id: 'investing', name: 'Investing Guru', icon: '💹', skills: ['stock-trading', 'portfolio', 'crypto'] },
  ],
  education: [
    { id: 'language', name: 'Language Guru', icon: '🗣️', skills: ['english', 'spanish', 'french', 'mandarin'] },
    { id: 'math', name: 'Math Guru', icon: '🔢', skills: ['algebra', 'calculus', 'statistics'] },
    { id: 'science', name: 'Science Guru', icon: '🔬', skills: ['biology', 'chemistry', 'physics'] },
    { id: 'history', name: 'History Guru', icon: '📚', skills: ['world-history', 'archaeology', 'cultural-studies'] },
  ],
  lifestyle: [
    { id: 'fitness', name: 'Fitness Guru', icon: '💪', skills: ['personal-training', 'yoga', 'nutrition'] },
    { id: 'cooking', name: 'Chef Guru', icon: '👨‍🍳', skills: ['cooking', 'baking', 'meal-prep'] },
    { id: 'wellness', name: 'Wellness Guru', icon: '🧘', skills: ['meditation', 'mindfulness', 'stress-management'] },
    { id: 'gardening', name: 'Garden Guru', icon: '🌱', skills: ['vegetable-gardening', 'landscaping'] },
    { id: 'home', name: 'Home Guru', icon: '🏠', skills: ['organization', 'interior-design', 'maintenance'] },
  ],
  specialized: [
    { id: 'auto', name: 'Auto Guru', icon: '🚗', skills: ['auto-repair', 'maintenance', 'diagnostics'] },
    { id: 'mechanical', name: 'Mechanical Guru', icon: '⚙️', skills: ['mechanical-engineering', 'cad-design'] },
    { id: 'sports', name: 'Sports Guru', icon: '⚽', skills: ['athletic-training', 'sports-coaching'] },
  ],
};

// Flatten all hubs for easy access
const ALL_HUBS = Object.values(CONTENT_HUBS).flat();

interface GlobalNavProps {
  currentSubdomain?: string;
  showFullMenu?: boolean;
}

export default function GlobalNav({ currentSubdomain = 'www', showFullMenu = false }: GlobalNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [detectedSubdomain, setDetectedSubdomain] = useState(currentSubdomain);
  const { data: session } = useSession();

  // Detect current subdomain from URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname.includes('yoohoo.guru')) {
        const parts = hostname.split('.');
        const subdomain = parts.length >= 3 ? parts[0] : 'www';
        setDetectedSubdomain(subdomain);
      } else if (hostname === 'localhost' || hostname === '127.0.0.1') {
        // In development, use query param or default
        const params = new URLSearchParams(window.location.search);
        setDetectedSubdomain(params.get('subdomain') || 'www');
      }
    }
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.global-nav-container')) {
        setIsOpen(false);
        setActiveCategory(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Get subdomain URL with session preservation
  const getSubdomainUrl = useCallback((subdomainId: string, path: string = '/') => {
    // In production, use proper subdomain URLs
    if (typeof window !== 'undefined' && window.location.hostname.includes('yoohoo.guru')) {
      return `https://${subdomainId}.yoohoo.guru${path}`;
    }
    // In development, use query params for testing
    return `${path}?subdomain=${subdomainId}`;
  }, []);

  // Find current hub info
  const currentHub = ALL_HUBS.find(hub => hub.id === detectedSubdomain);
  const currentService = CORE_SERVICES.find(service => service.id === detectedSubdomain);

  return (
    <div className="global-nav-container relative">
      {/* Guru Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg glass-button hover:bg-white-20 transition-all duration-300"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Switch between Gurus"
      >
        <span className="text-lg">
          {currentHub?.icon || currentService?.icon || '🌐'}
        </span>
        <span className="hidden sm:inline text-sm font-medium text-white">
          {currentHub?.name || currentService?.name || 'YooHoo.Guru'}
        </span>
        <svg
          className={`w-4 h-4 text-white-60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[320px] sm:w-[480px] md:w-[640px] max-h-[80vh] overflow-y-auto glass-effect-strong rounded-2xl border border-white-20 shadow-2xl z-50 animate-fade-in">
          {/* Header */}
          <div className="p-4 border-b border-white-10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-display font-bold text-white">Switch Guru</h3>
                <p className="text-sm text-white-60">Choose a skill hub to explore</p>
              </div>
              {session && (
                <div className="flex items-center space-x-2 text-xs text-emerald-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span>Session active</span>
                </div>
              )}
            </div>
          </div>

          {/* Core Services */}
          <div className="p-4 border-b border-white-10">
            <h4 className="text-xs font-semibold text-white-40 uppercase tracking-wider mb-3">
              Core Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {CORE_SERVICES.map((service) => (
                <a
                  key={service.id}
                  href={service.href}
                  className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                    detectedSubdomain === service.id
                      ? 'bg-white-20 ring-2 ring-emerald-500'
                      : 'hover:bg-white-10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-xl shadow-lg`}>
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-white truncate">{service.name}</div>
                    <div className="text-xs text-white-60 truncate">{service.description}</div>
                  </div>
                  {detectedSubdomain === service.id && (
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Content Hubs by Category */}
          <div className="p-4">
            <h4 className="text-xs font-semibold text-white-40 uppercase tracking-wider mb-3">
              Content Hubs
            </h4>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.keys(CONTENT_HUBS).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white-10 text-white-80 hover:bg-white-20'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Hub Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {(activeCategory 
                ? CONTENT_HUBS[activeCategory as keyof typeof CONTENT_HUBS] 
                : ALL_HUBS
              ).map((hub) => (
                <a
                  key={hub.id}
                  href={getSubdomainUrl(hub.id)}
                  className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 text-center ${
                    detectedSubdomain === hub.id
                      ? 'bg-white-20 ring-2 ring-emerald-500'
                      : 'hover:bg-white-10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-2xl mb-1">{hub.icon}</span>
                  <span className="text-xs font-medium text-white truncate w-full">
                    {hub.name.replace(' Guru', '')}
                  </span>
                  {detectedSubdomain === hub.id && (
                    <span className="mt-1 w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white-10 bg-black/20">
            <div className="flex items-center justify-between">
              <a
                href="https://www.yoohoo.guru/hubs"
                className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                View all hubs →
              </a>
              <a
                href="https://www.yoohoo.guru"
                className="text-sm text-white-60 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Back to main site
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Compact version for mobile or secondary navigation
 */
export function GlobalNavCompact({ currentSubdomain = 'www' }: { currentSubdomain?: string }) {
  const currentHub = ALL_HUBS.find(hub => hub.id === currentSubdomain);
  const currentService = CORE_SERVICES.find(service => service.id === currentSubdomain);

  return (
    <div className="flex items-center space-x-2">
      <Link
        href="https://www.yoohoo.guru"
        className="flex items-center space-x-2 text-white hover:text-emerald-400 transition-colors"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
          YG
        </div>
      </Link>
      {(currentHub || currentService) && (
        <>
          <span className="text-white-40">/</span>
          <span className="text-lg">{currentHub?.icon || currentService?.icon}</span>
          <span className="text-sm font-medium text-white">
            {currentHub?.name || currentService?.name}
          </span>
        </>
      )}
    </div>
  );
}

/**
 * Horizontal bar version for desktop headers
 */
export function GlobalNavBar({ currentSubdomain = 'www' }: { currentSubdomain?: string }) {
  return (
    <div className="hidden lg:flex items-center space-x-1 px-2 py-1 rounded-lg bg-white-5">
      {/* Main */}
      <a
        href="https://www.yoohoo.guru"
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
          currentSubdomain === 'www'
            ? 'bg-emerald-500 text-white'
            : 'text-white-80 hover:bg-white-10'
        }`}
      >
        Home
      </a>
      
      {/* Core Services */}
      {CORE_SERVICES.map((service) => (
        <a
          key={service.id}
          href={service.href}
          className={`flex items-center space-x-1 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            currentSubdomain === service.id
              ? 'bg-emerald-500 text-white'
              : 'text-white-80 hover:bg-white-10'
          }`}
        >
          <span>{service.icon}</span>
          <span>{service.name}</span>
        </a>
      ))}

      {/* Dropdown for hubs */}
      <GlobalNav currentSubdomain={currentSubdomain} />
    </div>
  );
}

// Export hub data for use in other components
export { CORE_SERVICES, CONTENT_HUBS, ALL_HUBS };
