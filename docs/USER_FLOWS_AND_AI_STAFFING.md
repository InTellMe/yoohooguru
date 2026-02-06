# YooHoo.Guru — User Flows & AI Agent Staffing

**Purpose:** Enumerate every meaningful user journey start-to-finish and ensure each step is covered by the ContextNavigator AI (route-specific system prompts and quick actions).

**Maintainer:** @builder (with @architect for flow design)

---

## Flow index (25 flows)

| # | Flow name | Entry | Key steps | AI staffed by |
|---|-----------|--------|-----------|----------------|
| 1 | First-time discovery | Homepage | Home → understand → choose path or ask AI | `/` (Welcome) |
| 2 | Learn a skill (Coach) | Home / Browse | Browse → pick guru → book session → pay → join video | browse, guru/[id]/book-session, session/[id]/video |
| 3 | Teach a skill (become guru) | Dashboard / Signup | Signup (guru) → onboarding → profile → list skills | signup, onboarding, profile, guru/profile |
| 4 | Find local service (Angel's List) | Home / Angel | Angel hub → search/listings → view provider → request | angel.*, jobs |
| 5 | Offer local service (become Angel) | Dashboard / Angel | Signup (angel) → onboarding → post listing → manage requests | signup, onboarding, angel/profile, jobs/post |
| 6 | Free accessible learning (Hero Gurus) | Home / Heroes | Heroes hub → find opportunity → request session → join | heroes/*, session/[id]/video |
| 7 | Volunteer as Hero | Heroes | Heroes → volunteer → complete attestation → sessions | heroes/*, attestation, learning/schedule |
| 8 | Read topic content (subdomain) | Home / Hubs | Hubs or subdomain → read blog/news → CTA (book or lead) | _apps/[subject], _apps/[subject]/blog |
| 9 | Find expert by map | Home | Home → map → filter gurus/gigs → click marker → profile/book | `/` (Welcome), browse, location/search |
| 10 | Match by AI | Browse / AI | Browse or AI matchmaking → quiz → see matches → book | browse, ai/matchmaking, ai/learning-style-assessment |
| 11 | Book session (calendar) | Guru profile / Browse | Guru profile → Book session → pick slot → confirm → pay (if applicable) | guru/[id]/book-session, learning/schedule |
| 12 | Join session (video) | Email / Dashboard | Session reminder → Join → video page → end call | session/[id]/video, learning/schedule |
| 13 | Post a job (hire) | Jobs | Jobs → Post job → AI price helper → publish → review applicants | jobs, jobs/post, ai/price-recommendation |
| 14 | Apply to job / get hired | Jobs / Browse | Jobs list → view job → apply (or guru applies) → messages/booking | jobs, profiles/public, guru/[id]/book-session |
| 15 | Manage learning schedule | Dashboard | Dashboard → Learning schedule → upcoming/past → reschedule/cancel | learning/schedule, learning/progress |
| 16 | Track learning progress | Dashboard | Dashboard → Learning progress → see completed/ongoing | learning/progress, learning/schedule |
| 17 | Edit my profile | Dashboard / Profile | Profile → Edit → AI profile assistant → save | profile, settings, ai/profile-assistant |
| 18 | View public profile (others) | Browse / Jobs | Browse or job → click guru → public profile → book or contact | profiles/public, guru/[id]/book-session |
| 19 | Account & security | Settings | Settings → account, privacy, notifications, billing | settings |
| 20 | Get help / contact | Any | Help, FAQ, Contact → find answer or submit form | help, faq, contact |
| 21 | Legal & trust | Footer | Privacy, Terms, Safety, Cookies | privacy, terms, safety, cookies |
| 22 | Onboarding (new user) | After signup | Onboarding steps → profile, categories, requirements, payout | onboarding |
| 23 | Guru earnings & payouts | Guru dashboard | Guru profile → Earnings → Connect/payouts | guru/profile, guru/earnings (future) |
| 24 | Disputes & compliance | Dashboard / Email | Dispute → disputes page; compliance requirements | disputes, compliance |
| 25 | Admin platform ops | Admin | Admin → users, content, analytics, site text | admin/* |

---

## Detailed flows (steps + AI staffing)

### Flow 1: First-time discovery
- **Trigger:** User lands on yoohoo.guru (or www).
- **Steps:** 1) See hero and value prop. 2) Read “Choose your path” (SkillShare, Angel’s List, Hero Gurus). 3) Optional: open map, browse by location. 4) Optional: ask AI “Where should I go?” → get directed to coach / angel / heroes / hubs.
- **Success:** User chooses a path or signs up.
- **AI staffing:** Home (`/`) — Welcome Assistant; prompt must include “Where should I go?” and map to coach, angel, heroes, hubs. Quick actions: Signup, Login, Browse, How it works, **and** “Explore by topic” (hubs).

### Flow 2: Learn a skill (Coach)
- **Trigger:** User wants to learn something (e.g. coding, guitar).
- **Steps:** 1) Home or Browse. 2) Browse skills/gurus or use AI match. 3) Open guru public profile. 4) Book session (pick time, confirm). 5) Pay if required. 6) At session time: Join → video page.
- **Success:** Session completed; user can leave review.
- **AI staffing:**  
  - `browse` — Learning Matchmaking Expert (suggest gurus, explain booking).  
  - `profiles/public` — “Viewing a guru” (next: Book session, See ratings, Back to browse).  
  - `guru/[id]/book-session` — “Booking a session” (explain steps, calendar, payment).  
  - `session/[id]/video` — “In session” (troubleshoot join, end call).  
  - `learning/schedule` — Schedule Manager (upcoming, join link, reschedule).

### Flow 3: Teach a skill (become guru)
- **Trigger:** User wants to teach and earn.
- **Steps:** 1) Signup with role “Guru” or switch from dashboard. 2) Onboarding (profile, categories, requirements, payout). 3) Complete profile; optionally AI profile assistant. 4) Guru profile / “My sessions” / earnings (when built).
- **Success:** Profile live; can receive bookings.
- **AI staffing:**  
  - `signup` — Onboarding Specialist (explain guru path).  
  - `onboarding` — “Onboarding” (step-by-step, next step).  
  - `profile` — Profile Optimization (bio, skills).  
  - `guru/profile` — Guru Success Coach (sessions, earnings, ratings).

### Flow 4: Find local service (Angel’s List)
- **Trigger:** User needs a local service (plumber, tutor, etc.).
- **Steps:** 1) Home → Angel’s List or Jobs. 2) Search/browse listings. 3) View listing/provider. 4) Request service or book.
- **Success:** Request sent or booking made.
- **AI staffing:**  
  - `jobs` — Job Search Assistant (find gigs/listings).  
  - `jobs/post` — Hiring Consultant (if they later post a job).  
  - Angel subdomain pages: need config for `/angel/*` (already present) and any listing detail if on main app.

### Flow 5: Offer local service (become Angel)
- **Trigger:** User wants to offer local services.
- **Steps:** 1) Signup as Angel or switch. 2) Onboarding. 3) Post listing (jobs/post or angel flow). 4) Manage requests/earnings.
- **Success:** Listing live; can receive requests.
- **AI staffing:** `signup`, `onboarding`, `angel/*` (Service Provider Success Coach), `jobs/post`.

### Flow 6: Free accessible learning (Hero Gurus)
- **Trigger:** User (learner with disability or ally) wants free accessible learning.
- **Steps:** 1) Home → Hero Gurus. 2) Browse opportunities. 3) Request distance session. 4) Join session (video/phone/chat).
- **Success:** Session completed.
- **AI staffing:** `heroes/*` (Accessibility Advocate), `session/[id]/video`, `learning/schedule`.

### Flow 7: Volunteer as Hero
- **Trigger:** User wants to volunteer to teach for free.
- **Steps:** 1) Heroes hub → Volunteer. 2) Complete attestation (disability form if applicable). 3) Manage volunteered opportunities; see sessions.
- **Success:** Signed up as Hero; sessions scheduled.
- **AI staffing:** `heroes/*`, `attestation/disability`, `learning/schedule`, `guru/profile` (if they also have guru profile).

### Flow 8: Read topic content (subdomain)
- **Trigger:** User explores by topic (cooking, coding, etc.).
- **Steps:** 1) Hubs or direct subdomain (e.g. cooking.yoohoo.guru). 2) Read blog list → post. 3) Read news. 4) CTA: book guru or submit lead.
- **Success:** User reads content and optionally converts.
- **AI staffing:**  
  - `_apps/[subject]` — Content Hub Guide (already).  
  - `_apps/[subject]/blog` — “Blog list” (suggest posts, find teachers, contact).  
  - `_apps/[subject]/blog/[slug]` — “Reading a post” (related posts, book a guru, contact).

### Flow 9: Find expert by map
- **Trigger:** User wants to see experts/gigs on a map.
- **Steps:** 1) Home (map section) or Location search. 2) Set location/radius; filter gurus vs gigs. 3) Click marker → profile or gig detail. 4) Book or contact.
- **Success:** User finds and contacts expert or gig.
- **AI staffing:** `/` (Welcome — “use the map”), `location/search` — “Map search” (refine filters, go to browse).

### Flow 10: Match by AI
- **Trigger:** User wants personalized guru recommendations.
- **Steps:** 1) Browse or AI matchmaking. 2) Optional: Learning style assessment. 3) See matches. 4) Open profile → book.
- **Success:** User books a matched guru.
- **AI staffing:** `browse`, `ai/matchmaking`, `ai/learning-style-assessment` (all present).

### Flow 11: Book session (calendar)
- **Trigger:** User is on a guru profile and clicks Book session.
- **Steps:** 1) Book session page. 2) See availability (when built) or pick time. 3) Confirm; pay if applicable. 4) Confirmation; add to calendar.
- **Success:** Session created; user sees it in schedule.
- **AI staffing:** `guru/[id]/book-session` (Booking assistant), `learning/schedule` (confirm upcoming).

### Flow 12: Join session (video)
- **Trigger:** Session start time; user clicks Join from email or dashboard.
- **Steps:** 1) session/[id]/video. 2) Allow camera/mic; join channel. 3) Video call. 4) End call.
- **Success:** Call completed.
- **AI staffing:** `session/[id]/video` — “Session video” (troubleshoot join, leave call, get help).

### Flow 13: Post a job (hire)
- **Trigger:** User wants to hire for a task/project.
- **Steps:** 1) Jobs → Post a job. 2) Fill form; optionally AI price helper. 3) Publish. 4) Review applicants (when built).
- **Success:** Job posted.
- **AI staffing:** `jobs`, `jobs/post`, `ai/price-recommendation` (all present).

### Flow 14: Apply to job / get hired
- **Trigger:** Guru or job-seeker views job listing.
- **Steps:** 1) Jobs list → open job. 2) Apply or message. 3) Client views applicant profile. 4) Book session or hire.
- **Success:** Application sent or session booked.
- **AI staffing:** `jobs`, `profiles/public`, `guru/[id]/book-session`.

### Flow 15: Manage learning schedule
- **Trigger:** User wants to see/manage upcoming sessions.
- **Steps:** 1) Dashboard or Learning schedule. 2) View upcoming/past. 3) Reschedule/cancel (when built) or join.
- **Success:** User stays on top of sessions.
- **AI staffing:** `learning/schedule` (already), `dashboard`.

### Flow 16: Track learning progress
- **Trigger:** User wants to see progress across learning.
- **Steps:** 1) Learning progress page. 2) View completed/ongoing; optionally link to schedule.
- **Success:** User sees progress.
- **AI staffing:** `learning/progress` — “Progress” (suggest next session, link to schedule).

### Flow 17: Edit my profile
- **Trigger:** User wants to update bio, skills, photo.
- **Steps:** 1) Profile or Dashboard. 2) Edit profile; optionally AI profile assistant. 3) Save. 4) Privacy/settings if needed.
- **Success:** Profile updated.
- **AI staffing:** `profile`, `settings`, `ai/profile-assistant` (all present).

### Flow 18: View public profile (others)
- **Trigger:** User clicked a guru from browse, jobs, or map.
- **Steps:** 1) profiles/public or guru/[id]. 2) Read bio, skills, ratings. 3) Book session or contact.
- **Success:** User books or contacts.
- **AI staffing:** `profiles/public` — “Viewing a guru profile” (Book session, Ratings, Back to browse).

### Flow 19: Account & security
- **Trigger:** User wants to change password, notifications, billing.
- **Steps:** 1) Settings. 2) Account / Privacy / Notifications / Billing tabs.
- **Success:** Settings saved.
- **AI staffing:** `settings` (already).

### Flow 20: Get help / contact
- **Trigger:** User has a question or issue.
- **Steps:** 1) Help or FAQ. 2) Find answer or 3) Contact form.
- **Success:** Answer found or message sent.
- **AI staffing:** `help`, `faq`, `contact` — each with prompt that can suggest next step (e.g. contact support, browse).

### Flow 21: Legal & trust
- **Trigger:** User clicks Privacy, Terms, Safety, Cookies.
- **Steps:** 1) Read page. 2) Optional: return to previous action.
- **Success:** User informed.
- **AI staffing:** `privacy`, `terms`, `safety`, `cookies` — short prompts; quick actions: Home, Help, Contact.

### Flow 22: Onboarding (new user)
- **Trigger:** Just signed up; redirect to onboarding.
- **Steps:** 1) Onboarding start. 2) Profile, categories, requirements, documents, payout (if provider), review. 3) Done → dashboard.
- **Success:** Onboarding complete.
- **AI staffing:** `onboarding` — “Onboarding” (explain current step, what’s next, skip/cancel policy).

### Flow 23: Guru earnings & payouts
- **Trigger:** Guru wants to see earnings or cash out.
- **Steps:** 1) Guru profile or dashboard. 2) Earnings (when built); Stripe Connect / payouts.
- **Success:** Guru sees balance or completes payout.
- **AI staffing:** `guru/profile`, future `guru/earnings` — Guru Success Coach (earnings, Connect).

### Flow 24: Disputes & compliance
- **Trigger:** User has a dispute or must complete compliance.
- **Steps:** 1) Disputes page or compliance. 2) Submit or resolve.
- **Success:** Dispute submitted or compliance done.
- **AI staffing:** `disputes`, `compliance` — “Disputes” / “Compliance” (steps, contact support).

### Flow 25: Admin platform ops
- **Trigger:** Admin logs in and goes to admin.
- **Steps:** 1) Admin dashboard. 2) Users, content, analytics, site text, etc.
- **Success:** Admin completes task.
- **AI staffing:** `admin/*` (already).

---

## Coverage matrix: route ↔ flows

| Route / path pattern | Flows that use this route | Config exists? |
|----------------------|---------------------------|----------------|
| `/` | 1, 9 | ✅ |
| `/signup` | 3, 5, 22 | ✅ |
| `/login` | (access) | ✅ |
| `/dashboard` | 3, 12, 15, 17, 23 | ✅ |
| `/browse` | 2, 4, 9, 10, 14 | ✅ |
| `/skills` | 2, 10 | ✅ |
| `/skills/[subject]` | 2, 8 | ❌ → add |
| `/hubs` | 8 | ❌ → add |
| `/how-it-works` | 1, 3, 5 | ❌ → add |
| `/pricing` | 1, 3, 13 | ❌ → add |
| `/about` | 1 | ❌ → add |
| `/contact` | 20, 21 | ❌ → add |
| `/help` | 20 | ❌ → add |
| `/faq` | 20 | ❌ → add |
| `/privacy`, `/terms`, `/safety`, `/cookies` | 21 | ❌ → add |
| `/profile` | 3, 17 | ✅ |
| `/profiles/public` | 2, 14, 18 | ❌ → add |
| `/guru/profile` | 3, 23 | ✅ |
| `/guru/[id]/book-session` | 2, 11, 14 | ❌ → add |
| `/guru/[id]/ratings` | 2, 18 | ❌ → add |
| `/session/[id]/video` | 2, 6, 12 | ❌ → add |
| `/learning/schedule` | 2, 6, 11, 12, 15 | ✅ |
| `/learning/progress` | 16 | ❌ → add |
| `/onboarding` | 3, 5, 22 | ❌ → add |
| `/jobs` | 4, 13, 14 | ✅ |
| `/jobs/post` | 5, 13 | ✅ |
| `/angel/*` | 4, 5 | ✅ |
| `/heroes/*` | 6, 7 | ✅ |
| `/_apps/[subject]` | 8 | ✅ |
| `/_apps/[subject]/blog` | 8 | ❌ → add |
| `/_apps/[subject]/blog/[slug]` | 8 | ❌ → add |
| `/ai/matchmaking` | 10 | ✅ |
| `/ai/learning-style-assessment` | 10 | ❌ → add |
| `/ai/profile-assistant` | 17 | ❌ → add |
| `/ai/price-recommendation` | 13 | ❌ → add |
| `/location/search` | 9 | ❌ → add |
| `/settings` | 17, 19 | ✅ |
| `/admin/*` | 25 | ✅ |
| `/attestation/disability` | 7 | ❌ → add |
| `/disputes` | 24 | ❌ → add |
| `/compliance` | 24 | ❌ → add |
| `/blog` | 8 | ❌ → add |
| `/blog/[slug]` | 8 | ❌ → add |

---

## Implementation: route configs to add

The following route configs must be added or updated so that every flow step is staffed:

1. **`/how-it-works`** — Explain platform; next: Signup, Browse, Pricing.
2. **`/pricing`** — Pricing and plans; next: Signup, Coach, Angel, Heroes.
3. **`/about`** — Mission; next: How it works, Contact, Signup.
4. **`/contact`** — Contact form; next: Help, FAQ, Home.
5. **`/help`** — Help center; next: FAQ, Contact, Dashboard.
6. **`/faq`** — FAQ; next: Contact, Help, Browse.
7. **`/privacy`**, **`/terms`**, **`/safety`**, **`/cookies`** — Legal/trust; next: Home, Contact.
8. **`/onboarding`** — Onboarding; next step and Back.
9. **`/hubs`** — Content hubs list; next: Skills, Browse, subdomain links.
10. **`/skills/[subject]`** (e.g. `/skills/coding`) — Skill category; next: Browse, AI match, Hubs.
11. **`/profiles/public`** — Viewing guru; next: Book session, Ratings, Browse.
12. **`/guru/[id]/book-session`** — Booking; next: Schedule, Dashboard, Help.
13. **`/guru/[id]/ratings`** — Ratings; next: Book session, Back to profile.
14. **`/session/[id]/video`** — In-session video; next: End call, Help.
15. **`/learning/progress`** — Progress; next: Schedule, Browse, Dashboard.
16. **`/location/search`** — Map search; next: Browse, Filters, Home.
17. **`/_apps/[subject]/blog`** — Subdomain blog list; next: Find teachers, Contact, Skills.
18. **`/_apps/[subject]/blog/[slug]`** — Subdomain post; next: More posts, Book guru, Contact.
19. **`/blog`** — Main blog; next: Hubs, Browse, Contact.
20. **`/blog/[slug]`** — Main blog post; next: Blog list, Browse.
21. **`/ai/learning-style-assessment`** — Quiz; next: Matchmaking, Browse.
22. **`/ai/profile-assistant`** — Profile AI; next: Profile, Dashboard.
23. **`/ai/price-recommendation`** — Price AI; next: Post job, Jobs list.
24. **`/attestation/disability`** — Attestation; next: Heroes, Dashboard.
25. **`/disputes`** — Disputes; next: Help, Dashboard.
26. **`/compliance`** — Compliance; next: Dashboard, Help.

Place these in `routeConfig.ts` **before** the default fallback (`path: '*'`) so they match in the correct order. Use `matchPattern` for dynamic segments (e.g. `/[id]/`, `/[subject]/`) so one config covers all IDs/subjects.

---

## Implementation status (Builder)

- **Flow inventory:** 25 flows documented above with steps and success states.
- **Route configs:** All listed routes have been added to `apps/main/config/routeConfig.ts` with:
  - **Quick actions** appropriate to each page (and auth/role where needed).
  - **System prompts** so the ContextNavigator AI can guide that step of the flow.
- **Home prompt:** Updated so that "Where should I go?" / "What can I do here?" maps users to Coach, Angel's List, Hero Gurus, Hubs, and map.
- **Pricing:** Quick actions for SkillShare / Angel's List / Hero Gurus use full subdomain URLs; `router.push` will navigate away. If you prefer to keep users on the main app, change those to `/browse`, `/jobs`, and `/heroes` (or equivalent internal routes).
- **External links:** Any quick action with `https://` will leave the app when clicked. For in-app experience, use internal paths and subdomain routing as needed.
