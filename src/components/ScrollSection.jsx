/**
 * A tall section below the hero that gives scroll room
 * and shows a subtle "after scroll" state.
 */
export default function ScrollSection() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center gap-8 py-40 px-6"
      style={{ minHeight: '100vh', background: '#050505' }}
    >
      <div
        className="w-px h-24 mx-auto"
        style={{ background: 'linear-gradient(to bottom, #6366f1, transparent)' }}
      />
      <p className="text-white/20 text-xs tracking-[0.4em] uppercase">
        Scroll to explore
      </p>
      <div className="max-w-xl text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white/80 leading-tight">
          Built for speed.<br />Designed for impact.
        </h2>
        <p className="mt-6 text-white/40 text-base md:text-lg leading-relaxed">
          ItzFizz delivers premium experiences at every touchpoint — from first
          impression to lasting loyalty.
        </p>
      </div>
    </section>
  )
}
