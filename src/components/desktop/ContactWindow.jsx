import { CONTACT } from "../../data.js";
import { SVG_STROKE } from "../../lib/svg.js";
import { HEADING, Squiggle, Window, bodyStyle } from "./ui.jsx";

// Icons inherit the row's text color so they invert on hover.
const ICON = { ...SVG_STROKE, stroke: "currentColor", strokeWidth: 2.5 };

const EmailIcon = () => (
  <svg width="28" height="22" viewBox="0 0 28 22" {...ICON}><rect x="2" y="2" width="24" height="18" /><path d="M2 3 L14 12 L26 3" /></svg>
);
const LinkedInIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" {...ICON}><rect x="2" y="2" width="24" height="24" rx="3" /><line x1="8" y1="12" x2="8" y2="21" /><circle cx="8" cy="7.5" r="1" fill="currentColor" /><path d="M13 21 V12 M13 15 Q15 12 18 12 Q21 12 21 16 V21" /></svg>
);
const GitHubIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" {...ICON}><circle cx="8" cy="6" r="3" /><circle cx="8" cy="22" r="3" /><circle cx="20" cy="10" r="3" /><line x1="8" y1="9" x2="8" y2="19" /><path d="M20 13 Q20 17 8 18" /></svg>
);
const ResumeIcon = () => (
  <svg width="24" height="28" viewBox="0 0 24 28" {...ICON}><path d="M2 2 H15 L22 9 V26 H2 Z" /><path d="M15 2 V9 H22" /></svg>
);

function ContactRow({ href, icon, title, value, external, download }) {
  return (
    <a className="row ink" href={href} {...(download ? { download: download } : {})} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {icon}
      <span><b>{title}</b><br />{value}</span>
      <span style={{ marginLeft: "auto" }}>↗</span>
    </a>
  );
}

export default function ContactWindow({ onClose }) {
  return (
    <Window label="Contact" title="contact.exe" onClose={onClose} width={640}>
      <div className="pbody" style={bodyStyle(18)}>
        <div>
          <h2 className="marker" style={HEADING}>Send a signal</h2>
          <Squiggle width={230} />
          <div className="hand" style={{ fontSize: 24 }}>response time: faster than my code compiles</div>
        </div>
        <ContactRow icon={<EmailIcon />} title="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
        <ContactRow icon={<LinkedInIcon />} title="LinkedIn" value={CONTACT.linkedin.label} href={CONTACT.linkedin.url} external />
        <ContactRow icon={<GitHubIcon />} title="GitHub" value={CONTACT.github.label} href={CONTACT.github.url} external />
        <ContactRow icon={<ResumeIcon />} title="Résumé" value="résumé.pdf" href={CONTACT.resume} download="Omotayo_Oludemi_Resume.pdf" />
      </div>
    </Window>
  );
}
