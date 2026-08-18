// Custom animated 3D-style neumorphic illustration of a developer workstation —
// monitor with live code, laptop, and phone. Built in-house (no stock photo,
// no real-person likeness) to keep the hero visual honest and on-brand.
export default function Portrait() {
  return (
    <div className="illustration-wrap">
      <div className="illustration-card neu-out">
        <svg
          viewBox="0 0 400 360"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Illustration of a developer workstation with a desktop monitor, laptop, and phone"
        >
          <defs>
            <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent-2)" />
            </linearGradient>
          </defs>

          <rect x="20" y="270" width="360" height="14" rx="7" fill="var(--text-dim)" opacity="0.18" />
          <rect x="40" y="284" width="14" height="50" fill="var(--text-dim)" opacity="0.14" />
          <rect x="346" y="284" width="14" height="50" fill="var(--text-dim)" opacity="0.14" />

          <g className="float-slow">
            <rect x="110" y="70" width="180" height="130" rx="14" fill="var(--base)" stroke="var(--text-dim)" strokeOpacity="0.15" strokeWidth="2" />
            <rect x="122" y="82" width="156" height="106" rx="6" fill="url(#screenGrad)" opacity="0.16" />
            <rect className="type-line" x="134" y="96" width="90" height="6" rx="3" fill="var(--accent-2)" opacity="0.85" />
            <rect className="type-line" x="134" y="112" width="120" height="6" rx="3" fill="var(--text-dim)" opacity="0.55" style={{ animationDelay: '.3s' }} />
            <rect className="type-line" x="134" y="128" width="70" height="6" rx="3" fill="var(--accent)" opacity="0.8" style={{ animationDelay: '.6s' }} />
            <rect className="type-line" x="134" y="144" width="105" height="6" rx="3" fill="var(--text-dim)" opacity="0.55" style={{ animationDelay: '.9s' }} />
            <rect className="type-line" x="134" y="160" width="50" height="6" rx="3" fill="var(--accent-2)" opacity="0.85" style={{ animationDelay: '1.2s' }} />
            <rect x="188" y="200" width="24" height="20" fill="var(--text-dim)" opacity="0.18" />
            <rect x="164" y="220" width="72" height="8" rx="4" fill="var(--text-dim)" opacity="0.18" />
          </g>

          <g transform="translate(20,190)">
            <rect x="0" y="40" width="110" height="8" rx="4" fill="var(--text-dim)" opacity="0.2" />
            <rect x="6" y="-14" width="98" height="58" rx="8" fill="var(--base)" stroke="var(--text-dim)" strokeOpacity="0.15" strokeWidth="2" />
            <rect x="14" y="-6" width="82" height="42" rx="4" fill="url(#screenGrad)" opacity="0.14" />
            <circle className="glow-dot" cx="24" cy="4" r="3" fill="var(--live)" />
            <rect className="type-line" x="34" y="2" width="52" height="4" rx="2" fill="var(--text-dim)" opacity="0.5" />
            <rect className="type-line" x="24" y="14" width="62" height="4" rx="2" fill="var(--accent-2)" opacity="0.7" style={{ animationDelay: '.5s' }} />
            <rect className="type-line" x="24" y="24" width="40" height="4" rx="2" fill="var(--text-dim)" opacity="0.5" style={{ animationDelay: '1s' }} />
          </g>

          <g className="float-slow" transform="translate(300,205)" style={{ animationDelay: '1.4s' }}>
            <rect x="0" y="0" width="34" height="60" rx="8" fill="var(--base)" stroke="var(--text-dim)" strokeOpacity="0.15" strokeWidth="2" />
            <rect x="5" y="7" width="24" height="42" rx="3" fill="url(#screenGrad)" opacity="0.16" />
            <circle className="glow-dot" cx="17" cy="16" r="2" fill="var(--accent-2)" style={{ animationDelay: '.2s' }} />
            <rect x="9" y="24" width="16" height="3" rx="1.5" fill="var(--text-dim)" opacity="0.5" />
            <rect x="9" y="31" width="12" height="3" rx="1.5" fill="var(--text-dim)" opacity="0.5" />
          </g>

          <g transform="translate(150,236)">
            <rect x="0" y="0" width="22" height="24" rx="4" fill="var(--text-dim)" opacity="0.2" />
            <path d="M22 6 Q32 6 32 14 Q32 22 22 20" fill="none" stroke="var(--text-dim)" strokeOpacity="0.2" strokeWidth="3" />
          </g>

          <g transform="translate(330,230)" className="float-slow" style={{ animationDelay: '.8s' }}>
            <rect x="0" y="18" width="20" height="18" rx="3" fill="var(--text-dim)" opacity="0.18" />
            <path
              d="M10 18 C4 6 -2 8 2 -2 M10 18 C16 6 22 8 18 -2 M10 18 C10 4 10 2 10 -6"
              stroke="var(--live)"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}
