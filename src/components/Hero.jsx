import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: 'calc(100vh - 60px)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 120,
        paddingBottom: 96,
      }}
    >
      {/* Ambient warm washes */}
      <div className="animate-float" style={{ position: 'absolute', top: -160, right: -100, width: 640, height: 640, borderRadius: '50%', background: 'radial-gradient(circle, rgba(176,78,38,0.09) 0%, transparent 62%)', pointerEvents: 'none' }} />
      <div className="animate-float" style={{ position: 'absolute', bottom: -120, left: -80, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,116,74,0.1) 0%, transparent 62%)', pointerEvents: 'none', animationDelay: '4s' }} />

      <div style={{ maxWidth: 1152, width: '100%', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Status line */}
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
            <span className="animate-pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#66744a', display: 'block' }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66744a' }}>
              Open to opportunities — Dallas, TX
            </span>
          </div>
        </Reveal>

        {/* Editorial headline — words rise one by one */}
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(2.9rem, 8.4vw, 6.8rem)',
            lineHeight: 1.02,
            color: '#241c11',
            marginBottom: 36,
            maxWidth: 1000,
          }}
        >
          {[
            { t: 'Yogesh' },
            { t: 'Lakhani' },
            { t: 'builds' },
            { t: 'intelligent', italic: true },
            { t: 'systems', italic: true },
            { t: 'that' },
            { t: 'ship.' },
          ].map((w, i) => (
            <span key={i} className="word-mask">
              <span
                className={`word-rise ${w.italic ? 'font-serif-italic gradient-text' : ''}`}
                style={{ animationDelay: `${120 + i * 90}ms`, letterSpacing: w.italic ? '-0.01em' : undefined }}
              >
                {w.t}
              </span>
              {i < 6 && <span className="word-rise" style={{ animationDelay: `${120 + i * 90}ms` }}>&nbsp;</span>}
            </span>
          ))}
        </h1>

        {/* Sub copy — two column editorial deck */}
        <Reveal delay={200}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start', marginBottom: 56 }}>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#8b7d68', letterSpacing: '0.06em', lineHeight: 2, minWidth: 200 }}>
              Software Engineer<br />
              AI &amp; LLM Systems · Full-Stack<br />
              945-260-8524
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: '#52493a', lineHeight: 1.9, maxWidth: 540 }}>
              Six years across Bank of America, Morgan Stanley, and early-stage AI startups —
              designing LLM-powered workflows, RAG pipelines, and the FastAPI microservices
              and React frontends that carry them into production.
            </p>
          </div>
        </Reveal>

        {/* CTAs — quiet editorial buttons */}
        <Reveal delay={300}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 28 }}>
            <a
              href="https://github.com/yoginoit39"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 30px',
                borderRadius: 999,
                background: '#241c11',
                color: '#f4eee1',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b04e26'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 30px -8px rgba(176,78,38,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#241c11'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              View GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yogesh-lakhanii/"
              target="_blank"
              rel="noreferrer"
              className="link-sweep"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 15, color: '#241c11' }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:lakhaniy540@gmail.com"
              className="link-sweep"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 15, color: '#241c11' }}
            >
              lakhaniy540@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
