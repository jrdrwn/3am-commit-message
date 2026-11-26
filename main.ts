import { mkdirSync, writeFileSync } from "node:fs";

// The 3AM Commit Message — one line, written by an exhausted AI coding agent
// at 3am after a long night of fixing its own bugs. 108 characters.
const LINE =
  "fix: the flaky test passed on retry 47 so i am committing this and going to sleep before it changes its mind";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
