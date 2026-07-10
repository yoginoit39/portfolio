import { useState, useEffect } from 'react'

const links = ['Skills', 'Experience', 'Projects', 'Education']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawer, setDrawer] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setDrawer(false)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.35s ease',
          background: scrolled ? 'rgba(244,238,225,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(36,28,17,0.12)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif-italic"
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 24, color: '#241c11', padding: 0 }}
          >
            Yogesh<span style={{ color: '#b04e26' }}>.</span>
          </button>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 26 }} className="hidden-mobile">
            {links.map((l, i) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="link-sweep"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#52493a',
                  padding: 0,
                }}
              >
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#b04e26', marginRight: 6 }}>0{i + 1}</span>
                {l}
              </button>
            ))}
            <a
              href="mailto:lakhaniy540@gmail.com"
              style={{
                marginLeft: 8,
                padding: '9px 22px',
                borderRadius: 999,
                border: '1px solid #241c11',
                color: '#241c11',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 14,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#241c11'; e.currentTarget.style.color = '#f4eee1'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#241c11'; }}
            >
              Get in touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setDrawer(true)}
            className="show-mobile"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#241c11', padding: 8, display: 'none' }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {drawer && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
          <div onClick={() => setDrawer(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(36,28,17,0.45)' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 290, background: '#f4eee1', borderLeft: '1px solid rgba(36,28,17,0.14)', padding: 28, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
              <span className="font-serif-italic" style={{ fontSize: 22, color: '#241c11' }}>Yogesh<span style={{ color: '#b04e26' }}>.</span></span>
              <button onClick={() => setDrawer(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8b7d68' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {links.map((l, i) => (
                <button key={l} onClick={() => scrollTo(l)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 17, color: '#52493a', padding: '12px 0', textAlign: 'left', borderBottom: '1px solid rgba(36,28,17,0.08)' }}
                >
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#b04e26', marginRight: 10 }}>0{i + 1}</span>
                  {l}
                </button>
              ))}
            </div>
            <a href="mailto:lakhaniy540@gmail.com"
              style={{ marginTop: 'auto', display: 'block', padding: '13px 20px', borderRadius: 999, border: '1px solid #241c11', color: '#241c11', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, textDecoration: 'none', textAlign: 'center' }}>
              Get in touch
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
