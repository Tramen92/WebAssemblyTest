'use client'

import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { car } from '@/types/car';
import Link from 'next/link';

export default function CarCard({ car }: { car: car }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 2, boxShadow: 3 }}>
      <Link href={`/cars/${car.id}`}>
        <CardMedia
          component="img"
          height={200}
          image={car.imageUrl}
          alt={`${car.brand} ${car.model}`}
          sx={{ objectFit: 'cover' }}
        />
      </Link>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">
          {car.brand} {car.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">{`Anno: ${car.year} | Km: ${car.km}`}</Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>{`€ ${car.price.toLocaleString()}`}</Typography>
      </CardContent>
    </Card>
  );
}