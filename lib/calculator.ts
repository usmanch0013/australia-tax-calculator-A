import {
  calculateHecs,
  calculateIncomeTax,
  calculateMedicare,
  formatCurrency,
  SUPER_RATE,
  type ResultRow,
} from "./tax";

export type SalaryBasis =
  | "annually"
  | "monthly"
  | "fortnightly"
  | "weekly"
  | "daily"
  | "hourly";

export type SuperMode = "top" | "inclusive";
export type FamilyStatus = "single" | "couple";
export type PayFrequency = 1 | 12 | 26 | 52;

export interface CalculatorInput {
  salary: number;
  basis: SalaryBasis;
  frequency: PayFrequency;
  hoursPerWeek: number;
  superMode: SuperMode;
  familyStatus: FamilyStatus;
  hasHecs: boolean;
  medicareExempt: boolean;
  isSapto: boolean;
  otherIncome: number;
  workDeductions: number;
}

export interface CalculatorResults {
  gross: number;
  base: number;
  net: number;
  deductions: number;
  super: number;
  effRate: string;
  marRate: string;
  tax: number;
  saptoOffset: number;
  medicare: number;
  hecs: number;
  totalDeductions: number;
  annualGross: number;
  annualNet: number;
  annualTax: number;
  donutGradient: string;
  breakdown: BreakdownRow[];
  payPeriods: PayPeriodRow[];
  chartTakeHomeLabel: string;
}

export interface BreakdownRow {
  label: string;
  value: string;
  className?: string;
  valueStyle?: { color?: string };
}

export interface PayPeriodRow {
  name: string;
  gross: string;
  tax: string;
  net: string;
}

export { formatCurrency } from "./tax";

function toAnnualSalary(
  inputVal: number,
  basis: SalaryBasis,
  hoursPerWeek: number
): number {
  switch (basis) {
    case "monthly":
      return inputVal * 12;
    case "fortnightly":
      return inputVal * 26;
    case "weekly":
      return inputVal * 52;
    case "daily":
      return inputVal * 260;
    case "hourly":
      return inputVal * hoursPerWeek * 52;
    default:
      return inputVal;
  }
}

export function calculateSalary(input: CalculatorInput): CalculatorResults {
  const annualVal = toAnnualSalary(
    input.salary,
    input.basis,
    input.hoursPerWeek
  );

  let gross = annualVal;
  let superAmount = 0;
  let baseSalary = annualVal;

  if (input.superMode === "inclusive") {
    gross = annualVal / (1 + SUPER_RATE);
    superAmount = annualVal - gross;
    baseSalary = gross;
  } else {
    superAmount = gross * SUPER_RATE;
  }

  const taxableIncome = Math.max(
    0,
    gross + input.otherIncome - input.workDeductions
  );

  const { tax: rawTax, marginalRate: marginalRateDecimal } =
    calculateIncomeTax(taxableIncome);
  let marginalRate = marginalRateDecimal * 100;

  let saptoOffset = 0;
  if (input.isSapto) {
    const maxOffset = input.familyStatus === "single" ? 2230 : 1602;
    const threshold = input.familyStatus === "single" ? 32279 : 28974;
    saptoOffset =
      taxableIncome <= threshold
        ? maxOffset
        : Math.max(0, maxOffset - (taxableIncome - threshold) * 0.125);
  }

  const tax = Math.max(0, rawTax - saptoOffset);

  const medicare = calculateMedicare(taxableIncome, input.medicareExempt);
  if (medicare > 0) marginalRate += 2;

  let hecs = 0;
  if (input.hasHecs && taxableIncome > 54435) {
    hecs = calculateHecs(taxableIncome);
    marginalRate += getHecsMarginal(taxableIncome);
  }

  const totalDeductions = tax + medicare + hecs;
  const takeHome = gross - totalDeductions;
  const effectiveRate = gross > 0 ? (totalDeductions / gross) * 100 : 0;
  const freq = input.frequency;

  const dispGross = gross / freq;
  const dispTakeHome = takeHome / freq;
  const dispDeductions = totalDeductions / freq;
  const dispSuper = superAmount / freq;

  const taxPct = gross > 0 ? ((tax + hecs) / gross) * 100 : 0;
  const medPct = gross > 0 ? (medicare / gross) * 100 : 0;
  const p1 = taxPct;
  const p2 = p1 + medPct;
  const donutGradient =
    gross === 0
      ? "conic-gradient(var(--chart-takehome) 0% 100%)"
      : `conic-gradient(var(--chart-tax) 0% ${p1}%, var(--chart-medicare) ${p1}% ${p2}%, var(--chart-takehome) ${p2}% 100%)`;

  const breakdown: BreakdownRow[] = [
    { label: "Gross Salary", value: formatCurrency(gross / freq) },
    {
      label: "Taxable Income (Base Salary)",
      value: formatCurrency(baseSalary / freq),
    },
    {
      label: "Income Tax (Gross)",
      value: `-${formatCurrency(rawTax / freq)}`,
      className: "asc-breakdown-row",
    },
  ];

  if (saptoOffset > 0) {
    breakdown.push({
      label: "SAPTO Tax Offset",
      value: `+${formatCurrency(saptoOffset / freq)}`,
      valueStyle: { color: "var(--chart-super)" },
    });
  }

  const netTax = Math.max(0, rawTax - saptoOffset);
  breakdown.push({
    label: "Net Income Tax",
    value: `-${formatCurrency(netTax / freq)}`,
    className: "asc-breakdown-row",
  });

  if (medicare > 0) {
    breakdown.push({
      label: "Medicare Levy (2%)",
      value: `-${formatCurrency(medicare / freq)}`,
      className: "asc-breakdown-row",
    });
  }

  if (hecs > 0) {
    breakdown.push({
      label: "HECS / HELP Repayment",
      value: `-${formatCurrency(hecs / freq)}`,
      className: "asc-breakdown-row",
    });
  }

  breakdown.push({
    label: "Take-Home Pay",
    value: formatCurrency(takeHome / freq),
    className: "asc-breakdown-total",
    valueStyle: { color: "var(--accent-primary)" },
  });

  const periods = [
    { name: "Annual", d: 1 },
    { name: "Monthly", d: 12 },
    { name: "Fortnightly", d: 26 },
    { name: "Weekly", d: 52 },
    { name: "Daily", d: 260 },
    { name: "Hourly", d: 1976 },
  ];

  const payPeriods: PayPeriodRow[] = periods.map((p) => ({
    name: p.name,
    gross: formatCurrency(gross / p.d),
    tax: formatCurrency(totalDeductions / p.d),
    net: formatCurrency(takeHome / p.d),
  }));

  return {
    gross: dispGross,
    base: baseSalary / freq,
    net: dispTakeHome,
    deductions: dispDeductions,
    super: dispSuper,
    effRate: effectiveRate.toFixed(1),
    marRate: marginalRate.toFixed(1),
    tax: rawTax,
    saptoOffset,
    medicare,
    hecs,
    totalDeductions,
    annualGross: gross,
    annualNet: takeHome,
    annualTax: totalDeductions,
    donutGradient,
    breakdown,
    payPeriods,
    chartTakeHomeLabel: formatCurrency(dispTakeHome).split(".")[0],
  };
}

function getHecsMarginal(income: number): number {
  if (income <= 54435) return 0;
  if (income <= 89154) return 5;
  return 10;
}

export const defaultInput: CalculatorInput = {
  salary: 80000,
  basis: "annually",
  frequency: 1,
  hoursPerWeek: 38,
  superMode: "top",
  familyStatus: "single",
  hasHecs: false,
  medicareExempt: false,
  isSapto: false,
  otherIncome: 0,
  workDeductions: 0,
};

export type { ResultRow };
