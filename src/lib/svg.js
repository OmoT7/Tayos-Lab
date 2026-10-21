// Shared SVG attribute bundles. Spread them onto an <svg> or element:
//   <svg {...SVG_STROKE}>
// Override any single attribute after the spread (e.g. strokeWidth="2.5").

// Hand-drawn line-art look: black outline, no fill, rounded ends.
export const SVG_STROKE = {
  fill: "none",
  stroke: "#000",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

// For <text> inside SVG: solid black fill, no outline.
export const SVG_TEXT = { fill: "#000", stroke: "none" };
