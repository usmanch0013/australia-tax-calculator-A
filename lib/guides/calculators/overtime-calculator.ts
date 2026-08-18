import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "overtime-calculator",
  "Overtime Pay in Australia (2025–26)",
  "Overtime pay compensates Australian workers for hours worked beyond their ordinary rostered hours. Most modern awards and enterprise agreements specify overtime rates as a multiple of the base hourly rate — commonly time-and-a-half (1.5×) for the first two or three hours and double time (2×) thereafter, with higher rates on weekends and public holidays. Here's how overtime works under the Fair Work Act, how to calculate overtime earnings at 1.5× and 2× rates, the relationship between overtime and superannuation, tax treatment in 2025–26, and how award rules affect your entitlements.",
  [
    section("What Is Overtime?", [
      "Overtime refers to hours worked outside an employee's ordinary hours of work, paid at a higher rate than the standard hourly rate. For most full-time employees in Australia, ordinary hours are 38 per week, though this varies by award and industry. Hours worked beyond the daily or weekly threshold trigger overtime rates as defined in the applicable modern award or enterprise agreement.",
      "Overtime is distinct from penalty rates, which apply to ordinary hours worked at inconvenient times (evenings, weekends, public holidays) rather than hours beyond the standard roster. Some awards combine overtime and penalty rates, resulting in higher multiples for overtime worked on weekends or public holidays. Always check your specific award for the exact rules governing your industry and classification.",
    ]),
    section("Common Overtime Rates in Australia", [
      "The two most common overtime multipliers are time-and-a-half (1.5×) and double time (2×). Time-and-a-half means you earn 150% of your base hourly rate — an extra 50% on top of ordinary pay. Double time means 200% of your base rate — twice your normal hourly earnings. On a $40 base rate, time-and-a-half pays $60 per hour and double time pays $80 per hour.",
      "Many awards apply a tiered structure: the first two or three hours of overtime per day at 1.5×, then 2× for additional hours. Weekend overtime often starts at 1.5× on Saturday and 2× on Sunday. Public holiday overtime frequently attracts 2× or even 2.5× under some awards. The overtime calculator above lets you select either 1.5× or 2× to estimate earnings for a given number of overtime hours.",
    ], {
      list: [
        "Time-and-a-half (1.5×): base rate × 1.5 per overtime hour",
        "Double time (2×): base rate × 2 per overtime hour",
        "Example at $35/hr base: 1.5× = $52.50/hr, 2× = $70/hr",
        "10 hours at 1.5× on $35 base = $525 overtime pay ($175 extra vs ordinary rate)",
      ],
    }),
    section("Using the Overtime Calculator", [
      "Enter your base hourly rate (the ordinary rate before any loadings or penalties), the number of overtime hours worked, and select the multiplier — 1.5× for time-and-a-half or 2× for double time. The calculator displays your overtime hourly rate, total overtime pay, what you would have earned at the ordinary rate for the same hours, and the extra earnings above standard pay.",
      "The calculator provides a straightforward estimate based on your inputs. It does not apply award-specific rules such as daily overtime thresholds, minimum engagement periods, or compounding penalty rates. If your award specifies different rates for different days or times, run separate calculations for each rate tier or consult the Fair Work Ombudsman's Pay Calculator for your classification.",
    ]),
    section("Overtime Under Modern Awards", [
      "Each modern award defines when overtime applies and at what rates. The Manufacturing Award, for example, typically triggers daily overtime after eight hours or weekly overtime after 38 hours. The Hospitality Award has different thresholds for full-time and part-time workers. Some awards count the first hour of overtime differently, or apply overtime only after a certain number of hours per week rather than per day.",
      "Enterprise agreements can set overtime rules that differ from the award, provided they pass the Better Off Overall Test. Union-negotiated agreements sometimes provide higher overtime rates or earlier overtime triggers. Your employment contract should reference the applicable award or agreement. If you are award-free (earning above the high income threshold of $183,100 for 2025–26), overtime entitlements depend entirely on your contract.",
    ]),
    section("Daily vs Weekly Overtime Thresholds", [
      "Awards typically define overtime based on either daily or weekly hour limits, whichever is reached first. A full-time worker on an eight-hour day award accrues daily overtime from the ninth hour. A worker on a 38-hour week award accrues weekly overtime from the 39th hour in the week, even if no single day exceeds eight hours. Some awards use both tests simultaneously.",
      "Part-time employees generally accrue overtime only after working beyond their agreed ordinary hours. A part-time worker rostered for 24 hours per week who works 30 hours would receive overtime for 6 hours, not from the 38-hour full-time threshold. Accurate overtime calculation requires knowing your contracted hours, award thresholds, and actual hours worked each day and week.",
    ]),
    section("Overtime and Superannuation", [
      "Overtime payments are generally excluded from ordinary time earnings for Superannuation Guarantee purposes. This means your employer calculates the 12% SG on your base rate and ordinary hours, not on overtime amounts. If you regularly work significant overtime, your super contributions may represent a smaller percentage of your total cash earnings than for someone earning the same total income through ordinary hours alone.",
      "Some enterprise agreements or employment contracts require super to be paid on overtime, but this is above the legal minimum. If your contract includes super on overtime, the additional employer contributions count toward your $30,000 concessional contributions cap. Check your payslip to see whether SG is calculated on gross earnings or ordinary time earnings only.",
    ]),
    section("Tax on Overtime Earnings in 2025–26", [
      "Overtime is taxed as ordinary income at your marginal tax rate under the 2025–26 tax brackets. There is no special concessional rate for overtime in Australia (unlike some countries with overtime tax exemptions). Your employer withholds PAYG tax on overtime payments in the pay period they are earned, often using an annualised estimate of your total income.",
      "If overtime is irregular, PAYG withholding may not perfectly match your actual annual tax liability. Heavy overtime in one pay period can result in higher withholding that balances out over the year or generates a tax refund at return time. The Stage 3 tax cuts apply the same rates to overtime as to base salary: 16% from $18,201 to $45,000, 30% from $45,001 to $135,000, 37% from $135,001 to $190,000, and 45% above $190,000, plus 2% Medicare levy.",
    ]),
    section("Overtime for Salaried Employees", [
      "Not all salaried employees are entitled to overtime. Employees earning above the high income threshold ($183,100 for 2025–26) and covered by a guarantee of annual earnings may be excluded from award overtime provisions. Salaried professionals in award-free contracts may be expected to work reasonable additional hours without overtime pay, depending on their contract terms.",
      "However, many salaried employees below the threshold who are covered by an award are still entitled to overtime despite receiving an annual salary. The salary must be sufficient to cover all award entitlements including overtime, penalties, and loadings — if it does not, the employer may owe additional payments. If you are on a salary and regularly work beyond 38 hours, check whether your award provides overtime entitlements.",
    ]),
    section("Overtime vs Penalty Rates", [
      "Penalty rates compensate for working ordinary hours at inconvenient times — Saturday afternoons, Sunday shifts, late evenings, or public holidays. Overtime compensates for working beyond ordinary hours regardless of when they occur. An employee working a 10-hour Tuesday may receive overtime for the last two hours. An employee working a standard 8-hour Saturday shift may receive penalty rates on all hours without any overtime.",
      "When overtime and penalty rates overlap — such as working overtime on a Sunday — awards often compound the rates. You might receive double time (2×) as the overtime rate applied to a Sunday penalty loading, resulting in rates of 2.5× or even 3× the base rate in some awards. These compounding rules vary significantly, so consult your specific award for Sunday and public holiday overtime provisions.",
    ]),
    section("Record Keeping and Disputes", [
      "Employers must keep accurate records of hours worked, including overtime, under the Fair Work Act. You should track your own hours and compare them to payslips. Common overtime disputes involve employers classifying overtime hours as ordinary time, failing to pay the correct multiplier, or requiring unpaid overtime from salaried staff who are award-covered.",
      "If you believe you are owed overtime, raise the issue with your employer or HR team first. Unresolved disputes can be referred to the Fair Work Ombudsman for investigation or to the Fair Work Commission. The Fair Work Ombudsman can recover unpaid wages and penalties. Time limits apply — generally six years for underpayment claims — so act promptly if you identify discrepancies.",
    ]),
    section("Maximising Overtime Income", [
      "For workers in industries with strong overtime provisions — healthcare, construction, mining, hospitality, and transport — overtime can significantly boost annual income. A nurse on $38 per hour earning 10 hours of double time per fortnight adds over $15,000 per year to base earnings. Understanding your award's overtime triggers helps you volunteer for shifts that attract the highest rates.",
      "Balance overtime income against wellbeing and tax outcomes. Higher income pushes you into higher tax brackets and may affect HECS repayment rates, childcare subsidies, and other income-tested benefits. Our take-home pay calculator can help model your after-tax income including overtime. Sustainable earning strategies account for fatigue, work-life balance, and the diminishing returns of marginal tax on extra hours.",
    ]),
    section("Overtime in Key Australian Industries", [
      "Healthcare workers under the Nurses Award and Health Professionals Award often receive overtime after exceeding daily or weekly hour limits, with rates of 1.5× to 2× and higher penalties for public holiday shifts. Construction workers under the Building and Construction General On-site Award trigger overtime after eight hours per day or 38 hours per week, with Saturday overtime at 1.5× and Sunday at 2× in most cases.",
      "Mining and resources sector employees frequently work compressed rosters with significant overtime components, sometimes under enterprise agreements with rates above award minimums. Hospitality and retail workers face complex penalty and overtime structures tied to evening and weekend trading hours. Regardless of industry, the key is knowing your specific award classification and enterprise agreement. The Fair Work Ombudsman's online Pay and Conditions Tool provides award-specific rate lookups, while The overtime calculator above gives a quick estimate once you know your base rate and applicable multiplier.",
    ]),
  ],
  [
    {
      question: "What is time-and-a-half overtime?",
      answer: "Time-and-a-half means you are paid 1.5 times your base hourly rate for overtime hours — an extra 50% on top of your ordinary pay. On a $40 base rate, time-and-a-half pays $60 per hour. It is the most common overtime rate under Australian modern awards.",
    },
    {
      question: "How is double time overtime calculated?",
      answer: "Double time pays 2 times your base hourly rate. Multiply your ordinary hourly rate by 2 to get the overtime rate, then multiply by hours worked. On a $35 base rate, double time pays $70 per hour. Ten hours of double time earns $700.",
    },
    {
      question: "Is overtime included in superannuation?",
      answer: "Generally no. Superannuation Guarantee is calculated on ordinary time earnings, which usually excludes overtime. Your employer pays 12% SG on your base rate and ordinary hours, not on overtime payments, unless your contract specifies otherwise.",
    },
    {
      question: "Do salaried employees get overtime?",
      answer: "It depends on your award coverage and income. Award-covered employees below the high income threshold ($183,100 for 2025–26) are typically entitled to overtime even on a salary. Award-free employees above the threshold may not receive overtime unless their contract provides for it.",
    },
    {
      question: "What is the difference between overtime and penalty rates?",
      answer: "Overtime applies to hours worked beyond ordinary daily or weekly limits. Penalty rates apply to ordinary hours worked at inconvenient times like weekends or evenings. When both apply simultaneously, rates may compound under your award.",
    },
    {
      question: "How is overtime taxed in Australia?",
      answer: "Overtime is taxed as ordinary income at your marginal tax rate. There is no special overtime tax concession in Australia. Your employer withholds PAYG tax on overtime in the pay period it is earned, using the standard 2025–26 income tax brackets.",
    },
  ]
);
