import { Box, Container, Typography, Chip, Grid, Paper } from '@mui/material'

const groups = [
  { label: 'Programming', color: '#4f46e5', bg: 'rgba(79,70,229,0.08)', skills: ['Python', 'Java', 'C++', 'R'] },
  { label: 'Machine Learning', color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Hugging Face'] },
  { label: 'Deep Learning & NLP', color: '#2563eb', bg: 'rgba(37,99,235,0.08)', skills: ['CNN', 'LSTM', 'GAN', 'BERT', 'GPT', 'LLaMA', 'RAG', 'Prompt Engineering'] },
  { label: 'Backend & APIs', color: '#059669', bg: 'rgba(5,150,105,0.08)', skills: ['FastAPI', 'REST APIs', 'Microservices', 'System Design', 'LangChain', 'OOP'] },
  { label: 'Frontend', color: '#d97706', bg: 'rgba(217,119,6,0.08)', skills: ['React', 'Angular', 'Next.js', 'TypeScript'] },
  { label: 'MLOps & DevOps', color: '#dc2626', bg: 'rgba(220,38,38,0.08)', skills: ['Docker', 'Kubernetes', 'MLflow', 'CI/CD', 'GitHub Actions', 'Terraform'] },
  { label: 'Cloud Platforms', color: '#0891b2', bg: 'rgba(8,145,178,0.08)', skills: ['AWS', 'Google Cloud', 'Azure', 'SageMaker', 'Vertex AI', 'Lambda'] },
  { label: 'Data & Streaming', color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', skills: ['SQL', 'MongoDB', 'Cassandra', 'Apache Spark', 'Kafka', 'Hadoop'] },
]

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f9fafb' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2.5, fontSize: '11px' }}>
          EXPERTISE
        </Typography>
        <Typography variant="h3" sx={{ mt: 1, mb: 1.5, letterSpacing: '-1.5px', fontSize: { xs: '2rem', md: '2.75rem' } }}>
          Skills & Technologies
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 6, maxWidth: 520, lineHeight: 1.75 }}>
          A broad toolkit built across AI research, enterprise software engineering, and cloud infrastructure.
        </Typography>

        <Grid container spacing={2.5}>
          {groups.map((g) => (
            <Grid item xs={12} sm={6} md={4} key={g.label}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: '1px solid #e5e7eb',
                  borderRadius: 3,
                  height: '100%',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    boxShadow: `0 4px 24px rgba(0,0,0,0.08)`,
                    borderColor: g.color,
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: g.color, flexShrink: 0 }} />
                  <Typography sx={{ fontWeight: 700, color: g.color, textTransform: 'uppercase', fontSize: '11px', letterSpacing: 1 }}>
                    {g.label}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                  {g.skills.map(s => (
                    <Chip
                      key={s}
                      label={s}
                      size="small"
                      sx={{ bgcolor: g.bg, color: g.color, border: 'none', fontSize: '12px', fontWeight: 500, height: 26 }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
