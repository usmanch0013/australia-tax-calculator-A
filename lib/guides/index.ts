import type { ToolGuide } from "./types";
import { guide as annualLeave } from "./calculators/annual-leave-calculator";
import { guide as bonusTax } from "./calculators/bonus-tax-calculator";
import { guide as casualLoading } from "./calculators/casual-loading-calculator";
import { guide as contractDayRate } from "./calculators/contract-day-rate-calculator";
import { guide as division293 } from "./calculators/division-293-calculator";
import { guide as grossToNet } from "./calculators/gross-to-net-calculator";
import { guide as hecs } from "./calculators/hecs-calculator";
import { guide as hourlyToSalary } from "./calculators/hourly-to-salary-calculator";
import { guide as incomeTax } from "./calculators/income-tax-calculator";
import { guide as longServiceLeave } from "./calculators/long-service-leave-calculator";
import { guide as medicareLevy } from "./calculators/medicare-levy-calculator";
import { guide as netToGross } from "./calculators/net-to-gross-calculator";
import { guide as novatedLease } from "./calculators/novated-lease-calculator";
import { guide as overtime } from "./calculators/overtime-calculator";
import { guide as payCalculator } from "./calculators/pay-calculator";
import { guide as payRise } from "./calculators/pay-rise-calculator";
import { guide as proRataSalary } from "./calculators/pro-rata-salary-calculator";
import { guide as redundancyPay } from "./calculators/redundancy-pay-calculator";
import { guide as salarySacrifice } from "./calculators/salary-sacrifice-calculator";
import { guide as salaryToHourly } from "./calculators/salary-to-hourly-calculator";
import { guide as shiftPenalty } from "./calculators/shift-penalty-calculator";
import { guide as sickLeave } from "./calculators/sick-leave-calculator";
import { guide as superCalc } from "./calculators/super-calculator";
import { guide as takeHomePay } from "./calculators/take-home-pay-calculator";
import { guide as taxRefund } from "./calculators/tax-refund-estimator";

const GUIDES: Record<string, ToolGuide> = {
  "take-home-pay-calculator": takeHomePay,
  "pay-calculator": payCalculator,
  "hourly-to-salary-calculator": hourlyToSalary,
  "salary-to-hourly-calculator": salaryToHourly,
  "gross-to-net-calculator": grossToNet,
  "net-to-gross-calculator": netToGross,
  "income-tax-calculator": incomeTax,
  "medicare-levy-calculator": medicareLevy,
  "hecs-calculator": hecs,
  "bonus-tax-calculator": bonusTax,
  "salary-sacrifice-calculator": salarySacrifice,
  "super-calculator": superCalc,
  "casual-loading-calculator": casualLoading,
  "annual-leave-calculator": annualLeave,
  "overtime-calculator": overtime,
  "pay-rise-calculator": payRise,
  "redundancy-pay-calculator": redundancyPay,
  "division-293-calculator": division293,
  "novated-lease-calculator": novatedLease,
  "long-service-leave-calculator": longServiceLeave,
  "pro-rata-salary-calculator": proRataSalary,
  "contract-day-rate-calculator": contractDayRate,
  "shift-penalty-calculator": shiftPenalty,
  "sick-leave-calculator": sickLeave,
  "tax-refund-estimator": taxRefund,
};

export function getGuideBySlug(slug: string): ToolGuide | undefined {
  return GUIDES[slug];
}

export function getAllGuides(): ToolGuide[] {
  return Object.values(GUIDES);
}

export type { ToolGuide, GuideSection, GuideFaq } from "./types";
