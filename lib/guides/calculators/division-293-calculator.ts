import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "division-293-calculator",
  "Division 293 Tax on Super in Australia (2025–26)",
  "High-income earners in Australia face an additional tax charge on their superannuation contributions called Division 293 tax. If your income plus concessional super contributions exceed $250,000 in a financial year, the ATO levies an extra 15% tax on some or all of those concessional contributions — on top of the 15% contributions tax already paid inside your super fund. We'll cover who Division 293 affects, how the $250,000 threshold is calculated, what counts as income for Division 293 purposes, and how to estimate your liability using our Division 293 calculator for the 2025–26 financial year.",
  [
    section(
      "What Is Division 293 Tax?",
      [
        "Division 293 tax is an additional 15% levy on concessional super contributions for individuals whose income for surcharge purposes exceeds $250,000. It was introduced to reduce the tax concession enjoyed by very high-income earners on super contributions. Concessional contributions — including employer super guarantee, salary sacrifice, and personal deductible contributions — are normally taxed at 15% within the super fund, which is below the marginal tax rates of 30%, 37%, or 45% that high earners would otherwise pay.",
        "Division 293 partially closes this gap by taxing the higher-income portion of concessional contributions at an effective 30% (15% in the fund plus 15% Division 293). The tax is levied on the individual, not the super fund, and is typically raised as an assessment after you lodge your tax return. You can choose to pay from personal funds or release money from your super account to cover the liability. Understanding whether you are affected helps you plan salary sacrifice strategies and avoid unexpected tax bills.",
      ]
    ),
    section(
      "Who Pays Division 293 Tax?",
      [
        "Division 293 applies when your income for Division 293 purposes plus your concessional super contributions exceed the $250,000 threshold. Income for Division 293 purposes is broadly your taxable income (excluding taxable components of the First Home Super Saver scheme), plus total reportable fringe benefits, plus certain other adjustments, plus concessional super contributions. This is not the same as your gross salary — it can be higher or lower depending on deductions, fringe benefits, and investment income.",
        "You do not need to earn $250,000 in salary to be affected. An employee on $220,000 with $30,000 in salary sacrifice and reportable fringe benefits could exceed the threshold. Conversely, someone with $260,000 in taxable income but large negative gearing deductions might fall below the threshold. The ATO calculates the exact amount when you lodge your return, but our Division 293 calculator provides a useful estimate based on taxable income and concessional contributions.",
      ]
    ),
    section(
      "How the $250,000 Threshold Works",
      [
        "The Division 293 threshold has remained at $250,000 since the measure was introduced and is not indexed annually like income tax brackets. For 2025–26, the calculation is: Income for Division 293 purposes = Taxable income + Reportable fringe benefits + Concessional super contributions (and certain other amounts). If this total exceeds $250,000, Division 293 tax applies to the lesser of your concessional contributions and the amount by which your income exceeds $250,000.",
        "In formula terms: Division 293 taxable amount = Minimum of (Concessional contributions, Income for 293 purposes − $250,000). Division 293 tax = 15% × Division 293 taxable amount. For example, if your income for 293 purposes is $280,000 and concessional contributions are $30,000, the amount over the threshold is $30,000. The taxable amount is the minimum of $30,000 and $30,000 = $30,000. Division 293 tax = $4,500.",
      ],
      {
        list: [
          "Threshold: $250,000 (income for Division 293 purposes)",
          "Extra tax rate: 15% on the Division 293 taxable amount",
          "Taxable amount: Lesser of concessional contributions or excess over $250,000",
          "Effective tax on affected contributions: 30% (15% in fund + 15% Div 293)",
          "Assessed after lodging your annual tax return",
        ],
      }
    ),
    section(
      "What Counts as Concessional Contributions",
      [
        "Concessional contributions include employer super guarantee (currently 12% of ordinary time earnings), salary sacrifice amounts, personal contributions you claim as a tax deduction, and contributions made by someone else on your behalf that you claim. All concessional contributions count toward your annual concessional contributions cap — $30,000 for 2025–26 for most people, or $36,000 if you have unused cap space from previous years under the carry-forward rules.",
        "Employer SG on a $200,000 salary is $24,000 at 12%. If you salary sacrifice an additional $10,000, total concessional contributions are $34,000 — but only $30,000 can be concessional without excess contributions tax (subject to carry-forward). For Division 293, the full concessional amount in the fund counts toward the calculation even if you also have excess contributions tax issues. Keep employer SG, sacrifice, and personal deductible contributions in mind when estimating.",
      ]
    ),
    section(
      "Step-by-Step: Using the Division 293 Calculator",
      [
        "Enter your taxable income as reported on your tax return before concessional super contributions are added back for Division 293 purposes. If you are estimating mid-year, use your expected annual taxable income including salary, bonuses, and investment income, minus deductions such as work-related expenses and charitable donations. Do not subtract super contributions from this figure — the calculator adds them separately.",
        "Enter your total expected concessional super contributions for the year: employer SG, salary sacrifice, and any personal deductible contributions. The calculator adds taxable income and concessional super to derive income for Division 293 purposes, compares it to the $250,000 threshold, determines the Division 293 taxable amount, and calculates the 15% tax. If the result is zero, you are below the threshold and no Division 293 tax applies.",
      ],
      {
        list: [
          "Step 1: Estimate your annual taxable income",
          "Step 2: Add total concessional super contributions (SG + sacrifice + personal)",
          "Step 3: Review combined income for Division 293 purposes",
          "Step 4: Check amount over the $250,000 threshold",
          "Step 5: See Division 293 tax at 15% on the taxable amount",
          "Step 6: Plan payment from personal funds or super release",
        ],
      }
    ),
    section(
      "Worked Example: Salary $230,000 with Full SG",
      [
        "An employee earns $230,000 in taxable income with no salary sacrifice. Employer super guarantee at 12% is $27,600. Income for Division 293 purposes is $230,000 + $27,600 = $257,600. This exceeds the $250,000 threshold by $7,600.",
        "Concessional contributions are $27,600. The Division 293 taxable amount is the lesser of $27,600 and $7,600 = $7,600. Division 293 tax is 15% × $7,600 = $1,140. This employee pays $1,140 in additional tax on top of the 15% contributions tax already deducted in the super fund. Their effective tax rate on the $7,600 portion of super is 30%.",
      ]
    ),
    section(
      "Worked Example: $200,000 Salary with $40,000 Sacrifice",
      [
        "A senior executive earns $200,000 taxable income and salary sacrifices $40,000 to super. Employer SG is 12% of the reduced salary base — if sacrifice is from gross, the calculation can be complex, but assume total concessional contributions are approximately $40,000 sacrifice plus employer SG on remaining salary. For simplicity, say total concessional contributions are $52,000 (this would exceed the cap and need adjustment in reality).",
        "Income for Division 293 purposes: $200,000 + $52,000 = $252,000. Excess over threshold: $2,000. Division 293 taxable amount: minimum of $52,000 and $2,000 = $2,000. Division 293 tax: $300. In practice, this employee should also watch the concessional contributions cap. The example shows that even modest threshold breaches trigger Division 293, and aggressive salary sacrifice near the threshold requires careful modelling.",
      ]
    ),
    section(
      "Division 293 vs Contributions Tax vs Income Tax",
      [
        "Three tax layers affect super for high earners. First, concessional contributions entering super are taxed at 15% (contributions tax). Second, if you exceed the $250,000 Division 293 threshold, an additional 15% is levied on the applicable portion. Third, if concessional contributions exceed your cap, excess contributions tax applies at your marginal rate — a separate issue from Division 293.",
        "Compare this to keeping the money as salary: $10,000 sacrificed on a $280,000 income saves roughly 39% marginal tax (37% + 2% Medicare) minus 15% contributions tax minus potential 15% Division 293 — a net benefit of around 9% if Division 293 applies fully. Without Division 293, the saving is roughly 24%. Our salary sacrifice calculator models the standard case; use this Division 293 calculator when income approaches or exceeds $250,000.",
      ]
    ),
    section(
      "Paying and Managing Division 293 Tax",
      [
        "The ATO issues a Division 293 notice of assessment after you lodge your tax return. You generally have 21 days to pay or elect to have the amount released from your super fund. Paying personally preserves your super balance but requires cash flow. Releasing from super reduces your retirement savings but avoids an out-of-pocket payment. There is no right answer — it depends on your liquidity and long-term super strategy.",
        "To reduce future Division 293 liability, consider limiting salary sacrifice when you are near the threshold, timing contributions across financial years, or making non-concessional contributions instead (which do not attract Division 293 but do not provide an upfront tax deduction). Splitting contributions with a spouse may help in some circumstances. Always consult a financial adviser for personalised strategies involving large super balances.",
      ],
      {
        list: [
          "Pay personally within 21 days of assessment",
          "Elect to release funds from your super account",
          "Reduce salary sacrifice if consistently above $250,000",
          "Monitor reportable fringe benefits — they count toward the threshold",
          "Do not confuse Division 293 with the $30,000 concessional contributions cap",
        ],
      }
    ),
    section(
      "Common Mistakes and Related Scenarios",
      [
        "People often check only their salary against $250,000 and miss that super contributions and fringe benefits are added back. Another mistake is assuming Division 293 replaces contributions tax — both apply. Some believe the threshold is indexed with tax brackets; it has remained at $250,000. Others forget that multiple employers' contributions all count toward concessional totals and Division 293 income.",
        "Division 293 interacts with other high-income measures including the Medicare levy surcharge (if you earn above $93,000 single without private health insurance) and the highest marginal tax rate at $190,001. For a complete super picture, use The super calculator above for employer SG, our salary sacrifice calculator for pre-tax contributions, and our income tax calculator for your marginal rate. Together they help high earners optimise their total tax position.",
      ]
    ),
  ],
  [
    {
      question: "What is the Division 293 threshold for 2025–26?",
      answer:
        "The Division 293 threshold is $250,000 for income for Division 293 purposes. This figure has not changed since the tax was introduced. It is calculated as your taxable income plus reportable fringe benefits plus concessional super contributions. If this total exceeds $250,000, you may owe additional tax on your super contributions.",
    },
    {
      question: "Is Division 293 tax the same as the 15% super contributions tax?",
      answer:
        "No. The 15% contributions tax is paid by your super fund when concessional contributions enter the account. Division 293 is an additional 15% tax levied on you personally when your income for Division 293 purposes exceeds $250,000. Together, affected contributions face an effective 30% tax rate.",
    },
    {
      question: "Does employer super guarantee count toward Division 293?",
      answer:
        "Yes. All concessional contributions count, including the 12% employer super guarantee, salary sacrifice amounts, and personal deductible contributions. Employer SG is added to your income for Division 293 purposes when calculating whether you exceed the $250,000 threshold.",
    },
    {
      question: "Can I avoid Division 293 by salary sacrificing less?",
      answer:
        "Reducing salary sacrifice lowers your concessional contributions and may bring your income for Division 293 purposes below $250,000. However, you lose the tax benefit of salary sacrifice on the foregone amount. The optimal level depends on your marginal tax rate, how far above the threshold you are, and your retirement goals. Model different scenarios with our calculator.",
    },
    {
      question: "When do I pay Division 293 tax?",
      answer:
        "The ATO assesses Division 293 after you lodge your annual tax return, typically between July and November following the financial year. You receive a notice of assessment and can pay from personal funds or elect to have the amount released from your super fund within the specified timeframe.",
    },
    {
      question: "Does Division 293 apply to non-concessional super contributions?",
      answer:
        "No. Division 293 only applies to concessional contributions. Non-concessional contributions are made from after-tax income and do not receive a tax deduction, so they are not subject to Division 293. However, non-concessional contributions have their own annual cap of $120,000 (or $360,000 under the bring-forward rule).",
    },
  ]
);
