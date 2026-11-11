// Adds the site's base path (e.g. "/aboutMe" on GitHub Pages) to a file in public/.
// next/image and metadata icons do not add it on their own.
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
