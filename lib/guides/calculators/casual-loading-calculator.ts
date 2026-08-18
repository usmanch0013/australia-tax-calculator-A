import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "casual-loading-calculator",
  "Casual Loading in Australia (2025–26)",
  "Casual employees in Australia typically receive a higher hourly rate than their permanent full-time or part-time counterparts, compensated through a casual loading — most commonly 25% on top of the base hourly rate. This loading exists because casuals do not receive paid annual leave, personal leave, redundancy pay, or notice of termination under the National Employment Standards. Here's how casual loading works under modern awards, how to calculate your casual hourly rate, weekly and annual earnings, the relationship between loading and superannuation, and recent changes to casual employment rules under the Fair Work Act.",
  [
    section("What Is Casual Loading?", [
      "Casual loading is a percentage added to the base minimum hourly rate to compensate casual employees for the entitlements permanent staff receive. Under most modern awards and the National Employment Standards (NES), the standard casual loading is 25% of the ordinary hourly rate. A worker with a base rate of $30 per hour would earn $37.50 per hour as a casual ($30 × 1.25).",
      "The loading recognises that casuals have no guaranteed hours, can be rostered off without notice in many cases, and do not accrue paid leave. In exchange for higher hourly pay, casual employees trade job security and leave entitlements. The loading is not a bonus — it is a structural part of how casual pay is designed under Australia's industrial relations system.",
    ]),
    section("How the 25% Casual Loading Is Calculated", [
      "The formula is: casual hourly rate = base hourly rate × (1 + loading percentage). With the standard 25% loading, multiply your base rate by 1.25. On a base rate of $28.00, the casual rate is $35.00. For weekly earnings, multiply the casual hourly rate by hours worked per week. For annual earnings, multiply weekly pay by 52 (or use the actual weeks worked if your hours vary significantly).",
      "Our casual loading calculator applies the 25% standard rate automatically. Enter your base hourly rate and average hours per week to see your casual rate, weekly earnings, and estimated annual income. If your award specifies a different loading — some agreements use 20% or higher rates for specific classifications — adjust the calculation accordingly or consult your enterprise agreement.",
    ], {
      list: [
        "Casual hourly rate = base rate × 1.25",
        "Weekly casual pay = casual hourly rate × hours per week",
        "Annual casual pay = weekly pay × 52 weeks",
        "Example: $32 base → $40 casual rate → $1,600/week at 40 hours → $83,200/year",
      ],
    }),
    section("Casual Loading Under Modern Awards", [
      "Most Australian employees are covered by a modern award that sets minimum pay rates and conditions for their industry. Awards specify the base classification rate and the casual loading percentage. While 25% is the most common loading under the Fair Work Act, individual awards may differ. The General Retail Industry Award, Hospitality Award, and Health Professionals Award all typically apply 25% casual loading on the relevant classification rate.",
      "Enterprise agreements can override award rates if they pass the Better Off Overall Test (BOOT), sometimes setting different loadings or combining loading with other benefits. Always check your specific award or agreement on the Fair Work Commission website. Your payslip should show your classification, base rate, loading, and resulting casual rate.",
    ]),
    section("Using the Casual Loading Calculator", [
      "Enter your base hourly rate — the permanent equivalent rate for your classification, not your current casual rate if you already receive loading. Enter your average hours per week to estimate weekly and annual casual earnings. The calculator adds 25% loading and displays the casual hourly rate, weekly pay comparison (base versus casual), and projected annual income assuming consistent hours across 52 weeks.",
      "Remember that casual hours often fluctuate. The annual figure assumes you work the entered hours every week, which may overstate income if your roster varies seasonally. For variable hours, calculate using your average weekly hours over a representative period, or run multiple scenarios with different hour inputs.",
    ]),
    section("What Casual Employees Do Not Receive", [
      "Casual employees are excluded from several NES entitlements that permanent employees enjoy. They do not accrue annual leave or personal/carer's leave, though they receive the loading instead. They have no entitlement to paid public holidays unless they work on the day (often at penalty rates). They do not receive redundancy pay or payment in lieu of notice upon termination, though recent Fair Work reforms have introduced pathways to convert to permanent employment.",
      "Casual employees do receive unpaid compassionate leave, unpaid community service leave, and the national minimum wage protections. They are covered by workers' compensation, superannuation guarantee (12% from July 2025), and anti-discrimination laws. Understanding what you give up in exchange for the loading helps you assess whether casual work suits your financial and personal situation.",
    ]),
    section("Casual Loading and Superannuation", [
      "Employers must pay Superannuation Guarantee on a casual employee's ordinary time earnings, including the casual loading component. SG is calculated on the loaded hourly rate, not the base rate alone. On a $30 base rate with 25% loading ($37.50 casual rate), 12% super is paid on $37.50 per hour, not $30. This means casual workers receive proportionally more super per hour worked than if SG were calculated on the base rate only.",
      "Casual loading is generally considered part of ordinary time earnings for super purposes. Overtime and penalty rates may have different super treatment depending on the award. Check your payslip to confirm SG is being calculated on your gross ordinary hours earnings, including loading.",
    ]),
    section("Casual Conversion Rights", [
      "Under Fair Work Act amendments, regular casual employees have the right to request conversion to permanent full-time or part-time employment in certain circumstances. A casual is considered regular if they have worked a pattern of hours on an ongoing basis for at least six months (12 months for small business employers with fewer than 15 employees) and could continue working those hours as a permanent employee without significant changes.",
      "Employers can refuse conversion on reasonable grounds, such as significant changes to the employee's hours or the work being genuinely irregular. Some awards also include casual conversion clauses with specific procedures. If you work consistent full-time hours as a casual, conversion to permanent employment may provide leave entitlements and job security while potentially reducing your hourly rate by removing the loading.",
    ]),
    section("Comparing Casual vs Permanent Pay", [
      "A common question is whether casual work pays more overall than permanent work. The 25% loading is designed to compensate for roughly four weeks of annual leave (20 days) and approximately ten days of personal leave that permanent employees receive. On paper, the loading roughly offsets the value of paid leave, but the comparison depends on how many hours you actually work and whether you use leave entitlements as a permanent employee.",
      "Casuals who work full-time hours year-round often earn more gross income than permanent colleagues on the same base rate, because the loading applies to every hour. However, during quiet periods when hours are cut, casual income can drop sharply with no paid leave to fall back on. Permanent employees have income stability and paid leave but a lower hourly rate. Model both scenarios using your actual hours and leave needs.",
    ]),
    section("Penalty Rates and Casual Loading", [
      "Casual employees are often entitled to penalty rates for evening, weekend, and public holiday work under their award, applied on top of the casual rate (not the base rate). For example, a casual hospitality worker might receive 150% of their casual rate on a Saturday and 225% on a public holiday. The interaction between casual loading and penalty rates varies by award — some apply penalties to the base rate then add loading, while others apply penalties to the loaded rate.",
      "Our calculator shows the standard casual rate without penalty rates. For shift work with penalties, consult your award's penalty rate table or use our shift penalty calculator. The Fair Work Ombudsman's Pay Calculator can also help determine your exact minimum rate including loadings and penalties for your classification.",
    ]),
    section("Tax on Casual Earnings in 2025–26", [
      "Casual income is taxed at the same income tax rates as permanent salary under the 2025–26 tax brackets. Your employer withholds PAYG tax based on your estimated annual income. If you work casually across multiple jobs or have irregular hours, you may overpay or underpay tax during the year and receive a refund or bill after lodging your tax return.",
      "The 2025–26 Stage 3 tax cuts apply standard rates: 0% up to $18,200, 16% from $18,201 to $45,000, 30% from $45,001 to $135,000, 37% from $135,001 to $190,000, and 45% above $190,000, plus 2% Medicare levy on most income above $26,000. Use our take-home pay calculator to estimate after-tax casual earnings at your projected annual income.",
    ]),
    section("Rights and Protections for Casual Workers", [
      "Casual employees have the same workplace rights as permanent staff regarding safe working conditions, freedom from discrimination and harassment, and protection from unfair dismissal in certain circumstances. The Fair Work Act sets minimum standards that apply regardless of employment type. Casuals can also be members of unions and are covered by the same modern awards that govern pay rates and conditions for their industry.",
      "Recent reforms have strengthened casual worker protections, including the right to request conversion to permanent employment after a qualifying period of regular hours, and clearer definitions of what constitutes a casual engagement. Employers must provide casual employees with a Casual Employment Information Statement at the start of employment. If you believe your employer is misclassifying you as a casual to avoid paying leave entitlements while rostering regular full-time hours, you can seek advice from the Fair Work Ombudsman or a legal service.",
    ]),
  ],
  [
    {
      question: "What is the standard casual loading in Australia?",
      answer: "The most common casual loading under modern awards is 25% on top of the base hourly rate. This compensates casual employees for not receiving paid annual leave, personal leave, redundancy pay, or notice of termination.",
    },
    {
      question: "How do I calculate my casual hourly rate?",
      answer: "Multiply your base hourly rate by 1.25. For example, a $36 base rate becomes $45 per hour with 25% casual loading. Our casual loading calculator does this automatically and also estimates weekly and annual earnings.",
    },
    {
      question: "Do casual employees get superannuation?",
      answer: "Yes. Employers must pay at least 12% Superannuation Guarantee on a casual worker's ordinary time earnings from 1 July 2025, calculated on the loaded hourly rate including the 25% casual loading.",
    },
    {
      question: "Is casual loading the same in every award?",
      answer: "No. While 25% is standard under most modern awards, some enterprise agreements and specific awards may set different loading rates. Always check your award or agreement on the Fair Work Commission website.",
    },
    {
      question: "Can a casual employee become permanent?",
      answer: "Yes. Regular casuals who have worked a consistent pattern of hours for at least six months (or 12 months for small businesses) can request conversion to permanent full-time or part-time employment under Fair Work Act provisions.",
    },
    {
      question: "Do casuals get paid annual leave?",
      answer: "No. Casual employees do not accrue paid annual leave. Instead, they receive a 25% loading on their hourly rate to compensate for the lack of leave entitlements. If you need paid leave, consider requesting casual conversion or seeking permanent employment.",
    },
  ]
);
