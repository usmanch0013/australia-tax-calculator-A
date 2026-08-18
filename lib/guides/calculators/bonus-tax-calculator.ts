import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "bonus-tax-calculator",
  "Bonus Tax Calculator Australia: Guide for 2025–26",
  "A bonus tax calculator shows how much of your performance payment, sign-on bonus, or annual incentive you keep after Australian tax. Bonuses are not taxed at a flat rate — they are added to your annual income and taxed at your marginal rate when your employer calculates PAYG withholding. For 2025–26, that means income tax at up to 45%, plus the 2% Medicare levy, and HECS repayments if applicable. Here's how bonus tax works in Australia, why the withholding on your pay slip may look like 32% or more, walks through dollar examples, and shows how to use a bonus tax calculator alongside our income tax calculator and gross to net calculator.",
  [
    section(
      "How Is Bonus Tax Calculated in Australia?",
      [
        "bonus payments are treated as ordinary income for tax purposes. There is no separate bonus tax rate — your bonus is added to your salary and taxed at your marginal income tax rate under the 2025–26 ATO brackets. When your employer pays a bonus, they withhold PAYG tax using either the aggregate method (adding the bonus to your regular pay and calculating tax on the combined amount) or the marginal rate method (calculating tax on your salary, then calculating tax on salary plus bonus, and withholding the difference).",
        "Most large employers use the marginal rate method for one-off bonuses, which often results in higher withholding on the bonus itself because the entire bonus amount falls in your top marginal bracket. A bonus tax calculator models this by comparing your total tax with and without the bonus, showing the incremental tax attributable to the bonus payment. The result is your bonus after tax — the amount that actually reaches your bank account.",
      ]
    ),
    section(
      "Why Bonuses Seem to Be Taxed Heavily",
      [
        "Many employees are surprised when a $10,000 bonus produces only $6,000 to $7,000 in take-home pay. The perception of heavy bonus tax comes from marginal rate withholding. If you earn $90,000 and receive a $10,000 bonus, the bonus is taxed at your marginal rate of 30% for income tax, plus 2% Medicare levy, plus any HECS repayment rate — potentially 35% or more effective withholding on the bonus alone.",
        "The aggregate method can produce even higher short-term withholding if your employer annualises a fortnightly bonus as if you earned that amount every pay period all year. This often creates the myth of a flat 32% or 37% bonus tax rate. At tax return time, all income is reconciled. If too much was withheld, you receive a refund. If you earned less overall than projected, the effective tax on your bonus may be lower than the withholding suggested. A bonus tax calculator gives a realistic estimate based on annual income, not the potentially distorted per-pay-period figure.",
      ],
      {
        list: [
          "Bonuses are ordinary income taxed at marginal rates",
          "Withholding methods: aggregate or marginal rate",
          "Medicare levy (2%) applies to bonus income",
          "HECS repayments apply if repayment income exceeds threshold",
          "Final tax position reconciled at annual tax return",
        ],
      }
    ),
    section(
      "Marginal Rate Method Explained",
      [
        "The marginal rate method calculates tax on your annual salary alone, then calculates tax on your annual salary plus the bonus, and withholds the difference as tax on the bonus. This method isolates the tax impact of the bonus at your current marginal bracket. On a $90,000 salary with a $10,000 bonus, income tax on $90,000 is approximately $18,788. Income tax on $100,000 is approximately $20,788. The incremental income tax on the bonus is $2,000 — an effective 20% on the bonus for income tax alone because the bonus sits entirely in the 30% bracket but the calculation reflects only the marginal addition.",
        "Adding Medicare at 2% ($200) and HECS at 5.5% on $100,000 ($550 incremental on the bonus portion) pushes total withholding on the $10,000 bonus higher. A bonus tax calculator performs this with-and-without comparison automatically, showing bonus tax, bonus after tax, effective bonus tax rate, and marginal rate. This is more accurate than applying a single percentage to the bonus amount.",
      ]
    ),
    section(
      "When to Use a Bonus Tax Calculator",
      [
        "Use a bonus tax calculator before your employer pays a performance bonus so you know what to expect in your account. Sales professionals on commission, executives on STI or LTI plans, and employees receiving sign-on bonuses all benefit from upfront estimates. The calculator is also useful when negotiating employment packages — a $15,000 bonus after tax may be worth less than a $12,000 salary increase depending on your bracket and HECS status.",
        "Contractors receiving project completion bonuses and shift workers earning annual productivity payments should model tax before spending anticipated income. If you receive multiple bonuses throughout the year, each one pushes your annual income higher and may move you into a higher HECS repayment bracket or closer to the $135,000 threshold where the marginal income tax rate jumps to 37%. Running scenarios at different bonus amounts helps with financial planning and tax return expectations.",
      ]
    ),
    section(
      "Step-by-Step: Using the Bonus Tax Calculator",
      [
        "Enter your annual salary excluding the bonus — your base gross pay for the 2025–26 financial year. Enter the bonus amount as a separate figure. Indicate whether you have a HECS debt, as this affects total withholding on the bonus. The calculator computes total tax on your salary alone, total tax on salary plus bonus, and the difference as tax attributable to the bonus.",
        "Review the results: tax on bonus, bonus after tax, effective bonus tax rate, and marginal rate on the combined income. Compare scenarios with different bonus sizes to see how bracket effects scale. Remember that superannuation guarantee at 12% may also be payable on bonuses depending on your award or contract — super is employer-paid and usually does not reduce your bonus take-home, but it affects your total remuneration package.",
      ],
      {
        list: [
          "Enter annual base salary (excluding bonus)",
          "Enter the bonus amount",
          "Toggle HECS if you have a HELP debt",
          "Review tax on bonus and after-tax bonus amount",
          "Compare multiple bonus scenarios if negotiating",
        ],
      }
    ),
    section(
      "Worked Examples: Bonus Tax at Different Salary Levels",
      [
        "An employee earning $70,000 with no HECS receives a $5,000 bonus. Income tax on $70,000 is approximately $11,788; on $75,000 it is approximately $13,288. Income tax on the bonus: $1,500 (30% marginal rate on the full bonus, as it sits above $45,000). Medicare adds $100 (2%). Total bonus tax: approximately $1,600. Bonus after tax: about $3,400. Effective bonus tax rate: 32%.",
        "A professional earning $120,000 with HECS receives a $15,000 bonus. Without the bonus, income tax is approximately $27,388, Medicare $2,400, and HECS $9,000 at the 7.5% rate. With the bonus ($135,000 total), income tax rises to approximately $31,288 (crossing into the 37% bracket on income above $135,000), Medicare $2,700, and HECS $10,125 at 7.5%. Incremental tax on the $15,000 bonus: approximately $6,325. Bonus after tax: about $8,675. Effective rate: 42%. The bracket jump at $135,000 makes large bonuses particularly expensive at this income level.",
      ]
    ),
    section(
      "2025–26 Tax Context for Bonuses",
      [
        "Bonuses paid in the 2025–26 financial year are taxed under current Stage 3 brackets: 16% on income between $18,201 and $45,000, 30% between $45,001 and $135,000, 37% between $135,001 and $190,000, and 45% above $190,000. The Medicare levy of 2% applies to bonus income for most residents. HECS repayment rates from 1% to 10% apply to the combined repayment income including the bonus.",
        "Employers must also consider superannuation guarantee obligations on ordinary time earnings and bonuses. From 1 July 2025, the SG rate is 12%. Whether super is paid on bonuses depends on the nature of the payment and applicable awards or agreements. Super is an employer cost and does not reduce the employee's bonus cheque, but it forms part of total remuneration. Division 293 tax may apply to high earners whose income plus concessional super exceeds $250,000 — relevant for large bonuses salary-sacrificed into super.",
      ]
    ),
    section(
      "Common Mistakes About Bonus Tax",
      [
        "Believing Australia has a flat bonus tax rate of 32% is the most persistent myth. The rate varies with your income, HECS status, and withholding method. Another error is assuming a tax refund is guaranteed if bonus withholding seems high — refunds only occur if total annual withholding exceeds your actual tax liability. If the bonus genuinely pushes you into a higher bracket, the withholding approximates your real liability.",
        "Spending the full bonus before it arrives, based on the gross figure, causes budget problems. Always plan on the after-tax amount from a bonus tax calculator. Some employees confuse PAYG withholding with final tax and panic about the headline rate, not realising that HECS and Medicare are included in the withholding figure on the bonus pay slip. Comparing bonus tax to salary tax rate without recognising that salary is spread across brackets while the bonus sits entirely at the top marginal rate leads to confusion.",
      ]
    ),
    section(
      "Bonus vs Salary Increase: Which Is Better After Tax?",
      [
        "A dollar of salary and a dollar of bonus are taxed identically in Australia's annual tax system — both are ordinary income. The difference is timing and perception. A salary increase affects every pay period and may be superannuated and counted toward leave accruals. A bonus is typically one-off and may not attract super depending on the payment type. After tax, $10,000 salary and $10,000 bonus yield the same incremental tax if paid in the same financial year.",
        "However, a salary increase compounds — next year's pay rise builds on a higher base, while a bonus does not automatically repeat. For long-term wealth, salary increases often outperform one-off bonuses even at identical tax treatment. A pay rise calculator shows how much of a percentage increase reaches your pocket after tax. If choosing between a $10,000 bonus and a $8,000 salary increase, model both scenarios — the bonus may look larger gross but identical after-tax outcomes are possible at certain income levels.",
      ]
    ),
    section(
      "Related Calculators and Planning",
      [
        "A bonus tax calculator is most useful as part of a broader pay toolkit. The income tax calculator shows bracket-based tax on any income level. A gross to net calculator reveals total take-home including bonus income added to salary. A hecs calculator shows whether your bonus pushes you into a higher repayment bracket. A net to gross calculator helps if you need a specific after-tax bonus target.",
        "For ongoing remuneration planning, a pay rise calculator models recurring increases. Salary sacrifice calculators show whether directing bonus into super — where contributions are taxed at 15% — saves tax compared to taking the bonus as cash, especially for earners above $45,000 facing 30% plus Medicare marginal rates. Super calculators estimate the 12% employer contribution on bonus-inclusive income. Together, these tools help Australian workers understand that a bonus headline figure is never the same as money in the bank.",
      ]
    ),
  ],
  [
    {
      question: "How much tax do I pay on a $10,000 bonus in Australia?",
      answer:
        "It depends on your annual salary and HECS status. On a $80,000 salary with no HECS, a $10,000 bonus attracts roughly $3,000 income tax (30% marginal rate), $200 Medicare, and about $3,200 total tax — leaving approximately $6,800 after tax. On a $120,000 salary with HECS, the effective rate can exceed 40% due to higher marginal rates and HELP repayments. Use a bonus tax calculator for your exact figures.",
    },
    {
      question: "Is bonus tax different from regular income tax in Australia?",
      answer:
        "No. Bonuses are ordinary income taxed at your marginal rate under the same 2025–26 ATO brackets as salary. There is no separate bonus tax rate. Withholding on your pay slip may appear higher because employers often apply the marginal rate method, taxing the entire bonus at your top bracket. Your final tax liability is calculated on total annual income when you lodge your return.",
    },
    {
      question: "Why was my bonus taxed at 32% or more?",
      answer:
        "Employers commonly withhold using the marginal rate method or annualised aggregate method, which applies your top marginal rate plus Medicare (2%) and HECS if applicable to the bonus. On a $70,000+ income, 30% income tax plus 2% Medicare equals 32% before HECS. This is withholding, not necessarily your final tax rate — but for most employees whose bonus is their only extra income, it closely reflects actual liability.",
    },
    {
      question: "Do I pay HECS on bonus income?",
      answer:
        "Yes. Bonus payments form part of your repayment income for HECS-HELP purposes. If your total repayment income including the bonus exceeds the $54,435 threshold, the applicable repayment rate applies to your entire repayment income — the bonus can also push you into a higher HECS bracket, increasing the rate on all your income for that year.",
    },
    {
      question: "Will I get a tax refund on my bonus withholding?",
      answer:
        "Only if total PAYG withholding across the year exceeds your actual tax liability. If the bonus withholding accurately reflects your marginal rate and you have no other adjustments, you may not receive a significant refund. Refunds are common when the aggregate withholding method over-estimates annual income, or when you claim deductions that reduce taxable income below what withholding assumed.",
    },
    {
      question: "Is it better to receive a bonus or a salary increase?",
      answer:
        "After tax, each dollar of bonus and salary is taxed identically in the same financial year. Salary increases compound over time and typically attract super and leave accruals. Bonuses are one-off. For long-term income growth, salary increases often deliver more value. Use a bonus tax calculator and pay rise calculator to compare specific offers at your income level.",
    },
  ]
);
