# Portfolio Website

Personal portfolio for Kanay Gupta — a single-page Next.js site deployed as a
static export to GitHub Pages at
[kanay2005.github.io/portfolio-website](https://kanay2005.github.io/portfolio-website).

## Getting started

Requires Node 20.9+ (see `.nvmrc`).

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server with hot reload                     |
| `npm run build`     | Static export to `out/`                        |
| `npm run lint`      | ESLint                                         |
| `npm run typecheck` | `tsc --noEmit`                                 |

## Editing content

Page content is data, not markup — everything lives in `app/data/`:

| File            | Contents                                              |
| --------------- | ----------------------------------------------------- |
| `site.ts`       | Name, bio, contact links, nav items                    |
| `projects.ts`   | Project cards                                          |
| `education.ts`  | Degrees and coursework                                 |
| `experience.ts` | Roles and achievements                                 |
| `tech.ts`       | Technology → logo map, and the skills grid order       |

Project `tags` and the skills list are typed against `tech.ts`, so a name with
no matching logo fails the build rather than rendering a broken image.

Adding a project image: drop a WebP into `public/`, sized to about 1200px on its
long edge — GitHub Pages serves these as-is, with no image optimizer in front.

## Deployment

Pushing to `main` triggers `.github/workflows/nextjs.yml`, which lints, type
checks, builds, and publishes `out/` to GitHub Pages.

Deployment settings live in `next.config.ts` (`output: "export"`, `basePath`,
`images: { unoptimized: true }`). The workflow supplies only
`NEXT_PUBLIC_BASE_PATH`, the `/portfolio-website` prefix the Pages URL needs, so
a local build produces the same site rooted at `/`.

Because that prefix is not applied to `public/` URLs automatically, reference
those through `withBasePath()` (`app/lib/base-path.ts`) or the `AssetImage`
component rather than hardcoding paths.
