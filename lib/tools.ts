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
      "What actually hits your bank after tax, Medicare and HECS — no guesswork.",
    seoIntro:
      "Type in your gross salary and see your real take-home pay. We factor in 2025–26 tax brackets, the 2% Medicare levy and HECS if you've got a student debt — weekly, fortnightly, monthly and yearly.",
    keywords: ["take home pay calculator", "net pay calculator", "take home pay calculator australia"],
    icon: "💵",
    category: "pay",
  },
  {
    slug: "pay-calculator",
    name: "Pay Calculator Australia",
    shortName: "Pay Calculator",
    description:
      "Gross to net in seconds — full tax breakdown for Aussie workers.",
    seoIntro:
      "Whether you're paid weekly, fortnightly or yearly, this shows what's left after tax, Medicare and super. Built on current ATO rates — no account needed.",
    keywords: ["pay calculator", "pay calculator australia", "australian pay calculator"],
    icon: "🧮",
    category: "pay",
  },
  {
    slug: "hourly-to-salary-calculator",
    name: "Hourly to Salary Calculator",
    shortName: "Hourly to Salary",
    description:
      "Turn your hourly rate into an annual, monthly and weekly salary.",
    seoIntro:
      "Got a $35/hr offer? Plug in your hours per week and see the annual figure — plus an estimate of what you'd take home after tax.",
    keywords: ["hourly to salary", "hourly wage calculator", "hourly to annual salary"],
    icon: "⏱️",
    category: "pay",
  },
  {
    slug: "salary-to-hourly-calculator",
    name: "Salary to Hourly Calculator",
    shortName: "Salary to Hourly",
    description:
      "Split an annual salary into an hourly rate for your hours worked.",
    seoIntro:
      "Handy when you're comparing a salaried role to contract work, or just curious what your pay works out to per hour. Uses your actual hours — default is 38 a week.",
    keywords: ["salary to hourly", "annual to hourly", "salary to hourly rate calculator"],
    icon: "📊",
    category: "pay",
  },
  {
    slug: "gross-to-net-calculator",
    name: "Gross to Net Salary Calculator",
    shortName: "Gross to Net",
    description:
      "See how much of your gross salary you actually keep.",
    seoIntro:
      "Enter your gross income and we'll show income tax, Medicare, HECS (if applicable) and your net pay — line by line, using 2025–26 brackets.",
    keywords: ["gross to net", "gross salary net salary calculator", "gross to net calculator australia"],
    icon: "📉",
    category: "pay",
  },
  {
    slug: "net-to-gross-calculator",
    name: "Net to Gross Calculator",
    shortName: "Net to Gross",
    description:
      "Work backwards — find the gross salary you need for your target take-home.",
    seoIntro:
      "Want $5,000 a month after tax? This tells you the gross figure to negotiate for, after Medicare and HECS are accounted for.",
    keywords: ["net to gross", "reverse salary calculator", "net to gross calculator australia"],
    icon: "📈",
    category: "pay",
  },
  {
    slug: "income-tax-calculator",
    name: "Income Tax Calculator Australia",
    shortName: "Income Tax",
    description:
      "Rough income tax on your earnings — 2025–26 ATO brackets.",
    seoIntro:
      "See how much income tax you'd pay, your marginal rate and effective rate. Includes the Stage 3 cuts — 16% and 30% in the middle bands.",
    keywords: ["income tax calculator", "tax calculator australia", "australian income tax calculator"],
    icon: "🏛️",
    category: "tax",
  },
  {
    slug: "medicare-levy-calculator",
    name: "Medicare Levy Calculator",
    shortName: "Medicare Levy",
    description:
      "Your 2% Medicare levy — and whether you might be exempt.",
    seoIntro:
      "Most Aussies pay 2% of taxable income for Medicare. Earn under $26,000? You might pay nothing or a reduced amount — check here.",
    keywords: ["medicare levy calculator", "medicare levy", "medicare levy australia"],
    icon: "🏥",
    category: "tax",
  },
  {
    slug: "hecs-calculator",
    name: "HECS-HELP Repayment Calculator",
    shortName: "HECS Calculator",
    description:
      "How much HECS gets taken from your pay each year.",
    seoIntro:
      "Once you earn above the threshold (~$54k), repayments kick in through PAYG. See your rate — from 1% up to 10% — based on your income.",
    keywords: ["hecs calculator", "hecs repayment calculator", "help debt calculator"],
    icon: "🎓",
    category: "tax",
  },
  {
    slug: "bonus-tax-calculator",
    name: "Bonus Tax Calculator Australia",
    shortName: "Bonus Tax",
    description:
      "How much of your bonus the tax office keeps.",
    seoIntro:
      "Bonuses get taxed at your marginal rate — which can sting. Enter your salary and bonus to see the after-tax amount and effective rate on the bonus.",
    keywords: ["bonus tax calculator", "bonus tax australia", "tax on bonus payment"],
    icon: "🎁",
    category: "tax",
  },
  {
    slug: "salary-sacrifice-calculator",
    name: "Salary Sacrifice Calculator",
    shortName: "Salary Sacrifice",
    description:
      "Tax you'd save by sacrificing salary into super.",
    seoIntro:
      "Salary sacrifice means less taxable income now — super contributions are taxed at 15% inside the fund instead of your marginal rate. See the difference.",
    keywords: ["salary sacrifice calculator", "salary sacrifice car calculator", "salary packaging calculator"],
    icon: "💰",
    category: "super",
  },
  {
    slug: "super-calculator",
    name: "Superannuation Calculator Australia",
    shortName: "Super Calculator",
    description:
      "Employer super at the 12% guarantee rate.",
    seoIntro:
      "Is super on top of your salary or baked into the package? Either way, see how much goes to your fund at the current 12% guarantee.",
    keywords: ["super calculator", "superannuation calculator", "super guarantee calculator"],
    icon: "🏦",
    category: "super",
  },
  {
    slug: "casual-loading-calculator",
    name: "Casual Loading Calculator",
    shortName: "Casual Loading",
    description:
      "Casual hourly rate with the usual 25% loading.",
    seoIntro:
      "Casual roles often pay 25% above the base hourly rate. Enter your base rate and hours to see weekly and annual casual earnings.",
    keywords: ["casual loading calculator", "casual rate calculator", "casual pay calculator australia"],
    icon: "👷",
    category: "work",
  },
  {
    slug: "annual-leave-calculator",
    name: "Annual Leave Calculator",
    shortName: "Annual Leave",
    description:
      "Dollar value of your annual leave days.",
    seoIntro:
      "Twenty days of leave is worth real money. See what your entitlement is worth in dollars based on your salary.",
    keywords: ["annual leave calculator", "leave payout calculator", "annual leave entitlement calculator"],
    icon: "🏖️",
    category: "work",
  },
  {
    slug: "overtime-calculator",
    name: "Overtime Pay Calculator Australia",
    shortName: "Overtime Pay",
    description:
      "Overtime at time-and-a-half or double time.",
    seoIntro:
      "Worked extra hours? Enter your base rate, hours and multiplier (1.5× or 2×) to see what you should earn — and how much more than normal hours.",
    keywords: ["overtime calculator", "overtime pay calculator", "time and a half calculator"],
    icon: "⚡",
    category: "work",
  },
  {
    slug: "pay-rise-calculator",
    name: "Pay Rise Calculator Australia",
    shortName: "Pay Rise",
    description:
      "How much of a pay rise you actually keep after tax.",
    seoIntro:
      "A $10k bump on paper isn't $10k in your pocket. See your new gross, extra take-home and how much goes to the ATO.",
    keywords: ["pay rise calculator", "salary increase calculator", "pay rise after tax australia"],
    icon: "📈",
    category: "pay",
  },
  {
    slug: "redundancy-pay-calculator",
    name: "Redundancy Pay Calculator Australia",
    shortName: "Redundancy Pay",
    description:
      "Estimate redundancy pay under Fair Work NES rules.",
    seoIntro:
      "Genuine redundancy has tax-free limits and NES minimum weeks. Enter years of service and weekly pay for a rough payout figure.",
    keywords: ["redundancy pay calculator", "redundancy calculator australia", "severance pay calculator"],
    icon: "📋",
    category: "work",
  },
  {
    slug: "division-293-calculator",
    name: "Division 293 Tax Calculator",
    shortName: "Division 293",
    description:
      "Extra 15% tax on super when income is high.",
    seoIntro:
      "Earn over $250k combined income and concessional super? You might owe Division 293 tax — an extra 15% on some super contributions.",
    keywords: ["division 293 calculator", "division 293 tax", "high income super tax"],
    icon: "🏛️",
    category: "super",
  },
  {
    slug: "novated-lease-calculator",
    name: "Novated Lease Calculator Australia",
    shortName: "Novated Lease",
    description:
      "Tax savings from packaging a car through salary.",
    seoIntro:
      "Novated leases pull car costs from pre-tax pay. See roughly how much income tax you could save compared to paying from after-tax dollars.",
    keywords: ["novated lease calculator", "salary packaging car calculator", "novated lease tax savings"],
    icon: "🚗",
    category: "super",
  },
  {
    slug: "long-service-leave-calculator",
    name: "Long Service Leave Calculator",
    shortName: "Long Service Leave",
    description:
      "Value of long service leave in dollars.",
    seoIntro:
      "LSL rules vary by state and industry. Enter years of service and weekly pay for an estimate of what your entitlement might be worth.",
    keywords: ["long service leave calculator", "long service leave payout", "lsl calculator australia"],
    icon: "🗓️",
    category: "work",
  },
  {
    slug: "pro-rata-salary-calculator",
    name: "Pro-Rata Salary Calculator",
    shortName: "Pro-Rata Salary",
    description:
      "Part-time pay from a full-time salary figure.",
    seoIntro:
      "Working three days instead of five? Convert the full-time salary to your days or hours — with a take-home estimate after tax.",
    keywords: ["pro rata salary calculator", "part time salary calculator", "pro rata pay australia"],
    icon: "⏳",
    category: "pay",
  },
  {
    slug: "contract-day-rate-calculator",
    name: "Contract Day Rate Calculator",
    shortName: "Day Rate",
    description:
      "Day rate to annual income and after-tax estimate.",
    seoIntro:
      "Contractors: multiply your day rate by days worked to see annual gross — then a rough take-home after tax.",
    keywords: ["day rate calculator", "contractor day rate calculator", "daily rate calculator australia"],
    icon: "💼",
    category: "pay",
  },
  {
    slug: "shift-penalty-calculator",
    name: "Shift Penalty Rates Calculator",
    shortName: "Shift Penalties",
    description:
      "Weekend, evening and public holiday penalty pay.",
    seoIntro:
      "Saturday, Sunday, nights and public holidays often pay more. Enter your base rate and penalty type to see the loaded rate.",
    keywords: ["penalty rates calculator", "weekend penalty rates", "public holiday pay calculator australia"],
    icon: "🌙",
    category: "work",
  },
  {
    slug: "sick-leave-calculator",
    name: "Sick Leave Payout Calculator",
    shortName: "Sick Leave",
    description:
      "What your accrued sick leave is worth in cash.",
    seoIntro:
      "Leaving a job or planning time off? See the dollar value of personal or sick leave you've built up.",
    keywords: ["sick leave calculator", "personal leave payout calculator", "sick leave payout australia"],
    icon: "🤒",
    category: "work",
  },
  {
    slug: "tax-refund-estimator",
    name: "Tax Refund Estimator Australia",
    shortName: "Tax Refund",
    description:
      "Will you get a refund or owe money at tax time?",
    seoIntro:
      "Compare tax already withheld on your payslips against what you likely owe for the year — rough idea of refund or bill.",
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
