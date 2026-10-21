import { PROJECTS } from "../data.js";
import AboutWindow from "./desktop/AboutWindow.jsx";
import ContactWindow from "./desktop/ContactWindow.jsx";
import HobbiesWindow from "./desktop/HobbiesWindow.jsx";
import ProjectWindow from "./desktop/ProjectWindow.jsx";
import { AboutIcon, ContactIcon, DesktopIcon, FolderIcon, HobbiesIcon } from "./desktop/icons.jsx";

const TRAFFIC_LIGHT = { width: 14, height: 14, border: "3px solid #000", borderRadius: "50%" };

// The Portfolio OS screen: desktop icons, the projects window, and whichever popup is open.
export default function Desktop({ state, actions }) {
  const project = state.proj !== null && !state.win ? PROJECTS[state.proj] : null;

  return (
    <div className="bezel" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "6px 22px", borderBottom: "3px solid #000", fontSize: 14, fontWeight: 600 }}>
        <span>Portfolio OS v1.0</span>
        <button onClick={actions.exitLab} className="hand" style={{ fontSize: 24, minHeight: 44 }}>← exit lab</button>
      </div>

      <div style={{ flex: 1, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 28, padding: 24, overflow: "auto", position: "relative" }}>
        <div className="dicons" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <DesktopIcon onClick={() => actions.openWin("about")} label="about_me.txt"><AboutIcon /></DesktopIcon>
          <DesktopIcon onClick={() => actions.openWin("contact")} label="contact.exe"><ContactIcon /></DesktopIcon>
          {state.hobUnlocked && (
            <DesktopIcon onClick={() => actions.openWin("hobbies")} label=".hobbies"><HobbiesIcon /></DesktopIcon>
          )}
        </div>

        <div className="ink" style={{ width: 980, maxWidth: "100%", border: "3px solid #000", background: "#fff", boxShadow: "8px 8px 0 #000" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 16px", borderBottom: "3px solid #000" }}>
            <div style={{ display: "flex", gap: 8 }} aria-hidden="true">
              <span style={TRAFFIC_LIGHT} />
              <span style={TRAFFIC_LIGHT} />
              <span style={{ ...TRAFFIC_LIGHT, background: "#000" }} />
            </div>
            <h1 className="marker" style={{ margin: 0, fontSize: 24, fontWeight: 400 }}>Project & Work Experience Page</h1>
            <span style={{ fontSize: 13, marginLeft: "auto" }}>C:\TAYO\PROJECTS</span>
          </div>

          <div className="fgrid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 28, padding: "36px 48px" }}>
            {PROJECTS.map((p, i) => (
              <button key={p.num} className="folder" onClick={() => actions.openProject(i)} aria-label={`Open project ${p.num}: ${p.name}`}>
                <FolderIcon />
                <span className="marker" style={{ fontSize: 28 }}>{p.num}</span>
                <span style={{ fontSize: 13, textAlign: "center" }}>{p.name}</span>
              </button>
            ))}
          </div>

          <div style={{ borderTop: "3px solid #000", padding: "10px 16px", fontSize: 13 }}>Home &gt; Lab &gt; Projects</div>
        </div>

        {project && <ProjectWindow project={project} onClose={actions.closeProject} />}
        {state.win === "about" && <AboutWindow onClose={actions.closeWin} openContact={() => actions.openWin("contact")} />}
        {state.win === "contact" && <ContactWindow onClose={actions.closeWin} />}
        {state.win === "hobbies" && <HobbiesWindow onClose={actions.closeWin} />}
      </div>
      <div className="scan" />
    </div>
  );
}
