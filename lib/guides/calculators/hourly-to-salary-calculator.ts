import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "hourly-to-salary-calculator",
  "Hourly to Salary Calculator Australia: Guide",
  "Converting an hourly wage to an annual salary is one of the most common calculations Aussie workers need — whether you are comparing a casual role to a permanent position, evaluating a job offer quoted in hourly terms, or planning your finances around shift work. Our hourly to salary calculator multiplies your hourly rate by your weekly hours and 52 weeks to produce gross annual, monthly, weekly, and daily figures, then estimates your net pay after 2025–26 income tax, the 2% Medicare levy, and optional HECS repayments. With Stage 3 tax cuts in effect and the superannuation guarantee at 12%, understanding the full annual value of an hourly rate is essential for fair pay comparisons across employment types in Australia.",
  [
    section(
      "What Is an Hourly to Salary Conversion?",
      [
        "An hourly to salary conversion calculates your annual earnings based on your hourly pay rate and the number of hours you work each week. The standard formula is hourly rate multiplied by hours per week multiplied by 52 weeks. For example, $35 per hour at 38 hours per week equals $69,160 gross per year. This conversion is essential in Australia because different employment types quote pay differently — permanent roles use annual salaries, while casual and some part-time roles quote hourly rates.",
        "The conversion produces gross figures before tax. To understand your true earning capacity, you must also account for income tax under 2025–26 ATO brackets, the 2% Medicare levy, and any HECS repayments. Casual workers receiving a 25% casual loading should include that loading in their hourly rate for an accurate annual figure, as the loading compensates for the lack of paid leave entitlements and is fully taxable income.",
      ],
      {
        list: [
          "Formula: hourly rate × hours per week × 52 = annual gross",
          "Standard full-time week: 38 hours in Australia",
          "Casual loading: add 25% to base hourly rate",
          "Gross annual: before tax, Medicare, and HECS",
        ],
      }
    ),
    section(
      "How the Hourly to Salary Calculator Works",
      [
        "Enter your hourly pay rate and the number of hours you work per week. The calculator defaults to 38 hours — the standard full-time working week under the Fair Work Act — but you can adjust this for part-time, compressed, or extended hours. It multiplies your rate by weekly hours by 52 to produce your gross annual salary, then derives monthly, weekly, and daily equivalents.",
        "Next, the calculator applies 2025–26 income tax brackets including Stage 3 tax cuts, the 2% Medicare levy on income above $26,000, and optional HECS repayments at current ATO thresholds. The result shows both gross and estimated net annual pay, so you can compare an hourly role's true value against a salaried position. Employer superannuation at 12% is displayed separately as it is paid on top of your gross earnings into your super fund.",
      ]
    ),
    section(
      "When to Use an Hourly to Salary Calculator",
      [
        "Use this calculator whenever you need to compare hourly and salaried roles on equal terms. A job offering $42 per hour sounds different from one offering $83,000 per year, but they may represent similar gross packages at 38 hours per week. Converting hourly rates to annual figures removes ambiguity and lets you evaluate total compensation fairly. This is particularly important when weighing casual work with 25% loading against permanent employment with leave entitlements.",
        "The calculator is also essential for award-covered workers, hospitality staff, retail employees, and tradespeople who are typically paid hourly. If you are negotiating a pay rise quoted in cents per hour, converting the increase to an annual figure shows the real dollar impact on your yearly earnings. Students working part-time can annualise their income to check HECS repayment thresholds and estimate tax obligations at year end.",
      ],
      {
        list: [
          "Comparing hourly casual roles to salaried permanent jobs",
          "Evaluating job offers quoted in hourly terms",
          "Annualising part-time or casual income for tax planning",
          "Negotiating hourly rate increases",
          "Budgeting based on variable hours or shift work",
        ],
      }
    ),
    section(
      "Step-by-Step: Convert Hourly Rate to Annual Salary",
      [
        "Step one: determine your gross hourly rate. For casual employees, include the 25% casual loading in the rate shown on your payslip or contract. For example, if the award rate is $30 per hour, your casual rate is $37.50 per hour. Step two: enter your weekly hours. Full-time is 38 hours; part-time might be 20, 24, or 30 hours depending on your arrangement.",
        "Step three: review the gross annual, monthly, weekly, and daily figures. Step four: check the estimated net pay after tax, Medicare, and HECS to see your true take-home annual income. Step five: compare the net figure against salaried roles using The pay calculator above or take-home pay calculator. If you want to work backwards from a target annual salary to find the required hourly rate, use our salary to hourly calculator instead.",
      ]
    ),
    section(
      "Worked Example: $40/Hour at 38 Hours Per Week",
      [
        "At $40 per hour working 38 hours per week, gross annual pay is $40 × 38 × 52 = $78,880. Breaking this down: monthly gross is about $6,573, weekly gross is $1,517, and daily gross (based on a 7.6-hour day) is about $304. Under 2025–26 tax brackets, income tax on $78,880 is roughly $15,028, plus $1,578 Medicare levy, totalling $16,606 in deductions.",
        "Estimated net annual pay is about $62,274, or about $1,197 per week take-home. Employer super at 12% adds $9,466 per year into super on top of cash pay. For a casual worker on the same base rate with 25% loading ($50 per hour), gross annual rises to $98,800, with estimated net pay around $71,500 after tax — but without paid annual leave, sick leave, or public holiday entitlements that permanent employees receive.",
      ]
    ),
    section(
      "Tax Implications of Hourly Income in 2025–26",
      [
        "Hourly income is taxed at the same rates as salaried income under Australia's tiered tax system. The 2025–26 brackets — including Stage 3 cuts with 16% and 30% marginal rates — apply regardless of whether you are paid hourly or annually. Your employer withholds PAYG tax each pay cycle based on your gross earnings for that period, and the total annual tax is reconciled when you lodge your tax return.",
        "Casual loading of 25% is fully taxable, which pushes casual workers into higher effective tax brackets faster than permanent employees on the same base rate. HECS repayments apply to your total repayment income, including casual earnings. If your annualised hourly income exceeds $54,435, compulsory HECS deductions begin. The Medicare levy at 2% applies once taxable income exceeds $26,000. Our calculator factors in all of these elements for an accurate net pay estimate.",
      ],
      {
        list: [
          "Same tax brackets apply to hourly and salaried workers",
          "Casual loading is taxable at your marginal rate",
          "PAYG withheld each pay cycle based on period earnings",
          "Annual tax reconciled at lodgement via tax return",
          "HECS repayments based on total annual repayment income",
        ],
      }
    ),
    section(
      "Common Mistakes Converting Hourly to Salary",
      [
        "The biggest mistake is using 40 hours per week instead of the Australian standard of 38 hours for full-time comparisons. This inflates the annual figure by over 5%, making hourly roles appear better paid than they are. Another error is forgetting to include casual loading when calculating casual hourly rates, or double-counting loading that is already embedded in the quoted rate on your payslip.",
        "Workers also frequently compare gross annual conversions without accounting for tax differences at their income level. A $45 per hour casual rate and a $90,000 salary are not equivalent once tax, leave entitlements, and super are considered. Casual workers lack paid leave worth roughly four weeks per year plus sick leave, which permanent salaried employees receive on top of their base pay. Always compare net pay and total package value, not just gross annual figures.",
      ]
    ),
    section(
      "Who Benefits Most from Hourly to Salary Conversion?",
      [
        "Casual and part-time workers benefit most, as their pay is naturally quoted in hourly terms and must be annualised for meaningful comparison with salaried roles. Tradespeople, hospitality workers, retail staff, and healthcare workers on hourly awards use this conversion regularly when evaluating new positions or negotiating rates. Students working around study schedules often hold multiple casual jobs and need to aggregate hourly earnings for tax and HECS planning.",
        "Employers and recruiters comparing contract rates to permanent salaries also rely on hourly to salary conversions. A contractor charging $75 per hour at 38 hours per week earns $148,200 gross annually — but as a contractor they pay their own super, leave, and insurance, so the comparison with a $120,000 employee package is not straightforward. Use the conversion as a starting point, then factor in employment-type differences for a fair assessment.",
      ]
    ),
    section(
      "Related Scenarios and Complementary Tools",
      [
        "If you already know your target annual salary and need to find the equivalent hourly rate, use our salary to hourly calculator for the reverse conversion. Once you have your annual figure from this tool, run it through the take-home pay calculator or gross to net calculator for a detailed tax breakdown. The pay calculator provides the same analysis with emphasis on all pay cycle frequencies.",
        "For award-covered workers, check that your hourly rate meets the minimum rates set by the Fair Work Commission for your classification and industry. Overtime, penalty rates, and shift loadings can significantly increase hourly earnings beyond base rates — factor these in if they apply regularly to your roster. Remember that the 12% super guarantee applies to ordinary time earnings for employees, while independent contractors must make their own super contributions.",
      ],
      {
        list: [
          "Award minimums: verify hourly rate meets Fair Work standards",
          "Overtime and penalties: add to base rate if regular",
          "Contractors: must self-fund super, leave, and insurance",
          "Multiple jobs: aggregate all hourly income for tax purposes",
          "Salary to hourly calculator: reverse conversion tool",
        ],
      }
    ),
  ],
  [
    {
      question: "How do I convert hourly pay to annual salary in Australia?",
      answer:
        "Multiply your hourly rate by hours worked per week, then multiply by 52 weeks. For a standard full-time role: hourly rate × 38 × 52. For example, $30/hour × 38 × 52 = $59,280 gross per year.",
    },
    {
      question: "Should I include casual loading in the hourly rate?",
      answer:
        "Yes. Casual employees receive a 25% loading on top of the base award rate. If your payslip shows $37.50/hour including loading, use $37.50 in the calculator. The loading is taxable income and increases your annual gross accordingly.",
    },
    {
      question: "Is 38 or 40 hours the standard working week in Australia?",
      answer:
        "The standard full-time working week in Australia is 38 hours under the Fair Work Act. Some industries and contracts use 40 hours, but 38 is the default for most comparisons. Our calculator defaults to 38 hours but allows custom input.",
    },
    {
      question: "Does the calculator show net pay after tax?",
      answer:
        "Yes. After calculating gross annual salary, the tool estimates net pay using 2025–26 ATO tax brackets, the 2% Medicare levy, and optional HECS repayments. This lets you compare hourly roles with salaried positions on a take-home basis.",
    },
    {
      question: "How does hourly income affect HECS repayments?",
      answer:
        "HECS repayments are based on your total annual repayment income, regardless of whether you are paid hourly or salaried. If your annualised hourly earnings exceed $54,435, compulsory repayments apply at rates from 1% to 10% depending on your income level.",
    },
    {
      question: "How do I compare a casual hourly role to a permanent salary?",
      answer:
        "Convert the hourly rate to annual gross, then compare net pay after tax. Factor in that permanent roles include paid annual leave (four weeks), sick leave, and public holidays, while casual roles include 25% loading instead. Compare total package value, not just gross figures.",
    },
  ]
);
