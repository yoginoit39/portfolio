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
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(245,239,230,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(120,98,72,0.12)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, color: '#2b241d', letterSpacing: '-0.5px', padding: 0 }}
          >
            YL<span style={{ color: '#bf6847' }}>.</span>
          </button>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
            {links.map(l => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: 14,
                  color: '#857a6a',
                  padding: '8px 16px',
                  borderRadius: 8,
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.target.style.color = '#bf6847'; e.target.style.background = 'rgba(194,110,74,0.08)'; }}
                onMouseLeave={e => { e.target.style.color = '#857a6a'; e.target.style.background = 'transparent'; }}
              >
                {l}
              </button>
            ))}
            <a
              href="mailto:lakhaniy540@gmail.com"
              style={{
                marginLeft: 12,
                padding: '8px 20px',
                borderRadius: 8,
                border: '1px solid #bf6847',
                color: '#bf6847',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 14,
                textDecoration: 'none',
                transition: 'all 0.2s',
                boxShadow: '0 2px 10px rgba(194,110,74,0.12)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#bf6847'; e.currentTarget.style.color = '#f7f2ea'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(194,110,74,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#bf6847'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(194,110,74,0.12)'; }}
            >
              Hire me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setDrawer(true)}
            className="show-mobile"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2b241d', padding: 8, display: 'none' }}
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
          <div onClick={() => setDrawer(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(46,38,32,0.4)' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 280, background: '#f7f2ea', border: '1px solid rgba(120,98,72,0.14)', padding: 24, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, color: '#2b241d' }}>YL<span style={{ color: '#bf6847' }}>.</span></span>
              <button onClick={() => setDrawer(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#857a6a' }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {links.map(l => (
                <button key={l} onClick={() => scrollTo(l)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16, color: '#544a3c', padding: '12px 16px', borderRadius: 8, textAlign: 'left', transition: 'color 0.2s' }}
                  onMouseEnter={e => { e.target.style.color = '#bf6847'; }}
                  onMouseLeave={e => { e.target.style.color = '#544a3c'; }}
                >
                  {l}
                </button>
              ))}
            </div>
            <a href="mailto:lakhaniy540@gmail.com"
              style={{ marginTop: 'auto', display: 'block', padding: '12px 20px', borderRadius: 8, border: '1px solid #bf6847', color: '#bf6847', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14, textDecoration: 'none', textAlign: 'center' }}>
              Hire me
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
