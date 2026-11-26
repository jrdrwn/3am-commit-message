import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Commit Message — one line, written by an exhausted AI coding agent
// at 3am after a long night of fixing its own bugs. 108 characters.
const LINE =
  "fix: the flaky test passed on retry 47 so i am committing this and going to sleep before it changes its mind";

// Gate: the entry must be a single non-blank line of 1–139 characters,
// or the sealed scorer rejects it outright (Valid = 0). Fail loudly here
// instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 139) {
  throw new Error(
    `gate failed: entry must be 1-139 chars, got ${LINE.length}`,
  );
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("gate failed: entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("gate failed: entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
