import { SVG_STROKE } from "../../lib/svg.js";

// Style bundles shared by every window.
const OVERLAY = { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, background: "rgba(255, 255, 255, 0.75)" };
const FRAME = { maxWidth: "100%", maxHeight: "100%", overflow: "auto", border: "3px solid #000", background: "#fff", boxShadow: "10px 10px 0 #000" };
const TITLEBAR = { display: "flex", alignItems: "center", gap: 12, padding: "8px 10px 8px 16px", borderBottom: "3px solid #000", fontSize: 14, fontWeight: 600 };

export const HEADING = { margin: 0, fontSize: 40, fontWeight: 400, lineHeight: 1.1 };

// Inner padding + vertical rhythm of a window. The `.pbody` class adds the mobile override in CSS.
export const bodyStyle = (gap) => ({ padding: "26px 36px 30px", display: "flex", flexDirection: "column", gap });

// Wavy underline that sits below window headings.
export function Squiggle({ width }) {
  return (
    <svg width={width} height="12" viewBox={`0 0 ${width} 12`} {...SVG_STROKE}>
      <path d={`M2 8 Q${width * 0.16} 2 ${width * 0.33} 7 T${width * 0.66} 6 T${width - 2} 5`} />
    </svg>
  );
}

// Crossed-out box shown until a real image is added in data.js.
export function Placeholder({ label, ratio }) {
  return (
    <div className="ink" style={{ position: "relative", aspectRatio: ratio, border: "3px solid #000" }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" {...SVG_STROKE} strokeWidth="1.5" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="marker" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "#fff", padding: "4px 14px", fontSize: 30 }}>
        {label}
      </div>
    </div>
  );
}

// A popup window with a title bar and close button. `dark` inverts the title bar.
export function Window({ label, title, onClose, width = 920, dark = false, children }) {
  return (
    <div style={OVERLAY}>
      <div className="pwin" role="dialog" aria-label={label} style={{ ...FRAME, width }}>
        <div style={dark ? { ...TITLEBAR, background: "#000", color: "#fff" } : TITLEBAR}>
          <span>{title}</span>
          <button className={`xbtn${dark ? " on-dark" : ""}`} onClick={onClose} aria-label={`Close ${label}`} style={{ marginLeft: "auto" }}>
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
