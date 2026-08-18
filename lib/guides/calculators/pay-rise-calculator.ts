import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "pay-rise-calculator",
  "Pay Rises and After-Tax Salary Increases in Australia",
  "A pay rise feels straightforward until you see your first payslip and wonder where the extra money went. Your gross salary increase is not the same as your take-home increase — income tax, the Medicare levy, and HECS/HELP repayments all scale with your earnings. Whether you have been offered a 3% annual adjustment, a promotion bump, or a new role at a higher salary, understanding the after-tax impact helps you budget realistically and negotiate with confidence. Here's how pay rises work under 2025–26 ATO rules, including Stage 3 tax cuts, and shows you how to use our pay rise calculator to compare your current and new take-home pay in seconds.",
  [
    section(
      "What Is a Pay Rise Calculator?",
      [
        "A pay rise calculator estimates how much extra money you will actually receive in your bank account after a salary increase. You enter your current gross annual salary, the percentage or dollar increase, and optionally whether you have a HECS/HELP debt. The tool applies Australian income tax brackets for 2025–26, the 2% Medicare levy, and graduated HECS repayment rates to show your before-and-after take-home pay, the tax charged on the increase itself, and what percentage of the gross rise you keep.",
        "Unlike a simple percentage calculator that multiplies your salary by 1.05, a proper pay rise calculator accounts for progressive taxation. As your income rises, you may move into a higher marginal tax bracket, meaning a larger share of the increase goes to the ATO. For someone earning $90,000 who receives a 5% rise to $94,500, the extra $4,500 gross might only translate to around $2,800–$3,100 net depending on HECS status — a meaningful difference when planning mortgage repayments or household budgets.",
      ]
    ),
    section(
      "How Australian Tax Affects Your Pay Rise",
      [
        "Australia uses a progressive income tax system. For the 2025–26 financial year, the Stage 3 tax cuts mean most workers pay 16% on income between $18,201 and $45,000, 30% between $45,001 and $135,000, 37% between $135,001 and $190,000, and 45% above $190,001. The Medicare levy of 2% applies on most taxable income above $26,000. When your pay rise pushes you across a bracket boundary, only the income above that threshold is taxed at the higher rate — not your entire salary.",
        "HECS/HELP repayments add another layer. If your repayment income exceeds $54,435, the ATO applies a graduated repayment rate from 1% up to 10% of your income. A pay rise that crosses a HECS threshold can increase your effective marginal rate significantly. For example, moving from $62,000 to $68,000 might trigger a jump from 2% to 2.5% HECS repayment on your entire repayment income, not just the amount above the threshold. Our calculator factors this in when you toggle the HECS option.",
      ],
      {
        list: [
          "0% tax on the first $18,200 of taxable income",
          "16% marginal rate from $18,201 to $45,000 (Stage 3 cut)",
          "30% marginal rate from $45,001 to $135,000",
          "37% marginal rate from $135,001 to $190,000",
          "45% marginal rate above $190,001",
          "2% Medicare levy on income above $26,000",
          "HECS repayments from 1% to 10% above $54,435 repayment income",
        ],
      }
    ),
    section(
      "When to Use a Pay Rise Calculator",
      [
        "Use a pay rise calculator whenever you need to know the real dollar impact of a salary change, not just the headline percentage. Common scenarios include annual performance reviews, CPI-linked wage adjustments, job offer comparisons, internal promotions, and enterprise agreement outcomes. If your employer quotes a 4% increase on a $110,000 base, the calculator shows whether that delivers roughly $176 extra per fortnight or closer to $140 after tax.",
        "It is also valuable when negotiating. Knowing your after-tax position lets you counter-offer intelligently — perhaps requesting a slightly higher gross figure to reach a target net income, or weighing a pay rise against improved super contributions, additional leave, or flexible working arrangements. Contractors comparing permanent roles at lower gross but with leave and super entitlements can use the calculator alongside our gross to net calculator and super calculator to compare total packages fairly.",
      ]
    ),
    section(
      "Step-by-Step: How to Calculate Your Pay Rise After Tax",
      [
        "Start with your current gross annual salary as shown on your employment contract or most recent payment summary. Include only your base salary unless the rise applies to your entire remuneration package. If you receive regular allowances taxed as salary, include them; exclude one-off bonuses unless they are part of the new ongoing rate. Enter this figure into the current salary field.",
        "Enter the pay rise as a percentage. A $5,000 increase on $100,000 equals 5%. If you were given a dollar figure, divide the increase by your current salary and multiply by 100. Toggle HECS if you have an outstanding study loan and expect repayments to apply this financial year. The calculator computes your new gross salary, total tax before and after, net take-home pay, the tax specifically attributable to the increase, and the percentage of the gross rise you retain. Compare weekly or fortnightly figures by dividing annual net increase by 52 or 26.",
      ],
      {
        list: [
          "Step 1: Confirm your current gross annual salary",
          "Step 2: Convert a dollar rise to a percentage if needed",
          "Step 3: Enable HECS if you have a HELP debt",
          "Step 4: Review gross increase vs net increase",
          "Step 5: Check the 'You Keep' percentage for quick context",
          "Step 6: Divide annual net increase by pay frequency for budgeting",
        ],
      }
    ),
    section(
      "Worked Example: 5% Rise on $85,000",
      [
        "Consider an employee earning $85,000 gross with no HECS debt. A 5% pay rise brings their salary to $89,250 — an increase of $4,250. Under 2025–26 tax rates, their current total tax (income tax plus Medicare) is approximately $18,967, leaving a take-home of about $66,033. After the rise, total tax increases to roughly $20,347, giving a new take-home of approximately $68,903.",
        "The net increase is around $2,870 per year, or about $110 per fortnight. Of the $4,250 gross rise, the employee keeps roughly 67.5%. The remaining 32.5% goes to income tax and Medicare. If this employee had HECS, the effective retention rate would be lower because repayment income also rises. At $89,250, the HECS rate is 2.5%, adding approximately $2,231 in annual repayments compared to 2% at $85,000 — an extra $446 per year beyond the tax already calculated on the rise.",
      ]
    ),
    section(
      "Worked Example: Crossing a Tax Bracket",
      [
        "Bracket creep matters more when your rise pushes you into a higher marginal rate. An employee on $132,000 receiving a 6% increase moves to $139,920 — crossing the $135,000 threshold into the 37% bracket. Their marginal rate on the portion above $135,000 is 37% plus 2% Medicare, meaning 39% on each dollar in that band before considering HECS.",
        "In this scenario, the gross increase is $7,920. After tax and Medicare, the net increase might be around $4,850–$5,100 depending on exact calculations, meaning the employee keeps roughly 61–64% of the rise. This is noticeably less than someone staying entirely within the 30% bracket. Understanding this helps set realistic expectations — a 6% gross rise does not mean 6% more spending money. Use our income tax calculator to explore marginal rates at different income levels.",
      ]
    ),
    section(
      "Pay Rise vs CPI and Cost of Living",
      [
        "Many Australian employers link annual reviews to CPI or a fixed percentage such as 3%. In 2025–26, if CPI runs at 3% and you receive a 3% pay rise, your after-tax increase is slightly less than 3% in real take-home terms because tax scales with income. On $75,000, a 3% rise ($2,250 gross) might deliver around $1,500–$1,600 net — roughly 2% more in your pocket. Whether that keeps pace with living costs depends on your household expenses, rent or mortgage changes, and utility prices.",
        "If your rise is below CPI, you are effectively taking a real pay cut despite a higher nominal salary. Running the numbers through a pay rise calculator makes this visible. Some workers negotiate for a higher gross increase to achieve a target net amount — our net to gross calculator can work backwards from a desired take-home figure if you want to know what salary to request.",
      ]
    ),
    section(
      "Common Mistakes When Estimating Pay Rises",
      [
        "The most frequent mistake is assuming the rise percentage equals the take-home percentage. A 10% gross rise never delivers 10% more net pay unless you pay zero tax, which is virtually impossible for Australian salary earners above the tax-free threshold. Another error is forgetting HECS — employees who crossed the $54,435 threshold mid-year may be surprised by higher PAYG withholding after a rise.",
        "People also confuse gross package with base salary when super is included. If your $100,000 package includes 12% super ($10,714 super, $89,286 base), a 5% rise on the package differs from 5% on base alone. Always clarify whether the increase applies to base salary, total remuneration, or a specific component. Finally, remember that our calculator provides estimates based on standard tax rules — actual PAYG withholding may differ slightly due to rounding, Medicare levy surcharge, private health insurance rebates, or other adjustments on your tax return.",
      ],
      {
        list: [
          "Assuming gross rise % equals net rise %",
          "Ignoring HECS repayment threshold jumps",
          "Mixing up base salary and total package including super",
          "Forgetting that only income above bracket thresholds is taxed at the higher rate",
          "Not accounting for increased PAYG withholding on the first payslip",
        ],
      }
    ),
    section(
      "Who Benefits Most from Checking Their Pay Rise After Tax?",
      [
        "Mid-to-high income earners between $90,000 and $180,000 see the most dramatic difference between gross and net rises because marginal rates of 30% to 37% plus Medicare and potential HECS combine to take 35–42% of each extra dollar. Young professionals with HECS debts in the $60,000–$100,000 range should always model HECS impact, as threshold crossings can cost hundreds extra per year.",
        "Anyone making major financial decisions based on a new salary — signing a lease, increasing mortgage repayments, or planning childcare — should calculate after-tax figures first. HR professionals and managers can also use the calculator to explain to employees why a 4% rise translates to a specific fortnightly amount, improving transparency during review conversations. Pair this tool with our take-home pay calculator for a full picture of your ongoing budget.",
      ]
    ),
    section(
      "Related Scenarios and Tools",
      [
        "A pay rise is one part of your total compensation. If your employer offers salary sacrifice to super instead of a cash rise, the tax outcome differs — concessional contributions are taxed at 15% in the fund rather than your marginal rate. Use our salary sacrifice calculator to compare. Similarly, a bonus taxed in the year received may have a different effective rate than a permanent rise — see our bonus tax calculator for one-off payments.",
        "For a complete picture of your new financial position, run your updated salary through The pay calculator above or gross to net calculator. Check whether the rise affects your HECS repayment tier with The HECS calculator above. If you are comparing a new job offer, factor in employer super at the 12% guarantee rate using The super calculator above. Together, these tools help you understand not just what you earn, but what you keep.",
      ]
    ),
  ],
  [
    {
      question: "If I get a 5% pay rise, will my take-home pay also go up by 5%?",
      answer:
        "No. Because Australia has progressive income tax, you keep less than the full percentage of a gross pay rise. On a typical salary between $60,000 and $120,000, you might retain roughly 65–72% of the gross increase after income tax and Medicare. With HECS, the retention rate can be lower. Use our pay rise calculator with your exact salary for an accurate figure.",
    },
    {
      question: "Does a pay rise push all my income into a higher tax bracket?",
      answer:
        "No. Only the income above each bracket threshold is taxed at the higher rate. For example, if a rise takes you from $130,000 to $138,000, only the $3,000 above $135,000 is taxed at 37% — the portion below remains at 30%. This is a common misconception that leads people to overestimate how much tax they will pay on a rise.",
    },
    {
      question: "Will my employer withhold more tax after a pay rise?",
      answer:
        "Yes. PAYG withholding tables are based on your estimated annual income. When your salary increases, your employer recalculates withholding on each payslip. You may notice a larger tax deduction immediately, even if your rise is backdated — the ATO may recover under-withheld tax across fewer remaining pay periods in the financial year.",
    },
    {
      question: "Should I include HECS when calculating my pay rise?",
      answer:
        "Yes, if you have an outstanding HELP debt and your repayment income is above $54,435. HECS repayments are calculated on your total repayment income, so a pay rise can increase your repayment rate if you cross a threshold. Toggling HECS in our calculator gives a more realistic after-tax result.",
    },
    {
      question: "How does a pay rise affect my super contributions?",
      answer:
        "Employer super guarantee is currently 12% of ordinary time earnings. If your pay rise increases your base salary, your employer super contribution should also increase proportionally — unless your salary is already at the concessional contributions cap or your contract specifies a fixed super amount. The rise itself is not directly taxed for super; employer contributions are taxed at 15% in the fund.",
    },
    {
      question: "Is the pay rise calculator accurate for contractors?",
      answer:
        "The calculator is designed for employees paid through PAYG withholding. Contractors who invoice as sole traders or through a company face different tax obligations including GST, quarterly BAS payments, and business deductions. For contractors comparing a permanent role with a pay rise equivalent, use our contract day rate calculator alongside this tool for a broader comparison.",
    },
  ]
);
