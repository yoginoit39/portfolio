import Reveal from './Reveal'

const groups = [
  { label: 'Programming',       accent: '#bf6847', skills: ['Python', 'Java', 'C++', 'R'] },
  { label: 'Machine Learning',  accent: '#a9754e', skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Hugging Face'] },
  { label: 'Deep Learning & NLP', accent: '#b8895a', skills: ['CNN', 'LSTM', 'GAN', 'BERT', 'GPT', 'LLaMA', 'RAG', 'Prompt Engineering'] },
  { label: 'Backend & APIs',    accent: '#74855a', skills: ['FastAPI', 'REST APIs', 'Microservices', 'System Design', 'LangChain', 'OOP'] },
  { label: 'Frontend',          accent: '#c99a3f', skills: ['React', 'Angular', 'Next.js', 'TypeScript'] },
  { label: 'MLOps & DevOps',   accent: '#b35c4f', skills: ['Docker', 'Kubernetes', 'MLflow', 'CI/CD', 'GitHub Actions', 'Terraform'] },
  { label: 'Cloud Platforms',   accent: '#5f8f8a', skills: ['AWS', 'Google Cloud', 'Azure', 'SageMaker', 'Vertex AI', 'Lambda'] },
  { label: 'Data & Streaming',  accent: '#8d7aa8', skills: ['SQL', 'MongoDB', 'Cassandra', 'Apache Spark', 'Kafka', 'Hadoop'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '96px 0', background: '#efe7d9' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <Reveal>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#bf6847', letterSpacing: '0.2em', marginBottom: 12, textTransform: 'uppercase' }}>
            // expertise
          </p>
          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 12, color: '#2b241d' }}>
            Skills &amp; Technologies
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#857a6a', lineHeight: 1.75, marginBottom: 56, maxWidth: 520 }}>
            A broad toolkit built across AI research, enterprise software engineering, and cloud infrastructure.
          </p>
        </Reveal>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 60}>
              <div
                className="card-hover-border glass"
                style={{
                  padding: 24,
                  borderRadius: 16,
                  position: 'relative',
                  zIndex: 0,
                }}
              >
                {/* Category label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: g.accent, display: 'block', boxShadow: `0 0 8px ${g.accent}55` }} />
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: g.accent, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {g.label}
                  </span>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {g.skills.map(s => (
                    <span
                      key={s}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 11,
                        color: '#857a6a',
                        background: 'rgba(120,98,72,0.06)',
                        border: '1px solid rgba(120,98,72,0.12)',
                        borderRadius: 6,
                        padding: '3px 8px',
                        fontWeight: 500,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
