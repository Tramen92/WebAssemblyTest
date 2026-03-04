'use client'

import { useEffect, useState } from 'react'
import { Box, Container, Grid, Typography, Icon } from '@mui/material'
import HeroCarousel from '@/components/HeroCarousel'
import CarCard from '@/components/CarCard'
import { getCars } from '@/lib/firestore'
import { Car } from '@/types/Car'
import { useAOS } from '@/hooks/useAOS'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import HandshakeIcon from '@mui/icons-material/Handshake'
import BuildIcon from '@mui/icons-material/Build'

export default function HomePage() {
  useAOS() // inizializza AOS

  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCars() {
      try {
        const data = await getCars()
        setCars(data.slice(0, 3)) // ultimi 3 arrivi
      } catch (error) {
        console.error('Errore fetch auto:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  return (
    <Box>

      {/* HERO SECTION */}
      <Box
        sx={{
          height: '70vh',
          background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('/hero.jpg') center/cover no-repeat`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center'
        }}
        data-aos="zoom-out"
      >
      </Box>

      {/* CHI SIAMO */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, sm:6 }} data-aos="fade-right">
            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>Passione e Dedizione</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Dal 1998 selezioniamo solo i migliori veicoli per i nostri clienti. Ogni auto nel nostro showroom ha una storia da raccontare e prestazioni da brivido da offrire.
            </Typography>
            <Typography variant="body1">
              Offriamo consulenza personalizzata, finanziamenti su misura e un servizio di post-vendita che ti farà sentire sempre in pole position.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm:6 }} data-aos="fade-left">
            <HeroCarousel />
          </Grid>
        </Grid>
      </Container>

      {/* VETRINA AUTO */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold' }} data-aos="fade-up">
          I Nostri Ultimi Arrivi
        </Typography>

        {loading ? (
          <Typography align="center">Caricamento auto...</Typography>
        ) : (
          <Grid container spacing={4} alignItems="stretch">
            {cars.map((car, i) => (
              <Grid size={{ xs: 12, sm:6, md: 4 }}
                key={car.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <CarCard car={car} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* SERVIZI */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }} data-aos="zoom-in" data-aos-delay={100}>
              <DirectionsCarIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Test Drive a Domicilio</Typography>
              <Typography variant="body2">Portiamo l'auto che desideri direttamente a casa tua per una prova senza impegno.</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }} data-aos="zoom-in" data-aos-delay={200}>
              <HandshakeIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Finanziamenti Rapidi</Typography>
              <Typography variant="body2">Collaboriamo con le migliori finanziarie per offrire approvazioni rapide e tassi agevolati.</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: 'center' }} data-aos="zoom-in" data-aos-delay={300}>
              <BuildIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Officina Autorizzata</Typography>
              <Typography variant="body2">La nostra officina è pronta a prendersi cura del tuo veicolo anche dopo l'acquisto.</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  )
}