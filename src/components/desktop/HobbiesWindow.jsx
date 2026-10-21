import { HOBBIES } from "../../data.js";
import { HEADING, Squiggle, Window, bodyStyle } from "./ui.jsx";

// The hidden window unlocked by the USB stick in the office.
export default function HobbiesWindow({ onClose }) {
  return (
    <Window label="Hidden hobbies folder" title="C:\TAYO\.hidden\hobbies — CLASSIFIED" onClose={onClose} dark>
      <div className="pbody" style={bodyStyle(22)}>
        <div>
          <h2 className="marker" style={HEADING}>how did you find this.....</h2>
          <Squiggle width={300} />
          <div className="hand" style={{ fontSize: 24 }}>ok fine. here's what I do when I'm not shipping code.</div>
        </div>
        <div className="hgrid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 18 }}>
          {HOBBIES.map((hobby) => (
            <div key={hobby.file} className="ink" style={{ border: "3px solid #000", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6, fontSize: 13, lineHeight: 1.5 }}>
              <div style={{ fontWeight: 600, fontSize: 15 }}>{hobby.file}</div>
              <div>{hobby.line}</div>
              <div style={{ color: "#555" }}>{hobby.ph}</div>
            </div>
          ))}
        </div>
        <div className="hand" style={{ fontSize: 22 }}>p.s. put the USB back where you found it.</div>
      </div>
    </Window>
  );
}
