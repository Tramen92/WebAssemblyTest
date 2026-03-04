'use client'

import { useEffect, useState } from 'react'
import { Car } from '@/types/Car'
import CarCard from '@/components/CarCard'
import { getCars } from '@/lib/firestore'

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCars() {
      try {
        const data = await getCars()
        setCars(data)
      } catch (error) {
        console.error('Errore fetch auto:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  if (loading) return <p>Caricamento auto...</p>
  if (!cars.length) return <p>Nessuna auto disponibile al momento.</p>

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}