import Reveal from './Reveal'

const projects = [
  {
    name: 'MyBase',
    desc: 'A self-hosted backend-as-a-service platform built from scratch. Each project gets an isolated PostgreSQL database, auto-generated REST API, file storage, and a visual data editor — queryable from any app via a project API key. Supports email/password and GitHub OAuth.',
    tech: ['FastAPI', 'PostgreSQL', 'Angular 21', 'Angular Material', 'Cloudflare R2', 'Neon', 'JWT'],
    accent: '#bf6847',
    github: 'https://github.com/yoginoit39/myBase',
    live: 'https://my-base-xi.vercel.app',
  },
  {
    name: 'SEC Research Assistant',
    desc: 'AI-powered SEC filing analyzer. Search any public company ticker, load their 10-K filing, and ask natural language questions with cited answers powered by LLaMA 3.3 70B and a RAG pipeline.',
    tech: ['FastAPI', 'LangChain', 'ChromaDB', 'Groq', 'LLaMA 3.3 70B', 'React', 'Vite'],
    accent: '#8d7aa8',
    github: 'https://github.com/yoginoit39',
    live: 'https://sec-research-assistant-eorhmybiu-yoginoit39s-projects.vercel.app/',
  },
  {
    name: 'AI Trip Planner',
    desc: 'Real-time streaming travel itinerary generator. Produces structured day plans with activities, restaurants, and booking links using live token-by-token streaming via LLaMA 3.3 70B.',
    tech: ['FastAPI', 'Groq', 'LLaMA 3.3 70B', 'React', 'Vite', 'SSE Streaming'],
    accent: '#5f8f8a',
    github: 'https://github.com/yoginoit39',
    live: 'https://trip-planner-9w5v7nj8k-yoginoit39s-projects.vercel.app',
  },
  {
    name: 'DesignIQ',
    desc: 'AI-powered system design interview prep tool. Type any design prompt and get an interactive architecture diagram rendered with React Flow. A streaming AI coach on the side explains trade-offs, scalability strategies, and what interviewers look for.',
    tech: ['FastAPI', 'Groq', 'LLaMA 3.3 70B', 'React Flow', 'React', 'Vite', 'Tailwind'],
    accent: '#c99a3f',
    github: 'https://github.com/yoginoit39',
    live: 'https://design-iq-b5o4.vercel.app/',
  },
  {
    name: 'HomePulse AI',
    desc: 'Real estate market intelligence platform using a LangGraph multi-agent pipeline. Four specialized agents analyze FRED economic data to deliver AI-generated housing market insights with live Recharts visualizations.',
    tech: ['FastAPI', 'LangGraph', 'Groq', 'Next.js', 'TypeScript', 'Recharts', 'FRED API'],
    accent: '#74855a',
    github: 'https://github.com/yoginoit39',
    live: 'https://home-pulse-c5gou1vt8-yoginoit39s-projects.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '96px 0', background: '#efe7d9' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <Reveal>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#bf6847', letterSpacing: '0.2em', marginBottom: 12, textTransform: 'uppercase' }}>
            // work
          </p>
          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: 12, color: '#2b241d' }}>
            Projects
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#857a6a', lineHeight: 1.75, marginBottom: 56, maxWidth: 520 }}>
            End-to-end applications spanning AI research tooling, developer platforms, and data intelligence.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div
                className="glass card-hover-border"
                style={{
                  padding: 28,
                  borderRadius: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  position: 'relative',
                  zIndex: 0,
                }}
              >
                {/* Top accent line */}
                <div style={{ height: 2, background: `linear-gradient(90deg, ${p.accent}, transparent)`, borderRadius: 2, marginBottom: 20 }} />

                {/* Title */}
                <h3 className="font-heading" style={{ fontSize: 19, fontWeight: 700, color: '#2b241d', letterSpacing: '-0.3px', marginBottom: 10 }}>
                  {p.name}
                </h3>

                {/* Description */}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#857a6a', lineHeight: 1.8, marginBottom: 18, flex: 1 }}>
                  {p.desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {p.tech.map(t => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 10,
                        color: '#857a6a',
                        background: 'rgba(120,98,72,0.06)',
                        border: '1px solid rgba(120,98,72,0.12)',
                        borderRadius: 5,
                        padding: '3px 7px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: 10 }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '8px 14px',
                      borderRadius: 8,
                      border: '1px solid rgba(120,98,72,0.16)',
                      color: '#857a6a',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: 13,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(120,98,72,0.3)'; e.currentTarget.style.color = '#2b241d'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(120,98,72,0.16)'; e.currentTarget.style.color = '#857a6a'; }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    Code
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '8px 14px',
                        borderRadius: 8,
                        background: p.accent,
                        color: '#f7f2ea',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: 13,
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.08)'; e.currentTarget.style.boxShadow = `0 6px 20px ${p.accent}55`; }}
                      onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      Live Demo
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
