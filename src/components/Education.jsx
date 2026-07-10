import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const education = [
  { degree: 'Master of Computer Science', school: 'DePaul University', year: '2025' },
  { degree: 'Bachelor of Computer Science', school: 'International University of East Africa', year: '2021' },
  { degree: "Associate's in Software Engineering", school: 'Aptech Computer Education', year: '2018' },
]

const certifications = [
  { name: 'AWS Certified Developer — Associate', issuer: 'Amazon Web Services', year: '' },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '110px 0', background: '#ece3d0' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          index="04"
          eyebrow="Background"
          title="Education & Certifications"
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56 }}>
          {/* Education column */}
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#8b7d68', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>
              Education
            </p>
            <div style={{ borderTop: '1px solid rgba(36,28,17,0.14)' }}>
              {education.map((e, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 18, padding: '22px 4px', borderBottom: '1px solid rgba(36,28,17,0.14)' }}>
                    <div>
                      <p className="font-serif" style={{ color: '#241c11', fontSize: 19, lineHeight: 1.3, marginBottom: 6 }}>
                        {e.degree}
                      </p>
                      <p style={{ fontFamily: 'Inter, sans-serif', color: '#8b7d68', fontSize: 13.5 }}>
                        {e.school}
                      </p>
                    </div>
                    <span className="font-serif-italic" style={{ fontSize: 16, color: '#b04e26', whiteSpace: 'nowrap' }}>
                      {e.year}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications column */}
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#8b7d68', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>
              Certifications
            </p>
            <div style={{ borderTop: '1px solid rgba(36,28,17,0.14)' }}>
              {certifications.map((c, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 18, padding: '22px 4px', borderBottom: '1px solid rgba(36,28,17,0.14)' }}>
                    <div>
                      <p className="font-serif" style={{ color: '#241c11', fontSize: 19, lineHeight: 1.3, marginBottom: 6 }}>
                        {c.name}
                      </p>
                      <p style={{ fontFamily: 'Inter, sans-serif', color: '#8b7d68', fontSize: 13.5 }}>
                        {c.issuer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
