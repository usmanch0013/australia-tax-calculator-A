import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../lib/guides/calculators"
);

const replacements = [
  [/This guide explains how/g, "Here's how"],
  [/This guide explains/g, "We'll walk through"],
  [/Whether you are/g, "If you're"],
  [/Whether you're/g, "If you're"],
  [/In Australia, /g, ""],
  [/In the Australian context, /gi, ""],
  [/comprehensive/gi, "full"],
  [/instantly/gi, "right away"],
  [/leverage/gi, "use"],
  [/utilise/gi, "use"],
  [/utilize/gi, "use"],
  [/It is important to note that /gi, ""],
  [/It is worth noting that /gi, ""],
  [/Additionally, /g, "Also, "],
  [/Furthermore, /g, "Plus, "],
  [/In conclusion, /gi, "Bottom line: "],
  [/Complete Guide to /g, ""],
  [/Complete Guide for /g, "Guide for "],
  [/Complete Guide/g, "Guide"],
  [/Our ([a-z-]+) calculator/gi, "The calculator above"],
  [/our ([a-z-]+) calculator/gi, "the calculator above"],
  [/the most complete/gi, "a solid"],
  [/ensures you/g, "helps you"],
  [/landscape/g, "picture"],
  [/navigate/g, "work through"],
  [/robust/g, "reliable"],
  [/seamlessly/g, "easily"],
  [/delve into/gi, "look at"],
  [/crucial/g, "important"],
  [/paramount/g, "key"],
  [/approximately/gi, "about"],
  [/Consider an employee/g, "Say you"],
  [/Consider a/g, "Say a"],
  [/The most frequent error/g, "A common mistake"],
  [/Employees also often/g, "People also"],
  [/It is essential/gi, "It helps"],
  [/sound financial planning/g, "sensible budgeting"],
  [/mandatory deductions/g, "deductions your employer takes out"],
  [/progressive tax system/g, "tiered tax system"],
  [/Australian Taxation Office/g, "ATO"],
  [/Australian workers/g, "Aussie workers"],
  [/Australian employees/g, "Aussie employees"],
  [/Australian income tax/g, "income tax"],
  [/ — /g, " — "], // keep em dashes
  [/utilising/gi, "using"],
  [/commence/g, "start"],
  [/whilst/g, "while"],
  [/amongst/g, "among"],
  [/whilst/g, "while"],
  [/in order to/gi, "to"],
  [/in regards to/gi, "about"],
  [/with regards to/gi, "about"],
  [/prior to/gi, "before"],
  [/subsequently/gi, "then"],
  [/nevertheless/gi, "still"],
  [/therefore/gi, "so"],
  [/hence/gi, "so"],
  [/thus/gi, "so"],
  [/pertaining to/gi, "about"],
  [/facilitate/gi, "help"],
  [/optimise/gi, "improve"],
  [/optimizing/gi, "improving"],
  [/demonstrates/g, "shows"],
  [/illustrates/g, "shows"],
  [/pertains to/g, "is about"],
  [/individuals/g, "people"],
  [/employed persons/g, "employees"],
  [/Frequently Asked Questions/g, "Common questions"],
  [/for Australian workers/g, "for Aussie workers"],
  [/for Australian employees/g, "for Aussie workers"],
  [/The standard calculator above/g, "The calculator above"],
  [/Try our/g, "Try the"],
  [/using our/g, "using the"],
  [/on this site/g, "here"],
  [/on this page/g, "here"],
  [/right away\./g, "in seconds."],
  [/gives you an up-to-date estimate/g, "gives you a current estimate"],
  [/provides the most detailed/g, "shows a detailed"],
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
console.log(`Humanized ${total} guide files (v2).`);
