import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from './SplitText'
import Stats from './Stats'
import ScrollObject from './ScrollObject'

gsap.registerPlugin(ScrollTrigger)

// Spaced heading exactly matching the reference
const HEADING = 'W E L C O M E  I T Z F I Z Z'

export default function Hero() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const statsRef   = useRef(null)
  const carRef     = useRef(null)
  const bgRef      = useRef(null)
  const glowRef    = useRef(null)
  const scrollCueRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const chars   = headingRef.current.querySelectorAll('.char')
    const stats   = statsRef.current.querySelectorAll('.stat-item')

    const ctx = gsap.context(() => {

      /* ── 1. Hard initial state — prevents FOUC ── */
      gsap.set(chars,          { y: 60,  opacity: 0, rotateX: -45 })
      gsap.set(stats,          { y: 30,  opacity: 0 })
      gsap.set(scrollCueRef.current, { opacity: 0 })

      /* ── 2. Entry timeline (stagger is fine here — not scroll-driven) ── */
      const entryTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      entryTl
        .to(chars, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.035,
        })
        .to(stats, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
        }, '-=0.4')
        .to(scrollCueRef.current, {
          opacity: 1,
          duration: 0.6,
        }, '-=0.2')
        // Clear all GSAP inline styles → clean baseline for ScrollTrigger
        .set(chars, { clearProps: 'all' })
        .set(stats, { clearProps: 'all' })

        /* ── 3. Register scroll animations AFTER entry completes ── */
        .add(() => {

          // Chars exit — NO stagger so reverse scrub is perfectly synchronous
          gsap.fromTo(
            chars,
            { y: 0, opacity: 1 },
            {
              y: -80,
              opacity: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '40% top',
                scrub: 1,
              },
            }
          )

          // Stats exit
          gsap.fromTo(
            stats,
            { y: 0, opacity: 1 },
            {
              y: -40,
              opacity: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '30% top',
                scrub: 1,
              },
            }
          )

          // Scroll cue fades out immediately on scroll
          gsap.fromTo(
            scrollCueRef.current,
            { opacity: 1 },
            {
              opacity: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '10% top',
                scrub: 1,
              },
            }
          )

          // Car drives in from right — tied to full scroll range
          gsap.fromTo(
            carRef.current,
            { x: '65vw', scale: 0.78, opacity: 0 },
            {
              x: '0vw',
              scale: 1,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          )

          // Glow follows car
          gsap.fromTo(
            glowRef.current,
            { opacity: 0, scale: 0.5 },
            {
              opacity: 1,
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '60% top',
                scrub: 1,
              },
            }
          )

          // Parallax background at ~30% scroll speed
          gsap.fromTo(
            bgRef.current,
            { yPercent: 0 },
            {
              yPercent: 28,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            }
          )

          ScrollTrigger.refresh()
        })

    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* 220vh scroll space for car animation */}
      <div style={{ height: '220vh' }}>
        <section
          ref={sectionRef}
          className="sticky top-0 w-full overflow-hidden"
          style={{ height: '100vh' }}
        >

          {/* ── Parallax background ── */}
          <div
            ref={bgRef}
            className="absolute inset-0"
            style={{ height: '140%', top: '-20%', willChange: 'transform' }}
          >
            {/* Dark radial base */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 90% 65% at 50% 38%, #0b0b24 0%, #050508 65%)',
              }}
            />
            {/* Subtle grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),' +
                  'linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)',
                backgroundSize: '80px 80px',
              }}
            />
            {/* Top indigo glow */}
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
              style={{
                top: '-60px',
                width: '800px',
                height: '360px',
                background: '#6366f1',
                filter: 'blur(140px)',
                opacity: 0.13,
              }}
            />
          </div>

          {/* ── Main content ── */}
          <div
            className="relative z-10 flex flex-col items-center justify-center h-full px-6"
            style={{ paddingBottom: '180px' }}
          >

            {/* Heading — spaced chars matching reference */}
            <h1
              ref={headingRef}
              className="text-center font-black uppercase select-none"
              style={{
                fontSize: 'clamp(1.4rem, 4.5vw, 4.8rem)',
                letterSpacing: '0.05em',
                lineHeight: 1.1,
                perspective: '700px',
                perspectiveOrigin: '50% 50%',
                color: '#ffffff',
                padding: '0.2em 0',
              }}
              aria-label="Welcome ItzFizz"
            >
              <SplitText text={HEADING} />
            </h1>

            {/* Stats — vertically stacked, centered */}
            <div ref={statsRef} className="flex justify-center">
              <Stats />
            </div>
          </div>

          {/* ── SVG Car ── */}
          <ScrollObject refProp={carRef} />

          {/* ── Glow behind car ── */}
          <div
            ref={glowRef}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: 'min(640px, 85vw)',
              height: '200px',
              background:
                'radial-gradient(ellipse at center bottom, rgba(99,102,241,0.38) 0%, transparent 70%)',
              filter: 'blur(20px)',
              opacity: 0,
              willChange: 'transform, opacity',
              zIndex: 2,
            }}
          />

          {/* ── Scroll indicator ── */}
          <div
            ref={scrollCueRef}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ zIndex: 40, opacity: 0 }}
          >
            <span
              className="text-[10px] tracking-[0.35em] uppercase font-medium"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Scroll
            </span>
            {/* Animated chevron */}
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <path
                d="M8 0 L8 16 M2 10 L8 16 L14 10"
                stroke="rgba(99,102,241,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 0,4; 0,0"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          {/* ── Bottom fade to black ── */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '130px',
              background: 'linear-gradient(to bottom, transparent, #050508)',
              zIndex: 30,
            }}
          />
        </section>
      </div>

      {/* ── Below-fold content — Bootstrap container/row/col for layout ── */}
      <section
        className="relative w-full py-40"
        style={{ background: '#050508' }}
      >
        {/* Bootstrap container centers and constrains width */}
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-8 col-lg-6 d-flex flex-column align-items-center gap-4">
              <div
                className="mx-auto"
                style={{
                  width: '1px',
                  height: '96px',
                  background: 'linear-gradient(to bottom, #6366f1, transparent)',
                }}
              />
              <h2
                className="font-black text-white leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', opacity: 0.85 }}
              >
                Built for speed.<br />Designed for impact.
              </h2>
              <p
                className="lead"
                style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1rem', lineHeight: 1.7 }}
              >
                ItzFizz delivers premium experiences at every touchpoint — from first
                impression to lasting loyalty.
              </p>
            </div>
          </div>

          {/* Bootstrap 3-column feature cards */}
          <div className="row justify-content-center g-4 mt-5">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Optimised for 60fps scroll performance on all devices.' },
              { icon: '🎯', title: 'Scroll Driven', desc: 'Every animation is tied directly to scroll progress.' },
              { icon: '✨', title: 'Premium Feel', desc: 'GSAP-powered motion with smooth easing and depth.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="col-12 col-sm-6 col-md-4">
                <div
                  className="h-100 p-4 rounded-3 text-center"
                  style={{
                    background: 'rgba(99,102,241,0.06)',
                    border: '1px solid rgba(99,102,241,0.15)',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{icon}</div>
                  <h5 className="fw-bold text-white mb-2">{title}</h5>
                  <p className="mb-0 small" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
