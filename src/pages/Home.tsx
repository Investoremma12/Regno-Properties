import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '@/hooks/useInView'
import { useCounter } from '@/hooks/useCounter'
import SectionHeader from '@/components/ui/SectionHeader'
import PropertyCard from '@/components/ui/PropertyCard'
import { PROPERTIES, SERVICES } from '@/data/properties'

/* ── Hero ──────────────────────────────────────────────── */
const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85',
    headline: 'Where Home Meets',
    accent: 'Luxury.',
    sub: 'Premium residential & commercial properties across Lagos State.',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85',
    headline: 'Secure. Affordable.',
    accent: 'Reliable.',
    sub: 'From homes to commercial spaces — quality assured on every transaction.',
  },
  {
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=85',
    headline: 'Build Your Future',
    accent: 'With Regno.',
    sub: 'Expert real estate & construction services in Ojo, Lagos State.',
  },
]

function Hero() {
  const [idx, setIdx] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % HERO_SLIDES.length)
        setFade(true)
      }, 500)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  const slide = HERO_SLIDES[idx]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]">
      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt=""
          className={`w-full h-full object-cover transition-opacity duration-700 ${fade ? 'opacity-30' : 'opacity-0'}`}
        />
        {/* Cinematic letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#080808] to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent z-10" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/50 to-transparent" />
      </div>

      {/* Gold grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[6px]">
              Ojo · Lagos · Nigeria
            </span>
          </div>

          {/* Animated headline */}
          <div className={`mb-6 transition-all duration-500 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1
              className="font-black leading-[0.9] tracking-tight text-white"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
            >
              {slide.headline}
              <br />
              <span className="text-[#c9a84c] italic">{slide.accent}</span>
            </h1>
          </div>

          <p className={`text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg transition-all duration-500 delay-100 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              to="/properties"
              className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8963e] text-black font-black px-8 py-4 rounded-sm text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-[#c9a84c]/20"
            >
              View Properties
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-[#c9a84c]/50 text-white font-semibold px-8 py-4 rounded-sm text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Slide dots */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIdx(i); setFade(true) }}
                className={`rounded-full transition-all duration-300 ${i === idx ? 'w-8 h-0.5 bg-[#c9a84c]' : 'w-2 h-0.5 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tagline strip */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/5">
            {['Secure', 'Affordable', 'Reliable'].map(w => (
              <div key={w} className="py-4 text-center">
                <span className="text-white/30 text-xs font-black uppercase tracking-[4px]">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Stats ─────────────────────────────────────────────── */
const STATS = [
  { target: 500, suffix: '+', label: 'Properties Sold' },
  { target: 200, suffix: '+', label: 'Happy Families' },
  { target: 15, suffix: '+', label: 'Years Experience' },
  { target: 100, suffix: '%', label: 'Quality Assured' },
]

function StatItem({ target, suffix, label, start }: typeof STATS[0] & { start: boolean }) {
  const count = useCounter(target, 1600, start)
  return (
    <div className="text-center py-10 px-4 border-r border-white/5 last:border-r-0">
      <p className="font-black text-4xl sm:text-5xl text-white tabular-nums mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        {count}<span className="text-[#c9a84c]">{suffix}</span>
      </p>
      <p className="text-white/40 text-xs uppercase tracking-widest">{label}</p>
    </div>
  )
}

function StatsSection() {
  const { ref, inView } = useInView(0.2)
  return (
    <div ref={ref} className="bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map(s => <StatItem key={s.label} {...s} start={inView} />)}
        </div>
      </div>
    </div>
  )
}

/* ── Services teaser ────────────────────────────────────── */
function ServicesTeaser() {
  const { ref, inView } = useInView()
  return (
    <section className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionHeader
            eyebrow="What We Offer"
            title="Five Ways We"
            highlight="Serve You."
            sub="From finding your dream home to building it from the ground up — Regno Properties is your complete real estate partner."
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-sm overflow-hidden">
          {SERVICES.map(({ id, title, desc, count }, i) => (
            <div
              key={id}
              className={`bg-[#080808] p-8 group hover:bg-[#0f0f0f] transition-all duration-300 hover:cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <div className="w-10 h-px bg-[#c9a84c]/40 group-hover:bg-[#c9a84c] transition-colors duration-300 mb-6" />
              <p className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[4px] mb-2">{count}</p>
              <h3 className="text-white font-black text-xl mb-3 group-hover:text-[#c9a84c] transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                {title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-white font-bold text-sm tracking-widest uppercase transition-colors duration-200">
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Featured Properties ─────────────────────────────────── */
function FeaturedProperties() {
  const { ref, inView } = useInView()
  const featured = PROPERTIES.filter(p => p.featured)
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionHeader
            eyebrow="Featured Listings"
            title="Hand-Picked"
            highlight="Properties."
          />
          <Link to="/properties" className="flex-shrink-0 inline-flex items-center gap-2 border border-[#c9a84c]/30 hover:border-[#c9a84c] text-[#c9a84c] text-sm font-black px-6 py-3 rounded-sm tracking-widest uppercase transition-all duration-300">
            All Listings
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <PropertyCard key={p.id} property={p} delay={i * 100} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA Banner ───────────────────────────────────────────── */
function CTABanner() {
  const { ref, inView } = useInView()
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=70"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-[#080808]" />
      </div>
      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-12 h-px bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[5px]">Quality Assured</span>
          <div className="w-12 h-px bg-[#c9a84c]" />
        </div>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Ready to Find Your<br />
          <span className="text-[#c9a84c] italic">Perfect Property?</span>
        </h2>
        <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Let our experts guide you through Lagos' finest real estate opportunities.
          Free consultations — no pressure, just results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center bg-[#c9a84c] hover:bg-[#b8963e] text-black font-black px-10 py-4 rounded-sm text-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-xl shadow-[#c9a84c]/15">
            Book Free Consultation
          </Link>
          <a href="tel:07061924577" className="inline-flex items-center justify-center border border-white/20 hover:border-[#c9a84c]/40 text-white font-semibold px-10 py-4 rounded-sm text-sm transition-all duration-300 hover:-translate-y-0.5">
            Call 07061924577
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesTeaser />
      <FeaturedProperties />
      <CTABanner />
    </>
  )
}