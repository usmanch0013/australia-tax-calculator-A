import type { ResultRow } from "./tax";
import {
  annualToHourly,
  calculateTotalTax,
  formatCurrency,
  formatPercent,
  hourlyToAnnual,
} from "./tax";

export const DIVISION_293_THRESHOLD = 250_000;
export const REDUNDANCY_TAX_FREE_BASE = 12_524;
export const REDUNDANCY_TAX_FREE_PER_YEAR = 6_264;
export const ETP_TAX_RATE = 0.32;

function getNesRedundancyWeeks(years: number): number {
  if (years < 1) return 0;
  if (years < 2) return 4;
  if (years < 3) return 6;
  if (years < 4) return 7;
  if (years < 5) return 8;
  if (years < 6) return 10;
  if (years < 7) return 11;
  if (years < 8) return 13;
  if (years < 9) return 14;
  if (years < 10) return 16;
  return 12;
}

export function calcPayRise(
  currentSalary: number,
  risePercent: number,
  hasHecs: boolean
) {
  const newSalary = currentSalary * (1 + risePercent / 100);
  const taxBefore = calculateTotalTax(currentSalary, { includeHecs: hasHecs });
  const taxAfter = calculateTotalTax(newSalary, { includeHecs: hasHecs });
  const netBefore = currentSalary - taxBefore.total;
  const netAfter = newSalary - taxAfter.total;
  const grossIncrease = newSalary - currentSalary;
  const netIncrease = netAfter - netBefore;
  const taxOnIncrease = taxAfter.total - taxBefore.total;

  return {
    rows: [
      { label: "Current Salary (Gross)", value: formatCurrency(currentSalary) },
      { label: "Pay Rise", value: formatPercent(risePercent, 1) },
      { label: "New Salary (Gross)", value: formatCurrency(newSalary), highlight: true },
      { label: "Gross Increase", value: formatCurrency(grossIncrease) },
      { label: "Tax on Increase", value: formatCurrency(taxOnIncrease), negative: true },
      { label: "Current Take-Home", value: formatCurrency(netBefore) },
      { label: "New Take-Home", value: formatCurrency(netAfter), highlight: true },
      { label: "Extra Take-Home (After Tax)", value: formatCurrency(netIncrease), highlight: true },
      { label: "You Keep", value: formatPercent(grossIncrease > 0 ? (netIncrease / grossIncrease) * 100 : 0) },
    ] satisfies ResultRow[],
    summary: formatCurrency(netIncrease),
  };
}

export function calcRedundancyPay(
  annualSalary: number,
  yearsOfService: number
) {
  const weeklyPay = annualSalary / 52;
  const weeks = getNesRedundancyWeeks(yearsOfService);
  const grossPayout = weeklyPay * weeks;
  const completedYears = Math.floor(yearsOfService);
  const taxFree = Math.min(
    grossPayout,
    REDUNDANCY_TAX_FREE_BASE + REDUNDANCY_TAX_FREE_PER_YEAR * completedYears
  );
  const taxable = Math.max(0, grossPayout - taxFree);
  const estimatedTax = taxable * ETP_TAX_RATE;
  const netPayout = grossPayout - estimatedTax;

  return {
    rows: [
      { label: "Annual Salary", value: formatCurrency(annualSalary) },
      { label: "Weekly Pay", value: formatCurrency(weeklyPay) },
      { label: "Years of Service", value: `${yearsOfService}` },
      { label: "NES Redundancy Weeks", value: `${weeks} weeks` },
      { label: "Gross Redundancy Pay", value: formatCurrency(grossPayout), highlight: true },
      { label: "Est. Tax-Free Component", value: formatCurrency(taxFree) },
      { label: "Est. Taxable Component", value: formatCurrency(taxable) },
      { label: "Est. Tax (32% on taxable)", value: formatCurrency(estimatedTax), negative: true },
      { label: "Est. Net Payout", value: formatCurrency(netPayout), highlight: true },
    ] satisfies ResultRow[],
    summary: formatCurrency(netPayout),
  };
}

export function calcDivision293(
  taxableIncome: number,
  concessionalSuper: number
) {
  const incomeFor293 = taxableIncome + concessionalSuper;
  const overThreshold = Math.max(0, incomeFor293 - DIVISION_293_THRESHOLD);
  const div293Base = Math.min(concessionalSuper, overThreshold);
  const div293Tax = div293Base * 0.15;

  return {
    rows: [
      { label: "Taxable Income", value: formatCurrency(taxableIncome) },
      { label: "Concessional Super Contributions", value: formatCurrency(concessionalSuper) },
      { label: "Income for Div 293 Purposes", value: formatCurrency(incomeFor293) },
      { label: "Division 293 Threshold", value: formatCurrency(DIVISION_293_THRESHOLD) },
      { label: "Amount Over Threshold", value: formatCurrency(overThreshold) },
      { label: "Div 293 Taxable Amount", value: formatCurrency(div293Base), highlight: true },
      { label: "Division 293 Tax (15%)", value: formatCurrency(div293Tax), highlight: true },
      { label: "Status", value: div293Tax > 0 ? "Division 293 applies" : "Below threshold — no extra tax" },
    ] satisfies ResultRow[],
    summary: formatCurrency(div293Tax),
  };
}

export function calcNovatedLease(
  annualSalary: number,
  annualLeaseCost: number,
  annualRunningCosts: number
) {
  const packageTotal = annualLeaseCost + annualRunningCosts;
  const taxBefore = calculateTotalTax(annualSalary);
  const taxAfter = calculateTotalTax(Math.max(0, annualSalary - packageTotal));
  const taxSaved = taxBefore.total - taxAfter.total;
  const effectiveCost = packageTotal - taxSaved;
  const netAfter = annualSalary - taxBefore.total;
  const netWithLease = annualSalary - packageTotal - taxAfter.total;

  return {
    rows: [
      { label: "Annual Salary", value: formatCurrency(annualSalary) },
      { label: "Annual Lease Cost", value: formatCurrency(annualLeaseCost) },
      { label: "Annual Running Costs", value: formatCurrency(annualRunningCosts) },
      { label: "Total Packaged Amount", value: formatCurrency(packageTotal) },
      { label: "Tax Before Packaging", value: formatCurrency(taxBefore.total), negative: true },
      { label: "Tax After Packaging", value: formatCurrency(taxAfter.total), negative: true },
      { label: "Annual Tax Saved", value: formatCurrency(taxSaved), highlight: true },
      { label: "Effective After-Tax Cost", value: formatCurrency(effectiveCost), highlight: true },
      { label: "Take-Home (Without Lease)", value: formatCurrency(netAfter) },
      { label: "Take-Home (With Lease)", value: formatCurrency(netWithLease) },
    ] satisfies ResultRow[],
    summary: formatCurrency(taxSaved),
  };
}

export function calcLongServiceLeave(
  annualSalary: number,
  yearsOfService: number
) {
  const weeklyPay = annualSalary / 52;
  const leaveWeeks = yearsOfService * 0.867;
  const leaveValue = weeklyPay * leaveWeeks;
  const leaveDays = leaveWeeks * 5;

  return {
    rows: [
      { label: "Annual Salary", value: formatCurrency(annualSalary) },
      { label: "Weekly Pay", value: formatCurrency(weeklyPay) },
      { label: "Years of Service", value: `${yearsOfService}` },
      { label: "Est. Leave Entitlement", value: `${leaveWeeks.toFixed(1)} weeks (~${leaveDays.toFixed(0)} days)` },
      { label: "Est. Leave Value", value: formatCurrency(leaveValue), highlight: true },
      { label: "Note", value: "Varies by state & award" },
    ] satisfies ResultRow[],
    summary: formatCurrency(leaveValue),
  };
}

export function calcProRata(
  fullTimeSalary: number,
  daysPerWeek: number,
  hasHecs: boolean
) {
  const fraction = daysPerWeek / 5;
  const proRataGross = fullTimeSalary * fraction;
  const tax = calculateTotalTax(proRataGross, { includeHecs: hasHecs });
  const net = proRataGross - tax.total;

  return {
    rows: [
      { label: "Full-Time Equivalent Salary", value: formatCurrency(fullTimeSalary) },
      { label: "Days per Week", value: `${daysPerWeek} of 5` },
      { label: "Pro-Rata Fraction", value: formatPercent(fraction * 100) },
      { label: "Pro-Rata Gross (Annual)", value: formatCurrency(proRataGross), highlight: true },
      { label: "Est. Tax", value: formatCurrency(tax.total), negative: true },
      { label: "Pro-Rata Take-Home", value: formatCurrency(net), highlight: true },
      { label: "Monthly Take-Home", value: formatCurrency(net / 12) },
      { label: "Weekly Take-Home", value: formatCurrency(net / 52) },
    ] satisfies ResultRow[],
    summary: formatCurrency(net),
  };
}

export function calcContractDayRate(
  dayRate: number,
  daysPerWeek: number,
  weeksPerYear: number,
  hasHecs: boolean
) {
  const annualGross = dayRate * daysPerWeek * weeksPerYear;
  const tax = calculateTotalTax(annualGross, { includeHecs: hasHecs });
  const net = annualGross - tax.total;
  const hourly = annualToHourly(annualGross, daysPerWeek * 8);

  return {
    rows: [
      { label: "Day Rate", value: formatCurrency(dayRate) },
      { label: "Days per Week", value: `${daysPerWeek}` },
      { label: "Working Weeks per Year", value: `${weeksPerYear}` },
      { label: "Annual Gross Income", value: formatCurrency(annualGross), highlight: true },
      { label: "Est. Annual Tax", value: formatCurrency(tax.total), negative: true },
      { label: "Est. Take-Home (Annual)", value: formatCurrency(net), highlight: true },
      { label: "Monthly Take-Home", value: formatCurrency(net / 12) },
      { label: "Equiv. Hourly Rate (Gross)", value: formatCurrency(hourly) },
    ] satisfies ResultRow[],
    summary: formatCurrency(annualGross),
  };
}

export type PenaltyType = "saturday" | "sunday" | "evening" | "publicHoliday";

const PENALTY_MULTIPLIERS: Record<PenaltyType, number> = {
  saturday: 1.5,
  sunday: 2,
  evening: 1.15,
  publicHoliday: 2.5,
};

export function calcShiftPenalty(
  baseHourly: number,
  hours: number,
  penaltyType: PenaltyType
) {
  const multiplier = PENALTY_MULTIPLIERS[penaltyType];
  const penaltyRate = baseHourly * multiplier;
  const penaltyPay = penaltyRate * hours;
  const standardPay = baseHourly * hours;
  const extraPay = penaltyPay - standardPay;

  const labels: Record<PenaltyType, string> = {
    saturday: "Saturday (1.5×)",
    sunday: "Sunday (2×)",
    evening: "Evening (1.15×)",
    publicHoliday: "Public Holiday (2.5×)",
  };

  return {
    rows: [
      { label: "Base Hourly Rate", value: formatCurrency(baseHourly) },
      { label: "Penalty Type", value: labels[penaltyType] },
      { label: "Penalty Multiplier", value: `${multiplier}×` },
      { label: "Penalty Hourly Rate", value: formatCurrency(penaltyRate), highlight: true },
      { label: "Hours Worked", value: `${hours}` },
      { label: "Standard Pay (same hours)", value: formatCurrency(standardPay) },
      { label: "Penalty Pay", value: formatCurrency(penaltyPay), highlight: true },
      { label: "Extra Earnings", value: formatCurrency(extraPay) },
    ] satisfies ResultRow[],
    summary: formatCurrency(penaltyPay),
  };
}

export function calcSickLeave(annualSalary: number, sickDays: number) {
  const dailyRate = annualSalary / 260;
  const payoutValue = dailyRate * sickDays;
  const standardAccrual = 10;
  const fullAccrualValue = dailyRate * standardAccrual;

  return {
    rows: [
      { label: "Annual Salary", value: formatCurrency(annualSalary) },
      { label: "Daily Rate", value: formatCurrency(dailyRate) },
      { label: "Sick/Personal Leave Days", value: `${sickDays} days` },
      { label: "Leave Payout Value", value: formatCurrency(payoutValue), highlight: true },
      { label: "Typical Annual Accrual (10 days)", value: formatCurrency(fullAccrualValue) },
    ] satisfies ResultRow[],
    summary: formatCurrency(payoutValue),
  };
}

export function calcTaxRefund(
  taxableIncome: number,
  taxWithheld: number,
  hasHecs: boolean
) {
  const tax = calculateTotalTax(taxableIncome, { includeHecs: hasHecs });
  const difference = taxWithheld - tax.total;
  const isRefund = difference > 0;

  return {
    rows: [
      { label: "Taxable Income", value: formatCurrency(taxableIncome) },
      { label: "Income Tax", value: formatCurrency(tax.incomeTax), negative: true },
      { label: "Medicare Levy", value: formatCurrency(tax.medicare), negative: true },
      ...(hasHecs
        ? [{ label: "HECS/HELP", value: formatCurrency(tax.hecs), negative: true }]
        : []),
      { label: "Total Tax Liability", value: formatCurrency(tax.total), highlight: true },
      { label: "Tax Withheld (PAYG)", value: formatCurrency(taxWithheld) },
      {
        label: isRefund ? "Estimated Refund" : "Amount Owing",
        value: formatCurrency(Math.abs(difference)),
        highlight: true,
      },
      { label: "Outcome", value: isRefund ? "Likely refund" : difference < 0 ? "Likely amount owing" : "Break even" },
    ] satisfies ResultRow[],
    summary: formatCurrency(Math.abs(difference)),
  };
}

export const MINIMUM_WAGE_HOURLY = 24.95;

export function calcSecondJobTax(
  primarySalary: number,
  secondJobIncome: number,
  hasHecs: boolean
) {
  const taxPrimary = calculateTotalTax(primarySalary, { includeHecs: hasHecs });
  const taxCombined = calculateTotalTax(primarySalary + secondJobIncome, {
    includeHecs: hasHecs,
  });
  const taxOnSecond = taxCombined.total - taxPrimary.total;
  const netSecond = secondJobIncome - taxOnSecond;
  const effRate = secondJobIncome > 0 ? (taxOnSecond / secondJobIncome) * 100 : 0;

  return {
    rows: [
      { label: "Primary Job (Gross)", value: formatCurrency(primarySalary) },
      {
        label: "Second Job Income (Gross)",
        value: formatCurrency(secondJobIncome),
        highlight: true,
      },
      {
        label: "Combined Gross Income",
        value: formatCurrency(primarySalary + secondJobIncome),
      },
      {
        label: "Tax on Second Job",
        value: formatCurrency(taxOnSecond),
        negative: true,
        highlight: true,
      },
      {
        label: "Second Job After Tax",
        value: formatCurrency(netSecond),
        highlight: true,
      },
      { label: "Effective Tax on Second Job", value: formatPercent(effRate) },
      {
        label: "Marginal Rate (Combined)",
        value: formatPercent(taxCombined.marginalRate),
      },
      {
        label: "Combined Take-Home",
        value: formatCurrency(
          primarySalary + secondJobIncome - taxCombined.total
        ),
      },
    ] satisfies ResultRow[],
    summary: formatCurrency(netSecond),
  };
}

export function calcMinimumWage(hoursPerWeek = 38) {
  const result = calcHourlyAfterTax(MINIMUM_WAGE_HOURLY, hoursPerWeek);
  return {
    ...result,
    rows: [
      {
        label: "National Minimum Wage (Hourly)",
        value: formatCurrency(MINIMUM_WAGE_HOURLY),
        highlight: true,
      },
      ...result.rows,
    ] satisfies ResultRow[],
    summary: result.summary,
  };
}

export function calcWeeklyPay(annualSalary: number, hasHecs: boolean) {
  const tax = calculateTotalTax(annualSalary, { includeHecs: hasHecs });
  const netAnnual = annualSalary - tax.total;

  return {
    rows: [
      { label: "Annual Salary (Gross)", value: formatCurrency(annualSalary) },
      {
        label: "Weekly Gross Pay",
        value: formatCurrency(annualSalary / 52),
        highlight: true,
      },
      { label: "Fortnightly Gross Pay", value: formatCurrency(annualSalary / 26) },
      { label: "Est. Annual Tax", value: formatCurrency(tax.total), negative: true },
      {
        label: "Weekly Take-Home",
        value: formatCurrency(netAnnual / 52),
        highlight: true,
      },
      { label: "Fortnightly Take-Home", value: formatCurrency(netAnnual / 26) },
      { label: "Monthly Take-Home", value: formatCurrency(netAnnual / 12) },
      { label: "Annual Take-Home", value: formatCurrency(netAnnual) },
    ] satisfies ResultRow[],
    summary: formatCurrency(netAnnual / 52),
  };
}

export function calcHourlyAfterTax(hourly: number, hoursPerWeek = 38) {
  const annual = hourlyToAnnual(hourly, hoursPerWeek);
  const tax = calculateTotalTax(annual);
  const netAnnual = annual - tax.total;
  const netHourly = netAnnual / (hoursPerWeek * 52);

  return {
    annual,
    netAnnual,
    netHourly,
    tax: tax.total,
    rows: [
      { label: "Hourly Rate (Gross)", value: formatCurrency(hourly) },
      { label: "Hours per Week", value: `${hoursPerWeek}` },
      { label: "Annual Salary (Gross)", value: formatCurrency(annual) },
      { label: "Est. Annual Tax", value: formatCurrency(tax.total), negative: true },
      { label: "Annual Take-Home", value: formatCurrency(netAnnual), highlight: true },
      { label: "Hourly Rate (After Tax)", value: formatCurrency(netHourly), highlight: true },
      { label: "Weekly Take-Home", value: formatCurrency(netAnnual / 52) },
      { label: "Fortnightly Take-Home", value: formatCurrency(netAnnual / 26) },
      { label: "Monthly Take-Home", value: formatCurrency(netAnnual / 12) },
    ] satisfies ResultRow[],
    summary: formatCurrency(netHourly),
  };
}
