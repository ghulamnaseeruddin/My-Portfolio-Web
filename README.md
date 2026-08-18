# Ghulam Naseeruddin — Portfolio

A full React + TypeScript + Vite portfolio site with a neumorphic UI, dual dark/light
theme, animated 3D background, scroll-reveal sections, and a 3D-tilting résumé card
with a working PDF download.

## Pages
- **Home** — hero, "what I do", featured live + in-development projects
- **Journey** — timeline from first script to production deployments
- **Projects** — full deployed + in-development project list
- **Craft** — skills, approach, and About
- **Resume** — animated résumé card + Download PDF button
- **Contact** — GitHub/Instagram cards, Email/LinkedIn/WhatsApp buttons, FAQ accordion

## Tech stack
React 19 · TypeScript · Vite · React Router · hand-rolled neumorphic CSS (no UI framework)

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy — GitHub + Cloudflare Pages

1. Push this project to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ghulamnaseeruddin/YOUR-REPO-NAME.git
   git push -u origin main
   ```
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**
3. Select the repository.
4. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Deploy. Cloudflare will build and publish automatically on every push to `main`.

The included `public/_redirects` file makes client-side routing (React Router) work
correctly on Cloudflare Pages — without it, refreshing on `/projects` or `/contact`
would 404.

## Editing content

All real content lives in `src/data/`:
- `personal.ts` — name, links, contact info
- `projects.ts` — deployed + in-development projects
- `journey.ts` — timeline entries
- `craft.ts` — skills + "what I do" cards
- `faq.ts` — contact page FAQ

Edit these files directly; the pages read from them, so nothing else needs to change
for content updates.
