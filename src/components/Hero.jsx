import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 96,
        paddingBottom: 80,
      }}
    >
      {/* Animated dot grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Ambient glow blobs */}
      <div className="animate-float" style={{ position: 'absolute', top: -120, right: -80, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(194,110,74,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div className="animate-float" style={{ position: 'absolute', bottom: -80, left: -60, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(122,139,92,0.14) 0%, transparent 65%)', pointerEvents: 'none', animationDelay: '3s' }} />

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Status badge */}
        <Reveal>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 28,
            padding: '6px 14px',
            borderRadius: 99,
            border: '1px solid rgba(194,110,74,0.3)',
            background: 'rgba(194,110,74,0.08)',
          }}>
            <span className="animate-pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#bf6847', display: 'block', flexShrink: 0 }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#bf6847', fontWeight: 500 }}>
              Open to opportunities
            </span>
          </div>
        </Reveal>

        {/* Name */}
        <Reveal delay={80}>
          <h1
            className="font-heading gradient-text"
            style={{
              fontSize: 'clamp(3rem, 10vw, 6.5rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-3px',
              marginBottom: 20,
            }}
          >
            Yogesh Lakhani
          </h1>
        </Reveal>

        {/* Title line */}
        <Reveal delay={160}>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(13px, 2vw, 16px)',
            color: '#857a6a',
            marginBottom: 28,
            letterSpacing: '0.02em',
          }}>
            <span style={{ color: '#544a3c' }}>Software Engineer</span>
            {' '}·{' '}
            <span style={{ color: '#bf6847' }}>AI &amp; LLM Systems</span>
            {' '}·{' '}
            <span style={{ color: '#544a3c' }}>Full-Stack</span>
          </p>
        </Reveal>

        {/* Bio */}
        <Reveal delay={240}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 17,
            color: '#857a6a',
            lineHeight: 1.85,
            marginBottom: 28,
            maxWidth: 640,
          }}>
            6+ years building scalable AI-driven systems at Bank of America, Morgan Stanley, and early-stage AI startups.
            Specialized in LLM-powered workflows, RAG pipelines, FastAPI microservices, and full-stack
            development with React and Angular.
          </p>
        </Reveal>

        {/* Location */}
        <Reveal delay={300}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 44, color: '#b3a693', fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Dallas, TX · 945-260-8524
          </div>
        </Reveal>

        {/* CTA buttons */}
        <Reveal delay={380}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 60 }}>
            <a
              href="https://github.com/yoginoit39"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                borderRadius: 10,
                background: '#bf6847',
                color: '#f7f2ea',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'all 0.2s',
                boxShadow: '0 6px 20px rgba(194,110,74,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 30px rgba(194,110,74,0.45)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(194,110,74,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yogesh-lakhanii/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                borderRadius: 10,
                background: 'transparent',
                border: '1px solid rgba(120,98,72,0.25)',
                color: '#544a3c',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(122,139,92,0.5)'; e.currentTarget.style.color = '#74855a'; e.currentTarget.style.background = 'rgba(122,139,92,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(120,98,72,0.25)'; e.currentTarget.style.color = '#544a3c'; e.currentTarget.style.background = 'transparent'; }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a
              href="mailto:lakhaniy540@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                borderRadius: 10,
                background: 'transparent',
                border: '1px solid rgba(120,98,72,0.25)',
                color: '#544a3c',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 15,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(194,110,74,0.4)'; e.currentTarget.style.color = '#bf6847'; e.currentTarget.style.background = 'rgba(194,110,74,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(120,98,72,0.25)'; e.currentTarget.style.color = '#544a3c'; e.currentTarget.style.background = 'transparent'; }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email me
            </a>
          </div>
        </Reveal>

        {/* Scroll cue */}
        <button
          onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: '#b3a693',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 12,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#bf6847'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#b3a693'; }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
          scroll to explore
        </button>
      </div>
    </section>
  )
}
