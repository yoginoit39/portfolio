const experiences = [
  {
    company: 'Morgan Stanley',
    role: 'Software Engineer',
    location: 'TX',
    period: 'May 2025 – Present',
    accent: '#00ff88',
    current: true,
    bullets: [
      'Architected end-to-end LLM-powered workflows integrating GPT and LLaMA models into enterprise platforms, embedding AI-driven decision support into production business processes.',
      'Built RAG pipelines using LangChain, Redis Vector Search, and vector databases for low-latency semantic search across large financial datasets.',
      'Developed high-performance inference microservices using FastAPI, Docker, and Kubernetes, reducing API latency by 28% under high-concurrency workloads.',
      'Designed full-stack features using React for AI-driven dashboards and workflow automation interfaces.',
      'Optimized deep learning models via distributed training and hyperparameter tuning in PyTorch and TensorFlow, improving performance metrics by 22%.',
      'Implemented CI/CD-driven MLOps pipelines with automated testing and model versioning, decreasing deployment failures by 30%.',
    ],
    tags: ['LLM', 'RAG', 'FastAPI', 'React', 'PyTorch', 'Docker', 'Kubernetes'],
  },
  {
    company: 'Altheon AI',
    role: 'AI Engineer',
    location: 'IL',
    period: 'Oct 2024 – Mar 2025',
    accent: '#a78bfa',
    current: false,
    bullets: [
      'Built and scaled data-capturing workflows using Next.js and FastAPI, implementing real-time file processing pipelines for high-throughput document uploads and vectorization.',
      'Optimized data pipelines using Docker with custom multi-stage builds for sub-second microservice response times.',
      'Developed serverless architecture using AWS Lambda for AI-powered document chunking and vector database operations.',
      'Engineered AI agents using OpenAI models with vector databases for intelligent document processing, enhancing data extraction accuracy by 40%.',
    ],
    tags: ['OpenAI', 'Next.js', 'FastAPI', 'AWS Lambda', 'Docker', 'Vector DB'],
  },
  {
    company: 'Infinite Infolab',
    role: 'Software Engineer',
    location: 'India',
    period: 'Jan 2019 – Feb 2023',
    accent: '#22d3ee',
    current: false,
    bullets: [
      'Integrated OpenAI LLMs into document intelligence workflows using LangChain for prompt orchestration and contextual memory management.',
      'Designed scalable backend systems in Python and Java for AI-driven enterprise applications, improving response time by 30%.',
      'Built RAG-based systems leveraging vector databases and Redis Vector Search for scalable document retrieval and semantic ranking.',
      'Developed responsive frontend components using Angular and React for real-time AI-assisted document analysis.',
      'Containerized microservices using Docker with optimized multi-stage builds to support high-throughput LLM-backed services.',
    ],
    tags: ['LangChain', 'Python', 'Java', 'Angular', 'React', 'FastAPI', 'Docker'],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '96px 0', background: '#050505' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#00ff88', letterSpacing: '0.2em', marginBottom: 12, textTransform: 'uppercase' }}>
          // career
        </p>
        <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 12, color: '#fff' }}>
          Work Experience
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#52525b', lineHeight: 1.75, marginBottom: 64, maxWidth: 500 }}>
          5+ years building AI-powered systems across fintech and early-stage AI companies.
        </p>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {/* Glowing connector line */}
          <div className="timeline-line" style={{
            position: 'absolute',
            left: 7,
            top: 0,
            bottom: 0,
            width: 2,
            borderRadius: 2,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: -32,
                  top: 24,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: exp.accent,
                  boxShadow: `0 0 12px ${exp.accent}`,
                  border: '2px solid #050505',
                }} />

                {/* Card */}
                <div
                  className="glass card-hover-border"
                  style={{
                    padding: '28px 32px',
                    borderRadius: 16,
                    borderLeft: `3px solid ${exp.accent}`,
                    position: 'relative',
                    zIndex: 0,
                  }}
                >
                  {/* Header row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-0.3px' }}>
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: 10,
                            color: '#00ff88',
                            background: 'rgba(0,255,136,0.1)',
                            border: '1px solid rgba(0,255,136,0.2)',
                            borderRadius: 99,
                            padding: '2px 8px',
                            fontWeight: 600,
                          }}>
                            Current
                          </span>
                        )}
                      </div>
                      <p style={{ fontFamily: 'Inter, sans-serif', color: exp.accent, fontWeight: 600, fontSize: 14 }}>
                        {exp.role} · {exp.location}
                      </p>
                    </div>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 11,
                      color: '#52525b',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 8,
                      padding: '4px 10px',
                      whiteSpace: 'nowrap',
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul style={{ paddingLeft: 20, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ fontFamily: 'Inter, sans-serif', color: '#52525b', fontSize: 14, lineHeight: 1.8 }}>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {exp.tags.map(t => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: 11,
                          color: '#71717a',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          borderRadius: 6,
                          padding: '3px 8px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
