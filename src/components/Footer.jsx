import Reveal from './Reveal'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/yoginoit39' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yogesh-lakhanii/' },
  { label: 'Email', href: 'mailto:lakhaniy540@gmail.com' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(36,28,17,0.14)', padding: '96px 0 40px' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        {/* Big editorial CTA */}
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 20 }}>Contact</p>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 7vw, 5rem)', lineHeight: 1.05, color: '#241c11', marginBottom: 28, maxWidth: 800 }}>
            Let&rsquo;s build something{' '}
            <em className="font-serif-italic wavy-underline" style={{ color: '#b04e26' }}>worth shipping.</em>
          </h2>
          <a
            href="mailto:lakhaniy540@gmail.com"
            className="link-sweep"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 'clamp(1rem, 2.6vw, 1.4rem)', color: '#241c11' }}
          >
            lakhaniy540@gmail.com
          </a>
        </Reveal>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, marginTop: 88, paddingTop: 28, borderTop: '1px solid rgba(36,28,17,0.1)' }}>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#b5a88f' }}>
            © {new Date().getFullYear()} Yogesh Lakhani
          </p>
          <div style={{ display: 'flex', gap: 26 }}>
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="link-sweep"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500, color: '#52493a' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
