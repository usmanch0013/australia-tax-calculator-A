import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "../lib/guides/calculators");

const replacements = [
  [/This guide explains how/g, "Here's how"],
  [/This guide explains/g, "We'll cover"],
  [/Whether you are/g, "If you're"],
  [/Whether you're comparing/g, "Comparing"],
  [/In Australia, /g, ""],
  [/comprehensive/gi, "full"],
  [/instantly/gi, "right away"],
  [/leverage/gi, "use"],
  [/utilise/gi, "use"],
  [/utilize/gi, "use"],
  [/It is important to note that /gi, ""],
  [/Additionally, /g, "Also, "],
  [/Furthermore, /g, "Plus, "],
  [/In conclusion, /gi, "To wrap up, "],
  [/Complete Guide to /g, ""],
  [/Complete Guide for /g, "Guide for "],
  [/Complete Guide/g, "Guide"],
  [/Our ([a-z-]+) calculator/gi, "The $1 calculator above"],
  [/the most complete/gi, "a solid"],
  [/ensures you/g, "helps you"],
  [/landscape/g, "picture"],
  [/navigate/g, "work through"],
  [/robust/g, "reliable"],
  [/seamlessly/g, "easily"],
  [/delve into/gi, "look at"],
  [/crucial/g, "important"],
  [/paramount/g, "key"],
];

let total = 0;
for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
  const fp = path.join(dir, file);
  let text = fs.readFileSync(fp, "utf8");
  const before = text;
  for (const [from, to] of replacements) {
    text = text.replace(from, to);
  }
  if (text !== before) {
    fs.writeFileSync(fp, text);
    total++;
  }
}
console.log(`Humanized ${total} guide files.`);
