import type { ResultRow } from "./tax";
import {
  CASUAL_LOADING_RATE,
  SUPER_RATE,
  annualToHourly,
  calculateHecs,
  calculateIncomeTax,
  calculateMedicare,
  calculateTotalTax,
  findGrossForNet,
  formatCurrency,
  formatPercent,
  getHecsRate,
  hourlyToAnnual,
} from "./tax";

export interface ToolMeta {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  seoIntro: string;
  keywords: string[];
  icon: string;
  category: "pay" | "tax" | "super" | "work";
}

export const TOOL_CATEGORIES = {
  pay: "Pay & Salary",
  tax: "Tax & Deductions",
  super: "Superannuation",
  work: "Work & Leave",
} as const;

const BASE_TOOLS: ToolMeta[] = [
  {
    slug: "take-home-pay-calculator",
    name: "Take-Home Pay Calculator Australia",
    shortName: "Take-Home Pay",
    description:
      "Calculate your net pay after income tax, Medicare levy and HECS repayments.",
    seoIntro:
      "Enter your gross pay to see your net salary after Australian income tax, the 2% Medicare levy and any HECS/HELP repayments. Enter your gross pay and see weekly, fortnightly, monthly and annual take-home amounts right away.",
    keywords: ["take home pay calculator", "net pay calculator", "take home pay calculator australia"],
    icon: "💵",
    category: "pay",
  },
  {
    slug: "pay-calculator",
    name: "Pay Calculator Australia",
    shortName: "Pay Calculator",
    description:
      "Free Australian pay calculator — gross to net with full tax breakdown for 2025–26.",
    seoIntro:
      "A pay calculator for 2025–26. Calculate exactly how much you earn after tax, Medicare and super. Whether you're paid weekly, fortnightly or annually — get your full pay breakdown in seconds.",
    keywords: ["pay calculator", "pay calculator australia", "australian pay calculator"],
    icon: "🧮",
    category: "pay",
  },
  {
    slug: "hourly-to-salary-calculator",
    name: "Hourly to Salary Calculator",
    shortName: "Hourly to Salary",
    description:
      "Convert your hourly wage to an annual, monthly, weekly and daily salary.",
    seoIntro:
      "Got an hourly rate? Enter your hourly wage and hours per week to see your gross and estimated net annual, monthly, weekly and daily pay after tax.",
    keywords: ["hourly to salary", "hourly wage calculator", "hourly to annual salary"],
    icon: "⏱️",
    category: "pay",
  },
  {
    slug: "salary-to-hourly-calculator",
    name: "Salary to Hourly Calculator",
    shortName: "Salary to Hourly",
    description:
      "Convert annual salary to an hourly rate based on your hours worked per week.",
    seoIntro:
      "Turn an annual salary into an hourly rate. Handy for comparing job offers, contract roles or part-time work — based on a standard 38-hour week or your custom hours.",
    keywords: ["salary to hourly", "annual to hourly", "salary to hourly rate calculator"],
    icon: "📊",
    category: "pay",
  },
  {
    slug: "gross-to-net-calculator",
    name: "Gross to Net Salary Calculator",
    shortName: "Gross to Net",
    description:
      "See how much you take home from your gross salary after Australian tax.",
    seoIntro:
      "See what gross pay becomes after tax. Enter your gross annual income to see income tax, Medicare levy, HECS deductions and your exact take-home pay using 2025–26 ATO tax brackets.",
    keywords: ["gross to net", "gross salary net salary calculator", "gross to net calculator australia"],
    icon: "📉",
    category: "pay",
  },
  {
    slug: "net-to-gross-calculator",
    name: "Net to Gross Calculator",
    shortName: "Net to Gross",
    description:
      "Find the gross salary you need to achieve your target take-home pay.",
    seoIntro:
      "Know how much take-home pay you want? Find the gross salary you need to ask for — accounting for income tax, Medicare and HECS at current ATO rates.",
    keywords: ["net to gross", "reverse salary calculator", "net to gross calculator australia"],
    icon: "📈",
    category: "pay",
  },
  {
    slug: "income-tax-calculator",
    name: "Income Tax Calculator Australia",
    shortName: "Income Tax",
    description:
      "Estimate your Australian income tax based on 2025–26 ATO tax brackets.",
    seoIntro:
      "Income tax estimates using official 2025–26 ATO tax brackets. See your income tax payable, marginal rate and effective tax rate — including Stage 3 tax cuts at 16% and 30%.",
    keywords: ["income tax calculator", "tax calculator australia", "australian income tax calculator"],
    icon: "🏛️",
    category: "tax",
  },
  {
    slug: "medicare-levy-calculator",
    name: "Medicare Levy Calculator",
    shortName: "Medicare Levy",
    description:
      "Calculate your 2% Medicare levy and check if you qualify for a reduction or exemption.",
    seoIntro:
      "Most residents pay 2% of taxable income. Check if you qualify for a reduction or exemption based on the $26,000 low-income threshold.",
    keywords: ["medicare levy calculator", "medicare levy", "medicare levy australia"],
    icon: "🏥",
    category: "tax",
  },
  {
    slug: "hecs-calculator",
    name: "HECS-HELP Repayment Calculator",
    shortName: "HECS Calculator",
    description:
      "Estimate your annual HECS/HELP repayment based on your repayment income.",
    seoIntro:
      "Estimate your annual HELP/HECS debt repayment based on your income using graduated ATO repayment rates from 1% to 10% above the $54,435 threshold.",
    keywords: ["hecs calculator", "hecs repayment calculator", "help debt calculator"],
    icon: "🎓",
    category: "tax",
  },
  {
    slug: "bonus-tax-calculator",
    name: "Bonus Tax Calculator Australia",
    shortName: "Bonus Tax",
    description:
      "See how much tax you'll pay on a bonus payment in Australia.",
    seoIntro:
      "Got a bonus coming? Enter your annual salary and bonus amount to see the marginal tax rate applied and your bonus after tax using 2025–26 rates.",
    keywords: ["bonus tax calculator", "bonus tax australia", "tax on bonus payment"],
    icon: "🎁",
    category: "tax",
  },
  {
    slug: "salary-sacrifice-calculator",
    name: "Salary Sacrifice Calculator",
    shortName: "Salary Sacrifice",
    description:
      "Calculate tax savings from salary sacrificing into superannuation.",
    seoIntro:
      "See how much tax you save by sacrificing part of your salary into super — contributions are taxed at 15% instead of your marginal rate.",
    keywords: ["salary sacrifice calculator", "salary sacrifice car calculator", "salary packaging calculator"],
    icon: "💰",
    category: "super",
  },
  {
    slug: "super-calculator",
    name: "Superannuation Calculator Australia",
    shortName: "Super Calculator",
    description:
      "Calculate employer super contributions at the 12% guarantee rate for 2025–26.",
    seoIntro:
      "Super estimates for 2025–26. Calculate your employer's 12% super guarantee contribution — whether super is paid on top of your salary or included in your total package.",
    keywords: ["super calculator", "superannuation calculator", "super guarantee calculator"],
    icon: "🏦",
    category: "super",
  },
  {
    slug: "casual-loading-calculator",
    name: "Casual Loading Calculator",
    shortName: "Casual Loading",
    description:
      "Calculate casual pay rates with 25% loading on top of the base hourly rate.",
    seoIntro:
      "Calculate your casual hourly rate with the standard 25% loading on top of the base rate, plus weekly and annual earnings.",
    keywords: ["casual loading calculator", "casual rate calculator", "casual pay calculator australia"],
    icon: "👷",
    category: "work",
  },
  {
    slug: "annual-leave-calculator",
    name: "Annual Leave Calculator",
    shortName: "Annual Leave",
    description:
      "Calculate the value of your annual leave entitlement in dollars.",
    seoIntro:
      "Calculate the dollar value of your leave days based on your annual salary — including standard 20-day annual leave entitlements.",
    keywords: ["annual leave calculator", "leave payout calculator", "annual leave entitlement calculator"],
    icon: "🏖️",
    category: "work",
  },
  {
    slug: "overtime-calculator",
    name: "Overtime Pay Calculator Australia",
    shortName: "Overtime Pay",
    description:
      "Calculate overtime pay at 1.5× or 2× your base hourly rate.",
    seoIntro:
      "Calculate earnings at time-and-a-half (1.5×) or double time (2×) based on your base hourly rate and overtime hours worked.",
    keywords: ["overtime calculator", "overtime pay calculator", "time and a half calculator"],
    icon: "⚡",
    category: "work",
  },
  {
    slug: "pay-rise-calculator",
    name: "Pay Rise Calculator Australia",
    shortName: "Pay Rise",
    description:
      "See how much extra take-home pay you'll get from a salary increase or pay rise.",
    seoIntro:
      "Enter your current salary and pay increase percentage to see your new gross pay, extra take-home pay after tax, and how much of the rise goes to the ATO.",
    keywords: ["pay rise calculator", "salary increase calculator", "pay rise after tax australia"],
    icon: "📈",
    category: "pay",
  },
  {
    slug: "redundancy-pay-calculator",
    name: "Redundancy Pay Calculator Australia",
    shortName: "Redundancy Pay",
    description:
      "Estimate genuine redundancy pay using Fair Work NES weeks and tax-free limits.",
    seoIntro:
      "Estimate your redundancy payout based on years of service and weekly pay using National Employment Standards (NES) minimums, plus estimated tax on the taxable portion.",
    keywords: ["redundancy pay calculator", "redundancy calculator australia", "severance pay calculator"],
    icon: "📋",
    category: "work",
  },
  {
    slug: "division-293-calculator",
    name: "Division 293 Tax Calculator",
    shortName: "Division 293",
    description:
      "Calculate extra 15% tax on super contributions for high-income earners above $250,000.",
    seoIntro:
      "If your income plus concessional super contributions exceed $250,000, you may owe an extra 15% tax on some or all of your super contributions.",
    keywords: ["division 293 calculator", "division 293 tax", "high income super tax"],
    icon: "🏛️",
    category: "super",
  },
  {
    slug: "novated-lease-calculator",
    name: "Novated Lease Calculator Australia",
    shortName: "Novated Lease",
    description:
      "Estimate tax savings from salary packaging a car through a novated lease.",
    seoIntro:
      "See how much income tax you save by packaging your car lease and running costs from pre-tax salary — a popular salary packaging option for Australian employees.",
    keywords: ["novated lease calculator", "salary packaging car calculator", "novated lease tax savings"],
    icon: "🚗",
    category: "super",
  },
  {
    slug: "long-service-leave-calculator",
    name: "Long Service Leave Calculator",
    shortName: "Long Service Leave",
    description:
      "Estimate the dollar value of long service leave based on years of service.",
    seoIntro:
      "Estimate your long service leave entitlement value in dollars based on years of continuous service and weekly pay — rules vary by state and industry.",
    keywords: ["long service leave calculator", "long service leave payout", "lsl calculator australia"],
    icon: "🗓️",
    category: "work",
  },
  {
    slug: "pro-rata-salary-calculator",
    name: "Pro-Rata Salary Calculator",
    shortName: "Pro-Rata Salary",
    description:
      "Calculate part-time or pro-rata salary and take-home pay from a full-time equivalent.",
    seoIntro:
      "Convert a full-time salary to part-time based on days or hours worked per week, with estimated take-home pay after tax.",
    keywords: ["pro rata salary calculator", "part time salary calculator", "pro rata pay australia"],
    icon: "⏳",
    category: "pay",
  },
  {
    slug: "contract-day-rate-calculator",
    name: "Contract Day Rate Calculator",
    shortName: "Day Rate",
    description:
      "Convert a contractor day rate to annual, weekly income and estimated after-tax pay.",
    seoIntro:
      "Contractors: enter your daily rate and days worked per week to see annual gross income, estimated tax and take-home pay.",
    keywords: ["day rate calculator", "contractor day rate calculator", "daily rate calculator australia"],
    icon: "💼",
    category: "pay",
  },
  {
    slug: "shift-penalty-calculator",
    name: "Shift Penalty Rates Calculator",
    shortName: "Shift Penalties",
    description:
      "Calculate weekend, evening and public holiday penalty rates on top of base pay.",
    seoIntro:
      "Calculate pay for Saturday, Sunday, evening and public holiday shifts using common award penalty rates including time-and-a-half and double time.",
    keywords: ["penalty rates calculator", "weekend penalty rates", "public holiday pay calculator australia"],
    icon: "🌙",
    category: "work",
  },
  {
    slug: "sick-leave-calculator",
    name: "Sick Leave Payout Calculator",
    shortName: "Sick Leave",
    description:
      "Calculate the dollar value of accrued sick or personal leave days.",
    seoIntro:
      "Estimate the value of your accrued personal or sick leave days based on your annual salary — useful when leaving a job or planning time off.",
    keywords: ["sick leave calculator", "personal leave payout calculator", "sick leave payout australia"],
    icon: "🤒",
    category: "work",
  },
  {
    slug: "tax-refund-estimator",
    name: "Tax Refund Estimator Australia",
    shortName: "Tax Refund",
    description:
      "Estimate whether you'll get a tax refund or owe money at tax time.",
    seoIntro:
      "Compare tax already withheld from your pay against your estimated tax liability for the year to see if you're likely to receive a refund or need to pay extra.",
    keywords: ["tax refund calculator australia", "tax refund estimator", "will i get a tax refund"],
    icon: "💸",
    category: "tax",
  },
];

export const TOOLS: ToolMeta[] = BASE_TOOLS;

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

// --- Calculator logic ---

export function calcHourlyToSalary(hourly: number, hoursPerWeek: number) {
  const annual = hourlyToAnnual(hourly, hoursPerWeek);
  const tax = calculateTotalTax(annual);
  const net = annual - tax.total;

  return {
    rows: [
      { label: "Hourly Rate", value: formatCurrency(hourly) },
      { label: "Hours per Week", value: `${hoursPerWeek}` },
      { label: "Annual Salary (Gross)", value: formatCurrency(annual), highlight: true },
      { label: "Monthly (Gross)", value: formatCurrency(annual / 12) },
      { label: "Weekly (Gross)", value: formatCurrency(annual / 52) },
      { label: "Daily (Gross, 5-day)", value: formatCurrency(annual / 260) },
      { label: "Est. Annual Tax", value: formatCurrency(tax.total), negative: true },
      { label: "Est. Take-Home (Annual)", value: formatCurrency(net), highlight: true },
    ] satisfies ResultRow[],
    summary: formatCurrency(annual),
  };
}

export function calcSalaryToHourly(annual: number, hoursPerWeek: number) {
  const hourly = annualToHourly(annual, hoursPerWeek);
  const tax = calculateTotalTax(annual);
  const netHourly = (annual - tax.total) / (hoursPerWeek * 52);

  return {
    rows: [
      { label: "Annual Salary (Gross)", value: formatCurrency(annual) },
      { label: "Hours per Week", value: `${hoursPerWeek}` },
      { label: "Hourly Rate (Gross)", value: formatCurrency(hourly), highlight: true },
      { label: "Daily Rate (Gross)", value: formatCurrency(hourly * 8) },
      { label: "Weekly (Gross)", value: formatCurrency(hourly * hoursPerWeek) },
      { label: "Est. Hourly (Net)", value: formatCurrency(netHourly), highlight: true },
    ] satisfies ResultRow[],
    summary: formatCurrency(hourly),
  };
}

export function calcGrossToNet(gross: number, hasHecs: boolean) {
  const tax = calculateTotalTax(gross, { includeHecs: hasHecs });
  const net = gross - tax.total;
  const effRate = gross > 0 ? (tax.total / gross) * 100 : 0;

  return {
    rows: [
      { label: "Gross Income", value: formatCurrency(gross) },
      { label: "Income Tax", value: formatCurrency(tax.incomeTax), negative: true },
      { label: "Medicare Levy (2%)", value: formatCurrency(tax.medicare), negative: true },
      ...(hasHecs
        ? [{ label: "HECS/HELP Repayment", value: formatCurrency(tax.hecs), negative: true }]
        : []),
      { label: "Total Tax", value: formatCurrency(tax.total), negative: true },
      { label: "Net (Take-Home)", value: formatCurrency(net), highlight: true },
      { label: "Effective Tax Rate", value: formatPercent(effRate) },
      { label: "Marginal Rate", value: formatPercent(tax.marginalRate) },
    ] satisfies ResultRow[],
    summary: formatCurrency(net),
  };
}

export function calcNetToGross(targetNet: number, hasHecs: boolean) {
  const gross = findGrossForNet(targetNet, { includeHecs: hasHecs });
  const tax = calculateTotalTax(gross, { includeHecs: hasHecs });
  const net = gross - tax.total;

  return {
    rows: [
      { label: "Target Take-Home", value: formatCurrency(targetNet) },
      { label: "Required Gross Salary", value: formatCurrency(gross), highlight: true },
      { label: "Income Tax", value: formatCurrency(tax.incomeTax), negative: true },
      { label: "Medicare Levy", value: formatCurrency(tax.medicare), negative: true },
      ...(hasHecs
        ? [{ label: "HECS/HELP", value: formatCurrency(tax.hecs), negative: true }]
        : []),
      { label: "Total Tax", value: formatCurrency(tax.total), negative: true },
      { label: "Actual Take-Home", value: formatCurrency(net), highlight: true },
    ] satisfies ResultRow[],
    summary: formatCurrency(gross),
  };
}

export function calcIncomeTax(taxableIncome: number) {
  const { tax, marginalRate } = calculateIncomeTax(taxableIncome);
  const effRate = taxableIncome > 0 ? (tax / taxableIncome) * 100 : 0;

  return {
    rows: [
      { label: "Taxable Income", value: formatCurrency(taxableIncome) },
      { label: "Income Tax Payable", value: formatCurrency(tax), highlight: true },
      { label: "Marginal Tax Rate", value: formatPercent(marginalRate * 100) },
      { label: "Effective Tax Rate", value: formatPercent(effRate) },
      { label: "After-Tax Income", value: formatCurrency(taxableIncome - tax) },
    ] satisfies ResultRow[],
    summary: formatCurrency(tax),
  };
}

export function calcMedicare(taxableIncome: number) {
  const levy = calculateMedicare(taxableIncome);
  const exempt = taxableIncome <= 26000;

  return {
    rows: [
      { label: "Taxable Income", value: formatCurrency(taxableIncome) },
      { label: "Medicare Levy Rate", value: exempt ? "Exempt" : "2%" },
      { label: "Medicare Levy Amount", value: formatCurrency(levy), highlight: true },
      { label: "Status", value: exempt ? "Below threshold ($26,000)" : "Payable" },
    ] satisfies ResultRow[],
    summary: formatCurrency(levy),
  };
}

export function calcHecs(repaymentIncome: number) {
  const rate = getHecsRate(repaymentIncome);
  const repayment = calculateHecs(repaymentIncome);
  const threshold = 54435;

  return {
    rows: [
      { label: "Repayment Income", value: formatCurrency(repaymentIncome) },
      { label: "Repayment Threshold", value: formatCurrency(threshold) },
      { label: "Repayment Rate", value: formatPercent(rate * 100, 1) },
      { label: "Annual Repayment", value: formatCurrency(repayment), highlight: true },
      { label: "Monthly Repayment", value: formatCurrency(repayment / 12) },
      { label: "Fortnightly", value: formatCurrency(repayment / 26) },
      { label: "Status", value: repaymentIncome < threshold ? "Below threshold — no repayment" : "Repayment applies" },
    ] satisfies ResultRow[],
    summary: formatCurrency(repayment),
  };
}

export function calcBonusTax(annualSalary: number, bonus: number, hasHecs: boolean) {
  const taxWithout = calculateTotalTax(annualSalary, { includeHecs: hasHecs });
  const taxWith = calculateTotalTax(annualSalary + bonus, { includeHecs: hasHecs });
  const bonusTax = taxWith.total - taxWithout.total;
  const bonusNet = bonus - bonusTax;
  const effRate = bonus > 0 ? (bonusTax / bonus) * 100 : 0;

  return {
    rows: [
      { label: "Annual Salary", value: formatCurrency(annualSalary) },
      { label: "Bonus Amount", value: formatCurrency(bonus) },
      { label: "Tax on Bonus", value: formatCurrency(bonusTax), negative: true, highlight: true },
      { label: "Bonus After Tax", value: formatCurrency(bonusNet), highlight: true },
      { label: "Effective Bonus Tax Rate", value: formatPercent(effRate) },
      { label: "Marginal Rate on Bonus", value: formatPercent(taxWith.marginalRate) },
    ] satisfies ResultRow[],
    summary: formatCurrency(bonusNet),
  };
}

export function calcSalarySacrifice(annualSalary: number, sacrificeAmount: number) {
  const taxBefore = calculateTotalTax(annualSalary);
  const taxAfter = calculateTotalTax(annualSalary - sacrificeAmount);
  const taxSaved = taxBefore.total - taxAfter.total;
  const superTax = sacrificeAmount * 0.15;
  const netBenefit = taxSaved - (sacrificeAmount * 0.15 - sacrificeAmount * 0.15); // benefit is tax saved minus extra super tax
  // Actual benefit: you save marginal tax on sacrifice, pay 15% contributions tax in super
  const marginalSaving = taxBefore.incomeTax - taxAfter.incomeTax + (taxBefore.medicare - taxAfter.medicare);
  const actualBenefit = marginalSaving - sacrificeAmount * 0.15;

  return {
    rows: [
      { label: "Gross Salary", value: formatCurrency(annualSalary) },
      { label: "Salary Sacrifice", value: formatCurrency(sacrificeAmount) },
      { label: "Taxable Income (After)", value: formatCurrency(annualSalary - sacrificeAmount) },
      { label: "Tax Before Sacrifice", value: formatCurrency(taxBefore.total), negative: true },
      { label: "Tax After Sacrifice", value: formatCurrency(taxAfter.total), negative: true },
      { label: "Tax Saved", value: formatCurrency(taxSaved), highlight: true },
      { label: "Super Contribution (15% tax)", value: formatCurrency(sacrificeAmount * 0.85) },
      { label: "Net Tax Benefit", value: formatCurrency(actualBenefit), highlight: true },
    ] satisfies ResultRow[],
    summary: formatCurrency(taxSaved),
  };
}

export function calcSuper(annualSalary: number, inclusive: boolean) {
  let gross = annualSalary;
  let superAmount: number;

  if (inclusive) {
    gross = annualSalary / (1 + SUPER_RATE);
    superAmount = annualSalary - gross;
  } else {
    superAmount = annualSalary * SUPER_RATE;
  }

  const totalPackage = gross + superAmount;

  return {
    rows: [
      { label: "Salary Input", value: formatCurrency(annualSalary) },
      { label: "Base Salary", value: formatCurrency(gross) },
      { label: "Super Rate", value: formatPercent(SUPER_RATE * 100, 0) },
      { label: "Employer Super Contribution", value: formatCurrency(superAmount), highlight: true },
      { label: "Total Package", value: formatCurrency(totalPackage), highlight: true },
      { label: "Monthly Super", value: formatCurrency(superAmount / 12) },
      { label: "Mode", value: inclusive ? "Inclusive of super" : "Super on top" },
    ] satisfies ResultRow[],
    summary: formatCurrency(superAmount),
  };
}

export function calcCasualLoading(baseHourly: number, hoursPerWeek: number) {
  const casualRate = baseHourly * (1 + CASUAL_LOADING_RATE);
  const weeklyBase = baseHourly * hoursPerWeek;
  const weeklyCasual = casualRate * hoursPerWeek;
  const annualCasual = weeklyCasual * 52;

  return {
    rows: [
      { label: "Base Hourly Rate", value: formatCurrency(baseHourly) },
      { label: "Casual Loading", value: formatPercent(CASUAL_LOADING_RATE * 100, 0) },
      { label: "Casual Hourly Rate", value: formatCurrency(casualRate), highlight: true },
      { label: "Hours per Week", value: `${hoursPerWeek}` },
      { label: "Weekly (Base)", value: formatCurrency(weeklyBase) },
      { label: "Weekly (Casual)", value: formatCurrency(weeklyCasual), highlight: true },
      { label: "Annual (Casual)", value: formatCurrency(annualCasual) },
    ] satisfies ResultRow[],
    summary: formatCurrency(casualRate),
  };
}

export function calcAnnualLeave(annualSalary: number, leaveDays: number) {
  const dailyRate = annualSalary / 260;
  const leaveValue = dailyRate * leaveDays;
  const standardEntitlement = 20;
  const fullEntitlementValue = dailyRate * standardEntitlement;

  return {
    rows: [
      { label: "Annual Salary", value: formatCurrency(annualSalary) },
      { label: "Daily Rate", value: formatCurrency(dailyRate) },
      { label: "Leave Days", value: `${leaveDays} days` },
      { label: "Leave Payout Value", value: formatCurrency(leaveValue), highlight: true },
      { label: "Standard Entitlement (20 days)", value: formatCurrency(fullEntitlementValue) },
      { label: "Weekly Rate", value: formatCurrency(annualSalary / 52) },
    ] satisfies ResultRow[],
    summary: formatCurrency(leaveValue),
  };
}

export function calcOvertime(
  baseHourly: number,
  overtimeHours: number,
  multiplier: number
) {
  const overtimeRate = baseHourly * multiplier;
  const overtimePay = overtimeRate * overtimeHours;
  const standardPay = baseHourly * overtimeHours;
  const extraPay = overtimePay - standardPay;

  return {
    rows: [
      { label: "Base Hourly Rate", value: formatCurrency(baseHourly) },
      { label: "Overtime Multiplier", value: `${multiplier}×` },
      { label: "Overtime Hourly Rate", value: formatCurrency(overtimeRate), highlight: true },
      { label: "Overtime Hours", value: `${overtimeHours}` },
      { label: "Standard Pay (same hours)", value: formatCurrency(standardPay) },
      { label: "Overtime Pay", value: formatCurrency(overtimePay), highlight: true },
      { label: "Extra Earnings", value: formatCurrency(extraPay) },
    ] satisfies ResultRow[],
    summary: formatCurrency(overtimePay),
  };
}
