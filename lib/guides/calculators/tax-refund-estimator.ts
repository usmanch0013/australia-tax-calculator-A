import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "tax-refund-estimator",
  "Tax Refund Estimator Australia: Will You Get a Refund in 2025–26?",
  "At tax time, millions of Australians discover whether they owe the ATO money or receive a refund. A tax refund occurs when the total tax withheld from your pay during the year (PAYG withholding) exceeds your actual tax liability after the ATO assesses your income, deductions, and offsets. Our tax refund estimator compares your taxable income against tax withheld to show whether you are likely to receive a refund or owe additional tax under 2025–26 rates. Enter your annual taxable income, total PAYG tax withheld, and whether you have HECS/HELP debt to see estimated income tax, Medicare levy, total liability, and the difference — your likely refund or amount owing.",
  [
    section("How Australian Tax Refunds Work", [
      "Australia uses a pay-as-you-go (PAYG) system where employers withhold tax from each payslip based on estimated annual income. At the end of the financial year (30 June), you lodge a tax return and the ATO calculates your actual tax liability based on total income, allowable deductions, tax offsets, and other factors. If total withholding exceeds your liability, you receive a refund. If you under-paid during the year, you owe the difference.",
      "Refunds are common when people have multiple deductions they did not claim through payroll — work-related expenses, charitable donations, income protection premiums, or the cost of managing tax affairs. Refunds also arise when too much tax was withheld due to claiming the tax-free threshold incorrectly across multiple jobs, working part of the year, or receiving a one-off payment taxed at a high marginal rate. Understanding the gap between withheld tax and actual liability is the key to estimating your refund.",
    ]),
    section("2025–26 Tax Rates and Your Liability", [
      "Your tax liability in 2025–26 depends on taxable income after deductions. The Stage 3 tax cuts set resident rates at 0% on income up to $18,200, 16% from $18,201 to $45,000, 30% from $45,001 to $135,000, 37% from $135,001 to $190,000, and 45% above $190,000. Most residents also pay the 2% Medicare levy on income above $26,000. Low Income Tax Offset (LITO) of up to $700 reduces tax for earners under $37,500 automatically.",
      "Our estimator calculates income tax and Medicare on your entered taxable income using these 2025–26 rates. HECS/HELP repayments add to total liability when repayment income exceeds $54,435 — scaling from 1% to 10% depending on income. Total tax liability is the sum of income tax, Medicare, and HECS. Compare this figure to your PAYG withholding to estimate refund or debt. The estimator does not include all offsets, levies, or deductions — actual returns may differ.",
    ], {
      list: [
        "Tax liability = income tax + Medicare levy + HECS (if applicable)",
        "Refund = PAYG withheld − total tax liability (if positive)",
        "Amount owing = total tax liability − PAYG withheld (if positive)",
        "Lodgement deadline: 31 October (or later with a tax agent)",
      ],
    }),
    section("Understanding PAYG Withholding", [
      "PAYG withholding is the tax your employer deducts from each payslip and sends to the ATO on your behalf. The amount withheld depends on your gross pay, whether you claimed the tax-free threshold, any Medicare levy variation, HECS debt notification, and payroll system settings. Withholding tables aim to spread your annual tax evenly across pay periods but cannot account for future deductions or second jobs.",
      "Find total PAYG withheld on your annual payment summary (formerly group certificate) from each employer, or sum year-to-date withholding from your final payslip before 30 June. If you had multiple employers, combine withholding from all payment summaries. Our estimator uses this total withheld figure as the amount already paid toward your annual liability. Self-employed individuals pay through quarterly PAYG instalments rather than employer withholding.",
    ]),
    section("Common Reasons for a Tax Refund", [
      "Work-related deductions are the most common refund driver. Deductible expenses include uniforms, tools, travel between work sites, home office costs, professional development, union fees, and income protection insurance. The ATO allows deductions for expenses incurred in earning assessable income that were not reimbursed by your employer. Total deductions reduce taxable income and lower your liability below what was withheld.",
      "Other refund causes include salary sacrifice into super (reducing taxable income below withholding assumptions), charitable donations above $2 to deductible gift recipients, tax offsets for private health insurance, the seniors and pensioners offset, and temporary budget repair levy adjustments from prior years. Starting a job mid-year, changing to part-time, or taking extended unpaid leave can also cause excess withholding relative to actual annual income.",
    ]),
    section("Common Reasons You May Owe Tax", [
      "Owing tax at year end usually means insufficient tax was withheld during the year. Common causes include claiming the tax-free threshold from multiple employers simultaneously, earning significant investment income (interest, dividends, capital gains) without withholding, side gig income not subject to PAYG, or receiving a lump sum taxed at default rates below your actual marginal rate.",
      "HECS/HELP debt not declared to employers causes under-withholding — your employer withholds based on income tax and Medicare but not study loan repayments unless you notify them. Second jobs without adjusted withholding settings are a frequent cause of tax bills. The Medicare Levy Surcharge applies to higher earners without private hospital cover above $93,000 singles income — this is not captured in standard PAYG withholding. Review withholding settings early in the financial year to avoid large debts.",
    ]),
    section("HECS and Tax Refunds", [
      "HECS/HELP repayments are calculated on repayment income, which includes taxable income plus reportable fringe benefits, net investment losses, and reportable super contributions. Compulsory repayments apply when repayment income exceeds $54,435 in 2025–26, at rates from 1% to 10%. If your employer withholds for HECS but your repayment income falls below the threshold, you may receive a refund of HECS amounts withheld.",
      "Conversely, if you have HECS debt but did not notify your employer, no HECS was withheld during the year. At tax time, the ATO adds compulsory repayments to your liability, potentially creating a debt even when income tax withholding was accurate. Toggle HECS in our estimator to see the impact. Voluntary HECS repayments above compulsory amounts do not generate refunds — they reduce your loan balance directly.",
    ]),
    section("Tax Offsets That Affect Your Refund", [
      "Tax offsets directly reduce tax payable rather than taxable income. The Low Income Tax Offset (LITO) up to $700 and Low and Middle Income Tax Offset (LMITO, where applicable) are applied automatically. The private health insurance tax offset rewards those with compliant hospital cover. Seniors and pensioners tax offset (SAPTO) benefits eligible retirees. Spouse super contributions and invalid carer offsets apply in specific circumstances.",
      "Our estimator applies standard resident tax calculation without most offsets beyond LITO embedded in ATO rates. If you qualify for SAPTO, private health offset, or zone offsets for remote area residents, your actual liability may be lower than our estimate — increasing your refund. Foreign residents, temporary residents, and working holiday makers use different tax rates and are not modelled by this estimator.",
    ]),
    section("Using the Tax Refund Estimator", [
      "Enter your total taxable income for the financial year — gross income minus allowable deductions. Enter total tax withheld (PAYG) from all employers and other sources shown on payment summaries. Enable HECS/HELP if you have a study loan. The calculator shows income tax, Medicare levy, optional HECS, total tax liability, tax withheld, and whether you are likely to receive a refund or owe money.",
      "Results are estimates based on 2025–26 resident rates without full offsets or deductions beyond the income figure you enter. For a precise refund estimate, include all deductions when calculating taxable income. Use our income tax, Medicare levy, and HECS calculators to explore individual components. Lodge through myGov or a registered tax agent for your official assessment.",
    ]),
    section("Lodging Your Tax Return", [
      "The standard deadline for self-lodgement is 31 October following the end of the financial year. Tax agents can lodge later under extended deadlines. Most employees with simple affairs can lodge online via myGov linked to the ATO — pre-filled data includes payment summaries, bank interest, and health insurance details. Review pre-filled information carefully before submitting.",
      "The ATO typically processes straightforward returns within two weeks and deposits refunds directly to nominated bank accounts. Debts must be paid by the due date on your notice of assessment — payment plans are available for those who cannot pay in full. Keep records of deductions for five years. If our estimator suggests a large refund or debt, consider consulting a tax agent before lodging to optimise deductions and avoid errors.",
    ]),
    section("Planning Ahead to Avoid Tax Debts", [
      "Proactive tax planning prevents surprise debts at year end. Claim the tax-free threshold from only one employer — usually your highest-paying job. Request a withholding variation from the ATO if you have significant deductions that reduce taxable income below payroll assumptions. Notify employers of HECS debt so repayments are withheld throughout the year.",
      "Self-employed workers should make quarterly PAYG instalments based on ATO estimates or voluntary calculations. Set aside 25–30% of gross income for tax if no withholding applies. Review investment income quarterly and consider PAYG instalments on interest and dividends. Use this estimator mid-year with year-to-date figures to project your likely position before 30 June and adjust withholding or instalments accordingly.",
      "Salary packaging and fringe benefits can also shift your final position. Reportable fringe benefits increase HECS repayment income even though they are not cash in your pocket. Conversely, salary sacrifice into super reduces taxable income and may increase refunds if payroll withholding was not adjusted downward. Review your payment summary each May and run updated estimates before the lodgement window opens so you can lodge early if a refund is expected or set aside funds if a debt is likely.",
    ]),
  ],
  [
    {
      question: "How do I know if I will get a tax refund?",
      answer:
        "Compare total tax withheld during the year (from payment summaries) against your actual tax liability. If withholding exceeds liability after income tax, Medicare, and HECS, you receive a refund. Our estimator calculates this difference automatically. Common refund triggers include work deductions, salary sacrifice, and excess withholding from multiple jobs.",
    },
    {
      question: "How long does a tax refund take in Australia?",
      answer:
        "The ATO typically processes straightforward online returns within two weeks. Most refunds are deposited directly to your nominated bank account. Complex returns, amended returns, or those flagged for review may take longer. Lodging through a tax agent before the 31 October deadline can extend your lodgement date.",
    },
    {
      question: "Why do I owe tax when my employer withheld PAYG?",
      answer:
        "Common causes include claiming the tax-free threshold from multiple jobs, undeclared HECS debt, side income without withholding, investment income, or insufficient PAYG instalments for self-employment. Your employer withholds based on payroll settings that may not reflect your total annual tax position across all income sources.",
    },
    {
      question: "Does the tax refund estimator include deductions?",
      answer:
        "Enter your taxable income after deductions, not gross salary. If you earned $90,000 gross with $5,000 in work-related deductions, enter $85,000 as taxable income. The estimator does not calculate deductions separately — it applies tax rates to the income figure you provide.",
    },
    {
      question: "What is the Medicare levy in 2025–26?",
      answer:
        "The Medicare levy is 2% of taxable income for most Australian residents earning above $26,000. It is included in our total tax liability calculation. Low-income earners may be exempt or pay a reduced levy. Higher earners without private hospital cover may also pay the Medicare Levy Surcharge, which is not included in this estimator.",
    },
    {
      question: "Can I get a refund if I have a HECS debt?",
      answer:
        "Yes, if total withholding exceeds your complete liability including HECS repayments. If your employer withheld for HECS but your repayment income fell below the $54,435 threshold, HECS amounts withheld are refunded. If HECS was not withheld but your income exceeds the threshold, compulsory repayments increase your liability and may reduce or eliminate a refund.",
    },
  ]
);
