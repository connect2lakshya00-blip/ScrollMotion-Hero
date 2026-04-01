/**
 * Splits text into individual character spans for GSAP stagger.
 * Each char gets its own .char span — spaces become non-breaking spaces.
 */
export default function SplitText({ text }) {
  return (
    <>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="char inline-block"
          style={{ willChange: 'transform, opacity' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  )
}
