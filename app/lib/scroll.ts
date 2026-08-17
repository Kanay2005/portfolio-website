/**
 * Jumps to a section. No `behavior` is passed on purpose: the default ("auto")
 * defers to the CSS `scroll-behavior`, which globals.css sets to `smooth` and
 * drops back to instant under `prefers-reduced-motion`. Offsetting for the
 * fixed navbar is handled by `scroll-mt-*` on the sections.
 */
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView();
}
