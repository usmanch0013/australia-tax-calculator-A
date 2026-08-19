import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "net-to-gross-calculator",
  "Net to Gross Salary Calculator Australia: Guide",
  "A net to gross calculator works backwards from the take-home pay you actually need in your bank account to the gross salary you must earn before tax. That reverse calculation is harder than it looks because income tax is progressive, the Medicare levy adds 2% on most incomes, and HECS repayments may apply on top. If you're negotiating a job offer, planning a household budget, or comparing contract rates, knowing the gross figure behind your target net pay stops you from undershooting your ask. Here's how reverse salary calculations work under 2025–26 ATO rules, walks through real dollar examples, and shows when to use a net to gross calculator alongside our gross to net calculator for a full picture of Australian pay.",
  [
    section(
      "What Is a Net to Gross Calculator?",
      [
        "A net to gross calculator — sometimes called a reverse salary calculator — answers a simple but important question: if I need a certain amount of take-home pay, what gross salary must I earn? Standard pay calculators start with your headline salary and subtract tax. A reverse calculator flips that process. You enter your desired net income and the tool estimates the gross amount required after accounting for income tax, the Medicare levy, and optional HECS/HELP repayments.",
        "This matters because most Australians think in terms of what lands in their account each fortnight, not the pre-tax figure on a contract or job ad. A worker who needs $5,000 per month after tax cannot simply multiply that figure by twelve and call it their salary requirement. Tax is not a flat percentage — it rises in steps as income increases. Someone targeting $60,000 net might need a gross salary closer to $75,000 or higher depending on HECS status and other deductions. The net to gross calculator removes that guesswork using current ATO brackets for the 2025–26 financial year.",
      ]
    ),
    section(
      "How Reverse Salary Calculations Work in Australia",
      [
        "Australian take-home pay is gross income minus PAYG income tax, minus the 2% Medicare levy for most residents, minus any compulsory HECS/HELP repayment if your repayment income exceeds the threshold (about $54,435 in 2025–26). Because each of these components scales differently with income, there is no single multiplier you can apply to convert net to gross. Instead, the calculator uses an iterative approach: it tests different gross amounts until the resulting net pay matches your target.",
        "Under the 2025–26 tax scales — which include the Stage 3 tax cuts — income between $18,201 and $45,000 is taxed at 16%, income between $45,001 and $135,000 at 30%, and higher brackets apply at 37% and 45%. The Medicare levy is generally 2% of taxable income once you exceed the low-income threshold of around $26,000. HECS repayments use a separate graduated scale from 1% up to 10% of repayment income. Each layer pushes the required gross figure higher, which is why a quick mental estimate often falls short.",
      ],
      {
        list: [
          "Income tax: progressive brackets from 0% to 45%",
          "Medicare levy: 2% for most residents above $26,000",
          "HECS/HELP: 1%–10% of repayment income above $54,435",
          "Superannuation: 12% employer contribution (usually not deducted from take-home pay)",
        ],
      }
    ),
    section(
      "When Should You Use a Net to Gross Calculator?",
      [
        "The most common scenario is salary negotiation. If you know you need $70,000 take-home to cover rent, mortgage repayments, childcare, and living costs, quoting that net figure to a recruiter is meaningless — employers quote and budget in gross terms. Converting your net requirement to gross gives you a clear minimum to negotiate from, with room to account for benefits like salary sacrifice or additional super.",
        "Net to gross calculations are also valuable when comparing job offers with different structures. One role might offer $95,000 plus super; another might offer $88,000 with a company car novated lease that reduces taxable income. A contractor deciding their day rate needs to work backwards from desired annual net income, factoring in unpaid leave and business expenses. Migrants comparing Australian salaries to after-tax income in their home country benefit from understanding the gross equivalent. Anyone with a HECS debt should toggle repayments on, because the extra withholding can add several thousand dollars to the gross salary required for the same net outcome.",
      ]
    ),
    section(
      "Step-by-Step: Using the Net to Gross Calculator",
      [
        "Start by deciding your target take-home amount and whether you want annual, monthly, or weekly figures. Enter the annual net figure for the most accurate result — the calculator will show equivalent pay periods. Next, indicate whether you have an outstanding HECS/HELP debt. If repayments apply, your required gross salary will be materially higher because the ATO withholds repayments through the same PAYG system as income tax.",
        "Review the breakdown the calculator provides: required gross salary, income tax, Medicare levy, HECS if applicable, and total tax. Compare the actual take-home against your target to confirm the figures align. If you are planning a salary sacrifice into super, remember that reduces taxable income and may lower the gross needed for the same net — though super itself is not part of take-home pay. For a forward check, run the resulting gross figure through a gross to net calculator to verify both directions match.",
      ],
      {
        list: [
          "Enter your target annual take-home (net) pay",
          "Select whether HECS/HELP repayments apply",
          "Review the required gross salary and tax breakdown",
          "Cross-check using a gross to net calculator",
          "Adjust for salary sacrifice or multiple income sources if relevant",
        ],
      }
    ),
    section(
      "Worked Example: Targeting $60,000 Take-Home Pay",
      [
        "Suppose you need $60,000 per year in your bank account after all PAYG withholding — roughly $5,000 per month or $2,308 per fortnight. Without a HECS debt, the net to gross calculator estimates you need a gross salary of about $74,800. On that income, income tax under 2025–26 brackets comes to around $13,228, the Medicare levy adds roughly $1,496, and total tax is about $14,724. Subtracting that from $74,800 leaves about $60,076 in take-home pay.",
        "Now add a HECS debt. The same $60,000 net target might require a gross salary closer to $78,500 or more, because HECS repayments at the applicable rate are withheld on top of income tax and Medicare. At a repayment income in the mid-range brackets, an extra 4–5% of income goes to HELP repayments. The gap between gross and net widens further at higher income levels. Someone targeting $100,000 net without HECS might need gross income above $145,000, reflecting the 37% marginal rate and 2% Medicare on income above $135,000.",
      ]
    ),
    section(
      "2025–26 Tax Context and Stage 3 Cuts",
      [
        "The 2025–26 financial year continues the Stage 3 personal income tax cuts that took effect from 1 July 2024. The key change for most workers is the 16% rate on income between $18,201 and $45,000 (reduced from 19%) and the 30% rate on income between $45,001 and $135,000 (reduced from 32.5%). These lower rates mean you need slightly less gross income to achieve the same net pay compared to pre-Stage 3 scales — a useful point when comparing old salary guides or overseas advice.",
        "The tax-free threshold remains at $18,200, meaning no income tax on the first $18,200 of taxable income. The Low Income Tax Offset (LITO) of up to $700 further reduces tax for earners under about $66,667, though our calculator focuses on standard PAYG scenarios. The superannuation guarantee increased to 12% from 1 July 2025, but employer super is typically paid on top of your salary and does not reduce take-home pay unless your contract specifies a total package inclusive of super.",
      ]
    ),
    section(
      "Common Mistakes When Converting Net to Gross",
      [
        "The biggest error is using a flat tax rate. Many people assume they lose about 30% to tax and multiply their net target by 1.43 to get gross. That approximation breaks down quickly because tax is progressive — your effective rate is lower than your marginal rate on moderate incomes, but the marginal rate jumps at each bracket boundary. Underestimating the gross needed for a target net is a frequent cause of budget shortfalls after starting a new job.",
        "Other common mistakes include forgetting HECS repayments, ignoring the Medicare levy, confusing gross package with base salary when super is included, and not accounting for multiple jobs. If you work two part-time roles and claim the tax-free threshold on both, you may under-withhold during the year and owe tax at lodgement — which effectively reduces your real take-home. Treating bonus payments as if they are taxed at a separate flat rate is another pitfall; bonuses are taxed at your marginal rate when annualised, which a bonus tax calculator can illustrate.",
      ]
    ),
    section(
      "Who Benefits Most from a Reverse Salary Calculator?",
      [
        "Employees entering salary negotiations gain the clearest benefit. Armed with a gross figure derived from a real net need, you can respond confidently when an employer asks about salary expectations. Contractors and freelancers use net to gross logic to set minimum viable rates. Financial planners helping clients with affordability assessments — how much mortgage can I service on my required net income — rely on accurate gross equivalents.",
        "HR professionals benchmarking roles against market data often work in gross terms while candidates think in net. Bridging that gap reduces mismatched expectations. Australians returning from working overseas frequently underestimate how much gross income translates to spending money after tax. Students about to graduate with HECS debts should run scenarios with repayments enabled to avoid surprise deductions on their first full-time pay slip.",
      ]
    ),
    section(
      "Related Scenarios and Tools",
      [
        "A net to gross calculation pairs naturally with a gross to net calculator for bidirectional checking. If you are comparing hourly versus salaried roles, convert your required gross to an hourly rate using a salary to hourly calculator based on your expected hours per week. Pay rise negotiations benefit from seeing how much extra gross is needed for each additional $1,000 of net — the relationship is not linear because of bracket jumps.",
        "For bonus or commission income, remember that extra payments are taxed at your marginal rate when your employer annualises withholding. A bonus tax calculator shows how much of a performance payment you keep. If you salary sacrifice into super, a salary sacrifice calculator estimates tax saved and the lower gross needed for similar net outcomes. Medicare levy exemptions and reductions for low-income earners are covered in our medicare levy calculator. Together, these tools build a complete picture of Australian pay beyond a single headline figure.",
      ]
    ),
  ],
  [
    {
      question: "How do I calculate gross salary from net pay in Australia?",
      answer:
        "Because Australian tax is progressive, you cannot use a simple formula. Enter your target net annual pay into a net to gross calculator, indicate whether HECS applies, and the tool iterates through gross amounts using 2025–26 ATO tax brackets, the 2% Medicare levy, and HELP repayment rates until the net matches your target. As a rough guide only, $60,000 net typically requires around $74,000–$78,000 gross depending on HECS status.",
    },
    {
      question: "Does superannuation affect net to gross calculations?",
      answer:
        "Employer super contributions at the 12% super guarantee rate are usually paid on top of your salary and do not reduce your take-home pay. They are generally not part of a net to gross calculation unless you salary sacrifice additional amounts into super, which reduces taxable income and can lower the gross needed for the same net. Always check whether a job offer quotes base salary or total package inclusive of super.",
    },
    {
      question: "Why is the gross salary higher than I expected for my target net pay?",
      answer:
        "Progressive tax means higher earners lose a larger share of each extra dollar to tax. Income tax, the 2% Medicare levy, and HECS repayments (if applicable) all stack on top of each other. At incomes above $45,000 the marginal rate is 30% plus 2% Medicare, and with HECS another 1–10% may apply — so well over one-third of additional gross can disappear before it reaches your account.",
    },
    {
      question: "Should I include HECS in my net to gross calculation?",
      answer:
        "Yes, if you have an outstanding HELP debt and your income will exceed the repayment threshold of about $54,435 in 2025–26. HECS repayments are compulsory and withheld through PAYG alongside income tax. Omitting them will underestimate the gross salary you need and overstate your likely take-home pay.",
    },
    {
      question: "Is net to gross the same as adding 30% tax?",
      answer:
        "No. Adding a flat 30% is inaccurate because the first $18,200 is tax-free, the 16% and 30% brackets apply at lower incomes, and Medicare and HECS are calculated separately. Your effective tax rate on moderate incomes may be around 20–25%, but the marginal rate on income above $45,000 is 30% plus 2% Medicare — and higher still in upper brackets.",
    },
    {
      question: "Can I use net to gross for weekly or fortnightly pay targets?",
      answer:
        "Yes. Enter your target as an annual net figure for best accuracy — multiply weekly net by 52 or fortnightly net by 26. The calculator shows the required gross annually; divide by 52 or 26 for pay-period equivalents. Remember that actual pay slips may vary slightly due to rounding and timing of bonuses or leave.",
    },
  ]
);
