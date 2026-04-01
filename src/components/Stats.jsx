/**
 * Impact metrics — layout built with Bootstrap grid (row/col),
 * styled with Tailwind utility classes.
 */
const STATS = [
  { value: '58%',  label: 'Increase in pick up point use' },
  { value: '23%',  label: 'Decreased in customer phone calls' },
  { value: '27%',  label: 'Increase in pick up point use' },
  { value: '40%',  label: 'Decreased in customer phone calls' },
]

export default function Stats() {
  return (
    // Bootstrap container keeps content centered and responsive
    <div className="container mt-12" style={{ maxWidth: '480px' }}>
      <div className="row gy-4">
        {STATS.map(({ value, label }) => (
          <div key={value + label} className="col-12">
            <div
              className="stat-item d-flex align-items-center gap-3"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Left accent bar */}
              <div
                className="flex-shrink-0 rounded-pill"
                style={{
                  width: '4px',
                  height: '38px',
                  background: 'linear-gradient(to bottom, #6366f1, #818cf8)',
                }}
              />
              <div>
                <span
                  className="fw-black text-white"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1 }}
                >
                  {value}
                </span>
                <span
                  className="ms-2 fw-medium"
                  style={{
                    fontSize: 'clamp(0.7rem, 1.4vw, 0.85rem)',
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  {label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
