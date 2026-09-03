# andalib-website

Astro source for the data platform / AI engineering consulting site.

## Structure

- `src/consts.ts` — all site copy (nav links, expertise cards, services,
  experience, contact options). Edit this file for content changes; you
  rarely need to touch component files just to update text.
- `src/components/` — one component per section. `ExpertiseCard.astro`
  holds the five custom SVG icon paths (platform / airflow / shield /
  schema / agent) in one place.
- `src/layouts/BaseLayout.astro` — shared `<head>`, fonts, global styles.
- `src/pages/index.astro` — assembles the page from components in order.
- `src/styles/global.css` — CSS variables (colors, fonts) and shared
  base styles (buttons, tags, section spacing).

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:4321

## Before deploying

1. Edit `src/consts.ts`:
   - `SOCIALS.github` — add your real GitHub URL
   - Blog/case-study content if you add a blog collection later
2. Edit `src/components/ContactSection.astro`:
   - Replace `YOUR_FORM_ID` with your real Formspree endpoint
3. Edit `astro.config.mjs`:
   - Set `site` to your actual domain
4. `public/CNAME` — replace `yourdomain.com` with your real domain

## Deploy to GitHub Pages

See the earlier setup guide (astro-github-pages-setup-guide.md) for the
full DNS + GitHub Actions steps. Summary:

```bash
git init
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git add .
git commit -m "Initial site"
git push -u origin main
```

Then enable GitHub Pages with source "GitHub Actions" and add the
deploy workflow from the setup guide.
