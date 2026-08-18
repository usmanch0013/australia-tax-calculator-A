import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "pro-rata-salary-calculator",
  "Pro-Rata Salary Calculator Australia: Part-Time Pay Guide 2025–26",
  "A pro-rata salary is your pay adjusted for working less than a full-time load. Most full-time roles are based on a five-day, 38-hour week. If you work three days instead of five, your annual salary is typically three-fifths of the full-time equivalent. Our pro-rata salary calculator helps you convert a full-time package into part-time gross pay and estimated take-home after 2025–26 income tax, the 2% Medicare levy, and optional HECS/HELP repayments. If you're negotiating a new part-time role, returning from parental leave, or comparing job offers, understanding pro-rata pay helps you know exactly what lands in your bank account each week.",
  [
    section("What Is Pro-Rata Pay in Australia?", [
      "Pro-rata pay means proportional pay — you receive a fair share of a full-time salary based on the hours or days you actually work. If a full-time role pays $100,000 for five days per week and you work three days, your pro-rata salary is $60,000 before tax. Employers calculate this by dividing your working fraction by the standard full-time load. The National Employment Standards and most enterprise agreements require that part-time employees receive the same hourly rate and entitlements as comparable full-time staff, scaled to their hours.",
      "Pro-rata applies to base salary, annual leave accrual, sick leave, and often superannuation contributions. It does not mean you are paid less per hour — only that your total annual package reflects fewer hours. Always confirm whether advertised salaries are full-time equivalent or actual part-time pay, as job ads sometimes list the FTE figure without clarifying the working days required.",
    ]),
    section("How Pro-Rata Salary Is Calculated", [
      "The standard formula divides your working days by five (the typical full-time week) and multiplies by the full-time annual salary. For example, four days per week equals 80% of full-time, so $90,000 FTE becomes $72,000 gross annually. Our calculator uses this days-based method, which matches how most Australian employers structure part-time contracts. If your employer uses hours instead of days, divide your weekly hours by 38 to get the same fraction.",
      "Monthly and weekly take-home figures are derived by dividing annual net pay by 12 or 52. Remember that tax is calculated on your actual annual income, not the full-time equivalent. A part-time worker on $60,000 pays tax on $60,000 — you do not pay tax as if you earned the full $100,000 FTE. This often places part-time workers in lower marginal tax brackets, which can make the hourly value of part-time work slightly more favourable after tax than a naive pro-rata split might suggest.",
    ], {
      list: [
        "Pro-rata fraction = days worked per week ÷ 5",
        "Pro-rata gross = full-time salary × pro-rata fraction",
        "Daily equivalent = pro-rata gross ÷ (days per week × 52)",
        "Hourly equivalent = pro-rata gross ÷ (hours per week × 52)",
      ],
    }),
    section("2025–26 Tax on Part-Time Salaries", [
      "Australia's 2025–26 tax rates apply the Stage 3 cuts: 0% on income up to $18,200, 16% from $18,201 to $45,000, 30% from $45,001 to $135,000, 37% from $135,001 to $190,000, and 45% above $190,000. Part-time workers benefit from these brackets because their total taxable income is lower. Someone earning $50,000 pro-rata from a $83,333 FTE role pays roughly $6,688 in income tax plus $1,000 Medicare, leaving about $44,312 net — significantly more than half of what a $83,333 earner would take home.",
      "The Medicare levy of 2% applies once taxable income exceeds $26,000. Low Income Tax Offset (LITO) of up to $700 automatically reduces tax for earners under $37,500, which helps many part-time workers. If you have a HECS/HELP debt, repayments are calculated on your actual repayment income — part-time earnings may keep you below repayment thresholds or in a lower repayment tier. Toggle HECS in our calculator to see the impact on your part-time take-home.",
    ]),
    section("Part-Time vs Casual: Know the Difference", [
      "Part-time employees have ongoing regular hours, accrue leave, and receive pro-rata entitlements under the National Employment Standards. Casual employees receive a loading — typically 25% on top of the base hourly rate — instead of guaranteed hours and paid leave. A part-time worker on $35 per hour for 30 hours weekly earns $1,050 gross per week. A casual on the same base rate with 25% loading earns $43.75 per hour, or $1,312.50 for the same hours — but without paid annual or sick leave.",
      "When comparing a pro-rata part-time salary to casual work, factor in the value of paid leave. Ten days of annual leave and ten days of personal leave effectively add roughly 7.7% to a part-time worker's total remuneration package. Use our casual loading calculator alongside the pro-rata tool to compare both pathways fairly. Part-time roles also offer more predictable income and stronger protections under unfair dismissal laws.",
    ]),
    section("Superannuation on Pro-Rata Pay", [
      "Employers must pay superannuation guarantee at 12% on ordinary time earnings from 1 July 2025, regardless of whether you work full-time or part-time. Super is calculated on your actual gross salary, not the full-time equivalent. If your pro-rata salary is $60,000, your employer should contribute $7,200 to your super fund annually. Super is generally paid on top of your salary unless your contract specifies a total package inclusive of super.",
      "Part-time workers earning under $450 per month from a single employer previously faced a super gap, but rule changes have addressed this for many workers. Check that super appears on your payslip and matches 12% of your ordinary earnings. Salary sacrifice into super can further reduce taxable income — a strategy that works for part-time workers in higher FTE-equivalent roles who want to boost retirement savings while lowering their marginal tax rate.",
    ]),
    section("Negotiating a Pro-Rata Salary", [
      "When negotiating part-time work, always clarify whether the advertised salary is full-time equivalent or actual pay. Ask for the FTE figure, your scheduled days or hours, and the calculated pro-rata amount in writing before accepting. Request that your hourly rate matches the full-time rate — employers cannot legally pay part-time staff less per hour than full-time colleagues doing the same job under the Fair Work Act.",
      "Consider total package value beyond base salary, including super, leave loading, penalty rates, and any salary sacrifice benefits. If returning from parental leave on reduced hours, confirm whether your pro-rata salary maintains your previous hourly rate or is recalculated from a new FTE figure. Document agreed working days, as changing from three to four days mid-year affects both gross pay and leave accrual rates for the remainder of the financial year.",
    ]),
    section("Common Pro-Rata Scenarios", [
      "Parental leave return is one of the most common pro-rata situations. A parent returning three days per week on a $95,000 FTE role earns $57,000 gross annually. Tax and Medicare on that income leave roughly $47,500–$48,500 net depending on HECS status. Job sharing — two employees splitting one full-time role — means each receives 50% of the FTE salary with pro-rata entitlements.",
      "Students and semi-retirees often work two or three days weekly. A university student on two days from a $70,000 FTE package earns $28,000 gross, which may fall entirely within lower tax brackets with minimal Medicare. Retirees transitioning to part-time consultancy use pro-rata calculations to manage income below pension or tax thresholds. Our calculator handles any days-per-week input from one to five.",
      "Workers reducing hours for health, caring responsibilities, or study also rely on pro-rata maths. Transitioning from five days to four days on an $88,000 FTE salary drops gross pay to $70,400 — a $17,600 reduction that may be partly offset by lower tax. Mapping the before-and-after figures with our calculator clarifies whether reduced hours genuinely fit your budget after tax, super, and household expenses are accounted for.",
    ]),
    section("Using the Pro-Rata Salary Calculator", [
      "Enter your full-time equivalent annual salary — the amount you would earn working five days per week on the same hourly rate. Select the number of days you work each week. Optionally enable HECS/HELP to include study loan repayments in your estimate. The calculator displays your pro-rata fraction, annual gross, estimated total tax, annual take-home, and convenient monthly and weekly net figures.",
      "Results use 2025–26 ATO resident tax rates and the 2% Medicare levy. They are estimates only — your actual tax may differ based on offsets, private health insurance, second jobs, or investment income. For a complete picture, combine this tool with our take-home pay calculator and income tax calculator. If you know your hourly rate rather than an FTE salary, use the hourly-to-salary calculator first to establish the full-time equivalent figure.",
    ]),
    section("Rights and Entitlements for Part-Time Workers", [
      "Under the Fair Work Act and National Employment Standards, part-time employees accrue annual leave, personal/carer's leave, and long service leave on a pro-rata basis. A part-time worker on three days per week accrues annual leave at 4/5 of the full-time rate — roughly 8 days per year rather than 10. Public holiday entitlements depend on whether the holiday falls on a day you would normally work.",
      "Part-time workers have the same unfair dismissal protections as full-time staff once minimum employment periods are met. Request a written employment contract specifying your guaranteed hours, pro-rata salary, hourly rate, and leave accrual. If your employer increases your hours temporarily, confirm whether the extra days are paid at your standard rate or attract overtime or penalty rates under your award or agreement.",
    ]),
  ],
  [
    {
      question: "How do I calculate pro-rata salary from a full-time figure?",
      answer:
        "Divide your working days per week by five and multiply by the full-time annual salary. For example, three days from $80,000 FTE equals ($80,000 × 3/5) = $48,000 gross per year. If your employer uses hours, divide weekly hours by 38 instead of days by five.",
    },
    {
      question: "Is pro-rata salary before or after tax?",
      answer:
        "Pro-rata salary quoted by employers is almost always a gross (before-tax) figure, just like full-time salaries. Your take-home pay is the pro-rata gross minus income tax, Medicare levy, and any HECS repayments. Our calculator shows both gross and estimated net amounts.",
    },
    {
      question: "Do part-time workers get the same hourly rate as full-time staff?",
      answer:
        "Yes. Under Australian law, part-time employees doing the same work must receive the same base hourly rate as full-time colleagues. Pro-rata applies to total hours worked, not the rate per hour. Casual workers receive a loading on top of the base rate instead of paid leave entitlements.",
    },
    {
      question: "How does HECS affect my part-time take-home pay?",
      answer:
        "HECS/HELP repayments are based on your actual repayment income, not your full-time equivalent salary. If your pro-rata income falls below $54,435 in 2025–26, you make no compulsory repayments. Above that threshold, repayments scale from 1% to 10% of repayment income depending on your earnings.",
    },
    {
      question: "Does super apply to pro-rata salary?",
      answer:
        "Yes. Employers pay 12% superannuation guarantee on your actual ordinary time earnings from 1 July 2025, whether you work full-time or part-time. Super is typically paid on top of your salary. On a $50,000 pro-rata salary, expect approximately $6,000 in annual employer super contributions.",
    },
    {
      question: "Can I work part-time at two jobs without extra tax?",
      answer:
        "You can hold multiple part-time jobs, but your total taxable income combines all sources. If you claim the tax-free threshold from more than one employer, you may under-pay tax during the year and owe money at tax time. Claim the threshold from your highest-paying job only, and request higher withholding from secondary employers.",
    },
  ]
);
