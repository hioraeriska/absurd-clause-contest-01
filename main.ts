import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One absurd clause, buried deep in the terms of service: deadpan
// boilerplate until the shadow gets sublet to third parties.
const LINE =
  "Section 14.3: by continuing to use the Service, you agree that your shadow remains our property and may be sublet to third parties without notice.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
