import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItemButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useState, useEffect } from 'react'

const links = ['Skills', 'Experience', 'Projects', 'Education']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawer, setDrawer] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setDrawer(false)
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid #e5e7eb' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 68 }}>
            <Typography
              variant="h6"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              sx={{ fontWeight: 800, color: '#111827', letterSpacing: '-0.5px', cursor: 'pointer', userSelect: 'none' }}
            >
              YL<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {links.map(l => (
                <Button
                  key={l}
                  onClick={() => scrollTo(l)}
                  sx={{ color: '#374151', fontWeight: 500, px: 2, '&:hover': { color: 'primary.main', bgcolor: 'rgba(79,70,229,0.06)' } }}
                >
                  {l}
                </Button>
              ))}
              <Button
                variant="contained"
                href="mailto:lakhaniy540@gmail.com"
                sx={{ ml: 1.5, px: 2.5, boxShadow: '0 2px 8px rgba(79,70,229,0.35)' }}
              >
                Hire me
              </Button>
            </Box>

            <IconButton
              onClick={() => setDrawer(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: '#111827' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}
        PaperProps={{ sx: { width: 260, p: 3 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>YL<Box component="span" sx={{ color: 'primary.main' }}>.</Box></Typography>
          <IconButton onClick={() => setDrawer(false)}><CloseIcon /></IconButton>
        </Box>
        <List disablePadding>
          {links.map(l => (
            <ListItemButton key={l} onClick={() => scrollTo(l)} sx={{ borderRadius: 2, mb: 0.5, fontWeight: 500, color: '#374151' }}>
              {l}
            </ListItemButton>
          ))}
        </List>
        <Button fullWidth variant="contained" href="mailto:lakhaniy540@gmail.com" sx={{ mt: 3 }}>
          Hire me
        </Button>
      </Drawer>
    </>
  )
}
