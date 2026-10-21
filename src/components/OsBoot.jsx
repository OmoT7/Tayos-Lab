import { HOBBY_OS_LINES, OS_LINES } from "../data.js";
import { osBootProgress } from "../hooks/useLab.js";

const SPIN = ["|", "/", "-", "\\"];

export default function OsBoot({ state, actions }) {
  const hob = state.hobbyBoot;
  const osPct = osBootProgress(state);
  const filled = Math.round(osPct / 5);
  const lines = (hob ? HOBBY_OS_LINES : OS_LINES).filter((l) => osPct >= l.at);

  return (
    <div className={`bezel ${hob ? "hob" : ""}`}>
      <div className="screen" style={{ flexDirection: "column", alignItems: "center", gap: 22, padding: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 560, maxWidth: "100%" }}>
          <div style={{ fontSize: 26, fontWeight: 600 }}>
            <span className="type2">{hob ? "Loading Hobbies OS..." : "Loading Portfolio OS..."}</span> <span>{SPIN[state.tick % SPIN.length]}</span>
            <span className="cursor">█</span>
          </div>
          <div style={{ fontSize: 18, whiteSpace: "nowrap", overflow: "hidden" }}>
            {"[" + "█".repeat(filled) + "░".repeat(20 - filled) + "]"} {osPct}%
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 14, minHeight: 96 }}>
            {lines.map((l) => (
              <div key={l.t}>{l.t}</div>
            ))}
          </div>
          <div className="hand" style={{ fontSize: 24 }}>
            {hob ? "Hobbies OS v0.0 — how did you find this....." : "Portfolio OS v1.0 — Lab Member 001: Tayo"}
          </div>
          {hob && (
            <div className="marker" style={{ alignSelf: "flex-start", border: "4px solid currentColor", padding: "4px 16px", fontSize: 30, transform: "rotate(-8deg)" }}>
              CLASSIFIED
            </div>
          )}
        </div>
      </div>
      <div className="scan" />
      <button className="skip" onClick={actions.skip}>skip intro →</button>
    </div>
  );
}
