import Reveal from './Reveal'

const experiences = [
  {
    company: 'Bank of America',
    role: 'Software Engineer III - Infrastructure Automation',
    location: 'Chandler, AZ · Hybrid',
    period: 'May 2026 – Present',
    accent: '#bf6847',
    current: true,
    bullets: [
      'Wrote Ansible playbooks and YAML-based configuration templates to manage infrastructure provisioning, application deployment and service configuration across Linux/Unix environments.',
      'Built and automated deployment of containerized middleware services (Apache Tomcat, JBoss EAP).',
    ],
    tags: ['Ansible', 'YAML', 'Linux', 'Tomcat', 'JBoss EAP'],
  },
  {
    company: 'Morgan Stanley',
    role: 'Software Engineer',
    location: 'TX',
    period: 'May 2025 – Apr 2026',
    accent: '#5f8f8a',
    current: false,
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
    company: 'Radical AI',
    role: 'Software Engineer (Internship)',
    location: 'New York · Remote',
    period: 'Jun 2025 – Aug 2025',
    accent: '#c99a3f',
    current: false,
    bullets: [
      'Built and scaled complex data-capturing workflows using Next.js frontend and Python (FastAPI) backend, implementing real-time file processing pipelines that handle high-throughput document uploads and vectorization at an early-stage start-up.',
      'Optimized data pipelines using Docker containerization with custom multi-stage builds, implementing container lifecycle management and networking for microservices that process documents with sub-second response times.',
      'Developed serverless architecture using AWS Lambda with event-driven workflows for async document chunking and embedding tasks integrating with container-based services in an OpenShift compatible architecture.',
      'Built real-time streaming pipelines using Apache Kafka for high throughput document ingestion, decoupling upstream producers from LLM processing consumers and sustaining sub-second vectorization under concurrent load.',
      "Engineered AI agents using OpenAI's models with vector databases for intelligent document processing and automated content generation, implementing multi-agent orchestration that enhanced data extraction accuracy by 40%.",
    ],
    tags: ['Next.js', 'FastAPI', 'Docker', 'AWS Lambda', 'Kafka', 'OpenAI'],
  },
  {
    company: 'Altheon AI',
    role: 'Software Engineer (Apprenticeship)',
    location: 'Chicago, IL · Remote',
    period: 'Oct 2024 – Mar 2025',
    accent: '#8d7aa8',
    current: false,
    bullets: [
      "Engineered a RAG-based AI research assistant grounded in a 40-researcher institution's full document corpus, reducing literature review time by 60% through semantic search and automated citation sourcing.",
      'Built a vector-indexed knowledge graph pipeline enabling semantic search and retrieval across an institutional paper library, powering fully sourced, citable AI-generated answers.',
      'Developed an automated citation engine extracting metadata from PDFs, DOIs, and URLs, supporting bulk bibliography generation across APA, MLA, Chicago, and Vancouver formats.',
      'Designed and shipped LLM-powered agentic workflows for document parsing, summarization, and knowledge-gap identification, cutting manual research workflows from days to minutes.',
      'Built full-stack AI product features using TypeScript and Node.js on cloud-native infrastructure, deploying production LLM services for enterprise and academic clients.',
    ],
    tags: ['RAG', 'LLM', 'TypeScript', 'Node.js', 'Vector DB'],
  },
  {
    company: 'Infinite Infolab',
    role: 'Software Engineer',
    location: 'Remote',
    period: 'Jan 2019 – Feb 2023',
    accent: '#74855a',
    current: false,
    bullets: [
      'Integrated OpenAI LLMs into document intelligence workflows using LangChain for prompt orchestration, multi-step reasoning, and contextual memory management.',
      'Designed and developed scalable backend systems in Python and Java for AI-driven enterprise applications, integrating machine learning models into RESTful microservices and improving response time by 30%.',
      'Designed and deployed RAG-based systems leveraging vector databases and Redis Vector Search for scalable document retrieval and semantic ranking.',
      'Built scalable document ingestion pipelines using Python (FastAPI) backend and event-driven AWS Lambda architecture for AI-powered chunking and embedding generation.',
      'Developed responsive frontend components using Angular and React to enable real-time AI-assisted document analysis and workflow automation.',
      'Containerized microservices using Docker with optimized multi-stage builds to support high-throughput LLM-backed services in production environments.',
    ],
    tags: ['LangChain', 'Python', 'Java', 'Angular', 'React', 'FastAPI', 'AWS Lambda', 'Docker'],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '96px 0', background: '#f7f2ea' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#bf6847', letterSpacing: '0.2em', marginBottom: 12, textTransform: 'uppercase' }}>
            // career
          </p>
          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 12, color: '#2b241d' }}>
            Work Experience
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#857a6a', lineHeight: 1.75, marginBottom: 64, maxWidth: 500 }}>
            6+ years building AI-powered systems and infrastructure automation across fintech, banking, and early-stage AI companies.
          </p>
        </Reveal>

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
              <Reveal key={exp.company} delay={i * 60} style={{ position: 'relative' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute',
                  left: -32,
                  top: 24,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: exp.accent,
                  boxShadow: `0 0 12px ${exp.accent}88`,
                  border: '2px solid #f7f2ea',
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
                        <h3 className="font-heading" style={{ fontSize: 20, fontWeight: 700, color: '#2b241d', letterSpacing: '-0.3px' }}>
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: 10,
                            color: '#bf6847',
                            background: 'rgba(194,110,74,0.1)',
                            border: '1px solid rgba(194,110,74,0.2)',
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
                      color: '#857a6a',
                      background: 'rgba(120,98,72,0.06)',
                      border: '1px solid rgba(120,98,72,0.12)',
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
                      <li key={j} style={{ fontFamily: 'Inter, sans-serif', color: '#544a3c', fontSize: 14, lineHeight: 1.8 }}>
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
                          color: '#857a6a',
                          background: 'rgba(120,98,72,0.06)',
                          border: '1px solid rgba(120,98,72,0.12)',
                          borderRadius: 6,
                          padding: '3px 8px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
