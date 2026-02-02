# YooHoo.Guru Monetization Strategy

## North Star
- Monetization feels like a premium feature, not a barrier.
- Freemium root, premium depth.
- Credits for AI usage with clear value exchange.

## Paywall Map (SubscriptionGate targets)
Premium depth routes should be wrapped by SubscriptionGate (or a page-level guard),
while root discovery remains open.

### Core platform premium depth
| Route | File path | Rationale |
| --- | --- | --- |
| /ai/matchmaking | apps/main/pages/ai/matchmaking.tsx | High-value AI matching |
| /ai/learning-style-assessment | apps/main/pages/ai/learning-style-assessment.tsx | Advanced AI insights |
| /learning/progress | apps/main/pages/learning/progress.tsx | Progress analytics |
| /learning/schedule | apps/main/pages/learning/schedule.tsx | Schedule management |
| /session/[id]/video | apps/main/pages/session/[id]/video.tsx | Live session delivery |
| /guru/[id]/book-session | apps/main/pages/guru/[id]/book-session.tsx | Booking conversion |
| /guru/[id]/ratings | apps/main/pages/guru/[id]/ratings.tsx | Post-session value add |

### Content hub premium depth (Tech, Gardening)
| Route | File path | Rationale |
| --- | --- | --- |
| /_apps/tech/skills | apps/main/pages/_apps/tech/skills.tsx | Advanced skill paths |
| /_apps/tech/teachers | apps/main/pages/_apps/tech/teachers.tsx | Premium expert access |
| /_apps/tech/blog | apps/main/pages/_apps/tech/blog/index.tsx | Premium content feed |
| /_apps/tech/blog/[slug] | apps/main/pages/_apps/tech/blog/[slug].tsx | Deep content |
| /_apps/gardening/skills | apps/main/pages/_apps/gardening/skills.tsx | Advanced skill paths |
| /_apps/gardening/teachers | apps/main/pages/_apps/gardening/teachers.tsx | Premium expert access |
| /_apps/gardening/blog | apps/main/pages/_apps/gardening/blog/index.tsx | Premium content feed |
| /_apps/gardening/blog/[slug] | apps/main/pages/_apps/gardening/blog/[slug].tsx | Deep content |
| /_apps/coach/session/[id] | apps/main/pages/_apps/coach/session/[id].tsx | Premium coaching session |

### Component-level gates for embedded AI tools
These components are used inside pages and should be wrapped at the component
level if they are embedded into free routes.
- apps/main/components/ai/AIProfileAssistant.tsx
- apps/main/components/ai/AITeachingAssistant.tsx
- apps/main/components/ai/AIPriceRecommendation.tsx
- apps/main/components/ai/AIJobHelper.tsx
- apps/main/components/ai/AICandidateSelection.tsx

## YooHoo Credit System (Pricing JSON)
```json
{
  "currency": "USD",
  "credit_unit": "YooHoo Credit",
  "credits_per_usd": 2,
  "packs": [
    { "sku": "credits-50", "credits": 50, "price_usd": 25, "bonus_credits": 0 },
    { "sku": "credits-200", "credits": 200, "price_usd": 90, "bonus_credits": 20 },
    { "sku": "credits-500", "credits": 500, "price_usd": 200, "bonus_credits": 75 }
  ],
  "subscriptions": {
    "starter": { "monthly_usd": 19, "monthly_credits": 40 },
    "pro": { "monthly_usd": 49, "monthly_credits": 120 },
    "premier": { "monthly_usd": 99, "monthly_credits": 300 }
  },
  "ai_tool_pricing": {
    "matchmaking": { "credits": 8, "tier": "premium" },
    "learning_style_assessment": { "credits": 6, "tier": "premium" },
    "profile_assistant": { "credits": 10, "tier": "premium" },
    "price_recommendation": { "credits": 10, "tier": "premium" },
    "job_helper": { "credits": 12, "tier": "premium" },
    "candidate_selection": { "credits": 15, "tier": "premium" },
    "teaching_assistant": { "credits": 12, "tier": "premium" },
    "context_assistant": { "credits": 2, "tier": "free" }
  },
  "minimum_balance": 2,
  "credit_rollover_months": 3
}
```

## Contextual Affiliate Injection (Pseudocode)
Goal: smart, minimal placements that feel helpful, not cluttered.
```text
function injectAffiliates({ hub, pageType, content, user, device }) {
  if (user.isSubscriber || user.optOutAffiliates) return [];
  if (!['tech', 'gardening'].includes(hub)) return [];
  if (hub === 'heroes') return [];

  const catalog = getAffiliateCatalog(hub); // curated Amazon + courses
  const keywords = extractKeywords(content);
  const scored = scoreByRelevance(catalog, keywords);
  const filtered = scored.filter(item => item.score >= 0.65);

  const slots = [];
  if (pageType === 'blog' && content.wordCount > 800) {
    slots.push('after_paragraph_4');
    slots.push('near_conclusion');
  }
  if (pageType === 'skills') {
    slots.push(device === 'desktop' ? 'sidebar' : 'after_section_2');
  }

  const placements = placeAtMostTwo(filtered, slots, {
    minParagraphSpacing: 6,
    label: 'Sponsored',
    rel: 'sponsored nofollow',
    maxPerPage: 2
  });

  return placements;
}
```
