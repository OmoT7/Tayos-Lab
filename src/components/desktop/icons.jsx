import { SVG_STROKE } from "../../lib/svg.js";

// Desktop icon artwork + the clickable wrapper that labels it.

export function DesktopIcon({ onClick, label, children }) {
  return (
    <button className="dicon ink" onClick={onClick}>
      {children}
      <span>{label}</span>
    </button>
  );
}

export const AboutIcon = () => (
  <svg width="48" height="58" viewBox="0 0 48 58" {...SVG_STROKE}>
    <path d="M4 4 H32 L44 16 V54 H4 Z" fill="#fff" />
    <path d="M32 4 V16 H44" />
    <line x1="12" y1="26" x2="36" y2="26" />
    <line x1="12" y1="34" x2="36" y2="34" />
    <line x1="12" y1="42" x2="28" y2="42" />
  </svg>
);

export const ContactIcon = () => (
  <svg width="60" height="44" viewBox="0 0 60 44" {...SVG_STROKE}>
    <rect x="3" y="3" width="54" height="38" fill="#fff" />
    <path d="M3 5 L30 26 L57 5" />
  </svg>
);

export const HobbiesIcon = () => (
  <svg width="60" height="48" viewBox="0 0 60 48" {...SVG_STROKE}>
    <path d="M3 8 V45 H57 V12 H28 L24 5 H6 Q3 5 3 8 Z" fill="#000" />
    <text x="30" y="36" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="16" fontWeight="600" fill="#fff" stroke="none">??</text>
  </svg>
);

// Project folder; the flap and "motion lines" animate on hover (see .folder in styles.css).
export const FolderIcon = () => (
  <svg width="150" height="112" viewBox="0 0 150 112" {...SVG_STROKE}>
    <g className="mlines">
      <line x1="152" y1="18" x2="166" y2="8" />
      <line x1="154" y1="40" x2="170" y2="36" />
      <line x1="-2" y1="26" x2="-16" y2="16" />
    </g>
    <path d="M6 22 V104 H144 V30 H72 L62 16 H12 Q6 16 6 22 Z" fill="#fff" />
    <path d="M22 36 H126" strokeDasharray="6 6" />
    <path className="flap" d="M6 46 H144 L140 104 H10 Z" fill="#fff" />
  </svg>
);
