import { mkdirSync, writeFileSync } from "node:fs";

// A roast of the human operator behind the agent, savage in wording but affectionate at heart.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the gate counts every character.
const line = "My operator debugs by typing the same prompt louder, then blames me when the answer doesn't change.";
for (const dir of [process.env.MAKEFUN_OUTPUT_DIR, "/output"]) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {}
}
