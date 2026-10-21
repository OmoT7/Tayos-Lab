import { SVG_STROKE, SVG_TEXT } from "../../lib/svg.js";

export function Chair({ state, actions }) {
  const spinCls = state.spin === 0 ? "" : state.spin % 2 ? "spinA" : "spinB";
  const whoosh = (cls) => (
    <g className={cls}>
      <path d="M6 58 Q-4 94 6 130" />
      <path d="M-8 76 Q-14 94 -8 112" />
      <path d="M234 58 Q244 94 234 130" />
      <path d="M248 76 Q254 94 248 112" />
      <text x="170" y="12" className="hand" fontSize="24" fontWeight="700" {...SVG_TEXT}>wheee!</text>
    </g>
  );
  return (
    <button className={`prop chairbtn ${spinCls}`} onClick={actions.spinChair} aria-label="Spin the chair" style={{ left: "40%", top: "60.27%", width: "20%", height: "39.07%" }}>
      <svg className="ink" viewBox="0 -48 240 293" {...SVG_STROKE}>
        {whoosh("whoA")}
        {whoosh("whoB")}
        {/* base: gas lift, 5-star legs, casters */}
        <g>
          <rect x="114" y="152" width="12" height="56" fill="#fff" />
          <path d="M120 208 L36 222 M120 208 L78 230 M120 208 L120 232 M120 208 L162 230 M120 208 L204 222" />
          <ellipse cx="120" cy="208" rx="12" ry="5" fill="#fff" />
          {[[36, 228], [78, 236], [120, 238], [162, 236], [204, 228]].map(([cx, cy]) => (
            <circle key={cx} cx={cx} cy={cy} r="6" fill="#fff" />
          ))}
        </g>
        <g transform="translate(0 -30)">
          <g className="chairback">
            <g className="cback">
              <rect x="26" y="164" width="188" height="20" rx="10" fill="#fff" />
              <line x1="21" y1="142" x2="21" y2="170" />
              <line x1="219" y1="142" x2="219" y2="170" />
              <rect x="6" y="130" width="30" height="12" rx="6" fill="#fff" />
              <rect x="204" y="130" width="30" height="12" rx="6" fill="#fff" />
              <line x1="106" y1="18" x2="106" y2="32" />
              <line x1="134" y1="18" x2="134" y2="32" />
              <rect x="80" y="-12" width="80" height="30" rx="13" fill="#fff" />
              <rect x="36" y="30" width="168" height="138" rx="30" fill="#fff" />
              <rect x="50" y="44" width="140" height="110" rx="22" strokeWidth="2" strokeDasharray="3 9" />
              <rect x="86" y="76" width="68" height="24" rx="4" fill="#fff" strokeWidth="2" />
              <text x="120" y="93" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="12" fontWeight="600" {...SVG_TEXT}>LAB 001</text>
            </g>
            <g className="cfront">
              <line x1="106" y1="18" x2="106" y2="32" />
              <line x1="134" y1="18" x2="134" y2="32" />
              <rect x="80" y="-12" width="80" height="30" rx="13" fill="#fff" />
              <path d="M96 3 Q120 10 144 3" strokeWidth="2" />
              <rect x="40" y="30" width="160" height="128" rx="28" fill="#fff" />
              <path d="M80 38 Q76 94 80 150 M120 36 L120 152 M160 38 Q164 94 160 150" strokeWidth="2" strokeDasharray="4 5" />
              <path d="M20 160 Q20 150 32 150 L208 150 Q220 150 220 160 L222 178 Q222 190 208 190 L32 190 Q18 190 18 178 Z" fill="#fff" />
              <path d="M30 176 Q120 186 210 176" strokeWidth="2" />
              <path d="M24 150 L24 124 L48 124" />
              <path d="M216 150 L216 124 L192 124" />
              <rect x="8" y="116" width="44" height="12" rx="6" fill="#fff" />
              <rect x="188" y="116" width="44" height="12" rx="6" fill="#fff" />
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
}
