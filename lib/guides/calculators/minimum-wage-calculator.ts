import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "minimum-wage-calculator",
  "Minimum Wage Calculator Australia: Guide for 2025–26",
  "Australia's national minimum wage sets the lowest hourly rate most adult employees must be paid. From 1 July 2025, the adult minimum wage is $24.95 per hour before tax. This guide explains how minimum wage converts to weekly and annual pay, what take-home pay looks like after tax and Medicare, and how award rates, casual loading and junior rates differ from the national floor.",
  [
    section("What Is the Minimum Wage in Australia for 2025–26?", [
      "The Fair Work Commission sets the national minimum wage each financial year. For 2025–26, the adult national minimum wage is $24.95 per hour. On a standard 38-hour week, that is $949.10 gross per week or about $49,353 per year before tax.",
      "Many workers are paid above the minimum under industry awards, enterprise agreements or casual loading. The minimum wage is a legal floor — not the typical rate in skilled roles.",
    ]),
    section("Minimum Wage After Tax", [
      "On full-time minimum wage earnings, you still pay income tax and the 2% Medicare levy once you exceed the tax-free threshold of $18,200. A minimum wage worker on $49,353 gross might take home roughly $42,000–$43,000 per year depending on exact hours and withholding — use the calculator above for a precise 2025–26 estimate.",
      "Part-time and casual workers on minimum wage have lower annual totals but the same hourly rate before casual loading. Casual employees often receive 25% loading on top of the base hourly rate.",
    ]),
    section("Awards, Casual Loading and Juniors", [
      "Award-covered jobs may set minimum rates above the national floor. Hospitality, retail and healthcare awards often pay more than $24.95 per hour for experienced classifications.",
      "Junior employees are paid a percentage of the adult rate based on age. Casual loading adds 25% to the base hourly rate for casual workers without annual leave entitlements.",
    ]),
  ],
  [
    {
      question: "What is the minimum wage per hour in Australia in 2025?",
      answer:
        "The adult national minimum wage is $24.95 per hour from 1 July 2025. Award rates and casual loading can be higher.",
    },
    {
      question: "How much is minimum wage per week after tax?",
      answer:
        "On 38 hours at $24.95 per hour, gross weekly pay is about $949. After tax and Medicare, weekly take-home is typically around $800–$820 — use the calculator for your exact hours.",
    },
    {
      question: "Do minimum wage workers pay tax?",
      answer:
        "Yes, once annual income exceeds $18,200. Full-time minimum wage earners pay some income tax and the 2% Medicare levy.",
    },
    {
      question: "Is casual minimum wage higher?",
      answer:
        "Casual workers receive at least 25% loading on the base hourly rate, so the gross hourly rate is higher, but they do not receive paid leave.",
    },
    {
      question: "Does minimum wage include superannuation?",
      answer:
        "No. Employers must pay 12% superannuation guarantee on top of ordinary time earnings for eligible employees.",
    },
  ]
);
