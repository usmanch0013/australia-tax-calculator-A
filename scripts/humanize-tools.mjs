import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const fp = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../lib/tools.ts"
);
let text = fs.readFileSync(fp, "utf8");

const replacements = [
  [/Use our free take-home pay calculator to find/g, "Enter your gross pay to see"],
  [/Use our free/g, "Use this free"],
  [/Australia's pay calculator for/g, "A pay calculator for"],
  [/Convert your hourly rate to an annual salary in Australia\. Enter/g, "Got an hourly rate? Enter"],
  [/Work out your hourly rate from your annual salary\. Perfect/g, "Turn an annual salary into an hourly rate. Handy"],
  [/Calculate gross to net pay in Australia\. Enter/g, "See what gross pay becomes after tax. Enter"],
  [/Reverse salary calculator for Australia\. Know/g, "Know"],
  [/Free Australian income tax calculator using/g, "Income tax estimates using"],
  [/Calculate your Medicare levy in Australia\. Most/g, "Most"],
  [/HECS repayment calculator for Australia\. Estimate/g, "Estimate"],
  [/How much tax will you pay on your bonus in Australia\? Enter/g, "Got a bonus coming? Enter"],
  [/Salary sacrifice calculator for Australia\. See/g, "See"],
  [/Superannuation calculator for/g, "Super estimates for"],
  [/Casual loading calculator for Australian workers\. Calculate/g, "Calculate"],
  [/Annual leave payout calculator for Australia\. Calculate/g, "Calculate"],
  [/Overtime pay calculator for Australian workers\. Calculate/g, "Calculate"],
  [/Pay rise calculator for Australia\. Enter/g, "Enter"],
  [/Redundancy pay calculator for Australian employees\. Estimate/g, "Estimate"],
  [/Division 293 tax calculator for Australia\. If/g, "If"],
  [/Novated lease calculator for Australia\. See/g, "See"],
  [/Long service leave calculator for Australian workers\. Estimate/g, "Estimate"],
  [/Pro-rata salary calculator for Australia\. Convert/g, "Convert"],
  [/Contract day rate calculator for Australian contractors and consultants\. Enter/g, "Contractors: enter"],
  [/Shift penalty calculator for Australian workers\. Calculate/g, "Calculate"],
  [/Sick leave payout calculator for Australia\. Estimate/g, "Estimate"],
  [/Australian tax refund estimator\. Compare/g, "Compare"],
  [/instantly/gi, "right away"],
];

for (const [from, to] of replacements) {
  text = text.replace(from, to);
}

fs.writeFileSync(fp, text);
console.log("Humanized tools.ts seoIntro strings.");
