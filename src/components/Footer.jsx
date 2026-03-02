import { Box, Container, Typography, IconButton, Divider, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0f172a', py: 7 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' }, gap: 4, textAlign: { xs: 'center', md: 'left' } }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', letterSpacing: '-0.5px', mb: 0.75 }}>
              Yogesh<Box component="span" sx={{ color: '#4f46e5' }}>.</Box>
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.7, maxWidth: 300 }}>
              Software Engineer specializing in AI-powered systems and full-stack development.
              Open to new opportunities.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-end' }, gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <IconButton href="https://github.com/yoginoit39" target="_blank" sx={{ color: '#94a3b8', '&:hover': { color: 'white', bgcolor: 'rgba(255,255,255,0.08)' } }}>
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/yogesh-lakhani" target="_blank" sx={{ color: '#94a3b8', '&:hover': { color: 'white', bgcolor: 'rgba(255,255,255,0.08)' } }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="mailto:lakhaniy540@gmail.com" sx={{ color: '#94a3b8', '&:hover': { color: 'white', bgcolor: 'rgba(255,255,255,0.08)' } }}>
                <EmailIcon />
              </IconButton>
            </Box>
            <Button
              variant="outlined"
              href="mailto:lakhaniy540@gmail.com"
              sx={{ borderColor: '#334155', color: '#94a3b8', fontSize: '13px', '&:hover': { borderColor: '#4f46e5', color: '#a5b4fc', bgcolor: 'rgba(79,70,229,0.08)' } }}
            >
              lakhaniy540@gmail.com
            </Button>
          </Box>
        </Box>

        <Divider sx={{ borderColor: '#1e293b', my: 4 }} />

        <Typography variant="body2" sx={{ color: '#475569', textAlign: 'center', fontSize: '13px' }}>
          © {new Date().getFullYear()} Yogesh Lakhani · Built with React & Material UI
        </Typography>
      </Container>
    </Box>
  )
}
