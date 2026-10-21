// Line coordinates [x1, y1, x2, y2] for the light rays that appear when you hover the door.
const RAYS_TOP = [[200, 126, 116, 30], [240, 126, 194, 64], [280, 126, 252, 30], [320, 126, 320, 64], [360, 126, 388, 30], [400, 126, 446, 64], [440, 126, 524, 30]];
const RAYS_SIDE = [[486, 180, 610, 130], [486, 250, 580, 220], [486, 320, 610, 305], [486, 390, 580, 392], [486, 460, 610, 480], [486, 530, 580, 565], [486, 590, 610, 640]];
const RAYS_LEFT = [[154, 200, 60, 150], [154, 300, 90, 276], [154, 400, 60, 405], [154, 500, 90, 530]];
// Endpoints of the dashed lines radiating from the door's center (292x472 door drawing).
const BURST = [[0, 0], [73, 0], [146, 0], [219, 0], [292, 0], [292, 118], [292, 236], [292, 354], [292, 472], [219, 472], [146, 472], [73, 472], [0, 472], [0, 354], [0, 236], [0, 118]];

export default function Door({ state, actions }) {
  return (
    <div className="screen" onWheel={(e) => e.deltaY > 0 && actions.openDoor()} style={{ flexDirection: "column", gap: 18 }}>
      <div className={`stage ${state.zoom ? "zoom" : ""}`} style={{ width: 640, maxWidth: "100%", height: 560, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
        {/* security camera */}
        <svg className="ink" width="74" height="60" viewBox="0 0 74 60" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" aria-hidden="true" style={{ position: "absolute", top: 6, right: 40 }}>
          <line x1="6" y1="6" x2="22" y2="20" />
          <rect x="14" y="16" width="50" height="30" rx="6" transform="rotate(14 39 31)" fill="#fff" />
          <circle cx="44" cy="34" r="7" />
          <circle className="cursor" cx="24" cy="24" r="3" fill="#000" />
        </svg>
        <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 40, borderTop: "3px solid #000" }} />

        <button className={`doorway ${state.doorOpen ? "open" : ""}`} onClick={actions.openDoor} aria-label="Open the door to Tayo's Lab" style={{ marginBottom: 41 }}>
          <svg className="rays ink" viewBox="0 0 640 700" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" aria-hidden="true">
            {RAYS_TOP.concat(RAYS_SIDE).map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
            ))}
            {RAYS_LEFT.map(([x1, y1, x2, y2], i) => (
              <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} strokeDasharray="10 9" />
            ))}
          </svg>
          <div className="frame">
            <svg viewBox="0 0 292 472" width="100%" height="100%" fill="none" stroke="#000" strokeWidth="1.6" strokeDasharray="5 11" aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
              {BURST.map(([x, y], i) => (
                <line key={i} x1="146" y1="236" x2={x} y2={y} />
              ))}
            </svg>
            <div className="panel ink">
              <svg width="40" height="26" viewBox="0 0 40 26" fill="#fff" stroke="#000" strokeWidth="3" strokeLinejoin="round" aria-hidden="true" style={{ position: "absolute", top: 38, left: "50%", marginLeft: -20 }}>
                <path d="M3 23 L3 6 L12 14 L20 3 L28 14 L37 6 L37 23 Z" />
              </svg>
              <div className="sign marker">
                <span className="tape" style={{ top: -12, left: -18, transform: "rotate(-32deg)" }} />
                <span className="tape" style={{ top: -12, right: -18, transform: "rotate(30deg)" }} />
                TAYO'S
                <br />
                LAB
              </div>
              <div className="hand" style={{ position: "absolute", top: 212, left: 0, right: 0, textAlign: "center", fontSize: 26, transform: "rotate(3deg)" }}>
                knock? (optional)
              </div>
              <div className="hand" style={{ position: "absolute", top: 300, left: 30, border: "2px dashed #000", padding: "2px 10px", fontSize: 20, transform: "rotate(-6deg)" }}>
                experiments in progress
              </div>
              <div style={{ position: "absolute", right: 20, top: 244, width: 20, height: 20, border: "3px solid #000", borderRadius: "50%", background: "#fff" }} />
              <div style={{ position: "absolute", left: 26, right: 26, bottom: 26, height: 46, border: "3px solid #000" }} />
            </div>
          </div>
          <div className="creak hand">creeeak!</div>
        </button>
      </div>
      <div className="hand" style={{ fontSize: 26 }}>hover to peek · click (or scroll) to enter</div>
      <button className="skip" onClick={actions.skip}>skip intro →</button>
    </div>
  );
}
