import { SVG_STROKE, SVG_TEXT } from "../../lib/svg.js";

export function Drawer({ state, actions }) {
  return (
    <button className={`prop ${state.drawer ? "dopen" : ""}`} onClick={actions.toggleDrawer} aria-label={state.drawer ? "Close the desk drawer" : "Pull out the desk drawer"} style={{ left: "71.33%", top: "65.33%", width: "13.33%", height: "20%" }}>
      <svg className="ink" viewBox="0 0 160 150" {...SVG_STROKE}>
        <g className="dbody">
          <path d="M10 6 L2 40 L158 40 L150 6 Z" fill="#fff" />
          <path d="M18 11 L12 35 L148 35 L142 11 Z" strokeWidth="1.5" strokeDasharray="3 5" />
        </g>
        <g className="dfront">
          <rect x="10" y="6" width="140" height="92" fill="#fff" />
          <line x1="58" y1="50" x2="102" y2="50" />
          <text x="80" y="80" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10" {...SVG_TEXT}>misc.</text>
        </g>
      </svg>
    </button>
  );
}

export function Usb({ state, actions }) {
  if (!(state.drawer && state.usb !== "plugged")) return null;
  const carrying = state.usb === "carry";
  return (
    <button
      className={`usbbtn ${carrying ? "carry" : ""}`}
      draggable="true"
      onDragStart={actions.usbDragStart}
      onClick={actions.grabUsb}
      aria-label={carrying ? "USB stick in hand: drag or click it onto the main computer" : "Pick up the TOP SECRET USB stick"}
      style={{ left: "75.42%", top: "65.87%", width: "5.83%", height: "4%" }}
    >
      <svg className="ink usbpop" viewBox="0 0 70 30" {...SVG_STROKE} strokeWidth="2.5">
        <rect x="2" y="4" width="48" height="22" rx="5" fill="#fff" />
        <rect x="50" y="9" width="16" height="12" fill="#fff" />
        <rect x="55" y="12" width="3" height="3" fill="#000" stroke="none" />
        <rect x="60" y="12" width="3" height="3" fill="#000" stroke="none" />
        <text x="26" y="19" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="7.5" fontWeight="600" {...SVG_TEXT}>TOP SECRET</text>
      </svg>
    </button>
  );
}
