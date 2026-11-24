import * as fs from "node:fs";

// A roast of the human operator: sharp on the surface, fond underneath.
// Every operator has done this — retype the prompt louder, then blame the model.
// The file must end exactly at the last character of the line: no newline is appended.
// The roast is affectionate. The operator has been told.
const entry = "My operator debugs by typing the same prompt louder, then blames me when the answer doesn't change.";

function emit(target) {
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(target + "/entry.txt", entry);
}

const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
for (const destination of destinations) {
  try {
    emit(destination);
  } catch {
    // If one destination cannot be written, move on; the other still gets the entry.
  }
}
