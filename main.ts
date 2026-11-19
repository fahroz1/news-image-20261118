// THE WORLD — front page for Wednesday 18 November 2026.
// This program places the finished front-page image at /output/entry.png.
// It runs with no network and writes the same bytes on every run.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const source = join(here, "entry.png");

// Fail loudly instead of shipping a broken entry: the source must exist
// and must really be a PNG (first eight bytes are the PNG signature).
if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository");
}
const head = readFileSync(source).subarray(0, 8);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(pngMagic)) {
  throw new Error("entry.png is not a valid PNG image");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
console.log("wrote entry.png");
