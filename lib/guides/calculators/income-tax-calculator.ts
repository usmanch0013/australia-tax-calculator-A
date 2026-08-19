import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "income-tax-calculator",
  "Australian Income Tax Calculator: Guide for 2025–26",
  "An income tax calculator estimates how much income tax you owe based on your taxable income and the official ATO tax brackets for the 2025–26 financial year. Unlike take-home pay tools that also deduct Medicare and HECS, a dedicated income tax calculator isolates the PAYG income tax component — showing your tax payable, marginal rate, and effective rate. If you're planning a tax return, comparing salary offers, or understanding how Stage 3 tax cuts affect your bracket, this guide explains Australia's tiered tax system, walks through dollar examples at common salary levels, and helps you use an income tax calculator alongside The pay calculator above and gross to net calculator for a complete picture.",
  [
    section(
      "What Is an Income Tax Calculator?",
      [
        "An income tax calculator estimates the amount of income tax payable on your taxable income for a given financial year. It applies the progressive tax scales published by the ATO (ATO), where different portions of your income are taxed at different rates. The calculator shows your total income tax, the marginal tax rate on your last dollar of income, and your effective tax rate — the average percentage of total income paid as tax.",
        "It is important to distinguish income tax from total tax. Your full tax bill also includes the 2% Medicare levy for most residents and compulsory HECS/HELP repayments if applicable. An income tax calculator focuses specifically on PAYG income tax under Part I of the Income Tax Assessment Act scales. Tools like a take-home pay calculator or gross to net calculator combine income tax with these other levies to show net pay. Understanding income tax in isolation helps you interpret pay slips, plan deductions, and assess the impact of salary changes.",
      ]
    ),
    section(
      "How Australian Income Tax Works in 2025–26",
      [
        "Australia uses a tiered tax system: the more you earn, the higher the rate applied to income above each threshold. For the 2025–26 year, the tax-free threshold is $18,200 — you pay no income tax on earnings up to that amount. Income from $18,201 to $45,000 is taxed at 16%, reflecting the Stage 3 tax cuts that reduced this rate from 19%. Income from $45,001 to $135,000 is taxed at 30%, income from $135,001 to $190,000 at 37%, and income above $190,000 at 45%.",
        "Tax is calculated on taxable income, not necessarily your gross salary. Taxable income is gross income minus allowable deductions such as work-related expenses, charitable donations, and some personal super contributions. Most employees receive a PAYG payment summary or income statement showing gross payments and tax withheld; the final tax position is reconciled when you lodge your tax return. The income tax calculator assumes standard scenarios without complex deductions unless you adjust the input figure accordingly.",
      ],
      {
        list: [
          "$0 – $18,200: 0% (tax-free threshold)",
          "$18,201 – $45,000: 16%",
          "$45,001 – $135,000: 30%",
          "$135,001 – $190,000: 37%",
          "$190,001 and above: 45%",
        ],
      }
    ),
    section(
      "Marginal Rate vs Effective Rate",
      [
        "Your marginal tax rate is the rate applied to your last dollar of income — the bracket you sit in at the top of your earnings. If you earn $80,000, your marginal rate is 30% because income above $45,000 falls in the 30% bracket. Your effective tax rate is lower: total income tax divided by total taxable income. On $80,000, income tax is about $14,788, giving an effective rate of about 18.5%.",
        "Confusing marginal and effective rates leads to poor financial decisions. Someone in the 30% bracket does not pay 30% on all their income — only on the portion above $45,000. When evaluating a pay rise, overtime, or bonus, the marginal rate tells you how much of the extra income goes to tax. When comparing overall tax burden across income levels or countries, the effective rate is more meaningful. An income tax calculator displays both figures to clarify the distinction.",
      ]
    ),
    section(
      "When to Use an Income Tax Calculator",
      [
        "Use an income tax calculator when you need to isolate the income tax component of your obligations — for example, when preparing a tax return estimate, assessing the tax impact of a salary increase, or understanding how much of a redundancy payment will be taxable. Employers and payroll professionals use the same brackets for PAYG withholding, though withholding tables smooth amounts across pay periods and may differ slightly from annual calculations.",
        "The calculator is also useful for comparing pre- and post-Stage 3 tax positions. Workers earning between $45,000 and $135,000 benefit from the reduced 30% rate (down from 32.5%), while those in the $18,201–$45,000 range benefit from the 16% rate (down from 19%). Investors estimating tax on rental income, side business profit, or dividends can enter their net assessable income. Combine results with a medicare levy calculator and hecs calculator for total PAYG obligations.",
      ]
    ),
    section(
      "Step-by-Step: Using the Income Tax Calculator",
      [
        "Enter your expected annual taxable income for the 2025–26 financial year. If you are a salaried employee with minimal deductions, your gross salary is a reasonable starting point. If you have significant work-related deductions, subtract those from gross to get taxable income. The calculator applies the bracket formula: for income in the $45,001–$135,000 range, tax equals $4,288 plus 30 cents for each dollar over $45,000.",
        "Review the output: income tax payable, marginal rate, effective rate, and after-tax income (before Medicare and HECS). To see full take-home pay, use a pay calculator or gross to net calculator with Medicare and HECS toggled on. For weekly or fortnightly perspectives, divide annual tax by 52 or 26. If you have multiple income sources, sum total taxable income before calculating — tax is assessed on combined income, not per job.",
      ],
      {
        list: [
          "Enter annual taxable income for 2025–26",
          "Review income tax payable and both tax rates",
          "Add Medicare levy (2%) and HECS if applicable for total deductions",
          "Compare scenarios at different income levels",
          "Cross-check against your PAYG withholding on pay slips",
        ],
      }
    ),
    section(
      "Worked Examples at Common Salary Levels",
      [
        "On a $50,000 taxable income, income tax is about $5,788. The first $18,200 is tax-free. The next $26,800 ($18,201 to $45,000) is taxed at 16%, yielding $4,288. The remaining $5,000 is taxed at 30%, adding $1,500. Total income tax: $5,788, giving an effective rate of 11.6%. Medicare would add $1,000 (2% of $50,000) for total tax of $6,788 before any HECS repayments.",
        "On $100,000 taxable income, income tax is about $20,788. Tax on the first $45,000 is $4,288 (the fixed amount at the 30% bracket floor). The remaining $55,000 is taxed at 30%, adding $16,500. Total: $20,788. Effective income tax rate: 20.8%. Medicare adds $2,000. With HECS at the 5% repayment rate on $100,000 repayment income, HELP adds $5,000. Total deductions approach $27,788, leaving take-home around $72,212. On $150,000, income tax is about $39,288 (marginal rate 37%), illustrating how quickly tax rises in upper brackets.",
      ]
    ),
    section(
      "Stage 3 Tax Cuts and What Changed",
      [
        "The Stage 3 personal income tax cuts, legislated earlier and effective from 1 July 2024, continue through 2025–26. The key changes reduce the 19% bracket to 16% for income between $18,201 and $45,000, and the 32.5% bracket to 30% for income between $45,001 and $135,000. The top thresholds at $135,000, $190,000, and 45% remain. For a worker earning $90,000, these cuts save about $1,125 per year in income tax compared to the pre-Stage 3 scales.",
        "The Low Income Tax Offset (LITO) provides up to $700 reduction in tax for people with taxable income below about $66,667, phasing out between $37,500 and $66,667. LITO is applied automatically in the tax system and reduces the effective tax burden for lower earners. The Low and Middle Income Tax Offset (LMITO) ended after 2021–22 and is not part of current calculations. Tax offsets are separate from bracket rates but affect your final tax bill at lodgement.",
      ]
    ),
    section(
      "Common Mistakes and Misconceptions",
      [
        "Believing you pay your top marginal rate on all income is the most widespread error. A worker earning $100,000 is often described as being in the 30% bracket, but their effective income tax rate is closer to 21%. Another mistake is forgetting that taxable income differs from gross salary — significant deductions can move you into a lower effective position. Claiming the tax-free threshold from multiple employers simultaneously causes under-withholding and a tax bill at year end.",
        "Some people assume income tax is the only deduction from pay. Medicare levy and HECS are separate. Others confuse PAYG withholding on pay slips with final tax — if too much was withheld, you receive a refund; if too little, you owe money. Investment income, side hustles, and capital gains all add to taxable income and can push you into a higher bracket. Using only the income tax calculator without considering total obligations understates your real tax burden.",
      ]
    ),
    section(
      "Who Should Use an Income Tax Calculator?",
      [
        "Salaried employees benefit when evaluating pay rises, job offers, or the tax cost of overtime. Self-employed people and sole traders estimating quarterly PAYG instalments need accurate bracket calculations. Students entering the workforce for the first time gain clarity on why their first pay slip shows substantial withholding. Migrants comparing Australia's tax system to their home country can benchmark effective rates at equivalent income levels.",
        "Financial advisers, mortgage brokers, and accountants use income tax calculators for quick scenario modelling, though professional software handles complex cases with offsets, rebates, and multiple income types. HR teams explaining pay structures to employees find marginal rate examples helpful. Anyone approaching the $135,000 or $190,000 bracket boundaries should model the impact of crossing into higher rates — a pay rise from $134,000 to $136,000 triggers the 37% marginal rate on income above $135,000.",
      ]
    ),
    section(
      "Related Calculators and Next Steps",
      [
        "An income tax calculator is one piece of the Australian pay puzzle. Add the 2% Medicare levy using a medicare levy calculator — especially if your income is near the $26,000 exemption threshold or you may qualify for a reduction. HECS/HELP repayments apply separately through a hecs calculator when repayment income exceeds $54,435. For complete take-home figures, a gross to net calculator or take-home pay calculator combines all components.",
        "If you are negotiating salary and think in after-tax terms, a net to gross calculator reverses the calculation. Bonus payments are taxed at your marginal rate — model them with a bonus tax calculator. Salary sacrifice into super reduces taxable income; a salary sacrifice calculator quantifies the tax saved. For super on top of salary at the 12% guarantee rate, see The super calculator above. Together these tools reflect how Australians actually experience tax — not as a single number, but as a stack of progressive charges on earned income.",
      ]
    ),
  ],
  [
    {
      question: "How much income tax do I pay on $80,000 in Australia?",
      answer:
        "On $80,000 taxable income in 2025–26, income tax is about $14,788. This comprises $4,288 on the first $45,000 (tax-free threshold plus 16% and 30% portions) and $10,500 on the $35,000 above $45,000 at 30%. Your effective income tax rate is about 18.5%. Medicare levy adds roughly $1,600, and HECS may apply separately if you have a HELP debt.",
    },
    {
      question: "What is the tax-free threshold in Australia for 2025–26?",
      answer:
        "The tax-free threshold is $18,200 per year. Australian residents pay no income tax on the first $18,200 of taxable income. The Low Income Tax Offset (LITO) of up to $700 further reduces tax for earners with taxable income below about $66,667. Claim the tax-free threshold from your primary employer via a Tax File Number declaration to avoid excess PAYG withholding.",
    },
    {
      question: "What is the difference between marginal and effective tax rate?",
      answer:
        "Your marginal rate is the tax rate on your last dollar of income — the top bracket you fall into. Your effective rate is total income tax divided by total taxable income, which is always lower than the marginal rate under a progressive system. On $80,000, the marginal rate is 30% but the effective income tax rate is about 18.5%.",
    },
    {
      question: "Did Stage 3 tax cuts affect the 2025–26 brackets?",
      answer:
        "Yes. Stage 3 cuts remain in effect for 2025–26. The rate on income between $18,201 and $45,000 is 16% (down from 19%), and the rate between $45,001 and $135,000 is 30% (down from 32.5%). Thresholds at $135,000, $190,000, and the 45% top rate are unchanged. Most workers earning between $45,000 and $135,000 save around $1,000–$4,000 per year compared to pre-Stage 3 scales.",
    },
    {
      question: "Is income tax the same as total tax on my pay slip?",
      answer:
        "No. PAYG withholding on your pay slip typically includes income tax, the 2% Medicare levy, and HECS repayments if applicable — all combined into a single withholding amount. An income tax calculator isolates only the income tax component. For total deductions and net pay, use a take-home pay calculator or gross to net calculator.",
    },
    {
      question: "How do deductions affect income tax calculations?",
      answer:
        "Taxable income equals gross income minus allowable deductions. Work-related expenses, charitable gifts, personal super contributions, and some investment losses reduce taxable income and so income tax. Enter your estimated taxable income (after deductions) into the calculator rather than gross salary if deductions are significant. Keep records to substantiate claims at tax time.",
    },
  ]
);
