"use client";

import { useMemo, useState } from "react";
import {
  calcAnnualLeave,
  calcBonusTax,
  calcCasualLoading,
  calcGrossToNet,
  calcHecs,
  calcHourlyToSalary,
  calcIncomeTax,
  calcMedicare,
  calcNetToGross,
  calcOvertime,
  calcSalarySacrifice,
  calcSalaryToHourly,
  calcSuper,
} from "@/lib/tools";
import {
  calcContractDayRate,
  calcDivision293,
  calcLongServiceLeave,
  calcMinimumWage,
  calcNovatedLease,
  calcPayRise,
  calcProRata,
  calcRedundancyPay,
  calcSecondJobTax,
  calcShiftPenalty,
  calcSickLeave,
  calcTaxRefund,
  calcWeeklyPay,
  type PenaltyType,
} from "@/lib/extra-tools";
import {
  ResultTable,
  ToolCard,
  ToolCheckbox,
  ToolNumberField,
  ToolSelect,
} from "./ToolUI";

interface ToolCalculatorProps {
  slug: string;
}

export default function ToolCalculator({ slug }: ToolCalculatorProps) {
  switch (slug) {
    case "hourly-to-salary-calculator":
      return <HourlyToSalary />;
    case "salary-to-hourly-calculator":
      return <SalaryToHourly />;
    case "gross-to-net-calculator":
      return <GrossToNet />;
    case "net-to-gross-calculator":
      return <NetToGross />;
    case "income-tax-calculator":
      return <IncomeTax />;
    case "medicare-levy-calculator":
      return <MedicareLevy />;
    case "hecs-calculator":
      return <HecsCalc />;
    case "bonus-tax-calculator":
      return <BonusTax />;
    case "salary-sacrifice-calculator":
      return <SalarySacrifice />;
    case "super-calculator":
      return <SuperCalc />;
    case "casual-loading-calculator":
      return <CasualLoading />;
    case "annual-leave-calculator":
      return <AnnualLeave />;
    case "overtime-calculator":
      return <OvertimeCalc />;
    case "pay-rise-calculator":
      return <PayRiseCalc />;
    case "redundancy-pay-calculator":
      return <RedundancyCalc />;
    case "division-293-calculator":
      return <Division293Calc />;
    case "novated-lease-calculator":
      return <NovatedLeaseCalc />;
    case "long-service-leave-calculator":
      return <LongServiceLeaveCalc />;
    case "pro-rata-salary-calculator":
      return <ProRataCalc />;
    case "contract-day-rate-calculator":
      return <ContractDayRateCalc />;
    case "shift-penalty-calculator":
      return <ShiftPenaltyCalc />;
    case "sick-leave-calculator":
      return <SickLeaveCalc />;
    case "tax-refund-estimator":
      return <TaxRefundCalc />;
    case "second-job-tax-calculator":
      return <SecondJobTaxCalc />;
    case "minimum-wage-calculator":
      return <MinimumWageCalc />;
    case "weekly-pay-calculator":
      return <WeeklyPayCalc />;
    default:
      return null;
  }
}

function HourlyToSalary() {
  const [hourly, setHourly] = useState(35);
  const [hours, setHours] = useState(38);
  const result = useMemo(() => calcHourlyToSalary(hourly, hours), [hourly, hours]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Hourly Rate" id="hourly" prefix="$" value={hourly} onChange={setHourly} step={0.5} />
        <ToolNumberField label="Hours per Week" id="hours" value={hours} onChange={setHours} min={1} max={168} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Annual Gross Salary" summaryValue={result.summary} />
    </ToolCard>
  );
}

function SalaryToHourly() {
  const [annual, setAnnual] = useState(80000);
  const [hours, setHours] = useState(38);
  const result = useMemo(() => calcSalaryToHourly(annual, hours), [annual, hours]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Annual Salary" id="annual" prefix="$" value={annual} onChange={setAnnual} step={1000} />
        <ToolNumberField label="Hours per Week" id="hours" value={hours} onChange={setHours} min={1} max={168} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Hourly Rate (Gross)" summaryValue={result.summary} />
    </ToolCard>
  );
}

function GrossToNet() {
  const [gross, setGross] = useState(80000);
  const [hecs, setHecs] = useState(false);
  const result = useMemo(() => calcGrossToNet(gross, hecs), [gross, hecs]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Gross Annual Income" id="gross" prefix="$" value={gross} onChange={setGross} step={1000} />
        <ToolCheckbox label="HECS/HELP debt" id="hecs" checked={hecs} onChange={setHecs} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Take-Home Pay" summaryValue={result.summary} />
    </ToolCard>
  );
}

function NetToGross() {
  const [net, setNet] = useState(60000);
  const [hecs, setHecs] = useState(false);
  const result = useMemo(() => calcNetToGross(net, hecs), [net, hecs]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Target Take-Home (Annual)" id="net" prefix="$" value={net} onChange={setNet} step={1000} />
        <ToolCheckbox label="HECS/HELP debt" id="hecs" checked={hecs} onChange={setHecs} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Required Gross Salary" summaryValue={result.summary} />
    </ToolCard>
  );
}

function IncomeTax() {
  const [income, setIncome] = useState(80000);
  const result = useMemo(() => calcIncomeTax(income), [income]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Taxable Income" id="income" prefix="$" value={income} onChange={setIncome} step={1000} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Income Tax Payable" summaryValue={result.summary} />
    </ToolCard>
  );
}

function MedicareLevy() {
  const [income, setIncome] = useState(80000);
  const result = useMemo(() => calcMedicare(income), [income]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Taxable Income" id="income" prefix="$" value={income} onChange={setIncome} step={1000} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Medicare Levy" summaryValue={result.summary} />
    </ToolCard>
  );
}

function HecsCalc() {
  const [income, setIncome] = useState(80000);
  const result = useMemo(() => calcHecs(income), [income]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Repayment Income (Annual)" id="income" prefix="$" value={income} onChange={setIncome} step={1000} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Annual HECS Repayment" summaryValue={result.summary} />
    </ToolCard>
  );
}

function BonusTax() {
  const [salary, setSalary] = useState(80000);
  const [bonus, setBonus] = useState(10000);
  const [hecs, setHecs] = useState(false);
  const result = useMemo(() => calcBonusTax(salary, bonus, hecs), [salary, bonus, hecs]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Annual Salary" id="salary" prefix="$" value={salary} onChange={setSalary} step={1000} />
        <ToolNumberField label="Bonus Amount" id="bonus" prefix="$" value={bonus} onChange={setBonus} step={500} />
        <ToolCheckbox label="HECS/HELP debt" id="hecs" checked={hecs} onChange={setHecs} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Bonus After Tax" summaryValue={result.summary} />
    </ToolCard>
  );
}

function SalarySacrifice() {
  const [salary, setSalary] = useState(100000);
  const [sacrifice, setSacrifice] = useState(10000);
  const result = useMemo(() => calcSalarySacrifice(salary, sacrifice), [salary, sacrifice]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Annual Salary" id="salary" prefix="$" value={salary} onChange={setSalary} step={1000} />
        <ToolNumberField label="Salary Sacrifice Amount" id="sacrifice" prefix="$" value={sacrifice} onChange={setSacrifice} step={500} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Tax Saved" summaryValue={result.summary} />
    </ToolCard>
  );
}

function SuperCalc() {
  const [salary, setSalary] = useState(80000);
  const [inclusive, setInclusive] = useState(false);
  const result = useMemo(() => calcSuper(salary, inclusive), [salary, inclusive]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Salary Amount" id="salary" prefix="$" value={salary} onChange={setSalary} step={1000} />
        <ToolSelect
          label="Superannuation Mode"
          id="mode"
          value={inclusive ? "inclusive" : "top"}
          options={[
            { value: "top", label: "Super on top (12%)" },
            { value: "inclusive", label: "Inclusive of super" },
          ]}
          onChange={(v) => setInclusive(v === "inclusive")}
        />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Employer Super" summaryValue={result.summary} />
    </ToolCard>
  );
}

function CasualLoading() {
  const [hourly, setHourly] = useState(30);
  const [hours, setHours] = useState(38);
  const result = useMemo(() => calcCasualLoading(hourly, hours), [hourly, hours]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Base Hourly Rate" id="hourly" prefix="$" value={hourly} onChange={setHourly} step={0.5} />
        <ToolNumberField label="Hours per Week" id="hours" value={hours} onChange={setHours} min={1} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Casual Hourly Rate" summaryValue={result.summary} />
    </ToolCard>
  );
}

function AnnualLeave() {
  const [salary, setSalary] = useState(80000);
  const [days, setDays] = useState(20);
  const result = useMemo(() => calcAnnualLeave(salary, days), [salary, days]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Annual Salary" id="salary" prefix="$" value={salary} onChange={setSalary} step={1000} />
        <ToolNumberField label="Leave Days" id="days" value={days} onChange={setDays} min={1} max={365} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Leave Payout Value" summaryValue={result.summary} />
    </ToolCard>
  );
}

function OvertimeCalc() {
  const [hourly, setHourly] = useState(35);
  const [hours, setHours] = useState(10);
  const [multiplier, setMultiplier] = useState(1.5);
  const result = useMemo(() => calcOvertime(hourly, hours, multiplier), [hourly, hours, multiplier]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Base Hourly Rate" id="hourly" prefix="$" value={hourly} onChange={setHourly} step={0.5} />
        <ToolNumberField label="Overtime Hours" id="hours" value={hours} onChange={setHours} min={0.5} step={0.5} />
        <ToolSelect
          label="Overtime Rate"
          id="multiplier"
          value={multiplier}
          options={[
            { value: 1.5, label: "Time and a half (1.5×)" },
            { value: 2, label: "Double time (2×)" },
            { value: 2.5, label: "Double time and a half (2.5×)" },
          ]}
          onChange={(v) => setMultiplier(parseFloat(v))}
        />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Overtime Pay" summaryValue={result.summary} />
    </ToolCard>
  );
}

function PayRiseCalc() {
  const [salary, setSalary] = useState(80000);
  const [rise, setRise] = useState(10);
  const [hecs, setHecs] = useState(false);
  const result = useMemo(() => calcPayRise(salary, rise, hecs), [salary, rise, hecs]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Current Annual Salary" id="salary" prefix="$" value={salary} onChange={setSalary} step={1000} />
        <ToolNumberField label="Pay Rise (%)" id="rise" suffix="%" value={rise} onChange={setRise} min={0} max={100} step={0.5} />
        <ToolCheckbox label="HECS/HELP debt" id="hecs" checked={hecs} onChange={setHecs} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Extra Take-Home (After Tax)" summaryValue={result.summary} />
    </ToolCard>
  );
}

function RedundancyCalc() {
  const [salary, setSalary] = useState(90000);
  const [years, setYears] = useState(5);
  const result = useMemo(() => calcRedundancyPay(salary, years), [salary, years]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Annual Salary" id="salary" prefix="$" value={salary} onChange={setSalary} step={1000} />
        <ToolNumberField label="Years of Service" id="years" value={years} onChange={setYears} min={0} max={50} step={0.5} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Est. Net Redundancy Pay" summaryValue={result.summary} />
    </ToolCard>
  );
}

function Division293Calc() {
  const [income, setIncome] = useState(220000);
  const [superContrib, setSuperContrib] = useState(27500);
  const result = useMemo(() => calcDivision293(income, superContrib), [income, superContrib]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Taxable Income" id="income" prefix="$" value={income} onChange={setIncome} step={1000} />
        <ToolNumberField label="Concessional Super Contributions" id="super" prefix="$" value={superContrib} onChange={setSuperContrib} step={500} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Division 293 Tax" summaryValue={result.summary} />
    </ToolCard>
  );
}

function NovatedLeaseCalc() {
  const [salary, setSalary] = useState(100000);
  const [lease, setLease] = useState(8000);
  const [running, setRunning] = useState(4000);
  const result = useMemo(() => calcNovatedLease(salary, lease, running), [salary, lease, running]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Annual Salary" id="salary" prefix="$" value={salary} onChange={setSalary} step={1000} />
        <ToolNumberField label="Annual Lease Cost" id="lease" prefix="$" value={lease} onChange={setLease} step={500} />
        <ToolNumberField label="Annual Running Costs" id="running" prefix="$" value={running} onChange={setRunning} step={500} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Annual Tax Saved" summaryValue={result.summary} />
    </ToolCard>
  );
}

function LongServiceLeaveCalc() {
  const [salary, setSalary] = useState(80000);
  const [years, setYears] = useState(10);
  const result = useMemo(() => calcLongServiceLeave(salary, years), [salary, years]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Annual Salary" id="salary" prefix="$" value={salary} onChange={setSalary} step={1000} />
        <ToolNumberField label="Years of Service" id="years" value={years} onChange={setYears} min={0} max={50} step={0.5} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Est. Leave Value" summaryValue={result.summary} />
    </ToolCard>
  );
}

function ProRataCalc() {
  const [salary, setSalary] = useState(100000);
  const [days, setDays] = useState(3);
  const [hecs, setHecs] = useState(false);
  const result = useMemo(() => calcProRata(salary, days, hecs), [salary, days, hecs]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Full-Time Equivalent Salary" id="salary" prefix="$" value={salary} onChange={setSalary} step={1000} />
        <ToolNumberField label="Days per Week" id="days" value={days} onChange={setDays} min={1} max={5} />
        <ToolCheckbox label="HECS/HELP debt" id="hecs" checked={hecs} onChange={setHecs} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Pro-Rata Take-Home" summaryValue={result.summary} />
    </ToolCard>
  );
}

function ContractDayRateCalc() {
  const [dayRate, setDayRate] = useState(600);
  const [days, setDays] = useState(4);
  const [weeks, setWeeks] = useState(48);
  const [hecs, setHecs] = useState(false);
  const result = useMemo(() => calcContractDayRate(dayRate, days, weeks, hecs), [dayRate, days, weeks, hecs]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Day Rate" id="dayRate" prefix="$" value={dayRate} onChange={setDayRate} step={50} />
        <ToolNumberField label="Days per Week" id="days" value={days} onChange={setDays} min={1} max={7} />
        <ToolNumberField label="Working Weeks per Year" id="weeks" value={weeks} onChange={setWeeks} min={1} max={52} />
        <ToolCheckbox label="HECS/HELP debt" id="hecs" checked={hecs} onChange={setHecs} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Annual Gross Income" summaryValue={result.summary} />
    </ToolCard>
  );
}

function ShiftPenaltyCalc() {
  const [hourly, setHourly] = useState(35);
  const [hours, setHours] = useState(8);
  const [penaltyType, setPenaltyType] = useState<PenaltyType>("saturday");
  const result = useMemo(() => calcShiftPenalty(hourly, hours, penaltyType), [hourly, hours, penaltyType]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Base Hourly Rate" id="hourly" prefix="$" value={hourly} onChange={setHourly} step={0.5} />
        <ToolNumberField label="Hours Worked" id="hours" value={hours} onChange={setHours} min={0.5} step={0.5} />
        <ToolSelect
          label="Penalty Type"
          id="penalty"
          value={penaltyType}
          options={[
            { value: "saturday", label: "Saturday (1.5×)" },
            { value: "sunday", label: "Sunday (2×)" },
            { value: "evening", label: "Evening (1.15×)" },
            { value: "publicHoliday", label: "Public Holiday (2.5×)" },
          ]}
          onChange={(v) => setPenaltyType(v as PenaltyType)}
        />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Penalty Pay" summaryValue={result.summary} />
    </ToolCard>
  );
}

function SickLeaveCalc() {
  const [salary, setSalary] = useState(80000);
  const [days, setDays] = useState(10);
  const result = useMemo(() => calcSickLeave(salary, days), [salary, days]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Annual Salary" id="salary" prefix="$" value={salary} onChange={setSalary} step={1000} />
        <ToolNumberField label="Sick/Personal Leave Days" id="days" value={days} onChange={setDays} min={1} max={365} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Leave Payout Value" summaryValue={result.summary} />
    </ToolCard>
  );
}

function TaxRefundCalc() {
  const [income, setIncome] = useState(80000);
  const [withheld, setWithheld] = useState(20000);
  const [hecs, setHecs] = useState(false);
  const result = useMemo(() => calcTaxRefund(income, withheld, hecs), [income, withheld, hecs]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Taxable Income" id="income" prefix="$" value={income} onChange={setIncome} step={1000} />
        <ToolNumberField label="Tax Withheld (PAYG)" id="withheld" prefix="$" value={withheld} onChange={setWithheld} step={500} />
        <ToolCheckbox label="HECS/HELP debt" id="hecs" checked={hecs} onChange={setHecs} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Refund / Amount Owing" summaryValue={result.summary} />
    </ToolCard>
  );
}

function SecondJobTaxCalc() {
  const [primary, setPrimary] = useState(70000);
  const [second, setSecond] = useState(15000);
  const [hecs, setHecs] = useState(false);
  const result = useMemo(
    () => calcSecondJobTax(primary, second, hecs),
    [primary, second, hecs]
  );

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Primary Job Salary" id="primary" prefix="$" value={primary} onChange={setPrimary} step={1000} />
        <ToolNumberField label="Second Job Income" id="second" prefix="$" value={second} onChange={setSecond} step={500} />
        <ToolCheckbox label="HECS/HELP debt" id="hecs" checked={hecs} onChange={setHecs} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Second Job After Tax" summaryValue={result.summary} />
    </ToolCard>
  );
}

function MinimumWageCalc() {
  const [hours, setHours] = useState(38);
  const result = useMemo(() => calcMinimumWage(hours), [hours]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Hours per Week" id="hours" value={hours} onChange={setHours} min={1} max={60} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Hourly After Tax" summaryValue={result.summary} />
    </ToolCard>
  );
}

function WeeklyPayCalc() {
  const [annual, setAnnual] = useState(80000);
  const [hecs, setHecs] = useState(false);
  const result = useMemo(() => calcWeeklyPay(annual, hecs), [annual, hecs]);

  return (
    <ToolCard>
      <div className="tool-form">
        <ToolNumberField label="Annual Salary" id="annual" prefix="$" value={annual} onChange={setAnnual} step={1000} />
        <ToolCheckbox label="HECS/HELP debt" id="hecs" checked={hecs} onChange={setHecs} />
      </div>
      <ResultTable rows={result.rows} summaryLabel="Weekly Take-Home" summaryValue={result.summary} />
    </ToolCard>
  );
}
