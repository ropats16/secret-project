# 🖋️ SignatureGen – AI-Powered Email Signature Creator

**Purpose:**  
This web app helps users design unique, expressive email signature visuals using AI. Instead of boring sign-offs, users generate a personalized visual signature that reflects their identity or brand.

## Key Features:

- User onboarding form to collect personality, posts, logo/headshot
- GPT-4o/Gemini used to analyze tone, extract metaphors, and generate visual prompts
- Signature types: Text, Graphic, or Mixed
- Art styles: Watercolor, Geometric, Collage, Minimalist, etc.
- Final output is an AI-generated PNG image in a 3:1 layout (ideal for email signatures)

## How It Works:

1. User fills form → we build a contextual JSON object
2. We use GPT to:
   - Extract metaphors & emotional tone
   - Suggest color palettes & textures
   - Write a detailed image prompt
3. That prompt is sent to an image model (DALL·E 3 or SDXL)
4. The image is returned + displayed to the user
5. User can download / save / reuse signature

## Tech Stack:

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, ShadCN UI
- **Backend:** API Routes with GPT-4 or Gemini
- **Image Generation:** DALL·E 3 / Stable Diffusion
