/**
 * Impact metrics matching the reference style —
 * percentage value + short description, stacked vertically with a left accent bar.
 */
const STATS = [
  { value: '58%',  label: 'Increase in pick up point use' },
  { value: '23%',  label: 'Decreased in customer phone calls' },
  { value: '27%',  label: 'Increase in pick up point use' },
  { value: '40%',  label: 'Decreased in customer phone calls' },
]

export default function Stats() {
  return (
    <div className="flex flex-col gap-5 mt-12 w-full max-w-sm">
      {STATS.map(({ value, label }) => (
        <div
          key={label + value}
          className="stat-item flex items-center gap-4"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Left accent bar */}
          <div
            className="flex-shrink-0 w-1 rounded-full"
            style={{
              height: '36px',
              background: 'linear-gradient(to bottom, #6366f1, #818cf8)',
            }}
          />
          <div>
            <span
              className="font-black text-white"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', lineHeight: 1 }}
            >
              {value}
            </span>
            <span
              className="ml-2 font-medium"
              style={{
                fontSize: 'clamp(0.7rem, 1.4vw, 0.9rem)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
