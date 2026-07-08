const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/yoginoit39',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yogesh-lakhanii/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:lakhaniy540@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#efe7d9', borderTop: '1px solid rgba(120,98,72,0.12)', padding: '56px 0 40px' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 48 }}>
          {/* Branding */}
          <div>
            <p className="font-heading" style={{ fontWeight: 800, fontSize: 22, color: '#2b241d', letterSpacing: '-0.5px', marginBottom: 8 }}>
              Yogesh<span style={{ color: '#bf6847' }}>.</span>
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', color: '#a4967f', fontSize: 14, lineHeight: 1.7, maxWidth: 300 }}>
              Software Engineer specializing in AI-powered systems and full-stack development. Open to new opportunities.
            </p>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={s.label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'rgba(120,98,72,0.06)',
                    border: '1px solid rgba(120,98,72,0.14)',
                    color: '#857a6a',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#bf6847'; e.currentTarget.style.borderColor = 'rgba(194,110,74,0.3)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(194,110,74,0.18)'; e.currentTarget.style.background = 'rgba(194,110,74,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#857a6a'; e.currentTarget.style.borderColor = 'rgba(120,98,72,0.14)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'rgba(120,98,72,0.06)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:lakhaniy540@gmail.com"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                color: '#a4967f',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#bf6847'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#a4967f'; }}
            >
              lakhaniy540@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(120,98,72,0.12)', marginBottom: 28 }} />

        {/* Copyright */}
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#b3a693', textAlign: 'center' }}>
          © {new Date().getFullYear()} Yogesh Lakhani · Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
