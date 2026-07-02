# Binazy Landing Page

A React landing page built with Vite, Tailwind CSS, and modern frontend tooling.

## Features

- React 19 with Vite for fast development and build performance
- Tailwind CSS for utility-first styling
- Client-side navigation with React Router
- Email form integration via EmailJS
- Swiper slider for testimonials or portfolio sections
- Modular component structure for `Hero`, `Services`, `Portfolio`, `Testimonials`, `FAQ`, and more

## Project structure

- `src/main.jsx` — app entry point
- `src/App.jsx` — main application layout and routes
- `src/Components/` — reusable UI sections and page content
- `src/index.css` — global styles
- `public/` — static assets

## Scripts

- `npm install` — install dependencies
- `npm run dev` — start the Vite development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the project

## Dependencies

- `react`, `react-dom`
- `react-router`, `react-router-dom`
- `tailwindcss`, `@tailwindcss/vite`
- `@emailjs/browser`
- `swiper`
- `lucide-react`, `react-icons`
- `react-hook-form`

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm run dev
```

3. Open the shown URL in your browser to preview the landing page.

## Notes

- Update EmailJS service, template, and user IDs in the form component before deployment.
- Customize content in `src/Components/` to match your brand and messaging.
