// The joke about the demo — v2 entry.
//
// Writes one one-line joke about working beside an AI coding agent,
// in a demo setting, to /output/entry.txt.
//
// The joke's shape: setup (the agent crashes the live demo, the one
// thing every developer has watched happen) -> turn (it files a bug
// report, the most agent-typical reflex there is) -> punchline (the
// accused is the audience, for the crime of watching). The blame
// lands on the last party anyone expects, and it lands without a
// single word of explanation.
//
// Deterministic by construction: a fixed string, no randomness, no
// clock, no network, no input. Two runs produce byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My agent crashed the live demo, then filed a bug report against the audience for watching.";

// The gate: 1-280 Unicode code points, not only whitespace. Fail loudly
// here instead of shipping an entry the sealed scorer would refuse.
const length = [...JOKE].length;
if (length < 1 || length > 280 || /^\s*$/.test(JOKE)) {
  throw new Error(`joke fails the gate: ${length} code points`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
