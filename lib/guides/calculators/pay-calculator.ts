import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "pay-calculator",
  "Australian Pay Calculator: Guide for 2025–26",
  "An Australian pay calculator helps you work out exactly how much you earn after tax, Medicare, and HECS deductions from your gross salary or wages. If you're paid weekly, fortnightly, monthly, or annually, understanding your true pay is essential for budgeting, comparing job offers, and planning your finances. The pay calculator above applies the current 2025–26 ATO income tax brackets — including Stage 3 tax cuts — the 2% Medicare levy, 12% superannuation guarantee, and HECS repayment thresholds to give you a complete breakdown of your earnings. From entry-level roles to six-figure salaries, this guide explains how Australian pay works and how to use the calculator to see your full pay picture across every pay cycle.",
  [
    section(
      "What Is an Australian Pay Calculator?",
      [
        "A pay calculator is a tool that converts your gross earnings into net pay by applying Australian tax rules, Medicare levy rates, and optional HECS repayments. Employers are required to withhold Pay As You Go (PAYG) tax from your wages each pay period and remit it to the ATO on your behalf. The amount withheld depends on your gross pay, your tax file number declaration, and whether you have claimed the tax-free threshold. A pay calculator replicates this withholding logic so you can see your expected net pay before your first payslip arrives.",
        "Unlike a simple percentage estimate, a proper Australian pay calculator uses the progressive tax bracket system where different portions of your income are taxed at different rates. It also accounts for the Medicare levy and compulsory HECS repayments when applicable. The result is a detailed pay breakdown showing income tax, Medicare, HECS, and your take-home amount across weekly, fortnightly, monthly, and annual pay cycles — the same cycles used by most Australian employers.",
      ],
      {
        list: [
          "Gross pay: total earnings before deductions",
          "Net pay: amount deposited into your bank account",
          "PAYG: tax withheld by employer each pay cycle",
          "Pay cycles: weekly (52), fortnightly (26), monthly (12), annual (1)",
        ],
      }
    ),
    section(
      "How the Pay Calculator Works",
      [
        "Enter your gross annual salary and the calculator applies the 2025–26 tax brackets in sequence. Income up to $18,200 is tax-free. The next $26,800 is taxed at 16%, income from $45,001 to $135,000 at 30%, from $135,001 to $190,000 at 37%, and above $190,000 at 45%. These are the Stage 3 rates in effect since 1 July 2024. The calculator computes total income tax, then adds the 2% Medicare levy on taxable income above $26,000.",
        "If you have a HECS or HELP debt, enable repayments to see the compulsory deduction based on your repayment income. HECS rates range from 1% to 10% depending on income level. The calculator also shows your employer superannuation contribution at 12% of ordinary time earnings — paid separately into your super fund, not deducted from your cash pay. Finally, it divides your annual net pay into weekly, fortnightly, and monthly figures so you can match the result to your actual pay cycle.",
      ]
    ),
    section(
      "When to Use a Pay Calculator",
      [
        "Use a pay calculator whenever you need to understand the real value of a quoted salary or wage. Australian job ads and employment contracts state gross figures, but your day-to-day spending depends on net pay. Before signing a contract, running the gross salary through a pay calculator reveals your actual weekly or fortnightly take-home amount. This is critical when comparing roles in different tax brackets or when one offer includes benefits that affect taxable income.",
        "Pay calculators are also valuable mid-year when you receive a pay rise, change jobs, or adjust your HECS status. If you move from part-time to full-time, switch from casual to permanent, or start salary sacrificing into super, your net pay changes in ways that are not obvious from the gross figure alone. Running updated calculations helps you adjust your budget, savings plan, and financial goals to match your new pay reality.",
      ],
      {
        list: [
          "Evaluating a new job offer or contract",
          "Budgeting after a pay rise or promotion",
          "Comparing permanent, part-time, and casual roles",
          "Checking payslips for accuracy",
          "Planning major purchases or loan applications",
        ],
      }
    ),
    section(
      "Step-by-Step: Using the Pay Calculator",
      [
        "Step one: enter your gross annual salary. If you only know your weekly or hourly rate, convert to annual first — multiply weekly gross by 52, fortnightly by 26, or use our hourly to salary calculator for hourly workers. Step two: toggle HECS repayments on if you have an outstanding HELP debt and your income exceeds the $54,435 repayment threshold. Step three: review the full breakdown showing income tax, Medicare levy, HECS, and net pay.",
        "Step four: check the pay cycle that matches your employer — weekly, fortnightly, or monthly — and compare the net figure to your payslip. Small differences may arise from rounding, pay period timing, or additional deductions like salary sacrifice or union fees that are not included in the standard calculation. For the most detailed line-by-line view of every deduction, pair this tool with our take-home pay calculator or gross to net calculator for cross-reference.",
      ]
    ),
    section(
      "Worked Example: $72,000 Annual Salary",
      [
        "An employee on $72,000 gross with no HECS debt pays zero tax on the first $18,200. The portion from $18,201 to $45,000 ($26,800) attracts 16% tax, totalling $4,288. The remaining $27,000 from $45,001 to $72,000 is taxed at 30%, adding $8,100. Total income tax is $12,388. Medicare levy at 2% on $72,000 adds $1,440, bringing total deductions to $13,828.",
        "Net annual pay is about $58,172, which breaks down to about $1,119 per week, $2,238 per fortnight, or $4,848 per month. Employer super at 12% adds $8,640 per year into the employee's super fund on top of this cash salary. If the employee had HECS debt at the 2% repayment rate (income between $62,850 and $66,620), an additional $1,440 in repayments would reduce take-home pay to roughly $56,732 annually. This example shows how a seemingly modest salary still involves over $13,000 in tax and levies.",
      ]
    ),
    section(
      "Australian Tax Context for 2025–26",
      [
        "The 2025–26 income year operates under tax rates reformed by Stage 3 tax cuts effective 1 July 2024. The key change for most workers is the reduction of the 19% marginal rate to 16% and the 32.5% rate to 30%, meaning more income is taxed at lower rates. The tax-free threshold remains at $18,200, and the Medicare levy stays at 2% for incomes above $26,000. No low and middle income tax offset applies in 2025–26.",
        "Superannuation guarantee increased to 12% from 1 July 2025, meaning employers must contribute 12 cents for every dollar of ordinary time earnings into your nominated super fund. This is a significant long-term benefit on top of your cash salary. HECS repayment thresholds are indexed annually — for 2024–25, repayments begin at $54,435 and scale to 10% for incomes above $159,663. The pay calculator above incorporates all of these current rates to produce accurate 2025–26 estimates.",
      ],
      {
        list: [
          "Stage 3 cuts: 16% rate ($18,201–$45,000), 30% rate ($45,001–$135,000)",
          "Medicare levy: 2% on income above $26,000",
          "Super guarantee: 12% employer contribution from July 2025",
          "HECS: 1%–10% compulsory repayments above $54,435",
          "Tax-free threshold: first $18,200 of income",
        ],
      }
    ),
    section(
      "Common Pay Calculation Mistakes",
      [
        "A widespread mistake is assuming your gross salary divided by 52 equals your weekly take-home pay. Tax is progressive, not flat, so the effective tax rate varies across income levels. At $50,000 gross, you lose roughly 14% to tax and Medicare combined; at $120,000, the effective rate climbs closer to 28%. Another error is ignoring HECS — graduates often forget that crossing the repayment threshold triggers automatic deductions that reduce net pay.",
        "Confusing super with salary is another frequent issue. The 12% super guarantee is an employer contribution on top of your gross pay, not a deduction from it. However, salary sacrifice arrangements do reduce your gross pay and taxable income in exchange for additional super contributions. Using outdated tax rates from before July 2024 will also overstate your tax bill, as Stage 3 cuts lowered rates for most income brackets. Always use a calculator updated for 2025–26.",
      ]
    ),
    section(
      "Who Benefits from Using a Pay Calculator?",
      [
        "Every Australian employee can benefit from a pay calculator, but the tool is especially valuable for those navigating career transitions. Job seekers comparing offers between companies, industries, or employment types (permanent vs contract) need net pay figures to make informed decisions. New graduates entering the workforce often have limited experience with Australian tax and may be surprised by how much gross pay is lost to deductions.",
        "Mid-career professionals negotiating salary packages use pay calculators to quantify the real value of proposed increases. A $15,000 raise from $80,000 to $95,000 adds roughly $10,000 to take-home pay — not the full $15,000 — because higher income pushes more earnings into the 30% bracket. HR professionals and recruiters can also use pay calculators to help candidates understand package values, though they should always direct employees to independent tools for personal financial planning.",
      ]
    ),
    section(
      "Pay Calculator vs Related Tools",
      [
        "The pay calculator above provides a full overview of your earnings across all pay cycles. For a focused view on net pay only, the take-home pay calculator emphasises what lands in your bank account. The gross to net calculator offers the most granular tax breakdown with every deduction shown separately. If you are paid hourly, start with the hourly to salary calculator to convert your rate to an annual figure, then use the pay calculator for the full tax analysis.",
        "For reverse calculations — finding the gross salary needed to achieve a target net income — use our net to gross calculator. The salary to hourly calculator helps permanent employees understand their effective hourly rate for comparison with casual or contract work. Together, these tools cover every angle of Australian salary and wage calculations, all using consistent 2025–26 ATO rates and assumptions for reliable, comparable results.",
      ],
      {
        list: [
          "Pay calculator: full breakdown across all pay cycles",
          "Take-home pay calculator: focused on net pay amounts",
          "Gross to net calculator: detailed tax line items",
          "Hourly to salary calculator: convert hourly wages to annual",
          "Net to gross calculator: find gross for a target net income",
        ],
      }
    ),
  ],
  [
    {
      question: "How much tax do I pay on a $100,000 salary in Australia?",
      answer:
        "On $100,000 gross in 2025–26, income tax is about $22,288, plus $2,000 Medicare levy, totalling around $24,288 in deductions. Take-home pay is roughly $75,712 before HECS. With HECS at the 4% rate, repayments of $4,000 further reduce net pay to about $71,712.",
    },
    {
      question: "What pay cycle do most Australians use?",
      answer:
        "Fortnightly pay is the most common cycle in Australia, followed by monthly pay in professional and corporate roles, and weekly pay in trades and hospitality. The pay calculator above shows all four cycles — weekly, fortnightly, monthly, and annual — so you can match your employer's schedule.",
    },
    {
      question: "Does the pay calculator include superannuation?",
      answer:
        "Yes, the calculator displays the 12% employer superannuation guarantee contribution separately. Super is paid by your employer into your super fund and is not deducted from your cash salary. It is shown for transparency so you can see your total employment package value.",
    },
    {
      question: "How do Stage 3 tax cuts affect my pay in 2025–26?",
      answer:
        "Stage 3 reduced the 19% marginal rate to 16% and the 32.5% rate to 30% from 1 July 2024. Most workers earning $45,000 to $135,000 pay less tax and receive higher net pay than under previous rates. Our calculator applies these updated brackets automatically.",
    },
    {
      question: "Can I use the pay calculator for part-time work?",
      answer:
        "Yes. Enter your actual gross annual income, whether from part-time, full-time, or casual work. For hourly workers, calculate annual gross as hourly rate times hours per week times 52, or use our hourly to salary calculator first.",
    },
    {
      question: "Why does my payslip differ slightly from the calculator?",
      answer:
        "Small differences can arise from PAYG rounding, pay period timing, salary sacrifice, union fees, or additional allowances. The calculator provides an estimate based on standard assumptions. Your actual payslip may also reflect accumulated leave loading or overtime not included in base salary calculations.",
    },
  ]
);
