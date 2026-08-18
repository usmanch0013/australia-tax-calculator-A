import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "super-calculator",
  "Superannuation in Australia (2025–26)",
  "Superannuation — or super — is Australia's compulsory retirement savings system. From 1 July 2025, employers must contribute at least 12% of your ordinary time earnings under the Superannuation Guarantee (SG). Whether super is paid on top of your base salary or included within your total remuneration package significantly affects your take-home pay and retirement balance. This guide covers the 12% SG rate for 2025–26, how to calculate employer contributions, inclusive versus exclusive packaging, what counts as ordinary time earnings, and how super fits into your broader salary structure.",
  [
    section("What Is the Superannuation Guarantee?", [
      "The Superannuation Guarantee (SG) is a legal obligation requiring Australian employers to pay a minimum percentage of each eligible employee's ordinary time earnings into a complying super fund. The SG rate increased to 12% on 1 July 2025, completing a phased rise that began at 9.5% in 2021. Employers must make SG contributions at least quarterly, though many pay monthly alongside regular payroll.",
      "SG applies to full-time, part-time, and casual employees aged 18 and over who earn at least $450 per month (though this threshold is periodically reviewed). Employees under 18 must also meet the $450 monthly earnings threshold. Contractors paid wholly or principally for labour may also be entitled to SG if they are considered employees for super purposes under the ATO's tests.",
    ]),
    section("How to Calculate 12% Super in 2025–26", [
      "The basic calculation is straightforward: multiply your ordinary time earnings by 12%. On a $90,000 annual salary with super paid on top, your employer contributes $10,800 per year ($900 per month) in addition to your $90,000 cash salary, giving a total employment package of $100,800. The super calculator above performs this calculation right away and also handles the inclusive scenario where super is embedded within a quoted package figure.",
      "Ordinary time earnings (OTE) generally include your base salary, over-award payments, shift loadings, allowances, commissions, and paid leave. OTE excludes overtime worked beyond standard hours, expense reimbursements, and fringe benefits. If a significant portion of your pay comes from overtime or irregular allowances, your actual SG may be lower than 12% of your total cash earnings — check your payslip to see the SG contribution base.",
    ], {
      list: [
        "Super on top: base salary × 12% = employer contribution",
        "Inclusive package: total package ÷ 1.12 = base salary; remainder is super",
        "Example on top: $80,000 salary → $9,600 super → $89,600 total package",
        "Example inclusive: $89,600 package → $80,000 salary + $9,600 super",
      ],
    }),
    section("Super on Top vs Super Inclusive", [
      "When a job is advertised at $100,000 plus super, the employer pays 12% SG on top of that figure — your total package is $112,000. When a role is advertised at $100,000 including super, your base salary is actually $89,286 ($100,000 ÷ 1.12) and super is $10,714. The difference in take-home pay between these two structures is significant: inclusive packaging means a lower cash salary even though the headline number looks the same.",
      "Always clarify which structure applies before accepting an offer or comparing roles. Two jobs both quoting $100,000 can differ by over $10,000 in actual super contributions and cash pay. Our calculator lets you toggle between inclusive and on-top modes so you can normalise offers and compare apples with apples when negotiating salary.",
    ]),
    section("Using the Super Calculator", [
      "Enter your salary figure and select whether super is included in that amount or paid on top. The calculator applies the 12% SG rate for 2025–26 and displays your base salary, employer super contribution, total package value, and monthly super amount. This is useful when reviewing job offers, checking whether your payslip matches your contract, or understanding how a pay rise translates into super.",
      "The tool provides estimates based on the standard SG rate and assumes all of your entered salary qualifies as ordinary time earnings. It does not account for employer contributions above the legal minimum, salary sacrifice arrangements, or the concessional contributions cap. If your employer pays more than 12% under an enterprise agreement or employment contract, adjust your inputs or add the extra amount manually.",
    ]),
    section("Who Pays Super and When?", [
      "Your employer is legally responsible for paying SG into your nominated super fund. You do not need to make any payment for the employer contribution — it is entirely the employer's obligation. Contributions must be received by your super fund by the quarterly due dates: 28 October, 28 January, 28 April, and 28 July for the preceding quarter. Late payments incur the Superannuation Guarantee Charge (SGC), which includes interest and an administration fee.",
      "You choose your super fund by completing a Standard Choice Form when you start a new job. If you do not nominate a fund, your employer pays into a MySuper default fund or an existing stapled fund linked to your tax file number. You can change funds at any time by notifying your employer, though exit fees and insurance implications should be considered before switching.",
    ]),
    section("Super and Your Total Employment Package", [
      "When evaluating total remuneration, super should be counted alongside base salary, bonuses, allowances, and non-cash benefits. A $120,000 salary plus 12% super represents a $134,400 package before tax. For comparison with contract or freelance income — where you must fund your own super — add the employer contribution value to appreciate the full benefit of employee status.",
      "Some employers contribute above the SG minimum, often 12.5% or 15%, as a retention incentive or under enterprise bargaining agreements. Public sector and university employees frequently receive higher employer contribution rates. If your employer pays above 12%, the excess still counts as a concessional contribution and contributes to your $30,000 annual cap alongside any salary sacrifice.",
    ]),
    section("Concessional Contributions and the $30,000 Cap", [
      "Employer SG contributions count toward your concessional (before-tax) contributions cap of $30,000 for 2025–26. This cap includes employer SG, salary sacrifice, and personal deductible contributions. On a $200,000 salary, employer SG alone is $24,000, leaving $6,000 for additional concessional contributions before hitting the cap.",
      "Exceeding the concessional cap triggers excess contributions tax — the excess is added to your assessable income and taxed at your marginal rate, with an interest charge. The ATO may allow you to withdraw the excess from super to avoid double taxation. Tracking your year-to-date concessional contributions through your myGov account or super fund portal helps prevent cap breaches.",
    ]),
    section("Super Investment and Fees", [
      "Once contributed, your super is invested by your fund according to your chosen investment option — typically ranging from conservative (cash and bonds) to high growth (shares and property). Investment returns compound over decades, making even small differences in contribution amounts significant by retirement. The 12% SG rate increase from 11.5% to 12% adds roughly $500 per year to the super of someone earning $100,000.",
      "Super funds charge administration fees, investment management fees, and sometimes insurance premiums for default life and total and permanent disability cover. Compare fees and performance across funds using the ATO's YourSuper comparison tool. Lower fees and appropriate asset allocation can add tens of thousands of dollars to your retirement balance over a working lifetime.",
    ]),
    section("Super for Part-Time and Casual Workers", [
      "Part-time and casual employees receive SG on the same 12% rate applied to their ordinary time earnings, pro-rated for hours worked. A part-time worker earning $50,000 per year receives $6,000 in employer super. Casual loadings (typically 25%) are generally included in OTE, so super is calculated on the loaded hourly rate, not just the base award rate.",
      "If you work multiple jobs, each employer pays SG separately up to the maximum contribution base (currently $250,000 per quarter per employer, indexed annually). There is no obligation for employers to pay SG on earnings above this base. Multiple employers each contributing 12% can quickly approach the $30,000 concessional cap, so monitor total contributions across all jobs.",
    ]),
    section("Checking Your Super Is Correct", [
      "Review each payslip to confirm SG is being calculated and paid. The amount should be approximately 12% of your OTE for the period. Super contributions appear on your annual PAYG payment summary or income statement in myGov, and your super fund sends quarterly member statements showing contributions received.",
      "If your employer is not paying the correct SG, you can report unpaid super to the ATO, which can investigate and recover amounts owed plus the SGC. Common issues include misclassifying workers as contractors, calculating SG on the wrong earnings base, or paying late. Keeping payslips and super statements helps you identify discrepancies early.",
    ]),
    section("Building Retirement Savings Beyond the 12% SG", [
      "The 12% Superannuation Guarantee provides a foundation, but most Australians need additional contributions to fund a comfortable retirement. The Association of Superannuation Funds of Australia (ASFA) estimates that a couple needs roughly $73,000 per year for a comfortable retirement lifestyle as of 2025, requiring a super balance well above what employer SG alone will deliver over a typical working life.",
      "Salary sacrifice and personal deductible contributions are the two main ways to boost super beyond employer SG, both taxed at 15% inside the fund up to the $30,000 concessional cap. After-tax (non-concessional) contributions of up to $120,000 per year offer another pathway for those who have maxed out concessional contributions. Combining employer SG with regular voluntary contributions from your 30s or 40s uses decades of compound investment returns. Use our salary sacrifice calculator alongside the super calculator to model how extra contributions affect both your take-home pay and projected retirement balance.",
    ]),
  ],
  [
    {
      question: "What is the superannuation rate in Australia for 2025–26?",
      answer: "The Superannuation Guarantee rate is 12% of ordinary time earnings from 1 July 2025. Employers must contribute at least this percentage to a complying super fund for eligible employees each quarter.",
    },
    {
      question: "How do I calculate super on a $100,000 salary?",
      answer: "If super is on top: $100,000 × 12% = $12,000 super, total package $112,000. If super is inclusive: $100,000 ÷ 1.12 = $89,286 base salary with $10,714 super. Always confirm which structure your employer uses.",
    },
    {
      question: "Is super paid on overtime?",
      answer: "Generally no. Superannuation Guarantee is calculated on ordinary time earnings, which excludes overtime hours worked beyond standard rostered hours. However, shift loadings, casual loading, and regular allowances are usually included in OTE.",
    },
    {
      question: "Can I choose my own super fund?",
      answer: "Yes. You can nominate any complying super fund by completing a Standard Choice Form with your employer. If you do not choose, your employer pays into a default MySuper product or a stapled fund linked to your TFN.",
    },
    {
      question: "Does the 12% super come out of my salary?",
      answer: "It depends on your employment contract. If super is on top, the 12% is an additional employer cost on top of your agreed salary. If super is inclusive, the 12% is embedded within your total package, meaning your cash salary is lower than the headline figure.",
    },
    {
      question: "What happens if my employer does not pay super?",
      answer: "You can report unpaid super to the ATO online. The ATO can recover unpaid SG plus the Superannuation Guarantee Charge, which includes interest and penalties. Keep payslips and super fund statements as evidence.",
    },
  ]
);
