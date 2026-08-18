import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "gross-to-net-calculator",
  "Gross to Net Salary Calculator Australia: Guide",
  "A gross to net calculator shows exactly how much of your salary you keep after Australian income tax, the Medicare levy, and HECS repayments are deducted. Gross pay is what appears on your employment contract; net pay is what lands in your bank account. Understanding the gap between these figures is fundamental to budgeting, comparing job offers, and planning your financial future. Our gross to net calculator applies the 2025–26 ATO tax brackets — including Stage 3 tax cuts — the 2% Medicare levy on income above $26,000, and current HECS repayment thresholds to produce a detailed deduction breakdown and your exact take-home pay across weekly, fortnightly, monthly, and annual pay cycles.",
  [
    section(
      "What Does Gross to Net Mean?",
      [
        "Gross to net refers to the conversion of your pre-tax salary (gross) to your after-tax take-home pay (net). The difference between gross and net is determined by mandatory deductions withheld through the PAYG system: income tax calculated using progressive tax brackets, the Medicare levy at 2%, and compulsory HECS or HELP repayments if you have a student loan. Optional deductions like salary sacrifice, union fees, or private health insurance further reduce net pay but are not part of the standard gross to net calculation.",
        "The gross to net gap varies significantly with income. At $50,000 gross, you might take home around $42,000 — losing roughly 16% to tax and Medicare. At $150,000 gross, take-home pay is closer to $103,000 — an effective deduction rate near 31%. Australia's progressive tax system means higher earners lose a larger percentage of gross pay to tax, making gross to net calculations essential at every income level for accurate financial planning.",
      ],
      {
        list: [
          "Gross: total salary before any deductions",
          "Net: take-home pay after tax, Medicare, and HECS",
          "Deduction gap: typically 15–35% depending on income",
          "PAYG: Pay As You Go withholding system for employee tax",
        ],
      }
    ),
    section(
      "How the Gross to Net Calculator Works",
      [
        "Enter your gross annual salary and the calculator processes each 2025–26 tax bracket sequentially. The first $18,200 earns zero tax. Income from $18,201 to $45,000 is taxed at 16%, from $45,001 to $135,000 at 30%, from $135,001 to $190,000 at 37%, and above $190,000 at 45%. These Stage 3 rates have been in effect since 1 July 2024. The calculator shows income tax as a separate line item for full transparency.",
        "Next, the 2% Medicare levy is calculated on taxable income above $26,000 and displayed separately. If you enable HECS, the applicable repayment rate — from 1% to 10% based on your income — is applied and shown as its own deduction. The sum of all deductions is subtracted from gross pay to produce net pay, which is then divided into weekly, fortnightly, monthly, and annual take-home amounts. Employer superannuation at 12% is shown separately as it is not deducted from your cash salary.",
      ]
    ),
    section(
      "When to Use a Gross to Net Calculator",
      [
        "Use a gross to net calculator whenever you need to see the complete deduction picture from a gross salary figure. This is the most detailed tax breakdown tool available for Australian employees, showing every component — income tax, Medicare, HECS — as a separate line item rather than a single combined deduction. It is ideal when you want to understand exactly where your money goes between gross and net.",
        "The calculator is particularly useful before accepting a job offer, during salary negotiations, when planning a budget based on a new income level, or when verifying that your payslip deductions are correct. If you are deciding whether to salary sacrifice into super, the gross to net calculator helps you model how reducing taxable income affects each deduction line and your resulting net pay. For a simpler net pay focus, our take-home pay calculator provides similar results with emphasis on pay cycle amounts.",
      ],
      {
        list: [
          "Detailed tax breakdown before accepting a job offer",
          "Verifying payslip deductions are correct",
          "Modelling salary sacrifice impact on net pay",
          "Understanding HECS repayment deductions at your income",
          "Budgeting based on actual take-home income",
        ],
      }
    ),
    section(
      "Step-by-Step: Calculate Gross to Net Pay",
      [
        "Step one: enter your gross annual salary as quoted on your contract or job offer. Use the base salary figure before any salary sacrifice or additional allowances. Step two: toggle HECS repayments on if you have an outstanding HELP debt. The calculator applies the correct repayment rate for your income bracket automatically. Step three: review each deduction line — income tax, Medicare levy, and HECS — to understand the composition of your total deductions.",
        "Step four: examine your net pay across all pay cycles — weekly, fortnightly, monthly, and annual. Step five: compare the result with your current payslip or use The pay calculator above for an alternative view. If you need to work backwards from a desired net income to find the required gross salary, use our net to gross calculator. For hourly workers, convert your rate to annual first using the hourly to salary calculator, then run the gross to net calculation.",
      ]
    ),
    section(
      "Worked Example: $120,000 Gross to Net",
      [
        "Starting with $120,000 gross annual salary and no HECS debt: the first $18,200 is tax-free. Income from $18,201 to $45,000 ($26,800) is taxed at 16%, producing $4,288. The portion from $45,001 to $120,000 ($75,000) is taxed at 30%, adding $22,500. Total income tax is $26,788. The Medicare levy at 2% on $120,000 adds $2,400. Total deductions are $29,188.",
        "Net annual pay is $90,812 — approximately $1,746 per week, $3,493 per fortnight, or $7,568 per month. The effective tax rate is about 24.3% of gross income. Employer super at 12% contributes an additional $14,400 per year. If HECS applied at the 5.5% rate (income between $94,503 and $100,174), repayments of $6,600 would reduce net pay to $84,212 annually. This example demonstrates how the gross to net calculator isolates each deduction for clear visibility.",
      ]
    ),
    section(
      "2025–26 Tax Brackets and Deductions Explained",
      [
        "The 2025–26 income year continues Stage 3 tax cuts that restructured Australian marginal rates from 1 July 2024. The 19% rate dropped to 16% and the 32.5% rate dropped to 30%, benefiting most taxpayers earning between $18,201 and $135,000. The top brackets at 37% and 45% remain unchanged. The tax-free threshold of $18,200 ensures no income tax on the first portion of earnings for all Australian residents.",
        "The Medicare levy at 2% funds Australia's public health system and applies once taxable income exceeds $26,000, with shade-in reductions for low-income earners. HECS repayment thresholds for 2024–25 start at $54,435 at 1% and scale through 19 brackets to 10% for incomes above $159,663. Superannuation guarantee at 12% is an employer cost paid into your super fund — it does not reduce gross to net cash pay. Our calculator uses all current legislated rates for accurate 2025–26 estimates.",
      ],
      {
        list: [
          "$0 – $18,200: 0% income tax (tax-free threshold)",
          "$18,201 – $45,000: 16% (Stage 3 reduced rate)",
          "$45,001 – $135,000: 30% (Stage 3 reduced rate)",
          "$135,001 – $190,000: 37% income tax",
          "Above $190,000: 45% income tax",
          "Medicare: 2% levy above $26,000 taxable income",
          "HECS: 1%–10% on repayment income above $54,435",
        ],
      }
    ),
    section(
      "Common Gross to Net Calculation Mistakes",
      [
        "The most common error is applying a flat tax rate to gross income. Australia uses progressive brackets, so different portions of income are taxed at different rates — you cannot simply multiply gross salary by 30% and call it tax. Another mistake is forgetting the Medicare levy, which adds 2% on top of income tax for most earners and is often overlooked in rough mental calculations.",
        "People also frequently confuse gross to net with net to gross. Gross to net starts with your salary and shows deductions; net to gross starts with your desired take-home pay and works backwards to find the required gross salary. Including superannuation in the gross figure is another pitfall — super is paid by your employer on top of your salary, not deducted from it. Using pre-Stage 3 tax rates will overstate your tax bill, as the 16% and 30% rates are lower than the previous 19% and 32.5% rates.",
      ]
    ),
    section(
      "Who Benefits Most from a Gross to Net Calculator?",
      [
        "Anyone who wants maximum transparency into their tax deductions benefits from the gross to net calculator's line-by-line breakdown. High-income earners approaching bracket thresholds — particularly the $45,000, $135,000, and $190,000 boundaries — can see exactly how much tax each income segment attracts. Graduates with HECS debt can toggle repayments on and off to understand the dollar impact on their net pay at their current income level.",
        "Financial planners, mortgage brokers, and HR professionals use gross to net calculations to help clients and employees understand their true earning capacity. Workers considering salary sacrifice into super can model how reducing taxable income by $10,000 or $20,000 affects each tax component and net pay. The calculator serves as the most full tax breakdown tool on this site, complementing the take-home pay calculator and pay calculator for different presentation preferences.",
      ]
    ),
    section(
      "Related Scenarios and Complementary Calculators",
      [
        "For the reverse calculation — determining the gross salary needed to achieve a specific net income — use our net to gross calculator. Hourly workers should first convert their rate using the hourly to salary calculator, then apply gross to net for the full deduction breakdown. The salary to hourly calculator helps you understand your per-hour net rate after all deductions are applied.",
        "When comparing job offers, run each gross package through the gross to net calculator with consistent settings (HECS on or off) to see which offer delivers more take-home pay. Remember that non-cash benefits like novated leases, company cars, or fringe benefits may affect your taxable income beyond what the standard calculator shows. Salary sacrifice into super reduces your gross taxable income and can lower your gross to net tax bill while building retirement savings through the 12% super guarantee plus your sacrificed amounts.",
      ],
      {
        list: [
          "Net to gross calculator: reverse calculation for target net pay",
          "Take-home pay calculator: net pay focus across pay cycles",
          "Salary sacrifice: reduces taxable income and tax payable",
          "Multiple income sources: each may have separate PAYG withholding",
          "Fringe benefits: may increase taxable income beyond base salary",
        ],
      }
    ),
  ],
  [
    {
      question: "What is the difference between gross and net salary?",
      answer:
        "Gross salary is your total pay before deductions. Net salary (take-home pay) is what remains after income tax, the 2% Medicare levy, and any HECS repayments. On a $80,000 gross salary, net pay is approximately $62,000 to $64,000 depending on HECS status.",
    },
    {
      question: "How much tax is taken out of a $90,000 salary?",
      answer:
        "On $90,000 gross in 2025–26, income tax is approximately $19,288, plus $1,800 Medicare levy. Total deductions are around $21,088 before HECS, leaving net pay of roughly $68,912. With HECS at 3%, an additional $2,700 in repayments reduces net pay to about $66,212.",
    },
    {
      question: "Does the gross to net calculator include Medicare and HECS?",
      answer:
        "Yes. The calculator shows income tax, the 2% Medicare levy, and HECS repayments as separate line items. You can toggle HECS on or off depending on whether you have an outstanding HELP debt.",
    },
    {
      question: "How do Stage 3 tax cuts affect gross to net calculations?",
      answer:
        "Stage 3 reduced marginal rates from 19% to 16% and 32.5% to 30% from 1 July 2024. This means lower tax deductions and higher net pay for most workers compared with pre-2024 rates. Our calculator applies these updated brackets automatically.",
    },
    {
      question: "Is superannuation deducted from gross to net pay?",
      answer:
        "No. The 12% employer superannuation guarantee is paid on top of your gross salary into your super fund. It is displayed separately for transparency but is not subtracted from your net cash pay. Salary sacrifice into super does reduce taxable income and affects the gross to net calculation.",
    },
    {
      question: "How accurate is the gross to net calculator for 2025–26?",
      answer:
        "The calculator uses official ATO tax brackets, Medicare levy rates, and HECS repayment thresholds for the 2025–26 income year. Results are estimates based on standard PAYG assumptions. Actual deductions may vary with tax offsets, salary sacrifice, multiple employers, or additional taxable income.",
    },
  ]
);
