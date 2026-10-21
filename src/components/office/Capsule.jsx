import { SVG_STROKE, SVG_TEXT } from "../../lib/svg.js";

export function Capsule({ state, actions }) {
  return (
    <button className="prop chairbtn" onClick={actions.toggleDuck} aria-label={state.duck ? "Close the capsule" : "Open the capsule toy on the floor"} style={{ left: "71.67%", top: "80%", width: "12.5%", height: "16.53%" }}>
      <svg className="ink" viewBox="0 0 150 124" {...SVG_STROKE}>
        {!state.duck ? (
          <g className="capIdle">
            <path d="M51 96 A24 24 0 0 1 99 96 Z" fill="#fff" />
            <path d="M51 96 A24 24 0 0 0 99 96 Z" fill="#000" />
            <line x1="60" y1="84" x2="68" y2="78" strokeWidth="2" />
            <line x1="68" y1="90" x2="80" y2="80" strokeWidth="2" />
            <text x="106" y="74" className="hand" fontSize="26" fontWeight="700" {...SVG_TEXT}>?</text>
          </g>
        ) : (
          <g>
            <g className="halfL"><path d="M8 118 A20 20 0 0 1 48 118 Z" fill="#000" /></g>
            <g className="halfR"><path d="M104 118 A20 20 0 0 1 144 118 Z" fill="#fff" transform="rotate(24 124 110)" /></g>
            <g className="spark">
              <line x1="40" y1="66" x2="30" y2="56" />
              <line x1="64" y1="56" x2="64" y2="42" />
              <line x1="88" y1="66" x2="98" y2="56" />
            </g>
            <g className="duckIn">
              <g className="duckBob">
                <ellipse cx="80" cy="104" rx="22" ry="14" fill="#fff" />
                <circle cx="64" cy="82" r="11" fill="#fff" />
                <path d="M53 81 L43 85 L53 89" fill="#000" />
                <circle cx="61" cy="79" r="1.8" fill="#000" />
                <path d="M78 100 Q90 95 94 107" />
              </g>
            </g>
            <g className="quack">
              <text x="96" y="58" className="hand" fontSize="24" fontWeight="700" {...SVG_TEXT}>quack.</text>
              <text x="92" y="78" className="hand" fontSize="15" {...SVG_TEXT}>(debug buddy)</text>
            </g>
          </g>
        )}
      </svg>
    </button>
  );
}
