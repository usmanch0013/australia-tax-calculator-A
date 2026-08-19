import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "contract-day-rate-calculator",
  "Contract Day Rate Calculator Australia: Contractor Income Guide 2025–26",
  "Australian contractors and consultants often quote a daily rate rather than an annual salary. A day rate is the gross amount charged or paid for each day of work, before tax and business expenses. Converting that figure into annual income, weekly cash flow, and estimated take-home pay helps you compare contract work against permanent employment and set rates that cover tax, super, and downtime. Our contract day rate calculator multiplies your daily rate by working days per week and weeks per year to show annual gross income, estimated 2025–26 tax under Stage 3 rates, Medicare levy, optional HECS repayments, and net annual and monthly figures. Use it when negotiating contracts, planning your financial year, or deciding whether a day rate truly beats a salaried package.",
  [
    section("What Is a Contractor Day Rate?", [
      "A day rate is the fee a contractor charges — or an employer pays — for each day of professional work. Day rates are common in IT, engineering, consulting, creative industries, healthcare locum work, and executive contracting. Unlike hourly rates, day rates typically assume a standard working day of around seven to eight hours and simplify billing for both parties. A contractor quoting $800 per day for four days weekly earns $3,200 gross per week before tax and expenses.",
      "Day rates differ from employee salaries because contractors are usually responsible for their own tax, super, insurance, and business costs. Many contractors operate as sole traders or through a company structure. The day rate must cover not just personal living costs but also periods between contracts, professional development, accounting fees, and equipment. Permanent employees receive paid leave and employer super; contractors must build these costs into their rate.",
    ]),
    section("How to Convert Day Rate to Annual Income", [
      "Annual gross income equals your day rate multiplied by days worked per week multiplied by working weeks per year. A common assumption is 48 working weeks, allowing four weeks for leave and public holidays that contractors do not get paid for. At $750 per day, four days per week, and 48 weeks, annual gross is $750 × 4 × 48 = $144,000. Some contractors use 46 weeks to account for additional downtime between projects.",
      "Our calculator lets you adjust both days per week and weeks per year to match your actual schedule. Full-time contractors working five days for 48 weeks at $600 per day earn $144,000 gross — equivalent to a senior salaried role. The equivalent hourly rate is useful for comparing against award rates or permanent job offers. Divide annual gross by total hours worked (days × weeks × hours per day) to benchmark against hourly contracts.",
    ], {
      list: [
        "Annual gross = day rate × days per week × weeks per year",
        "Weekly gross = day rate × days per week",
        "Monthly gross ≈ annual gross ÷ 12",
        "Equivalent hourly = annual gross ÷ (days × weeks × 8 hours)",
      ],
    }),
    section("2025–26 Tax on Contractor Income", [
      "Contractor income is taxable at the same resident rates as employment income in 2025–26. The Stage 3 tax cuts apply: 0% up to $18,200, 16% from $18,201 to $45,000, 30% from $45,001 to $135,000, 37% from $135,001 to $190,000, and 45% above $190,000. On $144,000 gross, income tax is about $35,788 plus $2,880 Medicare levy, leaving roughly $107,332 net before business expenses and HECS.",
      "Unlike employees, contractors do not have PAYG tax withheld automatically unless they register for voluntary withholding or operate through an agency that withholds on their behalf. Sole traders pay tax through quarterly PAYG instalments and an annual tax return. Budget 25–30% of gross income for tax on typical contract earnings to avoid a large bill at year end. Our calculator estimates tax assuming all income is personal taxable income — company structures and deductions are not modelled.",
    ]),
    section("Day Rate vs Permanent Salary Comparison", [
      "Comparing a day rate to a permanent salary requires more than matching gross figures. A permanent employee on $130,000 typically receives 12% employer super ($15,600), paid annual leave, sick leave, and often training and equipment. A contractor on equivalent gross income must fund super personally, cover leave gaps, and pay business expenses. Rule of thumb: multiply a permanent salary by roughly 1.3 to 1.5 to find an equivalent contractor day rate.",
      "For example, a permanent role at $110,000 plus super might equate to a contractor needing $140,000–$165,000 gross to achieve similar total remuneration after accounting for unpaid leave, self-funded super, and insurance. Use our calculator to model your day rate annual gross, then add estimated business expenses and compare the net figure against a permanent take-home pay calculation. Factor in job security, flexibility, and career development when making the final decision.",
    ]),
    section("Superannuation for Contractors", [
      "Contractors paid primarily for labour under a contract that is wholly or principally for their labour are treated as employees for superannuation purposes. The hiring entity must pay 12% super on payments from 1 July 2025, even if the contractor invoices through a company in some circumstances. Many genuine independent contractors must make their own super contributions as personal concessional contributions, subject to annual caps ($30,000 concessional cap in 2025–26).",
      "If you are a sole trader contractor, consider salary sacrificing or making personal super contributions to reduce taxable income and build retirement savings. Personal contributions may be tax-deductible if you notify your super fund and lodge the appropriate form. Our day rate calculator shows gross annual income — allocate at least 10–12% of net earnings for super if no employer contributions apply.",
    ]),
    section("Business Expenses and Deductions", [
      "Sole trader contractors can deduct expenses incurred in earning assessable income. Common deductions include home office costs, phone and internet, professional memberships, insurance, accounting fees, equipment depreciation, and motor vehicle expenses for work travel. These deductions reduce taxable income and lower your effective tax rate. A contractor earning $150,000 gross with $20,000 in legitimate deductions pays tax on $130,000, not the full gross.",
      "Our calculator does not subtract business expenses — it models gross contract income as personal taxable income for simplicity. Track all deductible expenses throughout the year and consult a tax agent to maximise legitimate claims. The ATO scrutinises contractor deductions, so maintain receipts and a clear connection between expenses and income-producing activities. Consider using separate bank accounts for business and personal transactions.",
    ]),
    section("Setting Your Day Rate", [
      "To set a sustainable day rate, start with your target annual net income after tax and expenses. Add estimated tax (use our calculator in reverse by testing different day rates), super contributions, business costs, and unpaid leave weeks. Divide the total required gross by your expected billable days per year. If you need $90,000 net, $15,000 super, $10,000 expenses, and $35,000 tax, target roughly $150,000 gross across 192 billable days — about $781 per day.",
      "Research market rates through industry surveys, recruiter quotes, and peer networks. Rates vary significantly by sector: IT contractors in major cities often charge $800–$1,500 per day for senior roles, while creative freelancers may charge $400–$700. Adjust for your experience, niche expertise, client location, and contract length. Longer contracts may justify a slightly lower rate for income stability; short urgent engagements can command premium rates.",
    ]),
    section("GST and Contractor Billing", [
      "Contractors must register for GST once turnover reaches $75,000 annually. GST registration means charging 10% GST on invoices and remitting net GST to the ATO after claiming input credits on business purchases. A $1,000 day rate plus GST invoices at $1,100 — but only $1,000 counts as your income; the $100 GST belongs to the ATO. Factor GST into client negotiations so your income target remains intact.",
      "Some contractors operate through a Pty Ltd company for liability protection and tax flexibility. Company tax rates differ from personal rates, and income is typically distributed through wages and dividends. Our calculator assumes personal sole-trader taxation. Company contractors should model both company tax and personal tax on distributions with professional advice. BAS lodgement obligations apply quarterly for GST-registered businesses.",
    ]),
    section("Using the Contract Day Rate Calculator", [
      "Enter your daily rate in dollars, the number of days you work or bill per week, and the number of working weeks per year. Toggle HECS/HELP if you have a study loan. The calculator displays day rate, schedule inputs, annual gross income, estimated total tax, annual take-home, monthly take-home, and an equivalent gross hourly rate based on eight-hour days.",
      "Adjust weeks per year to reflect your real billable capacity — 48 weeks is a common default but project-based contractors may bill fewer weeks. Compare results against our take-home pay and gross-to-net calculators for permanent roles. Remember that actual contractor outcomes depend on deductions, business structure, GST status, and whether super is paid by the client or self-funded.",
    ]),
    section("Contractor Compliance and Record Keeping", [
      "Australian contractors must maintain records for tax purposes for five years. Register for an ABN before invoicing clients. Sole traders use their individual tax return; companies lodge separate returns. Understand whether you are a genuine contractor or deemed employee — the ATO and Fair Work Ombudsman assess factors including control, ability to subcontract, and whether you bear commercial risk.",
      "If deemed an employee, the hiring party owes PAYG withholding, super, and leave entitlements. Personal services income (PSI) rules may limit deductions for contractors who earn income primarily from one client without a personal services business determination. Stay informed about ATO guidance and seek professional advice for complex arrangements involving multiple clients, international work, or company structures.",
    ]),
  ],
  [
    {
      question: "How do I convert a day rate to an annual salary?",
      answer:
        "Multiply your day rate by the number of days you work per week, then multiply by the number of working weeks per year. At $700 per day, four days weekly, and 48 weeks, annual gross income is $700 × 4 × 48 = $134,400. Adjust weeks per year to account for unpaid leave between contracts.",
    },
    {
      question: "What day rate equals a $120,000 salary?",
      answer:
        "Divide the target annual income by billable days per year. On 48 weeks at four days per week (192 days), $120,000 ÷ 192 = $625 per day gross. For equivalent total remuneration including super and paid leave, contractors typically need a higher day rate — roughly $750–$850 per day depending on expenses and downtime.",
    },
    {
      question: "Do contractors pay more tax than employees?",
      answer:
        "Contractor income is taxed at the same personal income tax rates as employment income in 2025–26. Contractors do not pay extra tax by default, but they lack automatic PAYG withholding and must manage instalments themselves. Legitimate business deductions can lower a contractor's taxable income below an employee earning the same gross amount.",
    },
    {
      question: "Should I include GST in my day rate?",
      answer:
        "If you are GST-registered, your invoice day rate plus 10% GST is what clients pay, but GST is not your income. Quote your desired income as the ex-GST day rate. On a $900 ex-GST day rate, you invoice $990 including GST and remit $90 to the ATO after claiming input credits on business purchases.",
    },
    {
      question: "How many weeks per year should contractors use?",
      answer:
        "Most contractors use 46 to 48 working weeks per year, reserving two to four weeks for unpaid leave, public holidays not covered by clients, and gaps between contracts. Highly sought contractors billing 50 weeks may use a higher figure. Choose a conservative estimate when setting rates to avoid income shortfalls.",
    },
    {
      question: "Does HECS apply to contractor income?",
      answer:
        "Yes. HECS/HELP compulsory repayments apply to repayment income from all sources, including contractor earnings reported on your tax return. If your total repayment income exceeds $54,435 in 2025–26, repayments apply at rates from 1% to 10%. Enable HECS in our calculator to include estimated repayments in your take-home figure.",
    },
  ]
);
