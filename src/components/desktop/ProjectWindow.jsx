import { SVG_STROKE } from "../../lib/svg.js";
import { HEADING, Placeholder, Squiggle, Window, bodyStyle } from "./ui.jsx";

function Field({ title, children }) {
  return (
    <div>
      <div style={{ fontWeight: 600 }}>{title}</div>
      <div>{children}</div>
    </div>
  );
}

export default function ProjectWindow({ project, onClose }) {
  return (
    <Window label={project.name} title={`${project.num} — project.exe`} onClose={onClose}>
      <div className="pbody" style={bodyStyle(26)}>
        <div>
          <h2 className="marker" style={HEADING}>{project.name}</h2>
          <Squiggle width={260} />
          <div style={{ fontSize: 14 }}>{project.tag}</div>
        </div>

        <div className="pgrid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 32 }}>
          {project.image ? (
            <img src={project.image} alt={`${project.name} screenshot`} style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", border: "3px solid #000" }} />
          ) : (
            <Placeholder label="IMG" ratio="16 / 10" />
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 14, lineHeight: 1.55 }}>
            <Field title="Overview">{project.overview}</Field>
            <Field title="My role">{project.role}</Field>
            <Field title="Results">{project.results}</Field>
          </div>
        </div>

        {project.stack?.length > 0 && (
          <div>
            <div className="marker" style={{ fontSize: 26, marginBottom: 12 }}>Tech Stack</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
              {project.stack.map((tech, i) => (
                <div key={i} className="chip ink">{tech}</div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a className="gh ink" href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Open the GitHub repo">
            <svg width="26" height="26" viewBox="0 0 26 26" {...SVG_STROKE} stroke="currentColor">
              <path d="M11 5 H5 V21 H21 V15" />
              <path d="M14 4 H22 V12" />
              <line x1="22" y1="4" x2="11" y2="15" />
            </svg>
          </a>
          <span className="hand" style={{ fontSize: 28 }}>← GitHub link</span>
        </div>
      </div>
    </Window>
  );
}
