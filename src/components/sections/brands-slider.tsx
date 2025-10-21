"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

const brandLogos = [
  { name: "30 POL", src: "/Brand logos svg/30pol-08.svg" },
  { name: "Burning Altar", src: "/Brand logos svg/BURNING ALTAR-01.svg" },
  { name: "ChiCares", src: "/Brand logos svg/Chicares logo svg-16.svg" },
  { name: "Creamy Crumbles", src: "/Brand logos svg/Creamy Crumbles-25.svg" },
  { name: "Hebron & Sage", src: "/Brand logos svg/H&S LOGOS SVG-07.svg" },
  { name: "JRI", src: "/Brand logos svg/JRI LOGO SVG-06.svg" },
  { name: "MC Obed", src: "/Brand logos svg/MC OBED-01.svg" },
  { name: "Sallyz", src: "/Brand logos svg/SALLYZ-01.svg" },
  { name: "The Gospel Experience", src: "/Brand logos svg/TGE LOGO SVG-07.svg" },
  { name: "The Real Estate Chic", src: "/Brand logos svg/TREC LOGOS-02.svg" },
  { name: "Unpack It", src: "/Brand logos svg/UNPACK IT-01.svg" }
]

export function BrandsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brandLogos.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden" style={{
      backgroundImage: "url('/assets/whiteback.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      {/* Beautiful Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-blue-500/30 to-blue-700/40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <motion.div
          className="flex space-x-8 items-center"
          animate={{
            x: [0, -100 * brandLogos.length]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
            {/* Duplicate logos for seamless loop */}
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-64 h-32 sm:w-72 sm:h-36">
                  <Image
                    src={brand.src}
                    alt={`${brand.name} Logo`}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="288px"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-600/40 to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-600/40 to-transparent z-20" />
      </div>
    </section>
  )
}
