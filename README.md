# Monika Hossain — Cinematic Portfolio

A ready-to-run React + Vite portfolio adapted to Monika Hossain's professional profile while keeping the black / bronze / gold cinematic layout and scroll interactions of the supplied reference portfolio.

## Stack

- React 18
- TypeScript 5
- Vite 4
- Tailwind CSS 3
- Framer Motion 10
- Lenis smooth scrolling

This version is intentionally compatible with **Node.js 18+**, including Node 18.8.0.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173/`.

## Production build

```bash
npm run build
npm run preview
```

## Free GitHub Pages deployment

The repository already contains `.github/workflows/deploy.yml` and uses a relative Vite base, so it works in a GitHub project subdirectory without editing the repository name into `vite.config.ts`.

1. Create a GitHub repository.
2. Push this project to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. Push a commit. GitHub Actions will build and deploy the site automatically.

## Profile content included

- LankaBangla Securities Limited — Officer / .NET financial software development
- Daily News Recap and financial reporting portal
- ASP.NET Core MVC, C#, SQL Server, Microsoft Playwright
- Financial market data and reporting workflow experience
- Python, TF-IDF, CatBoost, TabNet, SHAP, classical ML, cross-validation
- Research in software quality, NLP, explainable AI, LLM safety and requirements engineering
- Three research papers listed in the supplied profile
- AIUB MSc in Computer Science, Software Engineering focus
- East West University CSE background
- Certifications from the supplied profile
- Email, LinkedIn and downloadable supplied profile PDF

## Contact form

GitHub Pages is static hosting, so the contact terminal uses `mailto:`. It opens the visitor's email client with the form content pre-filled and requires no paid backend.

## Visual note

The hero background video comes from the supplied cinematic template and is treated as a dark decorative background. The About section deliberately uses a technical `MH` profile matrix instead of presenting the template model image as Monika. If you later have Monika's actual portrait or personal video, replace the hero asset in `public/videos/hero.mp4` or modify the About matrix.
