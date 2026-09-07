import { formatCurrency } from "@/lib/calculator";

interface SalaryFaq {
  question: string;
  answer: string;
}

interface SalaryInsight {
  paragraphs: string[];
  relatedSlugs: { slug: string; label: string }[];
}

export function getSalaryFaqs(
  amount: number,
  net: number,
  weeklyNet: number
): SalaryFaq[] {
  const formatted = amount.toLocaleString("en-AU");
  const netFmt = formatCurrency(net);
  const weeklyFmt = formatCurrency(weeklyNet);

  return [
    {
      question: `How much is $${formatted} after tax in Australia?`,
      answer: `On a $${formatted} gross annual salary in 2025–26, estimated take-home pay is about ${netFmt} per year, or roughly ${weeklyFmt} per week after income tax and the Medicare levy. HECS, salary sacrifice or a second job will change the final figure.`,
    },
    {
      question: `What is the weekly pay on $${formatted} in Australia?`,
      answer: `A $${formatted} salary works out to about ${formatCurrency(amount / 52)} gross per week. After tax, the weekly take-home is around ${weeklyFmt} using standard PAYG assumptions for 2025–26.`,
    },
    {
      question: `Is $${formatted} a good salary in Australia?`,
      answer: `$${formatted} sits above the national full-time median wage. Whether it feels comfortable depends on your city, rent or mortgage, dependants and HECS repayments. Use our pay rise, pro-rata and super calculators to model your real situation.`,
    },
  ];
}

export function getSalaryInsights(amount: number, net: number): SalaryInsight {
  const formatted = amount.toLocaleString("en-AU");
  const netFmt = formatCurrency(net);
  const monthly = formatCurrency(net / 12);

  const relatedSlugs: { slug: string; label: string }[] = [
    { slug: "take-home-pay-calculator", label: "Take-home pay calculator" },
    { slug: "gross-to-net-calculator", label: "Gross to net calculator" },
    { slug: "super-calculator", label: "Super calculator" },
  ];

  if (amount >= 54435) {
    relatedSlugs.push({ slug: "hecs-calculator", label: "HECS repayment calculator" });
  }
  if (amount >= 90000) {
    relatedSlugs.push({ slug: "bonus-tax-calculator", label: "Bonus tax calculator" });
  }
  if (amount >= 250000) {
    relatedSlugs.push({ slug: "division-293-calculator", label: "Division 293 calculator" });
  }
  if (amount <= 60000) {
    relatedSlugs.push({ slug: "minimum-wage-calculator", label: "Minimum wage calculator" });
  }

  return {
    paragraphs: [
      `A $${formatted} gross salary in Australia for 2025–26 typically leaves about ${netFmt} in your pocket each year — roughly ${monthly} per month after income tax and the 2% Medicare levy. That is before HECS repayments, salary sacrifice or any work-related deductions you claim at tax time.`,
      `Your employer should also pay 12% superannuation guarantee on top of (or within) your package, depending on your contract. The figures on this page use ATO individual income tax brackets including the Stage 3 rates. Adjust the calculator above for HECS, Medicare exemptions or super-inclusive packages.`,
      `Comparing job offers? Check weekly and fortnightly take-home in the table below, then try our pay rise calculator or hourly to salary tool if your hours or pay frequency differ from a standard full-time role.`,
    ],
    relatedSlugs,
  };
}
