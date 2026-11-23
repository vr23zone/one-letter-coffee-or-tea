import { mkdirSync, writeFileSync } from "node:fs";

// The one letter this entry sends: "A" for coffee.
const LETTER = "A";

mkdirSync("/output", { recursive: true });

// Write exactly one byte, "A", with no trailing newline.
writeFileSync("/output/entry.txt", LETTER, "utf8");
