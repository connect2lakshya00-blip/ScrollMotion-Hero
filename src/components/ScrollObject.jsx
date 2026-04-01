/**
 * Inline SVG sports car — no external assets required.
 * Includes body, roof, windows, wheels, lights, and a radial glow.
 */
export default function ScrollObject({ refProp }) {
  return (
    <div
      ref={refProp}
      className="scroll-object absolute bottom-0 left-1/2"
      style={{
        width: 'min(760px, 92vw)',
        transform: 'translateX(-50%) translateX(60vw)',
        opacity: 0,
        willChange: 'transform, opacity',
      }}
    >
      {/* Radial glow under car */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '70%',
          height: '60px',
          background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.55) 0%, transparent 70%)',
          filter: 'blur(12px)',
        }}
      />

      <svg
        viewBox="0 0 960 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="Sports car"
        role="img"
      >
        {/* ── Ground shadow ── */}
        <ellipse cx="480" cy="308" rx="390" ry="16" fill="rgba(0,0,0,0.45)" />

        {/* ── Car body (lower) ── */}
        <path
          d="M60 228 Q75 168 185 138 Q295 108 480 102 Q665 96 775 138 Q865 168 880 228 Z"
          fill="url(#bodyGrad)"
        />

        {/* ── Body highlight strip ── */}
        <path
          d="M90 215 Q480 200 870 215"
          stroke="url(#highlightGrad)"
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* ── Roof ── */}
        <path
          d="M255 138 Q320 58 480 48 Q640 38 705 138 Z"
          fill="url(#roofGrad)"
        />

        {/* ── Roof highlight ── */}
        <path
          d="M290 130 Q400 72 480 66 Q560 60 640 100"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
        />

        {/* ── Front windshield ── */}
        <path
          d="M275 136 Q340 68 480 58 Q530 55 560 66 L590 136 Z"
          fill="rgba(140,190,255,0.12)"
          stroke="rgba(140,190,255,0.25)"
          strokeWidth="1"
        />

        {/* ── Rear window ── */}
        <path
          d="M590 136 L618 72 Q660 50 700 76 L718 136 Z"
          fill="rgba(140,190,255,0.08)"
          stroke="rgba(140,190,255,0.18)"
          strokeWidth="1"
        />

        {/* ── Door line ── */}
        <path
          d="M370 136 L360 228"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        <path
          d="M590 136 L600 228"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />

        {/* ── Indigo side stripe ── */}
        <path
          d="M90 210 Q480 194 870 210"
          stroke="url(#stripeGrad)"
          strokeWidth="2.5"
          opacity="0.7"
        />

        {/* ── Front wheel ── */}
        <circle cx="215" cy="238" r="58" fill="url(#tireGrad)" />
        <circle cx="215" cy="238" r="42" fill="#0a0a0a" />
        {/* spokes */}
        {[0,60,120,180,240,300].map((deg, i) => (
          <line
            key={i}
            x1="215" y1="238"
            x2={215 + 34 * Math.cos((deg * Math.PI) / 180)}
            y2={238 + 34 * Math.sin((deg * Math.PI) / 180)}
            stroke="#2a2a3a"
            strokeWidth="3"
          />
        ))}
        <circle cx="215" cy="238" r="12" fill="url(#hubGrad)" />
        <circle cx="215" cy="238" r="5" fill="#fff" opacity="0.3" />

        {/* ── Rear wheel ── */}
        <circle cx="710" cy="238" r="58" fill="url(#tireGrad)" />
        <circle cx="710" cy="238" r="42" fill="#0a0a0a" />
        {[0,60,120,180,240,300].map((deg, i) => (
          <line
            key={i}
            x1="710" y1="238"
            x2={710 + 34 * Math.cos((deg * Math.PI) / 180)}
            y2={238 + 34 * Math.sin((deg * Math.PI) / 180)}
            stroke="#2a2a3a"
            strokeWidth="3"
          />
        ))}
        <circle cx="710" cy="238" r="12" fill="url(#hubGrad)" />
        <circle cx="710" cy="238" r="5" fill="#fff" opacity="0.3" />

        {/* ── Headlight (right / front) ── */}
        <ellipse cx="872" cy="200" rx="20" ry="11" fill="url(#headlightGrad)" opacity="0.95" />
        <ellipse cx="872" cy="200" rx="38" ry="20" fill="url(#headlightGlow)" opacity="0.25" />
        {/* DRL strip */}
        <path
          d="M855 192 Q872 188 889 192"
          stroke="rgba(200,220,255,0.6)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* ── Tail light (left / rear) ── */}
        <ellipse cx="68" cy="200" rx="16" ry="9" fill="#e53e3e" opacity="0.9" />
        <ellipse cx="68" cy="200" rx="30" ry="18" fill="#ff0000" opacity="0.12" />

        {/* ── Front bumper detail ── */}
        <path
          d="M840 228 Q870 228 885 240 L870 248 Q855 240 840 240 Z"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />

        {/* ── Exhaust ── */}
        <ellipse cx="95" cy="244" rx="10" ry="6" fill="#1a1a2e" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <ellipse cx="112" cy="244" rx="10" ry="6" fill="#1a1a2e" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#12122a" />
            <stop offset="35%"  stopColor="#16213e" />
            <stop offset="70%"  stopColor="#1a2550" />
            <stop offset="100%" stopColor="#0f1e40" />
          </linearGradient>

          <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#1c1c3a" />
            <stop offset="100%" stopColor="#0a0a18" />
          </linearGradient>

          <linearGradient id="highlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="transparent" />
            <stop offset="20%"  stopColor="rgba(255,255,255,0.08)" />
            <stop offset="50%"  stopColor="rgba(255,255,255,0.14)" />
            <stop offset="80%"  stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <linearGradient id="stripeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="transparent" />
            <stop offset="15%"  stopColor="#6366f1" />
            <stop offset="50%"  stopColor="#818cf8" />
            <stop offset="85%"  stopColor="#6366f1" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <radialGradient id="tireGrad" cx="50%" cy="50%">
            <stop offset="0%"   stopColor="#222230" />
            <stop offset="100%" stopColor="#0d0d14" />
          </radialGradient>

          <radialGradient id="hubGrad" cx="50%" cy="50%">
            <stop offset="0%"   stopColor="#818cf8" />
            <stop offset="100%" stopColor="#4338ca" />
          </radialGradient>

          <radialGradient id="headlightGrad" cx="50%" cy="50%">
            <stop offset="0%"   stopColor="#ffffff" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </radialGradient>

          <radialGradient id="headlightGlow" cx="50%" cy="50%">
            <stop offset="0%"   stopColor="#bfdbfe" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
