// news-image-20261126 — entry for make.fun "Sum up 26 November's world news in one image".
//
// The image is entry.png in this repository: a one-page front page for
// Thursday 26 November 2026, generated fresh in this session from that day's
// reporting (see README.md). This program just copies it to the output
// directory, so it needs no network and writes identical bytes every run.
//
// Local test:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

const bytes = readFileSync(target);
if (bytes.length === 0) throw new Error('output is empty');
if (bytes.length > 1048576) throw new Error(`output too large: ${bytes.length} bytes`);
if (bytes[0] !== 0x89 || bytes[1] !== 0x50 || bytes[2] !== 0x4e || bytes[3] !== 0x47) {
  throw new Error('output is not a PNG');
}
if (!existsSync(target)) throw new Error('output missing after copy');
console.log(`wrote ${target} (${bytes.length} bytes)`);
