import { Box, Container, Typography, Paper, Chip } from '@mui/material'

const experiences = [
  {
    company: 'Morgan Stanley',
    role: 'Software Engineer',
    location: 'TX',
    period: 'May 2025 – Present',
    color: '#4f46e5',
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
    color: '#7c3aed',
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
    color: '#0891b2',
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
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2.5, fontSize: '11px' }}>
          CAREER
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, mb: 1.5, letterSpacing: '-1.5px', fontSize: { xs: '2rem', md: '2.75rem' } }}>
          Work Experience
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 7, maxWidth: 500, lineHeight: 1.75 }}>
          5+ years building AI-powered systems across fintech and early-stage AI companies.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {experiences.map((exp, i) => (
            <Paper
              key={i}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: '1px solid #e5e7eb',
                borderRadius: 3,
                borderLeft: `4px solid ${exp.color}`,
                transition: 'all 0.2s ease',
                '&:hover': { boxShadow: '0 6px 28px rgba(0,0,0,0.08)', transform: 'translateY(-2px)' },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1.5, mb: 2.5 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: '-0.5px', color: '#111827' }}>
                      {exp.company}
                    </Typography>
                    {exp.current && (
                      <Chip label="Current" size="small" sx={{ bgcolor: 'rgba(16,185,129,0.1)', color: '#059669', fontWeight: 700, fontSize: '10px', height: 20 }} />
                    )}
                  </Box>
                  <Typography sx={{ color: exp.color, fontWeight: 600, fontSize: '15px' }}>
                    {exp.role} · {exp.location}
                  </Typography>
                </Box>
                <Chip
                  label={exp.period}
                  size="small"
                  sx={{ bgcolor: 'rgba(79,70,229,0.08)', color: '#4f46e5', fontWeight: 600, fontSize: '12px', alignSelf: 'flex-start' }}
                />
              </Box>

              <Box component="ul" sx={{ pl: 2.5, m: 0, mb: 2.5 }}>
                {exp.bullets.map((b, j) => (
                  <Box component="li" key={j} sx={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.8, mb: 0.5 }}>
                    {b}
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                {exp.tags.map(t => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{ bgcolor: '#f3f4f6', color: '#374151', border: 'none', fontSize: '11px', fontWeight: 500, height: 24 }}
                  />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
