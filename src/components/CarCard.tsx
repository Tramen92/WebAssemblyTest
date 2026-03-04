'use client'

import { Car } from '@/types/Car'
import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material'
import Image from 'next/image'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export default function CarCard({ car }: { car: Car }) {
  return (
    <Card
      sx={{
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: 3,
        transition: 'all 0.3s ease',

        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 8,
        },

        '&:hover .image': {
          transform: 'scale(1.08)',
        },

        '&:hover .overlay': {
          opacity: 1,
        },

        '&:hover .content': {
          opacity: 1,
          transform: 'translateY(0)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
        }}
      >
        <Image
          src={car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          fill
          className="image"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
          }}
        />

        {/* Overlay */}
        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.4))',
            opacity: 0.5,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* Icona cliccabile */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'white',
            opacity: 0.8,
          }}
        >
          <ArrowOutwardIcon />
        </Box>

        {/* Contenuto hover */}
        <Box
          className="content"
          sx={{
            position: 'absolute',
            bottom: 24,
            left: 24,
            right: 24,
            color: 'white',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.4s ease',
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            {`${car.brand} ${car.model}`}
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
            {car.year}
            <br/>
            {car.kilometers.toLocaleString()} km
          </Typography>

          <Typography
            sx={{
              fontSize: '1.4rem',
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            € {car.price.toLocaleString()}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: '0.85rem',
              letterSpacing: 2,
              textTransform: 'uppercase',
              borderBottom: '1px solid white',
              display: 'inline-block',
              pb: 0.5,
            }}
          >
            Scopri di più
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}