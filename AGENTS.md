# wanderlust — AGENTS.md

> Compact instruction file for future OpenCode sessions. Every line answers:
> "Would an agent likely miss this without help?"

## Commands

| Action | Command |
|---|---|
| Development server | `npm run dev` (uses Turbopack; `@tailwindcss/turbopack` in devDeps) |
| Production build | `npm run build` |
| Start production server | `npm run start` |
| Lint | `npm run lint` (ESLint + Next.js config) |
| TypeCheck | `npx tsc --noEmit` (tsconfig: `strict: true`, paths `@/*` → `./src/*`) |

## Architecture & Conventions

- **App Router**: Next.js 16.4.3 with `app/` directory (not pages router).
  - `src/app/page.tsx` — home route
  - `src/app/layout.tsx` — root layout with `Josefin_Sans` font (`next/font`)
  - `src/app/globals.css` — global CSS entry point for Tailwind
- **Route groups**: None currently; routes live directly under `app/`.
- **Font**: `next/font` optimizes and inlines `Geist` automatically. No external font loading needed.
- **Tailwindcss**: Configured via `components.json`:
  - `baseColor: "neutral"`, `cssVariables: true`
  - CSS output at `src/app/globals.css`
  - `components.json` also sets `style: "base-nova"` and `tsx: true, rsc: true`
- **shadcn/ui**: Component library with path aliases:
  - `@components` → `~/components`
  - `@utils` → `~/lib/utils`
  - `@ui` → `~/components/ui`
  - `@lib` → `~/lib`
  - `@hooks` → `~/hooks`
  - Run `npx shadcn@latest add <component>` to add new UI components.
- **Code highlighting**: `src/lib/highlighter.tsx` uses `shiki` with these languages pre-configured:
  `bash, css, diff, html, javascript, json, jsx, markdown, python, sql, tsx, typescript, yaml`
  Add new languages by importing them in the `languages` object.
- **React 19 + Next.js 16**: `reactCompiler: true` in `next.config.ts` — the React compiler is enabled.
  - Components may compile differently; expect `memo`/`forwardRef` to be handled automatically.
- **Path aliases**: `tsconfig.json` maps `@/` prefix to `./src/*`.
  - Import as `@/components/ui/button` instead of `../../components/ui/button`.

## High-Signal Gotchas

- **`npm run dev` starts Turbopack**, not Webpack. CSS is handled by `@tailwindcss/turbopack`. Do not configure Webpack loaders for CSS.
- **ESLint config** (`eslint.config.mjs`) extends `eslint-config-next/core-vitals` and `eslint-config-next/typescript`. Do not override the Next.js extends without reading the config first.
- **`reactCompiler: true`** means some JSX transforms happen at compile time. If you see unexpected behavior, check if the compiler is stripping something you need.
- **`strict: true`** in tsconfig — type errors will be caught. Run `npx tsc --noEmit` before committing.
- **No CI/CD config found** in this repo root. Verify deployment steps separately if needed.
- **`next/font`** (`Josefin_Sans`) is already configured in `layout.tsx`. Do not add another `next/font` instance without removing the existing one, or you'll get duplicate font declarations.

## Adding a New Page

1. Create `src/app/<page-name>/page.tsx` (or `src/app/<page-name>.tsx` for flat route).
2. Add Tailwind classes directly or use `cn` from `@/lib/utils`.
3. Run `npm run dev` to see changes via Turbopack.

## Adding a New shadcn/ui Component

```bash
npx shadcn@latest add <component-name>
```
This will update `components.json` and generate the component under `src/components/ui/`.

## Testing

- No test framework configured in `package.json` scripts.
- If tests are needed, add to `package.json` scripts and configure accordingly (Jest, Vitest, etc.).
- No fixture data, integration prerequisites, or snapshot workflows currently set up.