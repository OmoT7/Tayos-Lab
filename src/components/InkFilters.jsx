// Three slightly different SVG displacement filters. CSS (.ink / .boil) cycles
// through them to make every line drawing look hand-inked and "boiling".
const FILTER_SEEDS = [2, 9, 17];

export default function InkFilters() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      {FILTER_SEEDS.map((seed, i) => (
        <filter id={`wob${i + 1}`} key={seed}>
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed={seed} />
          <feDisplacementMap in="SourceGraphic" scale="2.6" />
        </filter>
      ))}
    </svg>
  );
}
