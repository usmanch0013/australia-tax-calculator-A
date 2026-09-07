import { buildGuide, section } from "../helpers";

export const guide = buildGuide(
  "weekly-pay-calculator",
  "Weekly Pay Calculator Australia: Guide for 2025–26",
  "A weekly pay calculator converts your annual salary into weekly gross and take-home figures. Australian employers pay weekly, fortnightly or monthly — but job ads usually quote annual packages. This guide explains how to work out weekly pay before and after tax, how PAYG withholding affects your payslip, and when fortnightly or monthly figures matter more.",
  [
    section("How to Calculate Weekly Pay from an Annual Salary", [
      "Divide your gross annual salary by 52 to get weekly gross pay. For example, $80,000 per year is $1,538.46 per week before tax. Your employer withholds PAYG tax each pay period based on annualised income, so weekly take-home is not simply net annual divided by 52 in every case — but it is a close estimate for steady full-time work.",
      "Our weekly pay calculator applies 2025–26 income tax brackets and the Medicare levy to show weekly gross, tax and net take-home alongside fortnightly and monthly figures.",
    ]),
    section("Weekly vs Fortnightly vs Monthly Pay", [
      "Most Australian employers pay fortnightly (every two weeks) or monthly. Fortnightly gross is annual divided by 26. Monthly gross is annual divided by 12. Weekly figures help when comparing hourly or casual work to salaried roles.",
      "If you are paid fortnightly, two extra pay cycles in some years can make budgeting tricky. Weekly and fortnightly take-home figures from this calculator help you plan cash flow.",
    ]),
    section("When Weekly Take-Home Matters", [
      "Rent, groceries and subscriptions are often planned weekly or fortnightly. Knowing your after-tax weekly pay makes it easier to compare a $75,000 offer to your current $70,000 role.",
      "Use our salary pages for common amounts — like $80,000 or $100,000 after tax — or the take-home pay calculator for full control over HECS, super and salary sacrifice settings.",
    ]),
  ],
  [
    {
      question: "How do I calculate weekly pay from an annual salary?",
      answer:
        "Divide gross annual salary by 52 for weekly gross pay. For after-tax weekly pay, subtract annual tax and Medicare then divide by 52, or use the calculator above.",
    },
    {
      question: "Is weekly pay the same as fortnightly divided by two?",
      answer:
        "Approximately. Fortnightly gross is annual divided by 26. Half of that equals annual divided by 52 — your weekly gross.",
    },
    {
      question: "Why does my payslip not match annual divided by 52?",
      answer:
        "PAYG withholding can vary with bonuses, leave, HECS and how your employer annualises pay. Steady full-time jobs usually match closely over the year.",
    },
    {
      question: "Does weekly pay include superannuation?",
      answer:
        "No. Super is paid separately by your employer at 12% of ordinary time earnings. Weekly figures here are cash salary before and after tax.",
    },
    {
      question: "Can I use this for hourly workers?",
      answer:
        "Yes — multiply your hourly rate by hours per week for weekly gross, or use our hourly to salary calculator for a full breakdown.",
    },
  ]
);
