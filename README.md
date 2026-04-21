# OneAsk Site

Rebuilt from [oneask.co.uk](https://www.oneask.co.uk) using **Astro + Tailwind CSS + MDX**.

## Stack

- [Astro 4](https://astro.build) — static site generator
- [Tailwind CSS 3](https://tailwindcss.com) — utility-first CSS
- [MDX](https://mdxjs.com) — blog posts in Markdown

## Features

- Full site reconstruction of oneask.co.uk
- Bilingual: English (default) + Portuguese BR (`/pt-br`) with automatic browser language detection
- Responsive, mobile-first
- Blog powered by MDX content collections
- Comparison pages: vs Slido, Mentimeter, Poll Everywhere, SlideLizard
- Event join form linking to `admin.oneask.app`
- All images served locally from `public/images/`

## Local dev

```bash
npm install
npm run dev
# → http://localhost:4321
```

## Deploy (free options)

### Cloudflare Pages (recommended)

1. Push to GitHub (`rfarinazzo/oneask-site`)
2. Cloudflare Pages → Create project → Connect GitHub repo
3. Build command: `npm run build` | Output: `dist`

### Netlify

1. Push to GitHub
2. Netlify → Add new site → Import from Git
3. Build command: `npm run build` | Publish: `dist`

## Project structure

```
src/
├── components/     Header, Footer, Hero, Features, Testimonials, Pricing, ComparisonLayout
├── content/blog/   MDX blog posts
├── i18n/           en.ts + pt-br.ts translation strings
├── layouts/        BaseLayout, BlogLayout
└── pages/
    ├── index.astro         English home (auto-redirects PT-BR browsers)
    ├── pt-br/index.astro   Portuguese home
    ├── blog/               listing + [slug]
    └── vs/                 4 comparison pages
public/images/      All site images (downloaded from CDN)
```

## Adding blog posts

Create `src/content/blog/your-slug.mdx`:

```mdx
---
title: "Post title"
description: "Short description"
date: "2024-01-15"
image: "/images/your-image.jpg"
---

Your content here...
```
