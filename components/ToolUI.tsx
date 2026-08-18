"use client";

import type { ResultRow } from "@/lib/tax";

interface ResultTableProps {
  rows: ResultRow[];
  summaryLabel?: string;
  summaryValue?: string;
}

export function ResultTable({ rows, summaryLabel, summaryValue }: ResultTableProps) {
  return (
    <div className="tool-results">
      {summaryValue && (
        <div className="tool-results__hero">
          {summaryLabel && (
            <span className="tool-results__hero-label">{summaryLabel}</span>
          )}
          <span className="tool-results__hero-value">{summaryValue}</span>
        </div>
      )}
      <table className="site-table">
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              className={row.highlight ? "tool-results__highlight" : undefined}
            >
              <td>{row.label}</td>
              <td
                className={
                  row.negative ? "tool-results__negative" : undefined
                }
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface ToolFieldProps {
  label: string;
  id: string;
  prefix?: string;
  suffix?: string;
  value: number | string;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export function ToolNumberField({
  label,
  id,
  prefix,
  suffix,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
}: ToolFieldProps) {
  return (
    <div className="tool-field">
      <label className="asc-label" htmlFor={id}>
        {label}
      </label>
      <div className="asc-input-wrap">
        {prefix && (
          <span className="asc-input-prefix" aria-hidden="true">
            {prefix}
          </span>
        )}
        <input
          type="number"
          id={id}
          className={`asc-input${prefix ? "" : " asc-input--no-prefix"}`}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        />
        {suffix && <span className="tool-field__suffix">{suffix}</span>}
      </div>
    </div>
  );
}

interface ToolSelectProps {
  label: string;
  id: string;
  value: string | number;
  options: { value: string | number; label: string }[];
  onChange: (val: string) => void;
}

export function ToolSelect({ label, id, value, options, onChange }: ToolSelectProps) {
  return (
    <div className="tool-field">
      <label className="asc-label" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className="asc-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

interface ToolCheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}

export function ToolCheckbox({ label, id, checked, onChange }: ToolCheckboxProps) {
  return (
    <label className="asc-checkbox-group" htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        className="asc-checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>{label}</span>
    </label>
  );
}

export function ToolCard({ children }: { children: React.ReactNode }) {
  return <div className="tool-card-wrap">{children}</div>;
}
