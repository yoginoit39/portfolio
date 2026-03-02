import { Box, Container, Typography, Paper, Grid, Chip } from '@mui/material'

const education = [
  { degree: 'Master of Computer Science', school: 'DePaul University', year: 'Mar 2025' },
  { degree: 'Bachelor of Computer Science', school: 'International University of East Africa', year: 'Nov 2021' },
  { degree: "Associate's in Software Engineering", school: 'Aptech Computer Education', year: 'Oct 2018' },
]

const certifications = [
  { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', icon: '☁️' },
]

export default function Education() {
  return (
    <Box id="education" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2.5, fontSize: '11px' }}>
          BACKGROUND
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, mb: 7, letterSpacing: '-1.5px', fontSize: { xs: '2rem', md: '2.75rem' } }}>
          Education & Certifications
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Typography variant="subtitle2" sx={{ mb: 2.5, color: '#374151', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, fontSize: '11px' }}>
              Education
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {education.map((e, i) => (
                <Paper
                  key={i}
                  elevation={0}
                  sx={{
                    p: 3,
                    border: '1px solid #e5e7eb',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    transition: 'all 0.2s ease',
                    '&:hover': { borderColor: '#4f46e5', boxShadow: '0 4px 16px rgba(0,0,0,0.07)', transform: 'translateX(4px)' },
                  }}
                >
                  <Box sx={{ fontSize: '22px', lineHeight: 1, mt: 0.25 }}>🎓</Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>
                      {e.degree}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
                      {e.school}
                    </Typography>
                    <Chip
                      label={e.year}
                      size="small"
                      sx={{ mt: 1, bgcolor: 'rgba(79,70,229,0.08)', color: '#4f46e5', fontWeight: 600, fontSize: '11px', height: 22 }}
                    />
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography variant="subtitle2" sx={{ mb: 2.5, color: '#374151', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, fontSize: '11px' }}>
              Certifications
            </Typography>
            {certifications.map((c, i) => (
              <Paper
                key={i}
                elevation={0}
                sx={{
                  p: 3,
                  border: '1px solid #e5e7eb',
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2.5,
                  transition: 'all 0.2s ease',
                  '&:hover': { borderColor: '#f59e0b', boxShadow: '0 4px 16px rgba(0,0,0,0.07)', transform: 'translateX(4px)' },
                }}
              >
                <Box sx={{ fontSize: '32px', lineHeight: 1 }}>{c.icon}</Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>
                    {c.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
                    {c.issuer}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
