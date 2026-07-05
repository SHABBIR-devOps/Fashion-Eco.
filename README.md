# FORME — Fashion E-Commerce Frontend

A production-structured React + Tailwind CSS frontend for a fashion e-commerce
site, including AI virtual try-on UI. Built with Vite, React Router, and
Zustand. All styling is inline Tailwind utility classes (no CSS modules).

## Stack

- **React 18** + **Vite** — app shell and dev server
- **Tailwind CSS** — utility-first styling, fully inline in JSX, custom
  design tokens in `tailwind.config.js` (colors: `paper`, `ink`, `cobalt`,
  `clay`; fonts: `display` (Fraunces), `body` (Inter), `mono` (Space Mono))
- **React Router v6** — routing, nested routes for `/profile/*`
- **Zustand** — global state (`src/store/*`), persisted to `localStorage`
  where relevant (cart, wishlist, auth session, saved try-on looks)
- **lucide-react** — icon set
- **axios** — configured client in `src/services/api.js`, ready to point at
  a real backend

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

```bash
npm run build      # production build to /dist
npm run preview    # preview the production build locally
```

## Project structure

The folder layout mirrors a typical production app:

```
src/
├── components/   # common/, layout/, home/, product/, cart/, checkout/,
│                 # wishlist/, review/, tracking/, virtualTryOn/
├── pages/        # one folder per route
├── routes/       # AppRoutes + PrivateRoute/GuestRoute/AdminRoute guards
├── services/     # mock API layer (see below) — one file per domain
├── store/        # Zustand stores — one per domain
├── hooks/        # thin hooks wrapping stores (useCart, useAuth, ...)
├── context/      # ThemeContext (dark mode), AuthContext
├── utils/        # formatPrice, formatDate, validators, constants, ...
├── data/         # mockData.js — products, categories, brands, reviews, orders
└── styles/       # tailwind.css, globals.css, animations.css
```

## Connecting a real backend

Every network-shaped call lives in `src/services/*.js` and currently reads
from `src/data/mockData.js` with a simulated delay (`mockDelay`), and uses
`localStorage` for anything that needs to persist (auth session, cart,
wishlist, saved looks). To connect a real Express/MongoDB API:

1. Set `VITE_API_BASE_URL` in `.env` to your API's base URL.
2. In each `src/services/*.js` file, replace the mock body with a call
   through the shared `api` client, e.g.:
   ```js
   // before
   return mockDelay(PRODUCTS);
   // after
   const { data } = await api.get("/products", { params: filters });
   return data;
   ```
3. No component or page needs to change — they all call the service
   functions, never the mock data directly.

The **Virtual Try-On** flow (`src/services/virtualTryOnService.js`) is
written the same way: swap `generateTryOn` to call your image-generation /
try-on model endpoint and return `{ resultUrl }`.

## Suggested next steps (backend)

- Express routes + MongoDB schemas for `products`, `users`, `orders`, `reviews`
- JWT auth (the frontend already stores/attaches a bearer token)
- Stripe (or similar) for real payments in `paymentService.js`
- Cloud storage (S3/Cloudinary) for `uploadService.js` and try-on photos

## Design notes

Visual identity: warm paper background, Fraunces serif display type, Space
Mono for prices/fabric tags (styled like real garment swing-tags), one
cobalt accent for interactive moments, clay reserved for sale flags only.
Dark mode is wired via `ThemeContext` + Tailwind's `class` strategy.
