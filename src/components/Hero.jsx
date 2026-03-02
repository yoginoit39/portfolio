import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 10,
        pb: 8,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(150deg, #f5f3ff 0%, #eff6ff 40%, #f0fdf4 100%)',
      }}
    >
      {/* Decorative blobs */}
      <Box sx={{ position: 'absolute', top: -80, right: -80, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -60, left: -60, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: '40%', right: '20%', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 800 }}>
          <Chip
            label="Open to opportunities"
            size="small"
            sx={{
              mb: 3,
              bgcolor: 'rgba(16,185,129,0.1)',
              color: '#059669',
              fontWeight: 600,
              border: '1px solid rgba(16,185,129,0.25)',
              '& .MuiChip-icon': { color: '#10b981' },
            }}
            icon={<Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#10b981', ml: '8px !important', animation: 'pulse 2s infinite' }} />}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5.5rem' },
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-3px',
              mb: 2,
              color: '#111827',
            }}
          >
            Yogesh{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Lakhani
            </Box>
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: '#374151',
              fontWeight: 500,
              mb: 3,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              letterSpacing: '-0.3px',
            }}
          >
            Software Engineer &nbsp;·&nbsp; AI &amp; LLM Systems &nbsp;·&nbsp; Full-Stack
          </Typography>

          <Typography
            sx={{
              color: '#6b7280',
              lineHeight: 1.85,
              mb: 4,
              fontSize: '1.05rem',
              maxWidth: 660,
            }}
          >
            5+ years building scalable AI-driven systems at Morgan Stanley and early-stage AI startups.
            Specialized in LLM-powered workflows, RAG pipelines, FastAPI microservices, and full-stack
            development with React and Angular.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 5, color: '#9ca3af' }}>
            <LocationOnIcon sx={{ fontSize: 15 }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '13px' }}>Dallas, TX · 945-260-8524</Typography>
          </Box>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              href="https://github.com/yoginoit39"
              target="_blank"
              sx={{ px: 3.5, py: 1.5, fontSize: '15px', boxShadow: '0 4px 14px rgba(79,70,229,0.4)' }}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/yogesh-lakhanii/"
              target="_blank"
              sx={{ px: 3.5, py: 1.5, fontSize: '15px', borderColor: '#d1d5db', color: '#374151', '&:hover': { borderColor: '#4f46e5', color: '#4f46e5', bgcolor: 'rgba(79,70,229,0.04)' } }}
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:lakhaniy540@gmail.com"
              sx={{ px: 3.5, py: 1.5, fontSize: '15px', borderColor: '#d1d5db', color: '#374151', '&:hover': { borderColor: '#4f46e5', color: '#4f46e5', bgcolor: 'rgba(79,70,229,0.04)' } }}
            >
              Email me
            </Button>
          </Stack>

          <Box
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: '#9ca3af', cursor: 'pointer', fontSize: '13px', '&:hover': { color: '#4f46e5' }, transition: 'color 0.2s' }}
          >
            <ArrowDownwardIcon sx={{ fontSize: 16 }} /> Scroll to explore
          </Box>
        </Box>
      </Container>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </Box>
  )
}
