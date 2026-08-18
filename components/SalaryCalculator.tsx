"use client";

import { useMemo, useState } from "react";
import {
  calculateSalary,
  defaultInput,
  formatCurrency,
  type CalculatorInput,
  type PayFrequency,
  type SalaryBasis,
} from "@/lib/calculator";

type TabName = "summary" | "detailed";

interface SalaryCalculatorProps {
  initialSalary?: number;
}

export default function SalaryCalculator({ initialSalary }: SalaryCalculatorProps) {
  const [input, setInput] = useState<CalculatorInput>({
    ...defaultInput,
    salary: initialSalary ?? defaultInput.salary,
  });
  const [activeTab, setActiveTab] = useState<TabName>("summary");
  const [dependants, setDependants] = useState(0);

  const results = useMemo(() => calculateSalary(input), [input]);

  function updateInput<K extends keyof CalculatorInput>(
    key: K,
    value: CalculatorInput[K]
  ) {
    setInput((prev) => ({ ...prev, [key]: value }));
  }

  function resetDefaults() {
    setInput(defaultInput);
    setDependants(0);
    setActiveTab("summary");
  }

  async function copyResults() {
    const text =
      `Salary Calculation:\n` +
      `Gross Salary: ${formatCurrency(results.gross)}\n` +
      `Base Salary: ${formatCurrency(results.base)}\n` +
      `Take-Home Pay: ${formatCurrency(results.net)}\n` +
      `Total Tax & Deductions: ${formatCurrency(results.deductions)}\n` +
      `Superannuation: ${formatCurrency(results.super)}\n` +
      `Effective Tax Rate: ${results.effRate}%\n` +
      `Marginal Tax Rate: ${results.marRate}%`;

    try {
      await navigator.clipboard.writeText(text);
      alert("Results copied to clipboard!");
    } catch {
      alert("Failed to copy results.");
    }
  }

  return (
    <div id="au-salary-calculator">
      <div className="asc-grid">
        <div className="asc-col-left">
          <div className="asc-card">
            <h2 className="asc-h2">
              <span className="asc-icon-wrapper" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </span>
              Your Details
            </h2>

            <div className="asc-form-group">
              <label className="asc-label" htmlFor="asc-salary">
                Salary Amount
              </label>
              <div className="asc-input-wrap">
                <span className="asc-input-prefix" aria-hidden="true">
                  $
                </span>
                <input
                  type="number"
                  id="asc-salary"
                  className="asc-input"
                  value={input.salary}
                  min={0}
                  step={1000}
                  onChange={(e) =>
                    updateInput("salary", parseFloat(e.target.value) || 0)
                  }
                  aria-label="Salary amount in dollars"
                />
              </div>
            </div>

            <div className="asc-row">
              <div>
                <label className="asc-label" htmlFor="asc-basis">
                  Salary Basis
                </label>
                <select
                  id="asc-basis"
                  className="asc-select"
                  value={input.basis}
                  onChange={(e) =>
                    updateInput("basis", e.target.value as SalaryBasis)
                  }
                >
                  <option value="annually">Annually</option>
                  <option value="monthly">Monthly</option>
                  <option value="fortnightly">Fortnightly</option>
                  <option value="weekly">Weekly</option>
                  <option value="daily">Daily</option>
                  <option value="hourly">Hourly</option>
                </select>
              </div>
              <div>
                <label className="asc-label" htmlFor="asc-frequency">
                  Pay Frequency
                </label>
                <select
                  id="asc-frequency"
                  className="asc-select"
                  value={input.frequency}
                  onChange={(e) =>
                    updateInput(
                      "frequency",
                      parseInt(e.target.value, 10) as PayFrequency
                    )
                  }
                >
                  <option value="1">Annually</option>
                  <option value="12">Monthly</option>
                  <option value="26">Fortnightly</option>
                  <option value="52">Weekly</option>
                </select>
              </div>
            </div>

            {input.basis === "hourly" && (
              <div className="asc-form-group">
                <label className="asc-label" htmlFor="asc-hours">
                  Hours per week
                </label>
                <div className="asc-input-wrap">
                  <input
                    type="number"
                    id="asc-hours"
                    className="asc-input asc-input--no-prefix"
                    value={input.hoursPerWeek}
                    min={1}
                    max={168}
                    step={1}
                    onChange={(e) =>
                      updateInput(
                        "hoursPerWeek",
                        parseFloat(e.target.value) || 38
                      )
                    }
                    aria-label="Hours worked per week"
                  />
                </div>
              </div>
            )}

            <details className="asc-advanced">
              <summary>Advanced Options</summary>
              <div className="asc-advanced-content">
                <div className="asc-adv-section">
                  <h4 className="asc-adv-heading">Tax Settings</h4>
                  <label className="asc-checkbox-group">
                    <input
                      type="checkbox"
                      className="asc-checkbox"
                      checked={input.hasHecs}
                      onChange={(e) => updateInput("hasHecs", e.target.checked)}
                    />
                    <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                      HECS-HELP / VETSL Debt
                    </span>
                  </label>
                  <label className="asc-checkbox-group">
                    <input
                      type="checkbox"
                      className="asc-checkbox"
                      checked={input.medicareExempt}
                      onChange={(e) =>
                        updateInput("medicareExempt", e.target.checked)
                      }
                    />
                    <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                      Medicare Levy Exemption
                    </span>
                  </label>
                  <label className="asc-checkbox-group">
                    <input
                      type="checkbox"
                      className="asc-checkbox"
                      checked={input.isSapto}
                      onChange={(e) => updateInput("isSapto", e.target.checked)}
                    />
                    <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                      Senior / Pensioner (SAPTO)
                    </span>
                  </label>

                  <label className="asc-label mt-4">Family Status</label>
                  <div
                    className="asc-toggle-group mb-4"
                    role="group"
                    aria-label="Family status"
                  >
                    <button
                      type="button"
                      className={`asc-toggle-btn${
                        input.familyStatus === "single" ? " active" : ""
                      }`}
                      onClick={() => updateInput("familyStatus", "single")}
                    >
                      Single
                    </button>
                    <button
                      type="button"
                      className={`asc-toggle-btn${
                        input.familyStatus === "couple" ? " active" : ""
                      }`}
                      onClick={() => updateInput("familyStatus", "couple")}
                    >
                      Family / Couple
                    </button>
                  </div>

                  {input.familyStatus === "couple" && (
                    <div>
                      <label className="asc-label" htmlFor="asc-dependants">
                        Number of Dependants
                      </label>
                      <div className="asc-input-wrap">
                        <input
                          type="number"
                          id="asc-dependants"
                          className="asc-input asc-input--no-prefix"
                          value={dependants}
                          min={0}
                          step={1}
                          onChange={(e) =>
                            setDependants(parseInt(e.target.value, 10) || 0)
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="asc-adv-section">
                  <h4 className="asc-adv-heading">Super &amp; Salary Packaging</h4>
                  <div className="asc-form-group" style={{ marginBottom: 0 }}>
                    <label className="asc-label">Superannuation</label>
                    <div
                      className="asc-toggle-group mb-4"
                      role="group"
                      aria-label="Superannuation mode"
                    >
                      <button
                        type="button"
                        className={`asc-toggle-btn${
                          input.superMode === "top" ? " active" : ""
                        }`}
                        onClick={() => updateInput("superMode", "top")}
                      >
                        Super on top (12%)
                      </button>
                      <button
                        type="button"
                        className={`asc-toggle-btn${
                          input.superMode === "inclusive" ? " active" : ""
                        }`}
                        onClick={() => updateInput("superMode", "inclusive")}
                      >
                        Super inclusive
                      </button>
                    </div>
                    <p className="asc-muted-text">
                      Employer pays 12% super{" "}
                      {input.superMode === "top"
                        ? "on top of"
                        : "included in"}{" "}
                      your salary
                    </p>
                  </div>
                </div>

                <div className="asc-adv-section">
                  <h4 className="asc-adv-heading">
                    Additional Income &amp; Deductions
                  </h4>
                  <div className="asc-row" style={{ marginBottom: 0 }}>
                    <div style={{ minWidth: 120 }}>
                      <label className="asc-label" htmlFor="asc-other-income">
                        Other Income
                      </label>
                      <div className="asc-input-wrap">
                        <span className="asc-input-prefix" aria-hidden="true">
                          $
                        </span>
                        <input
                          type="number"
                          id="asc-other-income"
                          className="asc-input"
                          value={input.otherIncome}
                          min={0}
                          step={100}
                          onChange={(e) =>
                            updateInput(
                              "otherIncome",
                              parseFloat(e.target.value) || 0
                            )
                          }
                        />
                      </div>
                    </div>
                    <div style={{ minWidth: 120 }}>
                      <label className="asc-label" htmlFor="asc-work-deductions">
                        Work Deductions
                      </label>
                      <div className="asc-input-wrap">
                        <span className="asc-input-prefix" aria-hidden="true">
                          $
                        </span>
                        <input
                          type="number"
                          id="asc-work-deductions"
                          className="asc-input"
                          value={input.workDeductions}
                          min={0}
                          step={100}
                          onChange={(e) =>
                            updateInput(
                              "workDeductions",
                              parseFloat(e.target.value) || 0
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <button
              type="button"
              className="asc-btn asc-btn-outline mb-4"
              onClick={resetDefaults}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              Reset to Defaults
            </button>
            <button
              type="button"
              className="asc-btn asc-btn-cta"
              onClick={copyResults}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy Results
            </button>
          </div>
        </div>

        <div className="asc-col-right">
          <div className="asc-tabs" role="tablist">
            <button
              type="button"
              className={`asc-tab${activeTab === "summary" ? " active" : ""}`}
              role="tab"
              aria-selected={activeTab === "summary"}
              onClick={() => setActiveTab("summary")}
            >
              Summary
            </button>
            <button
              type="button"
              className={`asc-tab${activeTab === "detailed" ? " active" : ""}`}
              role="tab"
              aria-selected={activeTab === "detailed"}
              onClick={() => setActiveTab("detailed")}
            >
              Detailed Breakdown
            </button>
          </div>

          <div
            className={`asc-tab-content${activeTab === "summary" ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="asc-card">
              <div className="asc-summary-top">
                <div className="asc-chart-container" aria-hidden="true">
                  <div
                    className="asc-donut"
                    style={{ background: results.donutGradient }}
                  />
                  <div className="asc-donut-inner">
                    <div className="asc-donut-val">
                      {results.chartTakeHomeLabel}
                    </div>
                    <div className="asc-donut-label">take home</div>
                  </div>
                </div>

                <div className="asc-stats-grid">
                  <div className="asc-stat-row">
                    <span className="asc-h3">Gross Salary</span>
                    <span className="asc-stat-val">
                      {formatCurrency(results.gross)}
                    </span>
                  </div>
                  <div className="asc-stat-row">
                    <span className="asc-h3">Take-Home Pay</span>
                    <span className="asc-stat-val highlight">
                      {formatCurrency(results.net)}
                    </span>
                  </div>
                  <div className="asc-stat-row">
                    <span className="asc-h3">Total Deductions</span>
                    <span className="asc-stat-val deduction">
                      {formatCurrency(results.deductions)}
                    </span>
                  </div>
                  <div className="asc-mini-stats">
                    <div>
                      <span className="asc-h3">Effective Rate</span>
                      <div className="asc-stat-val">{results.effRate}%</div>
                    </div>
                    <div>
                      <span className="asc-h3">Marginal Rate</span>
                      <div className="asc-stat-val">{results.marRate}%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="asc-legend" aria-label="Chart legend">
                <div className="asc-legend-item">
                  <div
                    className="asc-dot"
                    style={{ background: "var(--chart-takehome)" }}
                  />
                  Take Home
                </div>
                <div className="asc-legend-item">
                  <div
                    className="asc-dot"
                    style={{ background: "var(--chart-tax)" }}
                  />
                  Income Tax
                </div>
                <div className="asc-legend-item">
                  <div
                    className="asc-dot"
                    style={{ background: "var(--chart-medicare)" }}
                  />
                  Medicare Levy
                </div>
                <div className="asc-legend-item">
                  <div
                    className="asc-dot"
                    style={{ background: "var(--chart-super)" }}
                  />
                  Superannuation
                </div>
              </div>
            </div>
          </div>

          <div
            className={`asc-tab-content${activeTab === "detailed" ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="asc-card">
              <h2 className="asc-h2">
                <span
                  className="asc-icon-wrapper asc-icon-wrapper--tax"
                  aria-hidden="true"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </span>
                Deductions Breakdown
              </h2>
              <table className="asc-table" aria-label="Deductions breakdown">
                <tbody>
                  {results.breakdown.map((row) => (
                    <tr key={row.label} className={row.className}>
                      <td>{row.label}</td>
                      <td style={row.valueStyle}>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="asc-card">
            <h2 className="asc-h2" style={{ justifyContent: "space-between" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span
                  className="asc-icon-wrapper asc-icon-wrapper--calendar"
                  aria-hidden="true"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                Pay Periods
              </span>
            </h2>
            <div className="asc-table-scroll">
              <table className="asc-table" aria-label="Pay periods breakdown">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Gross</th>
                    <th>Tax</th>
                    <th>Net</th>
                  </tr>
                </thead>
                <tbody>
                  {results.payPeriods.map((row) => (
                    <tr key={row.name}>
                      <td>{row.name}</td>
                      <td>{row.gross}</td>
                      <td>{row.tax}</td>
                      <td style={{ fontWeight: 700, color: "var(--text-main)" }}>
                        {row.net}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p
              className="asc-muted-text"
              style={{ marginTop: "1.5rem", textAlign: "center" }}
            >
              Based on 38-hour work week, 52 weeks, 26 fortnights, 260 working
              days per year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
