import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "salary-sacrifice-calculator",
  "Salary Sacrifice in Australia (2025–26)",
  "Salary sacrifice — also called salary packaging — lets you redirect part of your before-tax pay into benefits such as superannuation, reducing your taxable income. In Australia for 2025–26, the most common arrangement is sacrificing into super, where contributions are taxed at 15% inside the fund instead of your marginal income tax rate, which can be as high as 45% plus the 2% Medicare levy. Here's how salary sacrifice works under current ATO rules, how to estimate your tax savings, the concessional contributions cap, Division 293 tax for high earners, and practical steps to set up an arrangement with your employer.",
  [
    section("What Is Salary Sacrifice?", [
      "Salary sacrifice is an agreement between you and your employer to receive less cash salary in exchange for non-cash benefits. The sacrificed amount is deducted from your gross pay before income tax is calculated, which lowers your taxable income for the financial year. Your employer still pays the agreed benefit — most commonly an additional superannuation contribution — on your behalf using the pre-tax dollars you have redirected.",
      "Unlike voluntary after-tax super contributions, salary-sacrificed amounts count as concessional (before-tax) contributions. They enter your super fund taxed at 15%, which is the standard contributions tax rate for most people. The arrangement must be documented before you earn the income; you cannot retrospectively sacrifice salary you have already been paid. Not all employers offer salary sacrifice, and some only allow it for super rather than cars, laptops, or other fringe benefits.",
    ]),
    section("How Salary Sacrifice Reduces Your Tax", [
      "The tax benefit comes from the gap between your marginal income tax rate and the 15% tax paid on concessional super contributions. Under the 2025–26 Stage 3 tax cuts, Australian residents pay 0% on income up to $18,200, 16% from $18,201 to $45,000, 30% from $45,001 to $135,000, 37% from $135,001 to $190,000, and 45% above $190,000. Most employees also pay the 2% Medicare levy once income exceeds $26,000, making effective marginal rates 32%, 39%, or 47% in the middle and upper brackets.",
      "When you sacrifice $10,000 into super and your marginal rate is 39% (37% tax plus 2% Medicare), you would have paid roughly $3,900 in tax on that income if taken as cash. Instead, $1,500 (15%) is paid as contributions tax in super, leaving $8,500 in your fund. The net tax saving is approximately $2,400, though your take-home pay also falls because the sacrificed amount never hits your bank account — the benefit is a larger super balance rather than extra spending money today.",
    ]),
    section("Using the Salary Sacrifice Calculator", [
      "Our salary sacrifice calculator estimates how much income tax and Medicare you save by redirecting a chosen amount from your annual gross salary into super. Enter your total gross salary before sacrifice and the annual amount you plan to sacrifice. The tool applies 2025–26 tax brackets and the 2% Medicare levy to show tax before and after sacrifice, the reduction in taxable income, and the net tax benefit after accounting for 15% contributions tax inside super.",
      "The calculator assumes the sacrificed amount is fully deductible from your taxable income and that your employer processes the arrangement correctly through payroll. It does not account for the Medicare Levy Surcharge, HECS/HELP repayments, or other offsets that may also change when your taxable income falls. If you have a HELP debt, reducing taxable income can lower your compulsory repayment rate, providing an additional indirect benefit that the basic calculator may not display.",
    ], {
      list: [
        "Enter your annual gross salary (before sacrifice and before tax)",
        "Enter the amount you plan to salary sacrifice per year",
        "Review tax before sacrifice versus tax after sacrifice",
        "Compare the net tax benefit against the 15% super contributions tax",
        "Consider your remaining concessional contributions cap",
      ],
    }),
    section("Concessional Contributions Cap for 2025–26", [
      "All before-tax super contributions — including employer Superannuation Guarantee (SG), salary sacrifice, and personal deductible contributions — count toward your concessional contributions cap. For the 2025–26 financial year, the cap is $30,000. If your total concessional contributions exceed the cap, the excess is included in your assessable income and taxed at your marginal rate, plus an excess contributions charge — so staying within the cap is essential.",
      "Your employer must pay at least 12% Superannuation Guarantee on your ordinary time earnings from 1 July 2025. On a $100,000 salary, that is $12,000 in SG alone, leaving $18,000 of cap room for salary sacrifice and other concessional contributions. If you earn $200,000, the 12% SG is $24,000, leaving only $6,000 of cap space. Always add employer SG, any award super, and planned sacrifice together before committing to a sacrifice amount.",
    ]),
    section("Division 293 Tax for High-Income Earners", [
      "If your income for Division 293 purposes exceeds $250,000, you may owe an additional 15% tax on some or all of your concessional super contributions. Income for Division 293 is broadly your taxable income plus concessional super contributions (including SG and salary sacrifice). This extra tax is designed to reduce the tax concession for very high earners whose marginal rate is already 45%.",
      "Division 293 tax is calculated on the lesser of your concessional contributions and the amount by which your Division 293 income exceeds $250,000. For example, if your taxable income is $240,000 and you salary sacrifice $20,000, your Division 293 income is $260,000 — $10,000 over the threshold. You would owe 15% on $10,000 ($1,500) in additional tax, which can be paid personally or released from your super fund. Use our Division 293 calculator if you are near this threshold.",
    ]),
    section("Salary Sacrifice vs Personal Deductible Contributions", [
      "Since 1 July 2017, most employees can also make personal super contributions and claim a tax deduction, which has a similar tax effect to salary sacrifice. Both count toward the same $30,000 concessional cap and both are taxed at 15% in the fund. The main difference is timing and cash flow: salary sacrifice happens automatically through payroll before you receive pay, while personal deductible contributions require you to transfer money from your after-tax savings and lodge a notice of intent to claim with your fund.",
      "Salary sacrifice is often simpler for regular, ongoing contributions because your employer handles the paperwork and your take-home pay adjusts automatically. Personal deductible contributions suit irregular amounts or employees whose payroll systems do not support sacrifice. You cannot double-dip: the combined total of employer SG, salary sacrifice, and personal deductible contributions must stay within the concessional cap.",
    ]),
    section("Salary Packaging Beyond Super", [
      "Some employers — particularly in the not-for-profit, health, and public sectors — offer broader salary packaging for items such as cars (novated leases), laptops, childcare, and entertainment expenses. These arrangements use the same pre-tax principle but are subject to Fringe Benefits Tax (FBT) rules. Not-for-profit employers with FBT exemptions can provide certain benefits more tax-effectively than private sector employees.",
      "FBT is a separate tax paid by employers on most non-exempt benefits, which is why many private employers limit packaging to super only. If your employer offers a novated lease or other packaged items, the tax saving depends on your marginal rate, the FBT treatment of the benefit, and any employee contributions. Our novated lease calculator can help estimate savings for car packaging arrangements in the 2025–26 year.",
    ]),
    section("Impact on Take-Home Pay and Government Benefits", [
      "Salary sacrifice reduces your gross taxable income but also reduces the cash amount deposited into your bank account each pay cycle. On a $120,000 salary sacrificing $10,000, your taxable income drops to $110,000, but your take-home pay falls by the full $10,000 — you do not receive that money as cash. The financial upside is the tax saved and the larger super balance growing with investment returns until retirement.",
      "Lower taxable income can also affect eligibility for government benefits and offsets tied to income, such as the private health insurance rebate, childcare subsidy, Family Tax Benefit, and HECS repayment thresholds. If you are near a threshold for any of these, model the full impact before increasing sacrifice. Conversely, reducing income can help you stay below the Medicare Levy Surcharge threshold if you do not hold appropriate private hospital cover.",
    ]),
    section("How to Set Up Salary Sacrifice with Your Employer", [
      "Contact your HR or payroll team to ask whether salary sacrifice is available and which benefits are offered. You will typically complete a salary sacrifice agreement specifying the amount or percentage per pay period and the destination (usually your nominated super fund). The agreement should be in place before the pay period in which sacrifice begins — the ATO requires arrangements to be prospective, not retrospective.",
      "Check that your employer passes on the full tax benefit by reducing PAYG withholding on your remaining salary. Confirm which super fund receives the sacrificed amounts and ensure they are coded as employer contributions (reportable employer super contributions, or RESC) on your payslip. Review your arrangement annually, especially after a pay rise, a new job, or changes to the SG rate, to ensure you remain within the concessional cap and that the sacrifice amount still suits your budget.",
    ]),
    section("Who Benefits Most from Salary Sacrifice?", [
      "Salary sacrifice into super is most effective for middle and higher income earners in the 30%, 37%, or 45% tax brackets, where the gap between marginal tax and the 15% contributions tax is largest. Someone earning $80,000 sacrificing $5,000 saves roughly 17 cents per dollar (32% marginal rate minus 15%), while someone on $180,000 saves about 24 cents per dollar (39% minus 15%).",
      "It is generally less beneficial for low-income earners below $45,000, where the marginal rate is 16% or less — close to the 15% super tax — and locking money in super until preservation age may not suit short-term financial needs. Younger workers with mortgage goals, those without an emergency fund, or anyone needing maximum cash flow should weigh the illiquidity of super carefully. Salary sacrifice works best as part of a broader financial plan that balances today's needs with retirement savings.",
    ]),
  ],
  [
    {
      question: "How much can I salary sacrifice into super in 2025–26?",
      answer: "Your total concessional contributions — employer SG (12%), salary sacrifice, and any personal deductible contributions — must not exceed $30,000 for the 2025–26 financial year. Subtract your employer's SG from $30,000 to find your remaining room for sacrifice.",
    },
    {
      question: "Does salary sacrifice affect my employer's super guarantee?",
      answer: "Under current law, salary-sacrificed amounts count toward your employer's Superannuation Guarantee obligation. Your employer does not need to pay SG on top of sacrificed amounts. Some employers still pay 12% SG on your full gross salary before sacrifice — check your contract or enterprise agreement.",
    },
    {
      question: "Can I access salary-sacrificed super before retirement?",
      answer: "Generally no. Super is preserved until you reach your preservation age (55 to 60 depending on birth year) and meet a condition of release such as retirement. Limited early access is available in cases of severe financial hardship or compassionate grounds, but these are strictly assessed.",
    },
    {
      question: "Is salary sacrifice worth it if I earn under $45,000?",
      answer: "The tax benefit is smaller when your marginal rate is 16% or 0%, because the 15% contributions tax in super nearly matches your income tax rate. You may still benefit slightly, but consider whether you need the cash now for living expenses, debt reduction, or an emergency fund.",
    },
    {
      question: "What is the difference between salary sacrifice and salary packaging?",
      answer: "The terms are often used interchangeably in Australia. Strictly, salary packaging can include non-super benefits like cars or laptops, while salary sacrifice most commonly refers to redirecting pay into super. Both involve reducing gross salary in exchange for pre-tax benefits.",
    },
    {
      question: "Do I pay Division 293 tax on salary-sacrificed super?",
      answer: "If your taxable income plus concessional super contributions exceed $250,000, you may owe an extra 15% Division 293 tax on some or all concessional contributions. This applies to salary sacrifice, employer SG, and personal deductible contributions combined.",
    },
  ]
);
