import { SVG_STROKE } from "../../lib/svg.js";

export function MainMonitor({ state, actions }) {
  return (
    <button className="mon" onClick={actions.clickMonitor} onDragOver={actions.allowDrop} onDrop={actions.dropUsb} aria-label="Turn on the main computer">
      <svg className="ink" viewBox="0 0 290 244" {...SVG_STROKE}>
        <rect className="monframe" x="6" y="6" width="278" height="186" rx="8" fill="#fff" />
        <rect className={state.usb === "plugged" ? "blink2" : "blink"} x="20" y="20" width="250" height="158" fill="#fff" strokeWidth="2" />
        <line x1="145" y1="192" x2="145" y2="232" />
        <line x1="108" y1="238" x2="182" y2="238" />
      </svg>
    </button>
  );
}

export function PluggedUsb() {
  return (
    <>
      <svg className="ink" viewBox="0 0 24 45" {...SVG_STROKE} strokeWidth="2.5" style={{ position: "absolute", left: "58.33%", top: "54.93%", width: "2%", height: "6%", overflow: "visible", pointerEvents: "none" }}>
        <rect x="6" y="0" width="12" height="10" fill="#fff" />
        <rect x="2" y="10" width="20" height="33" rx="4" fill="#fff" />
        <circle className="led" cx="12" cy="35" r="3" fill="#000" />
      </svg>
      <div className="note" style={{ left: "50%", top: "23%" }}>new device detected...</div>
    </>
  );
}
