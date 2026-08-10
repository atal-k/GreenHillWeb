import fs from "node:fs";
import path from "node:path";

const SERVICES_DIR = path.join(process.cwd(), "public", "images", "services");
const COVER_PATTERN = /^cover.*\.webp$/i;

/**
 * Server-only: scans public/images/services/*\/cover*.webp on disk and
 * returns their public paths, sorted by folder then filename. Dropping a
 * new `coverN.webp` into any services subfolder makes it appear in the
 * Home hero carousel on the next build/request — no code change needed.
 */
export function getServiceCoverImages(): string[] {
  if (!fs.existsSync(SERVICES_DIR)) return [];

  const categoryDirs = fs
    .readdirSync(SERVICES_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const covers: string[] = [];
  for (const dir of categoryDirs) {
    const files = fs
      .readdirSync(path.join(SERVICES_DIR, dir))
      .filter((file) => COVER_PATTERN.test(file))
      .sort();
    for (const file of files) {
      covers.push(`/images/services/${dir}/${file}`);
    }
  }
  return covers;
}
