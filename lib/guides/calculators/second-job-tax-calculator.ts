import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "second-job-tax-calculator",
  "Second Job Tax Calculator Australia: Guide for 2025–26",
  "A second job tax calculator shows how much of your side income you keep after Australian income tax and Medicare. There is no separate second-job tax rate — extra earnings are added to your main salary and taxed at your marginal bracket. For 2025–26, that often means 30% income tax plus 2% Medicare, and HECS if your combined income crosses the repayment threshold.",
  [
    section("How Is a Second Job Taxed in Australia?", [
      "When you work two jobs, both employers withhold PAYG tax based on the income they pay you. The ATO combines all your income at tax return time. Your second job income is taxed at your marginal rate — the rate that applies to the last dollar you earn. If your main job already puts you in the 30% bracket, most of your second job earnings are taxed at 30% plus Medicare.",
      "A second job tax calculator compares tax on your primary salary alone versus tax on your combined income. The difference is the incremental tax on your second job. This is more accurate than assuming a flat 32% or 37% withholding on every payslip from job two.",
    ]),
    section("Why Second Jobs Feel Heavily Taxed", [
      "Many people notice that their second job payslip has a high withholding rate. That is because employers often apply the tax-free threshold to your main job only. Job two may withhold tax from dollar one, which feels punitive but is reconciled at tax return.",
      "If your combined income pushes you into a higher HECS repayment bracket or closer to Division 293 thresholds, the effective cost of the second job rises further. Modelling scenarios before committing to extra shifts helps you decide if the hours are worth it.",
    ]),
    section("Using the Second Job Tax Calculator", [
      "Enter your annual gross from your main job, then the gross income you expect from your second job or side hustle. Toggle HECS if you have a HELP debt. The calculator shows tax on the second job, after-tax second job income, and your combined take-home.",
      "Use this alongside our pay calculator and gross to net calculator when comparing a second job to a pay rise at your primary employer.",
    ]),
  ],
  [
    {
      question: "Is there a special tax rate for a second job in Australia?",
      answer:
        "No. Second job income is ordinary income taxed at your marginal rate when combined with your other earnings. Withholding on payslips may look high, but your final tax is calculated on total annual income.",
    },
    {
      question: "Should I claim the tax-free threshold on my second job?",
      answer:
        "Usually you claim the tax-free threshold on only one job — typically your main employer. If both employers apply it, you may under-withhold and owe tax at return time.",
    },
    {
      question: "Does a second job affect HECS repayments?",
      answer:
        "Yes. HECS repayment income includes all taxable income. A second job can push you into a higher repayment rate, increasing the effective tax on that extra income.",
    },
    {
      question: "What about side hustles and ABN work?",
      answer:
        "Contractor or sole trader income is still taxable. You pay income tax on profit after expenses. This calculator models PAYG-style salary income; business income may need separate planning.",
    },
    {
      question: "How accurate is this calculator?",
      answer:
        "It uses 2025–26 ATO individual tax brackets and the 2% Medicare levy. Offsets, deductions and multiple employers can change your actual bill — treat results as solid estimates.",
    },
  ]
);
