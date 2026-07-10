import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const groups = [
  { label: 'Programming',         skills: ['Python', 'Java', 'C++', 'R'] },
  { label: 'Machine Learning',    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Hugging Face'] },
  { label: 'Deep Learning & NLP', skills: ['CNN', 'LSTM', 'GAN', 'BERT', 'GPT', 'LLaMA', 'RAG', 'Prompt Engineering'] },
  { label: 'Backend & APIs',      skills: ['FastAPI', 'REST APIs', 'Microservices', 'System Design', 'LangChain', 'OOP'] },
  { label: 'Frontend',            skills: ['React', 'Angular', 'Next.js', 'TypeScript'] },
  { label: 'MLOps & DevOps',      skills: ['Docker', 'Kubernetes', 'MLflow', 'CI/CD', 'GitHub Actions', 'Terraform'] },
  { label: 'Cloud Platforms',     skills: ['AWS', 'Google Cloud', 'Azure', 'SageMaker', 'Vertex AI', 'Lambda'] },
  { label: 'Data & Streaming',    skills: ['SQL', 'MongoDB', 'Cassandra', 'Apache Spark', 'Kafka', 'Hadoop'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '110px 0' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          index="01"
          eyebrow="Expertise"
          title="Skills & Technologies"
          deck="A broad toolkit built across AI research, enterprise software engineering, and cloud infrastructure."
        />

        {/* Editorial list — hairline rows, not cards */}
        <div style={{ borderTop: '1px solid rgba(36,28,17,0.14)' }}>
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 40}>
              <div
                className="skill-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(140px, 260px) 1fr',
                  gap: 24,
                  padding: '26px 8px',
                  borderBottom: '1px solid rgba(36,28,17,0.14)',
                  alignItems: 'baseline',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#b04e26' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif" style={{ fontSize: 20, color: '#241c11' }}>
                    {g.label}
                  </h3>
                  <span className="skill-arrow" aria-hidden="true" style={{ fontSize: 16 }}>→</span>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14.5, color: '#8b7d68', lineHeight: 2 }}>
                  {g.skills.join('  ·  ')}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
