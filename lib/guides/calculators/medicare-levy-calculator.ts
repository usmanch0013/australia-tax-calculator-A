import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "medicare-levy-calculator",
  "Medicare Levy Calculator Australia: Guide for 2025–26",
  "The Medicare levy is a 2% charge on most Australian residents' taxable income, funding the public healthcare system. A medicare levy calculator shows how much you owe, whether you qualify for a full exemption or reduction, and how the levy fits alongside income tax and HECS on your pay slip. For the 2025–26 financial year, low-income earners below approximately $26,000 may pay nothing, while higher earners without private hospital cover may face an additional Medicare Levy Surcharge. Here's how the levy works, who pays it, how reductions apply, and how to use a medicare levy calculator with our income tax calculator and gross to net calculator for accurate take-home pay estimates.",
  [
    section(
      "What Is the Medicare Levy?",
      [
        "The Medicare levy is a tax levied on Australian residents to help fund Medicare, Australia's universal public health insurance scheme. It provides access to subsidised medical services, public hospital care, and the Pharmaceutical Benefits Scheme. For most taxpayers, the levy is 2% of taxable income for the 2025–26 financial year. It is collected alongside income tax through the PAYG withholding system — your employer deducts it from each pay and remits it to the Australian Taxation Office.",
        "The Medicare levy is separate from income tax although it appears combined on pay slips and annual income statements. It is calculated on taxable income, the same base used for income tax after allowable deductions. Unlike HECS repayments, which only apply above a threshold, most workers above the low-income exemption pay the full 2%. A medicare levy calculator takes your taxable income and applies the relevant rate, exemption, or reduction to show your levy amount and annual cost.",
      ]
    ),
    section(
      "How the Medicare Levy Is Calculated",
      [
        "For taxpayers who are not eligible for an exemption or reduction, the calculation is straightforward: taxable income multiplied by 2%. On $60,000 taxable income, the Medicare levy is $1,200 per year, or $50 per fortnight. On $100,000, it is $2,000 annually. The levy applies from the first dollar of taxable income above the low-income threshold — there is no separate tax-free amount for Medicare, though low earners may be fully exempt.",
        "The Medicare levy reduction applies to low-income earners who exceed the exemption threshold but fall within the shade-in range. Rather than jumping from 0% to 2%, eligible taxpayers pay a reduced rate that gradually increases to the full 2% as income rises. The exact thresholds are indexed and published by the ATO each year. For 2025–26, our calculator uses the $26,000 low-income threshold below which no levy is payable for most single taxpayers without dependants.",
      ],
      {
        list: [
          "Standard rate: 2% of taxable income",
          "Low-income exemption: no levy below approximately $26,000",
          "Reduction: partial levy for incomes in the shade-in range",
          "Exemptions: certain pensioners, blind taxpayers, and foreign residents",
          "Medicare Levy Surcharge: additional 1–1.5% for high earners without private hospital cover",
        ],
      }
    ),
    section(
      "Who Pays the Medicare Levy?",
      [
        "Australian residents for tax purposes generally pay the Medicare levy. This includes most citizens, permanent residents, and people who hold a temporary visa with work rights and meet residency tests. You must lodge a tax return to reconcile your levy position, even if your employer withheld amounts during the year. Foreign residents for tax purposes are not liable for the Medicare levy on Australian-source income, though they pay income tax at different rates.",
        "Some taxpayers qualify for full exemptions. Pensioners below certain income limits, blind taxpayers, and those not entitled to Medicare benefits may be exempt. Defence Force personnel and certain other categories have specific rules. If you are exempt, you may need to complete a Medicare levy exemption certificate or claim the exemption on your tax return. A medicare levy calculator helps determine whether standard 2%, a reduction, or zero applies to your situation.",
      ]
    ),
    section(
      "When to Use a Medicare Levy Calculator",
      [
        "Use a medicare levy calculator whenever you need to estimate the healthcare levy component of your tax separately from income tax. This is useful when comparing total tax burden across income levels, understanding why your PAYG withholding seems higher than income tax alone, or checking whether you fall below the low-income exemption threshold. First-time workers often overlook the 2% levy when mentally estimating take-home pay.",
        "The calculator is also valuable for financial planning near threshold boundaries. A small pay rise that pushes income from $25,000 to $27,000 could trigger Medicare levy liability where none existed before — an effective marginal rate spike that catches people off guard. High-income earners considering private health insurance should model the Medicare Levy Surcharge (MLS), which applies when income exceeds $93,000 for singles (2025–26) without appropriate hospital cover. Combine medicare levy results with an income tax calculator and hecs calculator for complete PAYG estimates.",
      ]
    ),
    section(
      "Step-by-Step: Using the Medicare Levy Calculator",
      [
        "Enter your expected annual taxable income for 2025–26. Use the same figure you would enter in an income tax calculator — gross salary minus allowable deductions for most employees. The calculator determines whether your income falls below the exemption threshold, within the reduction shade-in zone, or above the full levy threshold.",
        "Review the output: levy rate applied (exempt, reduced, or 2%), annual levy amount, and status. For fortnightly or monthly budgeting, divide the annual levy by 26 or 12. To see total take-home pay, add the levy to income tax and any HECS repayments using a gross to net calculator. If you have private hospital cover and high income, research MLS separately — it is assessed on income for MLS purposes, which includes reportable fringe benefits and other adjustments.",
      ],
      {
        list: [
          "Enter annual taxable income",
          "Check exemption or reduction status",
          "Note the 2% levy amount (or $0 if exempt)",
          "Add to income tax for total PAYG estimate",
          "Consider MLS if income exceeds $93,000 without hospital cover",
        ],
      }
    ),
    section(
      "Worked Examples: Levy at Different Income Levels",
      [
        "A part-time worker earning $24,000 taxable income falls below the $26,000 threshold and pays no Medicare levy. Their income tax is also minimal — only the portion above $18,200 is taxed at 16%. Total tax is roughly $928 income tax plus $0 Medicare, leaving take-home around $23,072 before any other deductions.",
        "A full-time employee on $60,000 pays $1,200 in Medicare levy (2% of $60,000) plus approximately $7,788 in income tax, for total tax around $8,988. On $100,000, the levy is $2,000 — a meaningful line item that many people forget when quoting their tax rate as just income tax. At $150,000, Medicare adds $3,000 on top of approximately $39,288 income tax. High earners without private hospital cover earning above $93,000 may owe an additional 1% to 1.5% MLS on top of the standard levy, potentially adding $930 to $1,395 or more depending on income tier.",
      ]
    ),
    section(
      "Medicare Levy Reduction and Exemption Rules",
      [
        "The low-income exemption means taxpayers below the threshold pay no Medicare levy. For 2025–26, this threshold is approximately $26,000 for singles without dependants. Families have higher thresholds based on the number of dependent children. The shade-in range above the exemption threshold phases in the levy gradually — you do not suddenly owe 2% on all income the moment you exceed the limit.",
        "Full exemptions apply to certain categories regardless of income: blind taxpayers, those entitled to full Medicare levy exemption certificates, and foreign residents. Partial exemptions exist for seniors and pensioners above specific age and income combinations. Medical expenses may qualify for the Medicare levy reduction in limited circumstances through the tax return. Because rules vary by family status and income source, the calculator provides estimates for standard single-employee scenarios; complex cases warrant professional advice or the ATO's detailed worksheets.",
      ]
    ),
    section(
      "Medicare Levy Surcharge Explained",
      [
        "The Medicare Levy Surcharge (MLS) is an additional charge designed to encourage higher-income earners to take out private hospital cover. It applies when your income for MLS purposes exceeds $93,000 for singles or $186,000 for families (2025–26 thresholds, indexed annually) and you do not hold an appropriate level of private patient hospital insurance. The surcharge is 1% of income for tier one, 1.25% for tier two, and 1.5% for tier three — on top of the standard 2% Medicare levy.",
        "Income for MLS purposes is broader than taxable income. It includes reportable fringe benefits, total net investment losses, and certain other amounts. A couple earning $200,000 combined without hospital cover could owe thousands in MLS annually — often more than the cost of basic private hospital insurance. The standard medicare levy calculator focuses on the 2% levy; MLS requires separate assessment. If you are near the threshold, comparing private health insurance premiums against potential MLS is a common year-end tax planning exercise.",
      ]
    ),
    section(
      "Common Mistakes About the Medicare Levy",
      [
        "Many Australians confuse the Medicare levy with the Medicare Levy Surcharge or assume Medicare is funded only through income tax. The 2% levy is a distinct charge. Another error is forgetting the levy when estimating take-home pay — quoting the 30% marginal income tax rate without adding 2% Medicare understates withholding by a meaningful margin. People who drop below the exemption threshold after a job change mid-year may overpay through PAYG and receive a refund at tax time.",
        "Assuming private health insurance eliminates the Medicare levy is incorrect — it only helps avoid MLS for high earners. The standard 2% levy still applies. Foreign workers sometimes believe they pay Medicare levy on all worldwide income; liability depends on tax residency status and the source of income. Not claiming an available exemption — for eligible pensioners or blind taxpayers — results in paying levy unnecessarily until corrected on the tax return.",
      ]
    ),
    section(
      "Related Tools and Take-Home Pay Context",
      [
        "The Medicare levy is one layer in Australia's PAYG system. An income tax calculator shows the bracket-based income tax component. A hecs calculator adds compulsory HELP repayments when repayment income exceeds $54,435. A gross to net calculator or take-home pay calculator combines all three for realistic net pay figures. If you think in net terms, a net to gross calculator works backwards from your desired take-home amount.",
        "For complete salary planning, also consider the 12% superannuation guarantee paid by employers — usually on top of salary and not deducted from take-home pay. Salary sacrifice arrangements reduce taxable income and therefore reduce both income tax and Medicare levy, since both are calculated on the lower taxable base. A salary sacrifice calculator models those savings. Bonus income attracts Medicare levy at 2% on the bonus amount alongside marginal income tax — see our bonus tax calculator for illustrations.",
      ]
    ),
  ],
  [
    {
      question: "How much is the Medicare levy in Australia for 2025–26?",
      answer:
        "The standard Medicare levy is 2% of taxable income for Australian residents. On $80,000 taxable income, that is $1,600 per year. Low-income earners below approximately $26,000 may be fully exempt, and those in the shade-in range may pay a reduced rate. The levy is collected through PAYG withholding alongside income tax.",
    },
    {
      question: "Who is exempt from the Medicare levy?",
      answer:
        "Taxpayers with taxable income below the low-income threshold (approximately $26,000 for singles in 2025–26) are generally exempt. Full exemptions also apply to certain blind taxpayers, foreign residents for tax purposes, and those with approved Medicare levy exemption certificates. Seniors and pensioners may qualify for exemptions or reductions based on age and income.",
    },
    {
      question: "Is the Medicare levy the same as the Medicare Levy Surcharge?",
      answer:
        "No. The Medicare levy is 2% of taxable income for most residents and funds Medicare broadly. The Medicare Levy Surcharge (MLS) is an additional 1% to 1.5% charged to high-income earners (above $93,000 for singles in 2025–26) who do not hold appropriate private hospital insurance. You can owe the standard 2% levy without MLS, or both if income is high and you lack hospital cover.",
    },
    {
      question: "Does the Medicare levy reduce my take-home pay?",
      answer:
        "Yes. Your employer withholds Medicare levy through PAYG along with income tax. On a $70,000 salary, the levy costs $1,400 per year — about $54 per fortnight — on top of income tax. Use a gross to net calculator or medicare levy calculator to see the exact impact on your pay.",
    },
    {
      question: "Can I reduce my Medicare levy with private health insurance?",
      answer:
        "Private health insurance does not reduce the standard 2% Medicare levy. It can help you avoid the Medicare Levy Surcharge if your income exceeds MLS thresholds. For many high earners, the cost of basic hospital cover is less than the MLS they would otherwise pay, making insurance financially worthwhile for tax purposes as well as health coverage.",
    },
    {
      question: "How does the Medicare levy interact with HECS repayments?",
      answer:
        "Medicare levy and HECS are calculated independently on different bases but both reduce take-home pay. Medicare levy is 2% of taxable income (above exemption thresholds). HECS repayments are a percentage of repayment income when above $54,435. Both are withheld through PAYG. A gross to net calculator with HECS enabled shows the combined effect on your pay.",
    },
  ]
);
