import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "annual-leave-calculator",
  "Annual Leave in Australia (2025–26)",
  "Annual leave — also called recreation leave or holiday pay — is a core entitlement for Aussie employees under the National Employment Standards (NES). Full-time permanent workers receive four weeks (20 working days) of paid annual leave per year, accruing progressively from their first day of employment. Understanding the dollar value of your leave helps when negotiating salary, planning time off, calculating payout on resignation, or comparing job offers. This guide covers NES leave entitlements, how to calculate leave value, pro-rata accrual, payout rules, and how annual leave interacts with tax in 2025–26.",
  [
    section("Annual Leave Entitlements Under the NES", [
      "The National Employment Standards, which apply to all employees covered by the national workplace relations system, grant full-time employees four weeks of paid annual leave per year. Part-time employees receive a pro-rata entitlement based on their ordinary hours — someone working three days per week accrues leave at 60% of the full-time rate. Annual leave accrues progressively throughout the year and continues to accrue during paid leave, but generally not during unpaid leave.",
      "Shift workers in certain industries may be entitled to five weeks of annual leave instead of four under specific award provisions. Casual employees do not accrue annual leave — they receive a 25% casual loading instead. Independent contractors have no NES leave entitlements unless negotiated in their contract. Your specific award or enterprise agreement may provide more generous leave than the NES minimum.",
    ]),
    section("How to Calculate the Value of Annual Leave", [
      "The dollar value of annual leave is calculated by multiplying your daily pay rate by the number of leave days. The standard method uses 260 working days per year (52 weeks × 5 days), giving a daily rate of annual salary ÷ 260. On a $91,000 salary, the daily rate is $350 and 20 days of annual leave is worth $7,000. Our annual leave calculator applies this formula automatically — enter your annual salary and the number of leave days to see the payout value.",
      "Some employers and awards calculate the daily rate differently, using 365 days, actual working days in the year, or average weekly earnings over the past 12 months. The 260-day method is the most common for salaried employees and provides a straightforward estimate. For shift workers or those with variable hours, the Fair Work Act requires payment at the base rate of pay for ordinary hours, which may differ from a simple salary division.",
    ], {
      list: [
        "Daily rate = annual salary ÷ 260 working days",
        "Leave value = daily rate × number of leave days",
        "Standard full-time entitlement = 20 days (4 weeks)",
        "Example: $78,000 salary → $300/day → 20 days = $6,000 leave value",
      ],
    }),
    section("Using the Annual Leave Calculator", [
      "Enter your gross annual salary and the number of leave days you want to value. The calculator defaults to the standard 20-day full-time entitlement but lets you enter any number — useful for calculating partial leave balances, pro-rata entitlements, or leave loading on top of base pay. Results show your daily rate, the value of your specified leave days, and the value of a full 20-day entitlement for comparison.",
      "The calculator provides estimates based on a standard salary structure. It does not include the 17.5% leave loading that many awards require when annual leave is actually taken (not when calculating accrued balance). It also does not account for tax withheld when leave is paid out, which is treated as ordinary income in the pay period it is received.",
    ]),
    section("Annual Leave Accrual and Balances", [
      "Annual leave accrues continuously from your start date at the rate of 1/13th of your annual entitlement per completed month (for four weeks per year). After six months, a full-time employee has accrued about 10 days. Leave balances carry over year to year — there is no use-it-or-lose-it rule under the NES, though your employer may require you to take leave if your balance is excessive.",
      "You can check your accrued leave balance on your payslip or through your employer's HR system. Upon resignation or redundancy, your employer must pay out all accrued but untaken annual leave in your final pay. This payout is taxed as ordinary income in the period it is received, not at a concessional rate. Unused leave can represent a significant lump sum — someone on $120,000 with 30 days accrued has roughly $13,846 in leave value.",
    ]),
    section("Annual Leave Loading", [
      "Many modern awards and enterprise agreements require employers to pay an annual leave loading of 17.5% on top of the base rate when employees take annual leave. This loading compensates for the loss of overtime and penalty rate opportunities while on leave. The loading applies when leave is taken, not to the accrued balance sitting in your account.",
      "Not all employees receive leave loading — it depends on your award or contract. Salaried professionals under common law contracts without award coverage often receive no loading. If your award includes 17.5% loading, the value of taking a day of leave is higher than the base daily rate alone. On a $300 daily rate, the loading adds $52.50 per day, making each leave day worth $352.50 when actually taken.",
    ]),
    section("Pro-Rata Leave for Part-Time Employees", [
      "Part-time employees accrue annual leave proportional to their ordinary hours relative to a full-time employee. Someone working 24 hours per week (60% of full-time) accrues 12 days per year instead of 20. The dollar value depends on their actual salary — a part-time worker earning $54,000 per year with 12 days accrued has the same daily rate calculation ($54,000 ÷ 260 = $207.69) applied to their 12-day balance.",
      "When a part-time employee increases their hours, leave continues to accrue at the new rate going forward but existing balances are not recalculated. When resigning, payout is based on the current base rate of pay multiplied by accrued hours or days, regardless of whether hours have changed during employment.",
    ]),
    section("Annual Leave on Termination and Redundancy", [
      "When employment ends — whether by resignation, dismissal, or redundancy — your employer must pay out all accrued and untaken annual leave in your final pay. This is a legal requirement under the Fair Work Act. The payout is calculated at your base rate of pay on the day of termination, plus any applicable leave loading under your award.",
      "Annual leave payout on termination is taxed as salary and wages, not as an employment termination payment (ETP). This means it is subject to normal PAYG withholding based on your marginal tax rate for the year. If you receive a large leave payout in your final pay alongside other amounts, the withholding may push you into a higher tax bracket temporarily — though you may receive a refund when lodging your tax return if total annual income is lower.",
    ]),
    section("Directing Annual Leave and Cash-Out", [
      "Employers can direct employees to take annual leave in certain circumstances, such as during a Christmas shutdown, provided they give appropriate notice. Some awards require employers to consult with employees before directing leave. You cannot be forced to cash out annual leave unless your award or agreement specifically allows it and you agree in writing.",
      "Cash-out provisions let employees exchange a portion of accrued leave for a cash payment while still employed. The NES permits cashing out up to two weeks of leave per year by agreement, but only if your award or agreement allows it. Cashing out is taxed as ordinary income. Keeping leave for actual time off is generally more valuable if you also receive the 17.5% loading when taking leave.",
    ]),
    section("Annual Leave vs Other Leave Types", [
      "Annual leave is distinct from personal/carer's leave (sick leave), which provides 10 days per year for full-time employees and does not get paid out on termination in most cases. Long service leave is a separate entitlement governed by state legislation, typically accruing after seven to ten years of continuous service. Parental leave provides up to 12 months of unpaid leave with optional paid parental leave from the government.",
      "Each leave type has different accrual rules, payout obligations, and tax treatment. Annual leave is the most commonly used and the only leave type that must be paid out in full upon termination. Understanding the differences helps you manage your leave balances and plan your finances when changing jobs.",
    ]),
    section("Planning Leave Around Tax and Cash Flow", [
      "Because annual leave is paid at your ordinary rate, taking leave does not reduce your annual taxable income — you earn the same whether working or on leave. However, the timing of leave can affect cash flow if your employer pays leave in advance or arrears. Some employees take leave at the end of the financial year to align with other income events.",
      "If you are resigning with a large leave balance, factor the payout into your tax planning for the year. A $15,000 leave payout on top of six months of regular salary could push your total income into a higher bracket. Spreading resignation timing or salary sacrifice (before leaving) may help manage tax outcomes, though professional advice is recommended for significant amounts.",
    ]),
    section("Annual Leave and Public Holidays", [
      "Public holidays that fall during a period of annual leave are treated differently depending on your award or agreement. Under the NES, if a public holiday falls on a day you would ordinarily work, and you are on annual leave that day, the public holiday is not counted as annual leave — your leave balance is credited back for that day. This means you do not lose a day of annual leave to a public holiday, which effectively extends your time off without reducing your leave balance.",
      "If you work in an industry that operates on public holidays — such as healthcare, hospitality, or retail — your award may provide alternative arrangements, including substitute days off or penalty rates for working on the holiday. When planning leave around Christmas, Easter, or Australia Day, check how public holidays interact with your leave balance. A well-timed leave request around public holidays can maximise consecutive days off while preserving your accrued leave for future use.",
    ]),
  ],
  [
    {
      question: "How many days of annual leave do full-time employees get?",
      answer: "Full-time employees are entitled to four weeks (20 working days) of paid annual leave per year under the National Employment Standards. Shift workers in certain industries may receive five weeks under specific award provisions.",
    },
    {
      question: "How do I calculate the dollar value of my annual leave?",
      answer: "Divide your annual salary by 260 working days to get your daily rate, then multiply by your leave days. For example, $85,000 ÷ 260 = $326.92 per day. Twenty days of leave is worth about $6,538.",
    },
    {
      question: "Is annual leave paid out when I resign?",
      answer: "Yes. Employers must pay all accrued and untaken annual leave in your final pay when employment ends. The payout is taxed as ordinary income at your marginal tax rate for the year.",
    },
    {
      question: "Do casual employees get annual leave?",
      answer: "No. Casual employees do not accrue annual leave. Instead, they receive a 25% casual loading on their hourly rate to compensate for the lack of paid leave entitlements.",
    },
    {
      question: "What is annual leave loading?",
      answer: "Many awards require an additional 17.5% payment on top of the base rate when annual leave is taken. This compensates for lost overtime and penalty rate opportunities while on leave. It applies when leave is taken, not to your accrued balance.",
    },
    {
      question: "Can my employer force me to take annual leave?",
      answer: "In some circumstances, yes. Employers can direct you to take leave during shutdown periods or if your balance is excessive, but must usually provide reasonable notice and consult with you. Rules vary by award and agreement.",
    },
  ]
);
