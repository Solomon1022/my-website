# Bulby English - AI-Powered English Learning Website in Black-and-White Manga Style

> ⚠️ This project is under active development. Some features may not be fully complete. Star it to follow the progress!

## About the Project
A pure black-and-white manga-style English learning website. Users choose a customized anime companion and learn through AI conversations. It supports multiple exam modes from elementary school to GRE, as well as two learning methods: Deep Learning and Entertainment-Immersive Learning.

## Tech Stack
- Frontend: Vanilla HTML/CSS/JS, manga-style UI
- AI: DeepSeek API (V3 chat model)
- Backend: Vercel Serverless Functions (Node.js)
- Deployment: GitHub + Vercel automatic deployment
- Storage: localStorage (data isolated by companion)

## Core Features
- ✅ Anime companion selection with distinct character personalities
- ✅ All-level exam modes (Elementary → GRE/IELTS/BEC)
- ✅ Dual learning modes: Deep Learning / Entertainment-Immersive
- ✅ Real-time AI chat with auto-correction and keyword collection
- ✅ Chat history management (separate databases per companion)
- ✅ Vocabulary book (click to collect + panel management)
- ✅ Global companion Bulby (draggable + interactive)

## Highlights
1. Original black-and-white manga UI with a unique visual style
2. Custom-designed System Prompt engineering for precise control of AI output formats
3. Separated frontend and backend architecture, serverless deployment, zero-cost operation
4. Full-stack independent development, from design to launch completed by one person

## Data & Privacy
- This website does not set up a user account system and does not collect any personal identification information.
- All AI conversation records are stored only in the user's browser local storage (localStorage) and can be cleared at any time.
- AI requests are forwarded through a backend proxy; no chat content is stored on the server.
- No third-party tracking, advertising, or user behavior analytics SDKs are integrated.
- All cartoon character images are original hand-drawn creations and are protected by copyright.

## Local Development
```bash
git clone https://github.com/Solomon1022/my-website.git
cd my-website
node local-proxy.js    # Start the local AI proxy (fill in your API Key)

Then open learn.html with Live Server or simply open it directly in your browser.

Note: For local testing, change the fetch address in learn.html to http://localhost:3000/api/deepseek-proxy, and change it back to /api/deepseek-proxy before committing.

License
This project is licensed under the MIT License.

Contact
For any questions or collaboration inquiries, feel free to reach out via GitHub Issues.