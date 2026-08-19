import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "long-service-leave-calculator",
  "Long Service Leave in Australia (2025–26)",
  "Long service leave is one of the most valuable — and least understood — entitlements for Aussie workers. After years of continuous service with one employer, you may be entitled to extended paid leave that can be taken during employment or paid out when you leave. Rules vary significantly between states, territories, and industries, making it difficult to know what you are owed. Here's how long service leave accrues across Australia, how to calculate its dollar value, and how to use our long service leave calculator to estimate your entitlement based on years of service and salary.",
  [
    section(
      "What Is Long Service Leave?",
      [
        "Long service leave (LSL) is paid leave granted to employees after a long period of continuous employment with the same employer. Unlike annual leave, which accrues from your first year, long service leave typically requires five to ten years of continuous service before you can access it — though entitlements start accruing from day one in most jurisdictions. The leave is paid at your ordinary rate of pay and is designed to reward loyalty and provide extended rest after many years of service.",
        "LSL is governed by state and territory legislation, not the federal Fair Work Act (except for some national system employees covered by portable LSL schemes). Each state has different accrual rates, qualifying periods, and rules for casual and part-time workers. Some industries, such as building and construction, have portable long service leave schemes where entitlements follow workers between employers in the same industry. Our calculator provides a general estimate using a common accrual rate — always verify against your state law and employment contract.",
      ]
    ),
    section(
      "How Long Service Leave Accrues by State",
      [
        "In New South Wales and Victoria, employees accrue long service leave at about 1/60th of their period of service — equivalent to about 8.67 weeks after ten years, or roughly 0.867 weeks per year of service. After the initial qualifying period (10 years in NSW, 7 years in Victoria for taking leave), employees can access their accrued LSL. Queensland provides 8.667 weeks after 10 years. South Australia offers 13 weeks after 10 years and 1.3 weeks per year thereafter.",
        "Western Australia provides 8.667 weeks after 10 years under the state Long Service Leave Act. Tasmania grants 8.667 weeks after 10 years. The ACT and Northern Territory each have their own schemes with similar but not identical accrual rates. Because rules differ, two employees with identical salaries and years of service in different states may have different entitlements. Our calculator uses the 0.867 weeks per year rate as a representative estimate for NSW/VIC-style accrual.",
      ],
      {
        list: [
          "NSW: 2 months (8.67 weeks) after 10 years; accrues from start",
          "VIC: ~1 week per 60 weeks of service; accessible after 7 years",
          "QLD: 8.667 weeks after 10 years of continuous service",
          "SA: 13 weeks after 10 years; 1.3 weeks per additional year",
          "WA: 8.667 weeks after 10 years",
          "Portable schemes: Building/construction in some states",
        ],
      }
    ),
    section(
      "Calculating the Dollar Value of Long Service Leave",
      [
        "The dollar value of your long service leave depends on two factors: how many weeks you have accrued, and your ordinary weekly rate of pay. Weekly pay is typically your base salary divided by 52, or your average weekly earnings over a reference period if your pay varies. For a full-time employee on $85,000 per year, weekly pay is $1,634.62. With 12 years of service accruing at 0.867 weeks per year, accrued leave is about 10.4 weeks, valued at $17,000.",
        "Our long service leave calculator multiplies years of service by 0.867 to estimate accrued weeks, then multiplies by weekly pay to get the dollar value. It also converts weeks to approximate working days (weeks × 5). This gives you a ballpark figure for financial planning — whether you are considering taking leave, negotiating a payout on resignation, or comparing job offers. The actual entitlement may differ based on your state's formula, pro-rata rules, and whether you have taken any LSL during employment.",
      ]
    ),
    section(
      "When Can You Take or Cash Out Long Service Leave?",
      [
        "During employment, you can generally take long service leave after meeting the qualifying period — usually with your employer's agreement on timing. Employers can require reasonable notice and may refuse specific dates due to operational needs, but cannot refuse the entitlement itself once it has accrued. Some states allow taking LSL in smaller blocks after the qualifying period; others require a minimum continuous period.",
        "On termination, whether you receive a payout depends on the reason for leaving and your state's rules. In most states, if you resign after completing the qualifying period, you are entitled to a pro-rata payout of accrued LSL. If you are dismissed for serious misconduct, you may forfeit LSL. If you are made redundant, you are typically entitled to your full accrued LSL as a lump sum. Unused LSL is taxed as employment income — it is not tax-free like genuine redundancy payments.",
      ]
    ),
    section(
      "Step-by-Step: Using the Long Service Leave Calculator",
      [
        "Enter your annual gross salary based on ordinary time earnings. If your pay includes regular allowances that form part of your ordinary rate, include them. Exclude overtime and one-off bonuses unless they are consistently part of your weekly earnings. The calculator divides annual salary by 52 to determine weekly pay.",
        "Enter your years of continuous service with your current employer. The calculator estimates accrued leave at 0.867 weeks per year and calculates the total dollar value. Review the estimated weeks and days alongside the monetary figure. Cross-check the result against your state's long service leave legislation or your HR department for the authoritative entitlement. If you work part-time, enter your actual annual earnings — the calculator does not adjust for part-time fractions automatically.",
      ],
      {
        list: [
          "Step 1: Enter annual salary (ordinary time earnings)",
          "Step 2: Enter years of continuous service",
          "Step 3: Review estimated weeks and days of LSL accrued",
          "Step 4: Check the dollar value of your entitlement",
          "Step 5: Verify against your state legislation or HR records",
          "Step 6: Consider tax implications if expecting a payout",
        ],
      }
    ),
    section(
      "Worked Example: 10 Years on $78,000",
      [
        "A full-time employee in NSW has worked for the same employer for 10 years earning $78,000 per year. Weekly pay is $78,000 ÷ 52 = $1,500. Accrued long service leave at 0.867 weeks per year: 10 × 0.867 = 8.67 weeks. Dollar value: 8.67 × $1,500 = $13,005. This is about 43 working days of paid leave.",
        "If this employee resigns after 10 years, NSW law entitles them to take or be paid out their accrued LSL. The $13,005 payout is taxed as ordinary income — at a 30% marginal rate plus Medicare, roughly $4,000 in tax, leaving about $9,000 net. This is a significant sum that many employees forget to factor into their departure planning.",
      ]
    ),
    section(
      "Worked Example: 20 Years on $115,000",
      [
        "A long-serving public sector employee has 20 years of continuous service on $115,000 annual salary. Weekly pay is $2,211.54. Accrued leave: 20 × 0.867 = 17.34 weeks. Dollar value: 17.34 × $2,211.54 = $38,348. This represents roughly 87 working days — nearly four months of paid leave.",
        "If the employee takes this as leave rather than a payout, they continue receiving their normal pay during the leave period while not working. If they retire or resign, the lump sum payout of $38,348 is added to their taxable income for the year. Combined with final annual leave and other termination payments, the total tax impact can be substantial. Use our annual leave calculator and redundancy pay calculator alongside this tool for complete departure planning.",
      ]
    ),
    section(
      "Part-Time, Casual, and Portable Long Service Leave",
      [
        "Part-time employees accrue long service leave on a pro-rata basis in most states. If you work three days per week, you accrue LSL at the same rate per year of service but your weekly pay for LSL purposes reflects your part-time hours. A part-time employee on $45,000 over 10 years may have the same weeks accrued as a full-time colleague but at a lower weekly rate.",
        "Casual employees historically had limited LSL access, but several states have extended entitlements to long-term regular casuals. In the building and construction industry, portable long service leave schemes in NSW (BCLEP), Victoria (CoINVEST), and Queensland (QLeave) allow workers to accrue LSL across multiple employers in the industry. If you work in construction, check your portable scheme balance separately — our calculator does not model portable schemes.",
      ]
    ),
    section(
      "Tax on Long Service Leave Payouts",
      [
        "Long service leave paid out on termination is treated as employment income and taxed at your marginal rate. Unlike genuine redundancy payments, there is no tax-free component. If you receive a $30,000 LSL payout in the same year as $90,000 salary, your total taxable income is $120,000 and the LSL is taxed within that bracket. Your employer may withhold PAYG at a flat rate or use the marginal rate depending on the payment type.",
        "Taking LSL as leave during employment spreads the income across the leave period at your normal PAYG rate, which may be more tax-effective than a lump sum on termination that pushes you into a higher bracket. Some employees time their LSL to coincide with lower-income years or retirement. For precise tax planning, use our income tax calculator to model the impact of a LSL payout on your total annual tax.",
      ],
      {
        list: [
          "LSL payouts are taxed as ordinary employment income",
          "No tax-free component (unlike genuine redundancy)",
          "PAYG withholding applies at termination",
          "Taking leave during employment may spread tax more evenly",
          "Large payouts can push you into a higher marginal bracket",
        ],
      }
    ),
    section(
      "Common Mistakes and Related Entitlements",
      [
        "Employees often confuse long service leave with annual leave. Annual leave accrues at four weeks per year and is accessible after 12 months. LSL requires much longer service and provides a separate entitlement. Another mistake is assuming LSL rules are uniform nationally — always check your state. Some employees forget to claim portable LSL when changing employers within the construction industry.",
        "When leaving a job, total your long service leave, annual leave, and any redundancy entitlements for a complete picture. Use our sick leave calculator for personal leave balances and The pay calculator above for your ongoing salary needs. If you are considering a job change before reaching the qualifying period, calculate how close you are — leaving at nine years instead of ten could mean forfeiting a significant entitlement depending on your state's pro-rata rules.",
      ]
    ),
  ],
  [
    {
      question: "How much long service leave do I get after 10 years?",
      answer:
        "In most Australian states, employees accrue about 8.67 weeks (about two months) of long service leave after 10 years of continuous service. South Australia provides 13 weeks. The exact amount depends on your state or territory legislation and any applicable award or enterprise agreement. Our calculator uses 0.867 weeks per year as a general estimate.",
    },
    {
      question: "Can I cash out long service leave when I quit?",
      answer:
        "In most states, if you resign after completing the qualifying period (typically 7 to 10 years depending on the state), you are entitled to a pro-rata payout of accrued long service leave. If you leave before the qualifying period, you may receive nothing or a reduced pro-rata amount. Check your state's Long Service Leave Act for specific rules.",
    },
    {
      question: "Is long service leave paid out tax-free?",
      answer:
        "No. Long service leave payouts are taxed as ordinary employment income at your marginal tax rate. Unlike genuine redundancy payments, there is no tax-free component. Your employer will withhold PAYG tax on the payout. The tax treatment is similar to annual leave payouts.",
    },
    {
      question: "Do casual workers get long service leave?",
      answer:
        "Rules vary by state. Some states now extend long service leave to long-term regular casuals with a reasonable expectation of ongoing employment. Standard casual loading partly compensates for the lack of leave entitlements. In the building and construction industry, portable long service leave schemes apply regardless of employment type.",
    },
    {
      question: "Does long service leave accrue during parental leave?",
      answer:
        "In most states, approved parental leave counts as continuous service for long service leave accrual purposes. Unpaid leave periods may or may not count depending on the state and duration. Extended breaks in service can reset your continuous service clock in some jurisdictions. Confirm with your HR department or state legislation.",
    },
    {
      question: "Why does the calculator say my LSL varies by state?",
      answer:
        "Each Australian state and territory has its own Long Service Leave Act with different accrual rates, qualifying periods, and payout rules. Our calculator uses a commonly applied rate of 0.867 weeks per year (equivalent to the NSW/VIC accrual formula). For an exact figure, check your state authority or employment contract.",
    },
  ]
);
