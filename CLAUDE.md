# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Culqi Frontend is a Vue 3 + TypeScript single-page application that provides a UI for payment token creation and card information retrieval. It integrates with a backend API for authentication and card processing.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (with hot reload on http://localhost:8080)
npm run serve

# Build for production (output in dist/)
npm run build

# Lint and fix files
npm run lint
```

## Project Architecture

### Module-Based Structure

The application is organized into feature modules under `src/modules/`:

- **`auth/`** — Authentication flows (login, register, token management)
  - `pages/` — LoginPage, RegisterPage components
  - `stores/` — Pinia store with auth state and actions
  - `actions/` — Async login/register/check-auth functions
  - `guards/` — Route guards for protected pages
  - `interfaces/` — TypeScript interfaces (User, AuthStatus, etc.)
  - `layouts/` — AuthLayout component wrapping auth pages

- **`landing/`** — Main feature modules (cards/tokens)
  - `cards/pages/` — createToken, cardInformation pages
  - `cards/services/` — CardService for API calls
  - `layout/` — LandingLayout component

- **`shared/`** — Reusable components and pages
  - `components/` — CustomLink, NavbarCulqi, etc.
  - `pages/` — NoPageFound 404 page

### Routing

Routes are defined in `src/router/router.ts` using Vue Router 4 with hash history mode. Routes are lazy-loaded via dynamic imports for better code splitting. The landing layout is the main layout with nested routes; auth routes have their own AuthLayout.

### State Management

State is managed with **Pinia** (setup in `src/modules/auth/stores/auth.store.ts`):
- Composition API style with `defineStore`
- Auth state includes user, token, authStatus
- Token is persisted to localStorage using `@vueuse/core`'s `useLocalStorage`
- Actions: login, register, logout, checkAuthStatus

### API Layer

- **`src/api/tesloApi.ts`** — Axios instance with Bearer token injection in request interceptor
- Base URL from `process.env.VITE_TESLO_API_URL`
- Token read from localStorage each request
- **`src/api/lamba-functions.ts`** — Lambda function integration (AWS)

### Key Dependencies

- **Vue 3** + Vue Router 4 — UI framework and routing
- **TypeScript** — Type safety
- **Pinia** — State management
- **Axios** — HTTP client
- **Tailwind CSS** — Utility-first styling
- **vee-validate** + **yup** — Form validation
- **@vueuse/core** — Composition utilities (useLocalStorage)
- **vue-toastification** — Toast notifications (imported but not yet integrated in main.ts)

## Key Files

- `src/main.ts` — App bootstrap (router setup only; Pinia not yet initialized)
- `tsconfig.json` — Path alias `@/*` → `src/*`, strict mode enabled
- `src/shims-vue.d.ts` — TypeScript module declaration for .vue files (required for Vue CLI + TS)
- `src/styles.css` — Global CSS (Tailwind directives)

## Development Notes

### Type Safety

- TypeScript is in strict mode; all modules define explicit interfaces
- Vue 3 Composition API with typed stores
- Path alias `@` is configured for cleaner imports

### Form Validation

vee-validate is integrated for form validation (used in auth pages); schemas use yup for schema validation. Error messages can be customized at the component level.

### Token Management

- Auth tokens are stored in localStorage with 15-minute expiration (backend)
- Bearer token is automatically injected in all axios requests via interceptor
- On page reload, `checkAuthStatus` should verify token validity (currently not called in main.ts—consider adding)

### Styling

- Tailwind CSS is configured for utility-first styling
- Global styles in `src/styles.css`
- Component-scoped styles in .vue `<style>` blocks

## Common Tasks

**Add a new page:** Create `.vue` file in `modules/<feature>/pages/`, add route in `router/router.ts`, create supporting store/services as needed.

**Add API integration:** Create service in `modules/<feature>/services/`, use `tesloApi` instance to make requests, dispatch actions to Pinia store.

**Add a route guard:** Create file in `modules/auth/guards/`, implement guard logic, register in route definition.

**Validate form input:** Use vee-validate `useForm` hook with yup schema in component.

## Known Issues / TODOs

- Pinia not initialized in `main.ts` — add `createPinia()` and `.use(createPinia())` to app setup if using stores
- vue-toastification imported but not integrated — integrate if needed for UI feedback
- `checkAuthStatus` not called on app mount — add if backend token verification is required
- Route definitions have duplicate entries for `/createToken` (same component, different names); consider cleaning up
