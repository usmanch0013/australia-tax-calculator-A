import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "redundancy-pay-calculator",
  "Redundancy Pay and Tax in Australia (2025–26)",
  "Losing your job through redundancy is stressful enough without trying to decipher how much you will actually receive and what tax applies. Genuine redundancy payments are partly tax-free, but the rules depend on your years of service, whether your payout meets National Employment Standards minimums, and how your employer structures the payment. We'll cover redundancy pay entitlements under the Fair Work Act, the 2025–26 tax-free limits set by the ATO, and how Employment Termination Payments are taxed. Use our redundancy pay calculator to estimate your gross payout, tax-free component, and net amount before making financial decisions during a career transition.",
  [
    section(
      "What Is Redundancy Pay?",
      [
        "Redundancy pay is compensation paid to an employee when their position is no longer required and the employee is dismissed as a result. Under the National Employment Standards (NES) in the Fair Work Act 2009, many Aussie employees are entitled to a minimum redundancy payment based on their length of continuous service. The payment is calculated in weeks of pay at the employee's base rate for their ordinary hours, not including bonuses, loadings, or overtime unless they form part of ordinary hours.",
        "Redundancy is different from resignation, dismissal for misconduct, or the natural end of a fixed-term contract. A genuine redundancy occurs when the employer no longer needs anyone to do your job, or the employer becomes insolvent or bankrupt. The ATO treats genuine redundancy payments more favourably for tax purposes than other termination payments. Your employment contract, enterprise agreement, or company policy may provide more generous redundancy terms than the NES minimum — always check your specific arrangement.",
      ]
    ),
    section(
      "NES Redundancy Pay Weeks by Years of Service",
      [
        "The Fair Work Act sets minimum redundancy pay in weeks based on completed years of continuous service. Employees with less than one year of service receive no NES redundancy pay. From one year up to nine years, the weeks increase on a sliding scale from 4 weeks to 16 weeks. Employees with ten or more years of continuous service receive 12 weeks under the NES. Some awards and agreements provide additional weeks, especially in industries with longstanding redundancy schemes.",
        "Continuous service generally means unbroken employment with the same employer, though certain breaks such as authorised leave or transfers within a corporate group may not break continuity. Part-time and casual employees may have different entitlements — long-term regular casuals with a reasonable expectation of ongoing work may count service differently. Our redundancy pay calculator uses the NES week schedule and your annual salary to estimate the gross payout.",
      ],
      {
        list: [
          "Less than 1 year: 0 weeks (NES minimum)",
          "1 to less than 2 years: 4 weeks",
          "2 to less than 3 years: 6 weeks",
          "3 to less than 4 years: 7 weeks",
          "4 to less than 5 years: 8 weeks",
          "5 to less than 6 years: 10 weeks",
          "6 to less than 7 years: 11 weeks",
          "7 to less than 8 years: 13 weeks",
          "8 to less than 9 years: 14 weeks",
          "9 to less than 10 years: 16 weeks",
          "10 or more years: 12 weeks",
        ],
      }
    ),
    section(
      "How Redundancy Tax Works in 2025–26",
      [
        "Genuine redundancy payments receive a tax-free component based on ATO thresholds that are indexed annually. For the 2025–26 financial year, the tax-free base amount is $12,524, plus $6,264 for each full year of completed service. An employee with five years of service has a tax-free limit of $12,524 + (5 × $6,264) = $43,844. Any genuine redundancy amount up to this limit is not subject to income tax.",
        "Amounts above the tax-free limit are treated as Employment Termination Payments (ETPs). ETPs for genuine redundancy are taxed concessionally — the taxable component is generally taxed at 32% up to the ETP cap (which changes annually), rather than at your full marginal rate. Amounts above the ETP cap may be taxed at the top marginal rate of 45% plus Medicare. Our calculator applies a 32% estimated tax rate on the taxable portion as a simplified model — your actual tax may differ based on your total income for the year and other ETP components.",
      ]
    ),
    section(
      "Genuine vs Non-Genuine Redundancy",
      [
        "The tax treatment hinges on whether your redundancy is genuine under ATO and Fair Work definitions. A genuine redundancy requires that your dismissal is because the employer no longer requires your job to be done, you are under pension age, and if you are under 65, there is no acceptable alternative position offered. Early retirement schemes, voluntary redundancies, and some restructures may still qualify if they meet ATO criteria — but not all do.",
        "Non-genuine redundancies — such as dismissal for poor performance disguised as redundancy, or where you accept a package to leave but your role is filled — are taxed as ordinary income or as ETPs without the tax-free component. This can mean significantly more tax. Always obtain a written redundancy letter specifying the reason, and consider seeking advice from an employment lawyer or tax accountant if the classification is unclear. The tax-free thresholds only apply to the genuine redundancy component.",
      ]
    ),
    section(
      "Step-by-Step: Using the Redundancy Pay Calculator",
      [
        "Enter your annual gross salary as the basis for calculating weekly pay. The calculator divides your annual salary by 52 to determine weekly pay, then multiplies by the NES redundancy weeks for your years of service. If your actual weekly pay differs — for example, you work part-time or receive regular shift allowances — adjust your annual figure to reflect ordinary weekly earnings.",
        "Enter your years of continuous service. The calculator uses completed full years for the tax-free component calculation. Review the results: gross redundancy pay, estimated tax-free amount, taxable component, estimated tax at 32%, and estimated net payout. Remember this is an estimate. Your employer's payroll system, your payment summary, and your tax return will determine the final figures. Other termination amounts such as unused annual leave, long service leave, or notice in lieu are taxed separately.",
      ],
      {
        list: [
          "Step 1: Enter annual salary (or equivalent ordinary time earnings)",
          "Step 2: Enter years of continuous service",
          "Step 3: Review NES weeks applied to your service length",
          "Step 4: Check tax-free limit based on completed years",
          "Step 5: Note estimated tax on the taxable portion",
          "Step 6: Compare net payout against your budget and notice period",
        ],
      }
    ),
    section(
      "Worked Example: 7 Years of Service on $95,000",
      [
        "An employee earning $95,000 per year with seven years of continuous service is made genuinely redundant. Weekly pay is $95,000 ÷ 52 = $1,826.92. Under the NES, seven years of service entitles them to 13 weeks of redundancy pay. Gross redundancy pay is 13 × $1,826.92 = $23,750.",
        "The tax-free limit is $12,524 + (7 × $6,264) = $56,372. Since the gross payout of $23,750 is entirely below the tax-free limit, the full amount is tax-free. Estimated tax is $0 and the net payout equals the gross. This is a favourable outcome — shorter-service employees with higher salaries may have a taxable component if their payout exceeds the tax-free threshold.",
      ]
    ),
    section(
      "Worked Example: 15 Years of Service on $140,000",
      [
        "A senior employee on $140,000 with 15 years of service is genuinely redundant. Weekly pay is $2,692.31. With 10 or more years of service, the NES provides 12 weeks: gross redundancy pay is 12 × $2,692.31 = $32,307.72.",
        "The tax-free limit is $12,524 + (15 × $6,264) = $106,484. Again, the entire payout falls within the tax-free limit, so estimated tax is $0. However, if this employee's contract provided 20 weeks of redundancy ($53,846), the tax-free portion would still be $106,484 — still fully covered. If the contract provided 30 weeks ($80,769), the amount above any applicable limits would be taxed. Higher payouts from generous enterprise agreements are where the 32% ETP rate becomes relevant.",
      ]
    ),
    section(
      "Other Payments at Termination",
      [
        "Redundancy pay is only one part of your final entitlements. Unused annual leave is taxed differently — it is generally taxed at a maximum of 32% up to the cap, not as ordinary income. Unused long service leave has its own rules depending on your state and when it accrued. Payment in lieu of notice is typically taxed as ordinary salary income. Superannuation is not paid on redundancy amounts but your employer must still pay super on ordinary earnings up to your final day.",
        "If you receive a combined termination payment, your employer should provide a payment summary breaking down each component. The ATO requires different tax treatment for each type. Our calculator isolates the NES redundancy component — use our annual leave calculator and long service leave calculator to estimate other entitlements. Total tax on your final pay package can be substantial if multiple taxable components combine in one financial year.",
      ]
    ),
    section(
      "Common Mistakes and What to Watch For",
      [
        "Employees often assume all termination money is tax-free. Only the genuine redundancy component within the ATO limits qualifies. A $80,000 payout that includes $30,000 redundancy, $25,000 annual leave, and $25,000 notice in lieu will have very different tax outcomes across each portion. Another mistake is using total package including super as the salary base — redundancy is calculated on ordinary time earnings excluding employer super.",
        "Some employers miscalculate years of service or apply the wrong week schedule. Check your Fair Work entitlement against your contract. Voluntary redundancy packages marketed as tax-free may include components that do not qualify. Finally, receiving a large redundancy in the same year as significant other income can push you into higher brackets on the taxable portions — consider spreading negotiations or seeking professional tax advice for payouts exceeding $100,000.",
      ],
      {
        list: [
          "Assuming the entire termination payment is tax-free",
          "Using total remuneration including super as the salary base",
          "Confusing voluntary redundancy with genuine redundancy for tax purposes",
          "Forgetting that annual leave and notice are taxed separately",
          "Not checking whether your award provides more than NES minimums",
        ],
      }
    ),
    section(
      "Planning After Redundancy",
      [
        "Knowing your estimated net redundancy pay helps you plan the weeks or months before your next role. Consider whether you will claim JobSeeker payments — genuine redundancy generally does not affect eligibility immediately, but lump sums may affect means testing for other benefits. Redundancy payments are not subject to super guarantee, so you may want to voluntarily contribute some of your payout to super within concessional cap limits for a tax-effective outcome.",
        "If you are approaching preservation age, redundancy can coincide with transition-to-retirement strategies. For younger workers, budgeting for health insurance, mortgage repayments, and job search costs is essential. Use our take-home pay calculator to model what salary you need in your next role to match your previous lifestyle. Pair this guide with our pay rise calculator if you negotiate a higher salary to compensate for a lost role.",
      ]
    ),
  ],
  [
    {
      question: "Is all redundancy pay tax-free in Australia?",
      answer:
        "No. Only the genuine redundancy component up to the ATO tax-free limit is exempt from tax. For 2025–26, the limit is $12,524 plus $6,264 per completed year of service. Amounts above this limit are taxed as Employment Termination Payments, generally at 32% up to the ETP cap. Non-genuine redundancies do not receive any tax-free component.",
    },
    {
      question: "How is weekly pay calculated for redundancy?",
      answer:
        "Weekly pay is based on the employee's base rate of pay for ordinary hours worked. It typically excludes bonuses, overtime, and one-off allowances unless they are part of ordinary weekly earnings. Our calculator uses annual salary divided by 52 as a standard estimate. If you work part-time, use your actual annual ordinary time earnings rather than a full-time equivalent figure.",
    },
    {
      question: "Do casual employees get redundancy pay?",
      answer:
        "Most casual employees are not entitled to NES redundancy pay unless they are covered by an award or agreement that provides it, or they are long-term regular casuals with a reasonable expectation of ongoing employment. Casual loading compensates for the lack of leave and redundancy entitlements in standard casual arrangements. Check your specific award or contract.",
    },
    {
      question: "What is the difference between redundancy pay and severance pay?",
      answer:
        "Redundancy pay specifically relates to the position being abolished under Fair Work NES rules. Severance is a broader term often used for any termination payment, which may include redundancy, notice, leave payouts, and ex-gratia amounts. Only the qualifying genuine redundancy portion receives the concessional tax treatment described in this guide.",
    },
    {
      question: "Can my employer pay me more than the NES minimum?",
      answer:
        "Yes. Many employers, awards, and enterprise agreements provide redundancy above the NES minimum — sometimes expressed as weeks per year of service. The additional amount may still qualify for genuine redundancy tax treatment if it meets ATO conditions, but amounts above the tax-free threshold will be subject to ETP tax rates.",
    },
    {
      question: "Does redundancy pay affect my HECS repayments?",
      answer:
        "Redundancy pay is generally not included in HECS repayment income in the same way as salary, but other termination components taxed as income may affect your total repayment income for the year. Your overall taxable income for the financial year determines HECS obligations. Check with the ATO or a tax agent if you receive a large termination package in the same year as salary income.",
    },
  ]
);
