export interface Hub {
  id: string;
  label: string;
  subdomain: string;
  emoji: string;
}

export const HUBS: Hub[] = [
  { id: 'angel', label: 'Angel Services', subdomain: 'angel', emoji: '\u{1F47C}' },
  { id: 'art', label: 'Art & Design', subdomain: 'art', emoji: '\u{1F3A8}' },
  { id: 'auto', label: 'Automotive', subdomain: 'auto', emoji: '\u{1F697}' },
  { id: 'business', label: 'Business', subdomain: 'business', emoji: '\u{1F4CA}' },
  { id: 'coach', label: 'Coaching', subdomain: 'coach', emoji: '\u{1F9E2}' },
  { id: 'coding', label: 'Coding & Tech', subdomain: 'coding', emoji: '\u{1F4BB}' },
  { id: 'cooking', label: 'Cooking', subdomain: 'cooking', emoji: '\u{1F373}' },
  { id: 'crafts', label: 'Crafts', subdomain: 'crafts', emoji: '\u{1F9F6}' },
  { id: 'data', label: 'Data Science', subdomain: 'data', emoji: '\u{1F4C9}' },
  { id: 'design', label: 'Design', subdomain: 'design', emoji: '\u270F' },
  { id: 'finance', label: 'Finance', subdomain: 'finance', emoji: '\u{1F4B0}' },
  { id: 'fitness', label: 'Fitness', subdomain: 'fitness', emoji: '\u{1F4AA}' },
  { id: 'gardening', label: 'Gardening', subdomain: 'gardening', emoji: '\u{1F331}' },
  { id: 'heroes', label: 'Hero Gurus', subdomain: 'heroes', emoji: '\u{1F9B8}' },
  { id: 'history', label: 'History', subdomain: 'history', emoji: '\u{1F4DC}' },
  { id: 'home', label: 'Home Services', subdomain: 'home', emoji: '\u{1F3E0}' },
  { id: 'investing', label: 'Investing', subdomain: 'investing', emoji: '\u{1F4C8}' },
  { id: 'language', label: 'Languages', subdomain: 'language', emoji: '\u{1F5E3}' },
  { id: 'marketing', label: 'Marketing', subdomain: 'marketing', emoji: '\u{1F4E2}' },
  { id: 'math', label: 'Mathematics', subdomain: 'math', emoji: '\u2797' },
  { id: 'mechanical', label: 'Mechanical', subdomain: 'mechanical', emoji: '\u{1F527}' },
  { id: 'music', label: 'Music', subdomain: 'music', emoji: '\u{1F3B5}' },
  { id: 'photography', label: 'Photography', subdomain: 'photography', emoji: '\u{1F4F8}' },
  { id: 'sales', label: 'Sales', subdomain: 'sales', emoji: '\u{1F91D}' },
  { id: 'science', label: 'Science', subdomain: 'science', emoji: '\u{1F52C}' },
  { id: 'sports', label: 'Sports', subdomain: 'sports', emoji: '\u26BD' },
  { id: 'tech', label: 'Technology', subdomain: 'tech', emoji: '\u{1F916}' },
  { id: 'wellness', label: 'Wellness', subdomain: 'wellness', emoji: '\u{1F9D8}' },
  { id: 'writing', label: 'Writing', subdomain: 'writing', emoji: '\u270D' },
];

export const HUB_SUBDOMAINS = HUBS.map((hub) => hub.subdomain);

export const STANDARD_HUB_PAGES = ['about', 'contact', 'skills', 'teachers'];

export const HUBS_WITHOUT_STANDARD_PAGES = new Set<string>(['auto', 'mechanical']);

export const getHubUrl = (subdomain: string) => {
  const base = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'yoohoo.guru';
  return `https://${subdomain}.${base}`;
};
