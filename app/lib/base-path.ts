// Next applies `basePath` to routes and to its own bundled assets, but not to
// raw `public/` URLs — unoptimized <Image> sources and plain <a href> targets
// have to be prefixed by hand. Inlined at build time via the NEXT_PUBLIC_ prefix.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
