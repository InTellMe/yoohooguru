# SURVEY_REPORT.md

## Topology Map

Frontend: Next.js app at `apps/main` (pages router).
Subdomain routing: `apps/main/middleware.ts` rewrites subdomains to `pages/_apps/{subdomain}/*`.
Backend: Express API in `backend/src/index.js`.
Gateway: `apps/main/next.config.js` rewrites `/api/backend/*` to backend `/api/*`.
Next API routes: `apps/main/pages/api/*` (AI, auth, contact, stripe webhook, etc.).

### Mermaid.js Diagram

```mermaid
graph TD
  U[Users/Browsers] --> M[Main landing page\napps/main/pages/index.tsx]
  U --> SDReq[Subdomain request\n{angel|coach|heroes|...}.yoohoo.guru]
  SDReq --> MW[middleware.ts\nsubdomain rewrite]
  MW --> SDPages[pages/_apps/{subdomain}/*]

  M --> NEXT[Next.js app (apps/main)]
  NEXT --> NAPI[Next API routes\napps/main/pages/api/*]
  NAPI --> AIApi[AI endpoints\n/api/ai/*]

  NEXT --> RW[/api/backend/* rewrite\napps/main/next.config.js]
  RW --> BE[Backend API (Express)\nbackend/src/index.js]
  BE --> BERoutes[/api/auth | /api/users | /api/ai | /api/matchmaking | /api/news | ...]
```

Subdomains (source: `apps/main/middleware.ts`):
Core: `www`, `angel`, `coach`, `heroes`, `dashboard`
Subjects: `art`, `auto`, `business`, `coding`, `cooking`, `crafts`, `data`, `design`, `finance`, `fitness`, `gardening`, `history`, `home`, `investing`, `language`, `marketing`, `math`, `mechanical`, `music`, `photography`, `sales`, `science`, `sports`, `tech`, `wellness`, `writing`

## The Inventory (Assistants)

| Assistant | Filepath | Model Used |
|---|---|---|
| Homepage Assistant (Guru Assistant) | `apps/main/components/HomepageAssistant.tsx` + `apps/main/pages/api/ai/homepage-assistant.ts` | OpenRouter routing: `anthropic/claude-3.5-sonnet`, `openai/gpt-4-turbo`, `google/gemini-pro`, `meta-llama/llama-3.1-70b-instruct`, `mistralai/mistral-large` |
| Context Navigator Assistant | `apps/main/components/ContextNavigator.tsx` + `apps/main/pages/api/ai/context-assistant.ts` | OpenRouter routing: `anthropic/claude-3.5-sonnet`, `openai/gpt-4o-mini`, `google/gemini-flash-1.5`, `meta-llama/llama-3.1-8b-instruct`, `mistralai/mistral-7b-instruct` |
| AI Profile Assistant | `apps/main/components/ai/AIProfileAssistant.tsx` + `apps/main/pages/api/ai/profile-assistant.ts` | OpenAI SDK: `gpt-4-turbo-preview` |
| AI Teaching Assistant | `apps/main/components/ai/AITeachingAssistant.tsx` + `apps/main/pages/api/ai/teaching-assistant.ts` | OpenAI SDK: `gpt-4-turbo-preview` |
| AI Matchmaking Assistant | `apps/main/components/ai/AIMatchmaking.tsx` + `apps/main/pages/api/ai/matchmaking.ts` | OpenAI SDK: `gpt-4-turbo-preview` |
| AI Learning Style Assessment | `apps/main/pages/ai/learning-style-assessment.tsx` + `apps/main/pages/api/ai/learning-style.ts` | OpenAI SDK: `gpt-4-turbo-preview` |
| AI Job Helper | `apps/main/components/ai/AIJobHelper.tsx` + `apps/main/pages/api/ai/job-helper.ts` | OpenAI SDK: `gpt-4-turbo-preview` |
| AI Candidate Selection | `apps/main/components/ai/AICandidateSelection.tsx` + `apps/main/pages/api/ai/candidate-selection.ts` | OpenAI SDK: `gpt-4-turbo-preview` |
| AI Price Recommendation | `apps/main/components/ai/AIPriceRecommendation.tsx` + `apps/main/pages/api/ai/price-recommendation.ts` | OpenAI SDK: `gpt-4-turbo-preview` |

## Tech Stack Audit (LLM Connectors)

- OpenAI SDK: `apps/main/lib/openai.ts` (used by `/api/ai/*` endpoints in Next app).
- OpenRouter API:
  - `apps/main/pages/api/ai/homepage-assistant.ts`
  - `apps/main/pages/api/ai/context-assistant.ts`
  - `backend/src/routes/ai.js`
  - `backend/src/lib/aiMatchmakingService.js`
  - `backend/src/lib/aiSkillCategorizationService.js`
  - `backend/src/agents/curationAgents.js`
- Direct OpenAI HTTP:
  - `backend/src/routes/ai.js`
  - `backend/src/lib/aiMatchmakingService.js`
  - `backend/src/lib/aiSkillCategorizationService.js`
- OpenRouter models in use: Claude 3.5 Sonnet, Perplexity (llama-3.1-sonar-large-128k-online), Gemini Pro/Flash 1.5, Llama 3.1 (8b/70b), Mistral (large/7b).

## Orphan Check (likely disconnected from main entrypoints)

1. `.archive/` (legacy apps and configs, not part of active build)
2. `.archive/legacy-individual-apps/` (multiple old Next apps per subdomain)
3. `.archive/frontend-legacy/` (unused legacy frontend)
4. `orphan-analysis/` (generated reports)
5. `python-mcp-server/` (standalone server; only referenced in docs)
6. `yoohooguru-platform.zip` (binary artifact)
7. `job-logs.txt` (log artifact)
8. `fix_ssr_router.py` (standalone script)
9. `vercel-domains-list.txt` (manual artifact)
10. `docs/` (large doc-only subtree, not runtime entrypoints)

## The Mess List (Top 10 Architectural Inconsistencies)

1. Subdomain source-of-truth split: `apps/main/middleware.ts` vs `backend/src/config/subdomains.js` (mismatched sets such as `dashboard` and `www`).
2. Overlapping AI API surfaces: Next `/pages/api/ai/*` and backend `/api/ai/*` both exist; routing clarity depends on `/api/backend/*` rewrite.
3. Legacy frontend path in backend: `backend/package.json` references `../frontend` in `ensure-frontend-built`, but active app lives in `apps/main`.
4. Mixed JS/TS across runtime: backend is JS; frontend/packages are TS/TSX with no shared typing boundary.
5. Duplicate learning-style flows: `apps/main/components/ai/LearningStyleAssessment.tsx` (mock results) vs `apps/main/pages/ai/learning-style-assessment.tsx` (real API).
6. LLM config is scattered: model names and provider logic are hardcoded in multiple files (no central config).
7. Two OpenAI integration styles: OpenAI SDK in frontend vs direct HTTP calls in backend (inconsistent patterns).
8. Large legacy code kept in `.archive/` alongside the active app, complicating navigation and ownership.
9. Generated artifacts committed (`orphan-analysis/`, `yoohooguru-platform.zip`, `job-logs.txt`).
10. Versioned and legacy APIs both active (`/api/v1` and `/api/*`), increasing maintenance divergence.
