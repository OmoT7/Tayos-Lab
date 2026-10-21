import { WORLDLINES } from "../../data.js";
import { SVG_STROKE, SVG_TEXT } from "../../lib/svg.js";

// Worldline poster: x positions of the 8 glass tubes in the drawing (SVG units)
// and the matching left offsets (%) of the digits overlaid on them.
const TUBE_X = [17, 50, 83, 116, 149, 182, 215, 248];
const TUBE_LEFT = ["5.86%", "17.24%", "28.62%", "40%", "51.38%", "62.76%", "74.14%", "85.52%"];

export function StickyNote({ state, actions }) {
  return (
    <button className="prop cq" onClick={actions.toggleFriday} aria-label="Sticky note: ship it" style={{ left: "6.67%", top: "13.87%", width: "11.67%", height: "14.4%" }}>
      <svg className="ink" viewBox="0 0 140 108" {...SVG_STROKE}>
        <g transform="rotate(-3 70 54)">
          <rect x="8" y="8" width="124" height="92" fill="#fff" />
          <path d="M108 8 L132 8 L132 30" strokeWidth="2" />
          <text x="70" y="48" textAnchor="middle" className="hand" fontSize="30" fontWeight="700" {...SVG_TEXT}>ship it</text>
        </g>
      </svg>
      <div className="ov" style={{ transform: "rotate(-3deg)" }}>
        <div key={String(state.friday)} className={`hand ${state.friday ? "flip" : ""}`} style={{ position: "absolute", left: 0, right: 0, top: "56%", height: "22%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14.3cqw", color: "#000", lineHeight: 1 }}>
          {state.friday ? "it's friday. no." : "(not on fridays)"}
        </div>
      </div>
    </button>
  );
}

export function WorldlinePoster({ state, actions }) {
  const value = WORLDLINES[state.wl % WORLDLINES.length];
  return (
    <button className="prop cq" onClick={actions.shiftWorldline} aria-label={`Worldline divergence meter poster: ${value}`} style={{ left: "69.17%", top: "5.33%", width: "24.17%", height: "22.67%" }}>
      <svg className="ink" viewBox="0 0 290 170" {...SVG_STROKE}>
        <g transform="rotate(2 145 85)">
          <rect x="5" y="8" width="280" height="156" fill="#fff" />
          <circle cx="145" cy="8" r="5" fill="#000" />
          <text x="145" y="32" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="13" fontWeight="600" {...SVG_TEXT}>WORLDLINE DIVERGENCE</text>
          {TUBE_X.map((x) => (
            <rect key={x} x={x} y="42" width="27" height="62" rx="12" />
          ))}
          <line x1="12" y1="110" x2="280" y2="110" />
        </g>
      </svg>
      <div className="ov" style={{ transform: "rotate(2deg)" }}>
        <div key={state.wl} className={state.wl ? "flip" : ""} style={{ position: "absolute", inset: 0 }}>
          {value.split("").map((ch, i) => (
            <span key={i} className="tube" style={{ left: TUBE_LEFT[i] }}>{ch}</span>
          ))}
        </div>
        <div className="hand" style={{ position: "absolute", left: 0, right: 0, top: "69%", height: "20%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9cqw", fontWeight: 700, color: "#000", lineHeight: 1 }}>
          {state.wl % WORLDLINES.length === 0 ? "El Psy Kongroo." : "worldline shifted!"}
        </div>
      </div>
    </button>
  );
}

export function WorksOnMyMachine({ state, actions }) {
  return (
    <button className="prop" onClick={actions.toggleStamp} aria-label="Poster: it works on my machine" style={{ left: "2.33%", top: "31.47%", width: "12.5%", height: "26.13%" }}>
      <svg className="ink" viewBox="0 0 150 196" {...SVG_STROKE}>
        <g transform="rotate(-2 75 98)">
          <rect x="6" y="6" width="138" height="184" fill="#fff" />
          <circle cx="75" cy="6" r="4" fill="#000" />
          <text x="75" y="42" textAnchor="middle" className="marker" fontSize="22" {...SVG_TEXT}>IT WORKS</text>
          <text x="75" y="68" textAnchor="middle" className="marker" fontSize="22" {...SVG_TEXT}>ON MY</text>
          <text x="75" y="94" textAnchor="middle" className="marker" fontSize="22" {...SVG_TEXT}>MACHINE</text>
          <circle cx="75" cy="142" r="30" />
          <circle cx="75" cy="142" r="24" strokeWidth="1.5" strokeDasharray="3 4" />
          <path d="M62 142 L71 152 L89 130" strokeWidth="4" />
          {state.stamped && (
            <g transform="rotate(-18 75 104)">
              <rect x="8" y="80" width="134" height="48" fill="#fff" strokeWidth="4" />
              <rect x="14" y="86" width="122" height="36" strokeWidth="1.5" />
              <text x="75" y="112" textAnchor="middle" className="marker" fontSize="22" {...SVG_TEXT}>PROD: NOPE</text>
            </g>
          )}
        </g>
      </svg>
    </button>
  );
}
