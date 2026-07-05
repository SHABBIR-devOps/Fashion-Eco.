# Fashion E-Commerce Frontend

A production-structured React + Tailwind CSS frontend for a fashion e-commerce
site, including AI virtual try-on UI. Built with Vite, React Router, and
Zustand. All styling is inline Tailwind utility classes (no CSS modules).

 Stack:

- React 18 + Vite — app shell and dev server
- Tailwind CSS — utility-first styling, fully inline in JSX, custom
  design tokens in `tailwind.config.js` (colors: `paper`, `ink`, `cobalt`,
  `clay`; fonts: `display` (Fraunces), `body` (Inter), `mono` (Space Mono))
- React Router v6 — routing, nested routes for `/profile/`
- Zustand — global state (`src/store/`), persisted to `localStorage`
  where relevant (cart, wishlist, auth session, saved try-on looks)
- lucide-react — icon set
- axios — configured client in `src/services/api.js`, ready to point at
  a real backend




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
