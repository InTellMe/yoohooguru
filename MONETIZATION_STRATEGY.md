# YooHoo.Guru Monetization Strategy

> **Document Version:** 1.0  
> **Last Updated:** February 2026  
> **Author:** The Rainmaker (Senior Monetization Architect)

---

## Executive Summary

This document outlines a comprehensive monetization architecture for YooHoo.Guru that balances revenue generation with exceptional user experience. Our strategy follows the **"Freemium Root, Premium Depth"** principle—keeping entry-level features free while gating advanced, high-value features behind subscriptions or credits.

---

## 1. Paywall Map

### 1.1 Subscription Gate Architecture

The `SubscriptionGate` component wraps premium routes, checking user subscription status before rendering content.

```typescript
// Proposed: apps/main/components/gates/SubscriptionGate.tsx
interface SubscriptionGateProps {
  tier: 'basic' | 'pro' | 'enterprise';
  feature?: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
```

### 1.2 High-Value Routes for Gatekeeping

#### **Tier 1: PRO Features ($9.99/month)**

| Route Path | File Location | Feature Description | Gate Type |
|------------|---------------|---------------------|-----------|
| `/guru/[id]/book-session` | `apps/main/pages/guru/[id]/book-session.tsx` | Priority booking with top-rated Gurus | SubscriptionGate (pro) |
| `/skills/coding/web-dev` | `apps/main/pages/skills/coding/web-dev.tsx` | Advanced coding curriculum | CreditGate (5 credits/access) |
| `/api/ai/teaching-assistant` | `apps/main/pages/api/ai/teaching-assistant.ts` | AI Teaching Assistant (advanced mode) | CreditGate (10 credits/query) |
| `/api/ai/matchmaking` | `apps/main/pages/api/ai/matchmaking.ts` | AI-Powered Guru Matching | CreditGate (3 credits/match) |
| `/api/ai/profile-assistant` | `apps/main/pages/api/ai/profile-assistant.ts` | AI Profile Optimization | CreditGate (5 credits/session) |

#### **Tier 2: ENTERPRISE Features ($29.99/month)**

| Route Path | File Location | Feature Description | Gate Type |
|------------|---------------|---------------------|-----------|
| `/_apps/coach/session/[id]` | `apps/main/pages/_apps/coach/session/[id].tsx` | 1-on-1 Live Coaching Sessions | SubscriptionGate (enterprise) |
| `/api/ai/candidate-selection` | `apps/main/pages/api/ai/candidate-selection.ts` | AI Candidate Screening for Hiring | SubscriptionGate (enterprise) |
| `/api/ai/job-helper` | `apps/main/pages/api/ai/job-helper.ts` | Advanced Job Matching AI | CreditGate (15 credits/query) |
| `/dashboard` (analytics) | `apps/main/pages/_apps/dashboard/index.tsx` | Advanced Analytics Dashboard | SubscriptionGate (enterprise) |

#### **Tier 3: Content Hub Premium Sections**

| Hub | Free Path | Premium Path | Premium File Location |
|-----|-----------|--------------|----------------------|
| **Tech** | `/_apps/tech/index.tsx` | `/_apps/tech/skills.tsx` (Advanced) | `apps/main/pages/_apps/tech/skills.tsx` |
| **Coding** | `/_apps/coding/index.tsx` | `/_apps/coding/skills.tsx` (Advanced) | `apps/main/pages/_apps/coding/skills.tsx` |
| **Finance** | `/_apps/finance/index.tsx` | `/_apps/finance/skills.tsx` (Advanced) | `apps/main/pages/_apps/finance/skills.tsx` |
| **Business** | `/_apps/business/index.tsx` | `/_apps/business/skills.tsx` (Advanced) | `apps/main/pages/_apps/business/skills.tsx` |
| **Data** | `/_apps/data/index.tsx` | `/_apps/data/skills.tsx` (Advanced) | `apps/main/pages/_apps/data/skills.tsx` |
| **Marketing** | `/_apps/marketing/index.tsx` | `/_apps/marketing/skills.tsx` (Advanced) | `apps/main/pages/_apps/marketing/skills.tsx` |
| **Investing** | `/_apps/investing/index.tsx` | `/_apps/investing/skills.tsx` (Advanced) | `apps/main/pages/_apps/investing/skills.tsx` |

### 1.3 Always-Free Routes (Hero Gurus Exception)

The following routes **MUST remain free** per our social mission:

| Route | File Location | Reason |
|-------|---------------|--------|
| `/_apps/heroes/*` | `apps/main/pages/_apps/heroes/**/*` | Accessibility mission - free for disabled users |
| `/_apps/angel/*` | `apps/main/pages/_apps/angel/**/*` | Community support mission |
| `/attestation/disability` | N/A (to be created) | Disability verification flow |

---

## 2. Credit Pricing System (YooHoo Credits)

### 2.1 Credit Economy Design

```json
{
  "creditSystem": {
    "name": "YooHoo Credits",
    "symbol": "YHC",
    "baseUnit": 1,
    "conversionRate": {
      "USD": 0.10,
      "EUR": 0.09,
      "GBP": 0.08
    }
  },
  "packages": [
    {
      "id": "starter",
      "name": "Starter Pack",
      "credits": 50,
      "price": 4.99,
      "currency": "USD",
      "savings": "0%",
      "badge": null
    },
    {
      "id": "popular",
      "name": "Explorer Pack",
      "credits": 150,
      "price": 12.99,
      "currency": "USD",
      "savings": "13%",
      "badge": "MOST POPULAR"
    },
    {
      "id": "power",
      "name": "Power Pack",
      "credits": 500,
      "price": 39.99,
      "currency": "USD",
      "savings": "20%",
      "badge": "BEST VALUE"
    },
    {
      "id": "enterprise",
      "name": "Enterprise Pack",
      "credits": 2000,
      "price": 149.99,
      "currency": "USD",
      "savings": "25%",
      "badge": "ENTERPRISE"
    }
  ],
  "subscriptionBundles": [
    {
      "id": "pro_monthly",
      "name": "Pro Monthly",
      "price": 9.99,
      "currency": "USD",
      "interval": "month",
      "features": [
        "Unlimited basic AI queries",
        "50 YooHoo Credits/month",
        "Priority booking",
        "Ad-free experience"
      ],
      "creditsIncluded": 50
    },
    {
      "id": "pro_annual",
      "name": "Pro Annual",
      "price": 99.99,
      "currency": "USD",
      "interval": "year",
      "features": [
        "Everything in Pro Monthly",
        "100 YooHoo Credits/month",
        "Early access to new features",
        "2 months FREE"
      ],
      "creditsIncluded": 100,
      "badge": "SAVE 17%"
    },
    {
      "id": "enterprise_monthly",
      "name": "Enterprise Monthly",
      "price": 29.99,
      "currency": "USD",
      "interval": "month",
      "features": [
        "Everything in Pro",
        "200 YooHoo Credits/month",
        "Live coaching sessions",
        "Advanced analytics",
        "API access",
        "Dedicated support"
      ],
      "creditsIncluded": 200
    }
  ],
  "creditCosts": {
    "ai": {
      "teachingAssistant": {
        "basic": 0,
        "advanced": 10,
        "description": "AI Teaching Assistant"
      },
      "matchmaking": {
        "basic": 0,
        "detailed": 3,
        "description": "AI Guru Matching"
      },
      "profileAssistant": {
        "basic": 0,
        "optimization": 5,
        "description": "AI Profile Optimization"
      },
      "priceRecommendation": {
        "basic": 0,
        "marketAnalysis": 5,
        "description": "AI Price Recommendation"
      },
      "jobHelper": {
        "basic": 0,
        "advanced": 15,
        "description": "AI Job Helper"
      },
      "candidateSelection": {
        "perCandidate": 2,
        "batchAnalysis": 25,
        "description": "AI Candidate Screening"
      }
    },
    "content": {
      "premiumSkillAccess": {
        "perSkill": 5,
        "unlimited": "subscription_required"
      },
      "downloadableResources": {
        "perResource": 2
      },
      "certificateGeneration": {
        "perCertificate": 10
      }
    },
    "sessions": {
      "priorityBooking": {
        "perBooking": 3
      },
      "instantMatching": {
        "perMatch": 5
      },
      "sessionRecording": {
        "perSession": 10
      }
    }
  },
  "freeCredits": {
    "newUser": 20,
    "referral": 10,
    "dailyLogin": 1,
    "profileCompletion": 15,
    "firstReview": 5
  }
}
```

### 2.2 Credit Gate Component Usage

```typescript
// Example usage in a page component
import { CreditGate } from '@/components/gates/CreditGate';

export default function AdvancedTeachingPage() {
  return (
    <CreditGate 
      cost={10}
      feature="AI Teaching Assistant (Advanced)"
      onInsufficientCredits={() => router.push('/pricing')}
    >
      <AITeachingAssistant mode="advanced" />
    </CreditGate>
  );
}
```

---

## 3. Affiliate Injection System

### 3.1 Contextual Affiliate Strategy

Our affiliate system uses **smart context detection** to inject relevant, non-intrusive affiliate links into content hubs.

### 3.2 Affiliate Configuration

```json
{
  "affiliateConfig": {
    "providers": {
      "amazon": {
        "trackingId": "yoohooguru-20",
        "apiEnabled": true,
        "commissionRate": "4-10%"
      },
      "udemy": {
        "affiliateId": "YOOHOO_EDU",
        "commissionRate": "15%"
      },
      "skillshare": {
        "referralCode": "YOOHOO",
        "commissionRate": "$10/signup"
      },
      "coursera": {
        "affiliateId": "yoohoo_coursera",
        "commissionRate": "20-45%"
      }
    },
    "hubMappings": {
      "tech": {
        "keywords": ["programming", "software", "computer", "tech", "code", "developer"],
        "amazonCategories": ["Electronics", "Books>Computers", "Software"],
        "courses": ["udemy", "coursera", "skillshare"]
      },
      "gardening": {
        "keywords": ["garden", "plants", "soil", "seeds", "landscaping", "organic"],
        "amazonCategories": ["Garden & Outdoor", "Books>Crafts & Hobbies>Gardening"],
        "courses": ["udemy", "skillshare"]
      },
      "cooking": {
        "keywords": ["recipe", "kitchen", "food", "culinary", "chef", "baking"],
        "amazonCategories": ["Kitchen & Dining", "Books>Cookbooks", "Appliances"],
        "courses": ["udemy", "skillshare"]
      },
      "fitness": {
        "keywords": ["workout", "exercise", "health", "gym", "training", "nutrition"],
        "amazonCategories": ["Sports & Outdoors", "Health & Household", "Books>Health & Fitness"],
        "courses": ["udemy", "coursera"]
      },
      "finance": {
        "keywords": ["investing", "money", "stocks", "budget", "wealth", "trading"],
        "amazonCategories": ["Books>Business & Money", "Books>Investing"],
        "courses": ["udemy", "coursera"]
      },
      "art": {
        "keywords": ["painting", "drawing", "creative", "artistic", "design", "craft"],
        "amazonCategories": ["Arts, Crafts & Sewing", "Books>Arts & Photography"],
        "courses": ["skillshare", "udemy"]
      },
      "music": {
        "keywords": ["instrument", "song", "musical", "audio", "recording", "composition"],
        "amazonCategories": ["Musical Instruments", "Books>Arts & Photography>Music"],
        "courses": ["skillshare", "udemy"]
      },
      "photography": {
        "keywords": ["camera", "photo", "lens", "lighting", "editing", "portrait"],
        "amazonCategories": ["Electronics>Camera & Photo", "Books>Arts & Photography"],
        "courses": ["skillshare", "udemy"]
      },
      "coding": {
        "keywords": ["javascript", "python", "react", "programming", "algorithm", "database"],
        "amazonCategories": ["Books>Computers & Technology", "Software"],
        "courses": ["udemy", "coursera", "skillshare"]
      },
      "business": {
        "keywords": ["entrepreneur", "startup", "management", "leadership", "marketing"],
        "amazonCategories": ["Books>Business & Money", "Office Products"],
        "courses": ["coursera", "udemy"]
      }
    }
  }
}
```

### 3.3 Affiliate Injection Logic (Pseudocode)

```typescript
/**
 * Affiliate Injection Engine
 * 
 * This system intelligently injects contextual affiliate recommendations
 * into content hubs without disrupting user experience.
 */

interface AffiliateRecommendation {
  type: 'product' | 'course' | 'book';
  title: string;
  description: string;
  affiliateUrl: string;
  provider: string;
  relevanceScore: number;
  imageUrl?: string;
  price?: string;
  rating?: number;
}

interface ContentContext {
  hubName: string;
  pageType: 'index' | 'blog' | 'skills' | 'teachers';
  userHistory: string[];
  currentTopic?: string;
  scrollDepth: number;
}

class AffiliateInjectionEngine {
  private config: AffiliateConfig;
  private cache: Map<string, AffiliateRecommendation[]>;

  constructor(config: AffiliateConfig) {
    this.config = config;
    this.cache = new Map();
  }

  /**
   * STEP 1: Analyze Content Context
   * Extract keywords and determine relevance
   */
  analyzeContext(context: ContentContext): string[] {
    const hubMapping = this.config.hubMappings[context.hubName];
    if (!hubMapping) return [];

    const relevantKeywords = hubMapping.keywords.filter(keyword => {
      // Check if keyword appears in page content or user history
      return this.isKeywordRelevant(keyword, context);
    });

    return relevantKeywords;
  }

  /**
   * STEP 2: Fetch Relevant Affiliates
   * Query affiliate APIs based on context
   */
  async fetchAffiliates(
    keywords: string[], 
    hubName: string, 
    limit: number = 3
  ): Promise<AffiliateRecommendation[]> {
    const cacheKey = `${hubName}:${keywords.join(',')}`;
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    const hubMapping = this.config.hubMappings[hubName];
    const recommendations: AffiliateRecommendation[] = [];

    // Amazon Products (if applicable)
    if (hubMapping.amazonCategories.length > 0) {
      const products = await this.fetchAmazonProducts(
        keywords,
        hubMapping.amazonCategories
      );
      recommendations.push(...products);
    }

    // Online Courses
    for (const courseProvider of hubMapping.courses) {
      const courses = await this.fetchCourses(courseProvider, keywords);
      recommendations.push(...courses);
    }

    // Sort by relevance and limit
    const sorted = recommendations
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, limit);

    this.cache.set(cacheKey, sorted);
    return sorted;
  }

  /**
   * STEP 3: Determine Injection Points
   * Find optimal placement without disrupting UX
   */
  determineInjectionPoints(
    pageType: string,
    scrollDepth: number
  ): InjectionPoint[] {
    const points: InjectionPoint[] = [];

    switch (pageType) {
      case 'blog':
        // Inject after 3rd paragraph
        points.push({ type: 'inline', position: 'after-paragraph-3' });
        // Inject in sidebar if 40% scrolled
        if (scrollDepth > 0.4) {
          points.push({ type: 'sidebar', position: 'sticky' });
        }
        break;

      case 'skills':
        // Inject as "Related Resources" section
        points.push({ type: 'section', position: 'after-skills-list' });
        break;

      case 'teachers':
        // Inject as "Recommended Learning Materials"
        points.push({ type: 'section', position: 'bottom' });
        break;

      case 'index':
        // Subtle featured section
        points.push({ type: 'featured', position: 'above-fold' });
        break;
    }

    return points;
  }

  /**
   * STEP 4: Render Affiliate Component
   * Create non-intrusive affiliate UI
   */
  renderAffiliateBlock(
    recommendations: AffiliateRecommendation[],
    style: 'minimal' | 'card' | 'inline'
  ): React.ReactElement {
    // Pseudocode for rendering
    return (
      <AffiliateBlock
        recommendations={recommendations}
        style={style}
        disclosureText="As an Amazon Associate, we earn from qualifying purchases."
        onImpression={(rec) => this.trackImpression(rec)}
        onClick={(rec) => this.trackClick(rec)}
      />
    );
  }

  /**
   * STEP 5: Track Performance
   * Monitor affiliate performance for optimization
   */
  trackImpression(recommendation: AffiliateRecommendation): void {
    analytics.track('affiliate_impression', {
      type: recommendation.type,
      provider: recommendation.provider,
      title: recommendation.title,
      relevanceScore: recommendation.relevanceScore
    });
  }

  trackClick(recommendation: AffiliateRecommendation): void {
    analytics.track('affiliate_click', {
      type: recommendation.type,
      provider: recommendation.provider,
      title: recommendation.title,
      affiliateUrl: recommendation.affiliateUrl
    });
  }

  /**
   * Main injection function
   */
  async injectAffiliates(context: ContentContext): Promise<void> {
    // Step 1: Analyze context
    const keywords = this.analyzeContext(context);
    if (keywords.length === 0) return;

    // Step 2: Fetch relevant affiliates
    const recommendations = await this.fetchAffiliates(
      keywords,
      context.hubName,
      3
    );
    if (recommendations.length === 0) return;

    // Step 3: Determine injection points
    const injectionPoints = this.determineInjectionPoints(
      context.pageType,
      context.scrollDepth
    );

    // Step 4: Render and inject
    for (const point of injectionPoints) {
      const style = this.getStyleForPoint(point);
      const block = this.renderAffiliateBlock(recommendations, style);
      this.injectAtPoint(block, point);
    }
  }
}

/**
 * USAGE EXAMPLE:
 * 
 * // In a Content Hub page
 * useEffect(() => {
 *   const engine = new AffiliateInjectionEngine(affiliateConfig);
 *   
 *   engine.injectAffiliates({
 *     hubName: 'gardening',
 *     pageType: 'blog',
 *     userHistory: user.recentTopics,
 *     currentTopic: post.title,
 *     scrollDepth: scrollPosition / documentHeight
 *   });
 * }, [scrollPosition]);
 */
```

### 3.4 Affiliate Placement Guidelines

| Hub | Recommended Placement | Frequency | Style |
|-----|----------------------|-----------|-------|
| Blog posts | After 3rd paragraph | 1 per post | Inline card |
| Skills pages | "Learning Resources" section | 3 items max | Card grid |
| Teacher profiles | "Recommended by Guru" | 2 items max | Minimal |
| Index pages | Featured banner | 1 rotation | Premium card |

### 3.5 Compliance & Disclosure

```typescript
// Required disclosure component
const AffiliateDisclosure = () => (
  <div className="text-xs text-white-40 mt-2">
    <span className="sr-only">Affiliate disclosure:</span>
    As an Amazon Associate and affiliate partner, YooHoo.Guru earns 
    from qualifying purchases. 
    <Link href="/affiliate-disclosure">Learn more</Link>
  </div>
);
```

---

## 4. Implementation Roadmap

### Phase 1: Foundation (Week 1-2)
- [ ] Create `SubscriptionGate` component
- [ ] Create `CreditGate` component
- [ ] Set up Stripe subscription products
- [ ] Create credit purchase flow

### Phase 2: AI Monetization (Week 3-4)
- [ ] Implement credit tracking for AI endpoints
- [ ] Add usage metering to AI API routes
- [ ] Create credit balance UI component
- [ ] Add low-credit warnings

### Phase 3: Content Gating (Week 5-6)
- [ ] Wrap premium skill pages with gates
- [ ] Create "Upgrade to unlock" UI
- [ ] Implement content preview for locked content
- [ ] A/B test gate placements

### Phase 4: Affiliate System (Week 7-8)
- [ ] Build `AffiliateInjectionEngine`
- [ ] Integrate Amazon Product API
- [ ] Create affiliate block components
- [ ] Implement impression/click tracking

### Phase 5: Optimization (Ongoing)
- [ ] Monitor conversion rates
- [ ] A/B test pricing
- [ ] Optimize affiliate placements
- [ ] Analyze user feedback

---

## 5. Revenue Projections

| Revenue Stream | Month 1 | Month 3 | Month 6 | Year 1 |
|----------------|---------|---------|---------|--------|
| Pro Subscriptions | $500 | $2,500 | $8,000 | $50,000 |
| Enterprise Subscriptions | $300 | $1,500 | $6,000 | $35,000 |
| Credit Purchases | $200 | $1,000 | $4,000 | $25,000 |
| Affiliate Revenue | $100 | $800 | $3,000 | $20,000 |
| **Total** | **$1,100** | **$5,800** | **$21,000** | **$130,000** |

---

## 6. Key Metrics to Track

- **Conversion Rate**: Free → Paid users
- **ARPU**: Average Revenue Per User
- **Credit Velocity**: Credits purchased vs. consumed
- **Affiliate CTR**: Click-through rate on affiliate links
- **Churn Rate**: Subscription cancellation rate
- **Feature Adoption**: Which premium features drive most upgrades

---

## Appendix A: Stripe Product Configuration

```javascript
// Stripe product setup
const stripeProducts = {
  subscriptions: {
    pro_monthly: 'price_pro_monthly_999',
    pro_annual: 'price_pro_annual_9999',
    enterprise_monthly: 'price_enterprise_monthly_2999',
    enterprise_annual: 'price_enterprise_annual_29999'
  },
  credits: {
    starter_50: 'price_credits_50_499',
    explorer_150: 'price_credits_150_1299',
    power_500: 'price_credits_500_3999',
    enterprise_2000: 'price_credits_2000_14999'
  }
};
```

---

*Document maintained by The Rainmaker. For questions, contact monetization@yoohoo.guru*
