export function QuestionnaireVisual() {
  return (
    <svg
      viewBox="0 0 640 420"
      className="h-full w-full"
      role="img"
      aria-label="Abstract checklist with connected data points and a completed checkmark."
    >
      <defs>
        <radialGradient id="q-glow" cx="70%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#0070B7" stopOpacity="0.28" />
          <stop offset="45%" stopColor="#63A73A" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#050607" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="420" fill="url(#q-glow)" />

      {[
        [72, 86],
        [148, 54],
        [236, 98],
        [318, 46],
        [412, 78],
        [508, 52],
        [568, 118],
        [94, 188],
        [186, 220],
        [274, 168],
        [486, 196],
        [560, 248],
        [68, 292],
        [154, 334],
        [248, 308],
        [360, 348],
        [470, 322],
        [566, 356],
      ].map(([x, y], index) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={index % 4 === 0 ? 3.2 : 2.1}
          fill={index % 3 === 0 ? "#63A73A" : "#0070B7"}
          opacity={index % 5 === 0 ? 0.7 : 0.35}
        />
      ))}

      <g stroke="rgba(255,255,255,0.14)" strokeWidth="1" fill="none">
        <path d="M72 86 L148 54 L236 98 L318 46 L412 78 L508 52 L568 118" />
        <path d="M94 188 L186 220 L274 168 L412 78" />
        <path d="M68 292 L154 334 L248 308 L360 348 L470 322 L566 356" />
        <path d="M186 220 L248 308" />
        <path d="M508 52 L486 196 L560 248" />
      </g>

      <g transform="translate(168 78)">
        <rect
          x="0"
          y="0"
          width="214"
          height="268"
          rx="6"
          fill="rgba(11,13,14,0.55)"
          stroke="rgba(255,255,255,0.28)"
        />
        <rect x="22" y="28" width="96" height="8" rx="4" fill="rgba(255,255,255,0.55)" />
        <rect x="22" y="48" width="62" height="6" rx="3" fill="rgba(255,255,255,0.22)" />
        {[0, 1, 2, 3].map((row) => (
          <g key={row} transform={`translate(22 ${86 + row * 36})`}>
            <rect width="18" height="18" rx="3" stroke="rgba(255,255,255,0.38)" fill="none" />
            <rect x="32" y="5" width={row === 2 ? 86 : 118} height="7" rx="3.5" fill="rgba(255,255,255,0.28)" />
          </g>
        ))}
      </g>

      <g transform="translate(338 214)">
        <circle cx="46" cy="46" r="46" fill="#63A73A" />
        <path
          d="M24 48 L40 64 L70 30"
          fill="none"
          stroke="#F7F7F4"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
