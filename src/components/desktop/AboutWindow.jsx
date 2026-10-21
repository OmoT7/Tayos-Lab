import { ABOUT } from "../../data.js";
import { HEADING, Placeholder, Squiggle, Window, bodyStyle } from "./ui.jsx";

// One "when / what happened" row of the Lab Log grid.
function LogRow({ when, what }) {
  return (
    <>
      <b>{when}</b>
      <span>{what}</span>
    </>
  );
}

export default function AboutWindow({ onClose, openContact }) {
  return (
    <Window label="About me" title="about_me.txt — Notepad" onClose={onClose} width={900}>
      <div className="pbody" style={bodyStyle(26)}>
        <div className="pgrid" style={{ display: "grid", gridTemplateColumns: "220px minmax(0, 1fr)", gap: 32, alignItems: "start" }}>
          <div style={{ maxWidth: 220 }}>
            {ABOUT.photo ? (
              <img src={ABOUT.photo} alt="Tayo" style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", border: "3px solid #000" }} />
            ) : (
              <Placeholder label="PHOTO" ratio="4 / 5" />
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 14, lineHeight: 1.6 }}>
            <div>
              <h2 className="marker" style={HEADING}>Hi, I'm Tayo.</h2>
              <Squiggle width={220} />
            </div>
            <p style={{ margin: 0 }}>{ABOUT.intro}</p>
            <p style={{ margin: 0 }}>{ABOUT.why}</p>
            <p style={{ margin: 0 }}><b>status:</b> {ABOUT.status}</p>
            <p style={{ margin: 0 }}><b>outside the lab:</b> {ABOUT.outside}</p>
          </div>
        </div>

        <div>
          <div className="marker" style={{ fontSize: 26, marginBottom: 10 }}>Lab Log</div>
          <div style={{ display: "grid", gridTemplateColumns: "110px minmax(0, 1fr)", columnGap: 18, rowGap: 10, fontSize: 14, lineHeight: 1.45 }}>
            {ABOUT.log.map(([when, what]) => (
              <LogRow key={what} when={when} what={what} />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          <a className="row ink" href={ABOUT.resume} download="Omotayo_Oludemi_Resume.pdf">résumé.pdf ↗</a>
          <button className="row ink" onClick={openContact}>run contact.exe →</button>
        </div>
      </div>
    </Window>
  );
}
