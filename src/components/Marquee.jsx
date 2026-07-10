const skills = [
  'Python', 'LLM Systems', 'RAG Pipelines', 'FastAPI', 'React', 'LangChain',
  'Kubernetes', 'PyTorch', 'AWS', 'Kafka', 'TypeScript', 'Docker',
]

const roles = [
  'Software Engineer', 'AI Engineer', 'Full-Stack Developer', 'MLOps',
  'System Design', 'Cloud Native', 'Open to Opportunities',
]

function Track({ items, reverse = false, italicColor = '#52493a' }) {
  const strip = [...items, ...items]
  return (
    <div className="marquee-track" style={reverse ? { animationDirection: 'reverse', animationDuration: '38s' } : undefined}>
      {strip.map((item, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span
            className="font-serif-italic"
            style={{ fontSize: 17, color: i % 2 ? '#8b7d68' : italicColor, padding: '0 14px' }}
          >
            {item}
          </span>
          <span aria-hidden="true" className="spin-star" style={{ color: '#b04e26', fontSize: 11 }}>✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div style={{ overflow: 'hidden', padding: '28px 0' }}>
      <div
        className="marquee"
        style={{
          padding: '14px 0',
          transform: 'rotate(-1.3deg) scale(1.02)',
          boxShadow: '0 10px 30px -18px rgba(60,45,25,0.35)',
        }}
      >
        <Track items={skills} />
        <div style={{ height: 10 }} />
        <Track items={roles} reverse italicColor="#b04e26" />
      </div>
    </div>
  )
}
