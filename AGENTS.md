# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` / `ng serve` — dev server at `http://localhost:4200/`, auto-reloads on change.
- `npm run build` / `ng build` — production build (SSR + prerender) to `dist/ebenezer-church`.
- `npm run watch` — development-configuration build in watch mode.
- `npm test` / `ng test` — run unit tests via Karma/Jasmine (Chrome launcher).
  - Run a single spec by narrowing with Karma's `--include` or temporarily using `fdescribe`/`fit` in the spec file; there is no dedicated single-file CLI flag configured.
- `npm run serve:ssr:ebenezer-church` — run the built SSR server (`node dist/ebenezer-church/server/server.mjs`); requires `npm run build` first.
- `ng generate component pages/<name>` (or `directive|pipe|service|guard|interface|enum|module`) — scaffolds with SCSS styles by default (set in `angular.json`).

No lint script is currently configured in `package.json`.

## Architecture

Angular 18 standalone-components app (no NgModules) with Angular Universal SSR + prerendering.

- **Bootstrapping**: `src/main.ts` (browser) and `src/main.server.ts` (server) bootstrap `AppComponent` using `app.config.ts` / `app.config.server.ts`. `app.config.server.ts` merges `appConfig` with `provideServerRendering()`. `server.ts` is the Express entry point used for SSR serving (`CommonEngine`) and is also the file referenced by `serve:ssr:*`.
- **Routing**: all routes are declared in `src/app/app.routes.ts` and every page is lazy-loaded via `loadComponent`. Routes use Portuguese path segments (`/sobre`, `/oracao`, `/contribuir`, `/eventos`) matching the site's user-facing language; unknown paths redirect to `''`.
- **Folder convention** under `src/app/`:
  - `core/` — app-wide, non-UI concerns: `models/` (shared TypeScript interfaces, e.g. `church.model.ts`) and `services/` (injectable singletons, e.g. `youtube.service.ts`).
  - `pages/` — one folder per routed page (`home`, `about`, `prayer`, `give`, `events`), each a standalone component with its own `.ts`/`.html`/`.scss`/`.spec.ts`. Pages may have their own `components/` subfolder for page-scoped child components (e.g. `pages/home/components/live-banner/`).
  - `shared/components/` — components reused across pages (`header`, `footer`), wired directly into `AppComponent`.
- **State**: components use Angular signals (`signal()`, `.update()`) rather than RxJS subjects for local UI state (e.g. `HeaderComponent.isMenuOpen`, `YoutubeService.currentLive`). RxJS/`HttpClient` observables are still used for HTTP calls but exposed as signals where consumed by templates.
- **Styling**: SCSS per-component (`styleUrl`), global styles in `src/styles.scss`. Global design tokens (colors, font, border-radius) are defined as CSS custom properties on `:root` in `src/styles.scss` — prefer reusing/extending those `--color-*`/`--radius-*` variables over hardcoding new values in component SCSS. New components should keep the SCSS-per-component default (already set as the schematic default in `angular.json`).
- **`YoutubeService`** (`core/services/youtube.service.ts`) reads `youtubeApiKey`/`youtubeChannelId` from `src/environments/environment.ts` (prod) and `environment.development.ts` (dev), both currently left as literal placeholder strings (`'SUA_YOUTUBE_API_KEY'`, `'SEU_CHANNEL_ID'`) — flag this if asked to wire up real YouTube API credentials.
- **`GiveComponent`** (`pages/give/give.component.ts`) hardcodes `pixKey` as a placeholder string rather than reading it from anywhere — the untracked root `.env` (`CNPJ=...`) is not currently wired into the Angular build/runtime at all (no `dotenv`/env-file mechanism is configured). Flag this if asked to make the Pix key configurable or to actually use `.env`.
- **TypeScript config** is strict: `strict`, `strictTemplates`, `strictInjectionParameters`, `strictInputAccessModifiers`, `noImplicitReturns`, `noFallthroughCasesInSwitch` are all on — keep new code compliant with these.
