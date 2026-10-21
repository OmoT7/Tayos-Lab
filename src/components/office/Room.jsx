import { SVG_STROKE, SVG_TEXT } from "../../lib/svg.js";

export function Room() {
  return (
    <svg className="ink" viewBox="0 0 1200 750" {...SVG_STROKE} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <line x1="40" y1="720" x2="1160" y2="720" />
      <text x="40" y="706" className="hand" fontSize="22" {...SVG_TEXT} transform="rotate(-2 40 706)">psst: everything in here is clickable</text>

      {/* pendant lamp */}
      <line x1="600" y1="0" x2="600" y2="66" />
      <path d="M566 66 H634 L668 116 H532 Z" fill="#fff" />
      <path d="M586 116 Q600 142 614 116" />
      <g className="flick">
        <line x1="556" y1="140" x2="536" y2="160" />
        <line x1="600" y1="152" x2="600" y2="176" />
        <line x1="644" y1="140" x2="664" y2="160" />
        <line x1="540" y1="124" x2="432" y2="330" strokeDasharray="4 14" />
        <line x1="660" y1="124" x2="768" y2="330" strokeDasharray="4 14" />
        <text x="690" y="96" className="hand" fontSize="28" fontWeight="700" {...SVG_TEXT} transform="rotate(10 690 96)">bzzt</text>
      </g>

      {/* left monitor: about_me.txt */}
      <polygon points="200,252 430,282 430,440 200,452" fill="#fff" />
      <polygon points="214,268 416,294 416,428 214,438" />
      <text x="0" y="0" fontFamily="IBM Plex Mono, monospace" fontSize="19" {...SVG_TEXT} transform="translate(230 307) skewY(5.1)">about_me.txt</text>
      <line x1="244" y1="331" x2="372" y2="339" />
      <line x1="244" y1="354" x2="339" y2="358" />
      <line x1="232" y1="377" x2="299" y2="378" />
      <line x1="244" y1="400" x2="390" y2="399" />
      <line x1="315" y1="446" x2="315" y2="474" />
      <line x1="282" y1="474" x2="348" y2="474" />
      <rect x="398" y="262" width="30" height="30" transform="rotate(9 413 277)" fill="#fff" />
      <line x1="404" y1="272" x2="420" y2="275" />

      {/* right monitor: contact.exe */}
      <polygon points="770,282 1000,252 1000,452 770,440" fill="#fff" />
      <polygon points="784,294 986,268 986,438 784,428" />
      <text x="0" y="0" fontFamily="IBM Plex Mono, monospace" fontSize="18" {...SVG_TEXT} transform="translate(800 322) skewY(-5.1)">&gt; ./contact.exe</text>
      <line x1="802" y1="353" x2="899" y2="349" />
      <line x1="802" y1="374" x2="940" y2="371" />
      <line x1="802" y1="395" x2="871" y2="395" />
      <line x1="885" y1="446" x2="885" y2="474" />
      <line x1="852" y1="474" x2="918" y2="474" />

      {/* desk */}
      <path d="M150 474 H1050" />
      <path d="M150 474 V496 H1050 V474" />
      <line x1="182" y1="496" x2="182" y2="712" />
      <line x1="1018" y1="496" x2="1018" y2="712" />

      {/* mug + steam */}
      <path d="M236 440 V472 H272 V440 Z" fill="#fff" />
      <path d="M272 448 Q292 456 272 466" />
      <g className="steam">
        <path d="M246 430 Q238 418 248 406 Q258 394 248 382" />
        <path d="M262 430 Q254 418 264 406 Q274 394 264 382" />
      </g>

      {/* headphones */}
      <path d="M992 470 Q1018 418 1044 470" />
      <rect x="982" y="452" width="20" height="22" rx="7" fill="#fff" />
      <rect x="1034" y="452" width="20" height="22" rx="7" fill="#fff" />

      {/* keyboard */}
      <path d="M528 470 L672 470 L680 460 L536 460 Z" fill="#fff" />
      <line x1="556" y1="465" x2="644" y2="465" strokeDasharray="4 6" />

      <text x="300" y="196" className="hand" fontSize="38" fontWeight="700" {...SVG_TEXT} transform="rotate(-6 300 196)">click me</text>
      <path d="M418 196 Q456 186 470 236" />
      <path d="M459 226 L470 238 L478 222" />
    </svg>
  );
}
