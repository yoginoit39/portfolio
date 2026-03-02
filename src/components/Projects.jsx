import { Box, Container, Typography, Grid, Paper, Chip, Button, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const projects = [
  {
    name: 'MyBase',
    desc: 'A self-hosted backend-as-a-service platform built from scratch. Each project gets an isolated PostgreSQL database, auto-generated REST API, file storage, and a visual data editor — queryable from any app via a project API key. Supports email/password and GitHub OAuth.',
    tech: ['FastAPI', 'PostgreSQL', 'Angular 21', 'Angular Material', 'Cloudflare R2', 'Neon', 'JWT'],
    color: '#4f46e5',
    bg: 'rgba(79,70,229,0.04)',
    github: 'https://github.com/yoginoit39/myBase',
    live: 'https://my-base-xi.vercel.app',
  },
  {
    name: 'SEC Research Assistant',
    desc: 'AI-powered SEC filing analyzer. Search any public company ticker, load their 10-K filing, and ask natural language questions with cited answers powered by LLaMA 3.3 70B and a RAG pipeline.',
    tech: ['FastAPI', 'LangChain', 'ChromaDB', 'Groq', 'LLaMA 3.3 70B', 'React', 'Vite'],
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.04)',
    github: 'https://github.com/yoginoit39',
    live: 'https://sec-research-assistant-eorhmybiu-yoginoit39s-projects.vercel.app/',
  },
  {
    name: 'AI Trip Planner',
    desc: 'Real-time streaming travel itinerary generator. Produces structured day plans with activities, restaurants, and booking links using live token-by-token streaming via LLaMA 3.3 70B.',
    tech: ['FastAPI', 'Groq', 'LLaMA 3.3 70B', 'React', 'Vite', 'SSE Streaming'],
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.04)',
    github: 'https://github.com/yoginoit39',
    live: 'https://trip-planner-9w5v7nj8k-yoginoit39s-projects.vercel.app',
  },
  {
    name: 'HomePulse AI',
    desc: 'Real estate market intelligence platform using a LangGraph multi-agent pipeline. Four specialized agents analyze FRED economic data to deliver AI-generated housing market insights with live Recharts visualizations.',
    tech: ['FastAPI', 'LangGraph', 'Groq', 'Next.js', 'TypeScript', 'Recharts', 'FRED API'],
    color: '#059669',
    bg: 'rgba(5,150,105,0.04)',
    github: 'https://github.com/yoginoit39',
    live: 'https://home-pulse-c5gou1vt8-yoginoit39s-projects.vercel.app',
  },
]

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f9fafb' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2.5, fontSize: '11px' }}>
          WORK
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, mb: 1.5, letterSpacing: '-1.5px', fontSize: { xs: '2rem', md: '2.75rem' } }}>
          Projects
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 7, maxWidth: 520, lineHeight: 1.75 }}>
          End-to-end applications spanning AI research tooling, developer platforms, and data intelligence.
        </Typography>

        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid item xs={12} md={6} key={p.name}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  border: '1px solid #e5e7eb',
                  borderRadius: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: p.bg,
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    borderColor: p.color,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box sx={{ mb: 'auto' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: p.color, flexShrink: 0 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: '-0.5px', color: '#111827' }}>
                      {p.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2.5 }}>
                    {p.desc}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 3 }}>
                    {p.tech.map(t => (
                      <Chip
                        key={t}
                        label={t}
                        size="small"
                        sx={{ bgcolor: 'white', border: '1px solid #e5e7eb', color: '#374151', fontSize: '11px', fontWeight: 500, height: 24 }}
                      />
                    ))}
                  </Box>
                </Box>

                <Stack direction="row" spacing={1.5}>
                  <Button
                    startIcon={<GitHubIcon />}
                    href={p.github}
                    target="_blank"
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: '#d1d5db', color: '#374151', fontSize: '13px', '&:hover': { borderColor: p.color, color: p.color, bgcolor: 'transparent' } }}
                  >
                    Code
                  </Button>
                  {p.live && (
                    <Button
                      startIcon={<OpenInNewIcon />}
                      href={p.live}
                      target="_blank"
                      size="small"
                      variant="contained"
                      sx={{ fontSize: '13px', bgcolor: p.color, boxShadow: 'none', '&:hover': { bgcolor: p.color, filter: 'brightness(0.88)', boxShadow: 'none' } }}
                    >
                      Live Demo
                    </Button>
                  )}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
