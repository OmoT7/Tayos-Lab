import { BOOT_LINES } from "../data.js";
import { bootProgress } from "../hooks/useLab.js";

export default function Boot({ state, actions }) {
  const pct = bootProgress(state);
  return (
    <div className="screen" style={{ flexDirection: "column", gap: 30 }}>
      <div style={{ fontSize: 30, fontWeight: 600 }}>
        <span className="type">Loading Tayo's Lab...</span>
        <span className="cursor">█</span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 18 }}>
        <div className="ink" style={{ width: 360, maxWidth: "70vw", height: 26, border: "3px solid #000", boxSizing: "border-box", padding: 3 }}>
          <div style={{ height: "100%", width: `${pct}%`, background: "repeating-linear-gradient(-45deg, #000 0 3px, #fff 3px 8px)" }} />
        </div>
        <svg className="ink" width="60" height="84" viewBox="0 0 60 84" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" aria-hidden="true" style={{ marginBottom: -4 }}>
          <circle cx="30" cy="14" r="10" fill="#fff" />
          <path d="M45 4 Q49 10 45 13 Q41 10 45 4 Z" />
          <line x1="30" y1="24" x2="30" y2="54" />
          <line x1="30" y1="32" x2="17" y2="46" />
          <path d="M30 32 L42 40 L34 46" />
          <line x1="30" y1="54" x2="22" y2="80" />
          <g className="tap">
            <line x1="30" y1="54" x2="40" y2="80" />
            <line x1="40" y1="80" x2="50" y2="80" />
          </g>
        </svg>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 14, minHeight: 100, width: 420, maxWidth: "86vw" }}>
        <div style={{ fontWeight: 600 }}>{pct}%</div>
        {BOOT_LINES.filter((l) => pct >= l.at).map((l) => (
          <div key={l.t}>{l.t}</div>
        ))}
      </div>
      <button className="skip" onClick={actions.skip}>skip intro →</button>
    </div>
  );
}
