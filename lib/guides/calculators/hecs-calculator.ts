import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "hecs-calculator",
  "HECS-HELP Repayment Calculator Australia: Guide for 2025–26",
  "A HECS calculator estimates your compulsory HELP debt repayments based on your repayment income and the graduated rates published by the ATO. HECS-HELP — often called simply HECS — is Australia's income-contingent student loan system. Once your repayment income exceeds the threshold (about $54,435 in 2025–26), the ATO withholds repayments through PAYG alongside income tax and the Medicare levy. Repayment rates scale from 1% to 10% as income rises. Here's how HECS works, what counts as repayment income, how to use a hecs calculator, and how repayments fit into your total take-home pay alongside our income tax calculator and gross to net calculator.",
  [
    section(
      "What Is HECS-HELP and How Do Repayments Work?",
      [
        "HECS-HELP is the Australian Government's income-contingent loan scheme for higher education. When you study at university or an approved provider using a HELP loan, the government pays your tuition fees and you repay the debt through the tax system once your income reaches a threshold. Unlike a mortgage or personal loan, there are no fixed monthly repayments — the amount you pay each year depends entirely on how much you earn.",
        "Repayments are calculated as a percentage of your repayment income, not the size of your debt. In 2025–26, the minimum repayment threshold is about $54,435. Below that income, you pay nothing regardless of how large your debt is. Above the threshold, rates start at 1% and increase through graduated brackets to a maximum of 10% on incomes above about $159,663. The ATO automatically withholds repayments from your pay through the same PAYG system that collects income tax and the Medicare levy. A hecs calculator applies these rates to your income to estimate annual, monthly, and fortnightly repayment amounts.",
      ]
    ),
    section(
      "Repayment Income vs Taxable Income",
      [
        "Repayment income is broadly similar to taxable income but is defined specifically for HELP purposes under the Higher Education Support Act. It generally includes your gross salary, reportable fringe benefits, reportable employer super contributions, and net investment losses. For most salaried employees with straightforward pay, repayment income equals taxable income. If you have significant fringe benefits, investment losses, or exempt income, the figures may differ — and the ATO uses the higher relevant amount.",
        "This distinction matters when using a hecs calculator. Entering your gross salary is accurate for typical PAYG employees, but contractors and investors with complex income should consider whether adjustments apply. The ATO calculates your actual repayment when you lodge your tax return, reconciling any difference between amounts withheld during the year and the final liability. Over-withholding results in a refund; under-withholding means you owe money at tax time.",
      ],
      {
        list: [
          "Repayment threshold 2025–26: about $54,435",
          "Minimum rate above threshold: 1% of repayment income",
          "Maximum rate: 10% on incomes above about $159,663",
          "19 graduated brackets between 1% and 10%",
          "No repayments required below the threshold regardless of debt size",
        ],
      }
    ),
    section(
      "2025–26 HECS Repayment Rates and Brackets",
      [
        "The ATO publishes updated repayment thresholds each year, indexed to average weekly earnings. For 2025–26, repayment income between $54,435 and $62,850 attracts a 1% repayment rate. Rates step up through brackets: 2% up to $66,620, 2.5% up to $70,618, continuing in half-percent increments until reaching 10% on repayment income above $159,663. Each bracket applies to your total repayment income — you do not pay different rates on different portions in the way income tax brackets work.",
        "On $70,000 repayment income, the rate is 2.5%, meaning annual repayments of $1,750. On $90,000, the rate is 5%, yielding $4,500 per year or roughly $173 per fortnight. On $120,000, the 7.5% rate produces $9,000 in annual repayments. These amounts are withheld progressively through PAYG, so your take-home pay reflects HECS alongside income tax and the 2% Medicare levy. A hecs calculator maps your income to the correct bracket in seconds.",
      ]
    ),
    section(
      "When to Use a HECS Calculator",
      [
        "Use a hecs calculator when starting a new job to understand how repayments affect take-home pay. Graduates often underestimate the impact — a $75,000 salary with a 3.5% HECS rate means $2,625 in annual repayments on top of income tax and Medicare. The calculator is essential for salary negotiation: if you need a specific net income, toggle HECS on in a net to gross calculator to find the higher gross salary required.",
        "The calculator helps compare job offers in different cities or industries where salary differs but debt remains the same. Because repayments scale with income, a higher-paying role accelerates debt reduction without changing the percentage formula. Parents and students planning future study benefit from understanding the income-contingent model — you are not required to repay until earning above the threshold, and repayments scale affordably at lower incomes. Financial advisers modelling cash flow for clients with HELP debt rely on accurate repayment estimates.",
      ]
    ),
    section(
      "Step-by-Step: Using the HECS Calculator",
      [
        "Enter your expected annual repayment income for 2025–26. For most employees, gross salary is the right starting point. The calculator identifies which repayment bracket applies and displays the rate as a percentage. It then multiplies your income by that rate to show annual repayment, plus monthly and fortnightly equivalents for budgeting.",
        "Check the status indicator: below threshold means no repayment required; above threshold means PAYG withholding applies. Combine the HECS figure with income tax and Medicare levy using a gross to net calculator for total deductions and net pay. If your income fluctuates — casual work, commissions, or seasonal employment — run scenarios at different income levels because crossing bracket boundaries changes your repayment rate. Remember that indexation adjusts your debt balance annually, but indexation does not change the repayment rate formula.",
      ],
      {
        list: [
          "Enter annual repayment income (usually gross salary)",
          "Review the applicable repayment rate and bracket",
          "Note annual, monthly, and fortnightly repayment amounts",
          "Combine with income tax and Medicare for total deductions",
          "Model pay rises to see how rates increase with income",
        ],
      }
    ),
    section(
      "Worked Examples at Common Income Levels",
      [
        "A graduate earning $52,000 falls below the $54,435 threshold and makes no compulsory HECS repayments, though their debt continues to be indexed to CPI annually. Take-home pay reflects only income tax of about $5,408 and Medicare levy of $1,040, leaving around $45,552 net before other deductions.",
        "At $70,000 repayment income, the 2.5% rate applies. Annual HECS repayment is $1,750. Combined with income tax of about $11,788 and Medicare levy of $1,400, total deductions reach about $14,938, leaving take-home near $55,062. At $100,000, the 5.5% rate produces $5,500 in HECS repayments. Income tax is about $20,788, Medicare $2,000, and total deductions about $28,288 — take-home around $71,712. At $130,000, the 8% rate means $10,400 in annual HECS repayments, a significant line item that pushes effective marginal withholding well above income tax alone.",
      ]
    ),
    section(
      "HECS Debt, Indexation, and Voluntary Repments",
      [
        "HELP debt is indexed to the Consumer Price Index (CPI) on 1 June each year. There is no interest in the traditional sense, but indexation means the balance grows with inflation if you are not repaying or repaying slowly. In years of high CPI, indexation can add thousands to outstanding balances, generating political and personal finance debate about the fairness of indexation on education debt.",
        "You can make voluntary repayments at any time through myGov and the ATO. Voluntary payments reduce your balance directly. A 10% voluntary repayment bonus previously existed but was removed. Some graduates choose voluntary repayments to clear debt before buying property or to avoid indexation on large balances. Compulsory repayments through PAYG do not reduce the rate on future income — the percentage applies to your full repayment income each year until the debt is cleared. Once paid off, withholding stops automatically.",
      ]
    ),
    section(
      "HECS and Total Take-Home Pay",
      [
        "HECS repayments are not optional above the threshold. Your employer does not choose whether to withhold — the ATO mandates it based on your income statement and tax file number declaration. This makes HECS a fixed cost of earning above the threshold, similar to income tax but with a different scale. On incomes between $54,435 and $100,000, HECS adds between 1% and 5.5% to your effective withholding rate.",
        "When using a gross to net calculator, always enable HECS if you have an outstanding HELP debt. Omitting it overstates take-home pay by thousands of dollars annually. A net to gross calculator with HECS enabled shows the materially higher gross salary needed for the same net outcome. For bonus payments, HECS is calculated on total repayment income including the bonus — a bonus tax calculator combined with HECS awareness prevents surprises when annual bonuses push you into a higher repayment bracket.",
      ]
    ),
    section(
      "Common Mistakes and Misconceptions",
      [
        "Believing HECS repayments are based on debt size is the most common error. A graduate with $80,000 debt and $60,000 income pays the same rate as one with $20,000 debt at the same income. Another misconception is that HELP debt affects credit scores or mortgage approval directly — lenders assess repayments as a reduction in disposable income rather than treating HELP as conventional debt. Some people think repayments stop automatically when debt is small; withholding continues at the applicable rate until the ATO confirms the balance is zero.",
        "Graduates working overseas sometimes assume HECS disappears. Australian tax residents living abroad may still have repayment obligations depending on residency status and income. Failing to update the ATO when leaving Australia can lead to compliance issues. Assuming the repayment threshold never changes is risky — it is indexed annually, so a pay rise that barely kept you below threshold one year may trigger repayments the next.",
      ]
    ),
    section(
      "Related Calculators and Planning Tools",
      [
        "A hecs calculator works best alongside other Australian pay tools. The income tax calculator shows bracket-based PAYG tax. The medicare levy calculator adds the 2% healthcare levy. Together in a gross to net calculator or take-home pay calculator, you see realistic net pay. A net to gross calculator reverses the maths when you know the take-home you need.",
        "Students comparing study costs should weigh HECS's income-contingent design against upfront fee payment or FEE-HELP for private providers. Workers considering salary sacrifice should note that reportable employer super contributions can increase repayment income. Pay rise modelling with a pay rise calculator shows how income increases push you through HECS brackets — sometimes a $5,000 raise triggers a higher repayment rate that reduces the net benefit of the increase. Understanding these interactions helps graduates and professionals make informed career and financial decisions.",
      ]
    ),
  ],
  [
    {
      question: "When do I start paying HECS back in Australia?",
      answer:
        "Compulsory HECS-HELP repayments begin when your repayment income exceeds the annual threshold, about $54,435 in 2025–26. Below that income you pay nothing, regardless of your debt balance. Above the threshold, your employer withholds repayments through PAYG at the rate for your income bracket, from 1% up to 10%.",
    },
    {
      question: "How much HECS do I pay on $80,000 income?",
      answer:
        "On $80,000 repayment income in 2025–26, the HECS repayment rate is 4%, giving annual repayments of $3,200 — about $123 per fortnight. This is on top of income tax of about $14,788 and Medicare levy of $1,600. Use a hecs calculator or gross to net calculator for exact figures at your income level.",
    },
    {
      question: "Is HECS calculated on my debt balance or my income?",
      answer:
        "HECS repayments are calculated on your repayment income, not your outstanding debt balance. A higher debt does not mean higher annual repayments — only higher income increases the repayment rate. Once your debt is fully repaid, withholding stops regardless of your income.",
    },
    {
      question: "Does HECS debt earn interest?",
      answer:
        "HELP debt does not accrue traditional interest. It is indexed to CPI on 1 June each year, so the balance grows with inflation. In high-inflation years, indexation can add a significant amount to your debt. Compulsory and voluntary repayments reduce the balance and limit future indexation exposure.",
    },
    {
      question: "Can I pay off HECS early?",
      answer:
        "Yes. Voluntary repayments can be made at any time through the ATO via myGov. Voluntary payments reduce your balance immediately. However, compulsory repayments still apply if your income exceeds the threshold — you cannot opt out of PAYG withholding by making voluntary payments alone. Once the balance reaches zero, compulsory repayments cease.",
    },
    {
      question: "How does HECS affect my take-home pay?",
      answer:
        "HECS repayments are withheld from your salary alongside income tax and the Medicare levy. On a $100,000 income, the 5.5% rate means $5,500 less in take-home pay per year. Always enable HECS in a gross to net calculator if you have a HELP debt to avoid overestimating your net pay.",
    },
  ]
);
