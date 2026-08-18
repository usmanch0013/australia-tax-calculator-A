import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../lib/guides/calculators"
);

const fixes = [
  [". employers ", ". Employers "],
  [". the largest ", ". The largest "],
  [". penalty rates ", ". Penalty rates "],
  [". genuine redundancy ", ". Genuine redundancy "],
  [". most full-time ", ". Most full-time "],
  [". your gross salary ", ". Your gross salary "],
  [". employers are ", ". Employers are "],
  [". that reverse ", ". That reverse "],
  [". the difference ", ". The difference "],
  [". day rates ", ". Day rates "],
  [". bonus payments ", ". Bonus payments "],
  [". overtime ", ". Overtime "],
  [". sick leave ", ". Sick leave "],
  [". long service ", ". Long service "],
  [". division 293 ", ". Division 293 "],
  [". novated ", ". Novated "],
  [". salary sacrifice ", ". Salary sacrifice "],
  [". superannuation ", ". Superannuation "],
  [". casual ", ". Casual "],
  [". annual leave ", ". Annual leave "],
  [". income tax ", ". Income tax "],
  [". medicare ", ". Medicare "],
  [". hecs ", ". HECS "],
  [". bonus ", ". Bonus "],
];

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
  let text = fs.readFileSync(path.join(dir, file), "utf8");
  for (const [from, to] of fixes) {
    text = text.replaceAll(from, to);
  }
  fs.writeFileSync(path.join(dir, file), text);
}
console.log("Fixed capitalization in guides.");
