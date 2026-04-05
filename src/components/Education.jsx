const education = [
  { degree: 'Master of Computer Science', school: 'DePaul University', year: 'Mar 2025' },
  { degree: 'Bachelor of Computer Science', school: 'International University of East Africa', year: 'Nov 2021' },
  { degree: "Associate's in Software Engineering", school: 'Aptech Computer Education', year: 'Oct 2018' },
]

const certifications = [
  { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', icon: '☁️' },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '96px 0', background: '#050505' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#00ff88', letterSpacing: '0.2em', marginBottom: 12, textTransform: 'uppercase' }}>
          // background
        </p>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 56, color: '#fff' }}>
          Education &amp; Certifications
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
          {/* Education column */}
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#52525b', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>
              Education
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {education.map((e, i) => (
                <div
                  key={i}
                  className="glass card-hover-border"
                  style={{
                    padding: '20px 24px',
                    borderRadius: 14,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                    position: 'relative',
                    zIndex: 0,
                    transition: 'transform 0.25s, box-shadow 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  <span style={{ fontSize: 20, lineHeight: 1, marginTop: 2 }}>🎓</span>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#e4e4e7', fontSize: 15, lineHeight: 1.3, marginBottom: 4 }}>
                      {e.degree}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', color: '#52525b', fontSize: 13, marginBottom: 8 }}>
                      {e.school}
                    </p>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 10,
                      color: '#6366f1',
                      background: 'rgba(99,102,241,0.1)',
                      border: '1px solid rgba(99,102,241,0.2)',
                      borderRadius: 5,
                      padding: '2px 8px',
                    }}>
                      {e.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications column */}
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#52525b', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>
              Certifications
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {certifications.map((c, i) => (
                <div
                  key={i}
                  className="glass card-hover-border"
                  style={{
                    padding: '20px 24px',
                    borderRadius: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    position: 'relative',
                    zIndex: 0,
                    transition: 'transform 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  <span style={{ fontSize: 28, lineHeight: 1 }}>{c.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, color: '#e4e4e7', fontSize: 15, lineHeight: 1.3, marginBottom: 4 }}>
                      {c.name}
                    </p>
                    <p style={{ fontFamily: 'Inter, sans-serif', color: '#52525b', fontSize: 13 }}>
                      {c.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
