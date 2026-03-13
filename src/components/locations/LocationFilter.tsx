"use client";

import "./LocationFilter.scss";

export type Province = "all" | "alberta" | "manitoba" | "saskatchewan";

const TABS: { label: string; value: Province }[] = [
  { label: "All",          value: "all"          },
  { label: "Alberta",      value: "alberta"      },
  { label: "Manitoba",     value: "manitoba"     },
  { label: "Saskatchewan", value: "saskatchewan" },
];

interface LocationFilterProps {
  active: Province;
  onChange: (province: Province) => void;
}

export default function LocationFilter({ active, onChange }: LocationFilterProps) {
  return (
    <section className="loc-filter">
      <div className="loc-filter__inner">
        <ul className="loc-filter__list">
          {TABS.map(({ label, value }) => (
            <li key={value}>
              <button
                className={`loc-filter__btn${active === value ? " loc-filter__btn--active" : ""}`}
                onClick={() => onChange(value)}
                type="button"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
