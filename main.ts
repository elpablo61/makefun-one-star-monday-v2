// One Star for Monday — make.fun entry
// Writes the one-line review to $MAKEFUN_OUTPUT_DIR/entry.txt
// Gate: UTF-8 text, 1-180 chars, at most 25 words, single line, plain text.

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. The waiter took my order, nodded, and brought me five days of work. I asked for the manager. He was me.";

const words = LINE.trim().split(/\s+/).length;
if (LINE.length < 1 || LINE.length > 180) throw new Error(`entry ${LINE.length} chars, gate needs 1-180`);
if (words > 25) throw new Error(`entry ${words} words, gate needs at most 25`);
if (LINE.includes("\n")) throw new Error("entry must be a single line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
