export const SITE = {
  name: "AU Salary After Tax",
  tagline: "Australian Salary & Take-Home Pay After Tax",
  description:
    "See your salary after tax, Medicare, HECS and super. Free Australian pay calculators — 2025–26 ATO rates, no sign-up.",
  url: "https://aussalaryaftertax.com",
  year: "2025–26",
} as const;

export const POPULAR_SALARIES = [
  50000, 60000, 70000, 75000, 80000, 90000, 100000, 120000, 150000, 180000,
  200000, 250000, 300000,
] as const;

export const HIGH_INCOME_SALARIES = [
  400000, 500000, 600000, 700000, 800000, 900000, 1000000,
] as const;

export const POPULAR_HOURLY_RATES = [
  25, 28, 30, 32, 35, 38, 40, 45, 50, 55, 60,
] as const;

export const TAX_BRACKETS = [
  { range: "$0 – $18,200", rate: "0%", tax: "Nil" },
  { range: "$18,201 – $45,000", rate: "16%", tax: "$0 + 16c per $1 over $18,200" },
  { range: "$45,001 – $135,000", rate: "30%", tax: "$4,288 + 30c per $1 over $45,000" },
  { range: "$135,001 – $190,000", rate: "37%", tax: "$31,288 + 37c per $1 over $135,000" },
  { range: "$190,001+", rate: "45%", tax: "$51,638 + 45c per $1 over $190,000" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How much tax do I pay on $80,000 in Australia?",
    answer:
      "On $80,000 gross in 2025–26, you're looking at roughly $14,788 income tax plus about $1,600 Medicare (2%). That leaves around $63,612 take-home — about $5,301 a month. HECS, salary sacrifice or a second job will shift those numbers.",
  },
  {
    question: "What is the tax-free threshold in Australia?",
    answer:
      "You don't pay income tax on the first $18,200 you earn each year. Below that, your tax bill is zero. The Low Income Tax Offset (LITO) can knock up to $700 off tax for lower earners. Make sure you've ticked the tax-free threshold with your main employer so PAYG isn't withheld too aggressively.",
  },
  {
    question: "What is the Medicare levy?",
    answer:
      "It's 2% of your taxable income and it funds Medicare. Most residents pay the full amount. Earn under $26,000 and you may pay nothing or a reduced rate. Skip private hospital cover while earning above $93,000? You might also cop the Medicare Levy Surcharge on top.",
  },
  {
    question: "Is superannuation included in my salary?",
    answer:
      "Usually no — employer super sits on top of your wage and doesn't come out of your take-home pay. The guarantee rate is 12% from 1 July 2025. If your contract says 'total package including super', then part of that headline figure is super, not cash in hand.",
  },
  {
    question: "How do HECS/HELP repayments work?",
    answer:
      "Once your repayment income tops about $54,435 (2025–26), the ATO starts taking a percentage through PAYG — from 1% at the low end up to 10% on higher incomes. There's no interest, but the balance gets indexed to CPI each year.",
  },
  {
    question: "How do I calculate my weekly take-home pay?",
    answer:
      "Take your gross annual salary, subtract tax, Medicare and HECS, then divide by 52 for weekly or 26 for fortnightly. Or skip the maths and use the calculator above — it shows every pay cycle at once.",
  },
  {
    question: "Are these calculations accurate?",
    answer:
      "We use the ATO's published 2025–26 brackets, including the Stage 3 rates (16% and 30% in the middle bands). They're solid estimates for a standard PAYG job. Offsets, multiple employers, investment income or residency quirks can change your real bill — a tax agent is worth a call if your situation isn't straightforward.",
  },
  {
    question: "What changed in the 2025–26 financial year?",
    answer:
      "Super guarantee went up to 12% from 1 July 2025. Income tax brackets stayed put after the Stage 3 cuts — still 16% on earnings between $18,201 and $45,000, and 30% up to $135,000.",
  },
] as const;

export const TAX_TIPS = [
  {
    icon: "💰",
    title: "Salary sacrifice can cut your tax bill",
    text: "Money you salary-sacrifice into super comes out before tax. Super contributions get taxed at 15% inside the fund — often less than your marginal rate.",
  },
  {
    icon: "📚",
    title: "HECS comes out of your pay automatically",
    text: "Cross the repayment threshold and the ATO handles it through PAYG. The percentage climbs as you earn more. The debt itself is indexed to CPI, not charged interest.",
  },
  {
    icon: "🧾",
    title: "Keep receipts for deductions",
    text: "Work gear, training, part of your home office — plenty of expenses can come off your taxable income if you've got records. Don't wait until June to start a folder.",
  },
  {
    icon: "📊",
    title: "Low Income Tax Offset",
    text: "Earn under $66,667 and you may get up to $700 knocked off your tax automatically through LITO. No form to fill in.",
  },
] as const;
