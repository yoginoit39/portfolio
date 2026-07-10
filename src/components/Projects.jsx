import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import TiltCard from './TiltCard'

const projects = [
  {
    name: 'MyBase',
    desc: 'A self-hosted backend-as-a-service platform built from scratch. Each project gets an isolated PostgreSQL database, auto-generated REST API, file storage, and a visual data editor — queryable from any app via a project API key. Supports email/password and GitHub OAuth.',
    tech: ['FastAPI', 'PostgreSQL', 'Angular 21', 'Cloudflare R2', 'Neon', 'JWT'],
    github: 'https://github.com/yoginoit39/myBase',
    live: 'https://my-base-xi.vercel.app',
  },
  {
    name: 'SEC Research Assistant',
    desc: 'AI-powered SEC filing analyzer. Search any public company ticker, load their 10-K filing, and ask natural language questions with cited answers powered by LLaMA 3.3 70B and a RAG pipeline.',
    tech: ['FastAPI', 'LangChain', 'ChromaDB', 'Groq', 'LLaMA 3.3 70B', 'React'],
    github: 'https://github.com/yoginoit39',
    live: 'https://sec-research-assistant-eorhmybiu-yoginoit39s-projects.vercel.app/',
  },
  {
    name: 'AI Trip Planner',
    desc: 'Real-time streaming travel itinerary generator. Produces structured day plans with activities, restaurants, and booking links using live token-by-token streaming via LLaMA 3.3 70B.',
    tech: ['FastAPI', 'Groq', 'LLaMA 3.3 70B', 'React', 'SSE Streaming'],
    github: 'https://github.com/yoginoit39',
    live: 'https://trip-planner-9w5v7nj8k-yoginoit39s-projects.vercel.app',
  },
  {
    name: 'DesignIQ',
    desc: 'AI-powered system design interview prep tool. Type any design prompt and get an interactive architecture diagram rendered with React Flow. A streaming AI coach on the side explains trade-offs, scalability strategies, and what interviewers look for.',
    tech: ['FastAPI', 'Groq', 'LLaMA 3.3 70B', 'React Flow', 'Tailwind'],
    github: 'https://github.com/yoginoit39',
    live: 'https://design-iq-b5o4.vercel.app/',
  },
  {
    name: 'HomePulse AI',
    desc: 'Real estate market intelligence platform using a LangGraph multi-agent pipeline. Four specialized agents analyze FRED economic data to deliver AI-generated housing market insights with live Recharts visualizations.',
    tech: ['FastAPI', 'LangGraph', 'Groq', 'Next.js', 'TypeScript', 'Recharts'],
    github: 'https://github.com/yoginoit39',
    live: 'https://home-pulse-c5gou1vt8-yoginoit39s-projects.vercel.app',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '110px 0' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          index="03"
          eyebrow="Selected Work"
          title="Projects"
          deck="End-to-end applications spanning AI research tooling, developer platforms, and data intelligence."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 22 }}>
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 60} style={{ height: '100%' }}>
              <TiltCard
                className="glass"
                style={{
                  padding: '32px 30px',
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Index + title */}
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#b04e26', letterSpacing: '0.15em', marginBottom: 14 }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-serif" style={{ fontSize: 25, color: '#241c11', marginBottom: 14 }}>
                  {p.name}
                </h3>

                {/* Description */}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#52493a', lineHeight: 1.85, marginBottom: 20, flex: 1 }}>
                  {p.desc}
                </p>

                {/* Tech list */}
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#8b7d68', lineHeight: 1.9, marginBottom: 24 }}>
                  {p.tech.join(' / ')}
                </p>

                {/* Links */}
                <div style={{ display: 'flex', gap: 22, borderTop: '1px solid rgba(36,28,17,0.1)', paddingTop: 18 }}>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="link-sweep"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#b04e26', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14 }}
                  >
                    Live demo
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-sweep"
                    style={{ color: '#52493a', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 14 }}
                  >
                    Code
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
