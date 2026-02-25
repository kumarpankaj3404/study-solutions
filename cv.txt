# Project Overview: Study Solutions

## Description
Study Solutions is a cutting-edge, voice-first AI educational platform designed to provide personalized, real-time tutoring through interactive "Companions." Unlike traditional text-based AI chatbots, this platform leverages advanced voice synthesis and recognition technologies to create natural, conversational learning experiences. Each AI Companion is a specialized persona tailored to specific subjects like Mathematics, Science, History, Coding, and Languages, capable of guiding students through complex topics with patience and expertise.

## Core Value Proposition
- **Accessible Personalized Education:** Democratizes access to high-quality, one-on-one tutoring available 24/7.
- **Interactive Voice Learning:** Moves beyond static text to engaging, voice-based dialogue, mimicking real human interaction which aids retention and engagement.
- **Subject-Specific Expertise:** Tutors are not generic; they are fine-tuned with specific instructions and personas (e.g., "Countsy the Number Wizard" for Math, "Codey" for logic) to maximize effectiveness in their domain.

## Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4, clsx, tailwind-merge, class-variance-authority (cva)
- **UI Components:** Radix UI primitives, Lucide React icons
- **Animations:** Lottie React (for voice visualizations)
- **Fonts:** Bricolage Grotesque (via next/font)

### Backend & Services
- **Database:** Supabase (PostgreSQL) for storing companions, user sessions, bookmarks, and history.
- **Authentication:** Clerk (Next.js SDK) for secure user management and authentication.
- **Voice AI Infrastructure:**
  - **Orchestration:** Vapi (Web SDK) for managing the real-time conversation loop.
  - **LLM:** OpenAI GPT-4 (for intelligence and conversation generation).
  - **Transcriber:** Deepgram Nova-3 (for high-accuracy speech-to-text).
  - **Voice Synthesis:** ElevenLabs & Azure (for high-quality, lifelike text-to-speech).
- **Monitoring:** Sentry (Next.js SDK) for error tracking and performance monitoring.

### Utilities
- **Validation:** Zod + React Hook Form
- **Data Fetching:** Server Actions (Next.js)

## Key Features
1.  **AI Companions:** Browse and select from a diverse library of tutors. Each companion has a unique voice, style, and subject expertise.
2.  **Real-Time Voice Sessions:** Start instant voice calls with tutors. Visual feedback (soundwaves) and real-time transcription enhance the experience.
3.  **Session History:** Automatically logs all learning sessions, allowing students to review past interactions.
4.  **Progress Tracking:** "My Journey" section for tracking user activity and learning milestones.
5.  **Smart Filtering:** Search and filter companions by Subject (Math, Science, History, etc.) or Topic.
6.  **Subscription Tiers:**
    - **Free Tier:** Limited active companions (Default: 1, or tailored limits like 3 via permissions).
    - **Pro/Org Admin:** Unlocked access to more companions and advanced features.

## Technical Uniqueness
- **Voice-First Architecture:** Built extensively around the `Vapi` SDK, handling complex states like `CONNECTING`, `ACTIVE`, `SPEAKING`, and `MUTED` to ensure a seamless conversational flow.
- **Hybrid AI Model:** Combines the best-in-class models (GPT-4 for thoughts, Deepgram for hearing, 11Labs/Azure for speaking) into a single cohesive interface.
- **Dynamic Configuration:** Assistants are configured on-the-fly with specific system prompts ("Tutor Guidelines") that instruct the AI to behave as a teacher—breaking down topics, checking for understanding, and ignoring background noise.

## Project Metrics & Limits
- **Pagination:** Standard data fetching limit of **10 items** per page for lists and history.
- **Session Limits:**
    - Max duration per session: **30 minutes** (1800 seconds).
    - Silence timeout: **5 seconds** (assistant intervenes or waits).
- **User Tiers (Permissions):**
    - **Basic:** 1 Active Companion.
    - **Tier 1 (Feature Flag):** 3 Active Companions.
    - **Tier 2 (Feature Flag):** 10 Active Companions.
    - **Pro/Admin:** Unlimited/High limits.

## Directory Structure Highlights
- `/app`: Next.js App Router pages (Home, Companions, Sessions, Profile).
- `/lib/actions`: Server actions for database mutations (Supabase) and business logic.
- `/components`: Reusable UI components (CompanionCard, Voice visualizers, Forms).
- `/hooks`: Custom hooks for voice state management.
- `/constants`: Static data configuration (Subjects, Voice IDs, Theme Colors).
