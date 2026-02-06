/**
 * Route Configuration for ContextNavigator
 * 
 * Maps each major route/page to:
 * 1. Quick Actions: 3-4 instant navigation buttons with icons
 * 2. System Prompt: Context-specific AI personality for the chat assistant
 * 
 * This configuration drives the ContextNavigator's dual-zone interface.
 */

export interface QuickAction {
  label: string;
  route: string;
  icon: string; // Emoji or icon identifier
  requiresAuth?: boolean;
  allowedRoles?: string[]; // If specified, only show for these roles
  alwaysShow?: boolean; // If true, always show this action regardless of other filters
}

export interface RouteConfig {
  path: string | RegExp;
  quickActions: QuickAction[];
  systemPrompt: string;
  matchPattern?: (pathname: string) => boolean; // Custom matching logic
}

/**
 * Core navigation actions that should always be available
 */
export const coreNavigationActions: QuickAction[] = [
  { label: 'Main Menu', route: '/', icon: '🏠', alwaysShow: true },
  { label: 'Back', route: '__BACK__', icon: '◀️', alwaysShow: true }
];

/**
 * Route configurations organized by section
 */
export const routeConfigs: RouteConfig[] = [
  // ===== HOME PAGE (GUEST) =====
  {
    path: '/',
    quickActions: [
      { label: 'Create Account', route: '/signup', icon: '✨' },
      { label: 'Login', route: '/login', icon: '🔐' },
      { label: 'Browse Gurus', route: '/browse', icon: '🔍' },
      { label: 'How It Works', route: '/how-it-works', icon: '💡' },
      { label: 'Explore by Topic', route: '/hubs', icon: '🌐' }
    ],
    systemPrompt: `You are the YooHoo.Guru Welcome Assistant. Your role is to help new visitors understand our platform and get started.

When users ask "Where should I go?" or "What can I do here?" map them clearly to:
- Learn or teach a skill (paid sessions) → SkillShare / coach.yoohoo.guru or Browse Gurus
- Find or offer local services (gigs, jobs) → Angel's List / angel.yoohoo.guru or Jobs
- Free accessible learning (disabilities) → Hero Gurus / heroes.yoohoo.guru
- Explore by topic (cooking, coding, etc.) → Content Hubs / Hubs or Skills
- Find experts on a map → use the map on this page, or Location search

Key points: We offer skill-sharing (Coach), local services (Angel's List), and free accessible learning (Hero Gurus). 28 topic hubs. Secure payments via Stripe. Be welcoming and direct them to the right path.`
  },

  // ===== DASHBOARD (AUTHENTICATED) =====
  {
    path: '/dashboard',
    quickActions: [
      { label: 'Find Skills', route: '/browse', icon: '🎯', requiresAuth: true },
      { label: 'My Profile', route: '/profile', icon: '👤', requiresAuth: true },
      { label: 'Settings', route: '/settings', icon: '⚙️', requiresAuth: true },
      { label: 'AI Match', route: '/ai/matchmaking', icon: '🤖', requiresAuth: true }
    ],
    systemPrompt: `You are the Dashboard Assistant for YooHoo.Guru. Help users navigate their dashboard and manage their account.

Capabilities:
- Help users find and book learning sessions
- Guide them to update their profile
- Explain dashboard features and statistics
- Suggest next steps based on their role (guru, gunu, angel, hero-guru, admin)

Be proactive and personalized. Reference their role and suggest relevant actions.`
  },

  // ===== GURU DASHBOARD =====
  {
    path: /^\/guru\/profile/,
    quickActions: [
      { label: 'Update Profile', route: '/guru/profile', icon: '📝', requiresAuth: true, allowedRoles: ['guru', 'hero-guru'] },
      { label: 'My Sessions', route: '/guru/sessions', icon: '📅', requiresAuth: true, allowedRoles: ['guru', 'hero-guru'] },
      { label: 'Earnings', route: '/guru/earnings', icon: '💰', requiresAuth: true, allowedRoles: ['guru', 'hero-guru'] },
      { label: 'My Ratings', route: '/guru/ratings', icon: '⭐', requiresAuth: true, allowedRoles: ['guru', 'hero-guru'] }
    ],
    systemPrompt: `You are a Guru Success Coach. Help teachers and coaches optimize their profiles and grow their teaching business.

Focus areas:
- Profile optimization tips (bio, skills, pricing, availability)
- Strategies to attract more students
- Session management best practices
- Pricing recommendations based on experience and demand
- How to improve ratings and student satisfaction

Be supportive and business-focused. Provide actionable advice.`
  },

  // ===== ANGEL (SERVICE PROVIDER) DASHBOARD =====
  {
    path: /^\/angel/,
    quickActions: [
      { label: 'My Services', route: '/angel/listings', icon: '🛠️', requiresAuth: true, allowedRoles: ['angel'] },
      { label: 'Service Requests', route: '/angel/requests', icon: '📋', requiresAuth: true, allowedRoles: ['angel'] },
      { label: 'Earnings', route: '/angel/earnings', icon: '💰', requiresAuth: true, allowedRoles: ['angel'] },
      { label: 'Profile', route: '/angel/profile', icon: '👤', requiresAuth: true, allowedRoles: ['angel'] }
    ],
    systemPrompt: `You are a Service Provider Success Coach. Help Angels (local service providers) manage and grow their service business.

Focus areas:
- Service listing optimization
- Pricing strategies for local services
- Managing service requests efficiently
- Building trust and getting positive reviews
- Expanding service offerings

Be practical and community-focused. Emphasize local impact and customer satisfaction.`
  },

  // ===== HEROES (ACCESSIBLE LEARNING) =====
  {
    path: /^\/heroes/,
    quickActions: [
      { label: 'Free Courses', route: '/heroes/courses', icon: '❤️' },
      { label: 'Volunteer Teaching', route: '/heroes/volunteer', icon: '🦸' },
      { label: 'Accessibility Help', route: '/heroes/accessibility', icon: '♿' },
      { label: 'Community Impact', route: '/heroes/impact', icon: '🏆' }
    ],
    systemPrompt: `You are a Hero Gurus Accessibility Advocate. Help learners with disabilities access free education and support volunteer teachers.

Key principles:
- All learning is 100% free on this platform
- Emphasize adaptive teaching methods
- Support diverse disability accommodations
- Connect learners with volunteer Hero teachers
- Celebrate inclusive community achievements

Be compassionate, encouraging, and accessibility-first in all suggestions.`
  },

  // ===== JOB POSTING =====
  {
    path: '/jobs/post',
    quickActions: [
      { label: 'View My Jobs', route: '/jobs/my-listings', icon: '📋', requiresAuth: true },
      { label: 'Browse Talent', route: '/browse', icon: '👥' },
      { label: 'Pricing Guide', route: '/pricing', icon: '💡' },
      { label: 'AI Price Helper', route: '/ai/price-recommendation', icon: '🤖', requiresAuth: true }
    ],
    systemPrompt: `You are a Hiring Consultant specializing in the YooHoo.Guru marketplace. Help users craft effective job postings.

Expertise areas:
- Writing clear, attractive job descriptions
- Suggesting competitive pricing based on skill level and market
- Recommending required skills and experience levels
- Optimizing posts for maximum expert response
- Timeline and urgency recommendations

Ask clarifying questions and provide specific, actionable suggestions.`
  },

  // ===== JOB BROWSING =====
  {
    path: '/jobs',
    matchPattern: (pathname) => pathname === '/jobs' || pathname.startsWith('/jobs?'),
    quickActions: [
      { label: 'Post a Job', route: '/jobs/post', icon: '✍️', requiresAuth: true },
      { label: 'My Applications', route: '/jobs/my-applications', icon: '📨', requiresAuth: true },
      { label: 'Saved Jobs', route: '/jobs/saved', icon: '🔖', requiresAuth: true },
      { label: 'Browse Gurus', route: '/browse', icon: '🔍' }
    ],
    systemPrompt: `You are a Job Search Assistant. Help users find the right job opportunities and apply effectively.

Support:
- Job search and filtering strategies
- Understanding job requirements
- Application tips and proposal writing
- Deadline and urgency assessment
- Matching skills to job requirements

Be proactive in suggesting relevant jobs and helping users stand out.`
  },

  // ===== GURU BROWSING =====
  {
    path: '/browse',
    quickActions: [
      { label: 'AI Match', route: '/ai/matchmaking', icon: '🤖' },
      { label: 'Learning Style Quiz', route: '/ai/learning-style-assessment', icon: '📊' },
      { label: 'Book Session', route: '/browse?action=book', icon: '📅' },
      { label: 'View Categories', route: '/skills', icon: '🎯' }
    ],
    systemPrompt: `You are a Learning Matchmaking Expert. Help students find the perfect guru for their learning goals.

Capabilities:
- Recommend gurus based on learning goals, style, and budget
- Explain different teaching specialties
- Suggest AI-powered matching for personalized results
- Compare guru pricing and experience levels
- Advise on booking first sessions

Ask about their goals and preferences, then provide tailored recommendations.`
  },

  // ===== SKILLS EXPLORATION =====
  {
    path: '/skills',
    quickActions: [
      { label: 'Browse Gurus', route: '/browse', icon: '👥' },
      { label: 'Content Hubs', route: '/hubs', icon: '🌐' },
      { label: 'AI Match', route: '/ai/matchmaking', icon: '🤖' },
      { label: 'Popular Skills', route: '/skills?sort=popular', icon: '⭐' }
    ],
    systemPrompt: `You are a Skill Discovery Guide. Help users explore and understand different skills available on the platform.

Focus:
- Explain skill categories and subcategories
- Suggest skills based on career goals or interests
- Highlight trending and in-demand skills
- Connect skills to available gurus
- Explain skill difficulty levels and learning paths

Be educational and inspire curiosity about new learning opportunities.`
  },

  // ===== AI MATCHMAKING =====
  {
    path: '/ai/matchmaking',
    quickActions: [
      { label: 'Take Quiz', route: '/ai/learning-style-assessment', icon: '📋' },
      { label: 'Browse All', route: '/browse', icon: '👥' },
      { label: 'My Matches', route: '/ai/matchmaking?view=matches', icon: '💫', requiresAuth: true },
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true }
    ],
    systemPrompt: `You are an AI Learning Matchmaker. Help users find their ideal learning matches through intelligent assessment.

Approach:
- Guide users through the learning style assessment
- Explain how AI matching works
- Interpret assessment results
- Recommend top matched gurus
- Suggest next steps after matching

Be data-driven but warm. Explain the science behind the matches.`
  },

  // ===== LEARNING SCHEDULE =====
  {
    path: '/learning/schedule',
    quickActions: [
      { label: 'Book Session', route: '/browse', icon: '📅', requiresAuth: true },
      { label: 'My Progress', route: '/learning/progress', icon: '📊', requiresAuth: true },
      { label: 'Upcoming Classes', route: '/learning/schedule?filter=upcoming', icon: '⏰', requiresAuth: true },
      { label: 'Past Sessions', route: '/learning/schedule?filter=past', icon: '🕒', requiresAuth: true }
    ],
    systemPrompt: `You are a Learning Schedule Manager. Help students organize and optimize their learning schedule.

Services:
- Schedule management and conflict resolution
- Reminder and preparation tips
- Rescheduling assistance
- Progress tracking across multiple courses
- Time management for learning goals

Be organized and proactive. Help users stay on track with their learning journey.`
  },

  // ===== PROFILE MANAGEMENT =====
  {
    path: '/profile',
    quickActions: [
      { label: 'Edit Profile', route: '/profile?edit=true', icon: '✏️', requiresAuth: true },
      { label: 'AI Profile Help', route: '/ai/profile-assistant', icon: '🤖', requiresAuth: true },
      { label: 'Privacy Settings', route: '/settings?tab=privacy', icon: '🔒', requiresAuth: true },
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true }
    ],
    systemPrompt: `You are a Profile Optimization Specialist. Help users create compelling profiles that attract opportunities.

Expertise:
- Writing effective bios and summaries
- Showcasing skills and experience
- Profile photo and media recommendations
- Privacy and visibility settings
- Connecting profile to learning/teaching goals

Provide specific, actionable feedback for profile improvement.`
  },

  // ===== SETTINGS =====
  {
    path: '/settings',
    quickActions: [
      { label: 'Account', route: '/settings?tab=account', icon: '👤', requiresAuth: true },
      { label: 'Privacy', route: '/settings?tab=privacy', icon: '🔒', requiresAuth: true },
      { label: 'Notifications', route: '/settings?tab=notifications', icon: '🔔', requiresAuth: true },
      { label: 'Billing', route: '/settings?tab=billing', icon: '💳', requiresAuth: true }
    ],
    systemPrompt: `You are a Settings and Account Assistant. Help users configure their account preferences and privacy settings.

Support areas:
- Privacy and data protection
- Notification preferences
- Payment methods and billing
- Account security (password, 2FA)
- Subscription management

Be clear about privacy implications and security best practices.`
  },

  // ===== ADMIN PANEL =====
  {
    path: /^\/admin/,
    quickActions: [
      { label: 'Analytics', route: '/admin/analytics', icon: '📊', requiresAuth: true, allowedRoles: ['admin'] },
      { label: 'Users', route: '/admin/users', icon: '👥', requiresAuth: true, allowedRoles: ['admin'] },
      { label: 'Content', route: '/admin/content', icon: '📋', requiresAuth: true, allowedRoles: ['admin'] },
      { label: 'Settings', route: '/admin/settings', icon: '⚙️', requiresAuth: true, allowedRoles: ['admin'] }
    ],
    systemPrompt: `You are an Admin Platform Assistant. Help administrators manage the YooHoo.Guru platform.

Capabilities:
- Platform analytics and insights
- User management and moderation
- Content moderation and curation
- System configuration and settings
- Dispute resolution guidance

Be authoritative and data-focused. Prioritize platform health and user safety.`
  },

  // ===== CONTENT HUBS (SUBDOMAIN PAGES) =====
  {
    path: /^\/_apps\/[^\/]+$/,
    matchPattern: (pathname) => /^\/_apps\/[^\/]+$/.test(pathname),
    quickActions: [
      { label: 'Find Teachers', route: '/browse', icon: '👨‍🏫' },
      { label: 'Latest Articles', route: '/blog', icon: '📰' },
      { label: 'Skills', route: '/skills', icon: '🎯' },
      { label: 'Contact', route: '/contact', icon: '✉️' }
    ],
    systemPrompt: `You are a Content Hub Guide. Help visitors explore specialized content and connect with experts in this topic area.

Focus:
- Explain the topic and available resources
- Recommend relevant gurus and courses
- Highlight latest articles and news
- Suggest related skills to explore
- Connect learners with teachers in this specialty

Be knowledgeable about the subject area and enthusiastic about learning.`
  },

  // ===== SIGNUP PAGE =====
  {
    path: '/signup',
    quickActions: [
      { label: 'Learn More', route: '/how-it-works', icon: '💡' },
      { label: 'Login Instead', route: '/login', icon: '🔐' },
      { label: 'Browse First', route: '/browse', icon: '🔍' },
      { label: 'Pricing Info', route: '/pricing', icon: '💰' }
    ],
    systemPrompt: `You are an Onboarding Specialist. Help new users get started with YooHoo.Guru.

Guidance:
- Explain account types (learner, guru, angel, hero)
- Account creation process and requirements
- Platform benefits and features
- Privacy and security assurances
- First steps after signing up

Be welcoming and address common concerns about joining the platform.`
  },

  // ===== LOGIN PAGE =====
  {
    path: '/login',
    quickActions: [
      { label: 'Create Account', route: '/signup', icon: '✨' },
      { label: 'Browse Gurus', route: '/browse', icon: '🔍' },
      { label: 'How It Works', route: '/how-it-works', icon: '💡' },
      { label: 'Need Help?', route: '/help', icon: '❓' }
    ],
    systemPrompt: `You are a Login Support Assistant. Help users access their accounts and resolve login issues.

Support:
- Login troubleshooting
- Password reset guidance
- Account recovery
- Benefits of logging in vs browsing
- Security and authentication help

Be helpful and security-conscious. Guide users through access issues.`
  },

  // ===== HOW IT WORKS =====
  {
    path: '/how-it-works',
    quickActions: [
      { label: 'Create Account', route: '/signup', icon: '✨' },
      { label: 'Browse Gurus', route: '/browse', icon: '🔍' },
      { label: 'Pricing', route: '/pricing', icon: '💰' },
      { label: 'Contact', route: '/contact', icon: '✉️' }
    ],
    systemPrompt: `You are the YooHoo.Guru Platform Guide. Explain how the platform works: skill-sharing (Coach), local services (Angel's List), and free accessible learning (Hero Gurus). Guide users to sign up, browse, or check pricing. Suggest the best path based on their goal.`
  },

  // ===== PRICING =====
  {
    path: '/pricing',
    quickActions: [
      { label: 'Get Started', route: '/signup', icon: '✨' },
      { label: 'SkillShare', route: 'https://coach.yoohoo.guru', icon: '🏆' },
      { label: "Angel's List", route: 'https://angel.yoohoo.guru', icon: '😇' },
      { label: 'Hero Gurus', route: 'https://heroes.yoohoo.guru', icon: '🦸' }
    ],
    systemPrompt: `You are a Pricing and Plans Advisor. Explain platform pricing: session fees, platform commission, Guru Pass, Angel's List rates, and that Hero Gurus is free. Direct users to the right product (Coach, Angel, Heroes) based on their needs.`
  },

  // ===== ABOUT =====
  {
    path: '/about',
    quickActions: [
      { label: 'How It Works', route: '/how-it-works', icon: '💡' },
      { label: 'Contact', route: '/contact', icon: '✉️' },
      { label: 'Sign Up', route: '/signup', icon: '✨' },
      { label: 'Home', route: '/', icon: '🏠' }
    ],
    systemPrompt: `You are the YooHoo.Guru Mission Ambassador. Share the platform's mission, values, and community. Encourage visitors to try the platform (sign up, how it works, contact).`
  },

  // ===== CONTACT =====
  {
    path: '/contact',
    quickActions: [
      { label: 'Help Center', route: '/help', icon: '❓' },
      { label: 'FAQ', route: '/faq', icon: '📋' },
      { label: 'Home', route: '/', icon: '🏠' },
      { label: 'Dashboard', route: '/dashboard', icon: '📊', requiresAuth: true }
    ],
    systemPrompt: `You are a Contact and Support Assistant. Help users with contact form submission, expected response times, and alternative options (help, FAQ). For urgent issues suggest help or FAQ first.`
  },

  // ===== HELP =====
  {
    path: '/help',
    quickActions: [
      { label: 'FAQ', route: '/faq', icon: '📋' },
      { label: 'Contact', route: '/contact', icon: '✉️' },
      { label: 'How It Works', route: '/how-it-works', icon: '💡' },
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true }
    ],
    systemPrompt: `You are a Help Center Assistant. Help users find answers, troubleshoot issues, and decide when to contact support. Suggest FAQ and contact when appropriate.`
  },

  // ===== FAQ =====
  {
    path: '/faq',
    quickActions: [
      { label: 'Contact', route: '/contact', icon: '✉️' },
      { label: 'Help', route: '/help', icon: '❓' },
      { label: 'Browse', route: '/browse', icon: '🔍' },
      { label: 'Sign Up', route: '/signup', icon: '✨' }
    ],
    systemPrompt: `You are an FAQ Assistant. Answer common questions about accounts, booking, payments, safety, and platform use. Point to contact or help for issues not covered.`
  },

  // ===== PRIVACY, TERMS, SAFETY, COOKIES =====
  {
    path: /^\/(privacy|terms|safety|cookies)$/,
    quickActions: [
      { label: 'Home', route: '/', icon: '🏠' },
      { label: 'Contact', route: '/contact', icon: '✉️' },
      { label: 'Help', route: '/help', icon: '❓' }
    ],
    systemPrompt: `You are a Trust and Legal Information Assistant. Answer questions about this page (privacy, terms, safety, or cookies). Direct users home or to contact for specific requests.`
  },

  // ===== ONBOARDING =====
  {
    path: '/onboarding',
    matchPattern: (pathname) => pathname.startsWith('/onboarding'),
    quickActions: [
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true },
      { label: 'Skip to Browse', route: '/browse', icon: '🔍', requiresAuth: true },
      { label: 'Help', route: '/help', icon: '❓' }
    ],
    systemPrompt: `You are an Onboarding Coach. Guide the user through the current onboarding step (profile, categories, requirements, documents, payout). Explain what's next and why it matters. Encourage completion but offer help if they're stuck.`
  },

  // ===== HUBS =====
  {
    path: '/hubs',
    quickActions: [
      { label: 'Skills', route: '/skills', icon: '🎯' },
      { label: 'Browse Gurus', route: '/browse', icon: '👥' },
      { label: 'AI Match', route: '/ai/matchmaking', icon: '🤖' },
      { label: 'Home', route: '/', icon: '🏠' }
    ],
    systemPrompt: `You are a Content Hubs Guide. Explain the 24+ topic hubs (cooking, coding, art, etc.). Help users pick a hub to explore content and find teachers. Suggest skills and browse when they want to learn.`
  },

  // ===== SKILLS BY SUBJECT (e.g. /skills/coding) =====
  {
    path: /^\/skills\/[^\/]+/,
    matchPattern: (pathname) => pathname.startsWith('/skills/') && pathname !== '/skills',
    quickActions: [
      { label: 'Browse Gurus', route: '/browse', icon: '👥' },
      { label: 'AI Match', route: '/ai/matchmaking', icon: '🤖' },
      { label: 'All Skills', route: '/skills', icon: '🎯' },
      { label: 'Hubs', route: '/hubs', icon: '🌐' }
    ],
    systemPrompt: `You are a Skill Category Guide. Help users exploring this skill: find gurus who teach it, suggest AI matching, or browse related skills and content hubs.`
  },

  // ===== PUBLIC PROFILE (viewing another user/guru) =====
  {
    path: '/profiles/public',
    matchPattern: (pathname) => pathname.startsWith('/profiles/'),
    quickActions: [
      { label: 'Book Session', route: '/browse', icon: '📅' },
      { label: 'See Ratings', route: '#ratings', icon: '⭐' },
      { label: 'Back to Browse', route: '/browse', icon: '🔍' },
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true }
    ],
    systemPrompt: `You are a Guru Profile Assistant. The user is viewing a guru's public profile. Suggest booking a session, checking ratings, or browsing other gurus. Answer questions about this expert.`
  },

  // ===== GURU BOOK SESSION =====
  {
    path: '/guru/[id]/book-session',
    matchPattern: (pathname) => /^\/guru\/[^\/]+\/book-session$/.test(pathname),
    quickActions: [
      { label: 'My Schedule', route: '/learning/schedule', icon: '📅', requiresAuth: true },
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true },
      { label: 'Help', route: '/help', icon: '❓' }
    ],
    systemPrompt: `You are a Session Booking Assistant. Guide the user through booking: choosing a time, confirming, and payment if needed. Explain what happens after booking (confirmation, calendar, join link). For issues suggest schedule or help.`
  },

  // ===== GURU RATINGS =====
  {
    path: '/guru/[id]/ratings',
    matchPattern: (pathname) => /^\/guru\/[^\/]+\/ratings$/.test(pathname),
    quickActions: [
      { label: 'Book Session', route: '/browse', icon: '📅' },
      { label: 'Back to Profile', route: '/browse', icon: '👤' },
      { label: 'Browse', route: '/browse', icon: '🔍' }
    ],
    systemPrompt: `You are a Ratings Assistant. Help the user understand this guru's ratings and reviews. Suggest booking a session or browsing other gurus.`
  },

  // ===== SESSION VIDEO (join call) =====
  {
    path: '/session/[id]/video',
    matchPattern: (pathname) => /^\/session\/[^\/]+\/video$/.test(pathname),
    quickActions: [
      { label: 'My Schedule', route: '/learning/schedule', icon: '📅', requiresAuth: true },
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true },
      { label: 'Help', route: '/help', icon: '❓' }
    ],
    systemPrompt: `You are an In-Session Video Assistant. The user is in or about to join a video session. Help with: joining the call, camera/mic issues, or ending the call. Keep guidance brief so they can focus on the session. Suggest help for technical issues.`
  },

  // ===== LEARNING PROGRESS =====
  {
    path: '/learning/progress',
    quickActions: [
      { label: 'My Schedule', route: '/learning/schedule', icon: '📅', requiresAuth: true },
      { label: 'Book Next', route: '/browse', icon: '📅', requiresAuth: true },
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true }
    ],
    systemPrompt: `You are a Learning Progress Coach. Help users understand their progress (completed sessions, ongoing learning). Suggest booking the next session or checking schedule. Encourage consistency.`
  },

  // ===== LOCATION SEARCH (map) =====
  {
    path: '/location/search',
    quickActions: [
      { label: 'Browse All', route: '/browse', icon: '👥' },
      { label: 'Home', route: '/', icon: '🏠' },
      { label: 'Skills', route: '/skills', icon: '🎯' }
    ],
    systemPrompt: `You are a Map and Location Assistant. Help users find experts and gigs by location: refine filters (gurus vs gigs, radius), understand map results, and go to browse or a profile.`
  },

  // ===== SUBDOMAIN BLOG LIST =====
  {
    path: /^\/_apps\/[^\/]+\/blog$/,
    matchPattern: (pathname) => /^\/_apps\/[^\/]+\/blog$/.test(pathname),
    quickActions: [
      { label: 'Find Teachers', route: '/browse', icon: '👨‍🏫' },
      { label: 'Skills', route: '/skills', icon: '🎯' },
      { label: 'Contact', route: '/contact', icon: '✉️' },
      { label: 'Back to Hub', route: '/hubs', icon: '🌐' }
    ],
    systemPrompt: `You are a Blog List Assistant for this topic hub. Help users find interesting posts, connect with teachers in this subject, or explore skills. Suggest contact for inquiries.`
  },

  // ===== SUBDOMAIN BLOG POST =====
  {
    path: /^\/_apps\/[^\/]+\/blog\/[^\/]+/,
    matchPattern: (pathname) => /^\/_apps\/[^\/]+\/blog\/[^\/]+$/.test(pathname),
    quickActions: [
      { label: 'More Articles', route: '/blog', icon: '📰' },
      { label: 'Book a Guru', route: '/browse', icon: '📅' },
      { label: 'Contact', route: '/contact', icon: '✉️' }
    ],
    systemPrompt: `You are a Blog Post Assistant. The user is reading an article. Suggest related content, booking a guru in this topic, or contacting for more help.`
  },

  // ===== MAIN BLOG =====
  {
    path: '/blog',
    matchPattern: (pathname) => pathname === '/blog',
    quickActions: [
      { label: 'Content Hubs', route: '/hubs', icon: '🌐' },
      { label: 'Browse Gurus', route: '/browse', icon: '👥' },
      { label: 'Contact', route: '/contact', icon: '✉️' }
    ],
    systemPrompt: `You are the Main Blog Assistant. Help users discover blog posts and connect to topic hubs or gurus. Suggest hubs and browse.`
  },

  // ===== MAIN BLOG POST =====
  {
    path: /^\/blog\/[^\/]+/,
    matchPattern: (pathname) => pathname.startsWith('/blog/') && pathname !== '/blog',
    quickActions: [
      { label: 'All Posts', route: '/blog', icon: '📰' },
      { label: 'Browse', route: '/browse', icon: '🔍' },
      { label: 'Hubs', route: '/hubs', icon: '🌐' }
    ],
    systemPrompt: `You are a Blog Post Assistant. Suggest related posts, browsing gurus, or exploring hubs.`
  },

  // ===== AI LEARNING STYLE ASSESSMENT =====
  {
    path: '/ai/learning-style-assessment',
    quickActions: [
      { label: 'See Matches', route: '/ai/matchmaking', icon: '💫' },
      { label: 'Browse Gurus', route: '/browse', icon: '👥' },
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true }
    ],
    systemPrompt: `You are a Learning Style Assessment Guide. Explain the quiz, encourage completion, and tell users they'll get personalized guru matches. Direct them to matchmaking or browse after.`
  },

  // ===== AI PROFILE ASSISTANT =====
  {
    path: '/ai/profile-assistant',
    quickActions: [
      { label: 'My Profile', route: '/profile', icon: '👤', requiresAuth: true },
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true },
      { label: 'Settings', route: '/settings', icon: '⚙️', requiresAuth: true }
    ],
    systemPrompt: `You are an AI Profile Assistant. Help users improve their profile (bio, skills, photo). Give specific, actionable feedback. Link to profile and settings.`
  },

  // ===== AI PRICE RECOMMENDATION =====
  {
    path: '/ai/price-recommendation',
    quickActions: [
      { label: 'Post Job', route: '/jobs/post', icon: '✍️', requiresAuth: true },
      { label: 'Jobs List', route: '/jobs', icon: '📋' },
      { label: 'Pricing', route: '/pricing', icon: '💰' }
    ],
    systemPrompt: `You are an AI Price Recommendation Assistant. Help users set competitive prices for job postings or services. Suggest posting the job or checking pricing.`
  },

  // ===== ATTESTATION (e.g. disability) =====
  {
    path: '/attestation/disability',
    matchPattern: (pathname) => pathname.startsWith('/attestation/'),
    quickActions: [
      { label: 'Hero Gurus', route: 'https://heroes.yoohoo.guru', icon: '🦸' },
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true },
      { label: 'Help', route: '/help', icon: '❓' }
    ],
    systemPrompt: `You are an Attestation Assistant. Guide users through the attestation form (e.g. disability). Explain why we ask and what happens next. Point to Hero Gurus or dashboard.`
  },

  // ===== DISPUTES =====
  {
    path: '/disputes',
    matchPattern: (pathname) => pathname.startsWith('/disputes'),
    quickActions: [
      { label: 'Help', route: '/help', icon: '❓' },
      { label: 'Contact', route: '/contact', icon: '✉️' },
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true }
    ],
    systemPrompt: `You are a Dispute Resolution Assistant. Explain how to submit or resolve a dispute. Suggest help or contact for escalation. Be calm and procedural.`
  },

  // ===== COMPLIANCE =====
  {
    path: '/compliance',
    matchPattern: (pathname) => pathname.startsWith('/compliance'),
    quickActions: [
      { label: 'Dashboard', route: '/dashboard', icon: '🏠', requiresAuth: true },
      { label: 'Help', route: '/help', icon: '❓' }
    ],
    systemPrompt: `You are a Compliance Assistant. Help users complete compliance requirements (documents, attestations). Direct to dashboard or help as needed.`
  },

  // ===== DEFAULT FALLBACK =====
  {
    path: '*',
    quickActions: [
      { label: 'Home', route: '/', icon: '🏠' },
      { label: 'Dashboard', route: '/dashboard', icon: '📊', requiresAuth: true },
      { label: 'Browse', route: '/browse', icon: '🔍' },
      { label: 'Help', route: '/help', icon: '❓' }
    ],
    systemPrompt: `You are the YooHoo.Guru General Assistant. Help users navigate the platform and find what they need.

Capabilities:
- Navigate to any section of the platform
- Explain features and services
- Answer general questions
- Provide guidance on next steps
- Troubleshoot common issues

Be helpful, friendly, and guide users to the resources they need.`
  }
];

/**
 * Find the appropriate route configuration for a given pathname
 */
export function getRouteConfig(pathname: string): RouteConfig {
  // Try exact string match first
  for (const config of routeConfigs) {
    if (typeof config.path === 'string' && config.path === pathname) {
      return config;
    }
  }

  // Try regex patterns
  for (const config of routeConfigs) {
    if (config.path instanceof RegExp && config.path.test(pathname)) {
      return config;
    }
  }

  // Try custom match patterns
  for (const config of routeConfigs) {
    if (config.matchPattern && config.matchPattern(pathname)) {
      return config;
    }
  }

  // Return default fallback
  return routeConfigs[routeConfigs.length - 1];
}

/**
 * Filter quick actions based on user authentication and role
 * Adds core navigation actions (Back, Main Menu) to every page
 */
export function filterQuickActions(
  actions: QuickAction[],
  isAuthenticated: boolean,
  userRole?: string
): QuickAction[] {
  const filtered = actions.filter(action => {
    // Always show actions with alwaysShow flag
    if (action.alwaysShow) {
      return true;
    }

    // Check authentication requirement
    if (action.requiresAuth && !isAuthenticated) {
      return false;
    }

    // Check role requirement
    if (action.allowedRoles && action.allowedRoles.length > 0) {
      if (!userRole || !action.allowedRoles.includes(userRole)) {
        return false;
      }
    }

    return true;
  });

  // Prepend core navigation actions to ensure they're always at the top
  return [...coreNavigationActions, ...filtered];
}
