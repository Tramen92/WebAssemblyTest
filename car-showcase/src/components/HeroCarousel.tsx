'use client'
import React from "react";
import Slider from "react-slick"
import Image from "next/image"
import { Box } from "@mui/material"

const slides = [
  { src: "/carousel.jpeg", alt: "Showroom interno" },
  { src: "/car2.jpg", alt: "Auto 2" },
  { src: "/car3.jpg", alt: "Auto 3" },
]

export default function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    adaptiveHeight: true,
  }

  return (
    <Box sx={{ width: '100%', borderRadius: 2, overflow: 'hidden' }}>
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <Box key={i} sx={{ position: 'relative', width: '100%', height: { xs: 250, sm: 400, md: 600 } }}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={i === 0} // prima immagine caricata subito
            />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}