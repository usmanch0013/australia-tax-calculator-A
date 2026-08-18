import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "shift-penalty-calculator",
  "Shift Penalty Rates Calculator Australia: Weekend & Public Holiday Pay Guide 2025–26",
  "Penalty rates are premium pay rates applied when employees work outside ordinary hours — evenings, weekends, public holidays, and certain shift patterns. Penalty rates are set by modern awards, enterprise agreements, or individual contracts, and they can significantly boost weekly earnings for shift workers in hospitality, retail, healthcare, manufacturing, and transport. Our shift penalty calculator applies common Australian penalty multipliers to your base hourly rate: time-and-a-half for Saturdays, double time for Sundays, 15% loading for evening shifts, and 2.5 times for public holidays. Enter your base rate, hours worked, and shift type to see penalty pay, standard pay for the same hours, and the extra earnings premium.",
  [
    section("What Are Penalty Rates in Australia?", [
      "Penalty rates — also called penalty loadings or shift premiums — are additional pay for working at inconvenient times. The Fair Work Act and modern awards establish minimum penalty rates for most industries. Employers cannot pay below award penalty rates unless a registered agreement provides a better overall package. Penalty rates apply on top of the ordinary hourly rate, meaning a worker on $30 per hour receiving time-and-a-half earns $45 per hour for those hours.",
      "Penalty rates compensate workers for unsociable hours, disrupted personal schedules, and the physical demands of shift work. They are separate from overtime rates, which apply when total hours exceed ordinary weekly limits (typically 38 hours). An employee can receive both penalty rates and overtime rates on the same shift if award rules allow — for example, overtime on a Sunday public holiday can attract very high combined multipliers under some awards.",
    ]),
    section("Common Penalty Rate Multipliers", [
      "While exact rates vary by award, several multipliers appear consistently across Australian workplaces. Saturday work commonly attracts 150% (time-and-a-half) of the ordinary hourly rate. Sunday work typically earns 200% (double time). Evening shifts — often defined as after 6pm or after 7pm depending on the award — may attract 115% to 125% of the base rate. Public holiday work frequently earns 250% (two-and-a-half times) or higher.",
      "Our calculator uses these widely recognised multipliers: Saturday 1.5×, Sunday 2×, evening 1.15×, and public holiday 2.5×. These align with common award patterns but may not match your specific agreement exactly. Always check your award, enterprise agreement, or employment contract for precise rates. Some awards define different evening start times, Saturday penalties that increase after noon, or higher Sunday rates in hospitality.",
    ], {
      list: [
        "Saturday: 150% of base hourly rate (1.5×)",
        "Sunday: 200% of base hourly rate (2×)",
        "Evening shift: 115% of base hourly rate (1.15×)",
        "Public holiday: 250% of base hourly rate (2.5×)",
      ],
    }),
    section("Saturday and Sunday Penalty Rates", [
      "Saturday penalty rates reward weekend work when most Australians expect leisure time. Under many awards, ordinary Saturday hours earn 150% of the base rate from the first hour. A retail worker on $28 per hour working eight hours on Saturday earns $28 × 1.5 × 8 = $336, compared to $224 for the same hours on a weekday. Some awards increase Saturday rates to 175% or 200% for hours worked after noon or on certain days.",
      "Sunday rates are typically higher than Saturday rates, reflecting greater disruption to personal and family time. Double time — 200% of the base rate — is standard across retail, hospitality, and healthcare awards for ordinary Sunday hours. Eight hours on Sunday at $28 base earns $448 at double time versus $224 on a weekday. Workers who regularly cover weekends can earn substantially more than their annual salary figure suggests — always factor penalty rates when evaluating shift work compensation.",
    ]),
    section("Evening and Night Shift Penalties", [
      "Evening shift penalties apply when work extends beyond ordinary daytime hours. Awards define evening periods differently: hospitality awards often start evening rates at 7pm, while manufacturing awards may begin at 6pm. Our calculator applies a 115% multiplier representing a typical 15% evening loading. A worker on $32 per hour working a five-hour evening shift earns $32 × 1.15 × 5 = $184 instead of $160.",
      "Night shift penalties — for work between midnight and early morning — can attract higher loadings under some awards, sometimes 130% to 150% of base rates. Night shift workers in healthcare and mining may also receive additional allowances for permanent night duty. Shift workers should check whether evening and night penalties stack with weekend penalties or apply only to weekday evening work. Awards often specify which penalty takes precedence when multiple apply.",
    ]),
    section("Public Holiday Pay Rates", [
      "Public holidays in Australia include national days like Australia Day, Anzac Day, Christmas, and Boxing Day, plus state-specific holidays. Working on a public holiday typically attracts the highest penalty rates — commonly 250% of the ordinary hourly rate. Some awards require 250% for the first several hours and higher rates beyond that, or mandate a minimum payment even if the shift is shorter than ordinary hours.",
      "Employees who do not work on a public holiday may still receive payment if it falls on a day they would ordinarily work — this is public holiday penalty pay without attendance. Our calculator models pay for hours actually worked on a public holiday at 2.5× the base rate. A nurse on $40 per hour working a ten-hour public holiday shift earns $40 × 2.5 × 10 = $1,000 compared to $400 at base rate. Public holiday work can be lucrative but is often subject to roster requirements and award-specific substitution rules.",
    ]),
    section("Penalty Rates vs Overtime", [
      "Penalty rates and overtime are distinct concepts under Australian workplace law. Penalty rates compensate for working at particular times — weekends, evenings, holidays. Overtime compensates for working beyond ordinary daily or weekly hour limits, typically after 38 hours per week or after a set number of hours per day. An employee working a 10-hour Sunday shift may receive double-time penalty rates for all Sunday hours plus overtime rates for hours beyond the daily ordinary limit.",
      "Awards specify whether penalties and overtime stack or whether the higher rate applies alone. In some awards, overtime on a Sunday is paid at 200% regardless of separate Sunday penalty provisions. Use The overtime calculator above alongside the penalty calculator to model complex shifts. Employers must apply the correct rate — paying only base rate for weekend work is a common underpayment issue investigated by the Fair Work Ombudsman.",
    ]),
    section("Tax on Penalty Rate Earnings", [
      "Penalty rate earnings are ordinary income taxed at your marginal rate in 2025–26. Higher penalty pay can push weekly earnings into higher tax brackets temporarily, but annual tax is calculated on total income for the year. A worker earning $65,000 base plus $15,000 in penalty rates has $80,000 taxable income and pays tax accordingly — not at elevated rates on each penalty shift individually.",
      "PAYG withholding on penalty earnings may use marginal rates that feel high on individual payslips, especially after large public holiday shifts. If penalty work is irregular, you may receive a tax refund at year end when total income is lower than peak withholding suggests. Budget for tax on penalty earnings as part of your annual income. Our shift penalty calculator shows gross penalty pay — use the take-home pay calculator on your total annual earnings for net estimates.",
    ]),
    section("Industries with Significant Penalty Rates", [
      "Healthcare workers — nurses, paramedics, and aged care staff — routinely earn penalty rates for night shifts, weekends, and public holidays. Hospitality and retail employees depend on weekend penalty rates during peak trading periods. Manufacturing, warehousing, and transport workers receive shift premiums for rotating rosters and overnight operations. Security guards and cleaners often work exclusively outside business hours at loaded rates.",
      "Emergency services, mining fly-in-fly-out workers, and utility maintenance crews combine penalty rates with remote area allowances and overtime. If you work in a penalty-heavy industry, your effective hourly rate across the year may exceed your base award rate by 20–40%. When comparing job offers, calculate annual earnings using realistic shift patterns rather than base rate multiplied by 38 hours.",
    ]),
    section("Using the Shift Penalty Calculator", [
      "Enter your ordinary base hourly rate before any penalties or loadings. Select the number of hours worked on the shift. Choose the penalty type: Saturday, Sunday, evening, or public holiday. The calculator shows your base rate, penalty multiplier, penalty hourly rate, total penalty pay, what you would earn at base rate for the same hours, and the extra earnings from the penalty loading.",
      "Run separate calculations for different shift types to plan your weekly roster income. Combine results manually for mixed weeks — for example, eight Saturday hours plus five evening hours. Remember that your award may use different multipliers; treat our figures as indicative based on common Australian practice. For award-specific rates, consult the Fair Work Ombudsman pay guides or your union.",
    ]),
    section("Your Rights Regarding Penalty Rates", [
      "Employers must pay at least the award or agreement penalty rate — paying only base rates for weekend and holiday work is unlawful underpayment. Check payslips to confirm penalty rates appear separately or are included at the correct loaded rate. The Fair Work Ombudsman provides free award summaries and can investigate complaints. Union members can access detailed award interpretation support.",
      "Casual employees receive penalty rates plus their 25% casual loading on the ordinary rate portion — some awards calculate penalties on the loaded rate, others on base rate plus separate penalty. Part-time workers receive the same penalty rates as full-time colleagues for equivalent shift work. If you suspect underpayment, gather payslips, rosters, and award references before raising the issue with your employer or the FWO.",
    ]),
  ],
  [
    {
      question: "What is time-and-a-half on a Saturday?",
      answer:
        "Time-and-a-half means 150% of your ordinary hourly rate. If your base rate is $30 per hour, Saturday penalty pay is $45 per hour. For an eight-hour Saturday shift, total pay is $45 × 8 = $360 compared to $240 at the base rate — an extra $120 for the same hours.",
    },
    {
      question: "How much is double time on Sunday?",
      answer:
        "Double time is 200% of your base hourly rate. A worker on $35 per hour earns $70 per hour on Sunday. A six-hour Sunday shift pays $420 at double time versus $210 at the ordinary rate. Exact Sunday rates depend on your award — some start double time only after midday.",
    },
    {
      question: "What is the public holiday pay rate in Australia?",
      answer:
        "Most modern awards require at least 250% of the ordinary hourly rate for work performed on a public holiday. On a $40 base rate, public holiday pay is $100 per hour. Some awards mandate minimum shift payments or higher rates for hours beyond ordinary daily limits on public holidays.",
    },
    {
      question: "Do casual workers get penalty rates?",
      answer:
        "Yes. Casual employees are entitled to penalty rates under their award, plus the 25% casual loading on ordinary hours. How the loading interacts with penalties depends on the award — some apply penalties on the base rate, others on the loaded rate. Casual workers do not receive paid leave but benefit from higher hourly rates.",
    },
    {
      question: "Are penalty rates taxed?",
      answer:
        "Penalty rate earnings are ordinary taxable income. They increase your total annual earnings and are taxed at your marginal rate for the year. PAYG withholding on individual payslips may appear high during weeks with heavy penalty work, but annual tax is calculated on your total income across all pay periods.",
    },
    {
      question: "Can penalty rates and overtime apply together?",
      answer:
        "In many awards, penalty rates and overtime can apply to the same hours, producing very high effective rates — especially on Sundays and public holidays beyond ordinary daily hours. Each award specifies whether rates stack or the highest applicable rate is paid. Check your specific award or enterprise agreement for stacking rules.",
    },
  ]
);
