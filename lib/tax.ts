export const SUPER_RATE = 0.12;

export const TAX_BRACKETS = [
  { min: 0, max: 18200, rate: 0, fixed: 0 },
  { min: 18200, max: 45000, rate: 0.16, fixed: 0 },
  { min: 45000, max: 135000, rate: 0.3, fixed: 4288 },
  { min: 135000, max: 190000, rate: 0.37, fixed: 31288 },
  { min: 190000, max: Infinity, rate: 0.45, fixed: 51638 },
] as const;

/** ATO HELP/HECS repayment rates 2024–25 */
export const HECS_BRACKETS = [
  { min: 0, max: 54435, rate: 0 },
  { min: 54435, max: 62850, rate: 0.01 },
  { min: 62850, max: 66620, rate: 0.02 },
  { min: 66620, max: 70618, rate: 0.025 },
  { min: 70618, max: 74855, rate: 0.03 },
  { min: 74855, max: 79346, rate: 0.035 },
  { min: 79346, max: 84107, rate: 0.04 },
  { min: 84107, max: 89154, rate: 0.045 },
  { min: 89154, max: 94503, rate: 0.05 },
  { min: 94503, max: 100174, rate: 0.055 },
  { min: 100174, max: 106185, rate: 0.06 },
  { min: 106185, max: 112556, rate: 0.065 },
  { min: 112556, max: 119309, rate: 0.07 },
  { min: 119309, max: 126467, rate: 0.075 },
  { min: 126467, max: 134056, rate: 0.08 },
  { min: 134056, max: 142100, rate: 0.085 },
  { min: 142100, max: 150626, rate: 0.09 },
  { min: 150626, max: 159663, rate: 0.095 },
  { min: 159663, max: Infinity, rate: 0.1 },
] as const;

export const MEDICARE_THRESHOLD = 26000;
export const MEDICARE_RATE = 0.02;
export const CASUAL_LOADING_RATE = 0.25;

export function formatCurrency(val: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(val);
}

export function formatPercent(val: number, decimals = 1): string {
  return `${val.toFixed(decimals)}%`;
}

export function calculateIncomeTax(taxableIncome: number): {
  tax: number;
  marginalRate: number;
} {
  let rawTax = 0;
  let marginalRate = 0;

  for (const bracket of TAX_BRACKETS) {
    if (taxableIncome > bracket.min) {
      const taxableAtThis = Math.min(
        taxableIncome - bracket.min,
        bracket.max - bracket.min
      );
      if (taxableIncome <= bracket.max) {
        rawTax = bracket.fixed + taxableAtThis * bracket.rate;
        marginalRate = bracket.rate;
        break;
      }
    }
  }

  return { tax: rawTax, marginalRate };
}

export function calculateMedicare(
  taxableIncome: number,
  exempt = false
): number {
  if (exempt || taxableIncome <= MEDICARE_THRESHOLD) return 0;
  return taxableIncome * MEDICARE_RATE;
}

export function getHecsRate(repaymentIncome: number): number {
  for (const bracket of HECS_BRACKETS) {
    if (repaymentIncome <= bracket.max) return bracket.rate;
  }
  return 0.1;
}

export function calculateHecs(repaymentIncome: number): number {
  return repaymentIncome * getHecsRate(repaymentIncome);
}

export function calculateTotalTax(
  taxableIncome: number,
  options: {
    medicareExempt?: boolean;
    includeHecs?: boolean;
  } = {}
): {
  incomeTax: number;
  medicare: number;
  hecs: number;
  total: number;
  marginalRate: number;
} {
  const { tax: incomeTax, marginalRate } = calculateIncomeTax(taxableIncome);
  const medicare = calculateMedicare(taxableIncome, options.medicareExempt);
  const hecs =
    options.includeHecs !== false ? calculateHecs(taxableIncome) : 0;

  return {
    incomeTax,
    medicare,
    hecs,
    total: incomeTax + medicare + hecs,
    marginalRate: marginalRate * 100 + (medicare > 0 ? 2 : 0) + (hecs > 0 ? getHecsRate(taxableIncome) * 100 : 0),
  };
}

export function hourlyToAnnual(hourly: number, hoursPerWeek = 38): number {
  return hourly * hoursPerWeek * 52;
}

export function annualToHourly(annual: number, hoursPerWeek = 38): number {
  return annual / (hoursPerWeek * 52);
}

export function findGrossForNet(
  targetNet: number,
  options: {
    medicareExempt?: boolean;
    includeHecs?: boolean;
  } = {}
): number {
  let low = targetNet;
  let high = targetNet * 2.5;

  while (high - low > 1) {
    const mid = (low + high) / 2;
    const { total } = calculateTotalTax(mid, options);
    const net = mid - total;
    if (net < targetNet) low = mid;
    else high = mid;
  }

  return Math.ceil(high);
}

export interface ResultRow {
  label: string;
  value: string;
  highlight?: boolean;
  negative?: boolean;
}
